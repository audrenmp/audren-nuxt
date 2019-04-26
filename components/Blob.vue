<script>
import SimplexNoise from "simplex-noise";
import TweenMax from "gsap";

export default {
  inject: ["provider"],
  props: {
    color: String,
    size: Number
  },
  data() {
    return {
      speed: 0,
      points: [],
      radius: 100,
      scale: 0,
      simplex: {},
      ctx: {},
      canvasWidth: 0,
      canvasHeight: 0
    };
  },
  watch: {
    canvasWidth: function(val) {
      console.log(val);
      // this.init();
    }
  },
  updated() {
    if (this.provider.context) {
      this.init();
    }
  },
  methods: {
    init: function() {
      this.simplex = new SimplexNoise(Math.random);
      this.ctx = this.provider.context;

      this.scale = window.devicePixelRatio;
      this.ctx.scale(this.scale, this.scale);
      this.ctx.lineWidth = 2 * this.scale;
      // this.ctx.strokeStyle = this.$props.color;
      this.ctx.fillStyle = this.$props.color;
      this.draw()
    },
    draw: function() {
      if (this.provider.context) {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.speed += 0.005;

        if (this.radius < 100 + this.$props.size) {
          this.radius += 0.2;
        }

        this.ctx.moveTo(window.innerWidth/2 / this.scale, window.innerHeight/2 / this.scale); // centrer au centre
        this.ctx.beginPath();

        for (var i = 0; i < Math.PI * 2 + 5; i += 0.01) {
          let value2d =
            this.simplex.noise2D(
              Math.cos(i) + this.speed,
              Math.sin(i) + this.speed
            ) * 20;
          let x = Math.cos(i) * (this.radius + value2d) + (window.innerWidth/2 / this.scale);
          let y =
            Math.sin(i) * (this.radius + value2d) + (window.innerHeight/2 / this.scale);
          this.ctx.lineTo(x, y);
        }

        this.ctx.stroke();
        // this.ctx.fill();
      }
      requestAnimationFrame(this.draw);
    }
  },
  render: function() {
    // Since the parent canvas has to mount first, it's *possible* that the context may not be
    // injected by the time this render function runs the first time.
    if (!this.provider.context) return "";
    // const ctx = this.provider.context;

    // ctx.clearRect(0, 0, 500, 500); // clear the canvas
    // ctx.fillStyle = '#000';

    // ctx.moveTo(this.center, this.center); // centrer au centre
    // ctx.beginPath();
    // let value2d = 0;
    // for (var i = 0; i < (Math.PI * 2); i += 0.01) {
    //   let x = Math.cos(i) * (this.radius + value2d) + this.center + 0.5
    //   let y = Math.sin(i) * (this.radius + value2d) + this.center + 0.5
    //   ctx.lineTo(x, y);
    // }
    // ctx.stroke();
    // ctx.fill();
    // time += 0.001
    //       noFill()
    //       beginShape();
    //       for (var i = 0 ; i<(Math.PI*2); i+=0.1){
    //         var value2d = simplex.noise2D(Math.cos(i) + time, Math.sin(i) + time ) * 8;
    //         x = Math.cos(i) * (this.radius + value2d)
    //         y = Math.sin(i) * (this.radius + value2d)
    //         drawLine(this.color, this.alpha, this.weight)
    //         lastCoord[1] = y
    //       }
    //       endShape(CLOSE);
    //       function drawLine(color, alpha, weight){
    //         strokeWeight(weight)
    //         stroke(color.levels[0],color.levels[1],color.levels[2], alpha)
    //         vertex(x, y)
    //       }
    // requestAnimationFrame(this.render.bind(this));
  }
};
</script>