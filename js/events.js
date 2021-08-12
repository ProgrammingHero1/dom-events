function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle blue button click by setting function name

const blueButton = document.getElementById('make-blue-button');
// just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// handle event using anonymous function
const greenButton = document.getElementById('make-green-button');
// anonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// handle by using add eventlisenter
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// addEventListener 
const hotPinkButton = document.getElementById('make-hotpink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

// direct shortcut
document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})