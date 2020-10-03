<template>
  <div class="swipe container-fluid">
    <div class="row justify-content-between align-items-center cardRow">
      <div class="col-2 text-right">
        <i class="fa fa-minus" @click="next" aria-hidden="true"></i>
      </div>
      <swipe-card-comp />
      <div class="col-2 text-left">
        <i class="fa fa-plus" @click="next" aria-hidden="true"></i>
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
<style scoped>
.cardRow {
  height: 78vh;
}
</style>
