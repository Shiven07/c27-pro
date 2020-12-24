var bob1, bob2, bob3, bob4, bob5, roof, rope1, rope2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var startbobposX, startbobposY, bobdiameter

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
    roof = new Roof(width/2, height/4, width/7, 30);
    startbobposX = width/2;
    startbobposY = height/4;
    bobdiameter = 40;

    //bob1 = new Bob(200, 450, 30);
    bob1 = new Bob(startbobposX, startbobposY, bobdiameter);
    bob2 = new Bob(startbobposX - bobdiameter, startbobposY, bobdiameter);
    //bob2 = new Bob(250, 450, 30);
    //bob3 = new Bob(300, 450, 30);
    //bob4 = new Bob(350, 450, 30);
    //bob5 = new Bob(400, 450, 30);
  rope1 = new Rope(roof.body, bob1.body, bobdiameter *2, 45);
  rope2 = new Rope(roof.body, bob2.body, 0, 0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();
  bob1.display();
  bob2.display();
  rope1.display();

  rope2.display();
  //bob3.display();
  //bob4.display();
  //bob5.display();
  drawSprites();
 
}


