document.getElementById('addTaskBtn').addEventListener('click', function () {
  let taskText = document.getElementById('taskInput').value;

  if (taskText.trim() === '') return; // Prevent empty tasks

  let taskId = 'task' + Math.floor(Math.random() * 1000000); // Generate unique ID

  let taskElement = document.createElement('div');
  taskElement.id = taskId;
  taskElement.innerHTML = taskText + ` <button onclick="removeTask('${taskId}')">Remove</button>`;

  document.getElementById('taskList').appendChild(taskElement);
});

function removeTask(taskId) {
  let taskElement = document.getElementById(taskId);
  if (taskElement) {
    taskElement.remove();
  }
}
