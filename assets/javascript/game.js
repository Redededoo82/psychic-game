// The app picks a random letter

// Create a variable that will hold a random number

// Get a random number between 1 and 26 and assign it to that variable

var randomNumber;
randomNumber = Math.floor(Math.random() * 26);

// Create a variable called alphabet.
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var randomLetter;
// Assign an array of strings from A - Z, to that variable.

// Variables to hold number of wins, losses, guesses left, guesses so far.
    var wins = 0;
    var losses = 0;
    var guessesLeft = 0;
    
// variables that hold references to the HTML.
    var winsText = document.getElementById("wins")
    var lossesText = document.getElementById("losses")
    var guessesText = document.getElementById("guesses")
  
// Use array indexing to randomly pick a letter from that array and assign it to that variable
randomLetter = alphabet[randomNumber]

// Collect a user input and store it in a variable
// Compare user input to random letter -- if statement
// if the user input matches the random letter incriment a variable called wins
// else decriment a variable called guesses left
    // if guesses left equals 0 then incriment losses by 1
document.onkeyup = function(event) {

var userGuess = event.key;

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];



//Display wins, losses, guesses left, guesses so far.
    winsText.textContent = "wins " + wins;
    lossesText.textContent = "wins " + wins;
    guessesText.textContent = "wins " + wins;

}