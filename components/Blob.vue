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
      this.ctx.lineWidth = 1 * this.scale;
      // this.ctx.strokeStyle = this.$props.color;
      this.ctx.fillStyle = this.$props.color;
      this.draw()
    },
    draw: function() {
      if (this.provider.context) {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.speed += 0.005;

        if (this.radius < this.radius + this.$props.size) {
          this.radius += 5;
        }

        this.ctx.moveTo(window.innerWidth/2 / this.scale, window.innerHeight/2 / this.scale); // centrer au centre
        this.ctx.beginPath();

        for (var i = 0; i < Math.PI * 2 + 5; i += 0.01) {
          let value2d =
            this.simplex.noise2D(
              Math.cos(i) + this.speed,
              Math.sin(i) + this.speed
            ) * 20;
          let x = Math.cos(i) * (this.radius + value2d) + (window.innerWidth / this.scale);
          let y =
            Math.sin(i) * (this.radius + value2d) + (window.innerHeight/2 / this.scale);
          this.ctx.lineTo(x, y);
        }

        // this.ctx.stroke();
        this.ctx.fill();
      }
      requestAnimationFrame(this.draw);
    }
  },
  render: function() {
    if (!this.provider.context) return "";
  }
};
</script>