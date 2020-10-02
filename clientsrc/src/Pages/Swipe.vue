<template>
  <div class="swipe container-fluid">
    <div class="row justify-content-around">
      <div class="col-2">
        <i class="fa fa-minus" aria-hidden="true"></i>
      </div>
      <swipe-card-comp
        v-for="animal in animals"
        :key="animal.id"
        :animalProp="animal"
      />
      <div class="col-2">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
import SwipeCardComp from "../components/SwipeCardComp.vue";
export default {
  name: "component",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getResource", {
      path: "animals",
      resource: "animals",
    });
  },
  computed: {
    animals() {
      return this.$store.state.animals;
    },
  },
  methods: {},
  components: {
    SwipeCardComp,
  },
};
</script>

<style scoped></style>
