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
  const deleteIcons = document.querySelectorAll('.delete-todo');
  deleteIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const todoId = Number(icon.parentElement.id);
      todosFromLocalStorage.forEach((todo) => {
        if (todoId === todo.index) {
          const newTodoList = todosFromLocalStorage.filter(
            (todo) => todo.index !== todoId,
          );
          localStorage.setItem('todos', JSON.stringify(newTodoList));
          window.location.reload();
        }
      });
    });
  });
};

export const editTodo = (todosFromLocalStorage) => {
  const editIcons = document.querySelectorAll('.edit-todo');
  const editInputField = document.getElementById('edit-input');
  editIcons.forEach((editIcon) => {
    editIcon.addEventListener('click', () => {
      const deleteIcon = editIcon.parentElement.children[1];
      const todoId = Number(editIcon.parentElement.id);
      editIcon.classList.add('inActive');
      deleteIcon.classList.remove('inActive');
      todosFromLocalStorage.forEach((todo) => {
        if (todoId === todo.index) {
          console.log(todo);
        }
      });
    });
  });
};
