document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const timerDisplay = document.getElementById('timer');
    const pageOne = document.getElementById ('intro');
    const questionOne = document.getElementById ('question1');
  
    let countdown; 

    questionOne.style.display = 'none';
  
    startButton.addEventListener('click', startQuiz);
  
    function startQuiz() {
      startButton.style.display = 'none';
      pageOne.style.display = 'none';
      timerDisplay.style.display = 'block';
      questionOne.style.display = ''
      // console.log ("started")
  
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







