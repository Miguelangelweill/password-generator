
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
 
var passwordLenght =prompt("how many characters you want in your password?");
  if(passwordLenght>=8){alert("you choose your password to be "+passwordLenght+ " characters long?")}
  if(passwordLenght<8){alert("you need at least 8 characters")
    for (var i=0;passwordLenght<8;i++){
     passwordLenght= prompt("how many characters you want in your password?");
     if(passwordLenght<8){alert("you need at least 8 characters");
    }
  }
}

console.log(typeof passwordLenght)
var yesUpperCase = confirm("Would you like upper cases?");
var yesLowerCase = confirm("Would you like lower cases?");
var yesSpecialCharacter = confirm("Would you like special character's?");
var yesNumber = confirm("Would you like to use number's?");

var generatePassword = '';

if (yesUpperCase){
  var myUppers = myLibrary.upper[getRandomNumber(myLibrary.upper.length)];
  generatePassword = generatePassword +myUppers;
  console.log(generatePassword);
}
if (yesLowerCase){
  var myLowers = myLibrary.lower[getRandomNumber(myLibrary.lower.length)];
  generatePassword =generatePassword + myLowers;
  console.log(generatePassword);
}
if (yesSpecialCharacter){
  var mySpecials = myLibrary.special[getRandomNumber(myLibrary.special.length)];
  generatePassword = generatePassword+mySpecials;
  console.log(generatePassword);
}
if (yesNumber){
  var myNumbers = myLibrary.number[getRandomNumber(myLibrary.number.length)];
  generatePassword = generatePassword + myNumbers;
  console.log(generatePassword);
}

//here we are getting the ammount of objects that is user is using
var usersChoice = generatePassword.length;
console.log("you have chosen "+ usersChoice+" is this right?")
//here subtract the password length by the ammount of objects that the user chooses.
var newStart = passwordLenght -  usersChoice;
console.log(newStart)

for (var i=0;i<newStart;i++){
   var myToppers = myLibrary.upper[getRandomNumber(myLibrary.upper.length)];

   var myTowers = myLibrary.lower[getRandomNumber(myLibrary.lower.length)];

   var mySpeCials = myLibrary.special[getRandomNumber(myLibrary.special.length)];

   var myNumBers = myLibrary.number[getRandomNumber(myLibrary.number.length)];
//this is my final random password, i keep filling it up with the last value here i dont know why 
//ASK?|??
   generatePassword+= (myToppers,myTowers,mySpeCials,myNumBers) 
   
   console.log(generatePassword)

}

// this is the onclick event for my passwors to be displayed on the screen
var generateButton = document.getElementById("generate");

generateButton.onclick = function(){
  var password = document.getElementById("password");
  password.innerHTML = generatePassword;
}

 

