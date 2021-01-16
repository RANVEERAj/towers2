const Engine=Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;

function preload(){
imagew=loadImage("polygon.png")

}
function setup(){
    engine = Engine.create();
	world = engine.world;
    createCanvas(1100,750)
   

    ground1=new ground(760,430,330,10)
    ground2=new ground(415,650,290,10)
    ground3=new ground(525,720,1100,10)

   play1=new Player(100,470,70,70)
  Sling=new SlingShot(play1.body,{x:170,y:470})

b1=new block(353,624,40,40)
b2=new block(393,624,40,40)
b3=new block(433,624,40,40)
b4=new block(473,624,40,40)
b5=new block(513,624,40,40)
b6=new block(313,624,40,40)

b7=new block(353,584,40,40)
b8=new block(393,584,40,40)
b9=new block(433,584,40,40)
b10=new block(473,584,40,40)


b11=new bblock(393,544,40,40)
b12=new bblock(433,544,40,40)

b13=new bblock(413,504,40,40)


b14=new bblock(850,405,40,40)
b15=new bblock(650,405,40,40)
b16=new bblock(690,405,40,40)
b17=new bblock(730,405,40,40)
b18=new bblock(770,405,40,40)
b19=new bblock(810,405,40,40)
b20=new bblock(890,405,40,40)

b21=new block(850,365,40,40)
b22=new block(690,365,40,40)
b23=new block(730,365,40,40)
b24=new block(770,365,40,40)
b25=new block(810,365,40,40)

b26=new block(730,325,40,40)
b27=new block(770,325,40,40)
b28=new block(810,325,40,40)

b29=new block(730,285,40,40)
b30=new block(770,285,40,40)

b31=new block(810,285,40,40)

console.log(play1)

}
function draw(){
  Engine.update(engine);
  imageMode (CENTER)
    rectMode(CENTER);
    background("black");
  

    ground1.display();
    ground2.display();
    ground3.display();
    play1.display();
    Sling.display();

    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()

    b6.display()
    b7.display()
    b8.display()
    b9.display()
    
    b10.display()
    b11.display()
    b12.display()

    b13.display()
    b14.display()

    b15.display()

    b16.display()
    b17.display()
    b18.display()
    b19.display()
    b20.display()

    b21.display()
    b22.display()
    b23.display()
    b24.display()

        
    b25.display()
    b26.display()
    b27.display()

        
    b28.display()
    b29.display()
    b30.display()
    b31.display()
    drawSprites();
  
}
function mouseDragged()
{
  Matter.Body.setPosition(play1.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
   Sling.fly();
   console.log("isReleased")
}
function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(play1.body,{x:100,y:470})
  Sling.attach(play1.body)
  console.log("keyPressed")
  }
}
