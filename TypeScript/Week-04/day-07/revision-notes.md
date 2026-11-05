# Week 4 Day 7 - TypeScript Revision Notes

## 1. JavaScript vs TypeScript
- JavaScript is dynamically typed: types are evaluated at runtime, meaning errors such as typos or invoking undefined functions often surface during execution.
- TypeScript is a statically typed superset of JavaScript developed by Microsoft. It checks types at compile time and compiles down to clean, standards-compliant JavaScript.
- TypeScript tooling provides autocomplete, rename refactoring, and inline documentation during development.

```typescript
// JavaScript (runtime error if property is missing)
function printUser(user) {
    console.log(user.name.toUpperCase());
}

// TypeScript (compile-time safety)
interface User {
    name: string;
}
function printUser(user: User): void {
    console.log(user.name.toUpperCase());
}
```

---

## 2. Type Inference
- TypeScript automatically deduces types based on assigned values without requiring explicit type annotations.
- If a variable is initialized with a value, TypeScript locks in that type.

```typescript
let employeeName = "Aditya"; // Inferred as string
let salary = 50000;          // Inferred as number
let isActive = true;         // Inferred as boolean

// employeeName = 123;       // Error: Type 'number' is not assignable to type 'string'
```

---

## 3. Why Avoid Unnecessary `any`
- `any` disables TypeScript's type checker entirely for that variable or expression.
- Using `any` spreads unchecked behavior through the codebase and eliminates auto-completion and compile-time guarantees.
- Use `unknown` instead when the type is not yet known. `unknown` forces type checking before any properties or methods can be accessed.

```typescript
// Unsafe with any
let badData: any = "Hello";
badData.nonExistentMethod(); // Compiles fine, crashes at runtime

// Safe with unknown
let safeData: unknown = "Hello";
if (typeof safeData === "string") {
    console.log(safeData.toUpperCase()); // Safe after narrowing
}
```

---

## 4. `unknown` vs `void` vs `never`
- `unknown`: Represents a value of any type, but cannot be operated on without prior type narrowing or assertion.
- `void`: Used as the return type of functions that do not return a value (or return `undefined`).
- `never`: Represents values that never occur, such as a function that always throws an error or enters an infinite loop, or an impossible branch in exhaustive checks.

```typescript
// unknown
function parsePayload(input: unknown): void {
    if (typeof input === "string") {
        console.log("Received string of length:", input.length);
    }
}

// void
function logMessage(msg: string): void {
    console.log(msg);
}

// never
function throwFatalError(message: string): never {
    throw new Error(message);
}
```

---

## 5. Arrays vs Tuples
- Arrays hold an arbitrary number of elements of the same type (or union of types). The length is dynamic.
- Tuples have a fixed number of elements where each position has a specific, predetermined type.

```typescript
// Array: variable length
const salaries: number[] = [45000, 50000, 60000];
salaries.push(70000);

// Tuple: fixed length and positional types
type KeyValuePair = [string, number];
const entry: KeyValuePair = ["id", 101];
// const invalid: KeyValuePair = [101, "id"]; // Error: incorrect order
```

---

## 6. Type Alias vs Interface
- `interface`: Best for defining object contracts, data models, and class implementations. Supports declaration merging and extension via `extends`.
- `type`: Can define object shapes, but can also represent primitives, unions, intersections, tuples, and function signatures. Does not support declaration merging.

```typescript
// Interface
interface Employee {
    id: number;
    name: string;
}
interface Manager extends Employee {
    reportsCount: number;
}

// Type alias
type Department = "IT" | "HR" | "Finance" | "Sales";
type EmployeeId = number | string;
type Coordinates = [number, number];
```

---

## 7. Optional and Readonly Properties
- Optional (`?`): Indicates that the property does not have to be provided; its value can be the declared type or `undefined`.
- `readonly`: Prevents assignment to the property after the object has been initialized.

```typescript
interface EmployeeProfile {
    readonly id: number;      // Cannot be modified after creation
    name: string;
    department?: string;      // Optional property
}

const profile: EmployeeProfile = { id: 1, name: "Rahul" };
// profile.id = 2;            // Error: Cannot assign to 'id' because it is a read-only property
```

---

## 8. Function Parameter and Return Types
- TypeScript requires parameters to have types when `noImplicitAny` is enabled.
- Return types can be inferred, but explicitly annotating them prevents unintended return values and documents function contracts clearly.

```typescript
function calculateTotalCompensation(
    baseSalary: number,
    bonus: number = 0,
    allowance?: number
): number {
    return baseSalary + bonus + (allowance ?? 0);
}
```

