let img;

function preload() {
    img = loadImage("temp.png");
}

function setup() {
//   console.log(pixelDensity());
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
  let c1 = color(238, 90, 140);
  let c2 = color(250, 12, 34);
//   setGradient(0, 0, width, height, c1, c2, 1);
  imageMode(CENTER);
  img.resize(9 * width/10, 0);
//   tint(250, 12, 34)
//   tint(6, 0, 254)
  blendMode(HARD_LIGHT)
//   tint(50, 140, 254)
  img.filter(GRAY)
  image(img, width/2, height/2 - height/8);
}


function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis == 0) {  // Top to bottom gradient
      for (var i = y; i <= y+h; i++) {
        var inter = map(i, y, y+h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x+w, i);
      }
    }  
    else if (axis == 1) {  // Left to right gradient
      for (var i = x; i <= x+w; i++) {
        var inter = map(i, x, x+w, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y+h);
      }
    }
  }