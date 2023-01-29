<template>
    <BasePage class="page emergencies-list-page">
      <BaseContainer>
        <h1 class="page-title">Created Emergencies</h1>
        <UserEmergenciesList />
      </BaseContainer>
    </BasePage>
  </template>
  
  <script>
  import UserEmergenciesList from "../components/UserEmergenciesList.vue";  
  
  export default {
    components: {
        UserEmergenciesList,
    },
  };
  </script>
  