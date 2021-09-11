var garden,rabbit,leaf1,leaf2;
var gardenImg,rabbitImg,leafImg1,leafImg2,appleImg;
var appleGroup,leafGroup;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
leafImg1 = loadImage("orangeLeaf.png");
leafImg2 = loadImage("redImage.png");
appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

appleGroup = new Group();
leafGroup = new Group();
}


function draw() {
  background(0);
  rabbit.x = World.mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  var select = Math.round(random(1,3))

  if(frameCount % 60 === 0) {
    if(select == 1) {
      createApple();
    }
    else if(select == 2){
     createLeaf1();
    }
    else{
      createLeaf2();
    }
  }
  if(rabbit.isTouching(appleGroup)) {
    appleGroup.destroyEach(0)
  }
  if(rabbit.isTouching(leafGroup)) {
    rabbit.destroy()
  }




}


function createApple(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
  apple.scale = 0.07
  apple.velocityY = 3
  appleGroup.add(apple)
}

function createLeaf1(){
  leaf1 = createSprite(random(50,350),40,10,10);
  leaf1.addImage(leafImg1)
  leaf1.scale = 0.07
  leaf1.velocityY = 3
  leafGroup.add(leaf1)
}

function createLeaf2(){
  leaf2 = createSprite(random(50,350),40,10,10);
  leaf2.addImage(leafImg2)
  leaf2.scale = 0.07
  leaf2.velocityY = 3
  leafGroup.add(leaf2)
}

