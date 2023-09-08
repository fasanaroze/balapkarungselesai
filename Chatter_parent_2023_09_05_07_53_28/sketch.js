let pemain1, pemain2, pemain3, pemain4
function setup() {
  createCanvas(600, 500);
  pemain1 = new pemain(100, 'red')
  pemain2 = new pemain(height-100, 'blue')
  pemain3 = new pemain(height /2, 'yellow')
  pemain4 = new pemain(height, 'pink')
}



function draw() {
  background(220);
  
  pemain1.tampilkan()
  pemain2.tampilkan()
  pemain3.tampilkan()
  pemain4.tampilkan()
  
  pemain1.finish()
  pemain2.finish()
  pemain3.finish()
  pemain4.finish()

}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    pemain1.maju()
  }
  else if (keyCode === RIGHT_ARROW){
    pemain2.maju()
  }
  else if (keyCode === UP_ARROW){
    pemain3.maju()
  
  }
    else if (keyCode === DOWN_ARROW){
    pemain4.maju()
  }
}

