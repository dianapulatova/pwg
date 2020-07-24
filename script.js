// Assignment Code
// var generateBtn = document.querySelector("#generate");

// function generatePassword(){
  
//   // generate the length of our password
//   var password_length = Math.floor(Math.random()*120+8);
  
//   // create the pool of all the characters
//   var lower_pool = "abcdefghijklmnopqrstuvwxyz"
//   var upper_pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   var num_pool = "0123456789"
//   var special_pool = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  
//   // sample one char from each type randomly
//   var result = ''
//   result += lower_pool.charAt(Math.floor(Math.random() * lower_pool.length))
//   result += upper_pool.charAt(Math.floor(Math.random() * upper_pool.length))
//   result += num_pool.charAt(Math.floor(Math.random() * num_pool.length))
//   result += special_pool.charAt(Math.floor(Math.random() * special_pool.length))
  
//   // sample random chars for the left part of the password
//   var global_pool = lower_pool+upper_pool+num_pool+special_pool
//   left_length = password_length-4
//   for(i=0;i<left_length; i++){
//     result += global_pool.charAt(Math.floor(Math.random() * global_pool.length))
//   }
  
  // return result;
  // //
var generateBtn = document.querySelector("#generate");
var lower_pool = "abcdefghijklmopqrstuvwxyz".split("");
var upper_pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var num_pool = "0123456789".split("");
var special_pool = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

  function generatePassword() {
    passwordLength = prompt("How long would you prefer your password to be?");
    if (passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength)) {
      alert(
        "Please choose a new number between 8 - 128 for your password length"
      );
      return generatePassword();
    }
  
  var password_length;
  var numbers = false;
  var symbols = false;
  var uppercase = false;
  var lowercase = false;
  var confirms = 0;
  var majorBank = [];

  var newpassword = [];
  
  numbers = confirm("Would you like to include numbers in your password?");
  console.log(numbers);
  symbols = confirm("Would you like to include special characters in your password?");
  console.log(symbols);
  uppercase = confirm("Would you like to include uppercase letters in your password?");
  console.log(uppercase);
  lowercase = confirm("Would you like to include lowercase letters  in your password?");
  console.log(lowercase);
  

  if (numbers) {
    confirms = confirms + 1;
    majorBank = majorBank.concat(num_pool);
    console.log(majorBank);
  }
  if (symbols) {
    confirms = confirms + 1;
    majorBank = majorBank.concat(special_pool);
    console.log(majorBank);
  }
  if (uppercase) {
    confirms = confirms + 1;
    majorBank = majorBank.concat(upper_pool);
    console.log(majorBank);
  }
  if (lowercase) {
    confirms = confirms + 1;
    majorBank = majorBank.concat(lower_pool);
    console.log(majorBank);
  }

  if (majorBank.length == 0) {
    alert("You have not placed in correct characters");
  }

  for (var i = 0; i < passwordLength; i++) {
    newpassword.unshift(majorBank[randomPull(majorBank)]);
  }
  
  newpassword = newpassword.join("");
  console.log(newpassword);

  
  return newpassword;

  // //


}

function randomPull(string) {
  return Math.floor(Math.random() * string.length);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
