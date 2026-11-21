// 09-access-modifiers.ts
// Demonstrating public, private, and protected class members in inheritance.

class Employee {
    // Only accessible within Employee methods
    private salary: number;
    // Accessible within Employee and any subclass extending Employee
    protected name: string;
    public readonly department: string;

    constructor(name: string, department: string, salary: number) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Public accessor exposing private salary safely
    public getSalary(): number {
        return this.salary;
    }

    public giveRaise(amount: number): void {
        if (amount <= 0) {
            throw new Error("Raise amount must be positive");
        }
        this.salary += amount;
    }
}

class Manager extends Employee {
    private teamSize: number;

    constructor(name: string, department: string, salary: number, teamSize: number) {
        super(name, department, salary);
        this.teamSize = teamSize;
    }

    public describeRole(): string {
        // Subclass CAN read protected 'this.name' and public 'this.getSalary()'
        // Subclass CANNOT directly access private 'this.salary'
        return `${this.name} manages ${this.teamSize} members in ${this.department} (Salary: ${this.getSalary()})`;
    }
}

const manager = new Manager("Priya", "IT", 90000, 6);
console.log(manager.describeRole());
console.log("Public department:", manager.department);
// Outside code cannot access manager.name (protected) or manager.salary (private)

export { Employee, Manager };
