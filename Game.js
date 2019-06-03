var mainCharacter;
var gravity = 9.8/30.0;
var backgroundImage;
var mainCharacterImage;
var monsterImage
var groundOffset = 70
var monsterArray = []
var goombaArray = []
var health = 100
var monsterHealth = 100


class Character {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.xSpeed = 0;
    this.goombaSpeed = 2
    this.bowserSpeed = 2.5
    this.bowserJrSpeedPos = 1
    this.bowserJrSpeedNeg = -1
    this.width = width;
    this.height = height
    this.color = "blue"
    this.isMonster = false
    this.isJumping = false 
    this.isLeft = false
    this.isRunning = false
    this.isBowser = false
    this.isBowserJr = false
    this.bowserJrRight = false
    this.bowserRight = false
    this.isGoomba = false
    this.goombaRight = false
    this.isDead = false
  }
  
  
  update(){
	if(this.y+this.width*0.5 >= (height-groundOffset) && this.ySpeed > 0) 
    {
      this.isJumping = false
      this.ySpeed = this.ySpeed*(-0.1 )
      this.y = height-this.width*0.5-groundOffset
    }
   this.ySpeed += gravity;
   this.y += this.ySpeed;
    
   this.xSpeed *= 0.8
   this.x += this.xSpeed;
    
    if (this.isBowserJr && this.y > 170) {
      this.y = 170
    } else if (this.isBowser && this.y > 270) {
      this.y = 264
    }
  }
 
moveBowsers() {
  var differenceX = mario.x - this.x;
  if (this.isBowser && mario.x - this.x <= 150 && mario.x - this.x >=0) {
      this.xSpeed += differenceX*.006
    this.bowserRight = true
  }else if (this.isBowser && this.x - mario.x <= 150 && this.x - mario.x >= 0) {
    this.xSpeed += differenceX * 0.006
    this.bowserRight  = false

  } else if (this.isBowserJr && mario.x - this.x <= 250 && mario.x - this.x >=0) {
    this.xSpeed += differenceX * .004
    this.bowserJrRight = true
  } else if (this.isBowserJr && this.x - mario.x <= 250 && this.x - mario.x >= 0) {
    this.xSpeed += differenceX * 0.004
    this.bowserJrRight = false
    
  }
  
  this.isTouchingMario()

}
isTouchingMario() {
  if (mario.x + mario.width >= this.x && mario.x <= this.x + this.width && mario.y + mario.width > this.y && mario.y < this.y + this.width) {
    health -= .4
    this.isDead = false
  } if (mario.y - this.y < -30 && mario.y - this.y > - 45&& mario.x + mario.width >= this.x && mario.x <= this.x + this.width) {
      this.isDead = true
    mario.ySpeed -= 10


}
 
  
}
  isBoppingBowsers() {
    if (mario.y+ mario.width == this.y + 20) {
        return true
        }else {
      return false
    }
  }
  draw(){
  
    if(this.isMonster && this.isBowser && this.bowserRight == false){
      image(monsterImage, this.x, this.y, this.width, this.width)
    }else if (this.isMonster && this.isBowser && this.bowserRight) {
      image(bowserRight, this.x, this.y, this.width, this.width)
    }else if(this.isMonster && this.isBowserJr && this.bowserJrRight == false) {
       image(bowserJrLeft, this.x, this.y, this.width, this.width)
    }else if (this.isMonster && this.isBowserJr && this.bowserJrRight == true) {
      image(bowserJrRight, this.x, this.y, this.width, this.width)
    }else if (this.isMonster && this.isGoomba && this.goombaRight) {
      image(goombaRight, this.x, this.y, this.width, this.width) 
    }else if (this.isMonster && this.isGoomba && this.goombaRight == false) {
      image(goombaLeft, this.x, this.y, this.width, this.width)
              
  
    }else if (mario.isLeft == false && mario.isJumping) {
      image(marioJumpRight, mario.x, mario.y, mario.width, mario.width)
    } else if (mario.isJumping && mario.isLeft){
      image(marioJumpLeft, mario.x, mario.y, mario.width, mario.width)
    } else if (mario.isLeft == false && mario.isJumping == false && mario.isRunning == true) {
      image(marioRight, mario.x, mario.y, mario.width, mario.width)
  } else if (mario.isLeft == true && mario.isJumping == false && mario.isRunning) {
    image(marioLeft, mario.x, mario.y, mario.width, mario.width)
  } else if (mario.isRunning == false && mario.isJumping == false)
    image(marioStill, mario.x, mario.y, mario.width, mario.width)
  } 
}
function setup() {
  createCanvas(1400, 700);
  mario = new Character(200, 20, 40, 40)
  if (mario.isDead == false) {
  backgroundImage = loadImage("./Super_Mario.png")
  }
  
  marioRight = loadImage("./mario.png")
  marioJumpRight = loadImage("./Mario.png")
  marioLeft = loadImage("./mario-1.png")
  marioJumpLeft = loadImage("./MarioJumping.png")
  marioStill = loadImage("./MarioStill.png")
  monsterImage = loadImage("./Bowser.png")
  bowserJrLeft = loadImage("./BowserJr.png")
  bowserJrRight = loadImage("./BowserJrRight.png")
  bowserRight = loadImage("./BowserRight.png")
  goombaLeft = loadImage("./Goomba.png")
  goombaRight = loadImage("./Goomba-1.png")
  
  var bowser = new Character(600, 100, 85, 85)
  var bowserJr = new Character(500, 123, 63, 63)
  
  bowser.isMonster = true
  bowser.isBowser = true
  bowserJr.isMonster = true
  bowserJr.isBowser = false
  bowserJr.isBowserJr = true
  
  
  monsterArray.push(bowser)
  monsterArray.push(bowserJr)
  for (i = 0; i < 3; i ++) {

    }
}

function draw() {
  background(0, 200, 150);
  image(backgroundImage, 0, 0, width, height)
  if (mario.x >= width) {
    mario.x = 20
  } else if (mario.x <= 0) {
    mario.x = width - 20
  }

  
  if(!keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW)) {
    mario.isRunning = false
  }
  if(keyIsDown(LEFT_ARROW)){
    //move left
    mario.xSpeed -= 1.5
    mario.isLeft = true
    mario.isRunning = true
  }
  if(keyIsDown(RIGHT_ARROW)){
    //move RIGHT
    mario.xSpeed += 1.5
    mario.isLeft = false
    mario.isRunning = true
  }
  
  mario.update();
  mario.draw()
  
  fill("red")
  stroke("black")
  rect(20, 20, health * 2, 20)
  noFill()
  noStroke()
  
  fill(255)
  text(int(health), health + 20, 20)
  
  for (u = 0; u < monsterArray.length; u ++) {
    
    if (monsterArray[u].isDead) {
      monsterArray.splice(u, 1)
    }else {
      
  monsterArray[u].update()
  monsterArray[u].draw()
  monsterArray[u].moveBowsers()
    
    }if (monsterArray.length == 0) {
      backgroundImage = loadImage("./End Screen.png")
       mario.y += 50
      }
    
       

 
  }
  
  

 if (health <= 0) {
   backgroundImage = loadImage("./Game Over.png")
   textAlign(CENTER)
   textSize(40)
   fill(random(255), random(255), random(255))
   text("game over, get rekt",.5*width, .5*height) 
   text("and eat poo",.5*width, .5*height + 50)
   
  
}

 
}

function keyPressed(){
  if(key === " " && mario.y >= 150){
    //JUMP!
    mario.ySpeed -= 8
    mario.isJumping = true
  }
  
   
}

