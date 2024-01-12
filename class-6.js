/**
 * DEMO STARTS
 * OOP (Object Oriented Programming) vs FP (Functional Programming)
 * PS: DO NOT TRY TO UNDERSTAND THIS SECTION, IT'S FOR DEMO ONLY
 */

// OOP Approach

class Car {
  goForward() {}

  goBackward() {}
}

const car1 = new Car();
car1.goForward();
car1.goBackward();

// Functional Approach

function createCar() {}
function goForward(car) {}
function goBackward(car) {}

const car2 = createCar();
goForward(car2);
goBackward(car2);

/**
 * OOP (Object Oriented Programming) vs FP (Functional Programming)
 * DEMO ENDS
 */

/**
 * Introduction to Object Oriented Programming
 *
 * It is programming paradigm that helps with the respresentation of data/behaviors using objects
 */

// Syntax

/**
 * class NameOfObject {
 *  ... class definitions ...
 * }
 *
 * class definitions could contain methods or properties
 */

/**
 * Use Case 1: A school would like to keep records of their students in a very basic and structured database
 */

// Step 1: Represent each student with a class (object)
class Student {
  // static variable
  static records = [];

  // a constructor is built javascript method used to initilize the class, with or without parameters
  constructor(firstName, lastName, age) {
    const studentData = {
      firstName,
      lastName,
      age,
    };
    Student.records.push(studentData);
  }

  static list() {
    return Student.records;
  }
}

// Step 2: Create students using class constructor
new Student("John", "Doe", 15);
new Student("Sam", "Larry", 17);
new Student("Don", "Cleff", 16);

// Step 3: List students using static method
console.log(Student.list());

/**
 * Assignment
 *
 * A social media platform wants to store records of their users,
 * allowing them to login and register
 */
