function throttle(callback, delay) {
    let lastRun = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastRun >= delay) {
            lastRun = now;
            callback(...args);
        }
    };
}

const logScroll = throttle(() => {
    console.log("Scroll handler ran at:", new Date().toLocaleTimeString());
}, 500);

console.log("Simulating 20 rapid scroll events (one every 100ms)...");

let count = 0;
const intervalId = setInterval(() => {
    count++;
    logScroll();

    if (count >= 20) {
        clearInterval(intervalId);
        console.log("Finished. Notice that even with 20 events, the throttled handler only ran ~4 times (every 500ms)!");
    }
}, 100);

