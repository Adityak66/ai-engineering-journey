// ==========================================
// 1. Live Character Counter (input event)
// ==========================================
const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", (event) => {
    // event.target.value grabs the live text currently in the box
    const currentText = event.target.value;
    charCount.textContent = currentText.length;

    // Optional visual feedback
    if (currentText.length > 50) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "black";
    }
});

// ==========================================
// 2. Button Click Counter (click event)
// ==========================================
const clickBtn = document.getElementById("click-btn");
const clickCountDisplay = document.getElementById("click-count");
let clicks = 0; // State variable

clickBtn.addEventListener("click", () => {
    clicks++;
    clickCountDisplay.textContent = clicks;
});

// ==========================================
// 3. Global Keyboard Detector (keydown event)
// ==========================================
const keyDisplay = document.getElementById("key-display");

// By attaching this to 'document', we listen to the entire webpage
document.addEventListener("keydown", (event) => {
    // event.key reveals EXACTLY which key the user pressed
    keyDisplay.textContent = event.key;
    
    // Spacebar shows up as empty space, let's make it readable
    if (event.key === " ") {
        keyDisplay.textContent = "Spacebar";
    }
});

// ==========================================
// 4. Form Submission without Refresh (submit event)
// ==========================================
const myForm = document.getElementById("my-form");
const nameInput = document.getElementById("name-input");
const formMessage = document.getElementById("form-message");

myForm.addEventListener("submit", (event) => {
    // CRITICAL: Prevents the browser's default behavior of reloading the page
    event.preventDefault();

    // Now we can grab the input data safely
    const submittedName = nameInput.value;
    
    formMessage.textContent = `✅ Welcome, ${submittedName}! The page did NOT refresh!`;
    formMessage.style.color = "green";
    
    // Clear the input field automatically after submitting
    nameInput.value = "";
});
