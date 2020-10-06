<template>
  <div class="swipe container-fluid">
    <div class="row align-items-center justify-content-center cardRow">
      <!-- <div class="col-2 text-right">
        <i class="fa fa-minus" @click="nextPet" aria-hidden="true"></i>
      </div> -->
      <div>
        <Vue2InteractDraggable
          v-if="isVisible"
          :interact-out-of-sight-x-coordinate="400"
          :interact-max-rotation="15"
          :interact-x-threshold="200"
          :interact-y-threshold="200"
          :interact-lock-swipe-down="interactLockSwipeDown"
          :interact-lock-swipe-up="interactLockSwipeUp"
          @draggedRight="right"
          @draggedLeft="left"
        >
          <swipe-card-comp
            class="swipeCard"
            v-hammer:swipe.left.right="onSwipe"
          />
        </Vue2InteractDraggable>
      </div>
      <!-- <div class="col-2 text-left">
        <i class="fa fa-plus" @click="likePet" aria-hidden="true"></i>
      </div> -->
    </div>
  </div>
</template>

<script>
import SwipeCardComp from "../components/SwipeCardComp.vue";
import { Vue2InteractDraggable } from "vue2-interact";
export default {
  name: "component",
  data() {
    return {
      isVisible: true,
      interactLockSwipeUp: true,
      interactLockSwipeDown: true,
    };
  },
  mounted() {
    this.$store.dispatch("getResource", {
      path:
        "animals?contact.address.state=" +
        this.profile.search.state +
        "&species=Cat",
      resource: "animals",
    });
  },
  computed: {
    animals() {
      return this.$store.state.animals;
    },
    profile() {
      return this.$store.state.profile;
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
      console.log("i like this pet");
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
    right() {
      setTimeout(() => (this.isVisible = false), 100);
      setTimeout(() => {
        this.index++;
        this.isVisible = true;
      }, 200);
    },
    left() {
      setTimeout(() => (this.isVisible = false), 100);
      setTimeout(() => {
        this.index++;
        this.isVisible = true;
      }, 200);
    },
  },
  components: {
    SwipeCardComp,
    Vue2InteractDraggable,
  },
};
</script>
<style scoped>
.cardRow {
  height: 78vh;
}
.fixed {
  position: fixed;
}
</style>
