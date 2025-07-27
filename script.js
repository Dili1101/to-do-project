// Vazifalarni localStorage’dan olish
function loadTasks() {
  let saved = localStorage.getItem('tasks');
  return saved ? JSON.parse(saved) : [];
}

// Vazifalarni localStorage’ga saqlash
function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Ro‘yxatni ekranga chiqarish
function renderTasks() {
  let taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  let tasks = loadTasks();
  tasks.forEach((task, index) => {
    let li = document.createElement('li');
    li.textContent = task;

    let delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.style.marginLeft = '10px';
    delBtn.onclick = function() {
      tasks.splice(index, 1);
      saveTasks(tasks);
      renderTasks();
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

// Vazifa qo‘shish
function addTask() {
  let taskInput = document.getElementById('taskInput');
  if (taskInput.value.trim() === '') {
    alert('Iltimos, vazifa kiriting!');
    return;
  }

  let tasks = loadTasks();
  tasks.push(taskInput.value);
  saveTasks(tasks);

  taskInput.value = '';
  renderTasks();
}

// Sahifa ochilganda mavjud vazifalarni ko‘rsatish
renderTasks();