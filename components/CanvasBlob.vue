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
    };
  },
  provide() {
    return {
      provider: this.provider
    };
  },
  mounted() {
    let scale = window.devicePixelRatio;
    this.provider.context = this.$refs["canvas"].getContext("2d");
    this.$refs["canvas"].width = window.innerWidth * scale;
    this.$refs["canvas"].height = window.innerHeight * scale;
    console.log(this.provider.context.canvas)
    this.provider.context.scale(scale, scale);

    window.addEventListener("resize", this.resizeCanvas, false);
  },
  methods: {
    resizeCanvas: function() {
      // let scale = window.devicePixelRatio;
      // this.$refs["canvas"].width = window.innerWidth * scale;
      // this.$refs["canvas"].height = window.innerHeight * scale;
      
      // scale = window.devicePixelRatio;
      // this.$refs["canvas"].scale(this.scale, this.scale);
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  z-index: 1;
}

canvas {
  position: absolute;
  /* border: 2px solid red; */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>

