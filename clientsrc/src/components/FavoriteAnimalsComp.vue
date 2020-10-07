<template>
  <div class="fav-pets">
    <!-- <router-link
      class="card bg-primary rounded"
      :to="{name:'favorite-animals', params:{animalId: favAnimalsProp.id}}"
    > -->
    <!-- <p v-if="favAnimalsProp.value">No Favorite Animals :(</p> -->
    <p>{{ favAnimalProp.animalId.name }}</p>
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

<style></style>
