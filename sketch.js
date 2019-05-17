let bubble1;
let bubble2;
let bubble3;
function setup() {
  createCanvas(400, 400);
  bubble1 = new Bubble(200, 200, 50, 5, 2, "red");
  bubble2 = new Bubble(100, 300, 20, 2, 4, "blue");
  bubble3 = new Bubble(100, 100, 30, 1, 2, "green")
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
  bubble1.bounce();
  bubble2.bounce();
  bubble3.bounce();
  
}
class Bubble {
  constructor(x, y, r, xspeed, yspeed, color) {
  this.x = x;
	this.y = x;
  this.r = r;
  this.xSpeed = xspeed;
  this.ySpeed = yspeed;
  this.color = color
}

  move() {
    this.x += this.xSpeed
    this.y += this.ySpeed
  }
  show() {
    noStroke()
    fill(this.color)
    ellipse(this.x, this.y, this.r * 2)
  }
  bounce() {
    if (this.x + this.r*0.8>= width || this.x - this.r*0.8 <= 0) {
      this.xSpeed *= -1
    }
    if (this.y + this.r *0.8>= height || this.y- this.r*0.8 <= 0) {
      this.ySpeed *= -1
    }
  }
}
