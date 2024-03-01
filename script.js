const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '') {   // hear we are checking if the input box are empty or not 
        alert("You must write something!");    // if it is empty then, it will show the alert message 
    }
    else{                       //after add anything on the list then will go on this else condition
        let li = document.createElement("li");   // creating HTMLelement with the teg line li
        li.innerHTML = inputBox.value;   
        listContainer.appendChild(li);   // displaying the li in "list-container"
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";    // creating cross icon (x) to remove the contain from the list
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
}

listContainer.addEventListener("click", function(e){  // on click it check or uncheck the tasks
    if(e.target.tagName ==="LI") {
        e.target.classList.toggle("checked");// if the checked name is already there then it will remove that checked class because of the "toggle" function
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

// Saving To-Do list tasks on local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function saveTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
saveTask();