var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;
while (monthNumber <= monthsToPrint) {
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  monthNumber++;
}

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while (currentGen <= 4) {
	totalMW += 62;
  console.log("Generator #" + currentGen + " is on, adding 64 MW, for a total of " + totalMW + " MW!");
  currentGen++;
}

for (currentGen + 1; currentGen <= totalGen ; currentGen++ ) {
	totalMW += 124;
  console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
}

var num = 10;
while(num>0){
  if(num % 2 == 0){
    console.log(num);
  }
  num--;
}

var numSheep = 4;
var monthsToPrint = 12;

for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (monthNumber % 4 == 0) {
  	numSheep *= .25;
    console.log("Removing " + numSheep*3 + " sheep from the population. Phew!");
  } else if (numSheep > 10000) {
    numSheep /= 2;
    console.log("Removing " + numSheep + " sheep from the population. Phew!");         
  }

  numSheep*=4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

////////////////////////////////////////////
var totalGen = 19;
var totalMW = 0;

for (currentGen = 1; currentGen <= 19; currentGen++) {
  
  if (currentGen % 2 == 0) {

    if (currentGen <= 4) {
		totalMW += 62;
		console.log("The Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
    } else {
		totalMW += 124;
		console.log("The Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
	}
      
  } else   	
    console.log("Generator #" + currentGen + " is off");
  }


//////////////////////////////////////////////////
//var ageIsCorrect = false;

//while (ageIsCorrect == false) {
//	var userAge = prompt("What's your age user?");
//  if (confirm("Are you sure your age is " + userAge + "?")) {
//    ageIsCorrect = true;
//    alert("Great! your age is logged as " + userAge);
//  }
//}

//////////////////////////////////////////////////
var x = 6;
var y = 3;

function multiply (a,b) {
  return a * b;
}

var showMe = multiply(x,y);
console.log(showMe);


//////////////////////////////////////////////////
var currenPopulation = 300;
var rangerAvailable = 50;

function feedPerRanger (numSheeps, numRangers) {
  return alert("Each Park Ranger should load " + numSheeps*2/numRangers + " lb(s) of feed into his/her BART today.");
}

feedPerRanger(currenPopulation,rangerAvailable);


//////////////////////////////////////////////////
var currentPower = 0;
var id = 1;
var status = "off";
var powerProduced = 62;


function changePowerTotal (total, ID, status, power) {
  if(status == "on"){
    total += power;
    alert("Generator #" + ID + " is now on, adding " + power + " MW, for a total of " + total + " MW!");
  } else if (status == "off"){
    total -= power;
    alert("Generator #" + ID + " is now off, removing " + power + " MW, for a total of " + total + " MW!");
  }
  return total;
}

changePowerTotal(currentPower,id,status,powerProduced);


////////////////////////////////////////////////////
var movie1 = ["Planet of", "the Apes", 2];
var movie2 = ["Wild", "Wild", "West"]
var eightiesMovies = [movie1, movie2]
console.log(eightiesMovies[0][0] + " " + eightiesMovies[0][1] + " " + eightiesMovies[0][2])


////////////////////////////////////////////////////////////
var myArray = [2,1,2,"hello",5,"moto",3,2]

function numStrings(list) {
  var count = 0;
  for(var i = 0; i < list.length; i++) {
    if (typeof list[i] == "string") {
      count++;
    }
  }  
  return count;
}

console.log("There are " + numStrings(myArray) + " strings in the array.");