import './style.css';
import handleChecks from './updateTodo.js';
import addTodo from './modifyTodo.js';

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

const clearButton =
  "<li><button type='button' class='clear-btn'>Clear All completed</button></li>";

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
        <input type="text" class="todo-input isChecked" value="${task.description}" />
        
      </div>
      <p><i class="fas fa-ellipsis-v"></i></p>
    </li>`;
      } else {
        todoMarkup += `<li class="todo-li todo-container">
        <div class="todo-input-div">
          <input type="checkbox" id="check" value=${task.index} />
          <input type="text" class="todo-input" value="${task.description}"/>
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

handleChecks(list, listOfTodoElement);

addTodo(todosFromLocalStorage);
