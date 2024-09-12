function testFunc(){
    console.log("Stuff happened");
}

const body = document.querySelector("body");

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = randomColor;
}

function yellowButton() {
    removeColors();
    body.classList.add("yellowBackground");
    
}

function redButton() {
    removeColors();
    body.classList.add("redBackground");
}

function blueButton() {
    removeColors();
    body.classList.add("blueBackground");
}

function removeColors() {
    body.style.removeProperty('background');
    body.classList.remove('yellowBackground');
    body.classList.remove("redBackground");
    body.classList.remove("blueBackground"); 
}