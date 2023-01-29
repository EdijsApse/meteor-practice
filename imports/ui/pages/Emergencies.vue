<template>
  <BasePage class="page emergencies-page">
    <BaseContainer v-if="!activeEmergency">
      <h1 class="page-title">Emergencies</h1>
      <EmergencyList />
    </BaseContainer>
    <ActiveEmergency v-else :emergency="activeEmergency" />
  </BasePage>
</template>

<script>
import EmergencyList from "../components/EmergencyList.vue";
import ActiveEmergency from "../components/ActiveEmergency.vue";

import { UserEmergenciesCollection } from "../../api/collections/UserEmergenciesCollection";

export default {
  meteor: {
    $subscribe: {
      activeEmergency: [],
    },
    activeEmergency() {
      return UserEmergenciesCollection.findOne();
    },
  },
  components: {
    EmergencyList,
    ActiveEmergency,
  },
};
</script>
