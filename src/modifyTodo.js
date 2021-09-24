const data = { index: 1, description: '', completed: false };

export const addTodo = (todosFromLocalStorage) => {
  const inputField = document.querySelector('#new-todo');
  const addBtn = document.querySelector('.add-btn');

  inputField.addEventListener('change', (event) => {
    data.description = event.target.value;
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
  let listOfTodos = [];
  deleteIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const todoId = Number(icon.parentElement.id);
      todosFromLocalStorage.forEach((todo) => {
        if (todoId === todo.index) {
          listOfTodos = todosFromLocalStorage.filter(
            (todo) => todo.index !== todoId
          );
        }
      });
      listOfTodos.forEach((todo, index) => {
        todo.index = index + 1;
      });
      localStorage.setItem('todos', JSON.stringify(listOfTodos));
      window.location.reload();
    });
  });
};

export const editTodo = (todosFromLocalStorage) => {
  const editIcons = document.querySelectorAll('.edit-todo');

  editIcons.forEach((editIcon) => {
    editIcon.addEventListener('click', () => {
      const editInputField = editIcon.parentElement;
      const deleteIcon = editIcon.parentElement.children[1];
      const todoId = Number(editIcon.parentElement.id);

      editIcon.classList.add('inActive');
      deleteIcon.classList.remove('inActive');
      todosFromLocalStorage.forEach((todo, index) => {
        if (todoId === todo.index) {
          const inputField =
            editInputField.parentElement.children[0].lastElementChild;
          inputField.readOnly = false;
          inputField.addEventListener('keyup', (event) => {
            todo.description = event.target.value;
            todosFromLocalStorage.splice(index, 1, todo);
            localStorage.setItem(
              'todos',
              JSON.stringify(todosFromLocalStorage)
            );
            if (event.key === 'Enter') {
              window.location.reload();
            }
          });
        }
      });
    });
  });
};

export const clearCompletedTodos = (todosFromLocalStorage) => {
  const clearBtn = document.querySelector('.clear-btn');
  clearBtn.addEventListener('click', () => {
    todosFromLocalStorage.forEach((todo) => {
      if (todo.completed) {
        const newTodoList = todosFromLocalStorage.filter(
          (todo) => !todo.completed
        );
        newTodoList.forEach((todo, index) => {
          todo.index = index + 1;
        });
        localStorage.setItem('todos', JSON.stringify(newTodoList));
        window.location.reload();
      }
    });
  });
};
