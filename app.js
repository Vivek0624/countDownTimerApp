// Getting formated date from date string
let deadline = new Date('oct 11, 2023 23:03:00').getTime();

// Calling defined function at certain interval
let x = setInterval(function () {
  // Getting current date and time in required format
  let now = new Date().getTime();

  // Calculating difference
  let t = deadline - now;

  // Getting values of days,hours,minutes, seconds
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

//////////////////////////////////////////////////////////////////////////////////////////////
// let targetDate = new Date();
// targetDate.setHours(targetDate.getHours() + 5);

// function startCountdown() {
//   // Get the deadline date from the input element
//   const deadlineInput = document.getElementById('deadlineInput');
//   const deadlineString = deadlineInput.value;
//   console.log('cliced', deadlineString);

//   if (deadlineString) {
//     // Parsing the user input date into a JavaScript Date object
//     targetDate = new Date(deadlineString);
//     targetDate.setHours(targetDate.getHours() + 5);
//   } else {
//     // Handle the case where the user provided an empty or invalid input.
//     document.getElementById('demo').innerHTML = 'Invalid or no input provided.';
//   }
// }

// function getTimeSegmentElements(segmentElement) {
//   const segmentDisplay = segmentElement.querySelector('.segment-display');
//   const segmentDisplayTop = segmentDisplay.querySelector(
//     '.segment-display__top'
//   );
//   const segmentDisplayBottom = segmentDisplay.querySelector(
//     '.segment-display__bottom'
//   );

//   const segmentOverlay = segmentDisplay.querySelector('.segment-overlay');
//   const segmentOverlayTop = segmentOverlay.querySelector(
//     '.segment-overlay__top'
//   );
//   const segmentOverlayBottom = segmentOverlay.querySelector(
//     '.segment-overlay__bottom'
//   );

//   return {
//     segmentDisplayTop,
//     segmentDisplayBottom,
//     segmentOverlay,
//     segmentOverlayTop,
//     segmentOverlayBottom,
//   };
// }

// function updateSegmentValues(displayElement, overlayElement, value) {
//   displayElement.textContent = value;
//   overlayElement.textContent = value;
// }

// function updateTimeSegment(segmentElement, timeValue) {
//   const segmentElements = getTimeSegmentElements(segmentElement);

//   if (
//     parseInt(segmentElements.segmentDisplayTop.textContent, 10) === timeValue
//   ) {
//     return;
//   }

//   segmentElements.segmentOverlay.classList.add('flip');

//   updateSegmentValues(
//     segmentElements.segmentDisplayTop,
//     segmentElements.segmentOverlayBottom,
//     timeValue
//   );

//   function finishAnimation() {
//     segmentElements.segmentOverlay.classList.remove('flip');
//     updateSegmentValues(
//       segmentElements.segmentDisplayBottom,
//       segmentElements.segmentOverlayTop,
//       timeValue
//     );

//     this.removeEventListener('animationend', finishAnimation);
//   }

//   segmentElements.segmentOverlay.addEventListener(
//     'animationend',
//     finishAnimation
//   );
// }

// function updateTimeSection(sectionID, timeValue) {
//   const firstNumber = Math.floor(timeValue / 10) || 0;
//   const secondNumber = timeValue % 10 || 0;
//   const sectionElement = document.getElementById(sectionID);
//   const timeSegments = sectionElement.querySelectorAll('.time-segment');

//   updateTimeSegment(timeSegments[0], firstNumber);
//   updateTimeSegment(timeSegments[1], secondNumber);
// }

// function getTimeRemaining(targetDateTime) {
//   console.log('targetDateTime', targetDateTime);
//   const nowTime = Date.now();
//   const complete = nowTime >= targetDateTime;

//   if (complete) {
//     return {
//       complete,
//       seconds: 0,
//       minutes: 0,
//       hours: 0,
//     };
//   }

//   const secondsRemaining = Math.floor((targetDateTime - nowTime) / 1000);
//   const hours = Math.floor(secondsRemaining / 60 / 60);
//   const minutes = Math.floor(secondsRemaining / 60) - hours * 60;
//   const seconds = secondsRemaining % 60;

//   return {
//     complete,
//     seconds,
//     minutes,
//     hours,
//   };
// }

// function updateAllSegments() {
//   const timeRemainingBits = getTimeRemaining(new Date(targetDate).getTime());

//   updateTimeSection('seconds', timeRemainingBits.seconds);
//   updateTimeSection('minutes', timeRemainingBits.minutes);
//   updateTimeSection('hours', timeRemainingBits.hours);

//   return timeRemainingBits.complete;
// }

// const countdownTimer = setInterval(() => {
//   const isComplete = updateAllSegments();

//   if (isComplete) {
//     clearInterval(countdownTimer);
//   }
// }, 1000);

// updateAllSegments();
