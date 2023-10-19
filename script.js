document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('#start-button');
    const timerDisplay = document.querySelector('#timer');
    const pageOne = document.querySelector ('#intro');
    const questionOne = document.querySelector (#question-one);
    // const q1 = document.querySelector ('#q1');
    // const q2 = document.querySelector ('#q2');
    // const q3 = document.querySelector ('#q3');
    // const q4 = document.querySelector ('#q4');
    // const q5 = document.querySelector ('#q5');
    // const q6 = document.querySelector ('#q6');
    // const answerButton = document.querySelector ('.answer-button');
    // const correct = document.querySelector ('#correct-1')
   
    // const answer = document.getElementById ();
  

    let countdown; 

    // q1.style.display = 'none';
    // q2.style.display = 'none';
    // q3.style.display = 'none';
    // q4.style.display = 'none';
    // q5.style.display = 'none';
    // q6.style.display = 'none';

  questionOne.style.display = 'none';

  
    startButton.addEventListener('click', startQuiz);

  
    function startQuiz() {
      startButton.style.display = 'none';
      pageOne.style.display = 'none';
      timerDisplay.style.display = 'block';
      question1.style.display = '';



      // q1.style.display = '';

    

      const question1 [
        { 
          question: "Commonly used data types do NOT include:",
          answers: [
            { text: "strings", correct: false },
            { text: "booleans", correct: false },
            { text: "alerts", correct: true },
            { text: "numbers", correct: false },
          ]
        }
      ]


    // correct.addEventListener(click, setNextQuestion);

    // function setNextQuestion() {
    //   q1.style.display = 'none';
    //   q2.style.display = '';
    // }
  
      let timeLeft = 75;
      timerDisplay.textContent = timeLeft;
  
      countdown = setInterval(function () {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(countdown);
        }
      }, 1000);
    }
  });







