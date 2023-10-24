function init() {
    let secretNumber = randomNum();
    let score = 20;
    let highscore = 0;


    const displayMessage = function (message) {
        document.querySelector('.message').textContent = message;
    };

    function randomNum (){
        return(Math.floor(Math.random() * 20) + 1);
    }

    document.querySelector('.check').addEventListener('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        console.log("secretNumber is " + secretNumber);

        // When there is no input
        if (!guess) {
            displayMessage('Invalid Number!');

            // When player wins
        } else if (guess === secretNumber) {
            displayMessage('Correct Number!');
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

            // When guess is wrong
        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('Better Luck Next Time!');
                document.querySelector('.score').textContent = 0;
            }
        }

    });

    document.querySelector('.again').addEventListener('click', function () {
        score = 20;
        secretNumber = randomNum();
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    });

}



window.onload = init;