---

## 9. Union vs Intersection Types
- Union (`|`): Represents a value that can be one of several types. You can only safely access members common to all types in the union without narrowing.
- Intersection (`&`): Combines multiple types into one. The resulting type has all members of all combined types.

```typescript
// Union: either string or number
type ID = string | number;

// Intersection: combines all properties
interface ContactInfo {
    email: string;
    phone: string;
}
interface Identity {
    name: string;
}
type FullContact = Identity & ContactInfo;

const contact: FullContact = {
    name: "Aditya",
    email: "aditya@company.com",
    phone: "1234567890"
};
```

---

## 10. Type Narrowing
- Type narrowing is the process of refining a broader type (like `string | number` or `unknown`) to a more specific type within a conditional block.
- Techniques:
  - `typeof` for primitives (`string`, `number`, `boolean`, `symbol`).
  - `instanceof` for class instances (`Error`, `Date`).
  - `in` operator to check property presence.
  - Custom type guards with type predicates (`param is Type`).

```typescript
function formatInput(val: string | number): string {
    if (typeof val === "string") {
        return val.trim().toUpperCase();
    }
    return `$${val.toFixed(2)}`;
}

// Custom type guard
interface Admin {
    role: "admin";
    permissions: string[];
}
function isAdmin(user: any): user is Admin {
    return user && user.role === "admin";
}
```

---

## 11. Optional Chaining and Nullish Coalescing
- Optional Chaining (`?.`): Safely accesses nested properties. If the reference is `null` or `undefined`, the expression short-circuits to `undefined` without throwing a runtime error.
- Nullish Coalescing (`??`): Returns the right-hand operand only when the left-hand operand is `null` or `undefined`. Unlike `||`, it does not treat `0`, `""`, or `false` as falsy fallbacks.

```typescript
interface CompanyData {
    company?: {
        address?: {
            city?: string;
        };
    };
    headcount?: number;
}

const data: CompanyData = { headcount: 0 };

// Optional chaining
const city = data.company?.address?.city ?? "Unknown City";

// Nullish coalescing vs Logical OR
const count1 = data.headcount ?? 10; // 0 (0 is valid number, not null/undefined)
const count2 = data.headcount || 10; // 10 (treats 0 as falsy)
```

---

## 12. Understanding `Promise<Employee[]>`
- In asynchronous TypeScript, a function returning `Promise<Employee[]>` represents an eventual result that will resolve to an array of `Employee` objects.
- When unwrapped with `await`, TypeScript assigns the type `Employee[]` to the variable.

```typescript
interface Employee {
    id: number;
    name: string;
}

async function fetchEmployees(): Promise<Employee[]> {
    const response = await fetch("/api/employees");
    const data: Employee[] = await response.json();
    return data;
}

async function run(): Promise<void> {
    const list: Employee[] = await fetchEmployees();
    console.log(list.length);
}
```

---

## 13. Normal Import vs `import type`
- Normal `import`: Imports values, classes, or functions. The bundler or compiler may keep the import statement in the compiled JavaScript output if runtime code is used.
- `import type`: Explicitly indicates that the import is used exclusively for TypeScript type checking. The TypeScript compiler completely strips it away during compilation, guaranteeing zero runtime overhead and preventing circular dependency issues.

```typescript
// Type-only import (erased at runtime)
import type { Employee, Department } from "./types";

// Runtime value import (retained if used)
import { addEmployee, calculateAverageSalary } from "./employeeService";
```

---

## Revision Self-Assessment

| Question | Topic | Score (0-2) | Status |
| :--- | :--- | :---: | :--- |
| 1 | TypeScript vs JavaScript | 2 | Mastered |
| 2 | Type inference | 2 | Mastered |
| 3 | Avoiding any & using unknown | 2 | Mastered |
| 4 | unknown vs void vs never | 2 | Mastered |
| 5 | Arrays vs Tuples | 2 | Mastered |
| 6 | Type vs Interface | 2 | Mastered |
| 7 | Optional & readonly properties | 2 | Mastered |
| 8 | Function parameters & returns | 2 | Mastered |
| 9 | Union vs Intersection types | 2 | Mastered |
| 10 | Type narrowing techniques | 2 | Mastered |
| 11 | Optional chaining & nullish coalescing | 2 | Mastered |
| 12 | Promise generic return types | 2 | Mastered |
| 13 | Normal import vs import type | 2 | Mastered |
| **Total** | **All 13 Topics** | **26 / 26** | **Ready for Advanced TypeScript** |
