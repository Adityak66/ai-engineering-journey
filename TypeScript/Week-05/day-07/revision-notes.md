# Week 5 Day 7 - Advanced TypeScript Revision Notes

## 1. What are generics?
Generics allow functions, interfaces, type aliases, and classes to operate over a variety of data types while keeping the relationship between inputs and outputs intact. A type parameter such as `<T>` acts as a placeholder resolved at the call site or instantiation site.

```typescript
function identity<T>(value: T): T {
    return value;
}

const text = identity<string>("TypeScript");
const count = identity(42);
```

## 2. Why use generics instead of `any`?
Using `any` disables compile-time type checking and loses information about what type went into or came out of a function. Generics capture the actual type passed in, preserving autocomplete and catching invalid operations before runtime.

```typescript
function wrapAny(val: any): any {
    return val;
}
// wrapAny("hello").toFixed(); // No compile error, fails at runtime

function wrapGeneric<T>(val: T): T {
    return val;
}
// wrapGeneric("hello").toFixed(); // Compile error: Property 'toFixed' does not exist on type 'string'
```

## 3. What is a generic constraint?
A generic constraint narrows which types a generic parameter can accept using the `extends` keyword. This guarantees that specific properties or structures exist on `T` inside the function or class body.

```typescript
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

getLength("hello");      // Valid
getLength([1, 2, 3]);    // Valid
// getLength(100);       // Error: number does not have a length property
```

## 4. What is `keyof`?
The `keyof` operator produces a union type consisting of all known property names (keys) of an object type.

```typescript
interface Employee {
    id: number;
    name: string;
    salary: number;
}

type EmployeeKey = keyof Employee; // "id" | "name" | "salary"
```

## 5. What is `typeof` in a type position?
In JavaScript, `typeof` inspects values at runtime (`"string"`, `"number"`, etc.). In a TypeScript type position, `typeof` extracts the static type of an existing variable, object, or function.

```typescript
const defaultConfig = {
    retries: 3,
    timeoutMs: 5000
};

type AppConfig = typeof defaultConfig; // { retries: number; timeoutMs: number }
```

## 6. What are indexed access types?
Indexed access types look up the type of a specific property (or union of properties) on another type using bracket syntax `T[K]`.

```typescript
interface Employee {
    id: number;
    name: string;
    department: string;
}

type EmployeeName = Employee["name"];               // string
type IdOrDept = Employee["id" | "department"];      // number | string
```

## 7. What is `Partial`?
`Partial<T>` is a built-in utility type that constructs a new type with all top-level properties of `T` set to optional (`?`). It is commonly used for patch/update payloads.

```typescript
interface Employee {
    id: number;
    name: string;
    salary: number;
}

type EmployeePatch = Partial<Employee>;
const update: EmployeePatch = { salary: 65000 };
```

## 8. What is `Required`?
`Required<T>` removes optionality (`-?`) from all top-level properties of `T`, making every field mandatory.

```typescript
interface UserInput {
    name: string;
    email?: string;
}

type CompleteUser = Required<UserInput>; // Both name and email are required
```

## 9. What is `Readonly`?
`Readonly<T>` marks every top-level property of `T` as `readonly`, preventing property reassignment during type checking (note: this is compile-time only and shallow).

```typescript
interface Config {
    port: number;
}

const cfg: Readonly<Config> = { port: 3000 };
// cfg.port = 8080; // Error: Cannot assign to 'port' because it is a read-only property
```

## 10. What is `Pick`?
`Pick<T, K>` creates a subset type by selecting only the specified keys `K` from `T`.

```typescript
interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
}

type EmployeeSummary = Pick<Employee, "id" | "name" | "department">;
```

## 11. What is `Omit`?
`Omit<T, K>` creates a subset type by taking all properties of `T` and removing the specified keys `K`.

```typescript
type CreateEmployee = Omit<Employee, "id">;
```

## 12. What is `Record`?
`Record<K, V>` constructs an object type whose property keys are `K` and whose property values are `V`. It is useful for dictionaries, lookup maps, and fixed key-value tables.

```typescript
type Department = "IT" | "HR" | "Finance";
const budgets: Record<Department, number> = {
    IT: 100000,
    HR: 50000,
    Finance: 80000
};
```

## 13. What is `ReturnType`?
`ReturnType<T>` extracts the return type of a function type `T`, avoiding duplicate manual type definitions.

```typescript
function buildSummary() {
    return { total: 10, active: 8 };
}

type SummaryResult = ReturnType<typeof buildSummary>; // { total: number; active: number }
```

## 14. What is `Parameters`?
`Parameters<T>` extracts the parameter types of a function type `T` as a tuple type.

