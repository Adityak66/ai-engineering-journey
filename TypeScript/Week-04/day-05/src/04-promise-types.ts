export {};

async function getSalary(): Promise<number> {
    return 50000;
}

async function getEmployeeName(): Promise<string> {
    return "Rahul";
}

async function main(): Promise<void> {
    const salary = await getSalary();
    const name = await getEmployeeName();
    console.log(name, salary);
}

main();
