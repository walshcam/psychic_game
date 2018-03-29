// *****************Global variables*****************


var wins = 0;
var losses = 0;
var keystrokesEnteredArray = [];
var count = 0;
var keystrokeCounter2 = 9;
var correctKeyPress = "a";


// ***********Specific Difficulty Objects************
var easy = {
    difficultySet : "EASY",
    keystrokeCounter : 9,
    keystrokeArray : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
};

var medium = {
    difficultySet : "MEDIUM",
    keystrokeCounter : 9,
    keystrokeArray : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']
};

var hard = {
    difficultySet : "HARD",
    keystrokeCounter : 5,
    keystrokeArray : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']
};

var psychic = {
    difficultySet : "PSYCHIC",
    keystrokeCounter : 1,
    keystrokeArray : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']
};


//*****************Choose Difficulty*****************
var difficultyArray = [easy.difficultySet, medium.difficultySet,hard.difficultySet,psychic.difficultySet]
var difficulty = difficultyArray[count]
console.log("The initial difficulty is " + difficulty);

function difficultyEvent() {
    count = count +1;
    difficulty = difficultyArray[count % difficultyArray.length];
    document.getElementById('difficultySetting').innerHTML = difficulty;
    console.log("The difficulty after event listener " + difficulty);
}    

document.getElementById("difficultySetting").addEventListener('click', difficultyEvent);

//**************Initial Computer Choice******************

if (difficulty === "EASY") {
    correctKeyPress = easy.keystrokeArray[Math.floor(Math.random()*easy.keystrokeArray.length)];
    keystrokeCounter2 = easy.keystrokeCounter;
    document.getElementById('winningkey').innerHTML = correctKeyPress;
    document.getElementById('keystrokeCount').innerHTML = easy.keystrokeCounter;
}

if (difficulty === "MEDIUM") {
    correctKeyPress = medium.keystrokeArray[Math.floor(Math.random()*medium.keystrokeArray.length)];
    keystrokeCounter2 = medium.keystrokeCounter;
    document.getElementById('winningkey').innerHTML = correctKeyPress;
    document.getElementById('keystrokeCount').innerHTML = medium.keystrokeCounter;
}

if (difficulty === "HARD") {
    correctKeyPress = hard.keystrokeArray[Math.floor(Math.random()*hard.keystrokeArray.length)];
    keystrokeCounter2 = hard.keystrokeCounter;
    document.getElementById('winningkey').innerHTML = correctKeyPress;
    document.getElementById('keystrokeCount').innerHTML = hard.keystrokeCounter;
}

if (difficulty === "PSYCHIC") {
    correctKeyPress = psychic.keystrokeArray[Math.floor(Math.random()*psychic.keystrokeArray.length)];
    keystrokeCounter2 = psychic.keystrokeCounter;
    document.getElementById('winningkey').innerHTML = correctKeyPress;
    document.getElementById('keystrokeCount').innerHTML = psychic.keystrokeCounter;
}
//*********CHANGE COMPUTER CHOICE WITH CLICK

document.getElementById("difficultySetting").addEventListener('click',function() {
if (difficulty === "EASY") {
    correctKeyPress = easy.keystrokeArray[Math.floor(Math.random()*easy.keystrokeArray.length)];
    keystrokeCounter2 = easy.keystrokeCounter;
    document.getElementById('winningkey').innerHTML = correctKeyPress;
    document.getElementById('keystrokeCount').innerHTML = easy.keystrokeCounter;
}

if (difficulty === "MEDIUM") {
    correctKeyPress = medium.keystrokeArray[Math.floor(Math.random()*medium.keystrokeArray.length)];
    keystrokeCounter2 = medium.keystrokeCounter;
    document.getElementById('winningkey').innerHTML = correctKeyPress;
    document.getElementById('keystrokeCount').innerHTML = medium.keystrokeCounter;
}

if (difficulty === "HARD") {
    correctKeyPress = hard.keystrokeArray[Math.floor(Math.random()*hard.keystrokeArray.length)];
    keystrokeCounter2 = hard.keystrokeCounter;
    document.getElementById('winningkey').innerHTML = correctKeyPress;
    document.getElementById('keystrokeCount').innerHTML = hard.keystrokeCounter;
}

if (difficulty === "PSYCHIC") {
    correctKeyPress = psychic.keystrokeArray[Math.floor(Math.random()*psychic.keystrokeArray.length)];
    keystrokeCounter2 = psychic.keystrokeCounter;
    document.getElementById('winningkey').innerHTML = correctKeyPress;
    document.getElementById('keystrokeCount').innerHTML = psychic.keystrokeCounter;
}
})

// ****************Difficulty object*****************


// *******Initial Numbers Written to the Page********


document.getElementById('keyArray').innerHTML = keystrokesEnteredArray;
document.getElementById('loss').innerHTML = losses;
document.getElementById('win').innerHTML = wins;


//******************KEYDOWN EVENT********************

