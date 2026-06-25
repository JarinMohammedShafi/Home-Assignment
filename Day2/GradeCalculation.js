/* Classroom Assignment : Grade Calculation */

// Function to calculate grade
function calculateGrade(score) {

    switch (true) {

        case (score >= 90 && score <= 100):
            return "Grade A";

        case (score >= 80 && score < 90):
            return "Grade B";

        case (score >= 70 && score < 80):
            return "Grade C";

        case (score >= 60 && score < 70):
            return "Grade D";

        case (score >= 0 && score < 60):
            return "Grade F";

        default:
            return "Invalid Score";
    }
}


// Declare and initialize the variable
let studentScore = 85;

// Function call
let result = calculateGrade(studentScore);

// Print the result
console.log(`Student Score: ${studentScore}`);
console.log(`Grade: ${result}`);