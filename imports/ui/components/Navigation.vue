<template>
  <header class="header navbar-expand-lg">
    <nav class="navbar">
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item" v-if="!user">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <router-link to="/emergencies">Emergencies</router-link>
          </li>
        </ul>
        <div class="user-details relative" v-if="user">
          <Transition name="fade">
            <LoadingSpinner class="small-spinner" v-if="isLoggingOut" />
          </Transition>
          <button class="btn btn-secondary" @click="logout">Logout</button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { Meteor } from "meteor/meteor";
import LoadingSpinner from "./UI/LoadingSpinner.vue";
export default {
  methods: {
    logout() {
      Meteor.logout((e) => {
        if (!e) {
          this.$router.replace("/");
        }
      });
    },
  },
  meteor: {
    user() {
      return Meteor.user();
    },
    isLoggingOut() {
      return Meteor.loggingOut();
    },
  },
  components: { LoadingSpinner },
};
</script>
