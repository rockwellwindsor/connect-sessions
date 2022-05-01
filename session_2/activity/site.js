// DO NOT CHANGE ANYTHING IN THIS FILE
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

function getRandomCard() {
  let randomNum            = Math.floor(Math.random() * (51 - 0 + 1) + 0);
  let randomlySelectedCard = cards[randomNum];
  return randomlySelectedCard;
}

function buildCardElement(cardData, els) {
  let cardHTMLCode = returnHTMLCodeforCardType(cardData[1]);
  let cardColor    = returnCardColor(cardData[1]);
  let cardNum      = cardData[0];
  if (els.length == 2) { // center
    els[0].classList.add(cardColor);
    els[1].innerHTML = cardHTMLCode;
  } else if (els.length == 4) { // bottom right
    els[0].classList.add(cardColor);
    els[1].classList.add('bottom-right-container');
    els[2].innerHTML = cardNum;
    els[3].innerHTML = cardHTMLCode;
  } else { // top left
    els[0].classList.add(cardColor);
    els[1].innerHTML = cardNum;
    els[2].innerHTML = cardHTMLCode;
  }
  console.log("COLOR : " +  cardColor + " SUITE : " + cardHTMLCode);
}

function setUpOuterCard() {
  //
}

function setUpTopLeft() {
  let card       = getRandomCard();
  let topLeftDiv = allDivElements[1];
  topLeftDiv.classList.add("top-left");
  let p1 = topLeftDiv.children[0];
  p1.classList.add("number");
  let p2 = topLeftDiv.children[1];
  p2.classList.add("symbol");
  buildCardElement(card, [topLeftDiv, p1, p2]);
}
function setUpCenter() {
  let card = getRandomCard();
  let centerDiv = allDivElements[2];
  centerDiv.classList.add("center");
  let p1 = centerDiv.children[0];
  p1.classList.add("center-symbol");
  buildCardElement(card, [centerDiv, p1]);
}
function setUpBottomRight() {
  let card = getRandomCard();
  let bottomRightDiv = allDivElements[3];
  bottomRightDiv.classList.add("bottom-right");
  let spanEl = bottomRightDiv.children[0];
  let p1 = spanEl.children[0];
  p1.classList.add("number");
  let p2 = spanEl.children[1];
  p2.classList.add("symbol");
  buildCardElement(card, [bottomRightDiv, spanEl, p1, p2]);
}
// get each div on the screen
let allDivElements = document.getElementsByTagName('div');
for (let i = 0; i < allDivElements.length; i++) {
  switch (i) {
    case 0:
      setUpOuterCard();
      break;
    case 1:
      setUpTopLeft();
      break;
    case 2:
      setUpCenter();
      break;
    case 3:
      setUpBottomRight();
      break;
    default:
      console.log("not sure how we got here");
  }
}