
class Boton {
  constructor(x, y, ancho, alto, etiqueta, proximoEstado) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.etiqueta = etiqueta;
    this.proximoEstado = proximoEstado;
  }

  mostrar() {
    fill(200);
    stroke(100);
    rectMode(CENTER);
    rect(this.x, this.y, this.ancho, this.alto);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(this.etiqueta, this.x, this.y);
  }

  colisionaConMouse() {
 return mouseX >= this.x - this.ancho / 2 &&
      mouseX <= this.x + this.ancho / 2 &&
      mouseY >= this.y - this.alto / 2 &&
      mouseY <= this.y + this.alto / 2;
  }

  ManejarClick() {
     if (this.colisionaConMouse()) {
      console.log(this.proximoEstado);
      
      return true; 
    }
    return false; 
  }
  }
  
