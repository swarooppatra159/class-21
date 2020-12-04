var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY =-5;
  fixedRect.velocityY = +5;




  
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,200,50,50);
  gameObject3 = createSprite(300,300,50,50);
  gameObject4 = createSprite(400,400,50,50);

  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject2)){

    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
  
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green"; 
  }

bounceOff(movingRect,fixedRect);
  
  drawSprites();
}  //end






















