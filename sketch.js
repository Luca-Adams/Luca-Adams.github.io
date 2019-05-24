var s1 = ['red', 'red', 'red', 'red'];
var s2 = ['green', 'green', 'green', 'green'];
var s3 = ['darkorange', 'darkorange', 'darkorange', 'darkorange'];
var s4 = ['blue', 'blue', 'blue', 'blue'];
var s5 = ['white', 'white', 'white', 'white'];
var s6 = ['yellow', 'yellow', 'yellow', 'yellow'];
var sList = [s1, s2, s3, s4, s5, s6];
var normCol = ['red', 'green', 'darkorange', 'blue', 'white', 'yellow'];
function setup() {
  createCanvas(600, 600, WEBGL);
}
function draw() {
  background(0)
  orbitControl(5);
  strokeWeight(5);
  translate(-50, 50, 100);

  fill(s1[0]);
  box(100, 100, 0);
  translate(100, 0, 0);
  fill(s1[1]);
  box(100, 100, 0);
  translate(-100, -100, 0);
  fill(s1[2]);
  box(100, 100, 0);
  translate(100, 0, 0);
  fill(s1[3]);
  box(100, 100, 0);

  translate(50, 100, -50);
  fill(s2[0]);
  box(0, 100, 100);
  translate(0, 0, -100);
  fill(s2[1]);
  box(0, 100, 100);
  translate(0, -100, 100);
  fill(s2[2]);
  box(0, 100, 100);
  translate(0, 0, -100);
  fill(s2[3]);
  box(0, 100, 100);

  translate(-50, 100, -50);
  fill(s3[0]);
  box(100, 100, 0);
  translate(-100, 0, 0);
  fill(s3[1]);
  box(100, 100, 0);
  translate(100, -100, 0);
  fill(s3[2]);
  box(100, 100, 0);
  translate(-100, 0, 0);
  fill(s3[3]);
  box(100, 100, 0);

  translate(-50, 100, 50);
  fill(s4[0]);
  box(0, 100, 100);
  translate(0, 0, 100);
  fill(s4[1]);
  box(0, 100, 100);
  translate(0, -100, -100);
  fill(s4[2]);
  box(0, 100, 100);
  translate(0, 0, 100);
  fill(s4[3]);
  box(0, 100, 100);

  translate(50, -50, 0);
  fill(s5[0]);
  box(100, 0, 100);
  translate(100, 0, 0);
  fill(s5[1]);
  box(100, 0, 100);
  translate(-100, 0, -100);
  fill(s5[2]);
  box(100, 0, 100);
  translate(100, 0, 0);
  fill(s5[3]);
  box(100, 0, 100);

  translate(-100, 200, 0);
  fill(s6[0]);
  box(100, 0, 100);
  translate(100, 0, 0);
  fill(s6[1]);
  box(100, 0, 100);
  translate(-100, 0, 100);
  fill(s6[2]);
  box(100, 0, 100);
  translate(100, 0, 0);
  fill(s6[3]);
  box(100, 0, 100);
}

function keyPressed() {
  if (key == '1') {
    moveBottomRight();
  }
  
  if (key == '2') {
    moveBottomLeft();
  }
  
  if (key == '3') {
    moveTopRight();
  }
  
  if (key == '4') {
    moveTopLeft();
  }
  
  if (key == '5') {
    moveRedRightUp();
  }
  
  if (key == '6') {
    moveRedRightDown()
  }
  
  if (key == '7') {
    moveRedLeftUp();
  }
  
  if (key == '8') {
    moveRedLeftDown() 
  }
  
  if (key == '9') {
    moveGreenLeftUp()
  }
  
  if (key == '0') {
    moveGreenLeftDown()
  }
  
  if (key == 'q') {
    moveGreenRightUp() 
  }
  
  if (key == 'w') {
    moveGreenRightDown()
  }
}

