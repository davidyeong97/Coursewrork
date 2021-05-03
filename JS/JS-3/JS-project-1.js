const getUserChoice = userInput => {
    userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    } else {
        console.log('ERROR')
    }
}

const getComputerChoice = computerInput => {
    computerInput = Math.floor(Math.random() * 3);
    // console.log(computerInput);
    if (computerInput === 0) {
        return 'rock'
    } else if (computerInput === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'tie'
    }
    if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'computer won';
    } else if (userChoice === 'rock' && computerChoice !== 'paper') {
        return 'user won'
    }
    if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'computer won';
    } else if (userChoice === 'paper' && computerChoice !== 'scissors') {
        return 'user won'
    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'computer won';
    } else if (userChoice === 'scissors' && computerChoice !== 'rock') {
        return 'user won'
    }
}

const playGame = () => {
    let userChoice = getUserChoice('rock');
    console.log(`You played ${userChoice}`);

    let computerChoice = getComputerChoice();
    console.log(`Computer played ${computerChoice}`);

    let result = determineWinner(userChoice, computerChoice)
    console.log(result);
}

playGame()