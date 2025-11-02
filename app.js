const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const customTipInput = document.getElementById('custom-tip');
const tipButtons = document.querySelectorAll('.tip-btn');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalPerPersonDisplay = document.getElementById('total-per-person');
const resetButton = document.getElementById('reset-btn');
const peopleInputLabel = document.querySelector('label[for="people"]');
const errorMessage = document.querySelector('.error-message');

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.0;

function calculateTip() {
  if (peopleValue >= 1) {
    const tipTotal = (billValue * tipValue) / 100;
    const tipPerPerson = tipTotal / peopleValue;
    const totalPerPerson = (billValue + tipTotal) / peopleValue;

    tipAmountDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalPerPersonDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;

    errorMessage.style.display = 'none';
    peopleInput.classList.remove('error');
  } else {
    errorMessage.style.display = 'inline';
    peopleInput.classList.add('error');
  }
}

function handleBillInput() {
  billValue = parseFloat(billInput.value) || 0;
  calculateTip();
  activateResetButton();
}

function handlePeopleInput() {
  peopleValue = parseInt(peopleInput.value) || 0;
  calculateTip();
  activateResetButton();
}

function handleTipClick(event) {
  tipButtons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  tipValue = parseFloat(event.target.dataset.tip);
  customTipInput.value = '';
  calculateTip();
  activateResetButton();
}

function handleCustomTipInput() {
  tipButtons.forEach(btn => btn.classList.remove('active'));
  tipValue = parseFloat(customTipInput.value) || 0;
  calculateTip();
  activateResetButton();
}

function activateResetButton() {
  if (billValue > 0 || peopleValue > 0 || tipValue > 0) {
    resetButton.disabled = false;
  } else {
    resetButton.disabled = true;
  }
}

function resetCalculator() {
  billValue = 0.0;
  peopleValue = 1;
  tipValue = 0.0;

  billInput.value = '';
  peopleInput.value = '';
  customTipInput.value = '';

  tipAmountDisplay.textContent = '$0.00';
  totalPerPersonDisplay.textContent = '$0.00';

  tipButtons.forEach(btn => btn.classList.remove('active'));
  
  errorMessage.style.display = 'none';
  peopleInput.classList.remove('error');

  resetButton.disabled = true;
}

// Event Listeners
billInput.addEventListener('input', handleBillInput);
peopleInput.addEventListener('input', handlePeopleInput);
customTipInput.addEventListener('input', handleCustomTipInput);

tipButtons.forEach(button => {
  button.addEventListener('click', handleTipClick);
});

resetButton.addEventListener('click', resetCalculator);

// Initial state
window.addEventListener('load', () => {
    resetCalculator();
    peopleInput.value = '1'; // Start with 1 person
});