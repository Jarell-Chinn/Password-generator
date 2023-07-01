// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbersOptions = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
// Write password to the #password input
function writePassword() {
  // Creating a variable and assigning a function return
  var password = generatePassword();
  // creates a variable that points to the password id is the textarea
  var passwordText = document.querySelector("#password");
  // taking  the value of password and assigning it to the value of textarea
  passwordText.value = password;
}

function generatePassword() {
  // phase 1 gathering info
  // create an empty array called available char
  var availableChar = [];
  // ask the length of password
  var lengthofP = window.prompt(
    "How many characters would you like your password (Must be larger than 8)"
  );
  if (lengthofP < 8 || lengthofP > 128) {
    alert("Must be between 8 and 128");
    return "";
  }
  // ask if they what upper case
  // confirm
  // if user confirmed add upper case letters to available char
  // ask if they what lowercase
  // confirm
  // if user confirmed add lowercase letters to available char
  // ask if they what special characters
  // confirm
  // if user confirmed add special char to available char
  // ask if they what numbers
  // confirm
  // if user confirmed add numbers to available char

  // phase 2 building the password
  // create password variable and initialize as empty string
  // for loop that runs length times
  // create a random number between 0-length of available char array
  // select and element from the array at the index of the random number
  // add that char to end of password

  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
