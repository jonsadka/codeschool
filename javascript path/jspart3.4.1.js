var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type:"Jet Ski", capacity: 1, storedAt:"Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt:"Underwater Outpost"};

console.log(vehicle1.capacity);


////////////////////////////////////////////////////////////////////////
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type:"Jet Ski", capacity: 1, storedAt:"Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt:"Underwater Outpost"};
var vehicles = [vehicle1, vehicle2, vehicle3];

var findVehicle = function (name, list){
  for (var i = 0; i < list.length; i++ ) {
    if ( name==list[i]["type"] ) {
      return list[i].storedAt;
    }
  }
};

findVehicle("Submarine", vehicles);


////////////////////////////////////////////////////////////////////////
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type:"Jet Ski", capacity: 1, storedAt:"Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt:"Underwater Outpost"};

vehicle1.capacity+=4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity*=2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;

vehicle3["# of weapons"] = 8;
vehicle2["# of weapons"] = 4;
vehicle1["# of weapons"] = 1;


////////////////////////////////////////////////////////////////////////
var superBlinders = [ ["Firelight", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  bulbs: [ 200, 500, 750 ],
  capacity: 30,
  secretPassageTo: "Underwater Outpost"
};

delete lighthouseRock.bulbs;
lighthouseRock.weaponBulbs = superBlinders;

console.log( lighthouseRock.weaponBulbs[2][0] );


////////////////////////////////////////////////////////////////////////
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 0
};

//add rangers
var addRanger = function ( location, name, skillz, station) {
  location.numRangers++;
  location["ranger" + location.numRangers] = { name:name, skillz:skillz, station:station };
};

addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2);
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);

//add alert
var dontPanic = function (location) {
  var list = "";
  
  for (var i = 0; i<location.numRangers; i++) {
    list = list + "\n" + 
           location["ranger"+ (i+1) ].name + ", man the " + location.weaponBulbs[ location["ranger"+(i+1)].station-1 ][0] + "!";
  }

  alert("Avast, me hearties!\n" + 
        "There be Pirates nearby! Stations!" + list);
}

dontPanic(lighthouseRock);