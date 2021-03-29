const todoList = [];
let userInput = '';

while (userInput.toLowerCase()!=='quit'){
    userInput = prompt('Input your command');
    if (userInput==='new'){
        todoList.push(prompt('Input what todo'));
        console.log(todoList);
        alert("To do has been added")
    }
    else if(userInput==='list'){
        if(todoList.length<1){
            alert("To do is empty")
        }
        else{
            console.log('**************************');
            for(let i = 0; i<todoList.length; i++){
                console.log(`${i}: ${todoList[i]}`);
            }
            console.log('**************************')
        }
    }
}

if (userInput.toLowerCase()==='quit'){
    console.log('Youre quitting')
}