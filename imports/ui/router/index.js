import VueRouter from "vue-router";
import routes from "./routes";
import { Meteor } from "meteor/meteor";

const router = new VueRouter({
  mode: "history",
  routes,
});

const refreshUser = new Promise((resolve) => {
  const userId = Meteor.userId();
  if (!userId) {
    resolve();
  } else {
    setInterval(() => {
      const isLoggingIn = Meteor.loggingIn();
      if (!isLoggingIn) {
        resolve();
      }
    }, 100);
  }
});

router.beforeEach(async (to, from, next) => {
  await refreshUser;

  const user = Meteor.user();
  if (to.meta.forUserOnly && !user) {
    return next("/");
  }
  if (to.meta.forGuestOnly && user) {
    return next("/emergencies");
  }
  next();
});

export default router;
