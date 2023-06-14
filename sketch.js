var rock, player, coin, plant, cliff, background, bg,obstacle

var rockImg, playerImg, coinImg, plantImg, cliffImg, backgroundImg,obstacleImg

var ground
var rockGroup

function preload(){
    
rockImg = loadImage("Rocks Image.png");
playerImg = loadImage("Character Image.png");
coinImg = loadImage("Coin Image.png");
plantImg = loadImage("image-removebg-preview.png");
cliffImg = loadImage("Cliff Image.png");
backgroundImg = loadImage("jungle-environment-background-in-cartoon-style-free-vector.jpg");
obstacleImg = loadImage("obstacle1.png")




}

function setup(){
    createCanvas(windowWidth,windowHeight);

    bg = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
    bg.addImage("background",backgroundImg)

     ground = createSprite(windowWidth/2,windowHeight/2+0.4*windowHeight,windowWidth,10)

    rock = createSprite(200, 150, 20,20);
    rock.addImage("rock", rockImg);
    rock.scale = 0.3;

    player = createSprite(150,500,30,30);
    player.addImage("player", playerImg);
    player.scale = 0.2;

    obstacle = createSprite(300,500,30,30); 
    obstacle.addImage("obstacle", obstacleImg);
    
    
   // rock.debug= true
    rockGroup = createGroup()
    //rock.setCollider("rectangle", 0,0,rock.width, rock.height+10)
    

}

function draw(){
    background("white");

    if(keyDown("space")&& player.y >= 100) {
        player.velocityY = -12;
    }
    if (keyDown("right")){
        player.x += 5
    }
    if (keyDown("left")){
        player.x -= 5
    }

    player.velocityY = player.velocityY+0.9;

    player.collide(ground)
    
    // player.depth = rock.depth  
    
     if(player.isTouching(rockGroup)){
        player.velocityY = 0
     }

    spawnRocks();

    drawSprites();
}

function spawnRocks(){
    if (frameCount % 60 === 0) {
        rock = createSprite(random(windowWidth - 700, windowWidth+100), windowHeight-100, 100, 100);
        rock.velocityX = -4
        var rand = Math.round(random(1,5));
        rock.addImage("rock1", rockImg);
        rock.scale = 0.3
        //  rock.debug = true
        
        // player.depth = rock.depth 
        rock.setCollider("rectangle", 0,0,rock.width, rock.height+10)
        
        rockGroup.add(rock)
}
}