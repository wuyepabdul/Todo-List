export const addTodo = (item, array) => {
  array.push(item);
  array[array.length - 1].index = array.length;

  return array;
};
