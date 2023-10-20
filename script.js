const startButton = document.getElementById ('start-button');
const startPage = document.getElementById ('start-page');
const question = document.getElementById ('question-one');
const questionTwo = document.getElementById ('question-two');
const questionThree = document.getElementById ('question-three');
const questionFour = document.getElementById ('question-four');
const questionFive = document.getElementById ('question-five');
const endPage = document.getElementById ('end-page');
const timerDisplay = document.getElementById ('timer');
const correctButtons = document.querySelectorAll ('correct-button');
const wrongButtons = document.querySelectorAll ('wrong-button');
const correctMessage = document.getElementById ('correct-msg');
const wrongMessage = document.getElementById ('wrong-msg');


let countdown; 

  
let timeLeft = 75;
timerDisplay.textContent = timeLeft;

 countdown = setInterval(function () {
  timeLeft--;
  timerDisplay.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(countdown);
  }
}, 1000);


question.style.display = 'none';
questionTwo.style.display = 'none';
questionThree.style.display = 'none';
questionFour.style.display = 'none';
questionFive.style.display = 'none';
endPage.style.display = 'none';
correctMessage.style.display = 'none';
wrongMessage.style.display = 'none';

startButton.addEventListener('click', startQuiz)

function startQuiz() {
  console.log('question 1');
  startPage.style.display = 'none';
  question.style.display = '';
}

// correctButtons.addEventListener ('click', sendMessage)

// correctButtons.forEach(function(sendCorrectMessage)) {
//   sendCorrectMessage.addEventListener('click', function()){
//     postMessage.textContent = 'Correct!'
//   }
// }

// function sendMessage () {
//   correctMessage.style.display = ''
// }




  
question.addEventListener('click', setQuestion2)


function setQuestion2() {
  console.log('question 2');
  question.style.display = 'none';
  questionTwo.style.display = '';
  // if (onclick correctAnswer1) {
  
  // } else {
    
  // }
}

questionTwo.addEventListener('click', setQuestion3)

function setQuestion3() {
  console.log('question 3');
  questionTwo.style.display = 'none';
  questionThree.style.display = '';
}

questionThree.addEventListener('click', setQuestion4)

function setQuestion4() {
  console.log ('question 4');
  questionThree.style.display = 'none';
  questionFour.style.display = '';
}

questionFour.addEventListener('click', setQuestion5)

function setQuestion5 (){
  console.log ('question 5');
  questionFour.style.display = 'none';
  questionFive.style.display = '';
}

questionFive.addEventListener('click', endQuiz)
  
function endQuiz () {
  console.log ('end');
  questionFive.style.display = 'none';
  endPage.style.display = '';
  // timerDisplay.style.display = 'none';
}
  

// function checkAnswer () {
// if (correctAnswer == true)
//   console.log ('correct answer')
//   alert ('correct')
//   else 
//   console.log ('wrong answer')\
//   alert('wrong')

// }
  

  
  
  
  
  


    
   
    
  







