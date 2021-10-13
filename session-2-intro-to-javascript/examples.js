// This is a single line comment

console.log("1" + "11")
console.log(1 + 11)
console.log((4 < 6) && (8 !== 10))



const helloWorld = () => {
    console.log("Hello, World");
};


const animePlaner = (totalHours, currentMinutes) => {
    const totalMinutes = totalHours * 60;
    const remainingMinutes = totalMinutes - currentMinutes;
    const remainingEpisodes = remainingMinutes / 20;
    return remainingEpisodes;
}


const sayHello = () => {
    console.log("Hello");
};

const introduce = (ifGreet, greet) => {
    if (ifGreet) {
        greet();    
    }
    console.log("My name is Alex");
};

introduce(true, sayHello);


if (testScore >= 90) {
    console.log("You got an A");
}
else if (testScore >= 80) {
    console.log("You got a B");
}
else if (testScore >= 70) {
    console.log("You got a C");
} 
else {
    console.log("You failed");
}

const student = {
    name: "Joe Bruin",
    email: "joebruin@ucla.edu",
    UID: 123456789,
    isTrueBruin: true,
    favDiningHall: "Bplate"
}