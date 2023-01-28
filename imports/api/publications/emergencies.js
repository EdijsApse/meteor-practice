import { Meteor } from "meteor/meteor";
import { EmergenciesCollection } from "../collections/EmergenciesCollection";

Meteor.publish("emergencies", function publishEmergencies() {
  return EmergenciesCollection.find();
});
