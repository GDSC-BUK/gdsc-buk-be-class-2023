// Functions

/**
 * A function is a reusable piece of code, often built to be portable, in small blocks of code
 * 
 * Syntax
 * 
 * function functionName (parameter1, parameter2, ..., parameterX) {
 *  code block / expression / anything goes
 * }
 */

// Write a function to print "hello world"

function displayText() {
    console.log("Hello World")
}

displayText()
displayText()

// Write a function to add 2 numbers

function addNumbers(n1, n2) {
    console.log(n1 + n2)
}

addNumbers(1, 2)
addNumbers(4, 6)

// Write a function return the multiplication of 2 numbers

function multiplyNumbers(n1, n2) {
    return n1 * n2
}

console.log(multiplyNumbers(2, 3))
console.log(multiplyNumbers(4, 20))

/**
 * Write a function to tell if it is,
 * morning, afternoon, evening and night (using 24 hours)
 * 
 * given;
 * morning -> 00 - 11
 * afternoon -> 12 - 17
 * evening -> 18 - 19
 * night -> 20 - 23
 */

function tellTimeOfDay(hours) {
    // check if hours is between the 24 hours clock range
    // 00 - 23
    if (hours >= 0 && hours <= 23) {
        if (hours >= 0 && hours <= 11 ) {
            return "morning"
        } else if (hours >= 12 && hours <= 17) {
            return "afternoon"
        } else if (hours >= 18 && hours <= 19) {
            return "evening"
        } else if (hours >= 20 && hours <= 23) {
            return "night"
        }
    }

    // default value of `null` if above conditions are not met
    return null
}

const testForMorning = tellTimeOfDay(10)
console.log(testForMorning)

const testForAfternoon = tellTimeOfDay(14)
console.log(testForAfternoon)

const testForEvening = tellTimeOfDay(18)
console.log(testForEvening)

const testForNight = tellTimeOfDay(23)
console.log(testForNight)

// test for hours below zero
const testForNull1 = tellTimeOfDay(-10)
console.log(testForNull1)

// test for hours greater than 23
const testForNull2 = tellTimeOfDay(24)
console.log(testForNull2)

/**
 * Assignment
 * 
 * Write a function to solve;
 * - Area of circle
 * - Area of rectangle
 * - Volume of a cylinder
 */
