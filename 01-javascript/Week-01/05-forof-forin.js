const skill = ["JavaScript", "HTML", "CSS", "React", "Node.js"];

// for of loop
for (const s of skill) {
    console.log("skill:", s);
}

// for in loop
const profile = {
    name: "Aditya",
    age: 23,
    role: ".Net Developer"
};

for (const key in profile) {
    console.log(key, profile[key]);
}

