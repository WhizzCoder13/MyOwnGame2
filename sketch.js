
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var tower1,tower2, tower3;
var towerImg, tower2Img, tower3Img;

var balloon, balloonImg;

var coin, coinImg;

function preload()
{
	balloonImg = loadImage("hotairBalloon.png");

	towerImg = loadImage("tower1.png");
	tower2Img = loadImage("tower2.png");
	tower3Img = loadImage("tower3.png");

	coinImg = loadImage("coin.jpg");
}

function setup() {
	createCanvas(800, 700);
	tower1 = createSprite(100, 600);
	tower1.visible = false;
	tower1.addImage(towerImg,"tower1.png");

	tower2 = createSprite(100, 600);
	tower2.visible = false;
	tower2.addImage(tower2Img,"tower2.png");

	tower3 = createSprite(100, 600);
	tower3.visible = false;
	tower3.addImage(tower3Img,"tower3.png");

	balloon = createSprite(100, 260);
	balloon.addImage("hotairBalloon.png");

	coin = createSprite(700, 260);
	coin.addImage(coinImg, "coin.jpg");


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



