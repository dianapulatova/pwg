// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  
  // generate the length of our password
  var password_length = Math.floor(Math.random()*120+8);
  
  // create the pool of all the characters
  var lower_pool = "abcdefghijklmnopqrstuvwxyz"
  var upper_pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var num_pool = "0123456789"
  var special_pool = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  
  // sample one char from each type randomly
  var result = ''
  result += lower_pool.charAt(Math.floor(Math.random() * lower_pool.length))
  result += upper_pool.charAt(Math.floor(Math.random() * upper_pool.length))
  result += num_pool.charAt(Math.floor(Math.random() * num_pool.length))
  result += special_pool.charAt(Math.floor(Math.random() * special_pool.length))
  
  // sample random chars for the left part of the password
  var global_pool = lower_pool+upper_pool+num_pool+special_pool
  left_length = password_length-4
  for(i=0;i<left_length; i++){
    result += global_pool.charAt(Math.floor(Math.random() * global_pool.length))
  }
  
  return result
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
