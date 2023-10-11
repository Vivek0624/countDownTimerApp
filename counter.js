function startCountdown() {
  // Get the deadline date from the input element
  const deadlineInput = document.getElementById('deadline');
  const deadlineString = deadlineInput.value;

  if (deadlineString) {
    // Parsing the user input date into a JavaScript Date object
    let deadline = new Date(deadlineString).getTime();

    // Calling defined function at a certain interval
    let x = setInterval(function () {
      // Getting the current date and time in the required format
      let now = new Date().getTime();

      // Calculating the difference
      let t = deadline - now;

      // Getting values of days, hours, minutes, seconds
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((t % (1000 * 60)) / 1000);

      // Show the output time
      document.getElementById('day').innerHTML = days;
      document.getElementById('hour').innerHTML = hours;
      document.getElementById('minute').innerHTML = minutes;
      document.getElementById('second').innerHTML = seconds;

      // Show overtime output
      if (t < 0) {
        clearInterval(x);
        document.getElementById('demo').innerHTML = 'TIME UP';
        document.getElementById('day').innerHTML = '0';
        document.getElementById('hour').innerHTML = '0';
        document.getElementById('minute').innerHTML = '0';
        document.getElementById('second').innerHTML = '0';
      }
    }, 1000);
  } else {
    // Handle the case where the user provided an empty or invalid input.
    document.getElementById('demo').innerHTML = 'Invalid or no input provided.';
  }
}
