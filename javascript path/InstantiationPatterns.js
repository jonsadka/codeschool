// Decorators / Functional Programming
var makeCar = function(obj, loc){
  obj.loc = loc;
  obj.move = function(){ this.loc++; };
  return obj;
}

var amy = makeCar({}, 1);
var enemy = makeCar({},10);
amy.move();
amy.move();

// Functional Shared
var Car = function(loc){
  var obj = {loc:loc};
  extend(obj, Car.methods);
  return obj;
};
Car.methods = {
  move: function(){ this.loc++; }
};

var amy = Car(1);
var enemy = Car(9);
amy.move();

function extend(obj) {
  var source, prop;
  for (var i = 1, length = arguments.length; i < length; i++) {
    source = arguments[i];
    for (prop in source) {
      obj[prop] = source[prop];
    }
  }
  return obj;
};

// Prototypal Classes
var Car = function(loc){
  var obj = Object.create(Car.prototype);
  obj.loc = loc;
  return obj;
};
Car.prototype = {
  move: function(){ this.loc++; }
};

var amy = Car(1);
var ben = Car(10);
console.log(Car.prototype.constructor);
console.log(          amy.constructor);
console.log(amy instanceof Car);

// Pseudoclassical
var Car = function(loc){
  this.loc = loc;
};
Car.prototype.move = function(){
  this.loc++;
};

var amy = new Car(1);
amy.move();
var ben = new Car(10);
ben.move();