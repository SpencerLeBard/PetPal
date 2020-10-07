<template>
  <div class="container-fluid">
    <div class="col-12 text-center">
      <h3 class="m-2">
        <b> Welcome to PetPals {{ profile.name }}!</b>
      </h3>
    </div>
    <div class="col-12 profile-card card shadow-lg text-center">
      <h3>
        Profile Information
        <i
          @click="editToggle = !editToggle"
          class="fa fa-pencil"
          aria-hidden="true"
        ></i>
      </h3>
      <p>Name: {{ profile.name }}</p>
      <p>Email: {{ profile.email }}</p>
      <p>State: {{ profile.search.state }}</p>

      <p v-if="profile.search.cat == true">Preference: Cat</p>
      <p v-if="profile.search.dog == true">Preference: Dog</p>
      <p v-if="profile.search.cat == false && profile.search.dog == false">
        No Animal Preference
      </p>
      <p v-if="profile.hasOrg == false">
        (Not affiliated with any organization)
      </p>
    </div>
    <div class="col-12 card fav-pets-card text-center">
      <h3>Favorite Animals</h3>
      <br />
      <favorite-animals-comp
        v-for="favAnimal in favoriteAnimals"
        :key="favAnimal.animalId"
        :favAnimalProp="favAnimal"
      />
      <!-- NOTE <OrganizationComp
      class="org-card text-center card"
      v-show="profile.hasOrg == true"
    /> // ROUGH DRAFT COMPS NOT DONE //-->
    </div>

  </div>
</template>

<script>
import OrganizationComp from "../components/OrganizationComp.vue";
import FavoriteAnimalsComp from "../components/FavoriteAnimalsComp.vue";
export default {
  name: "Profile",
  mounted() {
    this.$store.dispatch("getProfile", this.$route.params.profile);
    this.$store.dispatch(
      "getFavorites",
      this.$route.params.profile + "/favorites"
    );
  },
  date() {
    return {
      editToggle: false,
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    favoriteAnimals() {
      return this.$store.state.favorites;
    },
  },
  methods: {
    editProfile() {
      this.$store.dispatch("edit", {
        getPath: "profile",
        path: "profile",
        data: this.profileEdit,
        resource: "profile",
      });
    },
  },
  components: {
    OrganizationComp,
    FavoriteAnimalsComp,
  },
};
</script>

<style scoped>
.profile-card {
  margin-top: 3vh;
  width: 92vw;
  padding: 10px;
  border-radius: 25px;
  /* background: #569dde; // NOTE neumorphic styling example commented out //
  box-shadow: 22px 22px 44px #3e71a0, -22px -22px 44px #6ec9ff; */
}
.fav-pets-card {
  margin-top: 3vh;
  width: 92vw;
  padding-top: 5px;
  border-radius: 25px;
}
.profile {
  height: 80vh;
  overflow-y: scroll;
}
</style>
