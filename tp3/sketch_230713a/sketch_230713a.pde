//Francisca Duarte
//Comision 3-tp3
//Enlace al video:https://youtu.be/WL59erp6qOc
PImage[] data;
String[] textos;
int estado;
void setup(){
  size(600,600);
    textos = new String[20];
 
  textos[0] = "LOS TRES CERDITOS";
  textos[1] = "Habia una vez tres cerditos que vivian en el bosque con el unico problema de que eran asechados por un lobo. Para que el los deje de asechar ellos deciden A:construirse una casa o B:hacerse amigos del lobo";
  textos[2] = "Les gusta la idea pero no se deciden con que material hacerla. A:paja o B:ladrillos";
  textos[3] = "El lobo les destruye la casa muy rapido y se los come.FIN";
  textos[4] = "El lobo no logra destruir esta casa , los cerditos logran refugiarse ahi y viven felices para siempre.FIN";
  textos[5] = "FIN";
  textos[6] = "Le proponen al lobo darle y hacer lo que el quiera con tal de que no los moleste mas. A:el lobo acepta o B:el lobo no acepta";
  textos[7] = "El lobo los hace buscar su comida,los hace construirle una casa y muchas cosas mas. Los cerditos estan conformes con esto y viven felices y tranquilos para siempre";
  textos[8] = "Al lobo no le gusta la idea de ser amigo de ellos y decide seguir asechandoles para siempre";
    textos[9] = "Directora:Francisca Duarte                                        Artista:Francisca Duarte               Programadora:Francisca Duarte ";
   
data= new PImage[12];
data[0]=loadImage("data/fondo_00.png");
data[1]=loadImage("data/fondo_01.png");
data[2]=loadImage("data/fondo_02.png");
data[3]=loadImage("data/fondo_04.png");
data[4]=loadImage("data/fondo_05.png");
data[5]=loadImage("data/fondo_06.png");
data[6]=loadImage("data/fondo_07.png");
data[7]=loadImage("data/fondo_08.png");
data[8]=loadImage("data/fondo_09.png");
data[9]=loadImage("data/fondo_10.png");
data[10]=loadImage("data/fondo_11.png");
data[11]=loadImage("data/fondo_12.png");
}



void draw(){
 if ( estado == 0 ) {
    image( data[0],0,0 );
    dibujaTextos(textos[0]);
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "Iniciar");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "Creditos");
  } else  if ( estado == 1 ) {
     image( data[8],0,0 );
     dibujaTextos(textos[1]);
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "B");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "A"); 
  
  } else  if ( estado == 2 ) {
     image( data[4],0,0 );
      dibujaTextos(textos[2]);
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "B");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "A");
  }else  if ( estado == 3) {
     image( data[5],0,0 );
      dibujaTextos(textos[3]);
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "REINICIAR");
  }else  if ( estado == 4) {
     image( data[7],0,0 );
      dibujaTextos(textos[4]);
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "REINICIAR");
   
  } else  if ( estado == 5 ) {
     image( data[11],0,0 );
      dibujaTextos(textos[9]);
 dibujaBotonRectangular( width/4*3, height/3, 120, 80, "Inicio");//creditos
 } else  if ( estado == 6 ) {
     image( data[3],0,0 );
      dibujaTextos(textos[6]);
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "B");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "A");
  }else  if ( estado == 7 ) {
     image( data[10],0,0 );
      dibujaTextos(textos[7]);
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "REINICIAR");//el lobo acepta
  }else  if ( estado == 8 ) {
     image( data[0],0,0 );
      dibujaTextos(textos[8]);
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "REINICIAR");//ellobo no aceta
  }
}
   
