import {
  addTodo,
  deleteTodo,
} from './__mocks__/modifyTodo';

jest.mock('./modifyTodo.js');

const task1 = {
  index: 1,
  description: 'Wash dishes',
  completed: false,
};
const task2 = {
  index: 2,
  description: 'Do laundry',
  completed: false,
};
const task3 = {
  index: 3,
  description: 'Go shopping',
  completed: false,
};

const todoList = [task1, task2];

describe('Add a new task', () => {
  test('should add a new task', () => {
    const arrayOfTasks = [];
    expect(addTodo(task1, arrayOfTasks).length).toStrictEqual(1);
  });
  test('should update index of new added task', () => {
    const updatedTaskList = addTodo(task3, todoList);
    const newTaskIndex = updatedTaskList[updatedTaskList.length - 1].index;
    expect(newTaskIndex).toStrictEqual(3);
  });
});

describe('Delete a new task', () => {
  test('should delete a task from the array', () => {
    const arrayOfTasks = [task1, task2, task3];
    expect(deleteTodo(task1.index, arrayOfTasks).length).toStrictEqual(2);
  });
  test('should check if array length correctly factors deleted item', () => {
    const arrayOfTasks = [task1, task2, task3];
    expect(deleteTodo(task1.index, arrayOfTasks).length).not.toStrictEqual(3);
  });
});