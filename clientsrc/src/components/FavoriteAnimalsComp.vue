<template>
  <div class="container-fluid">
    <div class="row">
      <div class="fav-pets text-center justify-content-center col-12">
        <router-link
          :to="{
            name: 'PetDetails',
            params: { id: favAnimalProp.animalId.id },
          }"
        >
          <p>{{ favAnimalProp.animalId.name }}</p>

          <img :src="favAnimalProp.animalId.photos[0].full" alt="pet" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "favorite-animals-component",
  props: ["favAnimalProp"],
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

<style>
.fav-pets img {
  max-width: 35vh;
  max-height: 30vh;
}
</style>
