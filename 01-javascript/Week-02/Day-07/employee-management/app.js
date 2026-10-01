// STATE & DOM SELECTORS

let employees = [];

const employeeForm = document.getElementById('employee-form');
const editIdInput = document.getElementById('edit-id');
const nameInput = document.getElementById('name');
const deptInput = document.getElementById('department');
const salaryInput = document.getElementById('salary');
const submitBtn = document.getElementById('submit-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');
const formTitle = document.getElementById('form-title');

const searchInput = document.getElementById('search-input');
const filterDept = document.getElementById('filter-dept');
const sortSalary = document.getElementById('sort-salary');
const avgSalaryDisplay = document.getElementById('avg-salary');
const employeeList = document.getElementById('employee-list');
const loadApiBtn = document.getElementById('load-api-btn');


// INIT & PERSISTENCE

function init() {
    loadEmployees();
    updateDepartmentsDropdown();
    renderEmployees();
}

function loadEmployees() {
    const saved = localStorage.getItem('employeesData');
    if (saved) {
        employees = JSON.parse(saved);
    }
}

function saveEmployees() {
    localStorage.setItem('employeesData', JSON.stringify(employees));
    updateDepartmentsDropdown();
    renderEmployees();
}


// ADD & EDIT

employeeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = editIdInput.value;
    const name = nameInput.value.trim();
    const department = deptInput.value.trim();
    const salary = Number(salaryInput.value);

    if (id) {
        // Step 4: Edit mode - Update existing object
        employees = employees.map(emp => 
            emp.id == id ? { ...emp, name, department, salary } : emp
        );
        exitEditMode();
    } else {
        // Step 2: Add mode - Create new object
        const newEmployee = {
            id: Date.now(),
            name,
            department,
            salary
        };
        employees.push(newEmployee);
    }

    saveEmployees(); // Persists and triggers re-render
    employeeForm.reset();
});

function enterEditMode(id) {
    const emp = employees.find(e => e.id == id);
    if (!emp) return;

    // Load data into inputs
    editIdInput.value = emp.id;
    nameInput.value = emp.name;
    deptInput.value = emp.department;
    salaryInput.value = emp.salary;

    // UI Updates
    formTitle.textContent = "Edit Employee";
    submitBtn.textContent = "Save Changes";
    cancelEditBtn.classList.remove('hidden');
}

function exitEditMode() {
    editIdInput.value = '';
    employeeForm.reset();
    formTitle.textContent = "Add Employee";
    submitBtn.textContent = "Add Employee";
    cancelEditBtn.classList.add('hidden');
}

cancelEditBtn.addEventListener('click', exitEditMode);


// DELETE

// Step 3: Delete Employee using filter()
function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id != id);
    saveEmployees();
}


// FILTER, SEARCH, SORT

function getFilteredAndSortedEmployees() {
    let result = [...employees]; // Clone to avoid mutating original

    // Step 5: Search
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        result = result.filter(emp => emp.name.toLowerCase().includes(searchTerm));
    }

    // Step 6: Filter Department
    const selectedDept = filterDept.value;
    if (selectedDept !== "All") {
        result = result.filter(emp => emp.department === selectedDept);
    }

    // Step 7: Sort
    const sortVal = sortSalary.value;
    if (sortVal === "asc") {
        result.sort((a, b) => a.salary - b.salary);
    } else if (sortVal === "desc") {
        result.sort((a, b) => b.salary - a.salary);
    }

    return result;
}

// Add listeners to trigger re-renders instantly on change
searchInput.addEventListener('input', renderEmployees);
filterDept.addEventListener('change', renderEmployees);
sortSalary.addEventListener('change', renderEmployees);

// Dynamically generate the dropdown based on existing data
function updateDepartmentsDropdown() {
    // Extract unique departments using map and Set
    const depts = [...new Set(employees.map(e => e.department))];
    const currentVal = filterDept.value;

    filterDept.innerHTML = `<option value="All">All Departments</option>`;
    
    depts.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept;
        option.textContent = dept;
        filterDept.appendChild(option);
    });

    // Attempt to retain the previously selected filter if it still exists
    if (depts.includes(currentVal)) {
        filterDept.value = currentVal;
    }
}


// AVERAGE SALARY

// Step 8: Calculate average using reduce()
function calculateAverageSalary(filteredEmployees) {
    if (filteredEmployees.length === 0) return 0;
    
    const total = filteredEmployees.reduce((sum, emp) => sum + emp.salary, 0);
    return Math.round(total / filteredEmployees.length);
}


// RENDER

// Step 10: Central Render Function
function renderEmployees() {
    employeeList.innerHTML = '';
    
    const displayEmployees = getFilteredAndSortedEmployees();
    
    // Update Average Salary Stat
    const avg = calculateAverageSalary(displayEmployees);
    avgSalaryDisplay.textContent = `₹${avg.toLocaleString()}`;

    if (displayEmployees.length === 0) {
        employeeList.innerHTML = '<p style="text-align:center; color:#777; margin-top:20px;">No employees found.</p>';
        return;
    }

    displayEmployees.forEach(emp => {
        // Create Item Container
        const item = document.createElement('div');
        item.classList.add('employee-item');

        // Create Info
        const info = document.createElement('div');
        info.classList.add('employee-info');
        info.innerHTML = `
            <strong>${emp.name}</strong> 
            <span style="color:#666;">| ${emp.department}</span> 
            <span style="color:#28a745; font-weight:bold;">| ₹${emp.salary.toLocaleString()}</span>
        `;

        // Create Actions Container
        const actions = document.createElement('div');
        actions.classList.add('employee-actions');

        // Edit Button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('btn-edit');
        editBtn.addEventListener('click', () => enterEditMode(emp.id));

        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('btn-delete');
        deleteBtn.addEventListener('click', () => deleteEmployee(emp.id));

        actions.append(editBtn, deleteBtn);
        item.append(info, actions);
        employeeList.append(item);
    });
}


// API INTEGRATION

// Step 11: fetch() JSONPlaceholder users and transform them
loadApiBtn.addEventListener('click', async () => {
    try {
        loadApiBtn.textContent = "Loading...";
        loadApiBtn.disabled = true;

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        
        const users = await response.json();
        
        // Transform API format to match our schema
        const apiEmployees = users.map(user => ({
            id: Date.now() + user.id, // Ensure unique IDs
            name: user.name,
            department: user.company.name.split(' ')[0], // Extract first word of company name as department
            salary: 40000 + (user.id * 5000)
        }));

        // Merge API data with existing data
        employees = [...employees, ...apiEmployees];
        
        // Save and re-render
        saveEmployees();

    } catch (error) {
        alert("Failed to load API data: " + error.message);
    } finally {
        loadApiBtn.textContent = "Load API Demo Data";
        loadApiBtn.disabled = false;
    }
});

// Boot up the application
init();
