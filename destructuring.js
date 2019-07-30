//Array Destructuring
let players = ['Virat', 'Rohit', 'Dhoni', 'Raina', 'Dhawan'];

const [captain, , ,vCaptain] = players;

console.log(`Captain : ${captain}, Vice-Captain : ${vCaptain}`);

let batsmen = 'sachin';
let runner = 'ganguly';

[batsmen, runner] = [runner, batsmen];

console.log(`After the run, the batsmen is ${batsmen} and runner is ${runner}`);

//Object Destructuring
const player = {
    name : 'Virat Kohli',
    centuries : 28,
    halfCenturies : 60,
    matches : 350
}

console.log(player.name);
//Extract name, centuries, matches from player object and put it in respective variables
const {name:playerName, centuries, matches, playesFor = 'India'} = player;

console.log(`${playerName} has played for ${matches} number of matches for ${playesFor}`);

let item = {
    name : 'iPhone',
    price : 10000
}

let currencyCalculator = function({price : amount}){
    return {
        'INR' : amount,
        'USD' : amount / 68,
        'EURO' : amount / 80
    }
}

const {USD:amountInDollar} = currencyCalculator(item);

console.log(`Amount in Dollars : ${amountInDollar}`);