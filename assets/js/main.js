let exitBtn = document.getElementById("exit-btn"),
    taskInput = document.getElementById("my-task"),
    addTaskBtn = document.querySelector(".add-btn"),
    myAllTasks = document.querySelector(".my-all-tasks"),
    errorMessage = document.querySelector(".error-message"),
    theAllTasksArray = [];

if (window.localStorage.getItem("my-tasks")) {
    theAllTasksArray = JSON.parse(window.localStorage.getItem("my-tasks"));
    showTasksOnPage(theAllTasksArray);
}

window.addEventListener("load", function () {
    taskInput.focus();
    initDateTime();
});

exitBtn.addEventListener("click", function () {
    window.open("seeyoulater.html", "_self");
});

taskInput.addEventListener("keydown", function (enterKey) {
    if (enterKey.key === "Enter") {
        addTaskBtn.click();
    }
});

addTaskBtn.addEventListener("click", function () {
    errorMessage.innerText = "";
    if (taskInput.value.trim() === "") {
        errorMessage.innerText = "Please enter your task in the empty field before clicking on 'Add New Task'.";
        taskInput.focus();
    } else if (taskInput.value.length > 70) {
        errorMessage.innerText = "Sorry, but you can only enter up to 70 characters.";
        taskInput.value = "";
        taskInput.focus();
    } else if (taskInput.value !== "" && taskInput.value.length < 71) {
        myNewTasks(taskInput.value);
        errorMessage.innerText = "";
        taskInput.value = "";
    }
});

myAllTasks.addEventListener("click", function (e) {
    errorMessage.innerText = "";
    const target = e.target;
    // Delete
    if (target.classList.contains("del-btn")) {
        const parent = target.parentElement;
        const id = parent.getAttribute("task-id");
        parent.remove();
        removeTaskFromLS(id);
        taskInput.focus();
    }
    // Toggle Done/Undone
    if (target.classList.contains("done-btn")) {
        const parent = target.parentElement;
        const id = Number(parent.getAttribute('task-id'));
        const task = theAllTasksArray.find(t => t.id === id);
        if (!task) return;
        task.done = !task.done;
        // update UI
        const textEl = parent.querySelector('.task-text');
        if (task.done) {
            textEl.classList.add('completed');
            target.value = 'Undone';
            target.classList.add('done-active');
        } else {
            textEl.classList.remove('completed');
            target.value = 'Done';
            target.classList.remove('done-active');
        }
        window.localStorage.setItem('my-tasks', JSON.stringify(theAllTasksArray));
        taskInput.focus();
    }

    if (theAllTasksArray.length <= 1 && document.querySelector(".clear-all-btn")) {
        document.querySelector(".clear-all-btn").style.display = "none";
    }
});

function showTasksOnPage(theTasksArray) {
    myAllTasks.innerHTML = "";
    theTasksArray.forEach((newTaskData) => {
        let eachTaskDiv = document.createElement("div");
        eachTaskDiv.className = "the-new-task";
        eachTaskDiv.setAttribute("task-id", newTaskData.id);

        // Delete button (left)
        let delBtn = document.createElement("input");
        delBtn.className = "del-btn";
        delBtn.setAttribute("type", "submit");
        delBtn.setAttribute("value", "Delete");
        eachTaskDiv.appendChild(delBtn);

        // Task text (center)
        let taskText = document.createElement("div");
        taskText.className = "task-text";
        taskText.textContent = newTaskData.content;
        if (newTaskData.done) taskText.classList.add('completed');
        eachTaskDiv.appendChild(taskText);

        // Done toggle button (right)
        let doneBtn = document.createElement("input");
        doneBtn.className = "done-btn";
        doneBtn.setAttribute("type", "button");
        doneBtn.setAttribute("value", newTaskData.done ? "Undone" : "Done");
        if (newTaskData.done) doneBtn.classList.add('done-active');
        eachTaskDiv.appendChild(doneBtn);

        myAllTasks.appendChild(eachTaskDiv);

        taskInput.focus();
    });

    if (theTasksArray.length >= 2) {
        let clearAllBtn = document.createElement("input");
        clearAllBtn.classList = "clear-all-btn";
        clearAllBtn.setAttribute("type", "submit");
        clearAllBtn.setAttribute("value", "Clear All");
        myAllTasks.appendChild(clearAllBtn);

        clearAllBtn.addEventListener("click", function () {
            errorMessage.innerText = "";
            myAllTasks.innerHTML = "";
            window.localStorage.clear();
            theAllTasksArray = [];
            taskInput.focus();
        });
    }
}

function myNewTasks(taskContent) {
    let newTaskData = {
        id: Math.floor(Math.random() * 1e7),
        content: taskContent,
        done: false,
    };
    if (newTaskData.content !== "") {
        theAllTasksArray.push(newTaskData);
    }
    showTasksOnPage(theAllTasksArray);
    window.localStorage.setItem("my-tasks", JSON.stringify(theAllTasksArray));
}

function removeTaskFromLS(theTaskID) {
    theAllTasksArray = theAllTasksArray.filter(function (currentTasksData) {
        return currentTasksData.id !== Number(theTaskID);
    });
    window.localStorage.setItem("my-tasks", JSON.stringify(theAllTasksArray));
}

function goToTimer() {
    window.open("timer.html", "_self");
}
