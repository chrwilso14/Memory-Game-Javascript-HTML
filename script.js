// Matching Code
const cards = document.querySelectorAll(".card__inner");

cards.forEach((card) => card.addEventListener("click", flipCard));

let playedCards = [];
let card1, card2;
let cardFlipped = false;

function flipCard() {
  if (this === card1) return;

  this.classList.add("is-flipped");
  if (!cardFlipped) {
    cardFlipped = true;
    card1 = this;
    return;
  }
  card2 = this;
  cardFlipped = false;
  matchTest();
}

function matchTest() {
  if (card1.classList.value === card2.classList.value) {
    cardsMatch();
    return;
  }
  noMatch();
}

function cardsMatch() {
  setTimeout(() => {
    alert("It's a match!");
    playedCards.push(card1);
    playedCards.push(card2);
    card1.remove();
    card2.remove();
    console.log(playedCards.length)
    if (playedCards.length === 12) {
        console.log("message")
      clearInterval(timerFunction); //Ends timer
    }
  }, 500);
  
}

function noMatch() {
  setTimeout(() => {
    alert("No match!");
    card1.classList.remove("is-flipped");
    card2.classList.remove("is-flipped");
    cardFlipped = false;
    card1 = null;
    card2 = null;
  }, 500);
}

function linkClick(e) {
  e.stopPropagation();
}

function toggleHidden(boxID) {
  document.getElementById(boxID).classList.toggle("hidden");
}

// Start Page
function gameDisplay() {
  const gameBoardContainer = document.getElementById("gameBoardContainer");
  const startPage = document.getElementById("modal");
  gameBoardContainer.classList.remove("hidden");
  gameBoardContainer.style.display = "flex";
  startPage.classList.add("hidden");
  timerFunction = setInterval(gameTime, 1000);
}

// Reset
function resetFunction() {
  location.reload();
  clearInterval(timerFunction);
}
// timer
let timerFunction;
let tSeconds = 0;
function gameTime() {
  ++tSeconds;
  let hour = Math.floor(tSeconds / 3600);
  let minute = Math.floor((tSeconds - hour * 3600) / 60);
  let seconds = tSeconds - (hour * 3600 + minute * 60);
  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (seconds < 10) seconds = "0" + seconds;
  document.getElementById("timer").innerHTML =
    hour + ":" + minute + ":" + seconds;
}


// Shuffle Code
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
let cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //these will be ids...that assign the constructor value
shuffle(cardArray);
console.log(cardArray);
document.getElementById("asteroid-1").style.order = cardArray[0];
document.getElementById("asteroid-2").style.order = cardArray[1];
document.getElementById("toilet-paper-1").style.order = cardArray[2];
document.getElementById("toilet-paper-2").style.order = cardArray[3];
document.getElementById("pandemic-1").style.order = cardArray[4];
document.getElementById("pandemic-2").style.order = cardArray[5];
document.getElementById("murder-hornets-1").style.order = cardArray[6];
document.getElementById("murder-hornets-2").style.order = cardArray[7];
document.getElementById("rbg-1").style.order = cardArray[8];
document.getElementById("rbg-2").style.order = cardArray[9];
document.getElementById("ufo-1").style.order = cardArray[10];
document.getElementById("ufo-2").style.order = cardArray[11];
