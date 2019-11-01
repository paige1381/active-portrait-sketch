let img;
let startSize;
const finalSize = 10;

function preload() {
    img = loadImage("test-image.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  imageMode(CENTER);
  img.resize(0, height/2);
  
  startSize = width/8;
  
  strokeWeight(3);
  stroke(255);
  noFill();
  const numSquaresX = width/startSize;
  let numSquaresY = height/startSize;
  let xPos = 0;
  let yPos = 0;
  
  for (let i = 0; i < numSquaresX; i++) {
    for (let j = 0; j < numSquaresY; j++) {
      
      const steps = Math.round(random(4, 7));
      const offset = random(-3, 3);

      drawSquares(xPos, yPos, startSize, finalSize, steps, offset);
      
      yPos += startSize;
    }
    
    xPos += startSize;
    yPos = 0;
  }

  image(img, width/2, height/2);
  filter(GRAY);
  
  stroke(0);
  fill(255);
  numSquaresY = height/2/startSize;
  xPos = 0;
  yPos = height - startSize;

  for (let i = 0; i < numSquaresX; i++) {
    for (let j = 0; j < Math.round(random(numSquaresY/2, numSquaresY)); j++) {
      
      const steps = Math.round(random(4, 7));
      const offset = random(-3, 3);

      drawSquares(xPos, yPos, startSize, finalSize, steps, offset);
      
      yPos -= startSize;
    }
    
    xPos += startSize;
    yPos = height - startSize;
  }

}

function draw() {}

function drawSquares(x, y, startSize, finalSize, steps, offset) {
  
  const diff = (startSize/2 - finalSize/2)/(steps - 1)
  
  let xPos = x;
  let yPos = y;
  
  let size = startSize
  
  for (let i = 0; i < steps; i++) {
    
    rect(xPos, yPos, size, size);
    
    xPos += (diff + offset);
    yPos += (diff + offset);
    size -= (2*diff);
  }
  
}
