// These are helper functions, you do not need to change these
function determineColor(type) {
  // Verify the data is correctly handled
  if (type == "spades" || type == "clubs") {
    // Something in this conditional is causing the wrong data to be returned
    // alert(type + " card should be black");
    return "black";
  } else {
    // alert(type + " card should be red");
    return "red";
  }
}

// In this example You must set up an array of arrays, which represent cards
// Then finish setting up the conditional for the "for" loop so it runs and deals you the cards you want.
var button = document.getElementById('deal-button');

button.addEventListener("click", function() {
  dealTheHand();
});

function dealTheHand() {
  // 1) TO-DO
  // Build out the array to include the cards you want to deal to yourself
  // You must include 2 values in each array element.  The card number and the card type
  //
  // Card types are: "diams", "clubs", "spades" and "hearts" and must be included as a string
  // Card numbers are: "2","3","4","5","6","7","8","9","10","J","Q","K" and "A" and will also be added as a string, not a number!
  //
  // Example card:  ['2','diams']
  // Example hand: [ ['2','diams'], ['3','clubs'], ['A','hearts'], ['K','diams'] , ['J','spades'] ] <- notice the card elements are arrays, included inside another array, seperated by a comma
  // Place 5 cards into the empty array below
  // Ex. This example has one card added to it (the dots after just imply there are more cards, that is not code you would use): [['2','hearts'], ...]
  var cards_array = [
    //add your cards in here, 5 of them in total
  ];
  
  
  // 2) TO-DO
  // Now set  the for loop so that it loops through the number of cards.  You only need to add code between the parentheses () .  You do not need to write any code inside the for loop.
  // Remember there are three parts: set the variable to it's first value, create the conditional for how many times this should run, increment up the variable
  // Ex. https://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for
  // Once your for loop is correct it will run and print your card values to the cards when you hit the "Deal me a Hand" button
  for () {
    var card       = cards_array[i];
    var card_num   = card[0];
    var card_type  = card[1];
    var card_color = determineColor(card[1]);
    var empty_card = document.getElementById('card-' + i);

    // Build the card
    // Card number
    empty_card.classList.add(card_color);
    empty_card.querySelector(".top-left .number").innerHTML = card_num;
    empty_card.querySelector(".bottom-right .number").innerHTML = card_num;
    // Card symbol
    empty_card.querySelector(".top-left .symbol").innerHTML = "&" + card_type + ";";
    empty_card.querySelector(".center .center-symbol").innerHTML = "&" + card_type + ";";
    empty_card.querySelector(".bottom-right .symbol").innerHTML =  "&" + card_type + ";";
  }
}