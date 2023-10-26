function init() {
    let secretNumber = randomNum();
    let score = 20;
    let highscore = 0;
    let timer;
    let number = document.querySelector('.number');
    let title = document.querySelector('h1');
    let isGameOver = false;

    //Music
    let bgMusic = document.getElementById('bg-sound');
    let gameOver = document.getElementById('gameOver-sound');
    let gameOver2 = document.getElementById('gameOver2-sound');
    let sec_3 = document.getElementById('3Sec-sound');

    //bg sound
    window.addEventListener("DOMContentLoaded", event => {
        let bgMusic = document.getElementById('bg-sound');
        bgMusic.volume = 0.1;
        bgMusic.play();
    });

    function blink(x,color) {
        let myInterval;

        if (!isGameOver) {
            // Guess number
            const myInterval = setInterval(setColor, x);
            function setColor() {
                number.style.backgroundColor = number.style.backgroundColor == "green" ? color : "green";
            }
        } else {
            const myInterval = setInterval(setColor, x);
            function stopColor() {
                clearInterval(myInterval);
            }
        }
    }

    //runs with onit()
    blink(500,'red');

    // Key down event Listener
    document.querySelector('.guess').addEventListener("keydown", function (event) {
        if (event.code === "Enter") {
            console.log("entered");
            execute();
        } else if (event.code === "Escape") {
            console.log("You have run");
            myClear();
        }
    });


    const displayMessage = function (message) {
        document.querySelector('.message').textContent = message;
    };

    function myClear() {
        console.log("Cleaning");
        document.querySelector('.guess').value = "";
    }

    function randomNum() {
        return (Math.floor(Math.random() * 20) + 1);
    }
    function startTimer() {  //added
        let seconds = 5;

        function countdown() {
            if (seconds >= 0) {
                document.querySelector('.timer').textContent = seconds;
                seconds--;
                if (seconds == 2) {
                    sec_3.play();
                    blink(100,"#9c0000");
                }
            } else {
                // work on removing blink after gameOver?
                // blink(0);
                isGameOver = true;

                bgMusic.pause();
                gameOver.play();
                gameOver2.play();
                gameOver2.volume = 0.5;
                displayMessage('Time\'s up! Better luck next time.');
                document.querySelector('.score').textContent = 0;
                document.querySelector('.guess').disabled = true;
                clearInterval(timer)
            }
        }

        countdown();
        timer = setInterval(countdown, 1000);
    }

    function stopTimer() {
        clearInterval(timer);

    }



    function wrongAnimation() {
        number.classList.add('wrongAnime');
        setTimeout(function () {
            number.classList.remove('wrongAnime');
        }, 200)
    }
    function winAnimation() {
        number.classList.add('winAnime');
        setTimeout(function () {
            number.classList.remove('winAnime');
        }, 1000)
    }

    function execute() {
        bgMusic.volume = 0.5;
        bgMusic.play();

        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        console.log("secretNumber is " + secretNumber);

        if (!timer)
            startTimer();

        if (guess < 0 || guess > 20) {
            displayMessage('Invalid input. Please enter a number between 1 and 20.');
            return;  // i added to limit our entry

            // When player wins
        }
        else if (guess === secretNumber) {
            blink(1000,"gold");
            isGameOver = true;
            winAnimation();
            displayMessage('Correct Number!');
            title.style.backgroundColor = 'yellow';
            title.style.color = 'black';
            title.style.fontSize = '32px';
            title.innerText = '🎉Congratulations!🥳';
            number.style.backgroundColor = 'gold';

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

        if (typeof guess === 'number') {
            const guessHistory = document.querySelector('.guess-history');
            const listItem = document.createElement('li');
            listItem.innerText = 'Guess #' + score + ': ' + guess;
            guessHistory.appendChild(listItem);
        }

    }

    function playAgain() {
        gameOver.pause();
        gameOver2.pause();
        score = 20;
        secretNumber = randomNum();
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        number.textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('.guess').disabled = false;
        document.querySelector('.timer').innerHTML = 30;
        stopTimer();
    }

    document.querySelector('.check').addEventListener('click', execute);

    document.querySelector('.again').addEventListener('click', playAgain);
}

window.onload = init;