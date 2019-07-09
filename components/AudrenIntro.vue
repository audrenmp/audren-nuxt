<template>
  <header>
    <canvas ref="canvas" />
    <div class="cut-background">
      <!-- <h1>
        Hi ! My name is Audren Mauplot, <br>
        I’m a French front-end developer <br>
        <i>&</i> interactive storyteller. 🚀
      </h1>
      <h2>I wish to create meaningful digital projects.</h2>-->
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      context: null,
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
      let scale = window.devicePixelRatio;
      this.context = this.$refs["canvas"].getContext("2d");
      this.$refs["canvas"].width = window.innerWidth * scale;
      this.$refs["canvas"].height = window.innerHeight * scale;
      this.context.scale(scale, scale);
      // this.context.fillStyle = "blue";
      // this.context.fillRect(0, 0, 1200, 1200);
      this.addListeners();
    },
    addListeners() {
      // window.addEventListener("resize", this.resizeCanvas, false);
      this.$refs["canvas"].addEventListener("mousedown", this.startDrawing);
      this.$refs["canvas"].addEventListener("mouseleave", this.stopDrawing);
      this.$refs["canvas"].addEventListener("mouseup", this.stopDrawing);
      this.$refs["canvas"].addEventListener("mousemove", this.draw);
    },
    startDrawing(e) {
      this.mouseX = e.pageX - this.offsetLeft;
      this.mouseY = e.pageY - this.offsetTop;
      this.paint = true;
      this.addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      this.redraw();
    },
    stopDrawing(e) {
      this.paint = false;
    },
    draw(e) {
      if (this.paint) {
        this.addClick(
          e.pageX - this.offsetLeft,
          e.pageY - this.offsetTop,
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
      ); // Clears the canvas
      this.context.strokeStyle = "#000000";
      this.context.lineJoin = "round";
      this.context.lineWidth = 5;

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
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;
  canvas {
    z-index: 50;
  }
  .cut-background {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-size: 60px;
    text-align: center;

    &:before {
      display: none;
      content: "Hi ! My name is Audren Mauplot, 
        I’m a French front-end developer 
        & interactive storyteller. 🚀";
      height: 100%;
      width: 100%;
      left: 0;
      position: fixed;
      color: #222;
      background-color: #fff;
      padding: 1rem;
      z-index: 1;
      mix-blend-mode: screen;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1rem;
      font-family: Arial;
      font-size: 1em;
      line-height: 1.8em;
      font-weight: 200;
    }
    h1 {
      font-family: Libre Baskerville;
      font-size: 2.2em;
      line-height: 1.8em;
      font-weight: 200;
    }
    h2 {
      font-family: Libre Baskerville;
      font-size: 1.2em;
      line-height: 2em;
      font-weight: 100;
    }
  }
}
</style>

