let p1;
let p2;
let p3;
let p4;
let p6;
let p7;
let p8;
let p9;
let p10;

let pArr=[];

let video1;
let video2;
let video3;
let video4;
let video5;
let video6;

//stars
let starNum = 15;
  let starPosition = [];
let starSpeed = 0.2;


//let grow = 0

class Planets{
  constructor(x,y,d, maxSize, words, rotateSpeed, video){
    this.x=x;
    this.y=y;
    this.d=d;
    this.originalD = d;
    this.originalX = x;
    this.originalY = y;
    this.sinX=0;
    this.sinY=0;
    
   this.size = d;
    this.maxSize = maxSize;
    this.growing = false;
    this.shrinking = false;
    
    this.radius = d/2 //for text part
    this.words = words;//text parameter
    this.rotate = 0;//rotating around circle
    this.rotateSpeed = rotateSpeed;
    this.opacity = 255; //max
    this.fadingSpeed = 2;
    this.fadingOut = true;

    this.video = video;
    this.videoStarted = false;
   
  }
drawCircle(){
  noStroke()
  fill(200)

 let movingX = sin(400 + this.sinX/20)*5 + this.x;
  let movingY = cos(400 + this.sinY/20)*5 + this.y;

  if (this.video && this.video.elt.readyState >= 2) {//checks if video is ready
    let ctx = drawingContext;//accesses the HTML Canvas drawing context.



    push();

    ctx.save();
    ctx.beginPath();
//arc makes the circle 
    ctx.arc(
      movingX,//circle center
      movingY,//circle center
      this.size/2,
      0,//starting angle/point
      TWO_PI //end anlge/point
    );

    ctx.clip();//clips vid to circle made by arc
    //everything draw after this but inside the push and pop function will clip to the circle

    imageMode(CORNER);

    image(
      this.video,
      movingX - this.size/2,
      movingY - this.size/2,
      this.size,
      this.size
    );//displays vid

    ctx.restore();//restores the p5js drawing context

    pop();

  } else {

    fill(200);
    circle(movingX, movingY, this.size);

  }

  //text
  fill(240,200,100,this.opacity)
  textSize(16);
  textAlign(CENTER,CENTER);
  
 push();
translate(movingX,movingY);

  //for rotating along circle
  this.rotate += this.rotateSpeed;
  rotate(this.rotate);
  //translates to center of circle

  
  for(let i = 0; i<this.words.length; i++){

   // let startAngle = random(PI/3)
    
    let angle = PI/3 + (i * TWO_PI / this.words.length);

  // start point + (i * how much of the circle it covers (i.e half, a quarter)/ length of charcters in word)

    //Counts angle based on how many characters there are in a word

    push();
    rotate(angle);

    text(this.words[i],0, -this.size/2 -15)
    //connects the texts position to this.size, the size of the circle as it grows or shrinks
    
    //for rotating along circle

  //translates to center of circle

    pop();
  }
  
  pop();

  
}

//plays video when mouse pressed
playVideo(){

  let distanceToMouse = dist(mouseX, mouseY, this.x, this.y);

  if(distanceToMouse < this.size/2){

    if(this.video && !this.videoStarted){

      this.video.elt.muted = false;
      this.video.play();

      this.videoStarted = true;
    }

  }

}

//fades text in and out
  Textfade(){
    push();
if(this.fadingOut){
  this.opacity-=this.fadingSpeed;
}
    else{this.opacity +=this.fadingSpeed;
    }

     if(this.opacity <= 0){
    this.opacity = 0;
    this.fadingOut = false;//stops fade out
  }

  if(this.opacity >= 255){
    this.opacity = 255;
    this.fadingOut = true;
    //once it hits 255 it checks to see if should start fading out
  }

    pop();
  }
  //calculates the ditance of the mouse from the circle
  wobbleDistance(){
    let distanceToMouse = dist(mouseX,mouseY,this.x,this.y);
    //console.log("this.x",this.x);
    //console.log("this.y",this.y);
    //console.log(distanceToMouse);
    if(distanceToMouse<this.d){
       this.sinX++;
      this.sinY++;
    }
    
  }

  grow(){
    //grow (check for mouse being pressed)
     let distanceToMouse = dist(mouseX,mouseY,this.x,this.y);
    
    if(distanceToMouse < this.size ){

   // this.d+=.5;  
     this.growing = true;
      this.shrinking = false;
    //  console.log("this.d,",this.d);
     } 
   // constrain(,1,5) 
    //  then()
 }

  growthStop(){
if(this.growing && this.size < this.maxSize) {
  this.size += 1;
}
    if(this.size >= this.maxSize){
      this.size = this.maxSize;
      this.growing = false;
      console.log("p1.grow",)
    }
    
  }

  shrink1(){ //to MAKE it shrink
    //shrink (check mouse placement for later mouse being pressed)
     let distanceToMouse = dist(mouseX,mouseY,this.x,this.y);
    
    if(distanceToMouse < this.size){

   // this.d+=.5;  
     this.shrinking = true;
    //  console.log("this.d,",this.d);
     } 

   // constrain(,1,5) 
    //  then()
 }
  
  shrinkStop1(){ //to make it STOP shrinking
   if(this.shrinking && this.size > this.originalD) {
  this.size -= 1;
   }
     if(this.size <= this.originalD) {
    this.size = this.originalD;
    this.shrinking = false;
      console.log("p1.shrink1",this.shrink1)
    }
}

  shrink2(){
  
   let distanceToMouse = dist(mouseX,mouseY,this.x,this.y);
    //console.log("this.x",this.x);
    //console.log("this.y",this.y);
    //console.log(distanceToMouse);
    if(distanceToMouse<this.size/2){
       this.shrinking = false;
    }
   else {
    this.shrinking = true;
    
  }
  }

