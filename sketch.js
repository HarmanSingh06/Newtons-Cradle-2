
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(600,500);


	engine = Engine.create();
	world = engine.world;

	//----------------------------BOBS
	bob1 = new Bob(200,800,70,70);
	bob2 = new Bob(270,800,70,70);
	bob3 = new Bob(340,800,70,70);
	bob4 = new Bob(410,800,70,70);
	//----------------------------BOBS

	//----------------------------Ground
	ground = new Ground(300,80,300,20);
	//----------------------------ground

	//--------------------------------ROPE
	rope = new Rope(bob1.body,{x:200,y:90});
	rope1 = new Rope(bob2.body,{x:270,y: 90});
	rope2 = new Rope(bob3.body,{x:340,y: 90});
	rope3 = new Rope(bob4.body,{x:410,y:90})
	//---------------------------------ROPE

	Engine.run(engine);

}


function draw() {
  Engine.update(engine);
  background(0);

  //-------------BOB
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  //-------------BOB

  //--------------GROUND
  ground.display();
  //--------------GROUND

  //---------------ROPE
  rope1.display();
  rope2.display();
  rope3.display();
  rope.display();
  //---------------ROPE
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob4.body, bob1.body.position, {x:300,y:-100});
	}
  }