function moveBottomRight() {
  var p0s0 = sList[0][0];
  var p1s0 = sList[0][1];
  var p0s1 = sList[1][0];
  var p1s1 = sList[1][1];
  var p0s2 = sList[2][0];
  var p1s2 = sList[2][1];
  var p0s3 = sList[3][0];
  var p1s3 = sList[3][1];
  
  let p0s5 = sList[5][0];
  let p1s5 = sList[5][1];
  let p2s5 = sList[5][2];
  let p3s5 = sList[5][3];
  
  sList[0][0] = p0s3;
  sList[0][1] = p1s3;
  sList[1][0] = p0s0;
  sList[1][1] = p1s0;
  sList[2][0] = p0s1;
  sList[2][1] = p1s1;
  sList[3][0] = p0s2;
  sList[3][1] = p1s2;
  
  sList[5][0] = p1s5;
  sList[5][2] = p0s5;
  sList[5][3] = p2s5;
  sList[5][1] = p3s5;
}

function moveBottomLeft() {
  let p0s0 = sList[0][0];
  let p1s0 = sList[0][1];
  let p0s1 = sList[1][0];
  let p1s1 = sList[1][1];
  let p0s2 = sList[2][0];
  let p1s2 = sList[2][1];
  let p0s3 = sList[3][0];
  let p1s3 = sList[3][1];
  
  let p0s5 = sList[5][0];
  let p1s5 = sList[5][1];
  let p2s5 = sList[5][2];
  let p3s5 = sList[5][3];
  
  sList[0][0] = p0s1;
  sList[0][1] = p1s1;
  sList[3][0] = p0s0;
  sList[3][1] = p1s0;
  sList[2][0] = p0s3;
  sList[2][1] = p1s3;
  sList[1][0] = p0s2;
  sList[1][1] = p1s2;
  
  sList[5][0] = p2s5;
  sList[5][2] = p3s5;
  sList[5][3] = p1s5;
  sList[5][1] = p0s5;
}

function moveTopRight() {
  let p2s0 = sList[0][2];
  let p3s0 = sList[0][3];
  let p2s1 = sList[1][2];
  let p3s1 = sList[1][3];
  let p2s2 = sList[2][2];
  let p3s2 = sList[2][3];
  let p2s3 = sList[3][2];
  let p3s3 = sList[3][3];
  
  let p0s4 = sList[4][0];
  let p1s4 = sList[4][1];
  let p2s4 = sList[4][2];
  let p3s4 = sList[4][3];
  
  sList[0][2] = p2s3;
  sList[0][3] = p3s3;
  sList[1][2] = p2s0;
  sList[1][3] = p3s0;
  sList[2][2] = p2s1;
  sList[2][3] = p3s1;
  sList[3][2] = p2s2;
  sList[3][3] = p3s2;
  
  sList[4][0] = p2s4
  sList[4][1] = p0s4
  sList[4][2] = p3s4
  sList[4][3] = p1s4
}

function moveTopLeft() {
  let p2s0 = sList[0][2];
  let p3s0 = sList[0][3];
  let p2s1 = sList[1][2];
  let p3s1 = sList[1][3];
  let p2s2 = sList[2][2];
  let p3s2 = sList[2][3];
  let p2s3 = sList[3][2];
  let p3s3 = sList[3][3];
  
  let p0s4 = sList[4][0]
  let p1s4 = sList[4][1]
  let p2s4 = sList[4][2]
  let p3s4 = sList[4][3]
  
  sList[0][2] = p2s1;
  sList[0][3] = p3s1;
  sList[3][2] = p2s0;
  sList[3][3] = p3s0;
  sList[2][2] = p2s3;
  sList[2][3] = p3s3;
  sList[1][2] = p2s2;
  sList[1][3] = p3s2;
  
  sList[4][0] = p1s4
  sList[4][1] = p3s4
  sList[4][2] = p0s4
  sList[4][3] = p2s4
}

