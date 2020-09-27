
var b1,wall,speed,weight;
var thickness,damage;



function setup() {
  createCanvas(1600,400);
   b1=createSprite(450, 200, 50, 50);
   b1.shapeColor=("gray");
   wall=createSprite(1200, 200, thickness, height/2);
  speed=random(100,120);
  weight=random(30,52)
  wall.shapeColor=("green");
  b1.velocityX=speed;
}

function draw() {
  background(255,255,255);  

   thickness=random(22,83);

    if (collided(b1,wall))
    {
      b1.velocityX=0;
      var damage=0.5* width* speed * speed/(thickness*thickness*thickness)

      if(damage>10)
      {
        wall.shapeColor=("red")

      }
      if(damage<10){
      wall.shapeColor=("blue")
    }
  }
  

  drawSprites();
}
function collided(b1,wall)
  {
    b1RightEdge=b1.x + b1.width;
    wallLeftEge=wall.x
    if(b1RightEdge>=wallLeftEge) {
      return true;

    }
    return false;
  }
