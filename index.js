function distanceFromHqInBlocks (block){
    const squberHq = 42
    const distance = Math.abs(squberHq-block)
    return distance;
}

function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks (block) * 264;
}

function distanceTravelledInFeet(scuberHq, block){
    return Math.abs(block - scuberHq) * 264;
}

function calculatesFarePrice(scuberHq, block){
  let distance = distanceTravelledInFeet(scuberHq, block);
  if (distance <= 400){
    return 0;
  }
  else if (distance > 400 && distance <= 2000){
    return (distance-400) * 0.02;
  }
  else if (distance > 2000 && distance < 2500){
    return 25;
  }
  else if (distance > 2500){
    return "cannot travel that far";
  }
  
  }
    // if (Math.abs((block - scuberHq) * 264) <= 400) {
    //     return 0;
    //   } 
    //   else if (
    //     Math.abs((block - scuberHq) * 264) > 400 &&
    //     Math.abs((block - scuberHq) * 264) <= 2000
    //   ) {
    //     return ((Math.abs((block - scuberHq) * 264) - 400) * 2);
    //   } 
    //   else if (Math.abs((block - scuberHq) * 264) > 2000 && Math.abs((block - scuberHq) * 264) <= 2500) {
    //     return ((Math.abs((block - scuberHq) * 264) - 400) * 25);
    //   } 
    //   else if (Math.abs((block - scuberHq) * 264) >= 2500) {
    //     return "cannot travel that far";
    //   }
    // }
   