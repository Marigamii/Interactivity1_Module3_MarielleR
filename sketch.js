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


//let grow = 0

class Planets{
  constructor(x,y,d, maxSize){
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
   
  }
drawCircle(){
  circle(sin(400+this.sinX/20)*5+this.x,cos(400+this.sinY/20)*5+this.y,this.size)
 //makes the planets wobble
}
  
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

  shrink1(){
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
  
  shrinkStop1(){
   if(this.shrinking && this.size > this.originalD) {
  this.size -= 1;
   }
     if(this.size <= this.originalD) {
    this.size = this.originalD;
    this.shrinking = false;
      console.log("p1.shrink",this.shrink)
    }
}
  
}




function setup() {
  createCanvas(600, 600);

  p1 = new Planets(400,20,100,200);
              //(x,y, diameter, max size of diameter)
 
  p2 = new Planets(100,100,50,100);

  p3 = new Planets(270,200,100,200);

  p4 = new Planets(50,300,100,200)

  p6 = new Planets(50,300,100,200)

  p7 = new Planets(320,400,100,200)

  p8 = new Planets(500,250,70,140)

  p9 = new Planets(100,500,70,140)

  p10 = new Planets(520,590,220,260)

  pArr.push(p1);
  pArr.push(p2);
  
}


function draw() {
  background(180);
  text("hi",50,50)
 /* 
  if(mouseIsPressed){
    p1 = new Planets(mouseX,mouseY,50);

   // p1 = new Planets(100,200,30)


  }*/

  p1.drawCircle();
  p1.wobbleDistance();
 // p1.grow();
  p1.growthStop();
  p1.shrinkStop1();
 

  console.log("p1.shrinkStop",p1.shrinkStop)

  p2.drawCircle();
  p2.wobbleDistance();
  p2.growthStop()

  p3.drawCircle();
  p3.wobbleDistance();
  p3.growthStop()

  p4.drawCircle();
  p4.wobbleDistance();
  p4.growthStop()

  p6.drawCircle();
  p6.wobbleDistance();
  p6.growthStop()

  p7.drawCircle();
  p7.wobbleDistance();
  p7.growthStop()

  p8.drawCircle();
  p8.wobbleDistance();
  p8.growthStop()

  p9.drawCircle();
  p9.wobbleDistance();
  p9.growthStop()

  p10.drawCircle();
  p10.wobbleDistance();
  p10.growthStop()

   text('Hola Mama!',200,200)
  textSize(25)
  
}

function mousePressed(){
  p1.grow();//clicking it to make it grow function
   p1.shrink1();
  
  p2.grow();
  p3.grow();
  p4.grow();
  p6.grow();
  p7.grow();
  p8.grow();
  p9.grow();
  p10.grow();

 
}





