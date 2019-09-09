//variables
var alphabet =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];
var randomIndex = Math.floor(Math.random() * alphabet.length);

var computerChoice = alphabet[randomIndex];
var wins = 1;

var losses = 0;

var guesses = 10;

var soFar = [];


// event for the user to press a key
document.onkeyup = function(event) {
  var userChoice = event.key;
  
 
    // reset computer choice if you lose
    if (guesses <= 0) {
      
      losses++;
     
      document.getElementById("losses").innerHTML = losses++;
      
      alert("You lost!");
      guesses = 10;
      
      document.getElementById("soFar").innerHTML = soFar;

      document.getElementById("guesses").innerHTML = 10;

      randomIndex = Math.floor(Math.random() * alphabet.length);

      computerChoice = alphabet[randomIndex];
      
    }
    // Computer choice versus user choice
    if (computerChoice === userChoice) {
      console.log(computerChoice)
      alert("You won!");

      document.getElementById("wins").innerHTML = wins++;

      soFar = [];

      document.getElementById("soFar").innerHTML = soFar;

      randomIndex = Math.floor(Math.random() * alphabet.length);

      computerChoice = alphabet[randomIndex];

      //console.log(soFar)
      guesses = 10;

      document.getElementById("guesses").innerHTML = 10;

    } else {
      
      document.getElementById("guesses").innerHTML = guesses--;

      soFar.push(userChoice);
      
      document.getElementById("soFar").innerHTML = soFar;
    }
}