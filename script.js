
var btn = document.getElementById("btn");
var charlen = document.getElementById("charlen");
var numbercheck = document.getElementById("numbers");
var uppercasecheck = document.getElementById("uppercase");
var lowercasecheck = document.getElementById("lowercase");
var symbolscheck = document.getElementById("symbols");
var passwordarea = document.getElementById("password");


function generatePassword(){
   const len = parseInt(charlen.value);
   if(len<0) window.alert("Please enter a value greater than 0.");


   const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const lowerCase  = "abcdefghijklmnopqrstuvwxyz";
   const symbols = "!@#$%^&*";
   const numbers = "123456789";

   var checkString = "";
   if(numbercheck.checked){
       checkString+=numbers;
   }
   if(uppercasecheck.checked){
    checkString+=upperCase;
   }
   if(lowercasecheck.checked){
    checkString+=lowerCase;
    }
    if(symbolscheck.checked){
        checkString+=symbols;
    }
    var passwordString = "";
    for(let i = 0; i<len; i++){
        var randomIndex = Math.floor(Math.random()*(checkString.length));
        passwordString+=checkString[randomIndex];
    }
    passwordarea.innerHTML = passwordString;

}