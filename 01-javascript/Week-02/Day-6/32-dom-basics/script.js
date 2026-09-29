console.log("DOM Script Loaded Successfully!");

// 1. Select heading
const heading = document.getElementById("main-heading");

// 2. Change heading text (using textContent)
heading.textContent = "Welcome to DOM Manipulation!";

// 3. Select and Change paragraph text (using innerHTML to allow HTML tags)
const paragraph = document.querySelector(".description");
paragraph.innerHTML = "This paragraph was updated by <strong>JavaScript</strong>!";

// 4. Read input value
const inputField = document.querySelector("#username-input");
console.log("Value read from the input field:", inputField.value);

// 5. Change button text
const button = document.querySelector("#action-btn");
button.textContent = "Submit Data";

// 6. Add/remove CSS class
const statusBox = document.getElementById("status-box");

// Add the highlight class defined in style.css
statusBox.classList.add("highlight");

// Change text to show it worked
statusBox.textContent = "CSS 'highlight' class added via JavaScript!";

// Note: You can also use:
// statusBox.classList.remove("highlight");
// statusBox.classList.toggle("highlight");

console.log("All DOM updates completed successfully.");
