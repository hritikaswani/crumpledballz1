class Ball {
    constructor(x, y,radius) {
      var options = {
          
          restitution:0.3,
          friction:3.0,
          density:2.5,
          isStatic:false
      }
      this.body = Bodies.circle(100,367, 20, options);
      this.radius = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      stroke("white");
      strokeWeight(5);
      fill("yellow");
      circle(0, 0, this.radius);
      pop();
    }
  };
  