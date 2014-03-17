var fear = 203;
var fearMessage;

if(fear < 200){
  fearMessage = function () {
    return confirm( "Fear Level: LOW.\n" +
      "Should be no problem at all...mwahaha.\n" +
      "Still wanna ride?");
  };

} else if (fear<=300) { 
  fearMessage = function () {
    return confirm( "Fear Level: MEDIUM.\n" + 
      "You may want to rethink this one, man. MWAHAHA!\n" +
      "Think you'll make it?");
  };

} else {
  fearMessage = function () {
    return confirm( "Fear Level: HIGH.\n" + 
      "ABANDON ALL HOPE!!\n" + 
      "Have a death wish?" );
  };
}

var startRide = confirmRide(fearMessage);

function confirmRide( confirmToGo ){
  return confirmToGo();
}


////////////////////////////////////
var passengers = [ ["Thomas", "Meeks"], 
                   ["Gregg", "Pollack"], 
                   ["Christine", "Wong"], 
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map( function (arrayCell) {return arrayCell[0] + " " + arrayCell[1]; } );

modofiedNames.map( function (name) { alert("Yo, " + name + "!"); } );


////////////////////////////////////
function adventureSelector ( userChoice ) {
  if (userChoice == 1) {
    return function () {
    alert("You've selected the Vines of Doom!\n" +
          "Hope you have a swingin' time.");
    };
  } else if (userChoice == 2) {
    return function () {
    alert("Looks like you want the Lake of Despair!\n" +
           "Watch out for crocs. And I ain't talkin' about shoes.");
    }; 
  } else if (userChoice == 3) {
    return function () {
      alert("The Caves of Catastrophe, really?\n" +
            "Alright, well....nice knowing you.");
    };
  }
}

adventureSelector(3)();


///////////////////////
var puzzlers = [
  function ( a ) { return 8*a - 10; }, 
  function ( a ) { return (a-3) * (a-3) * (a-3); }, 
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];
var start = 2;

var applyAndEmpty = function (inputNumber, equations) {
	
	var count = equations.length;
	for (var i = 0; i < count; i++) {
		inputNumber = equations.shift()(inputNumber);
	}
	return inputNumber;
};

applyAndEmpty(start, puzzlers);


////////////////////////////
var puzzlers = [
  function ( a ) { return 8*a - 10; }, 
  function ( a ) { return (a-3) * (a-3) * (a-3); }, 
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];

console.log( puzzlers[puzzlers[1](3)](puzzlers[3](9)) );