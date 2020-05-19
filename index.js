import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const final2014 = fifaData.filter((element) => {
    return element.Year === 2014 && element.Stage === 'Final';
});

console.log(final2014);

console.log(final2014[0]["Home Team Name"]);

console.log(final2014[0]['Away Team Name']);

console.log(final2014[0]['Home Team Goals']);

console.log(final2014[0]['Away Team Goals']);

const hGoals = final2014[0]['Home Team Goals'];
const aGoals = final2014[0]['Away Team Goals'];

const winning = function(arr) {
    if (arr[0]['Home Team Goals'] > arr[0]['Away Team Goals']) {
        return arr[0]['Home Team Name']
    } else if (arr[0]['Home Team Goals'] < arr[0]['Away Team Goals']) {
        return arr[0]['Away Team Name']
    } else {
        return arr[0]['Winning conditions']
    }
}

console.log(winning(final2014));



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

const getFinals = fifaData.filter((data) => {
    return data.Stage === 'Final';
});

console.log(getFinals);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(arr) {
    let years = [];
    for ( let i = 0; i < arr.length; i++) {
        years.push(arr[i].Year);
    };
    return years;
};

console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

const getWinners = function(arr) {

    let winners =[];

    for ( let i = 0; i < arr.length; i++) {

        if (arr[i]['Home Team Goals'] > arr[i]['Away Team Goals']) {
            winners.push(arr[i]['Home Team Name']) ;
        } else if (arr[i]['Home Team Goals'] < arr[i]['Away Team Goals']) {
            winners.push(arr[i]['Away Team Name']);
        } else {
            winners.push(arr[i]['Win conditions']);
        };
    };

    return winners;
};

console.log(getWinners(getFinals));


/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {

    const wby = [];

    for ( let i = 0; i < getWinners.length; i++){
        wby.push(`In ${getYears[i]}, ${getWinners[i]} won the world cup!`);
    };

    return wby;
};

console.log(getWinnersByYear(getWinners(getFinals),getYears(getFinals)));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    let avgGoals = [];
    let totalGames = data.length;

    const getAverageHomeGoals = data.reduce((total, goals) => {
        return total + goals['Home Team Goals'];
    },0);
    const getAverageAwayGoals = data.reduce((total, goals) => {
        return total + goals['Away Team Goals'];
    },0);

    avgGoals = [{"Average Home Goals": (getAverageHomeGoals/totalGames).toFixed(2), "Average Away Goals": (getAverageAwayGoals/totalGames).toFixed(2)}];

    return avgGoals;

};

console.log(getAverageGoals(fifaData));


// console.log(getAverageGoals);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {

    let winners =[];
    let totalWins = 0;

    for ( let i = 0; i < data.length; i++) {

        if (data[i]['Home Team Goals'] > data[i]['Away Team Goals']) {
            winners.push(data[i]['Home Team Initials']) ;
        } else if (data[i]['Home Team Goals'] < data[i]['Away Team Goals']) {
            winners.push(data[i]['Away Team Initials']);
        } else {
            winners.push(data[i]['Win conditions']);
        };
    };

    for ( let i = 0; i < winners.length; i++){
        if (teamInitials === winners[i]){
            totalWins+1;
        };
    };

    return totalWins;

};

console.log(getCountryWins(fifaData, 'GER'));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
