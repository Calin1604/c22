
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,r,l
var ball
function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(600,690,1200,20)
    r=new Ground(950,650,20,100)
	l=new Ground(1150,650,20,100)
	var options={isStatic:false,density:1.2,restitution:0.3,friction:0}
    ball=Bodies.circle(100,100,20,options)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  r.show()
  l.show()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
 
}

function keyReleased(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}

