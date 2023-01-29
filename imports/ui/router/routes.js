import Auth from "../pages/Auth";
import Emergencies from "../pages/Emergencies";
import UserEmergencies from "../pages/UserEmergencies";

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
  },
  {
    path: "/user-emergencies",
    component: UserEmergencies,
    meta: {
      forUserOnly: true
    }
  }
];
