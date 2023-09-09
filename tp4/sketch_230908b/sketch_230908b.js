var estado=0;
var x_enemigo,y_enemigo,tam_enemigo,vol_enemigo;
var x_personaje,y_personaje,tam_personaje,vel_personaje;
var atrape,dejecaer;
let img1;


function setup() {
createCanvas(600,600);
img1=loadImage("data/heladeria(1).png");
}

function draw() {
  image(img1,0,0,width,height);
if(estado==0){
  pantalladeInicio();
}else if(estado==1){
  pantalladeJuego();
}else if(estado==2){
  pantallaGano();
}else if(estado==3){
 pantallaPerdio();
}else if(estado==4){
 pantallaCreditos();
  }
}

function mousePressed(){
  if(estado==0){
  estado=1;
  
  iniciarJuego();
}else if(estado==1){
 pantalladeJuego();
}else if(estado==2){
 pantallaGano();
 estado=4;
}else if(estado==3){
 pantallaPerdio();
 estado=4;
}else if(estado==4){
pantallaCreditos();
estado=0;
}

}

function keyPressed(){
   if(estado==1){
   if(keyCode===LEFT_ARROW){
     vel_personaje=-2;
  }
  if(keyCode===RIGHT_ARROW){
    vel_personaje=2;
  }
  }
}

function keyReleased(){
   if(estado==1){
     vel_personaje=0;
  }
  }
