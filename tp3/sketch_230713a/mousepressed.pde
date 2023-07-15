void mousePressed() {
  if ( estado == 0 ) {
    if ( colisionConBotonRectangular(width/4*3, height/3, 120, 80) ) {
      println(1);
      estado = 1;
    }
     if ( colisionConBotonRectangular(width/4, height/3, 120, 80) ) {
      println(13);
      estado = 5;
     }
    
  } else if ( estado == 1 ) {
    if ( colisionConBotonRectangular(width/4*3, height/3, 120, 80) ) {
      println(2);
      estado = 6;
    }
    if ( colisionConBotonRectangular(width/4, height/3, 120, 80) ) {
      println(3);
      estado = 2;
    }
  } else if ( estado==2) {
    if (colisionConBotonRectangular(width/4, height/3, 120, 80)) {
      //boton de la izquierda
      println(4);
      estado=3;
    }
    if (colisionConBotonRectangular(width/4*3, height/3, 120, 80)) {
      //boton de la derecha
      println(5);
      estado=4;
    }
  }else if ( estado==3) {
    if (colisionConBotonRectangular(width/4*3, height/3, 120, 80)) {
      //boton de la izquierda
      println(6);
      estado=0;
    }
  }else if ( estado==4) {
    if (colisionConBotonRectangular(width/4*3, height/3, 120, 80)) {
      //boton de la izquierda
      println(7);
      estado=0;
    
 
    }
  } else if ( estado==6) {
    if (colisionConBotonRectangular(width/4, height/3, 120, 80)) {
      //boton de la izquierda
      println(8);
      estado=7;
    }
     if (colisionConBotonRectangular(width/4*3, height/3, 120, 80)) {
      //boton de la derecha
      println(9);
      estado=8; 
    }
     }else if ( estado==7) {
    if (colisionConBotonRectangular(width/4*3, height/3, 120, 80)) {
      //boton de la izquierda
      println(10);
      estado=0;
  }
     }else if ( estado==8) {
    if (colisionConBotonRectangular(width/4*3, height/3, 120, 80)) {
      //boton de la izquierda
      println(11);
      estado=0;
    }
     }else if ( estado == 5 ) {
    if ( colisionConBotonRectangular(width/4*3, height/3, 120, 80) ) {
      println(12);
      estado = 0;
    }
     }
}
