<template>
  <div class="swipe container-fluid" v-if="profile.id">
    <div class="row">
      <div
        class="col-12 d-flex justify-content-around align-items-center mt-4 mb-2"
      >
        <div class="text-left p-0">
          <img src="../assets/brokenheart.png" @click="nextPet" alt="" />
        </div>

        <div class="text-left p-0">
          <img src="../assets/arrow.png" class="swipeArrow" alt="" />
        </div>

        <div class="text-left p-0">
          <img src="../assets/heart.png" @click="likePet" alt="" />
        </div>
      </div>
      <div class="col-12">
        <div class="row align-items-center justify-content-center cardRow">
          <div>
            <Vue2InteractDraggable
              v-hammer:swipe.left.right="onSwipe"
              v-if="isVisible"
              :interact-out-of-sight-x-coordinate="330"
              :interact-max-rotation="15"
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
        </div>
      </div>
    </div>
  </div>
  <section v-else class="container-fluid swipe">
    <article class="row">
      <div
        class="col-12 d-flex justify-content-center flex-wrap align-content-center swipe"
      >
        <i class="paw-loading fa fa-paw fa-spin" aria-hidden="true"></i>
      </div>
    </article>
  </section>
</template>

<script>
// import SwipeCardComp from "../components/SwipeCardComp.vue";
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
      favAnimal: {},
    };
  },
  mounted() {
    this.$store.dispatch("getResource", {
      path: "animals?contact.address.state=" + userProfile.search.state,
      resource: "animals",
    });
  },

  computed: {
    activeAnimal() {
      return this.$store.state.activeAnimal;
    },
    animals() {
      return this.$store.state.animals;
    },
    profile() {
      return this.$store.state.profile;
    },
    favorites() {
      return this.$store.state.favorites;
    },
  },
  watch: {
    profile: function (userProfile) {
      if (userProfile.search.state) {
        this.$store.dispatch("getResource", {
          path: "animals?contact.address.state=" + userProfile.search.state,
          // "&species=" +
          // userProfile.search.cat +
          // "&speciees=" +
          // userProfile.search.dog,
          resource: "animals",
        });
      } else {
        router.push({ name: "Home" });
      }
    },
    animals: function (animals) {
      if (animals[0].name) {
        this.$store.dispatch("setActive", animals[0]);
      } else {
        console.error("this aint working");
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
      this.$store.dispatch("setActive", animals[0]);
    },
    likePet() {
      let activeAnimal = this.$store.state.activeAnimal;
      this.favAnimal.animalId = activeAnimal.id;
      this.$store.dispatch("addFavorite", {
        path: "profile/favorites",
        data: this.favAnimal,
        resource: "profile",
      });
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
    // SwipeCardComp,
    Vue2InteractDraggable,
  },
};
</script>
<style scoped>
.card {
  width: 37vh;
}
.cardRow {
  height: 65vh;
}
.fixed {
  position: fixed;
}
.swipe {
  height: 80vh;
  overflow-y: scroll;
}
.paw-loading {
  font-size: 4rem;
}
.swipeArrow {
  max-width: 3vw;
}
img {
  max-height: 5vh;
}
</style>
