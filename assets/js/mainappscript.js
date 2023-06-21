// declare Variables and set their values from the elements inside todolistpage.html
let exitBtn = document.getElementById("exit-btn"),
    taskInput = document.getElementById("my-task"),
    addTaskBtn = document.querySelector(".add-btn"),
    myAllTasks = document.querySelector(".my-all-tasks");

// Create a function works after page loaded that make auto focus on the input(new task field).
window.onload = function () {
    taskInput.focus();
};

/* Add event listener (click) that proceed with a function to exit the main page app when the user clicked
on the Exit button and lead the user to (see you later page) */
exitBtn.addEventListener("click", function () {
    window.open("seeyoulater.html", "_self");
});

// Creat new Empty Array to Add and Store the new Tasks one after one
let theAllTasksArray = [];

// check if the local storage has tasks stored inside it / if found tasks inside it so it will set those tasks to theAllTasksArray(array)
if (window.localStorage.getItem("my-tasks")) {
    theAllTasksArray = JSON.parse(window.localStorage.getItem("my-tasks"));
}

/* Call getTasksFromLS function - that takes the data from local storage also inside this function we call 
another function that showing these data/tasks on the page */
getTasksFromLS();

// addNewTask button -  Anonymous Function will proceed when the user click on the add new task button
addTaskBtn.onclick = function () {
    if (taskInput !== "") {            // if condition checking the new task input that is not empty 
        myNewTasks(taskInput.value);   // Call function that take the user input value ( new task) as a parameter
        taskInput.value = "";          // to Empty the input field after taking its value related to code in previous line
    }
}

// Creat a function that takes the user input (new task) and add it to the empty array theAllTasksArray
function myNewTasks(theCtask) {
    // Creat object to Hold the Task Data and give each one a random ID
    let newTaskData = {
        id: Math.floor(Math.random() * 1e7),             // the ID random number
        content: theCtask,                               // the new task content (it comes from the new task input field(value))
    };
    // Add the new Task to the array (theAllTasksArray) and store it with its random ID
    if (newTaskData.content !== "") {     // I added this condition because the empty content task was added only on local storage
        theAllTasksArray.push(newTaskData);    // and I don't want to added it empty if the input new task field(content) was empty!!
    }
    // call the showTasksOnPage function that showing insde myAllTasks div each task added. (all inside the main page App)
    showTasksOnPage(theAllTasksArray);
    // call the addTasksToLocalStorage function that showing and adding the Tasks to Local Storage (LS).
    addTasksToLS(theAllTasksArray);
}

// Creat The function that showing the tasks on the page
function showTasksOnPage(theTasks) {
    // Empty div to avoid the repetition of add same task
    myAllTasks.innerHTML = "";
    // make looping on the array of tasks
    theTasks.forEach((newTaskData) => {
        // Create main div to contain each new added task
        let eachTaskDiv = document.createElement("div");
        eachTaskDiv.className = "the-new-task";             // set value to class attribute in the previous div
        // Create custome attribute and set its value from random id of the newTaskData Object
        eachTaskDiv.setAttribute("task-id", newTaskData.id);
        // Create Variable that store the text task content from the newTaskData Object
        let taskTextContent = document.createTextNode(newTaskData.content);
        // add the text task content to the new created div
        eachTaskDiv.appendChild(taskTextContent);

        // Create Delete Button after check that the new tesk input is not empty
        if (newTaskData.content !== "") {
            let delBtn = document.createElement("input");
            delBtn.className = "del-btn";                   // set value to class attribute in delete button
            delBtn.setAttribute("type", "submit");          // set value for type attribute in delete button
            delBtn.setAttribute("value", "Delete");         // set value for value attribute in delete button
            // Add the delete button (input type:submit) inside the main created div (eachTaskDiv)
            eachTaskDiv.appendChild(delBtn);
            // Add the created div(eachTaskDiv) to the Tasks div (Main Container)
            myAllTasks.appendChild(eachTaskDiv);
        }
        taskInput.focus();  // Auto focus again on the input(new task field) after showed/added the new task on page
    });
    if (theAllTasksArray.length >= 2) {     // Condition to check if theAllTasksArray has two tasks or more to Create/Show the clear all button
        let clearAllBtn = document.createElement("input");
        clearAllBtn.classList = "clear-all-btn";            // set value to class attribute in clear all button
        clearAllBtn.setAttribute("type", "submit");         // set value to type attribute in clear all button
        clearAllBtn.setAttribute("value", "Clear All");     // set value to value attribute in clear all button
        // Add the Clear All button (input type: submit) to the Tasks div (Main Container)
        myAllTasks.appendChild(clearAllBtn);
    }
}

// Create Function that adding the tasks to Local Storage
function addTasksToLS(theTasks) {
    window.localStorage.setItem("my-tasks", JSON.stringify(theTasks));
}

// Creat Function that getting the Data/Tasks from Local Storage
function getTasksFromLS() {
    let myTasks = window.localStorage.getItem("my-tasks");
    if (myTasks) {
        let tasks = JSON.parse(myTasks);
        showTasksOnPage(tasks);   // call function that showing the tasks but set its parameter the data/tasks from local storage
    }
}

//Add event listener on click to proceed with a Function to make each delete button on each added task is working and removing the related task
myAllTasks.addEventListener("click", function (myDel) {
    if (myDel.target.classList.contains("del-btn")) {       // Check if it's delete button
        myDel.target.parentElement.remove();    // Remove the task => the parent element of delete button {the div with class (".the-new-task")}

        removeTaskFromLS(myDel.target.parentElement.getAttribute("task-id"));   //Call function to remove the Task from Local Storage
    }

    if (theAllTasksArray.length <= 1) {     // Condition to check if theAllTasksArray reached to one task or none to hide the clear all button
        document.querySelector(".clear-all-btn").style.display = "none";         // set Clear All button (display: none;)
    }
})

// Creat a Function to Delete the related task from Local Storage
function removeTaskFromLS(theTask) {
    theAllTasksArray = theAllTasksArray.filter(function (newTaskData) {
        return newTaskData.id != theTask;
    });
    addTasksToLS(theAllTasksArray);     // the new value of array pass as an argument to update the tasks on LS
}
