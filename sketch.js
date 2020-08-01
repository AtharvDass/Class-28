
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree,ground,stone,boy; 



function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree();
	ground=new Ground();
	stone=new Stone();
	boy=new Boy();
	m1=new Mango(900,250);
	m2=new Mango(800,240);
	m3=new Mango(850,200);
	m4=new Mango(900,150);
  m5=new Mango(1000,260);
	m6=new Mango(950,200);
	m7=new Mango(1000,190);
	m8=new Mango(950,140);
	m9=new Mango(930,100);
  m10=new Mango(850,120);
	sling=new Slingshot(stone.body,{x:205,y:360});

	
	
	
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(255);

  detectcollision(stone,m1)
  detectcollision(stone,m2)
  detectcollision(stone,m3)
  detectcollision(stone,m4)
  detectcollision(stone,m5)
  detectcollision(stone,m6)
  detectcollision(stone,m7)
  detectcollision(stone,m8)
  detectcollision(stone,m9)
  detectcollision(stone,m10)
  textSize(20)
  text("Press Space to play again",200,20)
	 
  

  
  
  ground.show();
  tree.show();
  boy.show();
  sling.display();
  m1.show();
  m2.show();
  m3.show();
  m4.show();
  m5.show();
  m6.show();
  m7.show();
  m8.show();
  m9.show();
  m10.show();
  stone.show();
  
  
  drawSprites();
 
}

function mouseReleased(){
	sling.fly();
}

function mouseDragged(){
	if(sling.sling.bodyA){
		Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}
} 
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:235,y:420});
    sling.attach(stone.body);
  }
}

function detectcollision(lstone,lmango){
  mangoPos=lmango.body.position;
  stonePos=lstone.body.position;

  x1=stonePos.x;
  y1=stonePos.y;
  x2=mangoPos.x;
  y2=mangoPos.y;

  var distance=dist(x1,y1,x2,y2);
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
  

  

 
}