function moveRedRightUp() {
  let p1s0 = sList[0][1];
  let p3s0 = sList[0][3];
  let p1s4 = sList[4][1];
  let p3s4 = sList[4][3];
  let p0s2 = sList[2][0];
  let p2s2 = sList[2][2];
  let p1s5 = sList[5][1];
  let p3s5 = sList[5][3];
  
  let p0s1 = sList[1][0];
  let p1s1 = sList[1][1];
  let p2s1 = sList[1][2];
  let p3s1 = sList[1][3];
  
  sList[0][1] = p1s5;
  sList[0][3] = p3s5;
  sList[4][1] = p1s0;
  sList[4][3] = p3s0;
  sList[2][2] = p1s4;
  sList[2][0] = p3s4;
  sList[5][1] = p2s2;
  sList[5][3] = p0s2;
  
  sList[1][0] = p1s1;
  sList[1][2] = p0s1;
  sList[1][3] = p2s1;
  sList[1][1] = p3s1;
}

  function moveRedRightDown() {
  let p1s0 = sList[0][1];
  let p3s0 = sList[0][3];
  let p1s4 = sList[4][1];
  let p3s4 = sList[4][3];
  let p0s2 = sList[2][0];
  let p2s2 = sList[2][2];
  let p1s5 = sList[5][1];
  let p3s5 = sList[5][3];
  
  let p0s1 = sList[1][0];
  let p1s1 = sList[1][1];
  let p2s1 = sList[1][2];
  let p3s1 = sList[1][3];
  
  sList[0][1] = p1s4;
  sList[0][3] = p3s4;
  sList[4][1] = p2s2;
  sList[4][3] = p0s2;
  sList[2][2] = p1s5;
  sList[2][0] = p3s5;
  sList[5][1] = p1s0;
  sList[5][3] = p3s0;
  
  sList[1][0] = p2s1;
  sList[1][2] = p3s1;
  sList[1][3] = p1s1;
  sList[1][1] = p0s1;
}

function moveRedLeftUp() {
  let p0s0 = sList[0][0];
  let p2s0 = sList[0][2];
  let p0s4 = sList[4][0];
  let p2s4 = sList[4][2];
  let p1s2 = sList[2][1];
  let p3s2 = sList[2][3];
  let p0s5 = sList[5][0];
  let p2s5 = sList[5][2];
  let p0s3 = sList[3][0]
  let p1s3 = sList[3][1]
  let p2s3 = sList[3][2]
  let p3s3 = sList[3][3]
  
  sList[0][0] = p0s5;
  sList[0][2] = p2s5;
  sList[4][0] = p0s0;
  sList[4][2] = p2s0;
  sList[2][3] = p0s4;
  sList[2][1] = p2s4;
  sList[5][0] = p3s2;
  sList[5][2] = p1s2;
  
  sList[3][0] = p2s3
  sList[3][1] = p0s3
  sList[3][2] = p3s3
  sList[3][3] = p1s3
}


function moveRedLeftDown() {
  let p0s0 = sList[0][0];
  let p2s0 = sList[0][2];
  let p0s4 = sList[4][0];
  let p2s4 = sList[4][2];
  let p1s2 = sList[2][1];
  let p3s2 = sList[2][3];
  let p0s5 = sList[5][0];
  let p2s5 = sList[5][2];
  let p0s3 = sList[3][0];
  let p1s3 = sList[3][1];
  let p2s3 = sList[3][2];
  let p3s3 = sList[3][3];
  
  sList[0][0] = p0s4;
  sList[0][2] = p2s4;
  sList[4][0] = p1s2;
  sList[4][2] = p3s2;
  sList[2][3] = p0s5;
  sList[2][1] = p2s5;
  sList[5][0] = p2s0;
  sList[5][2] = p0s0;
  
  sList[3][0] = p1s3;
  sList[3][1] = p3s3;
  sList[3][2] = p0s3;
  sList[3][3] = p2s3;
}