```typescript
function registerUser(name: string, role: string) {
    return { name, role };
}

type RegisterArgs = Parameters<typeof registerUser>; // [name: string, role: string]
```

## 15. What are conditional types?
Conditional types choose between two types at compile time based on a type relationship check: `T extends U ? X : Y`.

```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<"abc">; // true
type B = IsString<123>;   // false
```

## 16. What are mapped types?
Mapped types build new object types by iterating over property keys using `[K in keyof T]` and optionally applying property modifiers (`?`, `-?`, `readonly`, `-readonly`).

```typescript
type NullableFields<T> = {
    [K in keyof T]: T[K] | null;
};
```

## 17. What is `infer`?
The `infer` keyword is used inside the `extends` clause of a conditional type to declare a type variable that TypeScript captures from a matched structure.

```typescript
type UnwrapArray<T> = T extends Array<infer Item> ? Item : T;

type Num = UnwrapArray<number[]>; // number
type Str = UnwrapArray<string>;   // string
```

## 18. What are type guards?
Type guards are runtime checks (`typeof`, `instanceof`, `in`, or custom functions returning a type predicate like `val is Employee`) that narrow an uncertain type (`unknown` or a union) inside a conditional block.

```typescript
function isNumberArray(value: unknown): value is number[] {
    return Array.isArray(value) && value.every(item => typeof item === "number");
}
```

## 19. What is a discriminated union?
A discriminated union combines multiple object types that share a common literal property (the discriminant, such as `status` or `kind`), enabling exhaustive compile-time narrowing in `switch` or `if` statements.

```typescript
type ApiResult<T> =
    | { status: "success"; data: T }
    | { status: "error"; message: string };
```

## 20. What are access modifiers?
Access modifiers control where class members can be read or modified at compile time:
- `public`: Accessible everywhere (default in TypeScript).
- `private`: Accessible only inside the declaring class.
- `protected`: Accessible inside the declaring class and any subclass extending it.

```typescript
class Account {
    public owner: string;
    protected department: string;
    private balance: number;

    constructor(owner: string, department: string, balance: number) {
        this.owner = owner;
        this.department = department;
        this.balance = balance;
    }

    public getBalance(): number {
        return this.balance;
    }
}
```

## 21. What is an abstract class?
An `abstract` class serves as a base blueprint that cannot be instantiated directly with `new`. It can include both shared concrete methods and `abstract` methods/properties that subclasses must implement.

```typescript
abstract class EmployeeBase {
    constructor(public name: string) {}
    abstract calculateAnnualPay(): number;
}
```

## 22. What does `implements` do?
The `implements` clause verifies at compile time that a class satisfies the contract defined by one or more interfaces. It does not copy properties or infer parameter types automatically; the class must explicitly declare and type its members.

```typescript
interface Printable {
    format(): string;
}

class Badge implements Printable {
    constructor(private label: string) {}
    format(): string {
        return `[Badge] ${this.label}`;
    }
}
```

## 23. What does `strict` mode enable?
Setting `"strict": true` in `tsconfig.json` turns on TypeScript's core family of strict type-checking flags together:
- `noImplicitAny`: Flags expressions and declarations with an implied `any` type.
- `strictNullChecks`: Requires explicit handling of `null` and `undefined`.
- `strictFunctionTypes`: Enforces stricter contravariant checking of function parameters.
- `strictBindCallApply`: Checks arguments passed to `bind`, `call`, and `apply`.
- `strictPropertyInitialization`: Ensures class fields are initialized in the constructor or marked optional.
- `useUnknownInCatchVariables`: Types `catch (err)` variables as `unknown` instead of `any`.
- `alwaysStrict`: Emits `"use strict"` in compiled JavaScript files.

---

## Self-Assessment Summary

| Topic Group | Questions Covered | Score | Notes |
| :--- | :---: | :---: | :--- |
| Generics and Constraints | 1 - 3 | 6 / 6 | Mastered identity, safety over `any`, and `extends` |
| Type Operators | 4 - 6 | 6 / 6 | Mastered `keyof`, type-level `typeof`, and indexed access |
| Utility Types | 7 - 14 | 16 / 16 | Mastered `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `ReturnType`, `Parameters` |
| Advanced Types and Guards | 15 - 19 | 10 / 10 | Mastered conditional/mapped types, `infer`, guards, and discriminated unions |
| OOP and Configuration | 20 - 23 | 8 / 8 | Practiced access modifiers, abstract classes, `implements`, and strict flags |
| **Total** | **23 / 23** | **46 / 46** | **Ready for React with TypeScript** |
