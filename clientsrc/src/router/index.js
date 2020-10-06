import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../Pages/Home.vue";
// @ts-ignore
import Profile from "../Pages/Profile.vue";
// @ts-ignore
import Swipe from "../Pages/Swipe.vue";
// @ts-ignore
import PetDetails from "../Pages/PetDetails.vue";
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
    hasProfile,
  },
  {
    path: "/swipepage",
    name: "Swipe",
    component: Swipe,
    beforeEnter: authGuard,
  },
  {
    path: "/petdetails",
    name: "PetDetails",
    component: PetDetails,
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  routes,
});
function hasProfile(to, from, next) {
  const profile = this.$store.state.profile;
  if (profile) {
    to({ name: "Swipe" });
  } else {
    next({ name: "Home" });
  }
}

export default router;
