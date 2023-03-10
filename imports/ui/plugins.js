import Vue from "vue";
import VueMeteorTracker from "vue-meteor-tracker";
import VueRouter from "vue-router";
import BaseCard from "./components/UI/BaseCard.vue";
import BasePage from "./components/UI/BasePage.vue";
import BaseContainer from "./components/UI/BaseContainer.vue";
import LoadingSpinner from "./components/UI/LoadingSpinner.vue";

Vue.component("BaseContainer", BaseContainer);
Vue.component("BaseCard", BaseCard);
Vue.component("BasePage", BasePage);
Vue.component("LoadingSpinner", LoadingSpinner);

Vue.use(VueRouter);
Vue.use(VueMeteorTracker);

Vue.filter("dateFilter", (date) => {
  if (!date) {
    return "-";
  }
  return new Date(date).toLocaleDateString("lv-LV", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
});
