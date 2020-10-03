<template>
  <div class="swipe container-fluid">
    <div class="row justify-content-center align-items-center cardRow">
      <!-- <div class="col-2 text-right">
        <i class="fa fa-minus" @click="nextPet" aria-hidden="true"></i>
      </div> -->
      <swipe-card-comp class="swipeCard" v-hammer:swipe.left.right="onSwipe" />
      <!-- <div class="col-2 text-left">
        <i class="fa fa-plus" @click="likePet" aria-hidden="true"></i>
      </div> -->
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
    nextPet() {
      let animals = this.$store.state.animals;
      let activeAnimal = this.$store.state.activeAnimal;
      if (activeAnimal == undefined) {
        activeAnimal = animals[0];
      }
      animals.shift();
      activeAnimal = animals[0];
    },
    likePet() {
      let activeAnimal = this.$store.state.activeAnimal;
      let id = activeAnimal.id;
      console.log("likePet response");
      this.nextPet();
    },
    onSwipe(event) {
      console.log(event.type);
      if (event.type == "swipeleft") {
        this.nextPet();
      } else {
        this.likePet();
      }
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
.swipeCard {
}
</style>
