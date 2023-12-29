// Control Flow

const isCokeAvailable = true

// using if ... else statement
/*
if (condition) {
    expression
}
*/

if (isCokeAvailable) {
    console.log("getting coke ...")
} else {
    console.log("getting pepsi ...")
}

const language = "golang"

if (language === "python") {
    console.log("you are working with python ...")
} else if (language === "c++") {
    console.log("you are working with c++ ...")
} else if (language === "golang") {
    console.log("you are working with golang ...")
} else if (language === "php") {
    console.log("you are working with php ...")
} else {
    console.log("language not supported ...")
}

// Loops (For, While)

// For Loop

let numberOfStudents = 40;

/**
 * for (start;end;increment) {
 *  expression
 * }
*/

for (i = 1; i <= numberOfStudents; i++) {
    console.log("giving gift to student number: " + i)
}

console.log("**********************")

// While Loop

/**
 * while (condition) {
 *  expression
 * }
 */

while (numberOfStudents >= 1) {
    console.log("giving gift to student number: " + numberOfStudents)

    numberOfStudents--
}
