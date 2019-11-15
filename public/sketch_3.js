let img;
let futura;
let logo;

function preload() {
    logo = loadImage("nike-logo.svg");
    futura = loadFont('futura_condensed_bold.otf');
    img = loadImage("temp.png");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(16);

  logo.filter(INVERT)
  image(logo, width - logo.width - 50, 50)  

  imageMode(CENTER);
  img.resize(width, 0);
  
  textSize(height/3);
  fill(246, 203, 91);
  textFont(futura);
  text('M O', 0, height/2);
  
  img.filter(GRAY);
  img.filter(POSTERIZE, 40);

  image(img, width/2, (2 * height - img.height)/2);

  fill(246, 203, 91);
  text('V E', width/4, 7 * height/8);

}