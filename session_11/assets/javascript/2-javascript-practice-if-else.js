// ======================
//  If...Else Statements
// ======================

/**
 * An algorithm is a set of instructions that we or a computer can
 * use to solve a problem or complete a task.
 *
 * We actually use algorithms in our day-to-day lives to make different
 * decisions. For example, should I wear a light or heavy jacket if
 * the temperature is 50 degrees outside?
 *
 * We can use if...else statements in code to make decisions like this.
 * Depending on whether a condition is true or false, the program
 * will execute some logic accordingly.
 *
 *      if (this expression is true) {
 *          // run this code
 *      } else {
 *          // run this code
 *      }
 *
 * For example,
 *
 *      if (temp < 50) {
 *          console.log("heavy jacket");
 *      } else
 *          console.log("light jacket");
 *      }
 */

// =============
//  Exercise 1
// =============

/**
 * 1. Create an if...else statement that returns the following:
 *     a. Log "adult" if the age is 18 and over
 *     b. Log "minor" if otherwise
 */

// ======================
//  Else If Statements
// ======================

/**
 * If you have multiple conditions, you can chain the if statement
 * with multiple else if statements.
 *
 *      if (this expression is true) {
 *          // run this code
 *      } else if (this expression is true) {
 *          // run this code
 *      } else {
 *          // run this code
 *      }
 *
 * For example,
 *
 *      if (temp < 0) {
 *          console.log("no need a jacket, just stay home");
 *      } else if (temp < 30) {
 *          console.log("heavier jacket");
 *      } else if (temp < 50) {
 *          console.log("heavy jacket");
 *      } else
 *          console.log("light jacket");
 *      }
 *
 * Note that code is executed from top to bottom so you will want to be
 * careful of which statement comes first! Try to compare the output
 * of these two examples if x = 0:
 *
 * Example 1:
 *
 *    if (x < 1) {
 *        console.log("Less than one");
 *    } else if (x < 2) {
 *        console.log("Less than two");
 *    } else {
 *       console.log("Greater than or equal to two");
 *    }
 *
 * Example 2:
 *
 *    if (x < 2) {
 *        console.log("Less than two");
 *    } else if (x < 1) {
 *        console.log("Less than one");
 *    } else {
 *       console.log("Greater than or equal to two");
 *    }
 */

// =============
//  Exercise 2
// =============

/**
 * 2. Create an else if statement that outputs the following:
 *     a. Log “Good morning” if the time is less than 11am
 *     b. Log “Good afternoon” if the time is less than 3pm
 *     c. Log “Good evening” if the time is less than 7pm
 *     d. Log “Good night” if otherwise
 *
 * (Hint: think about time in 24 hours, e.g. 1pm is equivalent to 1300)
 */
