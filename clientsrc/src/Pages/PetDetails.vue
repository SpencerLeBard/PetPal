<template>
  <div class="pet-details container-fluid">
    <main class="row">
      <section class="col-12" id="pet-details-card">
        <div class="card">
          <img class="card-img-top" src="holder.js/100x180/" alt="" />
          <div class="card-body">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Text</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "petDetails",
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
  components: {},
};
</script>

<style scoped></style>
