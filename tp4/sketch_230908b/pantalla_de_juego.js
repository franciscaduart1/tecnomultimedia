function pantalladeJuego(){
  background(0,0,0);
  //FONDO DE LA PANTALLA DE JUEGO
  push();
  fill(255,23,134);
  ellipse(400,400,50,50);
   ellipse(400,40,50,50);
   ellipse(400,140,50,50);
   
   fill(155,213,50);
    ellipse(150,600,50,50);
       ellipse(215,590,50,50);
       
       fill(255,213,14);
       ellipse(415,590,50,50);
       ellipse(450,500,50,50);
       
       fill(255,0,134);
     ellipse(200,200,50,50);
      ellipse(300,300,50,50);
      ellipse(40,500,50,50);
      
      fill(0,213,134);
       ellipse(30,400,50,50);
       ellipse(50,200,50,50);
      ellipse(50,200,50,50);
      
      fill(255,150,134);
      ellipse(120,350,50,50);
    ellipse(570,80,50,50);
    
    fill(125,213,134);
    ellipse(560,180,50,50);
    ellipse(560,260,50,50);
    ellipse(20,60,50,50);
  pop();
  
  //enemigo
  y_enemigo+=vel_enemigo;
  if(y_enemigo>width+tam_enemigo){
    y_enemigo=-tam_enemigo-random(40,100);
    x_enemigo=random(tam_enemigo,width-tam_enemigo);
    
    dejecaer++;
    if(dejecaer>=3){
      estado=3;
    }
  }
  
  //personaje
  x_personaje+=vel_personaje;
     if(x_personaje<0+tam_personaje){
       x_personaje=tam_personaje;
     }
      if(x_personaje>width-tam_personaje){
       x_personaje=width-tam_personaje;
  }
  
  //colision
  
 if( dist(x_personaje,y_personaje,x_enemigo,y_enemigo)<=tam_enemigo+tam_personaje){
  
   x_enemigo=random(tam_enemigo,width-tam_enemigo);
   y_enemigo=-tam_enemigo-random(50,100);
        atrape++;
if(atrape>=5){
  estado=2;
 
 }
}

  
  
    push();
fill(240,202,12);
ellipseMode(CENTER);
ellipse(x_enemigo,y_enemigo,tam_enemigo*2,tam_enemigo*2);
    pop();
    
    push();
fill(255,0,0);
ellipseMode(CENTER);
ellipse(x_personaje,y_personaje,tam_personaje*2,tam_personaje*2);
    pop();
    
 
    
    push();
    fill(255);
    textSize(15);
    textAlign(LEFT);
    text("ATRAPE: "+atrape,20,20);
    text("DEJE CAER: "+dejecaer,20,40);
    pop();
    

   
}
