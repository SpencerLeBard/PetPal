<template>
  <div class="container-fluid bg-light">
    <div class="row getStarted">
      <div class="col text-center text-light nl-submit">
        <h3>
          Welcome to PetPal! Let's grab some information before we find your new
          best friend ...
        </h3>
        <br />
        <button @click="getStarted" class="btn btn-success" type="submit">
          Click To Get Started!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ns from "../Services/NotificationService";
export default {
  name: "",
  mounted() {},
  computed: {},
  props: [""],
  components: {},
  methods: {
    getStarted() {
      ns.setupQuestions();
      // this.$store.dispatch("addsomething", this.newSomething);
      // router.push({ name: "Profile" });
    },
  },
};
</script>

<style>
.getStarted {
  height: 93vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
}
.nl-submit {
  margin-top: 10vh;
}
</style>
