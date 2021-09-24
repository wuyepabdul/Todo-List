import './style.css';
import handleChecks from './updateTodo.js';
import {
  addTodo,
  editTodo,
  deleteTodo,
  clearCompletedTodos,
} from './modifyTodo.js';

let todoMarkup = `      
<ul class="todo-ul">
<li class="todo-li">
  <h1>Today's To Do</h1>
  <p><i class="fas fa-sync-alt"></i></p>
</li>
<li class="todo-li">
  <input
    type="text"
    name="new-todo"
    id="new-todo"
    class="todo-input add-todo"
    placeholder="Add to your list..."
  />  
  <button type='submit' class='add-btn'> Add</button>
</li>
</ul>`;

const clearButton = "<li><button type='button' class='clear-btn'>Clear All completed</button></li>";

const todosFromLocalStorage = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : [];
const list = todosFromLocalStorage;

const component = () => {
  const element = document.createElement('div');
  element.classList.add('todo-div');
  list
    .sort((object1, object2) => object1.index - object2.index)
    .forEach((task) => {
      if (task.completed === true) {
        todoMarkup += `<li class="todo-li todo-container">
      <div class="todo-input-div">
        <input type="checkbox" id="check" value=${task.index} checked />
        <input name="edit-input" type="text" id="edit-input" class="todo-input isChecked" value="${task.description}" readonly/>
      </div>
      <p id="${task.index}"><i class="fas fa-ellipsis-v edit-todo "></i><i class="far fa-trash-alt delete-todo inActive"></i></p>
    </li>`;
      } else {
        todoMarkup += `<li class="todo-li todo-container">
        <div class="todo-input-div">
          <input type="checkbox" id="check" value=${task.index} />
          <input name="edit-input" type="text" id="edit-input" class="todo-input" value="${task.description}" readonly/>
        </div>
        <p id="${task.index}"><i class="fas fa-ellipsis-v edit-todo"></i><i class="far fa-trash-alt delete-todo inActive"></i></p>
      </li>`;
      }
    });

  element.innerHTML = todoMarkup + clearButton;
  return element;
};
document.body.appendChild(component());

const listOfTodoElement = document.querySelectorAll('.todo-container');

handleChecks(list, listOfTodoElement);

addTodo(todosFromLocalStorage);

editTodo(todosFromLocalStorage);

deleteTodo(todosFromLocalStorage);

clearCompletedTodos(todosFromLocalStorage);
