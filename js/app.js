document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const task = {
        title,
        description
    };

   if (localStorage.getItem('tasks') === null){
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
   } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
   }
   getTask();
   document.getElementById('formTask').reset
    e.preventDefault();
    
}

function getTask(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let view = document.getElementById('tasks');
    view.innerHTML = '';
    for(let i = 0; i < tasks.length; i++){

        let title = tasks[i].title
        let description = tasks[i].description

        view.innerHTML += `
        <div class="card mb-2">
            <div class="card-body">
                <h4 class="alert-heading">${title}</h4>
                <p>${description}</p>
                <a class="btn btn-danger" onclick="deleteTask('${title}')">Delete</a>
            </div>
        </div>
        `
    }
}

function deleteTask(title){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++){
        if(tasks[i].title == title){
            tasks.splice(i, 1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTask();
}

getTask();