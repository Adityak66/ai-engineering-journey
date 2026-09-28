// We will use JSONPlaceholder's /users endpoint to simulate an Employee database
const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// 1. GET ALL (Read)

async function getEmployees() {
    try {
        console.log("[GET] Fetching all employees...");
        const response = await fetch(BASE_URL);
        
        // Critical error handling step
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();
        console.log(`Success! Loaded ${data.length} employees.\n`);
        return data;
    } catch (error) {
        console.error("Error in getEmployees:", error.message);
    }
}

// 2. GET ONE (Read)

async function getEmployee(id) {
    try {
        console.log(`[GET] Fetching employee ${id}...`);
        const response = await fetch(`${BASE_URL}/${id}`);
        
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();
        console.log(`Found Employee: ${data.name} (${data.email})\n`);
        return data;
    } catch (error) {
        console.error("Error in getEmployee:", error.message);
    }
}

// 3. POST (Create)

async function createEmployee(employee) {
    try {
        console.log("[POST] Creating new employee...");
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        });
        
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();
        console.log(`Created Employee (ID: ${data.id}):`, data, "\n");
        return data;
    } catch (error) {
        console.error("Error in createEmployee:", error.message);
    }
}

// 4. PUT (Update)

async function updateEmployee(id, employee) {
    try {
        console.log(`[PUT] Updating employee ${id}...`);
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        });
        
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();
        console.log(`Updated Employee ${id}:`, data, "\n");
        return data;
    } catch (error) {
        console.error("Error in updateEmployee:", error.message);
    }
}

// 5. DELETE (Delete)

async function deleteEmployee(id) {
    try {
        console.log(`[DELETE] Deleting employee ${id}...`);
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE"
        });
        
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();
        console.log(`Deleted Employee ${id}. Server response:`, data, "\n");
        return data;
    } catch (error) {
        console.error("Error in deleteEmployee:", error.message);
    }
}

// RUNNER: Execute the Full Client

async function runClient() {
    console.log("===== FINAL MINI PROJECT: EMPLOYEE API CLIENT =====\n");
    
    // 1. GET ALL
    await getEmployees();
    
    // 2. GET ONE
    await getEmployee(2);
    
    // 3. CREATE
    const newEmp = { 
        name: "Aditya", 
        department: "AI Engineering", 
        salary: 85000 
    };
    await createEmployee(newEmp);
    
    // 4. UPDATE
    const updatedEmp = { 
        name: "Aditya (Lead)", 
        department: "AI Engineering Leadership", 
        salary: 120000 
    };
    await updateEmployee(2, updatedEmp);
    
    // 5. DELETE
    await deleteEmployee(2);
    
    // 6. Deliberately trigger a 404 Error to test error handling
    console.log("[TEST] Intentionally fetching an invalid employee ID to test our Error Handling...");
    await getEmployee(99999);
    
    console.log("\n===== PROJECT COMPLETED =====");
}

runClient();
