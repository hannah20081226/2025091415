function updateCountdown() {
  const targetDate = new Date('2025-09-14T09:00:00').getTime();
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    document.querySelector('.countdown').innerHTML = "Countdown Ended";
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const input = document.querySelector("input");
const dataListResult = document.querySelector("#dataListResult");

input.addEventListener("change", (e) => {
  const value = input.value;
  dataListResult.innerHTML = value;
});


window.addEventListener("scroll", function () {
  const elm = document.querySelector(".bottom-tab");
  const scroll = window.pageYOffset;
  if (scroll > 2000) {
    elm.style.opacity = "1";
    elm.style.zIndex = "1";
    // console.log(scroll);
  } else {
    elm.style.opacity = "0";
    elm.style.zIndex = "-1";
    // console.log(scroll);
  }
});








