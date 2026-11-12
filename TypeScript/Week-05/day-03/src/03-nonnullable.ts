// 03-nonnullable.ts
// NonNullable<T> excludes 'null' and 'undefined' from union types.

type NullableEmployeeName = string | null | undefined;
type ValidEmployeeName = NonNullable<NullableEmployeeName>; // string

type NullableEmployeeId = number | null | undefined;
type ValidEmployeeId = NonNullable<NullableEmployeeId>; // number

const confirmedName: ValidEmployeeName = "Aditya Kale";
const confirmedId: ValidEmployeeId = 105;

console.log(`Confirmed employee: [${confirmedId}] ${confirmedName}`);

// Practical helper: validates and strips nullable types from optional inputs
function ensureValidValue<T>(value: T, fallbackMessage: string): NonNullable<T> {
    if (value === null || value === undefined) {
        throw new Error(fallbackMessage);
    }
    return value as NonNullable<T>;
}

const rawInput: string | null = "Engineering";
const validDepartment: NonNullable<typeof rawInput> = ensureValidValue(rawInput, "Department is required");

console.log("Validated department:", validDepartment.toUpperCase());

// Filtering null and undefined values out of an array cleanly
const rawIdList: NullableEmployeeId[] = [101, null, 102, undefined, 103];
const cleanIds: ValidEmployeeId[] = rawIdList.filter(
    (id): id is ValidEmployeeId => id !== null && id !== undefined
);

console.log("Filtered valid IDs:", cleanIds);

export type { NullableEmployeeName, ValidEmployeeName, NullableEmployeeId, ValidEmployeeId };
export { ensureValidValue };
