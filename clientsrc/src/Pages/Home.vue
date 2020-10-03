<template>
  <div class="container-fluid getStarted">
    <div class="row">
      <div class="col-12 d-flex flex-column h-100 text-center">
        <p class="text-light mt-5">
          Welcome to PetPal! Lets grab some basic info before we find your new
          best friend
        </p>
        <form class="form-inline reposition" @submit.prevent="getStarted">
          <transition
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutLeft"
            mode="out-in"
          >
            <input
              required
              v-show="question === 1"
              type="text"
              class="form-control"
              v-model="profileInfo.name"
              placeholder="Enter your first/last name..."
            />
          </transition>
          <transition
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutLeft"
            mode="out-in"
          >
            <select
              v-show="question === 2"
              class="form-control"
              v-model="profileInfo.state"
              placeholder="State..."
              id="stateSelect"
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
          </transition>
          <transition
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutLeft"
            mode="out-in"
          >
            <select
              class="form-control"
              v-model="profileInfo.animal"
              v-show="question === 3"
              required
            >
              <option value="" selected="selected">I am looking for...</option>
              <option value="cats">Cats!</option>
              <option value="dogs">Dogs!</option>
              <option value="null">Cats AND Dogs!</option>
            </select>
          </transition>
          <button
            v-if="this.question < 3"
            class="btn btn-danger mt-2 w-100"
            @click="nextQuestion"
          >
            Next
          </button>
          <button
            v-else-if="this.question >= 3"
            type="submit"
            class="btn btn-danger mt-2 w-100"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {},
  data() {
    return {
      question: 1,
      profileInfo: {
        name: "",
        state: "",
        animal: "",
      },
    };
  },
  computed: {},
  props: [""],
  components: {},
  methods: {
    nextQuestion() {
      this.question++;
    },
    getStarted() {
      console.log(this.profileInfo);
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

#stateSelect {
  overflow-y: scroll;
}
</style>
