
// Create variables
var wins = 0;
var losses = 0;
var GuessesLeft = 9;
var GuessesUsed = 0;

// Creating an array of the alphabet
var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create a random holder - for scope
var randomLetterHolder = "";

// Create a random letter function
function randomgen() {
    var randomIndex = Math.floor(Math.random() * abc.length);
    var randomLetter = abc[randomIndex];
    randomLetterHolder = randomLetter;
    console.log(randomLetter);
}

// Call random letter function
randomgen ();

// User imput - keys append
document.onkeyup = function (event) {
        var Guesses = event.key;

// If else statement to determine if the answer was correct
        if (Guesses === randomLetterHolder) {
            wins = wins + 1;
            alert("YOU GOT IT!!")
            randomgen();
        } else {
           losses = losses + 1;
           GuessesUsed = GuessesUsed + 1;
           GuessesLeft = GuessesLeft - 1;
        } 

// If else statement to determine if you're out of guesses
        if (GuessesLeft === 0){
            alert("YOU LOST!");
            location.reload();
        }

// Append updated scoreboard
        document.getElementById("Wins").innerHTML = `Wins: ${wins}`;
        document.getElementById("Losses").innerHTML = `Losses: ${losses}`;  
        document.getElementById("Guessesleft").innerHTML = `Guesses left: ${GuessesLeft}`;
        document.getElementById(`guesses2`).append(Guesses);
    }
