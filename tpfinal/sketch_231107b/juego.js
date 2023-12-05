class Juego {
  constructor() {
    this.estado = "inicio";
    this.lobo = new Lobo();
    this.cerditos = [];
    this.cantidadCerditos = 10;
    this.tiempoInicio = 0;
    this.duracionJuego = 20000; // milisegundos
 // this.fondo = loadImage("data/descarga.jpg");
  this.imagenInicio = loadImage("data/images4.jpg");
  }

imagenes() {
   //this.fondo = loadImage("data/descarga.jpg");
    this.imagenInicio = loadImage("data/images4.jpg");
  }

  setup() {
     this.fondo = loadImage("data/descarga.jpg");

    // Crear varios cerditos
      for (let i = 0; i < this.cantidadCerditos; i++) {
      this.cerditos.push(new Cerdito());
    }
  }


    actualizar() {
  if (this.estado == "jugando") {
    this.lobo.mostrar();
    for (let i = this.cerditos.length - 1; i >= 0; i--) {
      this.cerditos[i].mover();
      this.cerditos[i].mostrar();
      if (this.lobo.atrapar(this.cerditos[i])) {
        this.cerditos.splice(i, 1);
      }
    }
    if (this.cerditos.length == 0) {
      this.estado = "ganaste";
    }
    let tiempoTranscurrido = millis() - this.tiempoInicio;
    if (tiempoTranscurrido >= this.duracionJuego) {
      this.estado = "perdiste";
    }

  }
    }
  
mostrar() {

  if (this.estado === "ganaste" || this.estado === "perdiste") {
      aventura.mostrarResultado();
  }else{
    image(this.fondo, 0, 0, width, height);
    this.lobo.mostrar();
    for (let i = this.cerditos.length - 1; i >= 0; i--) {
      this.cerditos[i].mostrar();
    }
 
  }
}


  mousePressed() {
    if (this.estado == "inicio") {
      this.estado = "jugando";
      this.tiempoInicio = millis();
  
    }else if(this.estado==="perdiste" || this.estado === "ganaste") {
    // Si el juego ha terminado, reinícialo al hacer clic en cualquier lugar
    this.reiniciarJuego();
    this.estado = "inicio";
  }
}
  

  reiniciarJuego() {
    this.estado = "inicio";
    this.cerditos = [];
    for (let i = 0; i < this.cantidadCerditos; i++) {
      this.cerditos.push(new Cerdito());
    }
    this.tiempoInicio = millis();//0
 
  }
  manejarEntrada() {
    if (this.estado === "jugando") {
      if (keyCode === UP_ARROW) {
        this.lobo.moverArriba();
      } else if (keyCode === DOWN_ARROW) {
        this.lobo.moverAbajo();
      } else if (keyCode === LEFT_ARROW) {
        this.lobo.moverIzquierda();
      } else if (keyCode === RIGHT_ARROW) {
        this.lobo.moverDerecha();
      }
    }
  }
}
