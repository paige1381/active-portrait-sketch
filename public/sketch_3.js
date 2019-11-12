let img;
let futura;

function preload() {
    img = loadImage("temp.png");
    futura = loadFont('futura_condensed_bold.otf')
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(16);

  imageMode(CENTER);
  img.resize(width, 0);
  
  textSize(height/3);
  fill(246, 203, 91);
  textFont(futura);
  text('M O', 0, height/2);
  
  img.filter(GRAY);
  img.filter(POSTERIZE, 40);

  image(img, width/2, height/2);

  fill(246, 203, 91);
  text('V E', width/4, 7 * height/8);

}