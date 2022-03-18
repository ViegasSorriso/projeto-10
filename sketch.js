var sea,ship;
var seaImg,shipImg;


  //carregamento
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");

}
   //configuração
function setup(){


    //area do game
  createCanvas(400,400);



  // Plano de fundo móvel
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}
  //executa varias vezes
function draw() {
  background(0);
  background("blue");
  sea.velocityX = -3;

  
  //código para redefinir o plano de fundo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
    
  drawSprites();
}
