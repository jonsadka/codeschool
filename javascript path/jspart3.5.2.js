var genericPost = 
  {x: 0, y: 0, postNum: undefined,
   connectionsTo: undefined,
   sendRopeTo: function ( connectedPost ) {
     if(this.connectionsTo == undefined){
       var postArray = [ ];
       postArray.push(connectedPost);
       this.connectionsTo = postArray;
     } else {
       this.connectionsTo.push(connectedPost);
     }
   }
  };

var post1 = Object.create(genericPost);
var post2 = Object.create(genericPost);

post1.x = -2;
post1.y = 4;
post1.postNum = 1;

post2.x = 5;
post2.y = 1;
post2.postNum = 2;


////////////////////////////////////////////////////////////////////////
var genericPost = {
  x: 0, 
  y: 0, 
  postNum: undefined, 
  connectionsTo: undefined,
  sendRopeTo: function ( connectedPost ) {
    if(this.connectionsTo == undefined){
      var postArray = [ ];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};
var post8 = Object.create(genericPost);
var post9 = Object.create(genericPost);
var post10 = Object.create(genericPost);
post8.x = 0;
post8.y = -3;
post8.postNum = 8;
post8.sendRopeTo(post10);
post9.x = 6;
post9.y = 8;
post9.postNum = 9;
post9.sendRopeTo(post10);
post10.x = -2;
post10.y = 3;
post10.postNum = 10;
post10.sendRopeTo(post8);
post10.sendRopeTo(post9);
post9.numBirds = 0;
post10.weathervane = "N";
post8.lightsOn = false;
post10.lightsOn = false;


////////////////////////////////////////////////////////////////////////
function Fencepost (x, y, postNum){
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function ( connectedPost ){
    this.connectionsTo.push(connectedPost);
  };
}


////////////////////////////////////////////////////////////////////////
function Fencepost (x, y, postNum){
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function ( connectedPost ){
    this.connectionsTo.push(connectedPost);
  };
}
var post18 = new Fencepost(-3, 4, 18);
var post19 = new Fencepost(5, -1, 19);
var post20 = new Fencepost(-2, 10, 20);
post18.sendRopeTo(post20);
post20.sendRopeTo(post18);
post18.sendRopeTo(post19);
post19.sendRopeTo(post18);


////////////////////////////////////////////////////////////////////////
function Fencepost (x, y, postNum){
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function ( connectedPost ){
    this.connectionsTo.push(connectedPost);
  };
  this.removeRope = function ( removeTo ){
    var temp = [];
    for(var i = 0; i<this.connectionsTo.length; i++){
       if(this.connectionsTo[i].postNum != removeTo){
         temp.push(this.connectionsTo[i]);
       }
    }
      this.connectionsTo = temp;
  }
  this.movePost = function (x, y){
    this.x = x;
    this.y = y;
  };
}