<template>
  <div class="fav-pets">
    <p>{{ favAnimalProp.name }}</p>
  </div>
</template>

<script>
export default {
  name: "favorite-pets-component",
  // props: [favAnimalProp], NOTE UNCOMMENT
  data() {
    return {};
  },
  methods: {
    profile() {
      return this.$store.state.profile;
    },
  },
};
</script>

<style></style>
