////////////////////////////////////////////////////////////
// SCOPES //////////////////////////////////////////////////
var a_variable = { a: 1 };
a_variable.a_property = { b : 2 };
({ c :3 }).a_property = { b : 2 };

var gimmieObj = function(){
	return {x:1, y:2, z:3};
}
gimmieObj();

var gimmieScope = function(){
	var x=1, y=2, z=3;
	return ???; //can't return something without constructing an object
}
gimmieScope();

var a_global_variable = 7;
console.log(a_global_variable);
console.log(window.a_global_variable);

var gimmieTheGlobalScope = function(){
	return window;
}
gimmieTheGlobalScope();

////////////////////////////////////////////////////////////
// CLOSURES ////////////////////////////////////////////////
var makeStopwatch = function(){
	var elapsed = 0;
	var stopwatch = function() { return elapsed; } ;
	var increase = function() { elapsed++; } ;
	setInterval(increase, 1000);
	return stopwatch;
}

var stopwatch1 = makeStopwatch();
//...wait a few seconds before proceeding
var stopwatch2 = makeStopwatch();
//...wait a few seconds before proceeding
stopwatch1();
stopwatch2();