var START = 0;
var PLAY = 1;
var gameState = START;
function preload() {
  S = loadImage("shelf.png");
  H1 = loadImage("1.png");
  H2 = loadImage("22.png");
  H3 = loadImage("3.png");
  H4 = loadImage("4.png");
  H5 = loadImage("5.png");
  H6 = loadImage("6.png");
  H7 = loadImage("7.png");
  goI = loadImage("go.png");
}


function setup() {
  createCanvas(600, 480);
  shelf = createSprite(130, 250, 20, 20);
  shelf.addImage(S);
  hand = createSprite(400, 300, 20, 20);
  hand.addAnimation("1",H1);
  hand.addAnimation("2", H2)
  hand.addAnimation("3", H3)
  hand.addAnimation("4", H4)
  hand.addAnimation("5", H5)
  hand.addAnimation("6", H6)
  hand.addAnimation("7", H7)
  go = createSprite(500,300,20,20);
  go.addImage(goI);
  go.scale =0.5;
  go.scale = 0.3;
  red = createSprite(100, 140, 20, 20);
  red.shapeColor = "red"
  pink = createSprite(100, 200, 20, 20);
  pink.shapeColor = "pink"
  green = createSprite(100, 255, 20, 20);
  green.shapeColor = "green";
  blue = createSprite(100, 310, 20, 20);
  blue.shapeColor = "blue"
  black = createSprite(50, 365, 20, 20);
  black.shapeColor = "black";
  violet = createSprite(150, 365, 20, 20);
  violet.shapeColor = "violet"
}

function draw() {
  background("white");
  drawSprites()
  if (gameState === PLAY) {
    red.visible = true;
    green.visible = true;
    blue.visible = true;
    pink.visible = true;
    shelf.visible = true;
    hand.visible = true;
    violet.visible =true
    black.visible = true;
    fill("red");
    textSize(20)
    text("RED", 130, 140);
    fill("pink")
    text("PINK", 130, 200);
    fill("green")
    text("GREEN", 120, 250)
    fill("blue")
    text("BLUE", 130, 310);
    
    text("PINK", 130, 200);
    fill("violet")
    text("VIOLET",120, 345)
    fill("black")
    text("BLACK", 40, 345);
    textSize(18)
    go.visible = true;
    text("When you click the go button",250,80);
    text("you will receive a click here message",250,100);
    text("After getting the message click on it to play further..",195,120)
 
    text("CLICK THE COLOURED BLOCKS TO GET THE DESIRED NAIL POLISH",2,30)
  }
  
  
  if (gameState === START) {
    red.visible = false;
    green.visible = false;
    blue.visible = false;
    pink.visible = false;
    shelf.visible = false;
    hand.visible = false;
    violet.visible = false;
    black.visible = false;
    textSize(30)
    text("WELCOME TO NAIL POLISH PLAZA", 50, 200);
    textSize(20)
    go.visible = false;
    text("PRESS 'SPACE' KEY TO PUT NAIL POLISH!!!!", 50, 300);
  }
  if (gameState === START && keyDown("space")) {
    gameState = PLAY;
  }
  if (mousePressedOver(red)) {
    hand.changeAnimation("1", H1)
  }
  if (mousePressedOver(green)) {
    hand.changeAnimation("2", H2)
  } 
   if (mousePressedOver(pink)) {
    hand.changeAnimation("5", H5)
  } 
     if (mousePressedOver(blue)) {
    hand.changeAnimation("7", H7)
  }
  
       if (mousePressedOver(violet)) {
    hand.changeAnimation("4", H4)
  }
  
       if (mousePressedOver(black)) {
    hand.changeAnimation("3",H3);
  }
  if(mousePressedOver(go)){
    link = createA("","CLICK HERE");
    link.position(400,400);
  }
}