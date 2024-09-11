function testFunc(){
    console.log("Stuff happened");
}

//const button = document.getElementById("myButton");

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = randomColor;
}

function yellowButton() {
    let body = document.querySelector("body");
    body.classList.add("yellowBackground");
    //for (let i = 0; i< body.clientHeight; i++) {
       // body.classList.add("yellowBackground")
        //body.style.background = "yellow";
    //};
}


// function yellowButton() {
//     body.classList.add("yellowBackground");
// }


