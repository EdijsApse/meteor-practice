<template>
  <BasePage class="box-centered">
    <Transition name="slide" mode="out-in">
      <LoginForm
        v-if="isLoginFormVisible"
        @showRegisterForm="showRegisterFormHandler"
      />
      <RegisterForm
        v-if="isRegisterFormVisible"
        @showLoginForm="showLoginFormHandler"
      />
    </Transition>
  </BasePage>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";

const LOGIN_FORM_VISIBLE = "LOGIN_FORM_VISIBLE";
const REGISTER_FORM_VISIBLE = "REGISTER_FORM_VISIBLE";

export default {
  data() {
    return {
      visibleForm: LOGIN_FORM_VISIBLE,
    };
  },
  computed: {
    isLoginFormVisible() {
      return this.visibleForm === LOGIN_FORM_VISIBLE;
    },
    isRegisterFormVisible() {
      return this.visibleForm === REGISTER_FORM_VISIBLE;
    },
  },
  components: {
    LoginForm,
    RegisterForm,
  },
  methods: {
    showRegisterFormHandler() {
      this.visibleForm = REGISTER_FORM_VISIBLE;
    },
    showLoginFormHandler() {
      this.visibleForm = LOGIN_FORM_VISIBLE;
    },
  },
};
</script>
