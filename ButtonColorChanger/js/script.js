function testFunc(){
    console.log("Stuff happened");
}

const button = document.getElementById("myButton");

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = randomColor;
}