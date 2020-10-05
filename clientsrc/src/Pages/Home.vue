<template>
  <div class="container-fluid getStarted">
    <div class="row">
      <div class="col-12 d-flex flex-column h-100 text-center">
        <p class="text-light mt-5">
          Welcome to PetPal! Lets grab some basic info before we find your new
          best friend
        </p>
        <form class="form reposition" @submit.prevent="getStarted">
          <transition
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutLeft"
            mode="out-in"
          >
            <input
              required
              v-if="question === 1"
              type="text"
              class="form-control"
              v-model="profileInfo.name"
              placeholder="Enter your first/last name..."
            />

            <select
              v-else-if="question === 2"
              class="form-control stateSelect"
              v-model="profileInfo.state"
              size="10"
            >
              <option value="" selected="selected">Select a State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            <div class="form-check" v-else-if="question === 3">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="profileInfo.dog"
                value="true"
                id="dogCheck"
              />
              <label class="form-check-label" for="defaultCheck1"> Dogs </label>
            </div>
            <div class="form-check" v-if="question === 3">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="profileInfo.cat"
                value=""
                id="catCheck"
                disabled
              />
              <label class="form-check-label" for="defaultCheck2"> Cats </label>
            </div>
          </transition>

          <div class="div nextBtn">
            <button
              type="button"
              v-if="this.question <= 3"
              class="btn btn-warning"
              @click="nextQuestion"
            >
              Next
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
            <button
              v-else-if="this.question >= 4"
              type="submit"
              class="btn btn-warning"
            >
              Next
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import ns from "../Services/NotificationService";
export default {
  name: "",
  mounted() {},
  data() {
    return {
      question: 1,
      profileInfo: {
        dog: false,
        cat: false,
      },
    };
  },

  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  props: [""],
  components: {},
  methods: {
    nextQuestion() {
      this.question++;
    },
    getStarted() {
      this.profile.search = {
        cat: this.profileInfo.cat,
        dog: this.profileInfo.dog,
        state: this.profileInfo.state,
      };
      this.$store.dispatch("edit", {
        getPath: "profile",
        path: "profile/" + this.profile.id,
        data: this.profile,
        resource: "profile",
      });
      router.push({ name: "Swipe" });
    },
  },
};
</script>

<style>
.getStarted {
  height: 93vh;
  width: 100%;
  background-image: url(../assets/goodboi.jpg);
  background-size: cover;
  background-position: top;
}
.reposition {
  margin-top: 10%;
}

.stateSelect {
  max-height: 15vh;
  overflow-y: scroll;
  background: rgba(255, 255, 255, 0.63);
}

.nextBtn {
  margin-top: 80%;
}
</style>
