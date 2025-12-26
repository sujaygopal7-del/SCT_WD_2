let startTime, updatedTime, difference, tInterval;
let running = false;

const display = document.querySelector(".timer");
const laps = document.getElementById("laps");

document.getElementById("start").addEventListener("click", () => {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    tInterval = setInterval(runTimer, 100); 
    running = true;
  }
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(tInterval);
  running = false;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(tInterval);
  running = false;
  difference = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
  if (running) {
    let li = document.createElement("li");
    li.textContent = display.textContent;
    laps.appendChild(li);
  }
});

function runTimer() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor(difference / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num < 10 ? "0" + num : num;
}