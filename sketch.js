let img;
let startSize;
const finalSize = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  img = loadImage("test-image.png");
  
  startSize = width/8;
  
  stroke(0);
  strokeWeight(3);

  const numSquaresX = width/startSize;
  const numSquaresY = height/startSize;
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
  
}

function draw() {
    image(img, 0, 0);
}

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

