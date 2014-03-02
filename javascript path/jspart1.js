var diff = function (a,b) {
	return a*a - b*b;
};

console.log(diff(9,5));
console.log(diff);



//////////////////////////////////////////

var runAway = function () {
	var toAlert = "";
	for (var i = 0; i<5; i++) {
		toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
	}
	alert(toAlert);
};


///////////////////////////////////////////



var people = 5;
var rain = 6;
var sharks = 6;
var fearGenerated = function ( numPeeps, rainInInches, numSharks){
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};
var fear = fearGenerated(people, rain, sharks);
//Generates 5*6 + 6^3 = 246 FEAR. AGGGGH!!
/////////////////////////////////////////////////////////


//var fear = fearGenerated(numPeeps, rainInInches, numSharks);
var fearMessage;

if (fear < 200) {
	fearMessage = function () {
		return confirm("Fear Level: LOW.\nShould be no problem at all...mwahaha.\nStill wanna ride?");
	};
} else if (fear <= 300) {
	fearMessage = function () {
		return confirm("Fear Level: MEDIUM.\nYou may want to rethink this one, man. MWAHAHA!\nThink you'll make it?");
	};
} else {
	fearMessage = function () {
		return confirm("Fear Level: MEDIUM.\nABANDON ALL HOPE!!\nHave a death wish?");
	};
}


var startRide = confirmRide(fearMessage);

function confirmRide( confirmToGo ){
  return confirmToGo();
}

////////////////////////////////////////////////////////////

var passengers = [ ["Thomas", "Meeks"], 
                   ["Gregg", "Pollack"], 
                   ["Christine", "Wong"], 
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map(function (name) {
	return(name.join(" "));	
	}
);

console.log(modifiedNames);

///////////////////////////////

var puzzlers = [
  function ( a ) { return 3*a - 8; }, 
  function ( a ) { return (a+2) * (a+2) * (a+2); }, 
  function ( a ) { return a * a - 9; },
  function ( a ) { return a % 4; }
];

//////////