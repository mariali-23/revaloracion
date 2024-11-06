// Variables
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('tasks');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');


addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', () => toggleComplete(li)); 
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', () => deleteTask(li)); 
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = ''; 
  }
});

function toggleComplete(task) {
  task.classList.toggle('completed');
}

function deleteTask(task) {
  task.remove();
}

loginBtn.addEventListener('click', () => {
  alert('Iniciar sesión');
});

registerBtn.addEventListener('click', () => {
  alert('Registrar usuario');
});
