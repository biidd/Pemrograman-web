// Fungsi untuk menambahkan tugas ke daftar
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task!');
        return;
    }

    // Membuat elemen baru untuk tugas
    const newTask = document.createElement('li');
    newTask.textContent = taskValue;

    // Menambahkan tombol hapus ke setiap tugas
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        deleteTask(newTask);
    };

    // Menambahkan tombol hapus ke li
    newTask.appendChild(deleteBtn);

    // Mengizinkan tugas ditandai sebagai selesai
    newTask.onclick = function() {
        toggleComplete(newTask);
    };

    // Menambahkan tugas baru ke ul
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(newTask);

    // Mengosongkan input setelah tugas ditambahkan
    taskInput.value = '';
}

// Fungsi untuk menghapus tugas
function deleteTask(task) {
    task.remove();
}

// Fungsi untuk menandai tugas sebagai selesai atau belum selesai
function toggleComplete(task) {
    task.classList.toggle('completed');
}
