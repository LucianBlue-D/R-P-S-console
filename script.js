console.log("Hello")
const choices = ['ROCK' , 'PAPER' , 'SCISSORS'];

function getRandomItem(){
    return choices[Math.floor(Math.random()*choices.length)];
}

console.log(getRandomItem())
console.log(getRandomItem())
