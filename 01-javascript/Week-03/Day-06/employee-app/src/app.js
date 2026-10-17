// ============================================================================
// src/app.js — Central Application Controller & DOM Orchestration
// ============================================================================

import { fetchEmployees } from "./api.js";
import { loadEmployees, saveEmployees, clearEmployees } from "./storage.js";
import {
    addEmployee,
    deleteEmployee,
    updateEmployee,
    calculateAverageSalary,
    calculateTotalPayroll,
    getHighestSalary,
    filterAndSortEmployees
} from "./employeeService.js";
import {
    debounce,
    formatCurrency,
    getUniqueDepartments
} from "./utils.js";

// ============================================================================
// APPLICATION STATE
// ============================================================================
let employees = [];
let editModeId = null;

// Filter & Sort State
let currentFilterDept = "All";
let currentSortOrder = "none";
let currentSearchQuery = "";

// ============================================================================
// DOM SELECTORS
// ============================================================================
// Form Elements
const employeeForm = document.querySelector("#employeeForm");
const formTitle = document.querySelector("#formTitle");
const formBadge = document.querySelector("#formBadge");
const employeeIdInput = document.querySelector("#employeeId");
const empNameInput = document.querySelector("#empName");
const empDeptInput = document.querySelector("#empDept");
const empSalaryInput = document.querySelector("#empSalary");
const empCityInput = document.querySelector("#empCity");
const submitFormBtn = document.querySelector("#submitFormBtn");
const cancelEditBtn = document.querySelector("#cancelEditBtn");

// Toolbar & Controls
const searchInput = document.querySelector("#searchInput");
const searchStatus = document.querySelector("#searchStatus");
const deptFilter = document.querySelector("#deptFilter");
const salarySort = document.querySelector("#salarySort");
const loadApiBtn = document.querySelector("#loadApiBtn");
const clearDataBtn = document.querySelector("#clearDataBtn");

// Directory & List
const employeeList = document.querySelector("#employeeList");
const emptyState = document.querySelector("#emptyState");

// Metrics
const metricTotal = document.querySelector("#metricTotal");
const metricAverage = document.querySelector("#metricAverage");
const metricHighest = document.querySelector("#metricHighest");
const metricPayroll = document.querySelector("#metricPayroll");

// Status Alert Banner
const statusAlert = document.querySelector("#statusAlert");
const alertIcon = document.querySelector("#alertIcon");
const alertMessage = document.querySelector("#alertMessage");

// ============================================================================
// UI FEEDBACK UTILITIES
// ============================================================================
let alertTimerId = null;

function showAlert(message, type = "info", autoHideMs = 4000) {
    clearTimeout(alertTimerId);

    const icons = {
        info: "ℹ️",
        success: "✅",
        error: "❌",
        loading: "⏳"
    };

    alertIcon.textContent = icons[type] ?? "ℹ️";
    alertMessage.textContent = message;
    statusAlert.className = `status-alert ${type}`;

    if (autoHideMs > 0) {
        alertTimerId = setTimeout(() => {
            statusAlert.classList.add("hidden");
        }, autoHideMs);
    }
}

function hideAlert() {
    clearTimeout(alertTimerId);
    statusAlert.classList.add("hidden");
}

// ============================================================================
// METRICS & DEPARTMENT DROPDOWN UPDATES
// ============================================================================
function updateMetrics() {
    metricTotal.textContent = employees.length;
    metricAverage.textContent = formatCurrency(calculateAverageSalary(employees));
    metricHighest.textContent = formatCurrency(getHighestSalary(employees));
    metricPayroll.textContent = formatCurrency(calculateTotalPayroll(employees));
}

function updateDepartmentDropdown() {
    // Leverage Set via utility to extract unique department names
    const departments = getUniqueDepartments(employees);
    const previousSelection = deptFilter.value;

    deptFilter.innerHTML = "";
    departments.forEach(dept => {
        const option = document.createElement("option");
        option.value = dept;
        option.textContent = dept === "All" ? "All Departments" : dept;
        deptFilter.appendChild(option);
    });

    // Retain previous selection if it still exists in the dataset
    if (departments.includes(previousSelection)) {
        deptFilter.value = previousSelection;
    } else {
        deptFilter.value = "All";
        currentFilterDept = "All";
    }
}

