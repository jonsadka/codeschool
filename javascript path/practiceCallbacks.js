var xyz = ["x", "y", "z"];

xyz.map( function(cv, index, array){ return cv + " " + index; } )

function logArrayElements(element, index, array) {
    var xxx = "a[" + index + "] = " + element;
    return xxx;
}


///////////////////////////////////////////////////////////////////////

// define our function with the callback argument
function some_function(arg1, arg2, callback) {
  // this generates a random number between
  // arg1 and arg2
  var my_number = Math.ceil(Math.random() *
    (arg1 - arg2) + arg2);
  // then we're done, so we'll call the callback and
  // pass our result
  callback(my_number);
}
// call the function
some_function(5, 15, function(num) {
  // this anonymous function will run when the
  // callback is called
  console.log("callback called! " + num);
});

///////////////////////////////////////////////////////////////////////
function something(a, b, callback) {
  var something = 7;
  callback("callback called on " + something + " " + a + " " + b);
}

something(2,5,function(blah){
  console.log(blah); 
});


//////////////////////////////////////////////////////////////////////////
var numbers = [0,1,2,3,4,5];

var rounded = function(a, b, callback) {
  var display = "The Numbers you Want Are: ";
  callback(display + numbers);
}

rounded(2, 7, function(input){
  console.log(input);
});


////////////////////////////////////////////////////////////////////////
//Create a message that takes a user's age and name as inputs, and returns a message
var displayName = function (name, age, callback) {
  callback("Hey there " + name + ". Your age is " + age + ".");
}

displayName("Jonny", 24, function(message){
  console.log(message);
});


////////////////////////////////////////////////////////////////////////
//Creats a function that takes in two numbers as inputs and returns their sum
var message = "Your total number is: ";
var add = function(num1, num2, callback) {
  callback(message + num1 + num2);
};

add(3,4,function(input){
  console.log(input);
});


////////////////////////////////////////////////////////////////////////
//Creats a function that returns true if inputs are equal
var message1 = "Hello!";
var message2 = "Hello";

var checkEqual = function(a, b, callback){
  var equal;
  if (a===b){
    equal = true;
  } else {
    equal = false;
  }
  callback("Your inputs are " + equal)
};

checkEqual(message1, message2, function(boolMessage){
  console.log("Checking if they are equal...");
  console.log(boolMessage);
});


////////////////////////////////////////////////////////////////////////
//Creats a function that rsays if you can ride rollercoaster
var limit = 54;

var check = function(userAge, minHeight, callback){
  if (userAge<minHeight){
    callback("you are too short to ride.");
  } else {
    callback("You can ride");
  }
};

var displayMessage = function(input){console.log(input)};

check(100, limit, displayMessage);