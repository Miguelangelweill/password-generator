// Assignment Code?
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  /*var password = generatePassword();*/
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function getRandomNumber(limit){
  var basicRandom = Math.random();
  var randomLimit = basicRandom*limit;
  var randomFloor =Math.floor(randomLimit);
  return randomFloor;
}

//this are mu libraries
var myLibrary={
upper:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
lower:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
special:[".","!","@","#","$","%","^","&","*","(",")","_","-","+", "=","{","}","/","<",">",":",",","?"],
number:["1","2","3","4","5","6","7","8","9","0"]
};


//this is my input from my user
var passwordLenght=String;
    passwordLenght= prompt("how many characters you want in your password?");
if(passwordLenght>=8){alert("you choose your password to be "+passwordLenght)}
if(passwordLenght<8){alert("you need at least 8 characters")
  for (var i=0;passwordLenght<8;i++){
     passwordLenght= prompt("how many characters you want in your password?");
     if(passwordLenght<8){alert("you need at least 8 characters");
    }
  }
}
var yesUpperCase = confirm("Would you like upper cases?");
var yesLowerCase = confirm("Would you like lower cases?");
var yesSpecialCharacter = confirm("Would you like special character's?");
var yesNumber = confirm("Would you like to use number's?");

var generatePassword = '';

if (yesUpperCase){
  var myUppers = myLibrary.upper[getRandomNumber(myLibrary.upper.length)];
  generatePassword = generatePassword +myUppers;
}
if (yesLowerCase){
  var myLowers = myLibrary.lower[getRandomNumber(myLibrary.lower.length)];
  generatePassword =generatePassword + myLowers;
}
if (yesSpecialCharacter){
  var mySpecials = myLibrary.special[getRandomNumber(myLibrary.special.length)];
  generatePassword = generatePassword+mySpecials;
}
if (yesNumber){
  var myNumbers = myLibrary.number[getRandomNumber(myLibrary.number.length)];
  generatePassword = generatePassword + myNumbers;
}
var usersChoice = generatePassword.length;
console.log("you have chosen "+ usersChoice+" is this right?")
//here we have to subtract the users choice.
for (var i=0;i<newStart;i++){
   var mytoppers = myLibrary.upper[getRandomNumber(myLibrary.upper.length)];
   var mytowers = myLibrary.lower[getRandomNumber(myLibrary.lower.length)];
   var mySpeCials = myLibrary.special[getRandomNumber(myLibrary.special.length)];
   var myNumBers = myLibrary.number[getRandomNumber(myLibrary.number.length)];
generatePassword+= (mytoppers+mytowers+mySpeCials+myNumBers);
console.log(generatePassword)
}
//these are my functions with my different libraries
/*
function getSpecialCharacters() {
  var specialCharacters=[".","!","@","#","$","%","^","&","*","(",")","_","-","+", "=","{","}","/","<",">",":",",","?"];
	return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}
function getNumber() {
  var number=[1,2,3,4,5,6,7,8,9,0]
	return number[Math.floor(Math.random() * number.length)];
}
function getLowerCase() {
  var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
function getUpperCase() {
  var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
return upperCase[Math.floor(Math.random() * upperCase.length)];
}
*/
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

 

