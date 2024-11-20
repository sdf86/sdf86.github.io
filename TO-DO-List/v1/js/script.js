let tasks = ["Eat", "Code", "Exercise", "Go to work"];
let ul = document.getElementById("todo-list");

for (let i = 0; i < tasks.length; i++) {
  let task = tasks[i];
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(task));
  ul.appendChild(li);

  console.log(i);
}

function newTask() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("userInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Enter a task");
  } else {
    document.getElementById("todo-list").appendChild(li);
  }
  document.getElementById("userInput").value = "";
}

// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

console.log("hi");
console.log("yo");
