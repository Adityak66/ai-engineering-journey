// 1. SELECTORS

const employeeForm = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const salaryInput = document.getElementById("salary");
const employeeList = document.getElementById("employee-list");

// 2. STATE (Data)

// On Page Load: Read localStorage -> JSON.parse() -> Array
// (Fallback to empty array if localStorage is empty)
let employees = JSON.parse(localStorage.getItem("employees")) || [];

// 3. FUNCTIONS

// Save array back to localStorage
function saveToLocalStorage() {
    localStorage.setItem("employees", JSON.stringify(employees));
}

// Render the entire list to the DOM
function renderEmployees() {
    // Clear the container so we don't render duplicates
    employeeList.innerHTML = "";

    // Loop through data and build elements
    employees.forEach(employee => {
        // createElement() -> main card
        const card = document.createElement("div");
        card.classList.add("employee-card");

        // createElement() -> info container
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("employee-info");
        
        // Add text to elements
        const nameHeader = document.createElement("h4");
        nameHeader.textContent = employee.name;
        
        const detailsPara = document.createElement("p");
        detailsPara.textContent = `${employee.role} | ₹${employee.salary}`;
        
        // append() info to its container
        infoDiv.append(nameHeader, detailsPara);

        // createElement() -> Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        
        // DELETE EVENT (remove + click event)
        
        deleteBtn.addEventListener("click", () => {
            // 1. Filter out this employee from the array
            employees = employees.filter(emp => emp.id !== employee.id);
            
            // 2. Save updated array to localStorage
            saveToLocalStorage();
            
            // 3. Remove the element from the DOM
            card.remove(); 
        });

        // Assemble the card
        card.append(infoDiv, deleteBtn);
        
        // Inject into the actual webpage
        employeeList.append(card);
    });
}


// 4. EVENT LISTENERS


// Add Employee Event (submit)
employeeForm.addEventListener("submit", (event) => {
    // Prevent page refresh
    event.preventDefault(); 

    // Create the Employee Object
    const newEmployee = {
        id: Date.now(), // Generate a unique ID so we can safely delete them later
        name: nameInput.value.trim(),
        role: roleInput.value.trim(),
        salary: salaryInput.value.trim()
    };

    // Add to Array
    employees.push(newEmployee);

    // Save to localStorage
    saveToLocalStorage();

    // Render updated DOM
    renderEmployees();

    // Clear form inputs
    employeeForm.reset();
});


// 5. INITIALIZATION

// Render existing employees immediately when the script runs
renderEmployees();
