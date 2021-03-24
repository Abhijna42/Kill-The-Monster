class Hero {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          density:1,
          frictionAir:1

      }
      
     
      
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius;
      this.image=loadImage("images/Superhero-01.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.radius, this.radius);
    }
  };