// declare Variables and set their values from the elements inside todolistpage.html
let exitBtn = document.getElementById("exit-btn"),
    taskInput = document.getElementById("my-task"),
    addTaskBtn = document.querySelector(".add-btn"),
    myAllTasks = document.querySelector(".my-all-tasks");

/* Add event listener (click) that proceed with a function to exit the main page app when the user clicked
on the Exit button and lead the user to (see you later page) */
exitBtn.addEventListener("click", function () {
    window.open("seeyoulater.html", "_self");
});