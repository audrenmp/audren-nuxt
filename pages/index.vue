<template>
  <section class="container">
    <div>
      <intro />
      <!-- <h1 class="title">
        audren-nuxt
      </h1>
      <h2 class="subtitle">
        Audren Mauplot, front-end developer
      </h2> -->
      <canvas-blob>
        <blob />
      </canvas-blob>
    </div>
  </section>
</template>

<script>
import CanvasBlob from '~/components/CanvasBlob.vue'
import Blob from '~/components/Blob.vue'
import Intro from '~/components/Intro.vue'

export default {
  components: {
    Blob,
    CanvasBlob,
    Intro
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

