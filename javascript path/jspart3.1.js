var passengers = [ ["Thomas", "Meeks"], 
                   ["Gregg", "Pollack"], 
                   ["Christine", "Wong"], 
                   ["Dan", "McGaw"] ];
var modofiedNames = passengers.map( function (firstAndLast) { return firstAndLast[0] + " " + firstAndLast[1]; } );
console.log(modofiedNames);

/////////////////////////////////

//modofiedNames.map( function (name) { alert("Yo, " + name + "!"); });

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

var applyAndEmpty = function (input, queue) {
	
	var length = queue.length;
	for (var i = 0; i < length; i++) {
		input = queue.shift()(input);
	}
	return input;
};

console.log(applyAndEmpty(start, puzzlers));

////////////////////////////

var puzzlers = [
  function ( a ) { return 8*a - 10; }, 
  function ( a ) { return (a-3) * (a-3) * (a-3); }, 
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];

console.log( puzzlers[puzzlers[1](3)](puzzlers[3](9)) );