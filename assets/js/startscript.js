// Declare variables and set the two buttons inside start page to these variables
let startBtn = document.getElementById("start-btn"),
    exitBtn = document.getElementById("close-btn");

// Add event listener (click) that proceed with a function to open the next app page when the user clicked on the Start button
startBtn.addEventListener("click", function () {
    window.open("todolistpage.html", "_self");
});
// Add event listener (click) that proceed with a function to close the app when the user clicked on the Exit button
exitBtn.addEventListener("click", function () {
    window.open("seeyoulater.html", "_self");
    window.close();
});