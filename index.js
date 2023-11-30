
function randomNumber(){return Math.floor(Math.random()*6)+1};
diceRoll1 = randomNumber();
diceRoll2 = randomNumber();

document.getElementsByClassName("img1")[0].src = `./images/dice${diceRoll1}.png`;
document.getElementsByClassName("img2")[0].src = `./images/dice${diceRoll2}.png`;


if (diceRoll1===diceRoll2){document.querySelector("h1").innerHTML = "Draw"};
if (diceRoll1>diceRoll2){document.querySelector("h1").innerHTML = "🚩Player 1 Wins"};
if (diceRoll1<diceRoll2){document.querySelector("h1").innerHTML = "Player 2 Wins🚩"};