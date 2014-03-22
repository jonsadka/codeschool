function thisIsWeird () {

  function secret(){
    var unused3;
  }
  
  var result;

  function secret(){
    var unused1;
  }
  
  result = secret;

  function secret(){
    var unused2;
  }
  
  return result;
}

console.log("unused2");


////////////////////////////////////////////////////////////////////////
function theBridgeOfHoistingDoom () {
  function balrog(){ return "fire"; }

  var ring;

  function elf(){    return "pointy ears";  }
  
  ring = wizard;
  wizard = balrog;
  return wizard();
  
  function balrog(){    return "whip";  }
  
  function wizard(){    return "white";  }
  
  var power = ring();
  
  return elf();
  
  function elf(){    return "immortal";  }
}
//changes to:
function theBridgeOfHoistingDoom () {
  var ring = undefined;
  var power = undefined;

  function balrog(){    return "whip";  }
  function wizard(){    return "white";  }
  function elf(){    return "immortal";  }
 
  ring = wizard;
  wizard = balrog;
  return wizard();

}


////////////////////////////////////////////////////////////////////////
function theBridgeOfHoistingDoom( ){
  function fellowship(){    return "friends";  }
  var sword = "sting";
  var dwarf = function(){     return "axe";  };
  var fall = "Fly you fools!";
  fellowship = function(){    return "broken";  };
  ring();
  return sword;
  fellowship = function(){    return "mines"  };
  sword = function(){    return "glamdring";  };
  var ring = function(){      return "precious";  }; 
}

//changes to:
function theBridgeOfHoistingDoom( ){
  var sword = undefined;
  var dwarf = undefined;
  var fall = undefined;
  var ring = undefined;

  function fellowship(){    return "friends";  }

  sword = "sting";
  dwarf = function(){     return "axe";  };
  fall = "Fly you fools!";
  ring();
  return sword;
}


////////////////////////////////////////////////////////////////////////
function theBridgeOfHoistingDoom( ){
  var sword = undefined;
  var dwarf = undefined;
  var fall = undefined;
  var ring = undefined;
  
  function fellowship(){    return "friends";  }

  sword = "sting";
  dwarf = function (){     return "axe";  }
  fall = "Fly you fools!";
  fellowship = function (){    return "broken";  }
  ring(); 
  return sword;
}

console.log("ERROR"); /// because ring() produces an error before getting to return sword