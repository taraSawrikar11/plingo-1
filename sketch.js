const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var plinkos = [];
var divs = [];
var falls = [];

function setup() {

  
  var canvas = createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,590,400,20)

  for(var i = 100; i <= 400; i=i+100){

  
    for(var j = 100; j <= 380; j=j+100){
      plinkos.push(new Plinko(j,i,15));
    }
  }

  for(var i = 150; i <= 350; i=i+100){

  
    for(var j = 50; j <= 380; j=j+100){
      plinkos.push(new Plinko(j,i,15));
    }
  }

  for(var x = 0; x <= 400; x=x+100) {

    divs.push(new Ground(x,550,10,200))

  }

}

function draw() {
  Engine.update(engine);
  background(0,0,0);  
  ground.display()

  for(var j = 0; j < plinkos.length; j++){

    plinkos[j].display();
  }

  for(var g = 0; g < divs.length; g++){

    divs[g].display();
  }

  if(frameCount%30===0){
    falls.push(new Particle(random(50,350),0,10))

  }

  for(var t = 0; t < falls.length; t++){

    falls[t].display();
  }

  drawSprites();
}              

