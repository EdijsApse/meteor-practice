<template>
  <BaseCard class="auth-form-card relative">
    <Transition name="fade">
      <LoadingSpinner v-if="isLoggingIn" />
    </Transition>
    <h1>Create Account</h1>
    <form @submit.prevent="register">
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
        <button class="btn btn-primary" type="submit">Register</button>
        <p class="clickable" @click="$emit('showLoginForm')">Sign In</p>
      </div>
    </form>
  </BaseCard>
</template>

<script>
import { Accounts } from "meteor/accounts-base";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    register() {
      this.errorMessage = "";
      Accounts.createUser(
        {
          email: this.email,
          password: this.password,
        },
        (err) => {
          if (err && err.reason) {
            this.errorMessage = err.reason;
          } else if (!err) {
            this.$router.replace("/emergencies");
          }
        }
      );
    },
  },
  meteor: {
    isLoggingIn() {
      return Meteor.loggingIn();
    },
  },
};
</script>