  shrinkStop2(){//to make it STOP shrinking
   if(this.shrinking && this.size > this.originalD) {
  this.size -= 1;
   }
     if(this.size <= this.originalD) {
    this.size = this.originalD;
    this.shrinking = false;
      console.log("p1.shrink1",this.shrink1)
    }
    
  }
  
}




function setup() {
  createCanvas(600, 600);

  //-------videos
video1 = createVideo("videos/video1.mp4");
  video1.elt.muted = true;
//  video1.loop();
  video1.hide();
  
  /*video2 = createVideo("videos/video2.2.mp4");
  video2.elt.muted = true;
  //video2.loop();
  video2.hide();*/

  video3 = createVideo("videos/video3.mp4");
  video3.elt.muted = true;
  //video2.loop();
  video3.hide();

 /* video4 = createVideo("videos/video4.mp4");
  video4.elt.muted = true;
  //video2.loop();
  video4.hide();*/

  video5 = createVideo("videos/video5.mp4");
  video5.elt.muted = true;
  //video2.loop();
  video5.hide();

  video6 = createVideo("videos/video1.2.mp4");
  video6.elt.muted = true;
  //video2.loop();
  video6.hide();

  
video1.elt.preload = "auto"; //preload still-image for the browser to load video
video3.elt.preload = "auto";
video5.elt.preload = "auto";
video6.elt.preload = "auto";
//video5.elt.preload = "auto";


  //-----planets w/ all parameters
  p1 = new Planets(400,20,100,150, "Digan hola", .005, video6);
              //(x,y, diameter, max size of diameter, text string, rotate speed)
 
  p2 = new Planets(100,100,50,100,"",0, video1);

  p3 = new Planets(270,200,100,200,"    Hola Mama!   ", .003, video6);

  p4 = new Planets(50,300,100,200,"   ¡EXP  2,467.84!  ",.001, video5 );

  p6 = new Planets(320,400,100,200,"  ¡No se mojo!  ",.005, video5);

  p7 = new Planets(500,250,70,140,"",.003, video1);

  p8 = new Planets(100,500,70,140,"❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ",.002, video3 );

  p9 = new Planets(520,590,220,260," ",.007, video3);

  pArr.push(p1);
  pArr.push(p2);
  
//stars framrate + for loop for random position
   frameRate(30)
  
  //create random position
  for (let i = 0; i < starNum; i++) {
    starPosition[i] = [random(width), random(height - 40, height)];//
  }
  

}


function draw() {
  background(0);
 /* 
  if(mouseIsPressed){
    p1 = new Planets(mouseX,mouseY,50);

   // p1 = new Planets(100,200,30)


  }*/
//------draws stars at radnom spots
if (frameCount % 50 == 0) {
  for (let a = 0; a < starNum; a++) {
    starPosition[a] = [random(width), random(height)];
  }
}

for (let a = 0; a < starNum; a++) {
  star(starPosition[a][0], starPosition[a][1]);

    
    //star(random(width),random(height));//makes them appear EVERYWHERE
  }

  p1.drawCircle();
  p1.wobbleDistance();
 // p1.grow();
  p1.growthStop();
  p1.shrinkStop1();
  p1.Textfade();
  
 

  console.log("p1.shrinkStop1",p1.shrinkStop1)

  p2.drawCircle();
  p2.wobbleDistance();
  p2.growthStop()
  p2.shrink2();
  p2.shrinkStop2();
  p2.Textfade();

  p3.drawCircle();
  p3.wobbleDistance();
  p3.growthStop();
  p3.shrink2();
  p3.shrinkStop2();
  p3.Textfade();

  p4.drawCircle();
  p4.wobbleDistance();
  p4.growthStop();
  p4.shrink2();
  p4.shrinkStop2();
  p4.Textfade();

  p6.drawCircle();
  p6.wobbleDistance();
  p6.growthStop();
  p6.shrink2();
  p6.shrinkStop2();
  p6.Textfade();
  console.log("p6.shrink2()",p6.shrink2)

  p7.drawCircle();
  p7.wobbleDistance();
  p7.growthStop()
  p7.shrink2();
  p7.shrinkStop2();
  p7.Textfade();

  p8.drawCircle();
  p8.wobbleDistance();
  p8.growthStop()
  p8.shrink2();
  p8.shrinkStop2();
  p8.Textfade();

  p9.drawCircle();
  p9.wobbleDistance();
  p9.growthStop()
  p9.shrink2();
  p9.shrinkStop2();
  p9.Textfade();


 //  text('Hola Mama!',200,200)
  textSize(25)
/*
  push();
  text('p1', 400,20)
  text('p2',100,100)
  text('p3',270,200)
  text('p4',50,300)
  text('p6',320,400)
  text('p7',500,250)
   text('p8',100,500)
  pop();
  */
  textSize(15)
  text('Click on circles',70,50)
}

function mousePressed(){
  p1.grow();//clicking it to make it grow function
   p1.shrink1();
  p1.playVideo();
  
  p2.grow();
  p2.playVideo();

  p3.grow();
  p3.playVideo();

  p4.grow();
  p4.playVideo();

  p6.grow();
  p6.playVideo();

  p7.grow();
  p7.playVideo();

  p8.grow();
  p8.playVideo();

  p9.grow();
  p9.playVideo();
 

 
}

function star(x, y, w, h = 20) {

  textSize(w);
  textAlign(CENTER, CENTER);
  text('⭐', x, y);
}



