var player1,player2
var ball
var score
var player2img

function preload() {
  player2img = loadAnimation("img/1ani.png","img/2ani.png","img/3ani.png")
}

function setup() {
 createCanvas(1000,700) 
 player1 = createSprite(480,20,80,50)
 player1.shapeColor = "red"
 player2 = createSprite(480,600,80,50)
 player2.addAnimation(player2img)
 ball = createSprite(500,450,50,50);
 ball.shapeColor = "black"
}

function draw() {
background("white");
player2.x = mouseX
player2.y = mouseY
drawSprites();
}