const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
function startColorSwitching() {
  startButton.disabled = true;
  intervalId = setInterval(changeBodyColor, 1000);
}
function stopColorSwitching() {
  startButton.disabled = false;
  clearInterval(intervalId);
}

startButton.addEventListener('click', startColorSwitching);
stopButton.addEventListener('click', stopColorSwitching);