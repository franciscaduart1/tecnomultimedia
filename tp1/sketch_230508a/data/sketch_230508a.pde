//Francisca Duarte
//Comision 3
//tp1


String estado = "inicio";
int cuentaFotograma = 0;


void setup(){
  size(640,480);
  frameRate(30);
  
}

void draw(){
   background(255);
     
 
 if ( estado.equals("inicio") ) {
  //pantalla de inicio
  fill(0);
  textAlign(CENTER);
  
  fill(155,29,206);
  ellipse(width/2,300,100,100);
  fill(0);
  textSize(20);
  text("Comenzar",width/2,300);
 }
 else if ( estado.equals("pantalla 1") ) {
   //pantalla 1
  fill(0);
  textAlign(CENTER);
  textSize(5+cuentaFotograma/2);
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
  fill(0);
  textAlign(CENTER);
  textSize(40);
  text("el origen del mundo",width/2, cuentaFotograma);
  text("año",width/2,cuentaFotograma+20);
  
   cuentaFotograma++;
  if( cuentaFotograma>= 150 ) {
    estado = "pantalla 3";
    cuentaFotograma = 0;
  }
 }else if (estado.equals("pantalla 3") ) {
 //pantalla 3
  fill(0);
  textAlign(CENTER);
  textSize(40);
  text("el origen del mundo",width/2, height/2);
  text("datos",width/2,height/2+20);
  
   cuentaFotograma++;
  if( cuentaFotograma>= 150 ) {
    estado = "inicio";
  }
 }
}
 

void mousePressed() {
  if ( estado.equals("inicio") ) {
    if( dist(mouseX,mouseY,width/2,300) < 50) {
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
    estado = "inicio";
    cuentaFotograma = 0;
  }
}

 
