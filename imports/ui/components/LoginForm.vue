<template>
  <BaseCard class="auth-form-card relative">
    <Transition name="fade">
      <LoadingSpinner v-if="isLoggingIn" />
    </Transition>
    <h1 class="page-title">Sign In</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" class="form-control" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" class="form-control" />
      </div>
      <Transition name="fade">
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </Transition>
      <div class="auth-actions">
        <button class="btn btn-primary" type="submit">Sign in</button>
        <p class="clickable" @click="$emit('showRegisterForm')">
          Create account
        </p>
      </div>
    </form>
  </BaseCard>
</template>

<script>
import { Meteor } from "meteor/meteor";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    login() {
      this.errorMessage = "";
      Meteor.loginWithPassword(this.email, this.password, (e) => {
        if (e && e.reason) {
          this.errorMessage = e.reason;
        } else if (!e) {
          this.$router.replace("/emergencies");
        }
      });
    },
  },
  meteor: {
    isLoggingIn() {
      return Meteor.loggingIn();
    },
  },
};
</script>
