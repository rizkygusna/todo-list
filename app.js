const todoList = [];
let userInput = prompt('Input your command');

while (userInput.toLowerCase()!=='quit'){
    userInput = prompt('Input your command');
}

if (userInput.toLowerCase()==='quit'){
    console.log('Youre quitting')
}