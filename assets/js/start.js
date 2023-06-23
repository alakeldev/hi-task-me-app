// Declare the variables and Set their values from the elements inside index.html
let startBtn = document.getElementById("start-btn"),
    closeBtn = document.getElementById("close-btn");

// Add event listener ("click") so after clicked on start button it's runnung a function that open the next app page.
startBtn.addEventListener("click", function () {
    window.open("todolistpage.html", "_self");
});

// Add event listener ("click") so after clicked on close button it's runnung a function that close the window app.
closeBtn.addEventListener("click", function () {
    window.open("seeyoulater.html", "_self");
    window.close();
});