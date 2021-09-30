export const addTodo = (item, array) => {
  array.push(item);
  array[array.length - 1].index = array.length;

  return array;
};

export const deleteTodo = (itemId, array) => array.filter((todo) => todo.index !== itemId);

export const editTodo = (item, value) => {
  item.description = value;
  return item;
};

export const handleChecks = (item) => {
  item.completed = !item.completed;
  return item;
};

export const clearCompletedTodos = (arrayOfTodos) => {
  const newTodoList = [];
  arrayOfTodos.forEach((todo) => {
    if (!todo.completed) {
      newTodoList.push(todo);
    }
  });
  newTodoList.forEach((todo, index) => {
    todo.index = index + 1;
  });
  return newTodoList;
};

/* const todos = [
  { index: 1, description: 'Do laundry', completed: false },
  { index: 2, description: 'Go shopping', completed: true },
  { index: 3, description: 'Garden', completed: false },
  { index: 4, description: 'Beach', completed: false },
  { index: 5, description: 'Sky diving', completed: true },
];
console.log(clearCompletedTodos(todos));
 */
