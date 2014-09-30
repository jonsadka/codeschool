//Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

function LetterCapitalize(str) { 
  var result = '';
  str.split(' ').forEach(function(word){
    result += word.slice(0,1).toUpperCase() + word.slice(1) + ' ';
  })
  return result.slice(0,result.length - 1);       
}

function SimpleSymbols(str) { 
  if ( str.length < 2 && str !== '+') return false;
  var stack = [];
  var prevLetter = false
  for (var i = 0; i < str.length; i++){
    var currentChar = str[i];
    
    if ( prevLetter ){
      if ( currentChar === '+' ){
        if ( stack.pop() !== '+' ) return false;
        prevLetter = false;
      } else {
        return false;
      }
    }

    if (currentChar === '+') stack.push(currentChar);
    if ( currentChar.match(/^[a-zA-Z]/) ) prevLetter = true;
  }
  return true;
}
