const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(400,370,800,20);

	ball = new Ball();

	bin1=new Bin(600,349,230,20);
	bin2=new Bin(500,319,30,40);
	bin3=new Bin(700,319,30,40);
     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});	
	}
}


