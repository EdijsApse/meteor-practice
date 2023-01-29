import { Meteor } from "meteor/meteor";
import { EmergenciesCollection } from "../collections/EmergenciesCollection";
import { UserEmergenciesCollection } from "../collections/UserEmergenciesCollection";

Meteor.publish("emergencies", function publishEmergencies() {
  return EmergenciesCollection.find();
});

Meteor.publish("activeEmergency", () => {
  return UserEmergenciesCollection.find({ isActive: true });
});

Meteor.publish("userEmergencies", () => {
  return UserEmergenciesCollection.find({}, { sort: { createdAt: -1 } });
});
