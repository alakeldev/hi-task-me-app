// use onload event on body element and set the anonymous function
document.body.onload = function () {
    // Declaring the Variables and get the elements on html page through its IDs
    let startBtn = document.getElementById("start-btn"),
        firstExitBtn = document.getElementById("first-exit-btn");
    /* The two IFs below are to checking whether the startBtn and firstExitBtn variables are defined. If they are defined, 
    it sets the onclick event of each button to a function that opens a new window and then closes the current window.*/
    if (startBtn) {
        startBtn.onclick = function () {
            window.open("todolistpage.html");
            window.close();
        }
    }
    if (firstExitBtn) {
        firstExitBtn.onclick = function () {
            window.open("seeyoulater.html");
            window.close();
        }
    }
}