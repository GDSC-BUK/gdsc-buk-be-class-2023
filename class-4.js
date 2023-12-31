// Control Flow (cont'd)

/**
 * Switch Statement
 * Is used when you need to check for multiple conditions
 * 
 * switch (target) {
 *  case target == expectation1:
 *      expression1
 *  case target == expectation2:
 *      expresion2
 *  ...
 *  default:
 *      default_expression
 * }
 */

// target
const today = "monday"

switch (today) {
    case "sunday":
        console.log("today is sunday")
        break
    case "monday":
        console.log("today is monday")
        break
    case "tuesday":
        console.log("today is tuesday")
        break
    default:
        console.log("today is not recognized")
}
