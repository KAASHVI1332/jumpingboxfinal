var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1050,600);

   
      
    box1=createSprite(650,580,250,30);
box1.shapeColor="red";
    box2=createSprite(390,580,250,30);
    box2.shapeColor="blue";
    box3=createSprite(130,580,250,30);
    box3.shapeColor="green";
    box4=createSprite(910,580,250,30);
    box4.shapeColor="purple";
    ball=createSprite(500,300,40,40);
    ball.shapeColor="orange";
ball.velocityX=4;
ball.velocityY=8;


}
 
 
 

 

function draw() {
    background("#a0baab");
  edges=createEdgeSprites();
  ball.bounceOff(edges);

  if(box1.isTouching(ball)&& ball.bounceOff(box1)){
      ball.shapeColor="red";
      music.play();
  }

  if(box2.isTouching(ball)&&ball.bounceOff(box2)){
    ball.shapeColor="blue";
 
}


if(box3.isTouching(ball)){
    ball.shapeColor="green";
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop();
}


if(box4.isTouching(ball)&&ball.bounceOff(box4)){
    ball.shapeColor="purple";
    
}
 drawSprites();  
}
