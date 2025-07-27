function addTask() {
  let taskInput = document.getElementById('taskInput');
  let taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
    alert('Iltimos, vazifa kiriting!');
    return;
  }

  // <li> elementini yaratamiz
  let li = document.createElement('li');
  li.textContent = taskInput.value;

  // O'chirish tugmasi
  let delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.style.marginLeft = '10px';
  delBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}