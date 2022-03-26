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

  console.log("The number of characters in the password is " + numChar)
  } else {
      alert("Please select a value between 8 and 128") //NEEDS TO RE-PROMPT USER TO SELECT CORRECT NUMBER
      return "";
    }
  var symbol = confirm("Press confirm if you would like special characters");
  if (symbol === true) {
    console.log("There are special characters.");
    passwordArray = passwordArray.concat(symbolSet);
  }
  var uppercase = confirm("Press confirm if you would like uppercase letters.");
  if (uppercase === true) {
    console.log("There are uppercase letters.");
    passwordArray = passwordArray.concat(uppercaseArray);
  } 
  var lowercase = confirm("Press confirm if you would like lowercase letters.");
  if (lowercase === true) {
    console.log("There are lowercase letters.");
    passwordArray = passwordArray.concat(lowercaseArray);
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
