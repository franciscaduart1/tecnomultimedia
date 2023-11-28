class Cerdito {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.velocidadX = random(1, 2); 
    this.velocidadY = random(1, 2); 
 //this.imagen = imagenCerdito; 
 this.imagenCerdito = loadImage("data/imagess.jpg");
  }
     this.x = constrain(random(width), 0, width - 50); 
    this.y = constrain(random(height), 0, height - 50); 
    this.imagenLobo = loadImage("data/imagesss.jpg");
  }
  }
  
  mover() {
    
    this.x += this.velocidadX;
    this.y += this.velocidadY;

    // Hacer que los cerditos reboten 
    if (this.x < 0 || this.x > width) {
      this.velocidadX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.velocidadY *= -1;
    }
  }
}
