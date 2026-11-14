// 04-mapped-types.ts
// Mapped types: transforming object properties using keyof, in, and modifiers (+?, -?, +readonly, -readonly).

interface Employee {
    id: number;
    name: string;
    salary: number;
    email?: string;
}

// 1. Optional modifier (?): makes all properties optional (analogous to Partial<T>)
type Optional<T> = {
    [K in keyof T]?: T[K];
};

type UpdateEmployee = Optional<Employee>;
const patch: UpdateEmployee = { salary: 55000 };
console.log("Mapped Optional:", patch);

// 2. Readonly modifier: marks all properties readonly (analogous to Readonly<T>)
type MakeReadonly<T> = {
    readonly [K in keyof T]: T[K];
};

type ReadonlyEmployee = MakeReadonly<Employee>;
const locked: ReadonlyEmployee = { id: 101, name: "Rahul", salary: 50000 };
console.log("Mapped Readonly:", locked.name);

// 3. Remove optional modifier (-?): makes all properties required (analogous to Required<T>)
type MakeRequired<T> = {
    [K in keyof T]-?: T[K];
};

type RequiredEmployee = MakeRequired<Employee>;
const complete: RequiredEmployee = {
    id: 101,
    name: "Rahul",
    salary: 50000,
    email: "rahul@company.com" // Must be provided
};
console.log("Mapped Required:", complete.email);

// 4. Remove readonly modifier (-readonly): makes properties mutable
type MakeMutable<T> = {
    -readonly [K in keyof T]: T[K];
};

interface ImmutableConfig {
    readonly host: string;
    readonly port: number;
}

type MutableConfig = MakeMutable<ImmutableConfig>;
const config: MutableConfig = { host: "localhost", port: 8080 };
config.port = 9000; // Mutable
console.log("Mutable port:", config.port);

export type {
    Employee,
    Optional,
    UpdateEmployee,
    MakeReadonly,
    ReadonlyEmployee,
    MakeRequired,
    RequiredEmployee,
    MakeMutable,
    MutableConfig
};
