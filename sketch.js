const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  ground;
var hero;

function preload(){
  bgimg = loadImage("images/GamingBackground.png")
}


function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0,0,10,10 );
  hero = new Hero(200,200,250);
  slingShot = new SlingShot(hero.body,{x:400,y:50});
  fill("red");
  
  
  ground = new Ground(600,600,1200,20);
   //first row
   box1 = new Box(900,100,70,70);
   box2 = new Box(900,100,70,70);
   box3 = new Box(900,100,70,70);
   box4 = new Box(900,100,70,70);
   box5 = new Box(900,100,70,70);
   box6 = new Box(900,100,70,70);
   //second row
   box7 = new Box(800,100,70,70);
   box8 = new Box(800,100,70,70);
   box9 = new Box(800,100,70,70);
   box10 = new Box(800,100,70,70);
   box11 = new Box(800,100,70,70);
   box12 = new Box(800,100,70,70);
   //third row
   box13 = new Box(700,100,70,70);
   box14 = new Box(700,100,70,70);
   box15= new Box(700,100,70,70);
   box16 = new Box(700,100,70,70);
   box17 = new Box(700,100,70,70);
   box18 = new Box(700,100,70,70);
   box19 = new Box(700,100,70,70);
   box20 = new Box(700,100,70,70);

   monster = new Monster(1100,450,1000,1000);
}

function draw() {
  background(bgimg);
  Engine.update(engine);
  hero.display();
  slingShot.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  monster.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

