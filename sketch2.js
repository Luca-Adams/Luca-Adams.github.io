let bubbles = [];

function setup() {
  createCanvas(1400, 780);
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }


}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }
}

function draw() {
  var q = random(255)
  var w = random(255)
  var e = random(255)
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(random(255));
    } else {
      bubbles[i].changeColor(255);
    }
    bubbles[i].move();
    bubbles[i].show();
    bubbles[i].bounce();
  }
  fill(255)
  stroke(0)
  textSize(30)
  text(bubbles.length, width - 55, height - 20)
  if (bubbles.length <= 0) {
    background(0, 0, 255)
    text("You Win", .5*width - 50, .5*height + 20)
  }
}

class Bubble {
    constructor(x, y, r) {
        this.xSpeed = random(-5, 5)
        this.ySpeed = random(-5, 5)
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    changeColor(bright) {
        this.brightness = bright;
    }

    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }

    move() {
        this.x += this.xSpeed
        this.y += this.ySpeed;
    }

    bounce() {
        if (this.x > width || this.x < 0) {
            this.xSpeed *= -1.1
        } else if (this.y > height || this.y < 0)  {
          this.ySpeed *= -1.1
        }
            }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(150, 180, this.brightness, 130);
    ellipse(this.x, this.y, this.r * 2);
  }
}

  