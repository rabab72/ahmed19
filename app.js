// 1. Correcting statement
var allLower = userInput.toLowerCase();

// 2. Convert x to lower-case
var x = "Hello World";
x = x.toLowerCase();

// 3. Convert y to upper-case
var y = "hello world";
y = y.toUpperCase();

// 4. Convert a variable to lower-case and assign to a new variable
var originalString = "Hello World";
var lowerCaseString = originalString.toLowerCase();

// 5. Convert array element to lower-case and assign it to a variable
var sameWords = "captain";
var slicedWord = sameWords.slice(1, 3);

// 6. Slice "ap" from "captain"
var slicedWord = sameWords.slice(1, 3);

// 7. Number of characters in a string
var strLength = sameWords.length;

// 8. Slice middle characters from "elephant"
var animal = "elephant";
var seg = animal.slice(2, -2);

// 9. Find number of characters in a variable's string
var variableString = "example";
var numOfChars = variableString.length;

// 10. Slice a string and assign to a new variable
var slicedVariable = variableString.slice(1, -3);

// 11. Index of "be" in a string
var text = "To be or not to be.";
var indx = text.indexOf("be");

// 12. Last index of "be" in a string
var indx = text.lastIndexOf("be");

// 13. Index of the first character of the last instance of "go"
var indx = text.lastIndexOf("go");

// 14. First line of an if statement to test if a segment exists in a string
if (text.indexOf(segment) !== -1) {
    // segment exists
}

// 15. Character at index 2 in "abcde"
var charAtIndex2 = "abcde".charAt(2);

// 16. 10th character in the string represented by text
var cha = text.charAt(9);

// 17. Last character in a string
var str = "example";
var x = str.charAt(str.length - 1);

// 18. 5th character in a string represented by input
var input = "example";
var cha = input.charAt(4);

// 19. Display upper-case version of a variable
var upperCaseVariable = variable.toUpperCase();
alert(upperCaseVariable);

// 20. Convert cityName to Capitalisation
var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// Taking input from the user
var number = parseFloat(prompt("Enter a positive number:"));

// Displaying the number
document.write("Number Value: " + number + "<br>");

// Round off value
var roundValue = Math.round(number);
document.write("Round off value: " + roundValue + "<br>");

// Floor value
var floorValue = Math.floor(number);
document.write("Floor value: " + floorValue + "<br>");

// Ceil value
var ceilValue = Math.ceil(number);
document.write("Ceil value: " + ceilValue + "<br>");
// Taking input from the user
var number = parseFloat(prompt("Enter a negative floating point number:"));

// Displaying the number
document.write("Number: " + number + "<br>");

// Round off value
var roundValue = Math.round(number);
document.write("Round off value: " + roundValue + "<br>");

// Floor value
var floorValue = Math.floor(number);
document.write("Floor value: " + floorValue + "<br>");

// Ceil value
var ceilValue = Math.ceil(number);
document.write("Ceil value: " + ceilValue + "<br>");
// Taking input from the user
var number = parseFloat(prompt("Enter a number:"));

// Calculating absolute value
var absoluteValue = Math.abs(number);

// Displaying the absolute value
document.write("The absolute value of " + number + " is " + absoluteValue);
// Generating a random number between 1 and 6 to simulate a dice
var diceValue = Math.floor(Math.random() * 6) + 1;

// Displaying the value of the dice
document.write("Random dice value: " + diceValue);
// Generating a random number between 1 and 2 to simulate a coin toss
var coinValue = Math.floor(Math.random() * 2) + 1;

// Displaying the value of the coin
if (coinValue === 1) {
    document.write("Random coin value: Heads");
} else {
    document.write("Random coin value: Tails");
}
// Generating a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Displaying the random number
document.write("Random number between 1 and 100: " + randomNumber);
// Generating a random number between 1 and 2 to simulate a coin toss
var coinValue = Math.floor(Math.random() * 2) + 1;

// Displaying the value of the coin
if (coinValue === 1) {
    document.write("Random coin value: Heads");
} else {
    document.write("Random coin value: Tails");
}
// Generating a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Displaying the random number
document.write("Random number between 1 and 100: " + randomNumber);
// Generating a random weight between 50 and 100 kg
var weight = Math.floor(Math.random() * 51) + 50;

// Displaying the weight of the user
document.write("The weight of the user is: " + weight + " kg");
// Storing a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Asking the user to input a number between 1 and 10
var userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// Checking if the user's input equals the secret number
if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the secret number.");
} else {
    document.write("Sorry, the secret number was " + secretNumber + ". Try again!");
}// 1. Correcting statement
var allLower = userInput.toLowerCase();

