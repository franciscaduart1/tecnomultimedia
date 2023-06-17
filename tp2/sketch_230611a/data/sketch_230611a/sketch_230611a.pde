void setup(){
  size(800,400);
  
}
void draw(){
  for(int i=0; i<30;i++){
   strokeWeight(4);
   float col=map(i,55,0,55,0);
    fill(255);
    float lado=map(i,0,30,400,0);
  rectMode(CENTER); 
    rect(200,200,lado,lado);
  }
}
