const simulateIntensiveAsyncTask = async () => {
    console.log("\n-----------\n");
    console.log("Initial press!");
    const ms = 1000 + Math.floor(Math.random() * 2000);
    await new Promise(resolve => setTimeout(resolve, ms));
    console.log(`The task took ${ms / 1000} seconds to complete. That was intense!`);

    return ms / 1000;
}

const simulateIntensiveTask = () => {
    console.log("\n-----------\n");
    console.log("Initial press!");
    const ms = 1000 + Math.floor(Math.random() * 2000);
    const start = Date.now();
    while (Date.now() < start + ms) {}
    console.log(`The task took ${ms / 1000} seconds to complete. That was intense!`);

    return ms / 1000;
}

export { simulateIntensiveTask, simulateIntensiveAsyncTask };
