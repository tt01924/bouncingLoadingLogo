// Bouncing DVD Logo
// Daniel Shiffman
// https://thecodingtrain.com/challenges/131-bouncing-dvd-logo.html
// https://youtu.be/0j86zuqqTlQ
// https://editor.p5js.org/codingtrain/sketches/S-es-dYVn


let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r, g, b;

let startTime;

function preload() {
  dvd = loadImage('VEXLOGO.png');
}

// Initialize the setup immediately
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2 - dvd.width / 2;
  y = height / 2 - dvd.height / 2;
  xspeed = 4;
  yspeed = 4;
  pickColor();

  // Record the start time
  startTime = millis();
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

  // Get the current time
  let currentTime = millis();
  
  // Check if 1 second has passed
  if (currentTime - startTime > 1000) {
    // Move the image only if more than 1 second has passed
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