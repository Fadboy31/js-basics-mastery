// 🔹 Step 1: Create variables
let userName = "MelekhFad";
let userAge = 20;
const userCountry = "Tanzania";

// 🔹 Step 2: Log them correctly
console.log("userName:", userName);      // prints variable name + value
console.log("userAge:", userAge);
console.log("userCountry:", userCountry);

// 🔹 Step 3: Change a variable value (allowed)
userName = "KingFad";
userAge = 21;
console.log("Updated userName:", userName);
console.log("Updated userAge:", userAge);

// 🔹 Step 4: Use all variables together
console.log(
  "I am " + userName + ", age " + userAge + ", from " + userCountry + " 🇹🇿"
);

// 🔹 ✅ Notes:
// - Constants (const) cannot be reassigned
// - Variables (let) can be updated
// - Logging with colon shows both variable name and value