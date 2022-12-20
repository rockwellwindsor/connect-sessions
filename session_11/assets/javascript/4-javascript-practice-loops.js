// =======
//  Loops
// =======

/**
 * Loops are used in JavaScript to execute the same piece of code
 * over and over again until a condition is met. The main pieces
 * of any loop are:
 *
 *    1. When to start
 *    2. When to stop
 *    3. How to get to the next item
 *
 * If your loop is missing any of these pieces, you may run into some trouble
 * and you'll find your program or browser has crashed or become frozen.
 *
 * The main idea is to automate repetitive task within a program
 * to save time an effort.
 *
 * Example:
 *
 *    If we want to display "I love to code" 5 times, we would write:
 *        console.log("I love to code");
 *        console.log("I love to code");
 *        console.log("I love to code");
 *        console.log("I love to code");
 *        console.log("I love to code");
 *
 *    With loops, we can think about it this way:
 *        start count at 0;
 *        while count does not equal 5;
 *          then print "I love to code";
 *        stop when count equals 5;
 *
 * There are different kinds of loops in JavaScript:
 *    1. for      - loops through a block of code a number of times
 *    2. for/in   - loops through the properties of an object
 *    3. for/of   - loops through the values of an iterable object
 *    4. while    - loops through a block of code while a specified condition is true
 *    5. do/while - Loops through a block of code while a specified condition is true
 *
 * For now, we'll focus only on the while loop and for loop.
 */

// =============
//  While Loops
// =============

/**
 * While loops are the simplest looping statement in JavaScript. It loops through a
 * block of code as long as some condition is true. If the condition fails, then the
 * loop is terminated.
 *
 * The syntax is:
 *
 *      while (condition) {
 *          // do something
 *      }
 *
 *
 * Example: Log out "I love to code" 5 times.
 *
 *      var count = 0; // when to start
 *      while (count <= 5) { // when to stop
 *          console.log("I love to code");
 *          count++; // how to get to the next item
 *      }
 */

// ===========
//  For Loops
// ===========

/**
 * Similar to while loops, the for loop repeats a block of code as long as a certain
 * condition is met.
 *
 * The syntax is:
 *
 *      for (initialization; condition; increment) {
 *          // do something
 *      }
 *
 *
 * Example: Log out "I love to code" 5 times.
 *
 *      for (var count = 0; count <= 5; count++) {
 *          console.log("I love to code");
 *      }
 */

// ===========================
//  For loops or while loops?
// ===========================

/**
 * Both loops can often be used interchangeably. Often, you'll find developers prefer to
 * use for loops, but there are some cases when you may want to use a while loop.
 *
 * Typically, for loops are used when you know the exact number of iterations you
 * want to loop over. For example, repeat 5 times or repeat for all available options.
 *
 * When it is unknown, a while loop may be preferred. Waiting for user input is a common
 * scenario. For example, you may implement a game that will continue to play until the
 * user types in "done".
 *
 * For the most part, it's ultimately up to your judgment and preference.
 *
 * A few examples:
 *    - Use a for loop to iterate over an array.
 *    - Use a for loop when you know the loop should execute n times.
 *    - Use a while loop for reading a file into a variable.
 *    - Use a while loop when asking for user input.
 *    - Use a while loop when the increment value is nonstandard.
 */

// ===========
//  Exercises
// ===========

/**
 * 1. Use a while loop to print out the numbers 1-10.
 */

/**
 * 2. Use a for loop to print out the numbers 1-10.
 */

/**
 * 3. Convert the while loop to a for loop.
 */
var i = 0;
while (i < 100) {
  console.log('The current number is ' + i);
  i = i + 5;
}

/**
 * 4. Use a loop of your choice to print out the total sum
 *    for numbers 1-100, i.e. 1 + 2 + 3 + ... + 98 + 99 + 100.
 */

/**
 * 5. Fizzbuzz (this should be familiar from the lessons)
 *    "Fizzbuzz" is a famous interview question used in programming interviews.
 *    It goes something like this:
 *      - Loop through the numbers 1 to 100
 *      - If the number is divisible by 3, print "Fizz"
 *      - If the number is divisible by 5, print "Buzz"
 *      - If the number is divisible by both 3 and 5, print "FizzBuzz"
 *      - If the number is not divisible by 3 or 5, print the number
 */
