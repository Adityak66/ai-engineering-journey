// 1. Select the static elements already on the page
const employeeInput = document.getElementById("employee-input");
const addBtn = document.getElementById("add-btn");
const employeeList = document.getElementById("employee-list");

// 2. Add Event Listener to the Add button
addBtn.addEventListener("click", () => {
    
    // Read the input value
    const employeeName = employeeInput.value.trim();

    // Validation: Don't add if input is empty
    if (employeeName === "") {
        alert("Please enter an employee name!");
        return;
    }

    // ==========================================
    // Creating the Dynamic Element
    // ==========================================
    
    // Step A: createElement() -> Create the main card container
    const card = document.createElement("div");
    card.classList.add("employee-card"); // Add CSS class for styling

    // Step B: createElement() -> Create the text node for the name
    const nameSpan = document.createElement("span");
    nameSpan.textContent = employeeName;

    // Step C: createElement() -> Create the dynamic Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Add an event listener SPECIFICALLY to this new dynamic button
    deleteBtn.addEventListener("click", () => {
        // remove() -> Deletes this specific card element from the DOM!
        card.remove();
    });

    // Step D: append() -> Assemble the pieces into the card
    card.append(nameSpan);
    card.append(deleteBtn);

    // Step E: append() -> Inject the fully built card into the visible DOM
    employeeList.append(card);

    // Finally, clear the input field for the next entry
    employeeInput.value = "";
});
