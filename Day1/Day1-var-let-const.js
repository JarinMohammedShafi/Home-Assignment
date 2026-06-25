// Solution 1: Using var

// Global variable
const browserName = "Chrome";

// function getBrowserName() {

if (browserName === "Chrome") {
// Local variable using var
        var browserName = "edge";  //function scoped and hoisted
console.log("Browser Name inside function:", browserName);
}
getBrowserName();
console.log("Browser Name outside function:", browserName);

//Solution 2: Using let
function getBrowserName() {

if (browserName === "Chrome") {
// Local variable using let
        let browserName = "edge";  //let is block scoped and does not leak outside the block.
    }
console.log("Browser Name inside function:", browserName);
}
getBrowserName();
console.log("Browser Name outside function:", browserName);