document.addEventListener("DOMContentLoaded", () => {
  let seconds = 0;
  let timer = null;
  let isRunning = false;

  const timeEl = document.getElementById("time");
  const startPauseBtn = document.getElementById("startPauseBtn");

  function formatTime(sec) {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const secondsLeft = sec % 60;

    const hStr = String(hours).padStart(2, "0");
    const mStr = String(minutes).padStart(2, "0");
    const sStr = String(secondsLeft).padStart(2, "0");

    return `${hStr}:${mStr}:${sStr}`;
  }

  function toggleTimer() {
    if (!isRunning) {
      timer = setInterval(() => {
        seconds++;
        timeEl.innerText = formatTime(seconds);
      }, 1000);

      isRunning = true;
      startPauseBtn.innerText = seconds === 0 ? "Pause" : "Pause";
    } else {
      clearInterval(timer);
      timer = null;
      isRunning = false;
      startPauseBtn.innerText = "Continue";
    }
  }

  function resetTimer() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    isRunning = false;

    timeEl.innerText = "00:00:00";
    startPauseBtn.innerText = "Start";
  }

  window.toggleTimer = toggleTimer;
  window.resetTimer = resetTimer;
  window.backToTasks = function () {
    window.open("todolistpage.html", "_self");
  };
});
