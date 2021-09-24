const data = { index: 1, description: '', completed: false };

export const addTodo = (todosFromLocalStorage) => {
  const inputField = document.querySelector('#new-todo');
  const addBtn = document.querySelector('.add-btn');

  inputField.addEventListener('change', (e) => {
    data.description = e.target.value;
  });

  addBtn.addEventListener('click', () => {
    todosFromLocalStorage.push(data);
    todosFromLocalStorage[todosFromLocalStorage.length - 1].index =
      todosFromLocalStorage.length;
    localStorage.setItem('todos', JSON.stringify(todosFromLocalStorage));
    window.location.reload();
  });
};

export const deleteTodo = (todosFromLocalStorage) => {
  console.log('clicked');
};

export const editTodo = (todosFromLocalStorage) => {
  console.log('clicked');
  const editIcon = document.querySelectorAll('.edit-todo');
  console.log(editIcon);
};