// ============================================================================
// RENDER DIRECTORY TABLE
// ============================================================================
function renderDirectory() {
    const filtered = filterAndSortEmployees(employees, {
        query: currentSearchQuery,
        department: currentFilterDept,
        sortOrder: currentSortOrder
    });

    employeeList.innerHTML = "";

    if (filtered.length === 0) {
        emptyState.classList.remove("hidden");
        return;
    }

    emptyState.classList.add("hidden");

    // Build rows using clean DOM creation
    const fragment = document.createDocumentFragment();

    filtered.forEach(emp => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td class="emp-name-cell">
                <strong>${emp.name}</strong>
                <span class="emp-email">${emp.email ?? "no-email@company.com"}</span>
            </td>
            <td>
                <span class="badge badge-dept">${emp.department}</span>
            </td>
            <td>${emp.city ?? "Remote"}</td>
            <td class="emp-salary-cell">${formatCurrency(emp.salary)}</td>
            <td style="text-align: right;">
                <button class="btn-action-edit" data-id="${emp.id}" title="Edit employee details">
                    ✏️ Edit
                </button>
                <button class="btn-action-delete" data-id="${emp.id}" title="Delete employee">
                    🗑️ Delete
                </button>
            </td>
        `;

        fragment.appendChild(tr);
    });

    employeeList.appendChild(fragment);
}

// Synchronizes the entire UI after state mutation
function syncUI() {
    saveEmployees(employees);
    updateMetrics();
    updateDepartmentDropdown();
    renderDirectory();
}

// ============================================================================
// EVENT DELEGATION: EDIT & DELETE ACTIONS
// ============================================================================
// Attaching ONE single listener to the parent <tbody> container
employeeList.addEventListener("click", (event) => {
    // 1. DELETE ACTION
    const deleteBtn = event.target.closest(".btn-action-delete");
    if (deleteBtn) {
        const id = Number(deleteBtn.dataset.id);
        const empToDelete = employees.find(e => e.id === id);

        if (empToDelete) {
            employees = deleteEmployee(employees, id);
            showAlert(`Removed ${empToDelete.name} from directory.`, "info");
            
            // If the deleted employee was being edited, exit edit mode
            if (editModeId === id) {
                exitEditMode();
            }

            syncUI();
        }
        return;
    }

    // 2. EDIT ACTION
    const editBtn = event.target.closest(".btn-action-edit");
    if (editBtn) {
        const id = Number(editBtn.dataset.id);
        enterEditMode(id);
    }
});

// ============================================================================
// EDIT MODE LIFECYCLE
// ============================================================================
function enterEditMode(id) {
    const emp = employees.find(e => e.id === id);
    if (!emp) return;

    editModeId = id;

    // Load existing values into form inputs
    employeeIdInput.value = emp.id;
    empNameInput.value = emp.name;
    empDeptInput.value = emp.department;
    empSalaryInput.value = emp.salary;
    empCityInput.value = emp.city ?? "";

    // Switch UI appearance
    formTitle.textContent = "Edit Employee";
    formBadge.textContent = "Edit Mode";
    formBadge.className = "badge badge-warning";
    submitFormBtn.innerHTML = `<span class="icon">💾</span> Save Changes`;
    cancelEditBtn.classList.remove("hidden");

    empNameInput.focus();
}

function exitEditMode() {
    editModeId = null;
    employeeForm.reset();
    employeeIdInput.value = "";

    formTitle.textContent = "Add New Employee";
    formBadge.textContent = "Create Mode";
    formBadge.className = "badge badge-success";
    submitFormBtn.innerHTML = `<span class="icon">➕</span> Add Employee`;
    cancelEditBtn.classList.add("hidden");
}

cancelEditBtn.addEventListener("click", exitEditMode);

// ============================================================================
// FORM SUBMIT HANDLER (Add or Update)
// ============================================================================
employeeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = empNameInput.value.trim();
    const department = empDeptInput.value.trim();
    const salary = Number(empSalaryInput.value);
    const city = empCityInput.value.trim() || "Remote";

    if (!name || !department || !salary) {
        showAlert("Please fill in all required fields.", "error");
        return;
    }

    if (editModeId) {
        // Immutable Update
        employees = updateEmployee(employees, editModeId, {
            name,
            department,
            salary,
            city
        });
        showAlert(`Successfully updated details for ${name}.`, "success");
        exitEditMode();
    } else {
        // Immutable Add
        const newEmp = {
            id: Date.now(),
            name,
            department,
            salary,
            city,
            email: `${name.toLowerCase().replace(/\s+/g, ".")}@workforce.pro`
        };

        employees = addEmployee(employees, newEmp);
        showAlert(`Added ${name} to ${department} team!`, "success");
        employeeForm.reset();
    }

    syncUI();
});

// ============================================================================
// DEBOUNCED SEARCH (400ms delay)
// ============================================================================
const debouncedSearch = debounce((query) => {
    currentSearchQuery = query;
    searchStatus.textContent = query ? `Filtered: "${query}"` : "Ready";
    searchStatus.style.color = "var(--text-muted)";
    renderDirectory();
}, 400);

searchInput.addEventListener("input", (e) => {
    searchStatus.textContent = "Typing...";
    searchStatus.style.color = "var(--primary)";
    debouncedSearch(e.target.value);
});

// ============================================================================
// FILTERS & SORT HANDLERS
// ============================================================================
deptFilter.addEventListener("change", (e) => {
    currentFilterDept = e.target.value;
    renderDirectory();
});

salarySort.addEventListener("change", (e) => {
    currentSortOrder = e.target.value;
    renderDirectory();
});

// ============================================================================
// REMOTE API INTEGRATION (JSONPlaceholder)
// ============================================================================
loadApiBtn.addEventListener("click", async () => {
    try {
        loadApiBtn.disabled = true;
        loadApiBtn.innerHTML = `<span class="icon">⏳</span> Loading Remote Data...`;
        showAlert("Connecting to JSONPlaceholder API...", "loading", 0);

        const remoteEmployees = await fetchEmployees();

        // Merge incoming API data without creating duplicate IDs
        const existingIds = new Set(employees.map(e => e.id));
        const newUniqueEmployees = remoteEmployees.filter(e => !existingIds.has(e.id));

        if (newUniqueEmployees.length === 0) {
            showAlert("All remote employees are already loaded in directory.", "info");
        } else {
            employees = [...employees, ...newUniqueEmployees];
            showAlert(`Successfully loaded ${newUniqueEmployees.length} employees from API!`, "success");
            syncUI();
        }
    } catch (error) {
        showAlert(`API Fetch Failed: ${error.message}`, "error", 6000);
    } finally {
        loadApiBtn.disabled = false;
        loadApiBtn.innerHTML = `<span class="icon">🌐</span> Load Remote API Data`;
    }
});

// ============================================================================
// RESET DATA HANDLER
// ============================================================================
clearDataBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all employee records from localStorage?")) {
        clearEmployees();
        employees = [];
        exitEditMode();
        syncUI();
        showAlert("All local data has been reset.", "info");
    }
});

// ============================================================================
// SEED DATA INITIALIZER (Fallback on first visit)
// ============================================================================
function seedInitialDataIfEmpty() {
    return [
        {
            id: 101,
            name: "Aditya Sharma",
            department: "Engineering",
            salary: 75000,
            city: "Nashik",
            email: "aditya.sharma@workforce.pro"
        },
        {
            id: 102,
            name: "Sarah Connor",
            department: "Cybersecurity",
            salary: 82000,
            city: "Pune",
            email: "sarah.connor@workforce.pro"
        },
        {
            id: 103,
            name: "Rahul Deshmukh",
            department: "Design",
            salary: 58000,
            city: "Mumbai",
            email: "rahul.deshmukh@workforce.pro"
        }
    ];
}

// ============================================================================
// APPLICATION BOOTSTRAP
// ============================================================================
function initApp() {
    const saved = loadEmployees();

    if (saved && saved.length > 0) {
        employees = saved;
    } else {
        // Pre-populate with initial seed records if empty
        employees = seedInitialDataIfEmpty();
        saveEmployees(employees);
    }

    syncUI();
    console.log("WorkForce Pro Initialized with", employees.length, "employees.");
}

// Launch the app
initApp();
