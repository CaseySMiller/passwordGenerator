// Assignment Code
var generateBtn = document.querySelector("#generate");
 


// generate password
function generatePassword() {
  //declare variables
  var passLength;
  var lowerCase; 
  var upperCase; 
  var numeric;
  var specialChar;
  var allowedCharacters;
  var newPassword = "";
  
  //prompt for length
  function lengthCheck() {
    passLength = 0;
    passLength = prompt ("Enter password length from 8-128:");
    //check length
    if(passLength < 8) {
      alert ("Password must be between 8 and 128 characters");
      lengthCheck();
    } else if(passLength > 128) {
      alert ("Password must be between 8 and 128 characters");
      lengthCheck();
    } else {
      return;
    };
  };
  lengthCheck();

  //prompt for character types
  function charPromt() {
    lowerCase = confirm ("Include lower case characters?");
    upperCase = confirm ("Include Upper case characters?");
    numeric = confirm ("Include numeric characters?");
    specialChar = confirm ("Include special characters?");
    //validate char types
    if(!lowerCase && !upperCase && !numeric && !specialChar) {
      alert ("Password must contain a least one character type");
      charPromt();
    } else {
      return;
    };
  };
  charPromt();
  
  
  //make array of allowed characters
  function charPicker() {
    var charAllowed = [];
    var upAllow = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split( '' );
    var lowAllow = 'abcdefghijklmnopqrstuvwxyz'.split( '' );
    var numAllow = '1234567890'.split( '' );
    var specAllow = '!@#$%^&*'.split( '' );
    
    if(lowerCase){charAllowed = charAllowed.concat(lowAllow);};
    if(upperCase){charAllowed = charAllowed.concat(upAllow);};
    if(numeric){charAllowed = charAllowed.concat(numAllow);};
    if(specialChar){charAllowed = charAllowed.concat(specAllow);};
    
    return(charAllowed);
  };
  allowedCharacters = charPicker();
  
  // generate password from allowed characters
  for (var i = 0; i < passLength; i++) {
    randoChar = allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];
    newPassword = newPassword.concat(randoChar);
  };
  
  return(newPassword);
};




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


