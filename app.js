const todoList = [];
let userInput = '';

while (userInput.toLowerCase()!=='quit'){
    userInput = prompt('Input your command');
    if (userInput==='new'){
        todoItem = prompt('Input what to do');
        todoList.push(todoItem);
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
    else if(userInput==='delete'){
        if(todoList.length<=1){
            alert("To do is empty")
        }
        else{
            indexTarget = prompt('Input to do index that will be deleted');
            if ((parseInt(indexTarget)>=0) && (parseInt(indexTarget) <= todoList.length)) {
                todoList.splice(indexTarget,1)
            }
            else{
                console.log('Invalid index number')
            }
        }
    }
}

if (userInput.toLowerCase()==='quit'){
    console.log('Youre quitting')
}