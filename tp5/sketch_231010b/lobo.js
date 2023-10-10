
class Lobo {
  constructor() {
      this.x = constrain(random(width), 0, width - 50); 
    this.y = constrain(random(height), 0, height - 50); 
    this.imagen = imagenLobo;
  }

  mostrar() {
    image(this.imagen, this.x, this.y, 50, 50); 
  }
  
  moverIzquierda() {
    this.x = constrain(this.x - 8, 0, width - 50); 
  }

  moverDerecha() {
    this.x = constrain(this.x + 8, 0, width - 50); 
  }

  moverArriba() {
    this.y = constrain(this.y - 8, 0, height - 50); 
  }

  moverAbajo() {
    this.y = constrain(this.y + 8, 0, height - 50); 
  }

   atrapar(cerdito) {
    // distancia entre el lobo y el cerdito
    let distancia = dist(this.x, this.y, cerdito.x, cerdito.y);

    // Si la distancia es menor que un valor determinado (por ejemplo, 30), considera que el lobo ha atrapado al cerdito
    if (distancia < 30) {
      return true;
    } else {
      return false;
    }
  }
  }
