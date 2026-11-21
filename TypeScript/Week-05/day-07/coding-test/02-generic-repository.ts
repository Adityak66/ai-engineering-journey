// 02-generic-repository.ts
// Generic repository class constrained to entities with an 'id' field.

type EntityId = number | string;

class GenericRepository<T extends { id: EntityId }> {
    private items: T[] = [];

    // Adds a new entity if its ID does not already exist
    public add(item: T): void {
        const exists = this.items.some(existing => existing.id === item.id);
        if (exists) {
            throw new Error(`Item with ID '${String(item.id)}' already exists`);
        }
        this.items = [...this.items, item];
    }

    // Retrieves an entity by ID or returns undefined
    public getById(id: EntityId): T | undefined {
        return this.items.find(item => item.id === id);
    }

    // Returns a shallow copy to prevent external mutation of internal storage
    public getAll(): T[] {
        return [...this.items];
    }

    // Removes an entity by ID and returns whether deletion occurred
    public delete(id: EntityId): boolean {
        const initialLength = this.items.length;
        this.items = this.items.filter(item => item.id !== id);
        return this.items.length < initialLength;
    }
}

interface Employee {
    id: number;
    name: string;
    department: string;
}

const employeeRepo = new GenericRepository<Employee>();
employeeRepo.add({ id: 1, name: "Rahul", department: "IT" });
employeeRepo.add({ id: 2, name: "Priya", department: "HR" });

console.log("Found ID 1:", employeeRepo.getById(1)?.name);
console.log("All count before delete:", employeeRepo.getAll().length);
console.log("Deleted ID 2:", employeeRepo.delete(2));
console.log("All count after delete:", employeeRepo.getAll().length);

export { GenericRepository };
