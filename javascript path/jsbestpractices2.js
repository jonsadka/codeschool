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