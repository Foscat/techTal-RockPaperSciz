document.getElementById("rock").addEventListener("click", answerRock);
document.getElementById("paper").addEventListener("click", answerPaper);
document.getElementById("scissors").addEventListener("click", answerScissors);

document.getElementById("start").addEventListener("click", startGame);

var yourAnswer = null;

function answerRock(){
    console.log("Rock")
    yourAnswer = "Rock"
}

function answerPaper(){
    console.log("Paper")
    yourAnswer = "Paper"
}

function answerScissors(){
    console.log("Scissors")
    yourAnswer = "Scissors"
}

var computerAnswers = ["Rock", "Paper", "Scissors"];
var chooseAnswer = Math.floor(Math.random()*3);
var won = 0;
var lost = 0;
var draw = 0;

console.log(chooseAnswer);

function startGame() {
    var answer = computerAnswers[chooseAnswer];
    console.log(answer);

    if(yourAnswer === answer){
        console.log("its a draw")
        draw++
    }
    if (answer === "Rock"){
        if(yourAnswer === "Paper"){
            console.log("You win");
            won++
        }
        if(yourAnswer === "Scissors"){
            console.log("You lost");
            lost++
        }
    }
    if (answer === "Paper"){
        if(yourAnswer === "Scissors"){
            console.log("You win");
            won++
        }
        if(yourAnswer === "Rock"){
            console.log("You lost");
            lost++
        }
    }
    if (answer === "Scissors"){
        if(yourAnswer === "Rock"){
            console.log("You win");
            won++
        }
        if(yourAnswer === "Paper"){
            console.log("You lost");
            lost++
        }
    }
    chooseAnswer = Math.floor(Math.random()*3);
    console.log("Wins:" + won, "Lost: " + lost, "Draws: " + draw)
}

