<template>
  <BasePage class="emergencies-page">
    <BaseContainer>
      <h1 class="page-title">Emergencies</h1>
      <EmergencyList />
    </BaseContainer>
  </BasePage>
</template>

<script>
import EmergencyList from "../components/EmergencyList.vue";

export default {
  components: {
    EmergencyList,
  },
};
</script>
