//div   // Global Var
let myDiv = document.createElement("div");
myDiv.setAttribute("class", "form");

function init() {
    createBlocks();
}


function createBlocks() {
    createName();
    createPassword();
    createSelect();
    createRadio();
}
function createName() {
    //name : label
    //name : input (Default)
    let name = document.createElement('label');
    name.innerText = "Name:";
    name.setAttribute("for", "name");

    let nameInput = document.createElement('input');
    nameInput.setAttribute("id", "name");
    myDiv.append(name);
    myDiv.append(nameInput);

    document.querySelector('.container').appendChild(myDiv);
}
function createPassword() {
    //password
    let password = document.createElement('label');
    password.innerHTML = "Password: "
    //Input 
    //.type = "Password"
    let inputPassword = document.createElement('input');
    inputPassword.type = "password";


    myDiv.append(document.createElement('br'));
    myDiv.append(password);
    myDiv.append(inputPassword);
}
function createSelect() {
    let selectDiv = document.createElement("div");
    selectDiv.innerHTML = `
    <div class="selection">
    <label for="skills" >Skillset:</label>
    <select name="skills" id="skills" multiple>
        <option value="js">javascript</option>
        <option value="java" selected>java</option>
        <option value="python">python</option>
        <option value="react">react</option>
    </select>
    </div>
    `;
    myDiv.append(selectDiv);
}
function createRadio() {
    let radioDiv = document.createElement('div');
    radioDiv.innerHTML= `
    <div class="selection-2">
        <label for="country" >Country:</label>
            <input name="" type="radio" value="us">US</input >
            <input name="" type="radio" value="nepal" selected>NPL</input >
            <input name="" type="radio" value="uk">UK</input >
            <input name="" type="radio" value="japan">JPN</input >
    </div>
    `;
    myDiv.append(radioDiv);
}

function selectSelection(){
    let skills = document.querySelectorAll('#skills option:checked')
    let skillValues = [];
    for (let skill of skills) {
        skillValues.push(skill.value);
    }
    console.log("skills are: " + skillValues);
}

function selectRadio() {
    let countries = document.querySelectorAll(".selection-2 input:checked");
    let selected = [];
    for (let country of countries) {
        selected.push(country.value);
    }
    console.log("Selected Items:" + selected);
}

document.querySelector("#submit").addEventListener('click', submitToServer);   

function submitToServer(){
    selectSelection();
    selectRadio();
}

window.onload = init;
