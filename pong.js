var a = 0
var s = 0
var count = 0

let p1 = {
  xPos: 25,
  yPos: 300,
  xWidth: 15,
  yLength: 100
}

let p2 = {
  xPos: 1375,
  yPos: 300,
  xWidth: 15,
  yLength: 100
}

let ball = {
  xPos: 700,
  yPos: 350,
  xSpeed: 10,
  ySpeed: 0,
  radius: 20
}
function setup() {
  createCanvas(1400, 700);
  ball.ySpeed = random(-10, 10)
    p1.yPos = height/2
    p2.yPos = height/2
}

function draw() {
  
  background(0);
  collide()
  if (ball.yPos >= height - 10 || ball.yPos <= 10) {
    ball.ySpeed *=-1
    
  }
  stroke(255)
  strokeWeight(10)
  line(700, 0, 700, 700)
  noStroke()
  strokeWeight(0)
  if (count >= 1) {
    textAlign(CENTER)
    textSize(60)
    strokeWeight(5)
    text("PING", 350, 150)
  } if (count >= 2) {
    text("PING", 350, 150)
    text("PONG", 1050, 150)
  } if (count >= 3) {
    text("PING", 350, 150)
    text("PONG", 1050, 150)
    text("LUCA'S", 350, 550)
  } if (count >= 4) {
    text("PING", 350, 150)
    text("PONG", 1050, 150)
    text("LUCA'S", 350, 550)
    text("NEVER WRONG", 1050, 550)
  }

  strokeWeight(1)
  rectMode(CENTER)
  ellipseMode(CENTER)
  p2.yPos = mouseY
  rect(p1.xPos, p1.yPos, p1.xWidth, p1.yLength)
    rect(p2.xPos, p2.yPos, p2.xWidth, p2.yLength)
  ellipse(ball.xPos, ball.yPos, ball.radius)
  
  ball.xPos += ball.xSpeed
  ball.yPos += ball.ySpeed
  
  if (keyIsPressed) {
      if (key == "w") {
    p1.yPos -= 20
  }
    if (key == "s") {
    p1.yPos += 20
  }


    
  }
    
if (ball.xPos < 0) {
  a ++
  ball.xPos = 1000
  ball.yPos = 350
  ball.xSpeed = -10
  ball.ySpeed = random(-10, 10)

}
  if (ball.xPos > width) {
  s ++
  ball.xPos = 400
  ball.yPos = 350
  ball.xSpeed = 10
  ball.ySpeed = random(-10, 10)


}
    textAlign(CENTER)

  textSize(100)
      fill(255)
  text(s, 150, 300)
    fill(255)
  text(a, 1250, 300)
  textSize(30)


  
}

function collide() {
  if (ball.xPos == 40 && ball.yPos >= p1.yPos - 50 && ball.yPos <= p1.yPos + 50 || ball.xPos == width - 40 && ball.yPos >= p2.yPos - 50 && ball.yPos <= p2.yPos + 50) {
    ball.xSpeed *=-1



    count++
      
  }
}