export const addNewTodo = (item, array) => {
  array.push(item);
  array[array.length - 1].index = array.length;

  return array;
};

export const removeTodo = (itemId, array) => array.filter((todo) => todo.index !== itemId);
