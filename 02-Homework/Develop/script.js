//This is my function for a random number
function getRandomNumber(limit){
  var basicRandom = Math.random();
  var randomLimit = basicRandom*limit;
  var randomFloor =Math.floor(randomLimit);
  return randomFloor;
}

//this is my library of values
var myLibrary={
upper:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
lower:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
special:[".","!","@","#","$","%","^","&","*","(",")","_","-","+", "=","{","}","/","<",">",":",",","?"],
number:["1","2","3","4","5","6","7","8","9","0"]
};

//This is where I get the numbert of characters that my user want's
var passwordLenght =prompt("how many characters you want in your password?");
  if(passwordLenght>=8){
    alert("you choose your password to be "+passwordLenght+ " characters long?")
  }
  if(passwordLenght<8){
    alert("you need at least 8 characters")
    for (var i=0;passwordLenght<8;i++){
     passwordLenght= prompt("how many characters you want in your password?");
     if(passwordLenght<8){alert("you need at least 8 characters");
    }
  }
}

//Here we are getting the ammount of objects that are used depending on the user's preference
 var superLibrary=[];
var generatePassword = '';
var usersChoice = '';
// Here I ask what item's he want's to use from my librarie
var yesUpperCase = confirm("Would you like upper cases?");
  if (yesUpperCase){
    generatePassword+= myLibrary.upper[getRandomNumber(myLibrary.upper.length)]; 
    superLibrary= superLibrary.concat(myLibrary.upper);
  }
  var yesLowerCase = confirm("Would you like lower cases?");
  if (yesLowerCase){
    generatePassword+= myLibrary.lower[getRandomNumber(myLibrary.lower.length)];
    superLibrary= superLibrary.concat(myLibrary.lower);
  }
  var yesSpecialCharacter = confirm("Would you like special character's?");
  if (yesSpecialCharacter){
    generatePassword+= myLibrary.special[getRandomNumber(myLibrary.special.length)];
    superLibrary= superLibrary.concat(myLibrary.special);
  }
  var yesNumber = confirm("Would you like to use number's?");
  if (yesNumber){
    generatePassword+= myLibrary.number[getRandomNumber(myLibrary.number.length)];
    superLibrary=superLibrary.concat(myLibrary.number);
  }
  alert("Now click on Generate Password")
//here subtract the password length by the ammount of objects that the user chooses.
var newStart = passwordLenght -  generatePassword.length;
console.log("you have chosen "+ usersChoice+" is this right?")
;
//this is my for loop
for (var i=0;i<newStart;i++){ 
generatePassword+= superLibrary[getRandomNumber(superLibrary.length)];
}
// This is the onclick event for my passwors to be displayed on the screen and replace the innerHTML in that section
var generateButton = document.getElementById("generate");
generateButton.onclick = function(){
  var password = document.getElementById("password");
  password.innerHTML = generatePassword;
}

