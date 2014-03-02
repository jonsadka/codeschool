function warningMaker( obstacle ){
  return function () {
    console.log("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

var icebergAlert = warningMaker("iceberg");
icebergAlert();

////////////////
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

killerPenguinAlert( "6", "Ice Caves");
snowYetiAlert( "1", "Blizzard Beach");

/////////////////////////////////////////

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

    console.log("Beware! There have been " +
          obstacle +
          " sightings in the Cove today!\n" +
          number +
          " " +
          obstacle +
          "(s) spotted at the " +
          location +
          "!\n" + 
          "This is Alert #" + 
          count + 
          " today for " + 
          obstacle + 
          " danger.\n" + 
          "Current danger zones are:" + 
          list
         );
  };
}

var iceBatAlert = warningMaker3("giant ice bat");
iceBatAlert("20", "Blizzard Beach");
iceBatAlert("30", "Ice Caves");
iceBatAlert("40", "Frozen Falls");

///////////////////////////////////////

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
    console.log("Beware! There have been " +
          obstacle +
          " sightings in the Cove today!\n" +
          number +
          " " +
          obstacle +
          "(s) spotted at the " +
          location +
          "!\n" +
          "This is Alert #" +
          count +
          " today for " +
          obstacle +
          " danger.\n" +
          "Current danger zones are: " +
          list
         );
  };
}

var iceBatAlert = warningMaker4("giant ice bat");
iceBatAlert("20", "Blizzard Beach");
iceBatAlert("30", "Ice Caves");
iceBatAlert("40", "Frozen Falls");

/////////////////////////////////////////

function assignLaser( shark, sharkList ){
  var stationAssignment;
  for(var i = 0; i<sharkList.length; i++){
    if(shark == sharkList[i]){
      stationAssignment = function(){
        console.log("Yo, " +
              shark +
              "!\n" +
              "Visit underwater strapping station " +
              (i+1) +
              " for your sweet laser.\n" +
              "'Bout to get real up in here."
             );
      };
      return stationAssignment;
    }
  }
}

var sharkNames = ["Sea Pain", "Great Wheezy", "DJ Chewie", "Lil' Bitey", "Finmaster Flex", "Swim Khalifa", "Ice Teeth", "The Notorious J.A.W."];
var giveAssignment = assignLaser("DJ Chewie", sharkNames);
giveAssignment();

///////////////////////////////

function makeTargetAssigner( sharks, targets ){
  return function (shark) {
    for ( var i = 0; i<sharks.length; i++) {
      if (shark == sharks[i]) {
        alert("What up, " + shark + "!\n" + 
              "There've been " + targets[i] + " sightings in our 'hood!\n" + 
              "Time for a swim-by lasering, homie!"
              );
      }
    }
  };
}

var listOfSharks = ["Sea Pain", "Great Wheezy", "DJ Chewie", "Lil' Bitey", "Finmaster Flex", "Swim Khalifa", "Ice Teeth", "The Notorious J.A.W."];
var listOfTargets = ["icicle bat", "snow yeti", "killer penguin", "frost tiger", "polar bear", "iceberg", "blue witch", "wooly mammoth"];

var getTargetFor = makeTargetAssigner(  listOfSharks, 
                                        listOfTargets );
getTargetFor("Ice Teeth");