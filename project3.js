// const btn = document.getElementById("subt");
// const preiousguess = document.querySelector(".guesses"); 
// const valuestore = [];
// const uniqueNumbers = removeDuplicates(numbers);

// btn.addEventListener("click", function (e) {
// debugger;
 
//   ///////Value Chack intger Number  
//   e.preventDefault();
//   debugger;
//   console.log("ok");
 

//   inputnumberclick();
// });
 
//   ///////Value number code in array push
//   function inputnumberclick() {
//     debugger;
//     const inputnumber = parseInt(document.getElementById("guessField").value);

//   if(!isNaN(inputnumber)) {

//     valuestore.push(inputnumber);
//   ///Guess Value number 
//     preiousguess.textContent = valuestore.join(", ");
//     document.getElementById("guessField").value = "";
    
// ///////////Inceeae Value Print use


//   }
  


//   //  if (valuestore.includes(inputnumber)) {
//   //       console.log("not repeat number")
//   //       return;
//   //     }
  
//     else {
//    document.getElementById("guessField").value = "";
//     const lastResultdecrease = document.querySelector(".lastResult");
//     let result = parseInt(lastResultdecrease.textContent);

//     if(preiousguess===valuestore) {
//       result--;
//       lastResultdecrease.textContent = result;
//       alert("check");
//     }
// ////////////Decrase Value print use
//     // if (result > 1) {
//     //   result--;
//     //   lastResultdecrease.textContent = result;
//     // } 
//     if(preiousguess===valuestore) {
//       result--;
//       lastResultdecrease.textContent = result;
//     }
//     else {
//       lastResultdecrease.style.display = "none";

//       ///////////Type Of querySelector print message 'Game Over';

//       // const Gamemessages = document.querySelector('GameMessage');
//       // element.textContent = 'Game Over';
//       // element.style.display = 'block';

//       //////////Type Of Foreach block use work display block work message print 'Game Over';

//       // const Gamemessages = document.getElementsByClassName('GameMessage');

//       // Array.from(Gamemessages).forEach(function (element)
//       // {
//       //     element.textContent = 'Game Over';
//       //     element.style.display = 'block';
//       // })

//       /////////////
//       // const Gamemessages = document.querySelector('.game-over-message');
//       // Gamemessages.style.dispaly='block !important';

//     //   const Gamemessages = document.querySelector(".game-over-message");

//       // Loop through all selected elements (in case there are multiple)
// //       Gamemessages.style.display = "block";
// //       const modal = document.getElementById("myModal");

// // // Get the <span> element that closes the modal


// // Function to display the modal
// // Get the modal



// const modal = document.getElementById("myModal");
// const closeBtn = document.querySelector(".close");

// function displayGameOver() {
//     debugger;
//   modal.style.display = "block";
//   inputnumber.disabled = true;
// }

// // Close the modal when the close button is clicked
// closeBtn.addEventListener("click", function () {
//   modal.style.display = "none";

// });

// // Close the modal when the user clicks outside of it
// window.addEventListener("click", function (event) {
//   if (event.target === modal) {
//     modal.style.display = "none";

//   }

// });

// if (lastResultdecrease) {
//     console.log('message')
//     displayGameOver();
   
// }
// }
// }
//   }




let randomNumber = parseInt(Math.random()*100+1);
let submit    = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startover = document.querySelector('.resultParas');
let lowOrHi   =    document.querySelector('.lowOrHi');
const p = document.createElement('p');
let prevGues = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
submit.addEventListener('click' , function(e) {
e.preventDefault();

const guess = parseInt(userInput.value)
validateGuess(guess);
});
newGame();
}

//////validate 1-100 check value
function validateGuess(guess) {
//
debugger;
if(isNaN(guess))
{
alert('Please Enter A valid Number');
userInput.value = '';
} else if(guess<1) 
{
  alert('Please Enter A valid less 1 number');
  userInput.value = '';
}
else if(guess>100) {
  alert('Please Enter A Number less Than 100');
  userInput.value = '';
  
}

else
{
  debugger;
  prevGues.push(guess);  //prevgues Number 

////NumGuess number check

if(numGuess === 11) {
  debugger;
  displayGuess(guess)
  dispalyMessage(`Game Over Random Number was ${randomNumber}`)
  endGame();
 
}
else {
  displayGuess(guess);
  checkGuess(guess);
}
}
}

/////// Low And Heigh Number

function checkGuess(guess)
{
///
debugger;
if(guess===randomNumber) {
  dispalyMessage('You Guessed it Right');
} else if (guess < randomNumber) {
dispalyMessage('Number is Too Low');
}
else if(guess>randomNumber) {
  dispalyMessage('Number is Too High');
}
}

////Value clean Message
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;  //Value Store
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}` 
}

function dispalyMessage(message) {
//
debugger;
lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
  //
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');  
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startover.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  //
  const newGames = document.querySelector('#newGame')

  newGames.addEventListener('click' , function() {
    randomNumber = parseInt(Math.random()*100+1);
    numGuess =1;
  userInput.value = '';
  guessSlot.innerHTML = '';
  playGame = true;
remaining.innerHTML = '10';
userInput.removeAttribute('disabled');
dispalyMessage('');
p.innerHTML='';
})
}
