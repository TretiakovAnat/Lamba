const endData = new Date("February 19, 2025, 23:59:59");

const daysElement = document.querySelector("#days");
const minutesElement = document.querySelector("#hours");
const hoursElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

function updeteTimer() {
  const now = new Date();
  const timeDifference = endData - now;

  let timerInterval;

  if (timeDifference <= 0) {
    daysElement.innerText = "0";
    hoursElement.innerText = "0";
    minutesElement.innerText = "0";
    secondsElement.innerText = "0";
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  daysElement.innerText = days;
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;
}
updeteTimer();
setInterval(updeteTimer, 1000);
