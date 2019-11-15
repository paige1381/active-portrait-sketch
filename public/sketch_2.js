let img;
let logo;
let futura;

function preload() {
    logo = loadImage("nike-logo.svg");
    raleway = loadFont('raleway-black.ttf');
    img = loadImage("temp.png");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(214, 241, 84);

  image(logo, width - logo.width - 50, 50)  

  imageMode(CENTER);
  img.resize(width, 0);
  
  tint(0, 60)
  image(img, 2 * width/5, (2 * height - img.height)/2);

  fill(0);
  textFont(raleway);
  textSize(height/4);
  text('M', width/8, height/2);

  textSize(height/5);
  text('E', 3 * width/4, 5 * height/6);

  tint(255, 255)
  image(img, width/2, (2 * height - img.height)/2);

  textSize(height/6);
  text('O', 3 * width/5, 3 * height/5);

  textSize(height/4);
  text('V', width/4, 7 * height/8);

  
}