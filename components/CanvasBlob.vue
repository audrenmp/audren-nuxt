<template>
  <div>
    <canvas ref="canvas" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
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
    let scale = window.devicePixelRatio;
    this.provider.context = this.$refs['canvas'].getContext('2d');
    this.$refs['canvas'].width = window.innerWidth * scale;
    this.$refs['canvas'].height = window.innerHeight * scale;

    window.addEventListener('resize', this.resizeCanvas, false);
  },
  methods: {
    resizeCanvas: function () {
      // let scale = window.devicePixelRatio;
      // this.$refs['canvas'].width = window.innerWidth * scale;
      // this.$refs['canvas'].height = window.innerHeight * scale;
    }
  }
};
</script>

<style>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>

