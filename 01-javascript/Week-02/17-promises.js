// Promise

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data loaded successfully");
    }, 2000);

});

console.log(promise);


const promisee = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("Something went wrong");
    }, 2000);

});