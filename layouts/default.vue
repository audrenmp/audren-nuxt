<template>
  <div class="container">
    <logo />
    <div class="main-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Logo from "~/components/UI/Logo.vue";
export default {
  components: {
    Logo
  }
};
</script>

<style>
.container {
  position: relative;
  height: 100%;
  width: 100%;
}

.main-container {
  max-width: 1200px;
  width: 75vw;
  margin: 0 auto;
  
}
</style>

