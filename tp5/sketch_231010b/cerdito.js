class Cerdito {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.velocidadX = random(1, 2); 
    this.velocidadY = random(1, 2); 
   this.imagen = imagenCerdito; 
  }

  mostrar() {
    image(this.imagen, this.x, this.y, 50, 50); 
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
