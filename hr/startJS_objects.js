////////////////////////////////////////////////////////////
// OBJECTS AND PROPERTIES //////////////////////////////////

var obj = {}; //object literal. each object has a key/property and a value
obj['x'] = 9; //key = x, value = 9
obj.y = 2;

console.log(obj['x']); //9
console.log(obj['y']); //2
console.log(obj.y); //2
console.log(obj['z']); //undefined

/////////////////////////////////////////////////////////////
var obj2 = {};
obj2['x'] = 9;
obj2['~/ [.4'] = 'cat';

var key = 'x';

console.log(obj2[key]); //9
console.log(obj2.key); //undefined
console.log(obj2['key']); //undefined

console.log(obj2['~/ [.4']); //cat


/////////////////////////////////////////////////////////////
var obj3 = {
	x: 9,
	'~/ [.4': 'cat'
};

console.log(obj3.x);
console.log(obj3['~/ [.4']);

////////////////////////////////////////////////////////////
// ITERATION AND KEY STRINGIFICATION ///////////////////////
var obj4 = {};

obj4['x'] = 9;
obj4[0] = 'cat'; //dont need to stringify numbers because js
				 //does this automatically since numbers cant be vairablies

console.log(obj4['x']);
//js renders this as console.log(obj4('x').toString());
console.log(obj4[0]);
//js renders this as console.log(obj4(0).toString());

for(var k in obj4){
	console.log(k);
} //logs x and 0, both of which are STRINGS, not numbers or variables