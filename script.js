const startButton = document.getElementById ('start-button');
const startPage = document.getElementById ('start-page');
const question = document.getElementById ('question-one');
const questionTwo = document.getElementById ('question-two');
const questionThree = document.getElementById ('question-three');
const questionFour = document.getElementById ('question-four');
const questionFive = document.getElementById ('question-five');
const endPage = document.getElementById ('end-page');



question.style.display = 'none';
questionTwo.style.display = 'none';
questionThree.style.display = 'none';
questionFour.style.display = 'none';
questionFive.style.display = 'none';
endPage.style.display = 'none';

startButton.addEventListener('click', startQuiz)

function startQuiz() {
  console.log('question 1');
  startPage.style.display = 'none';
  question.style.display = '';
}
  
question.addEventListener('click', setQuestion2)

function setQuestion2() {
  console.log('question 2');
  question.style.display = 'none';
  questionTwo.style.display = '';
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
}
  

  
  
  
  
  
  
  //   // const startButton = document.getElementById('#start-button');
  //   const timerDisplay = document.getElementById('#timer');
  //   const pageOne = document.getElementById ('#intro');
  //   const questionOne = document.getElementById ('#question-one');
  
    
  //   let countdown; 

  //   // questionOne.style.display = 'none';

  
  //   startButton.addEventListener('click', startQuiz);

  
  //   function startQuiz() {
  //     console.log ('started')
  //     startButton.style.display = 'none';
  //     pageOne.style.display = 'none';
  //     timerDisplay.style.display = 'block';
  //     questionOne.style.display = '';



  //     // q1.style.display = '';

    

      // const question1 [
      //   { 
      //     question: 'Commonly used data types do NOT include:',
      //     answers: [
      //       { text: "strings", correct: false },
      //       { text: "booleans", correct: false },
      //       { text: "alerts", correct: true },
      //       { text: "numbers", correct: false },
      //     ]
      //   }
  //     ]


  //   // correct.addEventListener(click, setNextQuestion);

  //   // function setNextQuestion() {
  //   //   q1.style.display = 'none';
  //   //   q2.style.display = '';
  //   // }
  
  //     let timeLeft = 75;
  //     timerDisplay.textContent = timeLeft;
  
  //     countdown = setInterval(function () {
  //       timeLeft--;
  //       timerDisplay.textContent = timeLeft;
  //       if (timeLeft <= 0) {
  //         clearInterval(countdown);
  //       }
  //     }, 1000);
  //   }
  // });







