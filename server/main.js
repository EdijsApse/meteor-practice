import "../imports/api/methods";
import "../imports/api/publications";
import { EmergenciesCollection } from "../imports/api/collections/EmergenciesCollection";
import { UserEmergenciesCollection } from "../imports/api/collections/UserEmergenciesCollection";
import { Meteor } from "meteor/meteor";

const DEFAULT_COLLECTIONS = [
  "Medical Emergency",
  "Fire Alarm",
  "Public Disturbance",
  "Armed Assulat",
  "Other",
];

const insertEmergencyType = (type) => {
  EmergenciesCollection.insert({
    type,
  });
};

Meteor.startup(() => {
  if (EmergenciesCollection.find().count() === 0) {
    DEFAULT_COLLECTIONS.forEach(insertEmergencyType);
  }
});
