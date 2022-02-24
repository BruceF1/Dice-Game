var randomNumber1 = Math.random();
var roundedNumber1 = Math.floor(randomNumber1 *6) +1 
var randomNumber2 = Math.random();
var roundedNumber2 = Math.floor(randomNumber2 *6) +1 
var player1roll = document.querySelector('.img1').setAttribute("src", "D:\\webdev\\Diceegame\\Dicee Challenge - Starting Files\\images\\dice" + roundedNumber1 + ".png");
var player2roll = document.querySelector('.img2').setAttribute("src", "D:\\webdev\\Diceegame\\Dicee Challenge - Starting Files\\images\\dice" + roundedNumber2 + ".png");

function diceGame() {
    player1roll
    player2roll
     if (roundedNumber1 < roundedNumber2) {
         document.querySelector('H1').innerHTML="Winner Player 1!!";
     }
     else if (roundedNumber2<roundedNumber1) {
         document.querySelector('H1').innerHTML="Winner Player 2!!";
     }    
    }

    diceGame();
