var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);

function mystery ( input ){
  var secret = 4;
  input+=2;
  function mystery2 ( multiplier ) { 
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}
function mystery3 ( param ){
  function mystery4 ( bonus ){
    return param(6) + bonus;
  }
  return mystery4;
}

console.log(result);


////////////////////////////////////////////////////////////////////////
function warningMaker( obstacle ){
  return function () {
    console.log("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

var icebergAlert = warningMaker("iceberg");
icebergAlert();


////////////////////////////////////////////////////////////////////////
function warningMaker2( obstacle ){ 
  return function ( number, location ) {
    console.log("Beware! There have been " + 
          obstacle + 
          " sightings in the Cove today!\n" +
          number + 
          " " + 
          obstacle + 
          "(s) spotted at the " + 
          location + 
          "!"
         );
  };
}

var killerPenguinAlert = warningMaker2("killer penguin");
var polarBearAlert = warningMaker2("polar bear");
var icebergAlert = warningMaker2("iceberg");
var flashBlizzardAlert = warningMaker2("flash blizzard");
var snowYetiAlert = warningMaker2("snow yeti");

killerPenguinAlert(6, "Ice Caves");
snowYetiAlert(1, "Blizzard Beach");


////////////////////////////////////////////////////////////////////////
function warningMaker3( obstacle ){
  var count = 0;
  var zones = [];
  return function ( number, location) {
    count++;
    zones.push(location);
    var list = "";
    for (i = 0; i < zones.length; i++) {
      list = list + "\n" + zones[i];
    }
    console.log("Beware! There have been " + obstacle + " sightings in the Cove today!\n" +
          number + " " + obstacle + "(s) spotted at the " + location + "!\n" + 
          "This is Alert #" + count + " today for " + obstacle + " danger.\n" + 
          "Current Danger Zones are:" + list
         );
  };
}

var iceBatAlert = warningMaker3("giant ice bat");
iceBatAlert(20, "Blizzard Beach");
iceBatAlert(30, "Ice Caves");
iceBatAlert(40, "Frozen Falls");


////////////////////////////////////////////////////////////////////////
function warningMaker4( obstacle ){
  var count = 0;
  var zones = [];
  return function ( number, location ) {
    count++;
    zones.push([location, number]);
    var list = "";
    for(var i = 0; i<zones.length; i++){        
        list = list + "\n" + zones[i][0] + " (" + zones[i][1] + ")";  
    }
    console.log("Beware! There have been " + obstacle + " sightings in the Cove today!\n" +
          number + " " + obstacle + "(s) spotted at the " + location + "!\n" + 
          "This is Alert #" + count + " today for " + obstacle + " danger.\n" + 
          "Current Danger Zones are:" + list
         );
  };
}

var iceBatAlert = warningMaker4("giant ice bat");
iceBatAlert(20, "Blizzard Beach");
iceBatAlert(30, "Ice Caves");
iceBatAlert(40, "Frozen Falls");