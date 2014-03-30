var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

function listGuns (guns){
  for(var key in guns){
    console.log(key);
  }
}

listGuns(rockSpearguns);


////////////////////////////////////////////////////////////////////////
var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

var listGuns = function(guns) {
  for (var sparegun in guns) {
    console.log("Behold! " + sparegun + ", with " + guns[sparegun]["heft"] + " heft!");
  }
};

listGuns(rockSpearguns);


////////////////////////////////////////////////////////////////////////
var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};


rockSpearguns["listGuns"] = function(){
  for(var property in this){
    if(this[property]["heft"] != undefined){
      console.log("Behold! " + property +
                  ", with " + this[property]["heft"] +
                  " heft!");
    }
  }
};

rockSpearguns["listGuns"]();