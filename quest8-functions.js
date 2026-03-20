// 🔹 Select button
const btn = document.getElementById("myBtn");

// 🔹 Select message paragraph
const message = document.getElementById("message");

// 🔹 Add click listener
btn.addEventListener('click', function() {
    console.log('Button was clicked!');
    message.textContent = "Button clicked! 🎉";
});

// 🔹 Bonus: mouseover
btn.addEventListener('mouseover', function() {
    message.textContent = "Mouse is over the button! 😎";
});

// 🔹 Bonus: mouseout
btn.addEventListener('mouseout', function() {
    message.textContent = "Mouse left the button 😐";
});