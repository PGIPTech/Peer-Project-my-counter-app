const counterValueElement = document.getElementById('counter-value');
const incrementButton = document.getElementById('increment-btn');
const decrementButton = document.getElementById('decrement-btn');
const resetButton = document.getElementById('reset-btn');

let counter = 0; // Initialize counter variable

// Update counter display
function updateDisplay() {
    counterValueElement.textContent = counter;
}

incrementButton.addEventListener('click', () => {
    counter++;
    updateDisplay();
});

decrementButton.addEventListener('click', () => {
    if (counter > 0) { // Prevent decrement below 0
        counter--;
        updateDisplay();
    }
});

resetButton.addEventListener('click', () => {
    counter = 0;
    updateDisplay();
});

updateDisplay(); // Initialize display on page load
