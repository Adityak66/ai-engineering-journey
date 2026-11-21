// 10-abstract-class.ts
// Abstract base class combined with interface implementation via 'implements'.

interface Payable {
    calculateMonthlyPay(): number;
}

interface Reportable {
    getSummary(): string;
}

abstract class EmployeeBase {
    public readonly id: number;
    protected name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    // Subclasses must provide their own calculation implementation
    public abstract calculateAnnualCompensation(): number;

    // Shared concrete behavior inherited by all subclasses
    public getEmployeeLabel(): string {
        return `[#${this.id}] ${this.name}`;
    }
}

// Extends abstract base class and implements two contracts
class FullTimeEmployee extends EmployeeBase implements Payable, Reportable {
    private annualSalary: number;
    private annualBonus: number;

    constructor(id: number, name: string, annualSalary: number, annualBonus: number) {
        super(id, name);
        this.annualSalary = annualSalary;
        this.annualBonus = annualBonus;
    }

    public calculateAnnualCompensation(): number {
        return this.annualSalary + this.annualBonus;
    }

    public calculateMonthlyPay(): number {
        return Math.round(this.annualSalary / 12);
    }

    public getSummary(): string {
        return `${this.getEmployeeLabel()} - Monthly: $${this.calculateMonthlyPay()}, Annual Total: $${this.calculateAnnualCompensation()}`;
    }
}

// Cannot instantiate EmployeeBase directly:
// const base = new EmployeeBase(1, "Test"); // Compile error

const staff = new FullTimeEmployee(101, "Aditya", 96000, 12000);
console.log(staff.getSummary());

export type { Payable, Reportable };
export { EmployeeBase, FullTimeEmployee };
