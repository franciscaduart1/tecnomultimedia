let estadoJuego = "inicio"; 
let lobo;
let cerditos = [];
let cantidadCerditos = 10;
let tiempoInicio;
let duracionJuego = 20000; // milisegundos
let fondo;
let imagenLobo;
let imagenCerdito; 
let imagenInicio;

function preload() {
  fondo = loadImage("data/descarga.jpg"); 
  imagenLobo = loadImage("data/imagesss.jpg"); 
  imagenCerdito = loadImage("data/imagess.jpg"); 
    imagenInicio = loadImage("data/images4.jpg"); 
 
}
 


function setup() {
  createCanvas(400, 400);
  lobo = new Lobo();

  // Crear varios cerditos
  for (let i = 0; i < cantidadCerditos; i++) {
    cerditos.push(new Cerdito());
  }
}

function draw() {
   image(fondo, 0, 0, width, height);
   
 if (estadoJuego === "inicio") {
    // Pantalla de inicio
     image(imagenInicio, width / 2 - imagenInicio.width / 2, height / 2 - imagenInicio.height / 2);
    textSize(32);
    fill(0);
    text("Click para comenzar", 50, height / 2);
      textSize(15);
     text("Atrapa a todos los cerditos en menos de 20 segundos  ", 18, 280);
  } else if (estadoJuego === "jugando") {
   
    lobo.mostrar();

    // ver si atrapan a los cerditos 
    for (let i = cerditos.length - 1; i >= 0; i--) {
      cerditos[i].mover();
      cerditos[i].mostrar();
if (lobo.atrapar(cerditos[i])) {
        cerditos.splice(i, 1); // Eliminar el cerdito atrapado
      }
    }
 if (cerditos.length === 0) {
      estadoJuego = "ganaste";
    }
 let tiempoTranscurrido = millis() - tiempoInicio;
    if (tiempoTranscurrido >= duracionJuego) {
      estadoJuego = "perdiste";
    }
  } else if (estadoJuego === "ganaste") {
    textSize(32);
    fill(0, 0, 0);
    text("¡Ganaste!", 150, height / 2);
  } else if (estadoJuego === "perdiste") {
    textSize(32);
    fill(0, 0, 0);
    text("¡Perdiste! ", 150, height / 2);
  }
}

function mousePressed() {
  if (estadoJuego === "inicio") {
    estadoJuego = "jugando";
    tiempoInicio = millis();
  } else if (estadoJuego === "ganaste") {
    reiniciarJuego();
  }else if (estadoJuego === "perdiste") {
    reiniciarJuego();
    }
}

function reiniciarJuego() {
  estadoJuego = "inicio";
  cerditos = [];
  for (let i = 0; i < cantidadCerditos; i++) {
    cerditos.push(new Cerdito());
  }
  tiempoInicio = 0;
}

function keyPressed() {
  if (key === "a" || key === "A") {
    lobo.moverIzquierda();
  } else if (key === "d" || key === "D") {
    lobo.moverDerecha();
  } else if (key ==="w" || key === "W") {
    lobo.moverArriba();
  } else if (key === "s" || key === "S") {
    lobo.moverAbajo();
  }
}
