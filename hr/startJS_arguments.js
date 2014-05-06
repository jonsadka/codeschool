////////////////////////////////////////////////////////////
// PARAMATERS, ARUGMENTS, and arguments object /////////////
var fun = function(input, in2) {
	console.log(arguments);
	console.log(arguments[3]+in2);
}

fun('abcd', 3, true, "jelly beans", "hello", "testing 123");


////////////////////////////////////////////////////////////
// PASSING FUNCTIONS AS ARUGMENTS //////////////////////////
var fun2 = function(input) {
	console.log(input.toUpperCase());
}

setTimeout(
	function(){
		fun2('hi');
	}
, 1000);


////////////////////////////////////////////////////////////
// PROPERTY VALUES AND METHODS /////////////////////////////
var obj = {};

obj['x'] = function(){return 3;};

console.log(
	obj['x']
);				////logs the function

console.log(
	obj.x()
)				///logs the returned value