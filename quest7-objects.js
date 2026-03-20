// 🔹Select element
const box = document.querySelector('.box');

// 🔹Change styles directly
box.style.backgroundColor = "tomato";
box.style.fontSize = "24px";
box.style.padding = "20px";

// 🔹Work with classes (better way)
box.classList.add("highlight");  // adds yellow background
box.classList.remove("hidden");  // ensures it's visible
box.classList.toggle("active");  // adds border