var spacebg
var backgroundImg

var endzone

var spaceship
var spaceship_img

var laserImg
var laser
var laserSound

var blast
var blastImage

var asteroid
var asteroid1
var asteroid2
var asteroid3
var asteroid_img1
var asteroid_img2
var asteroid_img3

var exposionSound
var explosionImage

var asteroidsGroup;

var canvas

function preload(){
  backgroundImg = loadImage("images/space5.jpg")
  spaceship_img = loadImage("images/spaceship.png")
  laserImg = loadImage("images/laser.png")
  asteroid_img1 = loadImage("images/as1.png")
  asteroid_img2 = loadImage("images/as2.png")
  asteroid_img3 = loadImage("images/as3.png")
  blastImage = loadImage("images/blast.png")
  explosionImage = loadImage("images/blast.png")
  exposionSound = loadSound("sounds/explosion.mp3")
  laserSound = loadSound("sounds/laser sound.mp3")

}


function setup(){
  canvas = createCanvas(1350,625);

  endzone = createSprite(10,310,10,620)
  endzone.visible = false;
  
  spaceship = createSprite(100,350,200,200)
  spaceship.addImage(spaceship_img);
  spaceship.scale = 0.3

  


  asteroidsGroup = new Group;
  
  
}


function draw(){
  background(backgroundImg)
  //background(0);
  


  if(keyDown(UP_ARROW)){
    //spaceship.velocityY = -3;
    spaceship.y = spaceship.y-10
  }

  if(keyDown(DOWN_ARROW)){
    //spaceship.velocityY = +3;
    spaceship.y = spaceship.y+10

  }

  if(keyDown(RIGHT_ARROW)){
    //spaceship.velocityX = +3;
    spaceship.x = spaceship.x+5

  }

  if(keyDown(LEFT_ARROW)){
    //spaceship.velocityX = -3;
    spaceship.x = spaceship.x-5

  }

  


  asteroids();
  drawSprites();
}

function asteroids(){
if(frameCount % 60 === 0)
{
  var asteroid = createSprite(1200,700,50,50)
  asteroid.y = Math.round(random(10,600))
  console.log(asteroid.y);
  //asteroid.addImage(asteroid_img1)
  

  var rand = Math.round(random(1,3));
  //console.log(rand);
    switch(rand) {
      case 1: asteroid.addImage(asteroid_img1);
              break;
      case 2: asteroid.addImage(asteroid_img2);
              break;
      case 3: asteroid.addImage(asteroid_img3);
              break;
      
      default: break;
    }

    asteroid.scale = 0.3
    asteroid.velocityX = -5
    asteroid.lifetime = 250;


  }
}



