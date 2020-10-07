<template>
  <div class="container-fluid">
    <div class="col-12 text-center">
      <h3 class="m-2">
        <b> Welcome to PetPals {{ profile.name }}!</b>
      </h3>
    </div>
    <div class="col-12 text-center">
      <img
        v-show="profile.search.cat == false && profile.search.dog == false"
        class="rounded shadow-lg cat-pic"
        src="https:/png.pngtree.com/png-vector/20190330/ourlarge/pngtree-continuous-line-drawing-of-minimalist-cat-animals-png-image_895421.jpg"
        alt="cat"
      />
      <img
        v-show="profile.search.cat == true"
        class="rounded shadow-lg cat-pic"
        src="https:/png.pngtree.com/png-vector/20190330/ourlarge/pngtree-continuous-line-drawing-of-minimalist-cat-animals-png-image_895421.jpg"
        alt="cat"
      />
      <img
        v-show="profile.search.dog == true"
        class="rounded shadow-lg dog-pic"
        src="https://cdn.shopify.com/s/files/1/0017/9578/4765/products/299_1200x1200.jpg?v=1563980443"
        alt="dog"
      />
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
    <div class="col-12 card">
      <favorite-animals-comp
        class="fav-pets-card text-center"
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
.cat-pic {
  width: 40vw;
  margin-top: 2vh;
  border-radius: 25%;
}
.dog-pic {
  width: 40vw;
  margin-top: 2vh;
  border-radius: 25%;
}
</style>
