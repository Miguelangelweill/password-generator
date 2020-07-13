// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var numberCharacters= 8;
var generatePassword = numberCharacters;
//these are my different types of variables for the password
var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
console.log(upperCase);

var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(lowerCase);

var specialCharacters=[".","!","@","#","$","%","^","&","*","(",")","_","-","+", "=","{","}","/","<",">",":",",","?"];
console.log(specialCharacters);

var number=[1,2,3,4,5,6,7,8,9,0]
console.log(number.length);

var alphabet=[1,2,3,"a",false,]
console.log ("element at 0 "+alphabet[3])
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