// 2. Convert x to lower-case
var x = "Hello World";
x = x.toLowerCase();

// 3. Convert y to upper-case
var y = "hello world";
y = y.toUpperCase();

// 4. Convert a variable to lower-case and assign to a new variable
var originalString = "Hello World";
var lowerCaseString = originalString.toLowerCase();

// 5. Convert array element to lower-case and assign it to a variable
var sameWords = "captain";
var slicedWord = sameWords.slice(1, 3);

// 6. Slice "ap" from "captain"
var slicedWord = sameWords.slice(1, 3);

// 7. Number of characters in a string
var strLength = sameWords.length;

// 8. Slice middle characters from "elephant"
var animal = "elephant";
var seg = animal.slice(2, -2);

// 9. Find number of characters in a variable's string
var variableString = "example";
var numOfChars = variableString.length;

// 10. Slice a string and assign to a new variable
var slicedVariable = variableString.slice(1, -3);

// 11. Index of "be" in a string
var text = "To be or not to be.";
var indx = text.indexOf("be");

// 12. Last index of "be" in a string
var indx = text.lastIndexOf("be");

// 13. Index of the first character of the last instance of "go"
var indx = text.lastIndexOf("go");

// 14. First line of an if statement to test if a segment exists in a string
if (text.indexOf(segment) !== -1) {
    // segment exists
}

// 15. Character at index 2 in "abcde"
var charAtIndex2 = "abcde".charAt(2);

// 16. 10th character in the string represented by text
var cha = text.charAt(9);

// 17. Last character in a string
var str = "example";
var x = str.charAt(str.length - 1);

// 18. 5th character in a string represented by input
var input = "example";
var cha = input.charAt(4);

// 19. Display upper-case version of a variable
var upperCaseVariable = variable.toUpperCase();
alert(upperCaseVariable);

// 20. Convert cityName to Capitalisation
var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// Taking input from the user
var number = parseFloat(prompt("Enter a positive number:"));

// Displaying the number
document.write("Number Value: " + number + "<br>");

// Round off value
var roundValue = Math.round(number);
document.write("Round off value: " + roundValue + "<br>");

// Floor value
var floorValue = Math.floor(number);
document.write("Floor value: " + floorValue + "<br>");

// Ceil value
var ceilValue = Math.ceil(number);
document.write("Ceil value: " + ceilValue + "<br>");
// Taking input from the user
var number = parseFloat(prompt("Enter a negative floating point number:"));

// Displaying the number
document.write("Number: " + number + "<br>");

// Round off value
var roundValue = Math.round(number);
document.write("Round off value: " + roundValue + "<br>");

// Floor value
var floorValue = Math.floor(number);
document.write("Floor value: " + floorValue + "<br>");

// Ceil value
var ceilValue = Math.ceil(number);
document.write("Ceil value: " + ceilValue + "<br>");
// Taking input from the user
var number = parseFloat(prompt("Enter a number:"));

// Calculating absolute value
var absoluteValue = Math.abs(number);

// Displaying the absolute value
document.write("The absolute value of " + number + " is " + absoluteValue);
// Generating a random number between 1 and 6 to simulate a dice
var diceValue = Math.floor(Math.random() * 6) + 1;

// Displaying the value of the dice
document.write("Random dice value: " + diceValue);
// Generating a random number between 1 and 2 to simulate a coin toss
var coinValue = Math.floor(Math.random() * 2) + 1;

// Displaying the value of the coin
if (coinValue === 1) {
    document.write("Random coin value: Heads");
} else {
    document.write("Random coin value: Tails");
}
// Generating a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Displaying the random number
document.write("Random number between 1 and 100: " + randomNumber);
// Generating a random number between 1 and 2 to simulate a coin toss
var coinValue = Math.floor(Math.random() * 2) + 1;

// Displaying the value of the coin
if (coinValue === 1) {
    document.write("Random coin value: Heads");
} else {
    document.write("Random coin value: Tails");
}
// Generating a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Displaying the random number
document.write("Random number between 1 and 100: " + randomNumber);
// Generating a random weight between 50 and 100 kg
var weight = Math.floor(Math.random() * 51) + 50;

// Displaying the weight of the user
document.write("The weight of the user is: " + weight + " kg");
// Storing a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Asking the user to input a number between 1 and 10
var userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// Checking if the user's input equals the secret number
if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the secret number.");
} else {
    document.write("Sorry, the secret number was " + secretNumber + ". Try again!");
}