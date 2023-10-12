// function updateDateTime() {
//   const selectedDate = dateInput.value;
//   const selectedTime = timeInput.value;

//   // Parse the date and time inputs
//   const parsedDate = new Date(selectedDate);
//   const parsedTime = new Date(`1970-01-01T${selectedTime}`);

//   // Format the date and time
//   const formattedDate = parsedDate.toLocaleString("en-US", {
//     month: "short",
//     day: "2-digit",
//     year: "numeric",
//   });
//   const formattedTime = parsedTime.toLocaleString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   });

//   // Combine the formatted date and time
//   const formattedDateTime = `${formattedDate} ${formattedTime}`;

//   return formattedDateTime;
//   console.log("formattedDateTime", formattedDateTime);
// }

function updateDateTime() {
  const selectedDate = dateInput.value;
  const selectedTime = timeInput.value;

  // Combine date and time and set the time zone to "Asia/Kolkata"
  const dateTimeString = `${selectedDate}T${selectedTime}`;
  const parsedDateTime = new Date(dateTimeString + "+05:30"); // Indian Standard Time (IST)

  // Format the date and time
  const formattedDate = parsedDateTime.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const formattedTime = parsedDateTime.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format
  });

  // Combine the formatted date and time
  const formattedDateTime = `${formattedDate} ${formattedTime}`;

  return formattedDateTime;
}

const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const resultInput = document.getElementById("result");

// function startCountdown() {
//   // Get the deadline date from the input element
//   const deadlineInput = document.getElementById("deadline");
//   document.getElementById("demo").innerHTML = "";

//   const deadlineString = updateDateTime();

//   if (deadlineString) {
//     console.log("deadlineString", deadlineString);
//     // Parsing the user input date into a JavaScript Date object
//     let deadline = new Date(deadlineString).getTime();

//     // Calling defined function at a certain interval
//     let x = setInterval(function () {
//       // Getting the current date and time in the required format
//       let now = new Date().getTime();

//       // Calculating the difference
//       let t = deadline - now;

//       // Getting values of hours, minutes, seconds
//       let days = Math.floor(t / (1000 * 60 * 60 * 24)); // Calculate remaining days
//       let hours = Math.floor(t / (1000 * 60 * 60));
//       let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//       let seconds = Math.floor((t % (1000 * 60)) / 1000);

//       // Format hours to ensure it's between 0 and 12
//       hours = hours % 12;

//       // Convert hours to a 12-hour format (0 should be 12)
//       hours = hours === 0 ? 12 : hours;

//       // Show the output time
//       document.getElementById("day").innerHTML = days;
//       document.getElementById("hour").innerHTML = hours;
//       document.getElementById("minute").innerHTML = minutes;
//       document.getElementById("second").innerHTML = seconds;

//       // Show overtime output
//       if (t < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "TIME UP";
//         document.getElementById("day").innerHTML = "0";
//         document.getElementById("hour").innerHTML = "0";
//         document.getElementById("minute").innerHTML = "0";
//         document.getElementById("second").innerHTML = "0";
//       }
//     }, 1000);
//   } else {
//     // Handle the case where the user provided an empty or invalid input.
//     document.getElementById("demo").innerHTML = "Invalid or no input provided.";
//   }
// }

function startCountdown() {
  // Get the deadline date from the input element
  const deadlineInput = document.getElementById("deadline");
  document.getElementById("demo").innerHTML = "";

  const deadlineString = updateDateTime();

  if (deadlineString) {
    console.log("deadlineString", deadlineString);
    // Parsing the user input date into a JavaScript Date object
    let deadline = new Date(deadlineString).getTime();

    // Calling the defined function at a certain interval
    let x = setInterval(function () {
      // Getting the current date and time in the required format
      let now = new Date().getTime();

      // Calculating the difference
      let t = deadline - now;

      // Getting values of hours, minutes, and seconds
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      let hours = Math.floor((t / (1000 * 60 * 60)) % 24); // Use modulo 24 for 24-hour format
      let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((t % (1000 * 60)) / 1000);

      // Show the output time
      document.getElementById("day").innerHTML = days;
      document.getElementById("hour").innerHTML = hours;
      document.getElementById("minute").innerHTML = minutes;
      document.getElementById("second").innerHTML = seconds;

      // Show overtime output
      if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML = "0";
        document.getElementById("hour").innerHTML = "0";
        document.getElementById("minute").innerHTML = "0";
        document.getElementById("second").innerHTML = "0";
      }
    }, 1000);
  } else {
    // Handle the case where the user provided an empty or invalid input.
    document.getElementById("demo").innerHTML = "Invalid or no input provided.";
  }
}
