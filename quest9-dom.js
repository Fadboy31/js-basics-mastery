// 🔹 Initial count
let count = 0;

// 🔹 Select elements
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

// 🔹 Increment on click
incrementBtn.addEventListener('click', function() {
    count = count + 1;
    counterDisplay.textContent = count;
});

// 🔹 Reset on click
resetBtn.addEventListener('click', function() {
    count = 0;
    counterDisplay.textContent = count;
});

const doubleBtn = document.createElement("button");
doubleBtn.textContent = "Double";
document.body.appendChild(doubleBtn);

doubleBtn.addEventListener("click", function() {
    count = count * 2;
    counterDisplay.textContent = count;
});