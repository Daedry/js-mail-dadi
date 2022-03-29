/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

function rollDice() {
  //Generazione del primo numero casuale
  const firstRandomNum = Math.floor(Math.random() * 6) + 1;

  const firstDiceImage = "img/dice" + firstRandomNum + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

  //Generazione del secondo numero casuale
  const secondRandomNum = Math.floor(Math.random() * 6) + 1;
  const secondDiceImage = "img/dice" + secondRandomNum + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

  //generazione messaggi

  //Stabilire il vincitore, in base a chi fa il punteggio più alto.
  if (firstRandomNum < secondRandomNum) {
    document.querySelector("h1").innerHTML = "Ha vinto il computer !";

  } else if (firstRandomNum > secondRandomNum) {
    document.querySelector("h1").innerHTML = "Ha vinto il giocatore 1 !";
    
  } else if (firstRandomNum === secondRandomNum) {
    document.querySelector("h1").innerHTML = "Pareggio !";
    
  }
}
