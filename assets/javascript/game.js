  
    // Creates array that lists all possible choices for the app and initialize other needed variables
    var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var loses = 0;
    var guesses = "";
    var guessCount = 0;

    //Creates variables for display texts
    var winsText = document.getElementById("wins");
    var lossesText = document.getElementById("losses");
    var guessesText = document.getElementById("guesses");


    //Randomly chooses a letter from the choices array. This is the Psychic's letter.
    var compLetter = compChoices[Math.floor(Math.random() * compChoices.length)];
    //console.log(compLetter);

    document.onkeyup = function(event) {
    //Determines which key was pressed.
    var userGuess = event.key;

    //Conditional Loop that determines wins and losses
    if (userGuess === compLetter) {
        wins++;
        compLetter = compChoices[Math.floor(Math.random() * compChoices.length)];
        guesses = "";
        guessCount = 0;
        alert("You won! The letter has been reset. Guess again!");
    } else if (guessCount == compChoices.length-1){
        loses++;
        compLetter = compChoices[Math.floor(Math.random() * compChoices.length)];
        guesses = "";
        guessCount = 0;
        alert("Aww you lost! The letter has been reset. Guess again!");
    } else {
        guesses = userGuess + ", " + guesses;
        guessCount++;
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + loses;
    guessesText.textContent = "You've Guessed: " + guesses;
    //console.log(userGuess);
}   
    