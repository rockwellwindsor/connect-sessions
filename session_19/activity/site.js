// An array of arrays to represent each card in a deck
const cards = [
  ['2','hearts'],['3','hearts'],['4','hearts'],['5','hearts'],['6','hearts'],['7','hearts'],
  ['8','hearts'],['9','hearts'],['10','hearts'],['J','hearts'],['Q','hearts'],['K','hearts'],
  ['A','hearts'],['2','clubs'],['3','clubs'],['4','clubs'],['5','clubs'],['6','clubs'],['7','clubs'], 
  ['8','clubs'],['9','clubs'],['10','clubs'],['J','clubs'],['Q','clubs'],['K','clubs'],['A','clubs'],
  ['2','spades'],['3','spades'],['4','spades'],['5','spades'],['6','spades'],['7','spades'], 
  ['8','spades'],['9','spades'],['10','spades'],['J','spades'],['Q','spades'],['K','spades'],
  ['A','spades'],['2','diamonds'],['3','diamonds'],['4','diamonds'],['5','diamonds'],['6','diamonds'],
  ['7','diamonds'],['8','diamonds'],['9','diamonds'],['10','diamonds'],['J','diamonds'],
  ['Q','diamonds'],['K','diamonds'],['A','diamonds']
];
// Return the HTML code for the card, default is a joker card
function returnHTMLCodeforCardType(type) {
  switch(type) {
    case 'spades':
      return '&spades;';
    case 'hearts':
      return '&hearts;';
    case 'clubs':
      return '&clubs;';
    case 'diamonds':
      return '&diams;';
    default:
      return '&#127183;';
  }
};

// Return the code for the card, either red or black
function returnCardColor(type) {
  if(type == 'spades' || type == 'clubs') {
    return 'black';
  } else {
     return 'red';
   }
}

// Loop through the whole deck of cards
// Set up a for of loop where the variable name is card and you iterate through the array of cards
function buildTheCard(id) {
  let randomNum            = Math.floor(Math.random() * (51 - 0 + 1) + 0);
  let randomlySelectedCard = cards[randomNum];
  console.log(randomNum);

  let cardHTMLCode = returnHTMLCodeforCardType(randomlySelectedCard[1]);
  let cardColor    = returnCardColor(randomlySelectedCard[1]);

  let element = document.getElementById('card' + id);

  element.classList.add(cardColor);
  // Number
  element.querySelector(".top-left .number").innerHTML = randomlySelectedCard[0];
  element.querySelector(".bottom-right .number").innerHTML = randomlySelectedCard[0];
  // Symbol
  element.querySelector(".top-left .symbol").innerHTML =
    `${cardHTMLCode}`;
  element.querySelector(".center .center-symbol").innerHTML =
    `${cardHTMLCode}`;
  element.querySelector(".bottom-right .symbol").innerHTML =
    `${cardHTMLCode}`;
}


let faceDownCards = document.getElementsByClassName('card_unturned');
// the variable here with .forEach being called on it is what needs to be defined above
for(let i = 0;i < faceDownCards.length; i++) {
  faceDownCards[i].addEventListener('click', function (event) {
    this.classList.add('hidden');
    let id = this.getAttribute('data-id'); // 1,2,3,4,5
    let el = document.getElementById('card' + id);
    buildTheCard(id);
    el.classList.add('showing');
    el.classList.remove('hidden');
  });
};

// TO-DO: define a variable called faceUpCards and assign it to all elements with a class of 'card'
let faceUpCards = document.getElementsByClassName('card');
// the variable here with .forEach being called on it is what needs to be defined
for(let i = 0;i < faceUpCards.length; i++) {
  faceUpCards[i].addEventListener('click', function (event) {
    let id      = this.getAttribute('data-id');
    let card_el = document.getElementById('card' + id);
    card_el.classList.add('hidden');
    let el      = document.getElementById('card_unturned' + id);
    el.classList.remove('hidden');
  });
};

// QUESTION #1 : How do I get the color for the card?
// QUESTION #2 : When getting the color for the card, how many arguements does the function expect?
// QUESTION #3 : How do I select the card to show?
// QUESTOIN #4 : What data type is the "cards" variable?
// QUESTION #5 : Can you tell me what purpose the "data-id" on the HTML elements serves in the Javascript?
// QUESTION #6 : Can you explain how I get the HTML code to show the card suit?
// QUESTION #7 : How many variables are created when the page first loads? What are thier names?
// QUESTION #8 : What purpose does the 'id' variable sent as an argument to the buildTheCard() method serve?
