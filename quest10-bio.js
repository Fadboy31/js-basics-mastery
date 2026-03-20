// 🔹 Select elements
const nameInput = document.getElementById("nameInput");
const feedback = document.getElementById("feedback");
const submitBtn = document.getElementById("submitBtn");

// 🔹 Function to validate input
function validateName() {
    const name = nameInput.value.trim();

    if (name.length === 0) {
        feedback.textContent = "Name is required!";
        feedback.style.color = "red";
    } else if (name.length < 3) {
        feedback.textContent = "Name must be at least 3 characters!";
        feedback.style.color = "red";
    } else {
        feedback.textContent = `Welcome, ${name}! 🎉`;
        feedback.style.color = "green";
    }
}

// 🔹 Event listener for button click
submitBtn.addEventListener("click", validateName);

// 🔹 Bonus: validate as user types
nameInput.addEventListener("input", validateName);