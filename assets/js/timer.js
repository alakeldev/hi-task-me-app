document.addEventListener("DOMContentLoaded", () => {
  initDateTime();
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

function initDateTime() {
  const dtEl = document.getElementById('datetime');
  if (!dtEl) return;
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  function pad(n){ return String(n).padStart(2,'0'); }
  function update(){
    const now = new Date();
    const day = now.getDate();
    const month = months[now.getMonth()];
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    dtEl.innerHTML = `<div class="clock-time">${hours}:${minutes}</div><div class="clock-date">${day} ${month}</div>`;
  }
  update();
  setInterval(update, 1000);
}
