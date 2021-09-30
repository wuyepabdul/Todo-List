export const setStorageAndReloadPage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
  window.location.reload();
};

export const handleChecks = (list, listOfTodoElement) => {
  listOfTodoElement.forEach((element) => {
    const checkInputField = element.children[0].children[0];
    const descriptionTag = element.children[0].children[1];

    checkInputField.addEventListener('change', () => {
      if (checkInputField.checked) {
        descriptionTag.classList.add('isChecked');
        list.forEach((task) => {
          const matchedIndex = task.index === Number(checkInputField.value);
          if (matchedIndex) {
            task.completed = true;
            checkInputField.checked = true;
            localStorage.setItem('todos', JSON.stringify(list));
          }
        });
      } else {
        descriptionTag.classList.remove('isChecked');
        list.forEach((task) => {
          const matchedIndex = task.index === Number(checkInputField.value);
          if (matchedIndex) {
            task.completed = false;
            localStorage.setItem('todos', JSON.stringify(list));
          }
        });
      }
    });
  });
};

export const addTodo = (todosFromLocalStorage) => {
  const data = { index: 1, description: '', completed: false };
  const inputField = document.querySelector('#new-todo');
  const addBtn = document.querySelector('.add-btn');

  inputField.addEventListener('change', (event) => {
    data.description = event.target.value;
  });

  addBtn.addEventListener('click', () => {
    todosFromLocalStorage.push(data);
    todosFromLocalStorage[todosFromLocalStorage.length - 1].index = todosFromLocalStorage.length;
    setStorageAndReloadPage(todosFromLocalStorage);
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
            (todo) => todo.index !== todoId,
          );
        }
      });
      listOfTodos.forEach((todo, index) => {
        todo.index = index + 1;
      });
      setStorageAndReloadPage(listOfTodos);
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
          const inputField = editInputField.parentElement.children[0].lastElementChild;
          inputField.readOnly = false;
          inputField.addEventListener('keyup', (event) => {
            todo.description = event.target.value;
            todosFromLocalStorage.splice(index, 1, todo);
            localStorage.setItem(
              'todos',
              JSON.stringify(todosFromLocalStorage),
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
          (todo) => !todo.completed,
        );
        newTodoList.forEach((todo, index) => {
          todo.index = index + 1;
        });
        setStorageAndReloadPage(newTodoList);
      }
    });
  });
};
