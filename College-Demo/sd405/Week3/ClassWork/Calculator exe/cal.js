let calDisplay = document.querySelector("#cal-display");
calDisplay.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        console.log("entered");
        execute();
    } else if (event.code === "Escape") {
        console.log("You have run");
        myClear();
    }
});
function appendText(num) {
    let myText = document.querySelector('textarea');
    myText.value += num;
}
function myClear() {
    console.log("Cleaning");
    document.querySelector('textarea').value = "";
}
function execute() {
    let calculation = document.querySelector('textarea').value;
    let myText = document.querySelector('textarea');
    let number1 = number2 = 0.0;
    let result = 0.0;
    for (let x of calculation) {
        if (x === '*' || x === '/' || x === '+' || x === '-') {

            let hand = calculation.split(x); // x is operator
            number1 = parseFloat(hand[0]);  //  LHS
            number2 = parseFloat(hand[1]);  //  RHS
            // console.log(`Number 1 = ${number1}  and Number 2 = ${number2}`);
            if (x === "*") {   //Respected operation
                result = number1 * number2;
            } else if (x === "/") {
                result = number1 / number2;
            } else if (x === "+") {
                result = number1 + number2;
            } else {
                result = number1 - number2;
            }
            myText.value = result;
            return;
        }
    }
}

// function onit() {
// }

// window.onload = onit;

