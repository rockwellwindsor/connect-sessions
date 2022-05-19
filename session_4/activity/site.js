// DO NOT CHANGE THIS FILE
let numbers = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
let suits   = ["&diams;","&hearts;","&spades;","&clubs;"];

let numberSections = document.getElementsByClassName('number');
let suitSections    = document.getElementsByClassName('suit');
//
if (numberSections.length > 0) {
  let rand = Math.floor(Math.random() * (12 - 0 + 1) + 0);
  for(let n = 0; n < numberSections.length; n++) {
    numberSections[n].innerHTML = numbers[rand];
  }
}
//
if (suitSections.length > 0) {
  let rand = Math.floor(Math.random() * (3 - 0 + 1) + 0);
  for(let s = 0; s < suitSections.length; s++) {
    suitSections[s].innerHTML = suits[rand];
  }
}