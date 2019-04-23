<template>
  <div>
    <canvas ref="canvas"/>
    <slot></slot>
  </div>
</template>


<script>
export default {
  data() {
    return {
      provider: {
        context: null
      }
    }
  },
  provide () {
    return {
      provider: this.provider
    }
  },
  mounted () {
    // We can't access the rendering context until the canvas is mounted to the DOM.
    // Once we have it, provide it to all child components.
    this.provider.context = this.$refs['canvas'].getContext('2d')

    // Resize the canvas to fit its parent's width.
    // Normally you'd use a more flexible resize system.
    this.$refs['canvas'].width = this.$refs['canvas'].parentElement.clientWidth
    this.$refs['canvas'].height = this.$refs['canvas'].parentElement.clientHeight
  }
};
</script>

<style>
canvas {
  width: 100vw;
  height: 100vh;
  border: 2px solid red;
}
</style>

