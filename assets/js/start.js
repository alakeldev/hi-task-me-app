let startBtn = document.getElementById("start-btn"),
    closeBtn = document.getElementById("close-btn");

window.addEventListener("load", function () {
    startBtn.focus();
});

startBtn.addEventListener("click", function () {
    window.open("todolistpage.html", "_self");
});

closeBtn.addEventListener("click", function () {
    window.open("seeyoulater.html", "_self");
    
    setTimeout(function () {
        navigator.app.exitApp();
    }, 2000);
});