document.onkeyup = function(event) {
    // getStarted()
    var key_Press = event.key.toUpperCase();
    var userKey = event.key
    console.log(event);


        //***********EASY****************


    if ((easy.keystrokeArray.indexOf(userKey) != -1) && (keystrokesEnteredArray.indexOf(userKey) === -1)) {        

        console.log(keystrokesEnteredArray.indexOf(userKey));
        console.log('EASY if statements');

        if (difficulty === "EASY") {
            if (userKey === correctKeyPress) {
                keystrokeCounter2 = easy.keystrokeCounter;
                wins++;
                keystrokesEnteredArray = [];
                correctKeyPress = easy.keystrokeArray[Math.floor(Math.random()*easy.keystrokeArray.length)];
                document.getElementById('win').innerHTML = wins;
                document.getElementById('keyArray').innerHTML = keystrokesEnteredArray;
                document.getElementById('keystrokeCount').innerHTML = easy.keystrokeCounter;
            }
            else if (keystrokeCounter2 === 0) {
                losses++;
                keystrokeCounter2 = easy.keystrokeCounter;
                keystrokesEnteredArray = [];
                document.getElementById('loss').innerHTML = losses;
                document.getElementById('keyArray').innerHTML = keystrokesEnteredArray;
                document.getElementById('keystrokeCount').innerHTML = easy.keystrokeCounter;
            }
            else {
                keystrokeCounter2--;
                keystrokesEnteredArray.push(userKey);
                console.log("I got this")
                document.getElementById('keyArray').innerHTML = keystrokesEnteredArray;
                document.getElementById('keystrokeCount').innerHTML = keystrokeCounter2;

            }
        }
    }
        //***********MEDIUM****************

    if ((medium.keystrokeArray.indexOf(userKey) != -1) && (keystrokesEnteredArray.indexOf(userKey) === -1)) {         

        console.log('MEDIUM if statements')

        if (difficulty === "MEDIUM") {
            if (userKey === correctKeyPress) {
                keystrokeCounter2 = medium.keystrokeCounter;
                wins++;
                keystrokesEnteredArray = [];
                correctKeyPress = medium.keystrokeArray[Math.floor(Math.random()*medium.keystrokeArray.length)];
                document.getElementById('win').innerHTML = wins;
                document.getElementById('keyArray').innerHTML = keystrokesEnteredArray;
                document.getElementById('keystrokeCount').innerHTML = medium.keystrokeCounter;
            }
            else if (keystrokeCounter2 === 0) {
                losses++;
                keystrokeCounter2 = medium.keystrokeCounter;
                keystrokesEnteredArray = [];
                document.getElementById('loss').innerHTML = losses;
                document.getElementById('keyArray').innerHTML = keystrokesEnteredArray;
                document.getElementById('keystrokeCount').innerHTML = medium.keystrokeCounter;
            }
            else {
                keystrokeCounter2--;
                keystrokesEnteredArray.push(userKey);
                document.getElementById('keyArray').innerHTML = keystrokesEnteredArray;
                document.getElementById('keystrokeCount').innerHTML = keystrokeCounter2;

            }
        }
    }

//***********HARD****************

    if ((hard.keystrokeArray.indexOf(userKey) != -1) && (keystrokesEnteredArray.indexOf(userKey) === -1)) { 

        console.log('HARD if statements')

        if (difficulty === "HARD") {
            if (userKey === correctKeyPress) {
                keystrokeCounter2 = 9;
                wins++;
                keystrokesEnteredArray = [];
                correctKeyPress = hard.keystrokeArray[Math.floor(Math.random()*hard.keystrokeArray.length)];
                document.getElementById('win').innerHTML = wins;
                document.getElementById('keyArray').innerHTML = keystrokesEnteredArray;
                document.getElementById('keystrokeCount').innerHTML = hard.keystrokeCounter;
            }
            else if (keystrokeCounter2 === 0) {
                losses++;
                keystrokeCounter2 = hard.keystrokeCounter;
                keystrokesEnteredArray = [];
                document.getElementById('loss').innerHTML = losses;
                document.getElementById('keyArray').innerHTML = keystrokesEnteredArray;
                document.getElementById('keystrokeCount').innerHTML = hard.keystrokeCounter;
            }
            else {
                keystrokeCounter2--;
                keystrokesEnteredArray.push(userKey);
                document.getElementById('keyArray').innerHTML = keystrokesEnteredArray;
                document.getElementById('keystrokeCount').innerHTML = keystrokeCounter2;

            }
        }
    }

        //***********PSYCHIC****************
 
    if ((psychic.keystrokeArray.indexOf(userKey) != -1) && (keystrokesEnteredArray.indexOf(userKey) === -1)) { 

        console.log('PSYCHIC if statements')

        if (difficulty === "PSYCHIC") {
            if (userKey === correctKeyPress) {
                keystrokeCounter2 = 9;
                wins++;
                keystrokesEnteredArray = [];
                correctKeyPress = psychic.keystrokeArray[Math.floor(Math.random()*psychic.keystrokeArray.length)];
                document.getElementById('win').innerHTML = wins;
                document.getElementById('keyArray').innerHTML = keystrokesEnteredArray;
                document.getElementById('keystrokeCount').innerHTML = psychic.keystrokeCounter;
            }
            else if (keystrokeCounter2 === 0) {
                losses++;
                keystrokeCounter2 = psychic.keystrokeCounter;
                keystrokesEnteredArray = [];
                document.getElementById('loss').innerHTML = losses;
                document.getElementById('keyArray').innerHTML = keystrokesEnteredArray;
                document.getElementById('keystrokeCount').innerHTML = psychic.keystrokeCounter;
            }
            else {
                keystrokeCounter2--;
                keystrokesEnteredArray.push(userKey);
                document.getElementById('keyArray').innerHTML = keystrokesEnteredArray;
                document.getElementById('keystrokeCount').innerHTML = keystrokeCounter2;

            }
        }
    }

}