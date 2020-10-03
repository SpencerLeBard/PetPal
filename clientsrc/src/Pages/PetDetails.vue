<template>
  <div class="pet-details container-fluid">
    <main class="row">
      <section class="col-12" id="pet-details-card">
        <div class="card my-2">
          <div
            id="carouselExampleFade"
            class="card-img-top carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  :src="activeAnimal.photos[0].full"
                  alt=""
                />
              </div>
              <div
                v-for="photo in activeAnimal.photos"
                :key="photo.full._id"
                class="carousel-item"
              >
                <img :src="photo.full" class="d-block w-100" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

          <div class="card-body">
            <h4 class="card-title text-center">{{ activeAnimal.name }}</h4>
            <p class="card-text">{{ activeAnimal.description }}</p>
            <br />

            <article id="age">
              <p class="card-text">
                <span class="h6">Age:</span> {{ activeAnimal.age }}
              </p>
            </article>

            <article v-if="activeAnimal.breeds.primary" id="breeds">
              <p class="card-text h6">Breeds:</p>
              <pre class="pre-text">
      Primary: {{ activeAnimal.breeds.primary }}</pre
              >
              <pre class="pre-text" v-if="activeAnimal.breeds.secondary">
      Secondary: {{ activeAnimal.breeds.secondary }}</pre
              >
              <pre v-if="activeAnimal.breeds.mixed" class="pre-text">
      Mixed Breed</pre
              >
            </article>

            <article v-if="activeAnimal.colors.primary" id="color">
              <p class="card-text h6">Color:</p>
              <pre class="pre-text">
      Primary: {{ activeAnimal.colors.primary }}</pre
              >
              <pre v-if="activeAnimal.colors.secondary" class="pre-text">
      Secondary: {{ activeAnimal.colors.secondary }}</pre
              >
              <pre v-if="activeAnimal.colors.tertiary" class="pre-text">
      Tertiary: {{ activeAnimal.colors.tertiary }}</pre
              >
            </article>

            <article id="gender">
              <p class="card-text h6">
                Gender:
                <span class="pre-text">{{ activeAnimal.gender }}</span>
              </p>
            </article>

            <article id="size">
              <p class="card-text h6">
                Size: <span class="pre-text">{{ activeAnimal.size }}</span>
              </p>
            </article>

            <article id="attributes">
              <p class="card-text h6">Attributes:</p>
              <pre
                v-if="activeAnimal.attributes.spayed_neutered"
                class="pre-text"
              >
      Spayed/Neutered</pre
              >
              <pre
                v-if="activeAnimal.attributes.house_trained"
                class="pre-text"
              >
      House Trained</pre
              >
              <pre v-if="activeAnimal.attributes.declawed" class="pre-text">
     Declawed</pre
              >
              <pre
                v-if="activeAnimal.attributes.special_needs"
                class="pre-text"
              >
      Has Special Needs</pre
              >
            </article>

            <article v-if="activeAnimal.environment.children" id="enviroment">
              <p class="card-text h6">Enviroment:</p>
              <pre class="pre-text">     Good With Children</pre>
            </article>

            <article id="status">
              <p class="card-text h6">
                Status:
                <span class="pre-text">{{ activeAnimal.status }}</span>
              </p>
            </article>

            <article id="contact">
              <p class="card-text h6">Contact Info</p>
              <pre v-if="activeAnimal.contact.email" class="pre-text">
      Email: {{ activeAnimal.contact.email }}</pre
              >
              <pre v-if="activeAnimal.contact.phone" class="pre-text">
      Phone: {{ activeAnimal.contact.phone }}</pre
              >
              <pre v-if="activeAnimal.contact.address.city" class="pre-text">
      City: {{ activeAnimal.contact.address.city }}</pre
              >
              <pre v-if="activeAnimal.contact.address.phone" class="pre-text">
      State: {{ activeAnimal.contact.address.phone }}</pre
              >
              <pre
                v-if="activeAnimal.contact.address.postcode"
                class="pre-text"
              >
      ZipCode: {{ activeAnimal.contact.address.postcode }}</pre
              >
            </article>

            <button
              :href="mailto:activeAnimal.contact.email"
              class="btn btn-primary text-right"
            >
              AdoptMe
            </button>
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
    this.$store.state.activeAnimal = this.$store.state.animals[18];
  },

  computed: {
    activeAnimal() {
      return this.$store.state.activeAnimal;
    },
  },
  methods: {
    editProfile() {
      this.$store.dispatch("edit", {
        getPath: "profile",
        path: "profile",
        data: this.profileEdit,
        resource: "profile",
      });
    },
  },
  components: {},
};
</script>

<style scoped>
.pre-text {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
