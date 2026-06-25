/* Classroom Assignment : Conditional Statements */


/* Function 1 : launchBrowser
   Input  : browserName (string)
   Output : Print browser launch message
*/

function launchBrowser(browserName) {

    if (browserName === "chrome") {

        console.log("Launching Chrome Browser");

    } else {

        console.log("Launching Other Browser");
    }
}


/* Function 2 : runTests
   Input  : testType (string)
   Output : Print test execution message
*/

function runTests(testType) {

    switch (testType) {

        case "smoke":
            console.log("Executing Smoke Tests");
            break;

        case "sanity":
            console.log("Executing Sanity Tests");
            break;

        case "regression":
            console.log("Executing Regression Tests");
            break;

        default:
            console.log("Executing Smoke Tests");
            break;
    }
}


// Function Calls

launchBrowser("chrome");
runTests("smoke");