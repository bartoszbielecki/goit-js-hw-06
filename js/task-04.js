const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.getElementById("value");
let counterValue = 0;
function updateCounterValue(newValue) {
  counterValue = newValue;
  counterValueSpan.textContent = counterValue;
}
decrementButton.addEventListener("click", () => {
  updateCounterValue(counterValue - 1);
});
incrementButton.addEventListener("click", () => {
  updateCounterValue(counterValue + 1);
});
