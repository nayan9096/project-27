
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	Ground= new ground(400,700,800,5)

	hammer =new Hammer(100,100)
    
	rubber=new Rubber(150,100,30);

	Stone =new stone(200,300,30,30);

	//Create the Bodies Here.
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  hammer.display();
  rubber.display();
  Stone.display();
  
  drawSprites();
 
}



