
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


// BONUS: Make a program that can subtract, multiply, and also divide!
var first = prompt("enter first number");
var second = prompt("enter second number");
var sum = Number(first) + Number(second);
var difference = Number(first) - Number(second);
var product = Number(first) * Number(second);
var quotient = Number(first) / Number(second);
var module = Number(first) % Number(second);
alert("the sum of the number is: " + sum);
alert("the difference of the number is: " + difference);
alert("the product of the number is: " + product);
alert("the quotient of the number is: " + quotient);
alert("the module of the number is: " + module);