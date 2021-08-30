let counterValue = 0;

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const valueRef = document.querySelector("span#value");

function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  valueRef.textContent = String(counterValue);
}

decrementBtnRef.addEventListener("click", decrement);
incrementBtnRef.addEventListener("click", increment);
