// =========================
// Part 2: Functions
// =========================

// Example 1: Function with parameters + return
function addNumbers(a, b) {
  return a + b;
}

// Example 2: Function demonstrating scope
let globalVar = "I am global";

function scopeExample() {
  let localVar = "I am local";
  console.log(globalVar); // accessible
  // console.log(localVar); // only accessible here
}

// Call functions
document.getElementById("calc-output").textContent =
  "5 + 7 = " + addNumbers(5, 7);

scopeExample();

// =========================
// Part 3: Combining CSS & JS
// =========================
const jsBox = document.getElementById("js-box");
const animateBtn = document.getElementById("animate-btn");

animateBtn.addEventListener("click", () => {
  // Toggle class to trigger CSS transition
  jsBox.classList.toggle("animate");
});

