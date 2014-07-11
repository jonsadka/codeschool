var allPacked = false;
var adventureTime;

adventureTime = allPacked ? "yes" : "no" ;


////////////////////////////////////////////////////////////////////////
var allPacked = true;
var swordPolished = true;
var adventureTime;

adventureTime = allPacked && swordPolished ? "yes" : "no" ;

console.log(adventureTime);


////////////////////////////////////////////////////////////////////////
var allPacked = true;
var readyToGo = true;
var adventureTime;

adventureTime = allPacked && readyToGo ?

  function( ){
    return "Adventure time Is Now!" ;
  }()
  :
  function( ){
    return "Adventuring has been postponed!" ;
  }() ;

console.log(adventureTime);


////////////////////////////////////////////////////////////////////////
var isHero = true;
var character = isHero ? "Dhuun" : "Pesky Gnat";


////////////////////////////////////////////////////////////////////////
var lost;
lost = 4 || undefined;


////////////////////////////////////////////////////////////////////////
var lost;
var darkness = true;

lost = undefined || darkness;


////////////////////////////////////////////////////////////////////////
var pocketStuff = ["Dragon Tooth", "Adventure Diary", "Silver Tiger Coin"];
var cluesToThePast = pocketStuff || [] ;
getMyIdentity(cluesToThePast);

function getMyIdentity( memories ){
  var identity = ( memories.indexOf("Adventure Diary") >= 0 ) ? "The One Who Learns" : undefined;
  return "unknown" || identity;
}


////////////////////////////////////////////////////////////////////////
var strength = true;
var fear = false;
var pack = {
  food: [ "carrot",
          "mystery meat",
          "apple",
          "crust of bread",
          "spicy dried sausage",
          "carrot",
          "wedge of sharp cheese",
          "jug of milk",
          "mystery meat",
          "carrot"
  ],
  addFood: function(foodItem){
    this.food = this.food || [];
    this.food.push(foodItem);
  },
  enoughFood:function(amount){
    return(this.food.length >= amount);
  }
};

var surviveThisTrial = strength && !fear && pack.enoughFood(10);

console.log(surviveThisTrial);


////////////////////////////////////////////////////////////////////////
var strength = true;
var fear = true;
var pack = {
  food: [ "carrot",
          "mystery meat",
          "apple",
          "crust of bread",
          "spicy dried sausage",
          "carrot",
          "wedge of sharp cheese",
          "jug of milk",
          "mystery meat",
          "carrot"
        ],
  addFood: function(foodItem){
    this.food = this.food || [];
    this.food.push(foodItem);
  },
  enoughFood:function(amount){
    return(this.food.length >= amount);
  }
};

var surviveThisTrial = strength && !fear && pack.enoughFood(10);


////////////////////////////////////////////////////////////////////////
function aiedrasMutterings(lampsLit){
  var aiedrasWords;
  switch(lampsLit){
    case 1 : aiedrasWords = "Darkness, there is so much darkness still shrouding the land.";
    case 2 : aiedrasWords = "A beacon of hope, these two lamps are, but two more still await.";
    case 3 : aiedrasWords = "Nearly it is complete, twilight breaking, is that a song I hear?";
    case 4 : aiedrasWords = "It is done, a new age has begun, a new dawn has risen.";
    default: aiedrasWords = "Shall we live in Infinite Midnight always?";
  }
  return aiedrasWords;
}
alert(aiedrasMutterings(0));


////////////////////////////////////////////////////////////////////////
function sansTemple(direction){
  var happensNext;
  switch (direction){
    case "right hallway":
    case"left hallway":
    case "forward hallway":
    case "lower tunnel":
      happensNext = "You find a door, it is locked. You head back from where you came.";
      break;
    case "hidden door":
      happensNext = "You go through the door into a room. A small, very dark room, that smells of dust and sulfur...";
      break;
    default:
      happensNext = "You stand there, gaping, not moving. Aiedra wonders, are you alive?";
  }
  return happensNext;
}
sansTemple();


////////////////////////////////////////////////////////////////////////
function CaretakerMedallion (caretaker){
  switch (caretaker){
    case "ElementElder":
      this.goldenEdge = "Consilium autem liberabit vos";
    case "ColorCardinal":
      this.silverStamp = "Non video colorem, colore videt me";
    case "PixelPriest":
      this.bronzeBanner = "Omne initium est a pixel";
    case "FontFriar":
      this.circumscribedSquare = "Venit Comic Sans";
    case "StyleSensei":
      this.innerRing = "Ars autem est in aeternum";
  }
}

// Here's a sample usage of our CaretakerMedallion function with two sample input.
var medallion1 = new CaretakerMedallion("ColorCardinal") 
/*
  medallion1 will have the following properties
  CaretakerMedallion {
    goldenEdge: "Consilium autem liberabit vos", 
    silverStamp: "Non video colorem, colore videt me", 
    bronzeBanner: "Omne initium est a pixel", 
    circumscribedSquare: "Venit Comic Sans", 
    innerRing: "Ars autem est in aeternum,"
  }
*/

// What about our StyleSensei? This is what the CaretakerMedallion inner values will be equal to.
var medallion2 = new CaretakerMedallion("StyleSensei")     
/* 
  medallion2 will have the following properties:
  CaretakerMedallion { innerRing: "Ars autem est in aeternum" }
*/
