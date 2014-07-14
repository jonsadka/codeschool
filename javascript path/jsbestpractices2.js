var bitersBog = {
  critters: ["Nipping Global Variable", 
             "Sneaky For-in", 
             "Bulging Blocking Script"]
};

populationGetter(bitersBog); 

function populationGetter( location ){
  var list = "";
  for(var i = 0, numCritters = location.critters.length; i < numCritters; i++){
    list += location.critters[i];
  }
  return list.trim();
}


////////////////////////////////////////////////////////////////////////
// Create a new invertedPeninsula
var invertedPeninsula = new InvertedPeninsula();

// Console.log the name of each invertedPeninsula inhabitant
for(var i = 0, inhabitantsLength = invertedPeninsula.inhabitants.length;i < inhabitantsLength; i++){
  console.log(invertedPeninsula.inhabitants[i].name);
}


////////////////////////////////////////////////////////////////////////
<html>
  <head>
    <script type="text/javascript" src="https://www.fourlands.com/takesForever.js" async></script>
  </head>
  <body>
    /* Mystical Page body html */
  </body>
</html>


////////////////////////////////////////////////////////////////////////
var array = ["The", "Inverted", "Peninsula", "reminds", "you", "of", 
               "something", "just", "at", "the", "fringe", ",", 
               "just", "out", "of", "grasp", "."];
array.join(" ");


////////////////////////////////////////////////////////////////////////
var array = ["Inverted Peninsula", ",", 
  "Inverted Peninsula", ", ", "I", "—", 
  "P", "...", "hmmm", "."];
var internalThoughts = "";

console.time("Test");

internalThoughts = array.join(" ");

console.time("innerTest");
console.log(internalThoughts);
console.timeEnd("innerTest");

console.timeEnd("Test");


////////////////////////////////////////////////////////////////////////
var SpeedTest = function(testImplement,testParams,repetitions){
  this.testImplement = testImplement;
  this.testParams = testParams;
  this.repetitions = repetitions || 10000;
  this.average = 0;
};

SpeedTest.prototype = {
  startTest: function(){
    if( this.testImplement( this.testParams ) === false ){
      alert("Yo, man, that test failed with those parameters.");
      return;
    }
    var beginTime, endTime, sumTimes = 0;
    for (var i = 0, x = this.repetitions; i < x; i++){
      beginTime = +new Date();
      this.testImplement( this.testParams );
      endTime = +new Date();
      sumTimes += endTime - beginTime;
    }
    this.average = sumTimes / this.repetitions;
    return console.log("Average execution across " + this.repetitions + ": " + this.average);
  }
};

var IP = ["Nipping Global Variable", "Sneaky Forin", "Bulging Blocking Script"],
GH = ["Switch Blocks", "Pesky Gnat", "Aiedra"],
inhabitants = [IP,GH];

function populationGetterConcat(popn){
  var list = "";
  for(var i = 0, x = popn.length; i < x; i++){
    for(var j = 0; j < popn[i].length; j++){
      list += (popn[i][j] + ", ");
    }
  }
  return list;
}

populationGetterConcat(inhabitants);

function populationGetterJoin(popn){
  var list = [];
  for(var i = 0, x = popn.length; i < x; i++){
    list.push(popn[i].join(', '));
  }
  return list.join(', ');
}

populationGetterJoin(inhabitants);

var concatTest = new SpeedTest(populationGetterConcat, inhabitants, 100000);
concatTest.startTest();
var joinTest = new SpeedTest(populationGetterJoin, inhabitants);
joinTest.startTest();