export const clearButton = () => {
  const btn = "<li><button type='button' class='clear-btn'>Clear All completed</button></li>";
  return btn;
};
<<<<<<< HEAD

export const todoUlMarkup = () => {
  const markup = `      
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
  return markup;
};

export const todoLiMarkup = (task) => {
  const markup = `<li class="todo-li todo-container">
  <div class="todo-input-div">
    <input type="checkbox" id="check" value=${task.index} checked />
    <input name="edit-input" type="text" id="edit-input" class="todo-input isChecked" value="${task.description}" readonly/>
  </div>
  <p id="${task.index}"><i class="fas fa-ellipsis-v edit-todo "></i><i class="far fa-trash-alt delete-todo inActive"></i></p>
</li>`;
  return markup;
};
=======
export const todoUlMarkup = () => {
  const markup = '        <ul class="todo-ul">  <li class="todo-li">    <h1>Today\'s To Do</h1>    <p><i class="fas fa-sync-alt"></i></p>  </li>  <li class="todo-li">    <input      type="text"      name="new-todo"      id="new-todo"      class="todo-input add-todo"      placeholder="Add to your list..."    />      <button type=\'submit\' class=\'add-btn\'> Add</button>  </li>  </ul>';
  return markup;
};
export const todoLiMarkup = (task) => {
  const markup = `<li class="todo-li todo-container">  <div class="todo-input-div">    <input type="checkbox" id="check" value=${task.index} checked />    <input name="edit-input" type="text" id="edit-input" class="todo-input isChecked" value="${task.description}" readonly/>  </div>  <p id="${task.index}"><i class="fas fa-ellipsis-v edit-todo "></i><i class="far fa-trash-alt delete-todo inActive"></i></p></li>`;
  return markup;
};
>>>>>>> 9681832316843d8d99cb3f0011c9fedafbdda467
