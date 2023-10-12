let juego;

function setup() {
  createCanvas(400, 400);
  juego = new Juego();
  juego.setup(); // Llama al método setup de la clase Juego
}

function draw() {
  juego.dibujo(); // Llama al método dibujo de la clase Juego
}

function mousePressed() {
  juego.pantalla(); // Llama al método pantalla de la clase Juego
}

function keyPressed() {
  juego.mover(); // Llama al método mover de la clase Juego
}
