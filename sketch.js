var b1,wall,speed,weight,thickness;



function setup() {
  createCanvas(1600,400);
   b1=createSprite(50, 200, 20, 30);
   b1.shapeColor="gray";
  speed=random(223,321);
  weight=random(30,52)
  thickness=random(22,83);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor="green"
    b1.velocityX=speed;
}

function draw() {
  background(255,255,255);  

    

    if (collided())
    {
      b1.velocityX=0;
      var damage= 0.5* weight* speed * speed/(thickness*thickness*thickness)

      if(damage>10)
      {
        wall.shapeColor="red"

      }
      else if (damage<10){
      wall.shapeColor="blue"

    }
    console.log(damage);
  }


  drawSprites();
}
function collided()
  {
    if(wall.x-b1.x<=wall.width+b1.width) {
      return true;
 }
  else{
   return false;
  }
}