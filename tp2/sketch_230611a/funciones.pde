// funcion que dibuja mi arte optico
void arteOptico(){
   for(int i=0; i<30;i++){
     rotate(radians(ang)); 
   strokeWeight(4);
   if(i%2==0){
    fill(lerpColor (colOrigen,colDestino,map(i,0,24,0,1)));
   }else {
     fill(255);
   }
    float lado=map(i,0,30,600,0);
  rectMode(CENTER); 
    rect(0,0,lado,lado);
  }
}

//funcion que retorna un valor
color colorAleatorio(){
  return color(random (0),random(134),random(255));
}
