const todoList = [];
let userInput = '';

while (userInput.toLowerCase()!=='quit'){
    userInput = prompt('Input your command');
    if (userInput==='new'){
        todoList.push(prompt('Input what todo'));
        console.log(todoList);
        alert("To do has been added")
    }
}

if (userInput.toLowerCase()==='quit'){
    console.log('Youre quitting')
}