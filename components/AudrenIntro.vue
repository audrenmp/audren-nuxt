<template>
  <header>
    <canvas ref="canvas" />
    <div class="cut-background">
      <svg viewBox="0 0 100 60">
        <defs>
          <g id="text">
            <text text-anchor="middle" x="50" y="18" dy="1" stroke-width="0.05" stroke="black" >
              BLA BLA
              BLA BLA
            </text>
          </g>
          <mask id="mask" x="0" y="0" width="100" height="50">
            <rect x="0" y="0" width="100" height="40" fill="white" />
            <use xlink:href="#text" />
          </mask>
        </defs>
        <rect x="5" y="5" width="90" height="30" mask="url(#mask)" fill-opacity="1" fill="white" />
        <use xlink:href="#text" fill="transparent" />
      </svg>
    </div>
    <div ref="listener" class="listener" />
    <!-- <h1>
        Hi ! My name is Audren Mauplot, <br>
        I’m a French front-end developer <br>
        <i>&</i> interactive storyteller. 🚀
      </h1>
    <h2>I wish to create meaningful digital projects.</h2>-->
  </header>
</template>

<script>
export default {
  data() {
    return {
      context: null,
      canvas: null,
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
      this.canvas = this.$refs["canvas"];
      this.listener = this.$refs["listener"];
      this.context = this.canvas.getContext("2d");
      // this.context.translate(0.5, 0.5);
      this.canvas.width = window.innerWidth * scale;
      this.canvas.height = window.innerHeight * scale;
      // this.context.rect(20, 20, 500, 500);
      // this.context.fillStyle="blue";
      // this.context.fill();
      // this.context.scale(scale, scale);
      this.addListeners();
    },
    addListeners() {
      // window.addEventListener("resize", this.resizeCanvas, false);
      this.listener.addEventListener("mouseenter", this.startDrawing);
      this.listener.addEventListener("mouseleave", this.stopDrawing);
      this.listener.addEventListener("mouseleave", this.stopDrawing);
      this.listener.addEventListener("mousemove", this.draw);
    },
    startDrawing(e) {
      this.mouseX = e.pageX - this.canvas.offsetLeft;
      this.mouseY = e.pageY - this.canvas.offsetTop;
      this.paint = true;
      this.addClick(
        e.pageX - this.canvas.offsetLeft,
        e.pageY - this.canvas.offsetTop,
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
          e.pageX - this.canvas.offsetLeft,
          e.pageY - this.canvas.offsetTop,
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
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  position: relative;
  /* background: orange; */

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
    /* z-index: 0; */
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-size: 10px;
    text-align: center;

    /* &:before {
      display: none;
      content: "Hi ! My name is Audren Mauplot, 
        I’m a French front-end developer 
        & interactive storyteller. 🚀";
      height: 100%;
      width: 100%;
      left: 0;
      position: fixed;
      text-shadow: 2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;

      color: #222;
      background-color: white;
      padding: 1rem;
      color: transparent;
      z-index: 1;
      mix-blend-mode: screen;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1rem;
      font-family: Arial;
      font-size: 1em;
      line-height: 1.8em;
      font-weight: 200;
    } */
    /* h1 {
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
    } */
}
}
</style>

