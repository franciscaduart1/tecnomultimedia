class Aventura {
  constructor() {
    this.estado = 0;
    this.textos = [];
    this.imagenes = [];
    this.botones = [];
    this.textManager = null;
    this.juego = new Juego();
    this.iniciarJuego();
    this.textoResultado="";
  
  }
 iniciarJuego() {
    this.juego.setup();
    this.juego.estado = "inicio";
  
   }
    mostrarResultado() {
      fill(0);
    textSize(32);
    textAlign(CENTER,CENTER);
    if (this.juego.estado === "ganaste") {
      text("¡Ganaste!", 300,200);
    } else if (this.juego.estado === "perdiste") {
      text("Perdiste!", 300,200);
      const botonVolverInicio = this.botones["volverInicio"][0];
      botonVolverInicio.mostrar();
    }
    

  
}
juegoEstado(estado) {
  this.juego.estado = estado;
}
  setup() {
    textFont("Arial");
    this.imagenes[0] = loadImage("data/Fondo_00.png");
    this.textos[0] = "LOS TRES CERDITOS";
    this.botones[0] = [
      new Boton(200,300, 120, 80, "Iniciar", 1),
      new Boton(400,300, 120, 80, "Creditos", 9)
    ];

    this.imagenes[1] = loadImage("data/Fondo_11.png");
    this.textos[1] = "Habia una vez tres cerditos que vivian en el bosque con el unico problema de que eran asechados por un lobo. Para que el los deje de asechar ellos deciden A:construirse una casa o B:hacerse amigos del lobo";
    this.botones[1] = [
      new Boton(400,300, 120, 80, "B", 6),
      new Boton(200,300, 120, 80, "A", 2)
    ];
 this.imagenes[2] = loadImage("data/Fondo_05.png");
    this.textos[2] = "Les gusta la idea pero no se deciden con que material hacerla. A:paja o B:ladrillos";
    this.botones[2] = [
      new Boton(400,300, 120, 80, "B", 4),
      new Boton(200,300, 120, 80, "A", 11)
    ];
 this.imagenes[3] = loadImage("data/Fondo_06.png");
    this.textos[3] =  "El lobo les destruye la casa muy rapido y los empieza a perseguir. Quieres ayudar al lobo a atraparlos?";
    this.botones[3] = [
      //new Boton(400,300, 120, 80, "No",0),
      new Boton(300,300, 120, 80, "INICIAR",10)
    ];
     this.imagenes[4] = loadImage("data/Fondo_08.png");
    this.textos[4] =  "El lobo no logra destruir esta casa , los cerditos logran refugiarse ahi y viven felices para siempre.FIN";
    this.botones[4] = [
      new Boton(400,300, 120, 80, "volver al inicio", 0),
      new Boton(200,300, 120, 80, "creditos",9)
    ];
      this.imagenes[5] = loadImage("data/Fondo_05.png");
    this.textos[5] =   "FIN";
    this.botones[5] = [
      new Boton(400,300, 120, 80, "volver al inicio", 0),
      new Boton(200,300, 120, 80, "creditos", 9)
    ];
      this.imagenes[6] = loadImage("data/Fondo_04.png");
    this.textos[6] =    "Le proponen al lobo darle y hacer lo que el quiera con tal de que no los moleste mas. A:el lobo acepta o B:el lobo no acepta";
    this.botones[6] = [
      new Boton(400,300, 120, 80, "B", 8),
      new Boton(200,300, 120, 80, "A", 7)
    ];
      this.imagenes[7] = loadImage("data/Fondo_01.png");
    this.textos[7] =    "El lobo los hace buscar su comida,los hace construirle una casa y muchas cosas mas. Los cerditos estan conformes con esto y viven felices y tranquilos para siempre";
    this.botones[7] = [
      new Boton(400,300, 120, 80, "volver al inicio", 0),
      new Boton(200,300, 120, 80, "creditos", 9)
    ];
      this.imagenes[8] = loadImage("data/Fondo_11.png");
    this.textos[8] =    "Al lobo no le gusta la idea de ser amigo de ellos y decide seguir asechandoles para siempre";
    this.botones[8] = [
      new Boton(400,300, 120, 80, "volver al inicio", 0),
      new Boton(200,300, 120, 80, "creditos", 9)
    ];
    
this.imagenes[9] = loadImage("data/Fondo_09.png");
    this.textos[9] =  "Directora:Francisca Duarte                                        Artista:Francisca Duarte               Programadora:Francisca Duarte ";
   this.botones[9] = [
      new Boton(500,100, 120, 80, "Volver al inicio", 0),
     
    ];
       this.imagenes[10] = loadImage("data/images4.jpg");
  this.textos[10] =    "Atrapa a todos los cerditos en menos de 20 segundos";
    this.botones[10] = [
      new Boton(300,300, 120, 80, "Iniciar", 12),

    ];
    this.imagenes[11] = loadImage("data/Fondo_06.png");
    this.textos[11] =  "El lobo les destruye la casa muy rapido y los empieza a perseguir. Quieres ayudar al lobo a atraparlos?";
    this.botones[11] = [
      new Boton(400,300, 120, 80, "No",0),
      new Boton(200,300, 120, 80, "Si",3)
    ];
  
    this.botones["volverInicio"]=[
    new Boton(300,300,120,100,"volver al inicio",0),
    ];
    if (this.estado === "volverInicio") {
  this.botones["volverInicio"].forEach(boton => boton.mostrar());
}
   
    
    this.textManager = new GestorTexto(0, 500, 600, 90);
  }

  
  mostrarVolverInicio() {
  this.botones["volverInicio"].forEach(boton => boton.mostrar());
}
  actualizar() {
    console.log("Actualizando, Estado:", this.estado, "Juego Estado:", this.juego.estado);
  this.textManager.setTexto(this.textos[this.estado]);
  if (this.estado === 10) {
    this.juego.actualizar();
    if (this.juego.estado === "ganaste"){
      this.textoResultado="¡GANASTE!";
      this.estado=12;
       this.mostrarResultado();
         this.juego.reiniciarJuego();
    }else if(this.juego.estado === "perdiste") {
      this.textoResultado="!PERDISTE!"
        // Cambiar al estado 12 para mostrar automáticamente el botón
        this.estado = 12;
        this.mostrarResultado();
        this.juego.reiniciarJuego();
    }
  }
  if(this.estado==12){
    this.botones["volverInicio"].forEach(boton=>boton.mostrar());
}

  }

 mostrar() {
  
  // Mostrar la imagen según el estado
  if(this.imagenes[this.estado]){
  image(this.imagenes[this.estado], 0, 0);
  }

  // Mostrar botones según el estado
  if (this.estado !== 10&&  this.estado !== 12) {
    this.botones[this.estado].forEach(boton => boton.mostrar());
  } 
    this.textManager.mostrar();

  if(this.estado===10){
    this.juego.mostrar();
  }
      if (this.estado === 12) {
      this.botones["volverInicio"].forEach(boton => boton.mostrar());
    }

}


ManejarClick() {
  const botones = this.botones[this.estado]|| [];
  for (let i = 0; i < botones.length; i++) {
    if (botones[i].colisionaConMouse()) {
      this.estado = botones[i].proximoEstado;

      if (this.estado === 10) {
        this.juego.setup();
        this.juego.estado = "jugando";
      }else  if (this.estado === 12) {
            // Reiniciar el juego y cambiar al estado 0
            this.iniciarJuego();
            this.estado = 0;
       
          }else{
            this.estado=botones[i].proximoEstado;
          }
       
      return true;
    }
  }
  if (this.estado === 12) {
      const botonVolverInicio = this.botones["volverInicio"][0];
      if (botonVolverInicio.colisionaConMouse()) {
        // Reiniciar el juego y cambiar al estado 0
        this.iniciarJuego();
        this.estado = 0;
        return true;
      }
  }
      
return false;
}

}
