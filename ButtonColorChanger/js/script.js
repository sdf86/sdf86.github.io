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
    body.style.removeProperty('background');
    body.classList.remove("redBackground")
    body.classList.remove("blueBackground")
    body.classList.add("yellowBackground");
    
}

function redButton() {
    body.style.removeProperty('background');
    body.classList.remove("yellowBackground")
    body.classList.remove("blueBackground")
    body.classList.remove("noColor")
    body.classList.add("redBackground");
}

function blueButton() {
    body.style.removeProperty('background');
    body.classList.remove("yellowBackground")
    body.classList.remove("redBackground")
    body.classList.remove("noColor")
    body.classList.add("blueBackground");
}

function resetButton() {
    body.style.removeProperty('background');
    body.classList.remove("yellowBackground")
    body.classList.remove("redBackground")
    body.classList.remove("blueBackground")
    body.classList.add('noColor');
}
