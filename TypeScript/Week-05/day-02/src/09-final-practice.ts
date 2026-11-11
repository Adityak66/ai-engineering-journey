// 09-final-practice.ts
// Final consolidation: Building robust, reusable generic utilities using all Day 2 operators.

interface Employee {
    id: number;
    name: string;
    department: string;
    salary: number;
    isActive: boolean;
}

const employeeRoster: Employee[] = [
    { id: 1, name: "Rahul", department: "IT", salary: 50000, isActive: true },
    { id: 2, name: "Priya", department: "HR", salary: 60000, isActive: true },
    { id: 3, name: "Aditya", department: "IT", salary: 75000, isActive: false },
    { id: 4, name: "Sarah", department: "Finance", salary: 62000, isActive: true }
];

// Utility 1: pluck() extracts an array of property values across a collection of objects
function pluck<T, K extends keyof T>(items: readonly T[], key: K): T[K][] {
    return items.map(item => item[key]);
}

const employeeNames: string[] = pluck(employeeRoster, "name");
const employeeSalaries: number[] = pluck(employeeRoster, "salary");
const employeeIds: number[] = pluck(employeeRoster, "id");

console.log("Plucked employee names:", employeeNames.join(", "));
console.log("Plucked employee salaries:", employeeSalaries);
console.log("Plucked employee IDs:", employeeIds);

// Utility 2: pick() creates a partial projection containing only requested keys
function pick<T extends object, K extends keyof T>(
    source: T,
    keys: readonly K[]
): Pick<T, K> {
    const result = {} as Pick<T, K>;
    keys.forEach(key => {
        result[key] = source[key];
    });
    return result;
}

const sampleEmp = employeeRoster[0];
const publicProfile = pick(sampleEmp, ["id", "name", "department"]);
console.log("Picked public profile:", publicProfile);

// Utility 3: groupBy() groups items by a specific key using keyof and indexed access
function groupBy<T, K extends keyof T>(
    items: readonly T[],
    key: K
): Map<T[K], T[]> {
    const groups = new Map<T[K], T[]>();
    for (const item of items) {
        const groupKey = item[key];
        const existing = groups.get(groupKey) ?? [];
        existing.push(item);
        groups.set(groupKey, existing);
    }
    return groups;
}

const byDepartment = groupBy(employeeRoster, "department");
console.log("Grouped departments count:", byDepartment.size);
byDepartment.forEach((list, dept) => {
    console.log(`Department [${String(dept)}]: ${list.length} staff member(s)`);
});

// Utility 4: Strongly typed configuration definition using 'as const', 'typeof', and 'keyof'
const SYSTEM_CONFIG = {
    appName: "Enterprise Employee Management",
    version: "2.1.0",
    maxPageSize: 100,
    supportedCurrencies: ["INR", "USD", "EUR"] as const
} as const;

type SystemConfigType = typeof SYSTEM_CONFIG;
type ConfigProperty = keyof SystemConfigType;
type SupportedCurrency = typeof SYSTEM_CONFIG.supportedCurrencies[number];

function readConfig<K extends ConfigProperty>(key: K): SystemConfigType[K] {
    return SYSTEM_CONFIG[key];
}

console.log("Config appName:", readConfig("appName"));
console.log("Config version:", readConfig("version"));
console.log("Max page size:", readConfig("maxPageSize"));

export { pluck, pick, groupBy, SYSTEM_CONFIG, readConfig };
export type { SystemConfigType, ConfigProperty, SupportedCurrency };
