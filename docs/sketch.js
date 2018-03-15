var s ;
var shapeColor ;
var preS = 0 ;
var curS ;
function setup() {
	createCanvas(windowWidth, windowHeight);
	shapeColor = color(200,0,0);
}

function draw() {
	clear();
	//background(0,126,255);
	s=50+second()*10;
  curS = millis();
	noStroke();
  fill(shapeColor)
	ellipse(windowWidth/2,windowHeight/2,15+s,15+s);
  if(curS-preS > 1000){
    preS = curS ;
    colorChange();
  }
}

function colorChange(){
  shapeColor = color(random(255),random(255),random(255))
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
