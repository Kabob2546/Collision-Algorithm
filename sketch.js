var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,50,50);

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  fixedRect.velocityX = -5;
  movingRect.velocityX = 5;
}

function draw() {
  background(0,0,0);  

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < 50 && movingRect.x - fixedRect.x > -50 && movingRect.y - fixedRect.y < 50 && movingRect.y - fixedRect.y > -50){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

    movingRect.velocityX = -(movingRect.velocityX);
    fixedRect.velocityX = -(fixedRect.velocityX);
  } else {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  drawSprites();
}