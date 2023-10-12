let juego;

function setup() {
  createCanvas(400, 400);
  juego = new Juego();
  juego.setup(); 
}

function draw() {
  juego.dibujo(); 
}

function mousePressed() {
  juego.mousePressed(); 
}

function keyPressed() {
  juego.mover(); 
}
