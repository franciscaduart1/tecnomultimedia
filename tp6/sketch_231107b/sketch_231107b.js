let juego;

function setup() {
  juego = new Juego();
  juego.setup();
  createCanvas(600, 600);
}

function draw() {
  juego.actualizar();
  juego.mostrar();
}

function mousePressed() {
  juego.ManejarClick();
}
