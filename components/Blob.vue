<script>

export default {
  // Gets us the provider property from the parent <my-canvas> component.
  inject: ['provider'],

  props: {},

  data () {
    return {
      points: [],
      radius: 200,
      center: 200
    }
  },
  render () {
    // console.log(this.points)
    // Since the parent canvas has to mount first, it's *possible* that the context may not be
    // injected by the time this render function runs the first time.
    if(!this.provider.context) return '';
    const ctx = this.provider.context;    
    // // ctx.scale(1.5,1.5);  
    ctx.fillStyle = '#000';

    ctx.moveTo(this.center, this.center); // centrer au centre
    ctx.beginPath();
    let value2d = 0;
    for (var i = 0; i<(Math.PI*2); i+=0.01){
      let x = Math.cos(i) * (this.radius + value2d) + this.center + 0.5
      let y = Math.sin(i) * (this.radius + value2d) + this.center + 0.5
      ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.fill();
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
  }
};
</script>