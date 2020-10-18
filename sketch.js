var wall,bullet,thickness;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);

  weight=random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  bullet = createSprite(1100,200,60,height/2);
  bullet.shapeColor = color (80,80,80);

  thickness=random(22,83);

  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
//car.x = mouse

 if(wall.x - car.x < wall.width/2 + car.width/2){
car.velocityX = 0;
deformation = 0.5*weight*speed*speed/22509;
if(deformation<180)
{
car.shapeColor=color(255,0,0);
}

if(deformation<180 && deformation>100)
{
car.shapeColor=color(230,230,0);
}

if(deformation<100)
{
  car.shapeColor=color(0,255,0);
}

 } 

 if(hasCollided(bullet,wall))
 {
  bullet.velocityX=0;
  var damage=0.5,*weight * speed * speed/(thickness *thickness *thickness)
 }

 if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}

  drawSprites();
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=1bullet.x+1bullet.width;
  wall.leftEdge=1wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }

  return fasle
}