// Variables to store the start time, elapsed time, and timer interval
var startTime;
var elapsedTime = 0;
var timerInterval;

// Function to start the stopwatch
function start() {
  // Store the current time minus the elapsed time
  startTime = Date.now() - elapsedTime;
  // Start the timer interval with a 10ms interval
  timerInterval = setInterval(updateTime, 10);
}

// Function to update the elapsed time and display it
function updateTime() {
  // Get the current time
  var currentTime = Date.now();
  // Calculate the elapsed time by subtracting the start time
  elapsedTime = currentTime - startTime;
  // Display the elapsed time
  displayTime(elapsedTime);
}

// Function to format and display the elapsed time
function displayTime(time) {
  // Calculate the milliseconds, seconds, minutes, and hours
  var milliseconds = Math.floor((time % 1000) / 10);
  var seconds = Math.floor((time / 1000) % 60);
  var minutes = Math.floor((time / (1000 * 60)) % 60);
  var hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  // Create a formatted time string with leading zeros
  var formattedTime =
    pad(hours) + ":" +
    pad(minutes) + ":" +
    pad(seconds) + ":" +
    pad(milliseconds);

  // Update the stopwatch display with the formatted time
  document.getElementById("stopwatch").textContent = formattedTime;
}

// Function to pad a number with leading zeros if necessary
function pad(number) {
  return number.toString().padStart(2, "0");
}

// Function to stop the stopwatch
function stop() {
  // Clear the timer interval to stop the stopwatch
  clearInterval(timerInterval);
}

// Function to reset the stopwatch
function reset() {
  // Clear the timer interval to stop the stopwatch
  clearInterval(timerInterval);
  // Reset the elapsed time to 0
  elapsedTime = 0;
  // Display the reset time
  displayTime(elapsedTime);
}
