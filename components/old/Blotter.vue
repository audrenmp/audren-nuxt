<template>
  <header>
    <div>
      <div ref="blotter"></div>
    </div>
  </header>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: "/js/blotter.js" },
        { src: "/js/channelSplitMaterial.js" },
        { src: "/js/liquidDistortMaterial.js" },
      ]
    };
  },
  mounted() {
    var text = new Blotter.Text("Audren Mauplot", {
      family: "serif",
      size: 50,
      fill: "blue"
    });
    var material = new Blotter.LiquidDistortMaterial();
    var blotter = new Blotter(material, { texts: text });
    blotter.needsUpdate = true;
    var scope = blotter.forText(text);
    scope.appendTo(this.$refs.blotter);
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
</style>

