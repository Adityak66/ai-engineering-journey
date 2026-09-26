// Using JSONPlaceholder's /users endpoint as a mock for Employees
const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// 1. GET ALL (Read)

async function getEmployees() {
    try {
        console.log("1. Fetching all employees...");
        const response = await fetch(BASE_URL);
        
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
        
        const data = await response.json();
        console.log(`Loaded ${data.length} employees.\n`);
        return data;
    } catch (error) {
        console.error("Error fetching employees:", error.message);
    }
}

// 2. GET ONE (Read)

async function getEmployee(id) {
    try {
        console.log(`2. Fetching employee with ID: ${id}...`);
        const response = await fetch(`${BASE_URL}/${id}`);
        
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
        
        const data = await response.json();
        console.log(`Found Employee: ${data.name} (${data.email})\n`);
        return data;
    } catch (error) {
        console.error("Error fetching employee:", error.message);
    }
}

// 3. POST (Create)

async function createEmployee(employee) {
    try {
        console.log("3. Creating new employee...");
        const response = await fetch(BASE_URL, {
            method: "POST", // Specify HTTP method
            headers: {
                "Content-Type": "application/json" // Tell the API we are sending JSON
            },
            body: JSON.stringify(employee) // Convert JS Object to JSON string
        });
        
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
        
        const data = await response.json();
        console.log(`Employee Created with simulated ID: ${data.id}`);
        console.log(`Data received back from API:`, data, `\n`);
        return data;
    } catch (error) {
        console.error("Error creating employee:", error.message);
    }
}

// 4. PUT (Update)

async function updateEmployee(id, employee) {
    try {
        console.log(`4. Updating employee with ID: ${id}...`);
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        });
        
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
        
        const data = await response.json();
        console.log(`Employee ${id} Updated Successfully:`);
        console.log(`Data received back from API:`, data, `\n`);
        return data;
    } catch (error) {
        console.error("Error updating employee:", error.message);
    }
}

// 5. DELETE (Delete)

async function deleteEmployee(id) {
    try {
        console.log(`5. Deleting employee with ID: ${id}...`);
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE" // No body or headers usually needed for DELETE
        });
        
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
        
        // JSONPlaceholder DELETE returns an empty object {}
        const data = await response.json();
        console.log(`Employee ${id} Deleted Successfully. (API Response: ${JSON.stringify(data)})\n`);
        return data;
    } catch (error) {
        console.error("Error deleting employee:", error.message);
    }
}

// RUNNER: Executing CRUD Operations

async function runAPIClient() {
    console.log("===== EMPLOYEE API CLIENT (CRUD) =====\n");

    // 1. GET ALL
    await getEmployees();

    // 2. GET ONE
    await getEmployee(3); // Fetching user ID 3

    // 3. CREATE
    const newEmp = {
        name: "Aditya",
        email: "aditya@example.com",
        role: ".NET Developer" 
    };
    await createEmployee(newEmp);

    // 4. UPDATE
    const updatedEmp = {
        name: "Aditya (Senior)",
        email: "aditya.senior@example.com",
        role: "Senior .NET Developer"
    };
    await updateEmployee(3, updatedEmp);

    // 5. DELETE
    await deleteEmployee(3);
    
    console.log("===== ALL API CALLS COMPLETED =====");
}

runAPIClient();
