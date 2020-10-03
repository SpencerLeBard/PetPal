<template>
  <div class="swipe-card-component col-8">
    <router-link :to="{ name: 'Pet Details', params: {} }">
      <div
        class="card m-2"
        v-bind:style="{
          backgroundColor: 'black',
          backgroundImage: 'url(' + this.activeAnimal.photos[0].full + ')',
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
          {{ this.activeAnimal.name }} - {{ this.activeAnimal.gender }},
          {{ this.activeAnimal.age }}
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
  mounted() {},
  data() {
    return {};
  },
  computed: {
    activeAnimal() {
      let res = this.$store.state.animals[0];
      console.log(res);
      this.$store.state.activeAnimal = res;
      return this.$store.state.activeAnimal;
    },
  },
  methods: {
    likePet() {},
  },
  components: {},
};
</script>

<style scoped></style>
