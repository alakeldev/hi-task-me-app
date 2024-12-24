// Declare the variables and Set their values from the elements inside index.html
let startBtn = document.getElementById("start-btn"),
    closeBtn = document.getElementById("close-btn");

// Add event listener ("load") so after page fully loaded it's running a function that make auto focus on the start button.
window.addEventListener("load", function () {
    startBtn.focus();
});

// Add event listener ("click") so after clicked on start button it's running a function that open the next app page.
startBtn.addEventListener("click", function () {
    window.open("todolistpage.html", "_self");
});

// Add event listener ("click") so after clicked on close button it's running a function that close the window app.
closeBtn.addEventListener("click", function () {
    window.open("seeyoulater.html", "_self");
    
    setTimeout(function () {
        navigator.app.exitApp();
    }, 2000);
});