var snowflake,snowflakeImg;

var bg;

function preload() {
  snowflakeImg = loadImage("snow4.webp");
  bg= loadImage("snow2.jpg");


}
function setup() {
  createCanvas(800,400);
 
}

function draw() {
  if(bg){
  background(bg); 
}
  
 
  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}
 
