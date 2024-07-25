let timer;
let isRunning = false;
let workTime = 25 * 60; // 25 minutes in seconds
let breakTime = 5 * 60; // 5 minutes in seconds
let currentTime = workTime;

const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

const updateDisplay = () => {
  let minutes = Math.floor(currentTime / 60);
  let seconds = currentTime % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const startTimer = () => {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    currentTime--;
    if (currentTime < 0) {
      clearInterval(timer);
      isRunning = false;
      currentTime = currentTime === workTime ? breakTime : workTime;
      alert(currentTime === workTime ? "Time for a break!" : "Back to work!");
      startTimer();
    }
    updateDisplay();
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timer);
  isRunning = false;
  currentTime = workTime;
  updateDisplay();
};

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

// Initialize display
updateDisplay();
