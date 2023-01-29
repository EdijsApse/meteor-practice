<template>
  <BaseCard>
    <table class="table">
      <thead>
        <th>Type</th>
        <th>Created By</th>
        <th>Status</th>
        <th>Responder</th>
        <th>Created</th>
        <th>Responded</th>
      </thead>
      <tbody>
        <UserEmergencyTableItem
          v-for="emergency in userEmergencies"
          :key="emergency._id"
          :emergency="emergency"
        />
      </tbody>
    </table>
  </BaseCard>
</template>

<script>
import { UserEmergenciesCollection } from "../../api/collections/UserEmergenciesCollection";
import UserEmergencyTableItem from "./UserEmergencyTableItem.vue";

export default {
  meteor: {
    $subscribe: {
      userEmergencies: [],
    },
    userEmergencies() {
      return UserEmergenciesCollection.find();
    },
  },
  components: { UserEmergencyTableItem },
};
</script>
