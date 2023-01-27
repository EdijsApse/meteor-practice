<template>
  <BaseCard class="auth-form-card">
    <h1>Sign In</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" class="form-control" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" class="form-control" />
      </div>
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
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {}
  }
};
</script>
