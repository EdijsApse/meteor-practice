import Vue from "vue";
import VueMeteorTracker from "vue-meteor-tracker";
import VueRouter from "vue-router";
import BaseCard from "./components/UI/BaseCard.vue";
import BasePage from "./components/UI/BasePage.vue";
import LoadingSpinner from "./components/UI/LoadingSpinner.vue";

Vue.component("BaseCard", BaseCard);
Vue.component("BasePage", BasePage);
Vue.component("LoadingSpinner", LoadingSpinner);

Vue.use(VueRouter);
Vue.use(VueMeteorTracker);
