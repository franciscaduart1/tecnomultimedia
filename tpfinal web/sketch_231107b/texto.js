
class GestorTexto {
  constructor(x, y, ancho, alto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = "";
  }

  setTexto(nuevoTexto) {
    this.texto = nuevoTexto;
  }

  mostrar() {
    push();
    rectMode(CORNER);
    fill(255);
    rect(this.x, this.y, this.ancho, this.alto);
    fill(0);
    textSize(10);
    textLeading(40);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x, this.y, this.ancho, this.alto);
    pop();
  }
}
