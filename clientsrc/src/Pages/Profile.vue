<template>
  <div class="about text-center">
    <h3 class="m-2">
      <b> Welcome to Pet Pals {{ profile.name }}!</b>
    </h3>
    <img class="rounded" src="http://www.fillmurray.com/200/300" alt="cat" />
    <!-- <img
      v-show="profile.search.cat == true"
      class="rounded"
      src="https:/png.pngtree.com/png-vector/20190330/ourlarge/pngtree-continuous-line-drawing-of-minimalist-cat-animals-png-image_895421.jpg"
      alt="cat"
    />
    <img
      v-show="profile.search.dog == true"
      class="rounded"
      src="https://cdn.shopify.com/s/files/1/0017/9578/4765/products/299_1200x1200.jpg?v=1563980443"
      alt="dog"
    /> -->
    <div class="profile-card card">
      <h3>
        Profile Information
        <i
          @click="editToggle = !editToggle"
          class="fa fa-pencil"
          aria-hidden="true"
        ></i>
      </h3>
      <p>Email: {{ profile.email }}</p>
      <!-- <p>State: {{ profile.search.state }}</p>

      <p v-if="profile.search.cat == true">Preference: Cat</p>
      <p v-if="profile.search.dog == true">Preference: Dog</p>
      <-- <p v-if="hasOrg == true">Member of: {{ profile.hasOrg }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  mounted() {},
  date() {
    return {
      editToggle: false,
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
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
};
</script>

<style scoped>
.profile-card {
  margin-top: 3vh;
  margin-left: 4vw;
  width: 92vw;
  padding: 10px;
}
</style>
