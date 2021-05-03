let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const age = 25;

if (age > 18 && registeredEarly === true) {
    raceNumber += 1000
}

if (age > 18 && registeredEarly === true) {
    console.log(`${raceNumber} will race at 9:30am`);
} else if (age > 18 && registeredEarly !== true) {
    console.log('Late adults run at 11:00 am')
} else if (age < 18) {
    console.log('Youth registrants run at 12:30 pm (regardless of registration)');
} else {
    console.log('Go to the registration desk for more info.');
}