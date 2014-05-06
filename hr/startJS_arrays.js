////////////////////////////////////////////////////////////
// ITERATION AND KEY STRINGIFICATION ///////////////////////
var arr = [];

arr['x'] = 9;
arr[0] = 'cat', arr[1] = 'dog'; //dont need to stringify numbers because js
				 //does this automatically since numbers cant be vairablies


console.log(arr['x']);
//js renders this as console.log(arr('x').toString());
console.log(arr[0]);
//js renders this as console.log(arr(0).toString());

console.log(arr.length); //logs 1 becasue non-integer keys dont count
console.log(arr['length']); //logs 2
console.log(arr[arr.length-1]); //logs 'dog'

arr.push('horse'); //push method

for (var i = 0; i<arr.length; i++){
	console.log(arr[i]);
}