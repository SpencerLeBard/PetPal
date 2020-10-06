<template>
  <div class="swipe container-fluid" v-if="profile.id">
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
          <div class="swipe-card-component col-10">
            <div
              class="card m-2 d-flex"
              v-bind:style="{
                backgroundColor: 'black',
                backgroundImage:
                  'url(' + this.activeAnimal.photos[0].full + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                height: '56vh',
              }"
            >
              <div
                class="card-body d-flex align-items-end"
                v-bind:style="{
                  color: 'Linen',
                  fontSize: '18pt',
                  textShadow: '1px 1px black',
                }"
              >
                {{ this.activeAnimal.name }}, {{ this.activeAnimal.age }}
                <br />
                {{ this.activeAnimal.gender }}
              </div>
            </div>
          </div>
        </Vue2InteractDraggable>
      </div>
      <!-- <div class="col-2 text-left">
        <i class="fa fa-plus" @click="likePet" aria-hidden="true"></i>
      </div> -->
    </div>
  </div>
  <div v-else>
    <h1>Loading.......</h1>
  </div>
</template>

<script>
import SwipeCardComp from "../components/SwipeCardComp.vue";
import { Vue2InteractDraggable } from "vue2-interact";
import { onAuth } from "@bcwdev/auth0-vue";
import router from "../router";
export default {
  name: "Swipe",
  data() {
    return {
      isVisible: true,
      interactLockSwipeUp: true,
      interactLockSwipeDown: true,
    };
  },
  mounted() {},

  computed: {
    activeAnimal() {
      return (this.$store.state.activeAnimal = this.$store.state.animals[0]);
    },
    animals() {
      return this.$store.state.animals;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
  watch: {
    profile: function(userProfile) {
      if (userProfile.search.state) {
        this.$store.dispatch("getResource", {
          path:
            "animals?contact.address.state=" +
            userProfile.search.state +
            "&species=Cat",
          resource: "animals",
        });
      } else {
        router.push({ name: "Home" });
      }
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
