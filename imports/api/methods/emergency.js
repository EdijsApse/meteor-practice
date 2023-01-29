import { UserEmergenciesCollection } from "../collections/UserEmergenciesCollection";
import { Meteor } from "meteor/meteor";

Meteor.methods({
  createEmergency(payload) {
    const { description, emergency } = payload;

    const user = Meteor.user();

    if (!this.userId) {
      throw new Meteor.Error(403, "Not authorized.");
    }

    const activeEmergency = UserEmergenciesCollection.findOne({
      isActive: true,
    });
    if (activeEmergency) {
      throw new Meteor.Error(500, "Active emergency found!");
    }

    UserEmergenciesCollection.insert({
      emergency,
      isActive: true,
      isCompleted: false,
      isCanceled: false,
      description,
      responsder: null,
      respondedAt: null,
      createdAt: new Date(),
      user: {
        _id: user._id,
        email: user.emails[0].address,
      },
    });
  },
  cancelEmergency(payload) {
    const { emergencyId } = payload;

    const emergency = UserEmergenciesCollection.findOne({
      "user._id": this.userId,
      _id: emergencyId,
      isActive: true,
    });

    if (!emergency) {
      throw new Meteor.Error(404, "Active emergency not found!");
    }

    UserEmergenciesCollection.update(
      { _id: emergencyId },
      {
        $set: {
          isActive: false,
          isCanceled: true,
        },
      }
    );
  },
  respondToEmergency(payload) {
    const { emergencyId } = payload;

    const emergency = UserEmergenciesCollection.findOne({
      _id: emergencyId,
      isActive: true,
      "user._id": {
        $ne: this.userId,
      },
    });

    const user = Meteor.user();

    if (!emergency) {
      throw new Meteor.Error(404, "Active emergency not found!");
    }

    UserEmergenciesCollection.update(
      { _id: emergencyId },
      {
        $set: {
          isActive: false,
          isCompleted: true,
          respondedAt: new Date(),
          responsder: {
            _id: user._id,
            email: user.emails[0].address,
          },
        },
      }
    );
  },
});
