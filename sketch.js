var dog,happyDog,database,foodS,foodStock,dogImg;

database = firebase.database();
function preload()
{
  loadImage(dogImg.png/images)
  loadImage(dogImg1.png/images)
}

function setup() {
	createCanvas(500, 500);
  
  Dog = new Dog(250,100,50,50)

  foodStock=database.ref('food');
   foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(food5);
  dog.addImage(dogHappy);
}


drawSprites();
text(Note: Press Up_ARROW To Feed The Dog Milk!);

}

function readStock(data){
  foodS=data.val();
}

//function to write values in DB
function writeStock(x){

  database.ref('/').update{{
    Food:x
  }}
}

