function setup() {
  createCanvas(500, 500);
  background("#0012FA");
}

function draw() {
  stroke("#000000");
  fill("#00BCD4");
  
  
  if(mouseIsPressed) {
  rect(mouseX,mouseY,20,20);
  }
}
