let popcorn
let balls=[];
let numBalls = 60;
function setup() {
    createCanvas(1400, 760);
    popcorn = loadImage("./popcorn.png")
    for (let i = 0; i < numBalls; i++) {
        balls[i] = new PopcornBall (random(0, 1400), random(400, 600), 40)
        random(width),
            random(height)
    }
}
function draw() {
    background(100, 0, 100);
    for (let i = 0; i < balls.length; i++) {
        balls[i].display();
        balls[i].bounce();
        balls[i].move();
    }
}
class PopcornBall {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.xSpeed = random(-5, 5);
        this.ySpeed = 0;
        this.r = r;
        this.blue = random(0, 255)

    }
    move() {
        var gravity = 20/30
        this.ySpeed += gravity
        this.y += this.ySpeed
        this.x += this.xSpeed
    }
    bounce() {
        if (this.y >= height - (this.r*0.5) || this.y <= 0 + (this.r*0.5)) {
            this.ySpeed *= -1.05
            this.y = height-this.r*0.5
            this.r += 5
        }
        if (this.r >= 90) {
            this.r = 20
            this.x = random(0, 1400)
            this.y = random(400, 600)

        }
        if (this.x >= width - (this.r *0.5) || this.x <= 0 + (this.r*0.5)) {
            this.xSpeed *= -1
        }
    }
    display() {
        image(popcorn, this.x, this.y, this.r, this.r)
        fill(50, 120, this.blue);
    }
}