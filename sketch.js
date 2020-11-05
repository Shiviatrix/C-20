var frect, mrect;

function setup() {
  createCanvas(800,400);
 frect =  createSprite(200, 350, 50, 50);
 frect.shapeColor = "green";
 frect.debug = true;
 
 mrect = createSprite(200,50,80,100);
 mrect.debug = true;
 mrect.shapeColor = "green";

frect.velocityY = -4;
mrect.velocityY = 4;
}

function draw() {
  background("black");  
  //mrect.x = World.mouseX;
  //mrect.y = World.mouseY;

//if(mrect.x - frect.x < frect.width/2 + mrect.width/2 && frect.x - mrect.x < frect.width/2 + mrect.width/2
  //&& mrect.y - frect.y < frect.height/2 + mrect.height/2 && frect.y - mrect.y < frect.height/2 + mrect.height/2){
//frect.shapeColor = "lightblue";
//mrect.shapeColor = "lightblue";
//} else  {
  //frect.shapeColor = "green";
  //mrect.shapeColor = "green";
//}

if(mrect.x - frect.x < frect.width/2 + mrect.width/2 && frect.x - mrect.x < frect.width/2 + mrect.width/2){
  frect.velocityX = frect.velocityX * (-1);
  mrect.velocityX = mrect.velocityX * (-1);
}
if(mrect.y - frect.y < frect.height/2 + mrect.height/2 && frect.y - mrect.y < frect.height/2 + mrect.height/2){
  frect.velocityY = frect.velocityY * (-1);
  mrect.velocityY = mrect.velocityY * (-1);
}

  drawSprites();
}