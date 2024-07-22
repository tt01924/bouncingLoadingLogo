// Bouncing DVD Logo
// Daniel Shiffman
// https://thecodingtrain.com/challenges/131-bouncing-dvd-logo.html
// https://youtu.be/0j86zuqqTlQ
// https://editor.p5js.org/codingtrain/sketches/S-es-dYVn

// let x;
// let y;

// let xspeed;
// let yspeed;

// let dvd;

// let r, g, b;

// function preload() {
//   dvd = loadImage('whiteLogo.png');
// }

// const myTimeout = setTimeout(setup, 2000) 


// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   x = random(width);
//   y = random(height);
//   xspeed = 4;
//   yspeed = 4;
//   pickColor();
// }

// function pickColor() {
//   r = random(100, 256);
//   g = random(100, 256);
//   b = random(100, 256);
// }

// function draw() {
//   background(10,1,);
//   // rect(x, y, 80, 60);
//   tint(r, g, b);
//   image(dvd, x, y);

//   x = x + xspeed;
//   y = y + yspeed;

//   if (x + dvd.width >= width) {
//     xspeed = -xspeed;
//     x = width - dvd.width;
//     pickColor();
//   } else if (x <= 0) {
//     xspeed = -xspeed;
//     x = 0;
//     pickColor();
//   }

//   if (y + dvd.height >= height) {
//     yspeed = -yspeed;
//     y = height - dvd.height;
//     pickColor();
//   } else if (y <= 0) {
//     yspeed = -yspeed;
//     y = 0;
//     pickColor();
//   }
// }

let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r, g, b;

function preload() {
  dvd = loadImage('whiteLogo.png');
}

// Initialize the setup after a delay
const myTimeout = setTimeout(setup, 2000);

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2 - dvd.width / 2;  // Center the image horizontally
  y = height / 2 - dvd.height / 2; // Center the image vertically
  xspeed = 4;
  yspeed = 4;
  pickColor();

  // Delay the movement by 1 second
  setTimeout(startMoving, 1000);
}

function startMoving() {
  loop();
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function draw() {
  background(10, 1);
  
  tint(r, g, b);
  image(dvd, x, y);

  // Move the image only if the draw loop is running
  if (isLooping()) {
    x = x + xspeed;
    y = y + yspeed;

    if (x + dvd.width >= width) {
      xspeed = -xspeed;
      x = width - dvd.width;
      pickColor();
    } else if (x <= 0) {
      xspeed = -xspeed;
      x = 0;
      pickColor();
    }

    if (y + dvd.height >= height) {
      yspeed = -yspeed;
      y = height - dvd.height;
      pickColor();
    } else if (y <= 0) {
      yspeed = -yspeed;
      y = 0;
      pickColor();
    }
  }
}