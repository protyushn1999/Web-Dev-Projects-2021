const form = document.querySelector('#todoform');
const ul= document.querySelector('#ul-adder');
const counter = document.querySelector('#task-counter');

let taskList = [];
let totalTasks = 0;


function renderList(taskId) {
    for(let i = 0; i < taskList.length; i++) {
        if(taskList[i].id === taskId) {
            const li = document.querySelector(`li[id = '${taskId}']`);
            if(taskList[i].done) {
                li.classList.add('done');
            } else {
                li.classList.remove('done');
            }
        }
    } 
}
function markTaskAsComplete (taskId) {
    for(let i = 0; i < taskList.length; i++) {
        if(taskList[i].id === taskId && taskList[i].done === false) {
            taskList[i].done = true;
            break;
        }
        else if(taskList[i].id === taskId && taskList[i].done === true) {
            taskList[i].done = false;
            break;
        }
    }
    renderList(taskId);
    showNotification('Task Toggled');
}

function showNotification(text) {
    console.log(text);
}


function addRenderList(task) {
    const li = document.createElement('li');
    li.setAttribute('id', task.id);
    li.innerHTML = 
    `
    <div class="check-div">
    <input type="checkbox" name="q" id="${task.id}" class = "clickbox">
    <label for="${task.id}"> ${task.name}</label>
    </div>
    <button type="submit" class = "clickbtn" id = "${task.id}">
    <span class="material-icons" id = "${task.id}">clear</span>
    </button>
     `
    ul.append(li);
    li.classList.add('render-list');
    counter.innerText = totalTasks;
}

function deleteRenderList(taskId) {
    const li = document.querySelector(`li[id = '${taskId}']`);
    li.remove();
    counter.innerText = totalTasks;
}

function deleteTask (taskId) {
    for(let i = 0; i < taskList.length; i++) {
        if(taskList[i].id === taskId) {
            taskList.splice(i, 1);
            totalTasks--;
            break;
        }
    }
    deleteRenderList(taskId);
    showNotification('Task deleted');
}

function addTask (task) {
    if(task) {
        taskList.push(task);
        totalTasks++;
        addRenderList(task);
        showNotification('Task added');
    }
    else {
        showNotification('Task not added');
    }
}


function dataTypedByUSer() {
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const dataToBeAdded = form.elements.query.value;
        if(dataToBeAdded === '') {
            showNotification('Please enter a task');
            return;
        } else {    
            const id = Date.now().toString();
            console.log(dataToBeAdded);
            const obj = {
                name: dataToBeAdded,
                id: id,
                done: false
            };
            addTask(obj);
            form.elements.query.value = '';
        }
    })
};

dataTypedByUSer();

function handleClick(e) { 
    //console.log(e.target);
    if(e.target.className === "clickbox")
    {
        markTaskAsComplete(e.target.id);
        //console.log(e.target.id);
        return;
    }

    else if (e.target.className === "material-icons" || e.target.className === "clickbtn") {
        //console.log(e.target.id);
        deleteTask(e.target.id);
        //console.log(e.target.id);
    }

}
document.addEventListener('click' , handleClick);

