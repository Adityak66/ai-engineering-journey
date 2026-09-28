// Using JSONPlaceholder's /users endpoint as a mock for Employees
const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// 1. GET (Read)

async function getEmployees() {
    console.log("[GET] Fetching employees...");
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(`Loaded ${data.length} employees.\n`);
}

// 2. POST (Create)

async function createEmployee(employee) {
    console.log("[POST] Creating employee...");
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee)
    });
    const data = await response.json();
    console.log(`Created Employee with ID: ${data.id}\n`);
}

// 3. PUT (Update Full Resource)

async function updateEmployee(id, employee) {
    console.log(`[PUT] Fully updating employee ${id}...`);
    // PUT generally expects the entire object payload to replace the existing one
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee)
    });
    const data = await response.json();
    console.log(`Fully Updated Data:`, data, `\n`);
}

// 4. PATCH (Update Partial Resource)

async function patchEmployee(id, partialUpdates) {
    console.log(`[PATCH] Partially updating employee ${id}...`);
    // PATCH is used when you only want to send the exact fields that changed
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(partialUpdates)
    });
    const data = await response.json();
    console.log(`Patched Data:`, data, `\n`);
}

// 5. DELETE (Delete Resource)

async function deleteEmployee(id) {
    console.log(`[DELETE] Deleting employee ${id}...`);
    // DELETE typically does not need a Content-Type or a JSON body
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });
    const data = await response.json(); // Usually returns an empty object {}
    console.log(`Deleted Employee ${id}. API returned:`, data, `\n`);
}

// RUNNER: Executing CRUD Operations

async function runPractice() {
    console.log("===== FETCH PUT/PATCH/DELETE PRACTICE =====\n");

    try {
        await getEmployees();
        
        // POST
        const newEmp = { name: "Aditya", department: "IT" };
        await createEmployee(newEmp);
        
        // PUT (Replacing the whole resource for ID 1)
        const fullyUpdatedEmp = { 
            name: "Aditya (Senior)", 
            department: "Engineering", 
            salary: 60000 
        };
        await updateEmployee(1, fullyUpdatedEmp); 

        // PATCH (Updating just one specific field for ID 1)
        const patchedData = { salary: 70000 };
        await patchEmployee(1, patchedData);
        
        // DELETE
        await deleteEmployee(1);

    } catch (error) {
        console.error("An error occurred:", error);
    }
    
    console.log("===== ALL API CALLS COMPLETED =====");
}

runPractice();
