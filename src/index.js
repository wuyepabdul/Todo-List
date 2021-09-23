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

function component() {
  const element = document.createElement('div');
  element.classList.add('todo-div');
  toDoTasks
    .sort((object1, object2) => object1.index - object2.index)
    .forEach((task) => {
      todoMarkup += `<li class="todo-li todo-container">
    <div class="todo-input-div">
      <input type="checkbox" id="check" value=${task.completed} />
      <p class='todo-description '> ${task.description}</p>
    </div>
    <p><i class="fas fa-ellipsis-v"></i></p>
  </li>`;
    });

  element.innerHTML = todoMarkup + clearButton;
  return element;
}

document.body.appendChild(component());

const list = document.querySelectorAll('.todo-container');
const handleCheck = () => {
  list.forEach((element) => {
    element.children[0].children[0].addEventListener('change', () => {
      if (element.children[0].children[0].checked) {
        element.children[0].children[1].classList.add('isChecked');
        console.log(element.children[0].children[1])
        toDoTasks.forEach((task)=>{console.log('task',task)})
      } else {
        element.children[0].children[1].classList.remove('isChecked');
      }
    });
  });
};

handleCheck();
