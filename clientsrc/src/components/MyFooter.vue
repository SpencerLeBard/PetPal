<template>
  <footer class="container-fluid fixed-bottom bg-dark footer">
    <div class="row">
      <div class="col-6 d-flex justify-content-center profile-link">
        <router-link class="text-light" :to="{ name: 'Profile' }">
          <i class="fa fa-user text-light fa-3x m-3" aria-hidden="true"></i>
        </router-link>
      </div>
      <div class="col-6 d-flex justify-content-center">
        <router-link class="text-light " :to="{ name: 'Swipe' }"
          ><i class="fa fa-home text-light fa-3x m-3" aria-hidden="true"></i>
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MyFooter",
};
</script>

<style>
.footer {
  height: 10vh;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
