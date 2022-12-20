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

// TO-DO: Create a variable named "button".  Assign its to the element in the HTML with the ID value of "deal-button"

// TO-DO: On line 17 add an event listener to the variable you created on line 15, it is listening for "click".  Use an anonymous function to call the dealTheHand method inside the event listener

  // TO-DO :  On the line below, line 20,  call the dealTheHand function to kick off the process when the button is clicked.  Once the call to the function is placed, you should be able to hit the "Deal me a Hand!" button and deal your cards

function dealTheHand() {
  // TO-DO: Build out the array to include the cards you want to deal to yourself
  // You must include 2 values in each array element.  The card number and the card type
  //
  // Card types are: "diams", "clubs", "spades" and "hearts" and must be included as a string
  // Card numbers are: "2","3","4","5","6","7","8","9","10","J","Q","K" and "A" and will also be added as a string, not a number!
  //
  // Example card:  ['2','diams']
  // Example hand: [['2','diams'], ['3','clubs'], ['A','hearts'], ['K','diams'] , ['J','spades']] <- notice the card elements are arrays, seperated by a commas, included inside another, outer, array
  // Ex. This example has one card added to it (the dots after just imply there are more cards, that is not code you would use): [['2','hearts'], ...]
  // Place 5 cards into the empty array below
  let cards_array = [];
  
  
  // TO-DO: Now set  the for loop so that it loops through the number of cards.  You only need to add code between the parentheses () .  You do not need to write any code inside the for loop.  The variable for the loop that you set in statment 1 has to be "i".
  // Remember there are three parts: set the variable to it's first value, create the conditional for how many times this should run, increment up the variable
  // Ex. https://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for
  for () {
    var card       = cards_array[]; // TO-DO: Fill in the [] with what you need to access the correct element in each loop
    var card_num   = card[]; // TO-DO: Grab the first item in the card array
    var card_type  = card[]; // TO-DO: Grab the second item in the card array
    var card_color = determineColor(card[]); // TO-DO: Grab the second item in the card array
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
