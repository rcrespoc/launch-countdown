const d = document;
const $seconds = d.querySelector('.seconds');
const $minutes = d.querySelector('.minutes');
const $hours = d.querySelector('.hours');
const $days = d.querySelector('.days');
const limitDate = 'March 11, 2021 08:00:00';
d.addEventListener('DOMContentLoaded', () => {
  const countDownDate = new Date(limitDate).getTime();
  let countDownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countDownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);
      
    $days.textContent = days;
    $seconds.textContent = seconds;
    $minutes.textContent = minutes;
    $hours.textContent = hours;
  }, 1000);
})