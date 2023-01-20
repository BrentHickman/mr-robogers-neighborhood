//Business Logic

function beepBoop(number) {
  let beepBoopArray = [];
  for (let i = 0; i <= number; i++) {
      beepBoopArray.push(i);
    }

  return boopBeep(beepBoopArray);

  }

function boopBeep(array) {
  outputArray = [];
  array.forEach(element => {
    if(element.toString().includes("1")) {
      outputArray.push("Beep!");
    } else {
      outputArray.push(element);
    }
    
  });
console.log(outputArray);
}

//User Interface Logic

