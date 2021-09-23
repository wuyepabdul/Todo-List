const data = { index: 1, description: '', completed: false };

export default function addTodo(todosFromLocalStorage) {
  const inputField = document.querySelector('#new-todo');
  const addBtn = document.querySelector('.add-btn');

  inputField.addEventListener('change', (e) => {
    data.description = e.target.value;
  });

  addBtn.addEventListener('click', () => {
    console.log('click');
    todosFromLocalStorage.push(data);
    todosFromLocalStorage[todosFromLocalStorage.length - 1].index = todosFromLocalStorage.length;
    localStorage.setItem('todos', JSON.stringify(todosFromLocalStorage));
  });
}
