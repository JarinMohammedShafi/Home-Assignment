function reverseString(str) {
    let chars = str.split("");
    let reversed = "";

    for (let i = chars.length - 1; i >= 0; i--) {
        reversed += chars[i];
    }

    return reversed;
}

function isPalindrome(str) {
    let reversedStr = reverseString(str);

    if (str === reversedStr) {
        return true;
    } else {
        return false;
    }
}

let word = "madam";

console.log("Original String:", word);
console.log("Reversed String:", reverseString(word));
console.log("Palindrome:", isPalindrome(word));