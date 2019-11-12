let img;

function preload() {
    img = loadImage("temp.png");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
//   // pink
//   background(237, 102, 197);
//   // blue
//   background(87, 179, 249);
  // orange
  background(239, 96, 44);
//   // yellow
//   background(246, 203, 91);

  imageMode(CENTER);
  img.resize(width, 0);
  
  img.filter(GRAY)
//   // pink
//   tint(237, 102, 197);
//   // blue
//   tint(87, 179, 249);
  // orange
  tint(239, 96, 44);
//   // yellow
//   tint(246, 203, 91)
  image(img, width/2, height/2);
}