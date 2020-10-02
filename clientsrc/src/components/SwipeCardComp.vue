<template>
  <div class="swipe-card-component col-8">
    <router-link :to="{ name: 'Pet Details', params: { id: animalProp.id } }">
      <div class="card m-2 bgPetImg">
        <div class="card-body">
          {{ animalProp.name }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "swipe-card-component",
  props: {
    animalProp: {},
  },
  mounted() {
    this.$store.dispatch("getResource", {
      path: "animals",
      resource: "animals",
    });
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    likePet() {},
  },
  components: {},
};
</script>

<style scoped>
.bgPetImg {
  background-image: url();
}
</style>
