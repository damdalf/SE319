// @author Devin Amdahl
// 03/01/2022

var rs = require('readline-sync');

var numOne = parseInt(rs.question("Please enter your first interger: "));
var numTwo = parseInt(rs.question("Please enter your second integer: "));
var numThree = parseInt(rs.question("Please enter your third integer: "));
var numFour = parseInt(rs.question("Please enter your fourth integer: "));

console.log("");

console.log("The factorial of the first integer is: ", findFactorial(numOne));

console.log("The sum of the second integer's digits is: ", sumOfDigits(numTwo));

console.log("The reversed number of the third integer is: ", reverseInt(numThree));

console.log("Is the fourth integer a palindrome? The answer is: ", isPalindrome(numFour));

// Finds the factorial of the passed integer.
function findFactorial(n)
{
    if (n === 0) return 1;
    else
    {
        return n * findFactorial(n - 1);
    }
}

// Finds the sum of the passed integer's digits.
function sumOfDigits(n)
{
    let intStr = n.toString();
    let sum = 0;

    for (let i = 0; i < intStr.length; i++)
    {
        sum += parseInt(intStr[i]);
    }

    return sum;
}

// Finds the reversed integer of the passed integer.
function reverseInt(n)
{
    let intStr = n.toString();
    let revStr = "";

    for (let i = intStr.length - 1; i > -1; i--)
    {
        revStr += intStr.charAt(i);
    }

    return parseInt(revStr);
}

// Checks if the passed integer is a palindrome.
function isPalindrome(n)
{
    if (n === reverseInt(n)) return true;
    else return false;
}