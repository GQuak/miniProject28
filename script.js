// Click a button to start a game

// Display number of blanks from random word that user is trying to guess

// Need to time the game 

// User wins the game when all letters have been correctly guessed

// User losed the game when time runs out before all letters are guessed

// Display total wins and losses 


// When user selects a key, log that as a key event

// When correct letter is guessed, _ should be replaced with that letter

// Program an alert when the game is finished with a win or lose message

// when start button is clicked, timer should restart

// Wins and losses should persist, so make sure they are in local storage

//TIMER EXAMPLE
// Selects element by class
var timerEl = document.querySelector(".timer");

// Selects element by id
// var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left.";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
        }

    }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
    timerEl.textContent = " ";
    //If (they win) {show "You won"} else {show "Game Over"}

}

setTime();
//END TIMER EXAMPLE