// this is a comment

/*
this is
a 
multiline
comment
*/

(true && false) || ((!false || true) && true);

false || (true && true)
false || true
true


const helloName = (name) => {
    console.log("Hello, " + name);
};

const triple = (x) => {
    x * 3;
};

const tripleWithReturn = (x) => {
    return x * 3;
};


const animePlanner = (totalHours, currentMinutes) => {
    const totalMinutes = totalHours * 60;
    const remainingMinutes = totalMinutes - currentMinutes;
    const canWatch = remainingMinutes / 20;
    console.log("You can watch " + canWatch + " episodes!");
};

let testScore = 50;
if (testScore > 60) {
    console.log("You passed!");
} else {
    console.log("You failed :(");
}


if (testScore >= 90) {
    console.log("You got an A");
} else if (testScore >= 80) {
    console.log("You got a B");
} else if (testScore >= 70) {
    console.log("You got a C");
} else {
    console.log("You failed");
}

if (testScore >= 90) {
    console.log("You got an A");
} if (testScore >= 80) {
    console.log("You got a B");
} if (testScore >= 70) {
    console.log("You got a C");
} else {
    console.log("You failed");
}


const checkMasks = (totalPeople, maskCount, announcment) => {
    if (maskCount / totalPeople >= 0.8) {
        return false;
    } else {
        console.log(announcment);
        return true;
    }
};



const applicant = {
    name: "Alex",
    email: "abc@gmail.com",
    gpa: 3.0
}



const playerTenz = {
    username: "TenZ",
    health: 100,
    armor: 50
}

const playerEugene = {
    username: "euglo", // what a scrub
    health: 2,
    armor: 0
}

const playerComparison = (player1, player2) => {
    const player1HealthArmor = player1.health + player1.armor;

    const player2HealthArmor = player2["health"] + player2["armor"];

    if (player1HealthArmor > player2HealthArmor) {
        return player1.username;
    } else if (player1HealthArmor < player2HealthArmor) {
        return player2.username;
    } else {
        return "Equal";
    }
};