const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var engine, world;
var ball;
var ground;
var stand1, stand2;
var go;

function setup() {
	createCanvas(1350, 630);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ground_options= {
		isStatic: true
	}

	var ball_prop={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		//density: 1.2
	}

	var stand_prop= {
		isStatic: true,
		restitution: 0.01
	}

	ball= Bodies.circle(300, 200, 20, ball_prop);
	World.add(world, ball);
	//ball.mouseClicked(hforce);
	
	ground= Bodies.rectangle(10, 610, 3000, 20, ground_options);
	World.add(world, ground);

	stand1= Bodies.rectangle(850, 540, 15, 120, stand_prop);
	World.add(world, stand1);

	
	stand2= Bodies.rectangle(1100, 540, 15, 120, stand_prop);
	World.add(world, stand2);

	/*go= createImg("go.gif");
	go.position(100, 100);
	go.size(100, 100);
	go.mouseClicked(force);*/
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

	fill("white");
  ellipse(ball.position.x, ball.position.y, 20);

  fill("yellow");
  rect(ground.position.x, ground.position.y, 3000, 20);
  
  rect(stand1.position.x, stand1.position.y, 15, 120);
  rect(stand2.position.x, stand2.position.y, 15, 120);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyDown("up")){
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0.035});
	}
}




