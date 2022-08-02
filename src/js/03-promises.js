import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firstDelay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  for (let i = 0; i < +amount.value; i += 1) {
    let position = i + 1;
    let delay = +firstDelay.value + i * +step.value;
    
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
