function init() {
    let secretNumber = randomNum();
    let score = 20;
    let highscore = 0;
    let timer; 
    let number = document.querySelector('.number');


    const displayMessage = function (message) {
        document.querySelector('.message').textContent = message;
    };

    function randomNum (){
        return(Math.floor(Math.random() * 20) + 1);
    }
    function startTimer() {  //added
        let seconds = 30;

        function countdown() {
            if (seconds >= 0) {
                document.querySelector('.timer').textContent = seconds;
                seconds--;
               
            } else {
                displayMessage('Time\'s up! Better luck next time.');
                document.querySelector('.score').textContent = 0;
                document.querySelector('.guess').disabled = true;
                clearInterval(timer)
            }
        }

        countdown();
        timer = setInterval(countdown, 600);
    }

    function stopTimer() {
        clearInterval(timer);
    }
   
    function wrongAnimation(){
        number.classList.add('wrongAnime');
        number.classList.add('wrongAnime');
        setTimeout(function (){
            number.classList.remove('wrongAnime');
        },200)
    }
    

    document.querySelector('.check').addEventListener('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        console.log("secretNumber is " + secretNumber);
        if (!timer) {
            startTimer(); 
        }

        
        if (guess < 0 || guess > 20) {
            displayMessage('Invalid input. Please enter a number between 1 and 20.');
            return;  // i added to limit our entry
       
              // When player wins
         } 
         else if (guess === secretNumber) {
            displayMessage('Correct Number!');
            number.textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            number.style.width = '30rem';
            var correctSound = document.getElementById('correct-sound');
            correctSound.play();
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
           stopTimer();
            // When guess is wrong
        } else if (guess !== secretNumber) {
            wrongAnimation();
            if (score > 1) {
                displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('Better Luck Next Time!');
                document.querySelector('.score').textContent = 0;
            }
           
            
             var incorrectSound = document.getElementById('incorrect-sound');
            incorrectSound.play();
        }
       
        if (typeof guess === 'number' ) {
            const guessHistory = document.querySelector('.guess-history');
            const listItem = document.createElement('li');
            listItem.innerText = 'Guess #' + score + ': ' + guess;
            guessHistory.appendChild(listItem);
        }
        
    });

    document.querySelector('.again').addEventListener('click', function () {
        score = 20;
        secretNumber = randomNum();
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        number.textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        number.style.width = '15rem';
        document.querySelector('.guess').disabled = false;
       
        document.querySelector('.timer').innerHTML=20;
        startTimer(20);
    });
   

    document.querySelector('.sound-toggle').addEventListener('click', function() {
        isSoundOn = !isSoundOn;
        const bgMusic = document.getElementById('bg-music');
        if (isSoundOn) {
            bgMusic.play();
        } else {
            bgMusic.pause();
        }
    });

    const bgMusic = document.getElementById('bg-music');
    bgMusic.volume = 0.2; 
    bgMusic.play();
    

}



window.onload = init;
