var bob1, bob2, bob3, bob4, bob5, roof, rope1, rope2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    roof = new Roof(400, 100, 300, 30);
    bob1 = new Bob(200, 450, 30);
    bob2 = new Bob(250, 450, 30);
    //bob3 = new Bob(300, 450, 30);
    //bob4 = new Bob(350, 450, 30);
    //bob5 = new Bob(400, 450, 30);
  rope1 = new Rope(roof.Body, bob1.body, 50, 50);
  //rope2 = new Rope(roof.body, bob2.body, 100, 100);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bob1.display();
  bob2.display();
  rope1.display();
  //rope2.display();
  //bob3.display();
  //bob4.display();
  //bob5.display();
  drawSprites();
 
}


