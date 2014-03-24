var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  addRanger: function (name, skillz, station){
    this.numRangers++;
    this["ranger" + this.numRangers] = { name: name, skillz: skillz, station: station }; 
  }
};

lighthouseRock.addBulb = function (name, wattage) { 
  this.weaponBulbs.push( [name, wattage] ); 
};

lighthouseRock.addRanger("Jordan Wade", "dual-wield hand crossbow", 4);
lighthouseRock.addBulb("Blasterbright", 5000);
lighthouseRock.addBulb("Sight Slayer", 1800);
lighthouseRock.addBulb("Burner of Souls", 7500);


////////////////////////////////////////////////////////////////////////
var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: { name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
  ranger3: { name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: { name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};

function relieveDuty (vehicle, day){
  var offDuty = [ ];
  var onDuty = [ ];
  
  for(var i = 1; i<=vehicle["numRangers"]; i++){
    if(vehicle["ranger" + i]["dayOff"] == day){
      offDuty.push(vehicle["ranger" + i]);
    }
    else{
      onDuty.push(vehicle["ranger" + i]);
    }
    delete vehicle["ranger" + i];
  }
  
  vehicle.numRangers -= offDuty.length;
  
  for(var j = 1; j<=vehicle["numRangers"]; j++){
    vehicle["ranger" + j] = onDuty.shift();
  }

  return offDuty;
}

var offToday = relieveDuty(vehicle3, "Friday");
console.log(offToday);
console.log(vehicle3);