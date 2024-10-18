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
    const taskSpan = document.createElement('span'); // Elemen untuk teks tugas
    taskSpan.textContent = taskValue;
    newTask.appendChild(taskSpan);

    // Membuat div untuk tombol Edit dan Delete
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    // Menambahkan tombol edit
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.onclick = function() {
        editTask(taskSpan, editBtn, deleteBtn, taskInput); // Tambahkan deleteBtn ke fungsi edit
    };
    buttonContainer.appendChild(editBtn); // Masukkan tombol edit ke dalam buttonContainer

    // Menambahkan tombol hapus, tapi sembunyikan dulu
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.style.display = 'none'; // Sembunyikan tombol delete awalnya
    deleteBtn.onclick = function() {
        deleteTask(newTask);
    };
    buttonContainer.appendChild(deleteBtn); // Masukkan tombol delete ke dalam buttonContainer

    // Menambahkan buttonContainer ke li
    newTask.appendChild(buttonContainer);

    // Menambahkan tugas baru ke ul
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(newTask);

    // Mengosongkan input setelah tugas ditambahkan
    taskInput.value = '';
}

// Fungsi untuk mengedit tugas di tempat
function editTask(taskSpan, editBtn, deleteBtn, taskInput) {
    // Buat elemen input di tempat taskSpan
    const inputEdit = document.createElement('input');
    inputEdit.type = 'text';
    inputEdit.value = taskSpan.textContent;

    // Ganti span dengan input untuk mengedit
    taskSpan.replaceWith(inputEdit);
    inputEdit.focus();

    // Tampilkan tombol delete saat sedang edit
    deleteBtn.style.display = 'inline-block';

    // Ubah tombol Edit menjadi Save
    editBtn.textContent = 'Save';
    editBtn.onclick = function() {
        saveTask(inputEdit, taskSpan, editBtn, deleteBtn);
    };
}

// Fungsi untuk menyimpan hasil edit tugas
function saveTask(inputEdit, taskSpan, editBtn, deleteBtn) {
    // Simpan teks baru
    taskSpan.textContent = inputEdit.value;

    // Ganti input kembali menjadi span
    inputEdit.replaceWith(taskSpan);

    // Sembunyikan tombol delete setelah selesai mengedit
    deleteBtn.style.display = 'none';

    // Ubah tombol kembali menjadi Edit
    editBtn.textContent = 'Edit';
    editBtn.onclick = function() {
        editTask(taskSpan, editBtn, deleteBtn);
    };
}

// Fungsi untuk menghapus tugas
function deleteTask(task) {
    task.remove();
}
