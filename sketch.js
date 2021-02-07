
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obGroup
var score



var survivalTime=0



function preload(){
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png") 
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {

  createCanvas(600,500)
  
  

  monkey=createSprite(80,380,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.2
  
  
ground = createSprite(80,385,1000,5)
  
  
  bananaGroup= new Group();
  obGroup= new Group();
  
}


function draw() {
  
background("white")
  
  

  
  
  
  if(keyDown("space")){
    monkey.velocityY=-20
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
 

  spawnBanana()
  spawnObstacle() 
  monkey.collide(ground)
 
  
   survivalTime=survivalTime+Math.round(getFrameRate()/60);
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
   score=score+1
   
  }
   if(monkey.isTouching(obGroup)){
    obGroup.destroyEach();
     
  }
 
   
   
    
  
  

  
 
  
drawSprites();
 
 
  textSize(20)
  fill("black")
  text("Survival Time :" + survivalTime,30,50)
  
  text("score :" + 0,400,50)
}

function spawnBanana(){
  
  if(frameCount%90===0){
    banana=createSprite(50,80,20,20)
    banana.x=Math.round(random(470,490));
    banana.y=Math.round(random(90,160))
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-5
    banana.lifetime=300
    bananaGroup.add(banana)
    }
}

function spawnObstacle(){
  
  if(frameCount%170===0){
    obstacle=createSprite(50,340,20,20)
    obstacle.x=Math.round(random(495,500));
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.3
    obstacle.velocityX=-5
    obstacle.lifetime=300
    obGroup.add(obstacle);
    }
}









