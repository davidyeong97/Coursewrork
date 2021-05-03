const getSleepHours = (day) => {
    switch (day) {
        case 'Monday':
            return 5;
        case 'Tuesday':
            return 6;
        case 'Wednesday':
            return 5;
        case 'Thursday':
            return 6;
        case 'Friday':
            return 8;
        case 'Saturday':
            return 8;
        case 'Sunday':
            return 5;
    }
}

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')


const getIdealSleepHours = () => {
    let idealHours = 8
    return idealHours * 7
}

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()

    if (actualSleepHours === idealSleepHours) {
        console.log('You go the perfect amount of sleep!')
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed!')
    } else {
        console.log(`You should get more rest! Sleep ${idealSleepHours - actualSleepHours} more hours!`)
    }
}

calculateSleepDebt()