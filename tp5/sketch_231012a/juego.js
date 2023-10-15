class Juego {
  constructor() {
    this.estado = "inicio";
    this.lobo = new Lobo();
    this.cerditos = [];
    this.cantidadCerditos = 10;
    this.tiempoInicio = 0;
    this.duracionJuego = 20000; // milisegundos
  this.fondo = loadImage("data/descarga.jpg");
  this.imagenInicio = loadImage("data/images4.jpg");
  }

imagenes() {
   this.fondo = loadImage("data/descarga.jpg");
    this.imagenInicio = loadImage("data/images4.jpg");
  }

  setup() {
  
    // Crear varios cerditos
      for (let i = 0; i < this.cantidadCerditos; i++) {
      this.cerditos.push(new Cerdito());
    }
  }

  dibujo() {
    image(this.fondo, 0, 0, width, height);

    if (this.estado === "inicio") {
      // Pantalla de inicio
      image(this.imagenInicio, width / 2 - this.imagenInicio.width / 2, height / 2 - this.imagenInicio.height / 2);
      textSize(32);
      fill(0);
      text("Click para comenzar", 50, height / 2);
      textSize(15);
      text("Atrapa a todos los cerditos en menos de 20 segundos  ", 18, 280);
    } else if (this.estado === "jugando") {
      this.lobo.mostrar();

      // Ver si el lobo atrapa a los cerditos
      for (let i = this.cerditos.length - 1; i >= 0; i--) {
        this.cerditos[i].mover();
        this.cerditos[i].mostrar();
        if (this.lobo.atrapar(this.cerditos[i])) {
          this.cerditos.splice(i, 1); // Eliminar el cerdito atrapado
        }
      }
      if (this.cerditos.length === 0) {
        this.estado = "ganaste";
      }
      let tiempoTranscurrido = millis() - this.tiempoInicio;
      if (tiempoTranscurrido >= this.duracionJuego) {
        this.estado = "perdiste";
      }
    } else if (this.estado === "ganaste") {
      textSize(32);
      fill(0, 0, 0);
      text("¡Ganaste!", 150, height / 2);
    } else if (this.estado === "perdiste") {
      textSize(32);
      fill(0, 0, 0);
      text("¡Perdiste! ", 150, height / 2);
    }
  }

  mousePressed() {
    if (this.estado === "inicio") {
      this.estado = "jugando";
      this.tiempoInicio = millis();
    } else if (this.estado === "ganaste" || this.estado === "perdiste") {
      this.reiniciarJuego();
    }
  }

  reiniciarJuego() {
    this.estado = "inicio";
    this.cerditos = [];
    for (let i = 0; i < this.cantidadCerditos; i++) {
      this.cerditos.push(new Cerdito());
    }
    this.tiempoInicio = 0;
  }

  mover() {
    if (key === "a" || key === "A") {
      this.lobo.moverIzquierda();
    } else if (key === "d" || key === "D") {
      this.lobo.moverDerecha();
    } else if (key === "w" || key === "W") {
      this.lobo.moverArriba();
    } else if (key === "s" || key === "S") {
      this.lobo.moverAbajo();
    }
  }
}
