var ball,ground,log;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	log1 = createSprite(600,630,150,15);
	log2 = createSprite(525,600,15,75);
	log3 = createSprite(675,600,15,75);

	var ball_options = {
        restitution: 1.0
}
    ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);
	

	//Create a Ground
	ground = createSprite(400, 650, 800, 10 , {isStatic:true} );
	ground.shapeColor="white" ;
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    
  drawSprites();

  
 
}



