// MAP ///////////////////////////////////////////////////////////////////////
var array = ["a","b","c","d"];

var map = function(collection, callback){
  for (var i = 0; i<collection.length; i++){
    collection[i] = callback(collection[i]);
  }
  return collection;
};

map(array, function(index){
  return (index + " has been modified!");
});



// FILTER NUMBERS ///////////////////////////////////////////////////////////
var array = [1,2,3,4,5,6];

var filter = function(collection, callback){
  var newArray = [];
  for (var i = 0; i<collection.length; i++){
    if( callback(collection[i]) === true ){
      newArray.push(collection[i]);
    }
  }

  return newArray;

}

filter(array, function(testValue){
  return testValue%2===0;
});

// FILTER LETTERS /////////////////////////////////////////////////////////////
var array = ["Jonathan Poly", "Jonathan Smith", "Jonathan Joe", "Jonathan Allen"];

var filter = function(collection, callback){
  var condensedArray = [];
  for (var i=0; i<collection.length; i++){
    if(callback(collection[i])===true) {
      condensedArray.push(collection[i]);
    }
  }
  return condensedArray;
}

filter (array, function(element){
  return element.charAt(9)==="J" || element.charAt(9)==="A";
});

// REDUCE ///////////////////////////////////////////////////////////////
var array = [1,2,3,4];

var reduce = function(collection, callback, starting){
  var value = starting || 0;
  for (var i=0; i<array.length; i++){
    value = callback(value, collection[i], i, collection);
  }
  return value;
};

reduce(array, function(start, current, i, array){
  return start * current;
}, 1);