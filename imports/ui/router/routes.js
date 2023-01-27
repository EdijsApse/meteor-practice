import Auth from "../pages/Auth";
import Emergencies from "../pages/Emergencies";

export default [
  {
    path: "/",
    component: Auth,
    meta: {
      forGuestOnly: true
    }
  },
  {
    path: "/emergencies",
    component: Emergencies,
    meta: {
      forUserOnly: true
    }
  }
];
