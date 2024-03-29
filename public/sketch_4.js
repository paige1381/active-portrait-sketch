let futura;
let img;
let logo;

function preload() {
    logo = loadImage("nike-logo.svg");
    img = loadImage("temp.png");
    futura = loadFont('futura_condensed_bold.otf')
}

function setup() {
    let rows = 8;
    let letters = ["N", "I", "K", "E"];
    let word = "NIKE";
    let wordWidth;
    let textWidths = [];
    let textHeight;
 
    createCanvas(windowWidth, windowHeight);
    background(255);

    imageMode(CENTER);
    img.resize(width, 0);

    textSize(height/rows);
    textFont(futura);
    
    textHeight = futura.textBounds(word, 0, 0, height/rows).h;
    for (let i = 0; i < letters.length; i++) {
        textWidths.push(textWidth(letters[i]));
    }
    wordWidth = textWidth(word);

    for (let i = 0; i <= height + textHeight; i += textHeight) {
        const offset = Math.floor(Math.random() * wordWidth);
        for (let j = -1 * offset; j <= width; j += wordWidth) {
            text(word, j, i);
        }
    }

    logo.filter(INVERT);
    tint(255, 0, 0, 230)
    console.log(height/rows - textHeight)
    image(logo, width - logo.width + 50, height/rows - textHeight + 50);  

    image(img, width/2, (2 * height - img.height)/2);
    
}