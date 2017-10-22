function myFx(){
  if(isAnimal()){
      if(has4Legs()){
        if(isFurry()){
          console.log("it's a furry 4 legged thing");
        } else {
          console.log("it's probably a lizard or something");
        }
      } else {
        console.log("it has more or less than 4 legs");
      }
  } else {
    if(isMineral()){
      console.log("it's a mineral!");
    }
  }
}

function isAnimal(){
  return true;
}

function has4Legs(){
  return false;
}

function isFurry(){
  return true;
}

function isMineral(){
  return false;
}

myFx();
