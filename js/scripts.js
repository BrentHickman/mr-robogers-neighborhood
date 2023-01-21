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
    if (element.toString().includes("3")) {
      outputArray.push(" Won't you be my neighbor? ");
    } else if (element.toString().includes("2")) {
      outputArray.push(" Boop! ");
    } else if(element.toString().includes("1")) {
      outputArray.push(" Beep! ");
    } else {
      outputArray.push(element);
    }
    
  });
}

//User Interface Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const beepBoopInput = document.getElementById("numberInput");
  const output = document.querySelector("#output");
  beepBoop(beepBoopInput.value);
  output.innerText = outputArray.toString();
}

window.addEventListener("load", function() {
  document.querySelector("form#numberForm").addEventListener("submit", handleFormSubmission);
});
