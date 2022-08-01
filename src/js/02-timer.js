import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

const daysInput = document.querySelector('[data-days]');
const hoursInput = document.querySelector('[data-hours]');
const minutesInput = document.querySelector('[data-minutes]');
const secondsInput = document.querySelector('[data-seconds]');

const currentDate = new Date();
let timerId = 0;

const selector = document.querySelector('#datetime-picker');
let calendar = flatpickr(selector, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < currentDate) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    startBtn.disabled = false;
  },
});

startBtn.addEventListener('click', setTimer);

function setTimer() {
  startBtn.disabled = true;
  const timerTime = calendar.selectedDates[0].getTime();
  let currentTime = 0;
  let remainingTime = 0;

  timerId = setInterval(() => {
    currentTime = Date.now();
    if (timerTime < currentTime) {
      stopTimer;
      return;
    }
    remainingTime = convertMs(timerTime - currentTime);
    daysInput.textContent = addLeadingZero(remainingTime.days);
    hoursInput.textContent = addLeadingZero(remainingTime.hours);
    minutesInput.textContent = addLeadingZero(remainingTime.minutes);
    secondsInput.textContent = addLeadingZero(remainingTime.seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
  startBtn.disabled = true;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
