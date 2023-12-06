//Francisca Duarte
//comision 3
//TPFINAL
//URL VIDEO:https://youtu.be/J0gVaaL5iT8
let aventura;

function setup() {
    createCanvas(600, 600);
  aventura = new Aventura();
  aventura.setup();
  
 
}

function draw() {
  aventura.actualizar();
  aventura.mostrar();
}

  function mousePressed() {
    if (aventura.ManejarClick()) {
    // Verificar si estás en el estado 10 y el juego ha terminado
    if (aventura.estado === 10 && (aventura.juego.estado === "ganaste" || aventura.juego.estado === "perdiste")) {
      // Cambiar al estado 12 para mostrar el botón de volver al inicio
      aventura.estado = 12;
    }

    // volver al inicio en el estado 12
    if (aventura.estado === 12) {
      for (let i = 0; i < aventura.botones[12].length; i++) {
        if (aventura.botones[12][i].ManejarClick()) {
          aventura.estado = aventura.botones[12][i].proximoEstado;
        }
      }
    }
  }
}

function keyPressed() {
  if (aventura.estado === 10 && aventura.juego.estado === "jugando") {
    aventura.juego.manejarEntrada();
  }
}
