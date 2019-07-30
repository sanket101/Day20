let  vegDishes = ['dosa', 'idli', 'pulav'];
let nonvegDishes = ['chicken-biryani', 'egg-rice'];

const dishes = [...vegDishes,'tandoori-roti', ...nonvegDishes];

console.log(dishes);

numbers = [2,3,4,5,6,7,8];
console.log(Math.max(...numbers));

//rest operator
let players = ['Virat', 'Rohit', 'Dhoni', 'Raina', 'Dhawan'];

const [captain, vCaptain, ...team] = players;
console.log(team);