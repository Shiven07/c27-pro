class Bob {

constructor (x, y, r) {
var options= {
restitution:1, 
friction:0,
density:0.8 

} 


this.r = r;
this.x = x;
this.y = y;
this.body = Bodies.circle(this.x, this.y, this.r, options);
World.add(world, this.body);
}    

display()  {
var pos = this.body.position;
ellipseMode(CENTER);
      fill("brown");
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      strokeWeight(3);
      stroke("blue");
      fill("red");
      //rectMode(CENTER)
      //rect(0, 0, this.width, this.height);
      ellipse(0,0, this.r, this.r);
      pop();
    
}

}