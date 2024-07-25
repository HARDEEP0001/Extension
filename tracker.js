let totalSteps = 0;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addSteps').addEventListener('click', () => {
    const stepsInput = document.getElementById('stepsInput');
    const steps = parseInt(stepsInput.value, 10);

    if (!isNaN(steps) && steps > 0) {
      totalSteps += steps;
      document.getElementById('stepsDisplay').textContent = `Total Steps: ${totalSteps}`;
      stepsInput.value = '';
    } else {
      alert('Please enter a valid number of steps.');
    }
  });
});
// Timer Variables
let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById('timerDisplay').textContent = 
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (timerInterval) return; // Prevent multiple intervals
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      document.getElementById('timerDisplay').textContent = '00:00';
      alert('Time is up!');
      return;
    }
    timeLeft--;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  timeLeft = 25 * 60;
  updateTimerDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('start').addEventListener('click', () => {
    startTimer();
  });
  document.getElementById('stop').addEventListener('click', () => {
    stopTimer();
  });
  resetTimer(); // Initialize display
});
