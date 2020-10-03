<template>
  <div class="about text-center">
    <h3>
      <b> Welcome to Pet Pals {{ profile.name }}!</b>
    </h3>
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
      <h3>Profile Information</h3>
      <p>Email: {{ profile.email }}</p>

      <!-- <p v-show="profile.search.city !== null">City: {{ profile.search.city }}</p>
      <p v-show="profile.search.state !== null">
        State: {{ profile.search.state }}
      </p>
      <p v-show="profile.search.zip !== null">
        ZipCode: {{ profile.search.zip }}
      </p>

      <p v-show="profile.search.cat == true">Preference: Cat</p>
      <p v-show="profile.search.dog == true">Preference: Dog</p>
      <p v-show="hasOrg == true">Member of {{ profile.hasOrg }} Orginization</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  mounted() {},
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    edit() {
      this.$store.dispatch("edit", {
        getPath: "profile",
        path: "profile",
        data: { profile },
        resource: "profile",
      });
      this.edit = {};
      this.editToggle = false;
    },
  },
};
</script>

<style scoped>
</style>
