function iniciarJuego(){
  tam_enemigo=20;
  x_enemigo=random(tam_enemigo, width-tam_enemigo);
  y_enemigo=-tam_enemigo-random(50,100);
   vel_enemigo=5;
   
   x_personaje=width/2;
   y_personaje=height-60;
   tam_personaje=40;
   vel_personaje=0;
   
   //contadores
   atrape=0;
   dejecaer=0;
}
