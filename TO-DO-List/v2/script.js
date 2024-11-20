const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addNew = document.querySelector(".newThing");

function addTask() {
  if (inputBox.value === "") {
    alert("Add a task");
  } else {
    let li = document.createElement("li"); // creates an empty li element
    li.innerHTML = inputBox.value; // this adds text from input field to the li just created
    listContainer.appendChild(li); //this adds the li to the listContainer which is linked to the list-container id on the html
    let span = document.createElement("span"); //span is just a container for things
    span.innerHTML = "\u00d7"; //this is the X symbol
    li.appendChild(span); //this will add the X symbol to the end of every li element
  }
  inputBox.value = ""; //this empties the input field after adding task
  saveData();
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

listContainer.addEventListener(
  "click",
  function (e) {
    //Not sure, but I think 'e' becomes either the li or span element in this function
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); // if you click on LI, it will toggle the checked class which is line thru grayed out and includes the checked image from images
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); // if the element is a span, which is the X right now, it will delete the element, in this case li
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); //this stores data to the browser
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data"); //this calls the data
}
showTask(); //invokes the calling of data
