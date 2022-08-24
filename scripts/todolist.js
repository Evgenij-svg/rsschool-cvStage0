const WriteTodoList = document.querySelector('.WriteTodoList');
const Lists = document.querySelector('.Lists');
let checkTodo;

let TodoList = [];
if (localStorage.getItem('Todo') != null) {
    TodoList = JSON.parse(localStorage.getItem('Todo'));
    out();
}
const ListExample = { Task: '' };

function AddTask() {
    if (WriteTodoList.value != '') {
        const tempTask = {};
        tempTask.todo = WriteTodoList.value;
        tempTask.check = false;
        TodoList.push(tempTask);
        console.log(TodoList);
        out();
        WriteTodoList.value='';
        localStorage.setItem('Todo', JSON.stringify(TodoList));
    }
};

function completTask(indx) {
    console.log(indx);
    TodoList[indx].check = !TodoList[indx].check;
    if (TodoList[indx].check) {
        document.querySelectorAll('.spanTask')[indx].style.textDecoration =
            'line-through';
    } else {
        document.querySelectorAll('.spanTask')[indx].style.textDecoration =
            'none';
    }
    localStorage.setItem('Todo', JSON.stringify(TodoList));
}
function TaskExample(task, check, indx) {
    return `<div class="task">
    <input class="TodoCheck" onclick="completTask(${indx})" type="checkbox" ${
        check ? 'checked' : ''
    }>
    <span class="spanTask">${task}</span>
    <button class="deleteTask" onclick="deletTask(${indx})"><img src="svg/basura.svg"/ height="15"></button>
    </div>`;
}

function out() {
    let out = '';
    TodoList.forEach((elem, indx) => {
        out = out + TaskExample(elem.todo, elem.check, indx);
    });
    checkTodo = document.querySelectorAll('.TodoCheck');

    Lists.innerHTML = out;
}
/*
TodoList.onchange=function(){
    checkTodo.forEach((elem,indx)=>{
        elem.onchange=function(){
            TodoList[indx].check=elem.checked;
        }
    })
}

*/
function deletTask(indx) {
    TodoList.splice(indx, 1);
    out();
    localStorage.setItem('Todo', JSON.stringify(TodoList));
}
