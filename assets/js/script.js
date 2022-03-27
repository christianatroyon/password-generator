// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}


function generatePassword() {
  var symbolSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var passwordArray = [];

  var numChar = prompt("How many characters are required in your password?");
  if (numChar >= 8 && numChar < 129){
    passwordLength = parseInt(numChar);
  // takes user input to determine number of characters in the generated password
  } else {
      alert("Please select a value between 8 and 128");
      return ""; //re-prompts user to select a value between 8 and 128
    }
  var symbol = confirm("Press confirm if you would like special characters. 'OK' for yes, cancel for 'no'.");
  if (symbol === true) {
   // Adds random symbols to the empty password array
    passwordArray = passwordArray.concat(symbolSet);
  }
  var uppercase = confirm("Press confirm if you would like uppercase letters. 'OK' for yes, cancel for 'no'.");
  if (uppercase === true) {
   // Adds random uppercase letters to the empty password array
    passwordArray = passwordArray.concat(uppercaseArray);
  } 
  var lowercase = confirm("Press confirm if you would like lowercase letters. 'OK' for yes, cancel for 'no'.");
  if (lowercase === true) {
    // Adds random lowercase letters to the empty password array
    passwordArray = passwordArray.concat(lowercaseArray);
  } 
  var number = confirm("Press confirm if you would like numbers. 'OK' for yes, cancel for 'no'.");
  if (number === true) {
    // Adds random numbers to the empty password array
    passwordArray = passwordArray.concat(numArray);
  }
  if (passwordArray.length === 0){
    alert("Please choose at least one character type");
    return "";
  }
  var randomPassword = "";
  for (var i = 1; i < passwordLength ;i++){
    var randomPosition = Math.floor(Math.random() * passwordArray.length);
    randomPassword = randomPassword + passwordArray[randomPosition];
  }
return randomPassword;
}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);
