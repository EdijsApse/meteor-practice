<template>
  <div class="emergencies-list relative">
    <Transition name="fade">
      <LoadingSpinner v-if="!$subReady.emergencies" />
    </Transition>
    <EmergencyItem
      v-for="emergency in emergencies"
      :key="emergency._id"
      :emergency="emergency"
      @click="selectedEmergency = emergency"
    />
    <Transition name="fade">
      <CreateEmergencyModal
        v-if="selectedEmergency"
        :emergency="selectedEmergency"
        @close="selectedEmergency = null"
      />
    </Transition>
  </div>
</template>

<script>
import { EmergenciesCollection } from "../../api/collections/EmergenciesCollection";
import EmergencyItem from "./EmergencyItem.vue";
import CreateEmergencyModal from "./CreateEmergencyModal.vue";
import LoadingSpinner from "./UI/LoadingSpinner.vue";
export default {
  data() {
    return {
      selectedEmergency: null,
    };
  },
  meteor: {
    $subscribe: {
      emergencies: [],
    },
    emergencies() {
      return EmergenciesCollection.find().fetch();
    },
  },
  components: { EmergencyItem, CreateEmergencyModal, LoadingSpinner },
};
</script>
