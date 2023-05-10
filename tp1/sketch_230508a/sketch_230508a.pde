//Francisca Duarte
//Comision 3
//tp1


String estado = "inicio";
int cuentaFotograma = 0;
PFont miFuente;
PImage img1, img2, img3, img4;

void setup(){
  size(640,480);
  frameRate(30);
 img1=loadImage("data/sensible_6.png");
img2=loadImage("data/sensible_3.png");
img3=loadImage("data/sensible_7.png");
img4=loadImage("data/sensible_8.png");
}

void draw(){
   background(255);
    miFuente=loadFont( "TimesNewRomanPS-BoldMT-48.vlw");
 image(img1,0,0,640,480);
 if ( estado.equals("inicio") ) {
  //pantalla de inicio
  fill(0);
  textAlign(CENTER);
  textFont(miFuente,48);
  fill(146,216,178);
  ellipse(width/2,100,100,100);
  fill(0);
  textSize(20);
  noStroke();
  text("Comenzar",width/2,100);
 }
 else if ( estado.equals("pantalla 1") ) {
   //pantalla 1
   image(img2,0,0,640,480);
  fill(0);
  textAlign(CENTER);
  textSize(5+cuentaFotograma/2);
  fill(255);
  text("Sensible",width/2, height/2);
  textSize(cuentaFotograma/2);
  text("Autor: Emiliano Causa",width/2,height/2+20);
  
  cuentaFotograma++;
  if( cuentaFotograma>= 150 ) {
    estado = "pantalla 2";
    cuentaFotograma = 0; 
  }
 }
 else if ( estado.equals("pantalla 2") ) {
 //pantalla 2
 image(img3,0,0,640,480);
  fill(0);
  textAlign(CENTER);
  textSize(40);
  fill(255);
  text("Sensible",width/2, cuentaFotograma);
  textSize(20);
  text("El primer lanzamiento de esta obra fue en el año 2007",width/2,cuentaFotograma+30);
  
   cuentaFotograma++;
  if( cuentaFotograma>= 500 ) {
    estado = "pantalla 3";
    cuentaFotograma = 0;
  }
 }else if (estado.equals("pantalla 3") ) {
 //pantalla 3
 image(img4,0,0,640,480);
  fill(0);
  textAlign(CENTER);
  textSize(20);
  fill(255);
  textSize(15);
  text("Es una instalacion interactiva provista de una sensible pantalla tactil  que permite a las persona",width/2, cuentaFotograma);
  text("controlar un entorno virtual y a partir de esta accion producir musica en tiempo real",width/2,cuentaFotograma+20);
  
   cuentaFotograma++;
  if( cuentaFotograma>= 500) {
    estado = "pantalla 4";
    cuentaFotograma=0;
  }
 }else if(estado.equals("pantalla 4") ){
   //pantalla 4
   fill(0);
  textAlign(CENTER);
  textSize(20);
  fill(255);
  ellipse(width/2,100,100,100);
  fill(0);
  textSize(20);
  noStroke();
  text("Reiniciar",width/2,100);
  
   cuentaFotograma++;
  if( cuentaFotograma>= 500) {
    estado = "inicio";
  }
 } 
}
 

void mousePressed() {
  if ( estado.equals("inicio") ) {
    if( dist(mouseX,mouseY,width/2,100) < 50) {
      estado = "pantalla 1";
  cuentaFotograma = 0;
    }
  }else if( estado.equals("pantalla 1") ){
    estado = "pantalla 2";
    cuentaFotograma = 0;
  }else if ( estado.equals("pantalla 2") ){
    estado = "pantalla 3";
    cuentaFotograma = 0;
  }else if (estado.equals("pantalla 3") ){
    estado = "pantalla 4";
    cuentaFotograma = 0;
  }else if (estado.equals("pantalla 4") ) {
    if( dist(mouseX,mouseY,width/2,100) < 50) {
    estado = "inicio";
    cuentaFotograma = 0;
    }
  }
}

 
