<template>
  <div class="profile container-fluid">
    <div class="col-12 text-center">
      <h3 class="m-2">
        <b> Welcome to PetPals {{ profile.name }}!</b>
      </h3>
    </div>
    <div class="col-12 profile-card card shadow-lg text-center">
      <h3>
        Profile Information
        <span data-toggle="modal" data-target="#editProfileModal"
          ><i class="fa fa-pencil text-warning " aria-hidden="true"></i
        ></span>
      </h3>
      <!-- Modal for editing profile info -->
      <div
        class="modal fade"
        id="editProfileModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content text-light">
            <div class="modal-header bg-primary">
              <h5 class="modal-title text-light" id="exampleModalLabel">
                Edit Profile Info
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="editProfile">
              <input
                class="form-control w-75 my-2 ml-5"
                type="text"
                placeholder="Your name... "
                v-model="profileData.name"
                required
              />
              <input
                class="form-control w-75 my-2 ml-5"
                type="text"
                placeholder="City..."
                v-model="profileData.search.city"
              />
              <input
                class="form-control w-75 my-2 ml-5"
                type="text"
                placeholder="State..."
                v-model="profileData.search.state"
              />
              <input
                class="form-control w-75 my-2 ml-5"
                type="text"
                placeholder="Zipcode..."
                v-model="profileData.search.zip"
              />
              <div class="form-row">
                <div class="col-4 d-flex justify-content-end">
                  <p class="text-dark">Show me...</p>
                </div>
                <div class="col-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="profileData.search.dog"
                      value="true"
                      id="dogCheck"
                    />
                    <label
                      class="form-check-label text-dark"
                      for="defaultCheck1"
                    >
                      Dogs
                    </label>
                  </div>
                </div>
                <div class="col-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="profileData.search.cat"
                      value=""
                      id="catCheck"
                    />
                    <label
                      class="form-check-label text-dark"
                      for="defaultCheck2"
                    >
                      Cats
                    </label>
                  </div>
                </div>
              </div>

              <div class="modal-footer justify-content-center">
                <button type="submit" class="btn btn-danger">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <p>Name: {{ profile.name }}</p>
      <p>Email: {{ profile.email }}</p>
      <p v-if="profile.search.city">City: {{ profile.search.city }}</p>
      <p>State: {{ profile.search.state }}</p>
      <p v-if="profile.search.zipcode">Zip: {{ profile.search.zipcode }}</p>

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
  data() {
    return {
      editToggle: true,
      profileData: {
        name: "",
        search: {
          cat: null,
          dog: null,
          city: "",
          state: "",
          zip: 12345,
        },
      },
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
        path: "profile/" + this.profile.id,
        data: this.profileData,
        resource: "profile",
      });
      $("#editProfileModal").hide();
      $(".modal-backdrop").hide();
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
