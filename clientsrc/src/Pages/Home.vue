<template>
  <div class="container-fluid getStarted">
    <div class="row">
      <div v-if="profile" class="col-12 d-flex flex-column text-center">
        <div class="div" v-if="question === 0">
          <p class="text-light mt-5 font-24">
            Welcome to PetPal! Lets grab some basic info before we find your new
            best friend
          </p>
          <button class="btn btn-success mt-5" @click="nextQuestion">
            Let's Get Started!
          </button>
        </div>

        <p class="text-light mt-5 font-24" v-if="question === 1">
          What's your name?
        </p>
        <p class="text-light mt-5 font-24" v-if="question === 2">
          It's great to meet you, {{ profileInfo.name }}. What state do you live
          in?
        </p>
        <p class="text-light mt-5 font-24" v-if="question === 3">
          Would you like to see cats, dogs, or both?
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 justify-content-center">
        <form class="form reposition" @submit.prevent="getStarted">
          <transition
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutLeft"
            mode="out-in"
          >
            <div class="p-2 form-container rounded" v-if="question === 1">
              <div class="form-row d-flex justify-content-between">
                <button type="button" class="btn" @click="previousQuestion">
                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
                <button type="button" class="btn " @click="nextQuestion">
                  Next
                  <i class="fa fa-arrow-right " aria-hidden="true"></i>
                </button>
              </div>
              <div class="form-row">
                <input
                  required
                  type="text"
                  class="form-control mt-2"
                  v-model="profileInfo.name"
                  placeholder="First/last name..."
                />
              </div>
            </div>
            <div class="p-2 form-container rounded" v-if="question === 2">
              <div class="form-row d-flex justify-content-between mb-2">
                <button type="button" class="btn" @click="previousQuestion">
                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
                <button type="button" class="btn " @click="nextQuestion">
                  Next
                  <i class="fa fa-arrow-right " aria-hidden="true"></i>
                </button>
              </div>
              <select
                v-if="question === 2"
                name="state"
                class="custom-select stateSelect"
                v-model="profileInfo.state"
                size="7"
              >
                <option selected value="">Select a State</option>
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
            </div>
            <div
              class="p-2 form-container rounded"
              id="checkboxes"
              v-if="question === 3"
            >
              <div class="form-row d-flex justify-content-between mb-2">
                <button type="button" class="btn" @click="previousQuestion">
                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
                <button type="submit" class="btn">
                  Next
                  <i class="fa fa-arrow-right " aria-hidden="true"></i>
                </button>
              </div>
              <div class="form-row d-flex justify-content-around">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="profileInfo.dog"
                    value="true"
                    id="dogCheck"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Dogs
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="profileInfo.cat"
                    value=""
                    id="catCheck"
                  />
                  <label class="form-check-label" for="defaultCheck2">
                    Cats
                  </label>
                </div>
              </div>
            </div>
          </transition>

          <div class="div nextBtn">
            <!-- <button type="button" class="btn btn-warning" @click="nextQuestion">
              Next
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button> -->
            <button
              v-if="this.question >= 4"
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
      question: 0,
      profileInfo: {
        name: "",
        state: "",
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
    previousQuestion() {
      this.question--;
    },
    getStarted() {
      this.profileInfo.completedQuiz = true;
      if (this.profileInfo.cat) {
        this.profileInfo.cat = "Cat";
      }
      if (this.profileInfo.dog) {
        this.profileInfo.dog = "Dog";
      }
      this.profileInfo.search = {
        cat: this.profileInfo.cat,
        dog: this.profileInfo.dog,
        state: this.profileInfo.state,
      };
      this.$store.dispatch("edit", {
        getPath: "profile",
        path: "profile/" + this.profile.id,
        data: this.profileInfo,
        resource: "profile",
      });
      this.profile.search.state = this.profileInfo.state;
      router.push({ name: "Swipe" });
    },
  },
};
</script>

<style>
.getStarted {
  height: 90vh;
  width: 100%;
  background-image: url(../assets/goodboi.jpg);
  background-size: cover;
  background-position: top;
}
.reposition {
  margin-top: 10%;
}

.stateSelect {
  /* max-height: 15vh; */
  overflow-y: scroll;
  background: rgba(255, 255, 255, 0);
  border: none;
}

.nextBtn {
  margin-top: 25%;
}

#checkboxes {
  background-color: rgba(207, 207, 207, 0.5);
}
.font-24 {
  font-size: 24px;
}

.form-container {
  background-color: rgba(255, 255, 255, 0.63);
}
</style>
