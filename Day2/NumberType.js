/* Classroom Assignment : Number Type */

// Function declaration
function findNumberType(number) {

    // Check whether the number is positive
    if (number > 0) {

        return "Positive Number";

    }

    // Check whether the number is negative
    else if (number < 0) {

        return "Negative Number";

    }

    // If the number is zero
    else {

        return "Neutral Number";
    }
}


// Declare and initialize the variable
let inputNumber = -10;

// Function call
let result = findNumberType(inputNumber);

// Print the result
console.log(`The given number ${inputNumber} is a ${result}`);