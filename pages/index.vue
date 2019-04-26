<template>
  <section class="container">
    <div>
      <canvas-blob>
        <blob />
      </canvas-blob>
      <div class="title">
        HI I AM AUDREN MAUPLOT
      </div>
      <div class="subtitle">
        Audren Mauplot, front-end developer
      </div>
    </div>
  </section>
</template>

<script>
import CanvasBlob from '~/components/CanvasBlob.vue'
import Blob from '~/components/Blob.vue'

export default {
  components: {
    Blob,
    CanvasBlob
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
  position: relative;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  z-index: 2;
}

.subtitle {
  position: relative;
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  z-index: -1;
}

.links {
  padding-top: 15px;
}
</style>

