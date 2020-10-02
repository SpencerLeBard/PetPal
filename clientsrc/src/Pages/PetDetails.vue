<template>
  <div class="pet-details container-fluid">
    <main class="row">
      <section class=""></section>
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
    this.dispatch("getResource", {
      path: "animals" + this.animal.id,
      resource: "activeAnimal",
    });
  },

  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped></style>
