<template>
  <header ref="container">
    <canvas ref="canvas" />
    <div class="cut-background">
      <svg viewBox="0 0 100 60" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <g id="text">
            <text text-anchor="start" stroke-width="0.12" stroke="#E1E1E1">
              <tspan alignment-baseline="after-edge" x="0" y="10">Hi ! My name is</tspan>
              <tspan alignment-baseline="after-edge" x="0" y="20">Audren Mauplot,</tspan>
              <tspan alignment-baseline="after-edge" x="0" y="30">I’m a French</tspan>
              <tspan alignment-baseline="after-edge" x="0" y="40">front-end developer</tspan>
              <tspan alignment-baseline="after-edge" x="0" y="50">& interactive</tspan>
              <tspan alignment-baseline="after-edge" x="0" y="60">storyteller. 🚀</tspan>
            </text>
          </g>
          <mask id="mask">
            <rect width="100vw" height="100%" fill="white" />
            <use xlink:href="#text" />
          </mask>
        </defs>
        <rect x="0" y="0" width="100" height="100" mask="url(#mask)" fill-opacity="1" fill="white" />
        <use xlink:href="#text" fill="transparent" />
      </svg>
    </div>
    <div ref="listener" class="listener" />
    <h2>I wish to create meaningful digital projects.</h2>
  </header>
</template>

<script>
export default {
  data() {
    return {
      context: null,
      canvas: null,
      container: null,
      margin: 0,
      mouseX: 0,
      mouseY: 0,
      paint: false,
      clickX: [],
      clickY: [],
      clickDrag: []
    };
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      let dpi = window.devicePixelRatio;
      this.canvas = this.$refs["canvas"];
      this.container = this.$refs["container"];
      this.listener = this.$refs["listener"];
      this.context = this.canvas.getContext("2d");
      this.context.translate(0.5, 0.5);
      this.canvas.width = this.container.clientWidth;
      this.canvas.height = this.container.clientHeight;
      // this.context.rect(20, 20, 500, 500);
      // this.context.fillStyle="blue";
      // this.context.fill();
      // this.context.scale(dpi, dpi);
      this.addListeners();
    },
    addListeners() {
      window.addEventListener("resize", this.resizeCanvas, false);
      this.listener.addEventListener("mouseenter", this.startDrawing);
      this.listener.addEventListener("mouseleave", this.stopDrawing);
      this.listener.addEventListener("mouseleave", this.stopDrawing);
      this.listener.addEventListener("mousemove", this.draw);
    },
    resizeCanvas() {
      this.canvas.width = this.container.clientWidth;
      this.canvas.height = this.container.clientHeight;
      this.clickX = [];
      this.clickY = [];
      this.clickDrag = [];
      this.redraw();
    },
    startDrawing(e) {
      this.mouseX = e.layerX - this.canvas.offsetLeft;
      this.mouseY = e.layerY - this.canvas.offsetTop;
      this.paint = true;
      this.addClick(
        e.layerX - this.canvas.offsetLeft,
        e.layerY - this.canvas.offsetTop,
        true
      );
      this.redraw();
    },
    stopDrawing(e) {
      this.paint = false;
    },
    draw(e) {
      if (this.paint) {
        this.addClick(
          e.layerX - this.canvas.offsetLeft,
          e.layerY - this.canvas.offsetTop,
          true
        );
        this.redraw();
      }
    },
    addClick(x, y, dragging) {
      this.clickX.push(x);
      this.clickY.push(y);
      this.clickDrag.push(dragging);
    },
    redraw() {
      this.context.clearRect(
        0,
        0,
        this.context.canvas.width,
        this.context.canvas.height
      );
      this.context.strokeStyle = "black";
      this.context.lineJoin = "round";
      this.context.lineWidth = 30;

      for (var i = 0; i < this.clickX.length; i++) {
        this.context.beginPath();
        if (this.clickDrag[i] && i) {
          this.context.moveTo(this.clickX[i - 1], this.clickY[i - 1]);
        } else {
          this.context.moveTo(this.clickX[i] - 1, this.clickY[i]);
        }
        this.context.lineTo(this.clickX[i], this.clickY[i]);
        this.context.closePath();
        this.context.stroke();
      }
    }
  }
};
</script>

<style scoped lang="scss">
header {
  border: 2px solid palevioletred;
  margin: 0 auto;
  height: 70vh;
  width: 100%;
  position: relative;

  .listener {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
  }
  canvas {
    z-index: -1;
  }
  .cut-background {
    /* display: none; */
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-size: 10px;
    text-align: center;

    svg {
      /* height: 100%; */
      /* width: 100%; */
      text {
        width: 100%;
        font-family: Impact;
        text-transform: uppercase;
        font-size: 0.8em;
        letter-spacing: 0.1em;
        line-height: 2em;
        font-weight: 200;
      }
    }
    /* h1 {
      font-family: Libre Baskerville;
      font-size: 2.2em;
      line-height: 1.8em;
      font-weight: 200;
    } */
  }
  h2 {
    font-family: Libre Baskerville;
    font-size: 1.2em;
    line-height: 2em;
    font-weight: 100;
  }
}
</style>

