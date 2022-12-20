let cards = Array.new;
// An array of arrays to represent each card in a deck
cards = [
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

// Helper methods
function setRandowmSuit() {
  let suits  = ['&diams;', '&spades;','&clubs;','&hearts;'];
  let colors = ['red','black'];
  let randomSuitSelector  = Math.floor(Math.random() * 4); // Number between 0 and 4
  let randomColorSelector = Math.round(Math.random()); // Either 0 or 1
  let suit  = suits[randomSuitSelector];
  let color = colors[randomColorSelector];
  // Add in the randomly selected symbol
  $('.symbol').each(function() {
    $(this).html(suit);
  });
  // Add in the randomly selected symbol
  $('.center-symbol').each(function() {
    $(this).html(suit);
  });
  // Add in the randomly selected color
  $('.card').each(function() {
    $(this).addClass(color);
  });
}
// Main Functions
$('#question-1-submit').on('click', function() {
  let answer = $('#question-1-input').val();
  if(answer == 'array' || answer == 'Array') {
    let text = "Correct!  It is an array, which contains it's elements inside square brackets [...]";
    $('#question-1-answer').text(text);
    $('#card1').removeClass('hidden');
  } else {
    let text = "Not quite, try again (feel free to send a message in chat and ask too)";
    $('#question-1-answer').text(text);
  }
}); 

$('#question-2-submit').on('click', function() {
  let answer = $('#question-2-input').val();
  if(answer == 'string' || answer == 'String') {
    let text = "Correct!";
    $('#question-2-answer').text(text);
    $('#card2').removeClass('hidden');
  } else if (answer == '') {
    // do nothing, nothing has been added yet
  } else {
    let text = "Not quite, try again (feel free to send a message in chat and ask too)";
    $('#question-2-answer').text(text);
  }
}); 

$('#question-0-submit').on('click', function() {
  let answer = $('#question-0-input').val();
  if(answer == 'cards') {
    let text = "Correct!  When creating a variable you assign it using 'let' or 'const' and then the name for the variable. You assign it a value by using the '=' sign and then the value for the variable.";
    $('#question-0-answer').text(text);
    $('#card0').removeClass('hidden');
  } else {
    let text = "Not quite, try again (feel free to send a message in chat and ask too)";
    
    $('#question-0-answer').text(text);
  }
}); 

$('#question-3-submit').on('click', function() {
  let answer = $('#question-3-input').val();
  if(answer == 'suit') {
    let text = "Correct!";
    $('#question-3-answer').text(text);
    $('#card3').removeClass('hidden');
  } else {
    let text = "Not quite, try again (feel free to send a message in chat and ask too)";
    $('#question-3-answer').text(text);
  }
}); 

$('#question-4-submit').on('click', function() {
  let answer = $('#question-4-input').val();
  if(answer == 'string' || answer == 'String') {
    let text = "Correct!";
    $('#question-4-answer').text(text);
    $('#card4').removeClass('hidden');
  } else {
    let text = "Not quite, try again (feel free to send a message in chat and ask too)";
    $('#question-4-answer').text(text);
  }
}); 

setRandowmSuit();
