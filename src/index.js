import './style.css';

const toDoTasks = [
  { index: 2, description: 'complete To Do List Project', completed: false },
  { index: 1, description: 'wash dishes', completed: false },
  { index: 3, description: 'Fix car', completed: false },
];

let todoMarkup = `      
<ul class="todo-ul">
<li class="todo-li">
  <h1>Today's To Do</h1>
  <p><i class="fas fa-sync-alt"></i></p>
</li>
<li class="todo-li">
  <input
    type="text"
    class="todo-input add-todo"
    placeholder="Add to your list..."
  />
</li>
</ul>`;

const clearButton =
  "<li><button type='button' class='clear-btn'>Clear All completed</button></li>";

const component = () => {
  const element = document.createElement('div');
  element.classList.add('todo-div');
  const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos'));
  todosFromLocalStorage
    .sort((object1, object2) => object1.index - object2.index)
    .forEach((task) => {
      if (task.completed === true) {
        todoMarkup += `<li class="todo-li todo-container">
      <div class="todo-input-div">
        <input type="checkbox" id="check"  value=${task.index} checked  />
        <p class='todo-description isChecked'> ${task.description}</p>
      </div>
      <p><i class="fas fa-ellipsis-v"></i></p>
    </li>`;
      } else {
        todoMarkup += `<li class="todo-li todo-container">
        <div class="todo-input-div">
          <input type="checkbox" id="check"  value=${task.index}  />
          <p class='todo-description '> ${task.description}</p>
        </div>
        <p><i class="fas fa-ellipsis-v"></i></p>
      </li>`;
      }
    });

  element.innerHTML = todoMarkup + clearButton;
  return element;
};

document.body.appendChild(component());

const listOfTodoElement = document.querySelectorAll('.todo-container');

const handleCheck = () => {
  console.log('todo tasks', toDoTasks);
  console.log(JSON.parse(localStorage.getItem('todos')));
  listOfTodoElement.forEach((element) => {
    
    const checkInputField = element.children[0].children[0];
    const descriptionTag = element.children[0].children[1];

    checkInputField.addEventListener('change', () => {
      if (checkInputField.checked) {
        descriptionTag.classList.add('isChecked');
        console.log('todo tasks', toDoTasks);

        let localStorageTodo = JSON.parse(localStorage.getItem('todos'));
        localStorageTodo.forEach((task) => {
          const matchedIndex = task.index === Number(checkInputField.value);
          if (matchedIndex) {
            task.completed = true;
            checkInputField.checked = true;
            localStorage.setItem('todos', JSON.stringify(localStorageTodo));
          }
        });
      } else {
        descriptionTag.classList.remove('isChecked');
        toDoTasks.forEach((task) => {
          const matchedIndex = task.index === Number(checkInputField.value);
          if (matchedIndex) {
            task.completed = false;
            localStorage.setItem('todos', JSON.stringify(toDoTasks));
          }
        });
      }
    });
  });
};

handleCheck();
