document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const timerDisplay = document.getElementById('timer');
    const pageOne = document.getElementById ('intro');
    const q1 = document.getElementById ('q1');
    const q2 = document.getElementById ('q2');
    const q3 = document.getElementById ('q3');
    const q4 = document.getElementById ('q4');
    const q5 = document.getElementById ('q5');
  

    let countdown; 

    q1.style.display = 'none';
    q2.style.display = 'none';
    q3.style.display = 'none';
    q4.style.display = 'none';
    q5.style.display = 'none';

  
    startButton.addEventListener('click', startQuiz);
  
    function startQuiz() {
      startButton.style.display = 'none';
      pageOne.style.display = 'none';
      timerDisplay.style.display = 'block';
      q1.style.display = ''
      // q2.style.display = ''
      // q3.style.display = ''
      // q4.style.display = ''
      // q5.style.display = ''
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







