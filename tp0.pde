//Francisca Duarte
//comision 3
//tp0-retrato

PImage img;

void setup(){
  size(800,400);
  img=loadImage("data/retrato.png");
}
 
  void draw(){
   background(233,234,187);//rgb
  image(img,400,0);
  //dibujamos el retrato
  fill(255,221,209);
  ellipse(200,200,270,300);
  //parte de los ojos
  fill(255,255,255);
  ellipse(150,150,70,50);
  ellipse(250,150,70,50);
  fill(147,77,77);
  ellipse(150,150,30,30);
  ellipse(250,150,30,30);
  fill(0,0,0);
  ellipse(150,150,10,10);
  ellipse(250,150,10,10);
   //parte de las cejas
   push();
   strokeWeight(2);
  line(180,110,100,120);
  line(210,113,280,123);
  pop();
 //parte del pelo
  fill(147,77,77);
  ellipse(70,100,70,70);
  ellipse(60,160,70,70);
  ellipse(50,220,70,70);
  ellipse(50,280,70,70);
  ellipse(50,340,70,70);
  ellipse(90,60,70,70);
  ellipse(130,45,70,70);
  ellipse(170,35,70,70);
  ellipse(210,25,70,70);
  ellipse(250,40,70,70);
  ellipse(290,60,70,70);
  ellipse(330,90,70,70);
  ellipse(345,130,70,70);
  ellipse(360,180,70,70);
  ellipse(365,230,70,70);
  ellipse(366,280,70,70);
  ellipse(368,330,70,70);
   //boca
  fill(240,198,235);
  ellipse(200,290,90,40);
  line(160,290,240,290);
  push();
  stroke(0,0,0);
  line(200,277,207,269);
  line(200,277,193,269);
  pop();
  push();
  stroke(255,221,209);
  line(200,274,196,268);
  line(200,274,204,266);
  line(204,270,196,270);
  line(204,270,194,267);
  line(201,274,206,268);
  line(201,274,195,268);
  line(200,275,206,270);
  line(200,275,194,269);
  pop();
  //nariz
  push();
  strokeWeight(4);
  stroke(229,200,190);
  line(180,220,215,220);
  line(217,218,209,193);
  line(179,219,189,190);
  pop();
  fill(255,221,209);
  push();
  stroke(162,162,162);
  ellipse(221,217,10,10);
  pop();
  push();
   strokeWeight(4);
    stroke(229,200,190);
  line(180,220,215,220);
  line(217,218,209,193);
  pop();
 }

  
  
  
 
 
