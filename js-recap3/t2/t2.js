// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ulElement = document.querySelector('#subject');

for (let i = 0; i < todoList.length; i++) {
  const todo = todoList[i];

  const newLi = document.createElement('li');
  const newInput = document.createElement('input');
  newInput.type = 'checkbox';
  newInput.id = `todo-${todo.id}`;
  newInput.checked = todo.completed;

  const newLabel = document.createElement('label');
  newLabel.htmlFor = `todo-${todo.id}`;
  newLabel.textContent = todo.task;

  newLi.appendChild(newInput);
  newLi.appendChild(newLabel);
  ulElement.appendChild(newLi);
}
