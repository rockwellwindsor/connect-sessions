// =====================
//  Section 1 Solutions
// =====================

// 1.1
var shirtPrice = 49.99;

// 1.2
var discountedShirtPrice = 49.99 - 49.99 * 0.25;

// 1.3
var remainder = 11 % 3;
console.log(remainder);

// 1.4
var myName = 'Sharynne';
var greeting =
  'Hello, my name is ' + myName + ' and I am learning how to code!';

// =====================
//  Section 2 Solutions
// =====================

// 2.1
if (age >= 18) {
  console.log('adult');
} else {
  console.log('minor');
}

// 2.2
if (time < 11) {
  console.log('Good morning');
} else if (time < 15) {
  console.log('Good afternoon');
} else if (time < 19) {
  console.log('Good evening');
} else {
  console.log('Good night');
}

// =====================
//  Section 3 Solutions
// =====================

// 3.1
//  a. true
//  b. false
//  c. true
//  d. true
//  e. false
//  f. true

// 3.2
//  a. false
//  b. true
//  c. 3
//  d. false

// 3.3
var num = 10;
if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}

// 3.4
var num = 10;
if (!Number.isInteger(num)) {
  console.log('not a number');
} else if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}

// =====================
//  Section 4 Solutions
// =====================

// 4.1
var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 4.2
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// 4.3
for (var i = 0; i < 100; i = i + 5) {
  console.log('The current number is ' + i);
}

// 4.4
var sum = 0;
for (var i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// 4.5
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
