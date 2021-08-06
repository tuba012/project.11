
var path,boy;
var pathImg,boyImg;
//Game States

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(600,600);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;

//creating boy running
boy = createSprite(width/2,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
boy.velocityX = 2;

}
function draw() {
  background("white");
  
  edges= createEdgeSprites();
  
  boy.x = World.mouseX

  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;          
  }
  boy.bounceOff(edges[2]);
  boy.bounceOff(edges[3]);

  drawSprites()
    }
