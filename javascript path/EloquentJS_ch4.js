//https://www.inkling.com/read/javascript-definitive-guide-david-flanagan-6th/chapter-7/ecmascript-5-array-methods
// modifies old array
var data = [0,1,2,3,null,undefined,false,'',true];
var res;
data.forEach(function(v, i, arr){
  res[i] = v + v;
});
res;

// map returns NEW array
// i.e. Array.prototype.slice.call(array)
var data2 = [0,1,2,3,null,undefined,false,'',true];
var newArr = data2.map(function(v, i, a){
  return v * v;
});
newArr;

// filter
var data3 = [0,1,2,3,null,undefined,false,'',true];
var filt = data3.filter(function(v,i,a){
  v++;
  return v > 1;
})
filt;

//every
var data4 = [1,2,3,null,undefined,false,'',true];
data4.every(function(v,i,a){
  console.log('Value to be checked: ' + v);
  return v >= 1;
});

//some
var data5 = [0,1,2,3,null,undefined,false,'',true];
data5.some(function(v, i, a){
  console.log('Value to be checked: ' + v);
  return v === null;
});

//reduce
var data6 = [0,1,2,3,4];
data6.reduce(function(pv, cv, i, a){
  return (pv > cv ) ? pv : cv ;
}, 0);

// Count B's
var countBs = function(string){
  return string.split('').reduce(function(pv,cv){
    cv === 'B' ? pv++ : console.log(cv + ' is not B.');
    return pv;
  },0);
};

// THE SUM OF A RANGE
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.
// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
var range = function(start, end, step){
  var result = [];
  var count = 0;
  step = step || 1;
  if ( end <= start ) return "End larger than or equal to start";
  while (count < end-start ){
    result.push(null);
    count += step;
  }
  return result.reduce(function(pv,cv,i){
    pv.push( start + i*step + 1 );
    return pv;
  }, [start]);
};
var sum = function(arr){
  startValue = 0;
  arr.forEach(function(value){
    startValue += value;
  });
  return startValue;
};

// REVERSING AN Array
// Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.
var reverseArray = function(arr){
  return arr.reduceRight(function(pv,cv,i,arr){
    if ( i !== arr.length-1 ){ pv.push( cv ); }
    return pv;
  },[arr[arr.length-1]]);
};

// A LIST
// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.
// If you haven’t already, also write a recursive version of nth.
var arrayToList = function(arr){
};

// DEEP COMPARISON
// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.
// To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".
var deepEqual = function(value1, value2){
};