// The purpose of this program is to make a game that allows the user to guess the appropriate key. The correct key will be randomly generated by the program and will change each round. Wins and losses will be stored. Also, the remaining keystrokes will be appropriately displayed

//Problem 1:    Have wins and losses calculated. Losses increases by one if keystroke counter reaches 0. Have wins increase by 1 the correct key is pressed

    //Wins - Increased by 1 if correct key is pressed

var wins = 0;
    //Losses - Increases by 1 if keystroke counter is equal to zero.
var losses = 0;

//Problem 2:    Have a counter that decreases after every keystroke. Resets after 0. Resets if correct key is pressed.

    //Keystroke Counter - If correct key is pressed, keystroke counter resets to 9
    //                      Else keystroke counter decreases by one
var keystrokeCounter = 9;

var keystrokeArray = [];

//Problem 3:    Randomly generated keystroke

    //Put all letters in an array
    //Use math.random to find random letter
    //If keystroke = random letter -> Win!
    //If keystroke != random letter -> Lose!

//Random key generator - Found on Firefox MDN
var minKeyCode = 65;
var maxKeyCode = 90;

                    //Difficulty Settings

                    //Swap the difficulty on html to Easy, Medium, Hard

                    var difficulty = (function() {
                        var difficultyArray = ['Easy','Medium','Hard','Psychic'];
                        var count = 0;
                        console.log(count)
                        return function() {
                            return difficultyArray[++count % difficultyArray.length];
                        }
                    }());
document.addEventListener('difficultySetting').onclick = function() {
                        if (difficulty === 'Easy') {
                            keystrokeCounter = 9;
                            keyArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
                        }

                        if (difficulty === 'Medium') {
                            keystrokeCounter = 9;
                            minKeyCode = 65;

                        }
                        
                        if (difficulty === 'Hard') {
                            keystrokeCounter = 5;
                            minKeyCode = 55;
                        }
                    
                        if (difficulty === 'Psychic') {
                            keystrokeCounter = 1;
                            minKeyCode = 55;
                        }
                    }

                    //change the maxKeyCode depending on setting

//Function to get random key

var correctKeyCode = getRandomInt(minKeyCode,maxKeyCode)

function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var letter = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    if (letter <= 64) {
        letter = letter - 7;
    }
    return letter;
  }

var correctKeyPress = String.fromCharCode(correctKeyCode)
console.log(correctKeyCode)
console.log(correctKeyPress)

//Initial numbers written to the page
    document.getElementById('winningkey').innerHTML = correctKeyPress;
    document.getElementById('win').innerHTML = wins;
    document.getElementById('keystrokeCount').innerHTML = keystrokeCounter;
    document.getElementById('loss').innerHTML = losses;
    document.getElementById('keyArray').innerHTML = keystrokeArray;
    // document.getElementById("difficultySetting").innerHTML = difficultyArray[difficulty];



// Event on keydown

document.onkeydown = function(event) {
    // getStarted()
    var key_Press = event.key.toUpperCase();
    var key_Code = event.keyCode;
    console.log(event);
 
    if (key_Code >= minKeyCode && key_Code <= maxKeyCode) {
        keystrokeArray.push(key_Press);
            // Keystroke Counter

            if (key_Code === correctKeyCode) {
                console.log('validate')
                keystrokeCounter = 9;
                difficultyKeystrokeChanger();
                wins = wins + 1;
                keystrokeArray = [];
                correctKeyCode = getRandomInt(minKeyCode,maxKeyCode);
                document.getElementById('winningkey').innerHTML = String.fromCharCode(correctKeyCode);
                document.getElementById('win').innerHTML = wins;
                document.getElementById('keystrokeCount').innerHTML = keystrokeCounter;
                document.getElementById('keyArray').innerHTML = keystrokeArray;
            }
            else if (keystrokeCounter === 0) {
                losses = losses + 1;
                keystrokeCounter = 9;
                difficultyKeystrokeChanger();
                keystrokeArray = [];
                document.getElementById('loss').innerHTML = losses;
                document.getElementById('keystrokeCount').innerHTML = keystrokeCounter;
                document.getElementById('keyArray').innerHTML = keystrokeArray;
            }
            else {
                keystrokeCounter = keystrokeCounter - 1;
                document.getElementById('keystrokeCount').innerHTML = keystrokeCounter;
                document.getElementById('keyArray').innerHTML = keystrokeArray.join(' ');
            }
    }
}


//Additional Ideas:
    // Add numbers to the mix