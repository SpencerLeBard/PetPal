<template>
  <div class="swipe container-fluid">
    <div class="row justify-content-around">
      <div class="col-2">
        <i class="fa fa-minus" aria-hidden="true"></i>
      </div>
      <swipe-card-comp
        v-for="animal in animals"
        :key="animal"
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
    this.methods.next();
  },
  computed: {
    animals() {
      return this.$store.state.animals;
    },
    activeAnimal() {
      return this.$store.state.activeAnimal;
    },
  },
  methods: {
    next() {
      let animals = this.$store.state.animals;
      let activeAnimal = this.$store.state.activeAnimal;
      if (activeAnimal == undefined) {
        activeAnimal = animals[0];
      }
      animals.shift();
      activeAnimal = animals[0];
    },
  },
  components: {
    SwipeCardComp,
  },
};
</script>

<style scoped></style>
