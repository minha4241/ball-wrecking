
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;





var ground1


function preload()
{
	



}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     //ground1= new ground(400,680, 800, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(100,100,100,10)
  drawSprites();
  //ground1.display()
 
}



