//FRANCISCA DUARTE
//COMISION 3-TPN5
//VIDEO:https//youtu.be/DMBY9IrCP8U:
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
