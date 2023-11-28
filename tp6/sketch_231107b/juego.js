class Juego {
  constructor() {
    this.estado = 0;
    this.textos = [];
    this.imagenes = [];
    this.botones = [];
    this.textManager = null;
    this.setup();
  }

  setup() {
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
      new Boton(200,300, 120, 80, "A", 3)
    ];
 this.imagenes[3] = loadImage("data/Fondo_06.png");
    this.textos[3] =  "El lobo les destruye la casa muy rapido y se los come.FIN";
    this.botones[3] = [
      new Boton(400,300, 120, 80, "volver al inicio", 0),
      new Boton(200,300, 120, 80, "creditos", 9)
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

    
    this.textManager = new GestorTexto(0, 500, 600, 90);
  }

  actualizar() {
     this.textManager.setTexto(this.textos[this.estado]);
  }

  mostrar() {
    // Muestra imágenes y botones
    image(this.imagenes[this.estado], 0, 0);
    this.botones[this.estado].forEach(boton => boton.mostrar());
    this.textManager.mostrar();
  }

  ManejarClick() {
  this.botones[this.estado].forEach(boton => {
    if (boton.ManejarClick()) {
      // Si el botón fue clicado actualiza el estado del juego
      this.estado = boton.proximoEstado;
    }
  });
}
  }
