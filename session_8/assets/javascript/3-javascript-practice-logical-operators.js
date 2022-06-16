// ===================
//  Logical Operators
// ===================

/**
 * There are many different operators you can utilize in JavaScript.
 * All of these operators will return a boolean true or false value.
 *
 * Here's a list of some common operators:
 *    ==    checks equality of values
 *    ===   checks equality of values and data type
 *    !=    checks inequality of values
 *    !==   checks inequality of values and data type
 *    >     greater than
 *    >=    greater than or equal to
 *    <     less than
 *    <=    less than or equal to
 */

// =============
//  Exercise 1
// =============

/**
 * 1. Determine the result of each of the following:
 *    a. 10 == "10"
 *    b. 10 === "10"
 *    c. 99 !== 100
 *    d. "bob" !== "sally"
 *    e.  7 > 9
 *    f. "7" >= 3
 */

// ===========================
//  Logical AND/OR Operators
// ===========================

/**
 * As you get into more complex decision making, you will need
 * to test for more than one thing at a time.
 *
 * The logical AND (&&) operator return true if operands on
 * both sides are true.
 *
 * The logical OR (||) operator return true if one of the operands
 * are true.
 *
 * Example 1:
 *
 *      if (age >= 13 && age < 18) {
 *         return "Teenager";
 *      }
 *
 * Example 2:
 *
 *      if (role === "mom" || role === "dad") {
 *         return "Parent";
 *      }
 *
 *
 * Truth Tables:
 *
 *     | A     | B     | A && B |
 *     |-------|-------|--------|
 *     |  true |  true |  true  |
 *     |  true | false |  false |
 *     | false |  true |  false |
 *     | false | false |  false |
 *
 *
 *     | A     | B     | A || B |
 *     |-------|-------|--------|
 *     |  true |  true |  true  |
 *     |  true | false |  true  |
 *     | false |  true |  true  |
 *     | false | false |  false |
 */

// =============
//  Exercises
// =============

/**
 * 2. Determine the result of each of the following:
 *    a. false || (true && false);
 *    b. (32 * 4) <= 129;
 *    c. true && (1 + 2);
 *    d. false !== !true;
 */

/**
 * 3. Write an if...else statement that determines if num is an even
 *    number. If it is, log "even" to the console. Otherwise, it
 *    should log "odd". For now, assume that num is always an integer.
 *
 * Hint: Try the modulo (%) operator.
 */

/**
 * 4. Let's improve the previous implementation. Add a validation check
 *    to ensure that num is an integer. If it isn't, log "not a number"
 *    to the console.
 *
 * Hint: You can use Number.isInteger(value) to determine whether
 * a numeric value is an integer. It returns true if the value is an
 * integer, false otherwise.
 */
