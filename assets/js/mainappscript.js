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
    theAllTasksArray.push(newTaskData);
}