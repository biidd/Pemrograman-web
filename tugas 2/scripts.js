function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task!');
        return;
    }

    const newTask = document.createElement('li');
    const taskSpan = document.createElement('span'); 
    taskSpan.textContent = taskValue;
    newTask.appendChild(taskSpan);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.onclick = function() {
        editTask(taskSpan, editBtn, deleteBtn, taskInput); 
    };
    buttonContainer.appendChild(editBtn); 

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.style.display = 'none'; 
    deleteBtn.onclick = function() {
        deleteTask(newTask);
    };
    buttonContainer.appendChild(deleteBtn); 

    newTask.appendChild(buttonContainer);

    const todoList = document.getElementById('todo-list');
    todoList.appendChild(newTask);

    taskInput.value = '';
}

function editTask(taskSpan, editBtn, deleteBtn, taskInput) {

    const inputEdit = document.createElement('input');
    inputEdit.type = 'text';
    inputEdit.value = taskSpan.textContent;

    taskSpan.replaceWith(inputEdit);
    inputEdit.focus();

    deleteBtn.style.display = 'inline-block';

    editBtn.textContent = 'Save';
    editBtn.onclick = function() {
        saveTask(inputEdit, taskSpan, editBtn, deleteBtn);
    };
}

function saveTask(inputEdit, taskSpan, editBtn, deleteBtn) {

    taskSpan.textContent = inputEdit.value;
    inputEdit.replaceWith(taskSpan);
    deleteBtn.style.display = 'none';
    editBtn.textContent = 'Edit';
    editBtn.onclick = function() {
        editTask(taskSpan, editBtn, deleteBtn);
    };
}

function deleteTask(task) {
    task.remove();
}
