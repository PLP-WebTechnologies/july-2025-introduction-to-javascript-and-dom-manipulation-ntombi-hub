// 🎯 Part 1: JavaScript Basics
let userName = ""; // Variable declaration

document.getElementById("greet-btn").addEventListener("click", function () {
  userName = document.getElementById("username").value;

  // Conditional logic
  if (userName.trim() !== "") {
    document.getElementById("greeting").textContent = `Hello, ${userName}! 👋`;
  } else {
    document.getElementById("greeting").textContent = "Please enter your name.";
  }
});

// ❤️ Part 2: Functions
function calculateTotal(a, b) {
  return a + b;
}

function formatMessage(name) {
  return `Welcome, ${name}. Ready to master JavaScript?`;
}

// Using the functions
console.log(calculateTotal(10, 15)); // 25
console.log(formatMessage("Dev"));   // Welcome, Dev...

// 🔁 Part 3: Loops
const loopOutput = document.getElementById("loop-output");

for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Loop iteration ${i}`;
  loopOutput.appendChild(li);
}

const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function (fruit) {
  console.log(`Fruit: ${fruit}`);
});

// 🌐 Part 4: DOM Manipulation
document.getElementById("toggle-btn").addEventListener("click", function () {
  const message = document.getElementById("toggle-message");
  message.classList.toggle("hidden");
});