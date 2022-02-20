let userScore = 0;
let computerScore = 0;
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function convertToWord(letter) {
    if (letter==="r")
    return "Rock";
    if(letter==="p")
    return "Paper";
     return "Scissors"
}

    function win(user,computer) {
        userScore++
        userScoreEl.innerHTML = userScore;
        result.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)} You Win!`;

      document.getElementById(user).classList.add('green-glow');
      setTimeout(() => {
        document.getElementById(user).classList.remove('green-glow'); 
      }, 700);
    }

    function lose(user,computer) {
        computerScore++
        computerScoreEl.innerHTML = computerScore++;
         result.innerHTML = `${convertToWord(user)} loses to ${convertToWord(computer)} You Lost..`;
      document.getElementById(user).classList.add('red-glow');
      setTimeout(() => {
        document.getElementById(user).classList.remove('red-glow'); 
      }, 700);
    }

    function draw(user,computer) {
          result.innerHTML = `${convertToWord(user)} equals ${convertToWord(computer)} It's a Draw!`;
          document.getElementById(user).classList.add('gray-glow');
          setTimeout(() => {
            document.getElementById(user).classList.remove('gray-glow'); 
          }, 700);
    }

function game(userChoice) {
   const computerChoice = getComputerChoice();
   switch(userChoice + computerChoice) {
       
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
        break;

    case "rp":
    case "ps":
    case "sr":
        lose(userChoice, computerChoice);
        break;

    case "rr":
    case "ss":
    case "rr":
        draw(userChoice, computerChoice);
        break;

   }
}

function main() {
 
rock.addEventListener('click',() =>  game("r"))
paper.addEventListener('click',() => game("p"))
scissors.addEventListener('click',() => game("s"))

}

main();