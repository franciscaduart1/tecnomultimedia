//Francisca Duarte
//comision 3
//tp2-ILUSION OPTICA
//url al video:https://youtu.be/I_HWDODbmpY

float ang;
PImage img;
color colOrigen, colDestino;
void setup(){
  size(800,400);
  img=loadImage("data/IMG-0218.png");
  colOrigen=color(random(255),random(255),random(255));
  colDestino=color(0,0,0);
  
}
void draw(){ 
  push();
  translate(200,200);
  rotate(radians(45)); 
  //invoco la funcion declarada
  arteOptico(); 
  if(mouseX<400){
  ang+=.1;
  }
  pop();
  translate(400,0);
   image(img,0,0,400,400);
}

void mousePressed(){
 ang=0; 
 colOrigen= colorAleatorio();
 colDestino=color(0,0,0);
}
