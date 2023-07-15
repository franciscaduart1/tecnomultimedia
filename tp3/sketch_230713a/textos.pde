void dibujaTextos(String textos){
  push();
   rectMode(CORNER);
  rect(0, height/3*2, width, height/3);
    fill(255);
  textSize(20);
  textLeading(40);
  textAlign(CENTER, CENTER);
  text( textos, 0, height/3*2, width, height/3);
  pop();
}
