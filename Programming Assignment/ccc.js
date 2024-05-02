// Colorful Circle Clicker
let circleSize = 50;

function setup() {
  // Create a canvas of size 400x400 pixels
  createCanvas(400, 400);
  
  // Display title outside canvas
  let title = createElement('h2', 'Colorful Circle Clicker');
  title.position(20, 20);
}

function draw() {
  // Set the background to light gray
  background(220);
  
  // Draw a circle at the current mouse position
  ellipse(mouseX, mouseY, circleSize, circleSize);
}

function mousePressed() {
  // Change circle size randomly on mouse press
  circleSize = random(20, 100);

  // Change circle color randomly on mouse press
  let r = random(255);
  let g = random(255);
  let b = random(255);
  fill(r, g, b); // Set fill color to random RGB values
}
