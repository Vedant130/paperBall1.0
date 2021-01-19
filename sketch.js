
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var side1,side2,side3;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = createSprite(400,700,800,15);
	ground.shapeColor = ("brown");

	side1 = createSprite(750,643,10,100);
	side2 = createSprite(680,690,150,10);
	side3 = createSprite(610,643,10,100);

	var options = {
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

	ball = createSprite(100,680,20,20);
	ball.shapeColor = ("magenta");
}

function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  drawSprites();

  keyPressed();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,Y:-85});
	}

}



