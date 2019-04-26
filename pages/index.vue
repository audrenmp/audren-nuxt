<template>
  <div class="container">
    <button
      type="button"
      v-on:click="updateBlobSize"
    >SIZE</button>
    <intro />
    <main-content />
    <canvas-blob>
      <blob
        :color="color"
        :size="size"
      />
    </canvas-blob>
  </div>
</template>

<script>
import CanvasBlob from '~/components/CanvasBlob.vue'
import Blob from '~/components/Blob.vue'
import Intro from '~/components/Intro.vue'
import MainContent from '~/components/MainContent.vue'

export default {
  components: {
    Blob,
    CanvasBlob,
    Intro,
    MainContent,
  },
  data () {
    return {
      color: "#49f9c4",
      size: 0
    }
  },
  methods: {
    updateBlobSize: function () {
      this.size += 20
      console.log(this.size)
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
}
</style>

