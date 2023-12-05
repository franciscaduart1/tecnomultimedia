class Lobo {
  constructor() {
      this.x = constrain(random(width), 0, width - 50); 
    this.y = constrain(random(height), 0, height - 50); 
     this.velocidad = 15; 
     this.tamano = 150;
    this.imagenLobo = loadImage("data/imagesss.jpg");
  }

  mostrar() {
    image(this.imagenLobo, this.x, this.y,this.tamano,this.tamano ); 
  }
  
  moverIzquierda() {
    this.x = constrain(this.x - this.velocidad, 0, width - this.tamano ); 
  }

  moverDerecha() {
    this.x = constrain(this.x + this.velocidad, 0, width - this.tamano); 
  
  }

  moverArriba() {
    this.y = constrain(this.y - this.velocidad, 0, height - this.tamano);
  }

  moverAbajo() {
    this.y = constrain(this.y +  this.velocidad, 0, height - this.tamano); 
  }

   atrapar(cerdito) {
    // distancia entre el lobo y el cerdito
    let distancia = dist(this.x, this.y, cerdito.x, cerdito.y);

     //si la distancia es menor que 30 el lobo atrapa al cerdito

    return distancia<100;
  }
  }