function moveGreenLeftUp() {
  let p0s1 = sList[1][0];
  let p2s1 = sList[1][2];
  let p0s4 = sList[4][0];
  let p1s4 = sList[4][1];
  let p1s3 = sList[3][1];
  let p3s3 = sList[3][3];
  let p2s5 = sList[5][2];
  let p3s5 = sList[5][3];
  let p0s0 = sList[0][0];
  let p1s0 = sList[0][1];
  let p2s0 = sList[0][2];
  let p3s0 = sList[0][3];
  
  sList[4][1] = p0s1;
  sList[4][0] = p2s1;
  sList[1][0] = p2s5;
  sList[1][2] = p3s5;
  sList[3][1] = p0s4;
  sList[3][3] = p1s4;
  sList[5][2] = p1s3;
  sList[5][3] = p3s3;
  
  sList[0][0] = p2s0;
  sList[0][1] = p0s0;
  sList[0][2] = p3s0;
  sList[0][3] = p1s0;
}

function moveGreenLeftDown() {
  let p0s1 = sList[1][0];
  let p2s1 = sList[1][2];
  let p0s4 = sList[4][0];
  let p1s4 = sList[4][1];
  let p1s3 = sList[3][1];
  let p3s3 = sList[3][3];
  let p2s5 = sList[5][2];
  let p3s5 = sList[5][3];
  let p0s0 = sList[0][0];
  let p1s0 = sList[0][1];
  let p2s0 = sList[0][2];
  let p3s0 = sList[0][3];
  
  sList[4][1] = p1s3;
  sList[4][0] = p3s3;
  sList[1][0] = p1s4;
  sList[1][2] = p0s4;
  sList[3][1] = p3s5;
  sList[3][3] = p2s5;
  sList[5][2] = p0s1;
  sList[5][3] = p2s1;
  
  sList[0][0] = p1s0;
  sList[0][1] = p3s0;
  sList[0][2] = p0s0;
  sList[0][3] = p2s0;
}
function moveGreenRightUp() {
  let p1s1 = sList[1][1];
  let p3s1 = sList[1][3];
  let p2s4 = sList[4][2];
  let p3s4 = sList[4][3];
  let p0s3 = sList[3][0];
  let p2s3 = sList[3][2];
  let p0s5 = sList[5][0];
  let p1s5 = sList[5][1];

  let p0s2 = sList[2][0];
  let p1s2 = sList[2][1];
  let p2s2 = sList[2][2];
  let p3s2 = sList[2][3];
  
  sList[4][3] = p1s1;
  sList[4][2] = p3s1;
  sList[1][1] = p0s5;
  sList[1][3] = p1s5;
  sList[3][0] = p2s4;
  sList[3][2] = p3s4;
  sList[5][0] = p2s3;
  sList[5][1] = p0s3;

  sList[2][0] = p1s2;
  sList[2][1] = p3s2;
  sList[2][2] = p0s2;
  sList[2][3] = p2s2;
}

function moveGreenRightDown() {
  let p1s1 = sList[1][1];
  let p3s1 = sList[1][3];
  let p2s4 = sList[4][2];
  let p3s4 = sList[4][3];
  let p0s3 = sList[3][0];
  let p2s3 = sList[3][2];
  let p0s5 = sList[5][0];
  let p1s5 = sList[5][1];

  let p0s2 = sList[2][0];
  let p1s2 = sList[2][1];
  let p2s2 = sList[2][2];
  let p3s2 = sList[2][3];
  
  sList[4][3] = p2s3;
  sList[4][2] = p0s3;
  sList[1][1] = p3s4;
  sList[1][3] = p2s4;
  sList[3][0] = p1s5;
  sList[3][2] = p0s5;
  sList[5][0] = p1s1;
  sList[5][1] = p3s1;

  sList[2][0] = p2s2;
  sList[2][1] = p0s2;
  sList[2][2] = p3s2;
  sList[2][3] = p1s2;
}

  
