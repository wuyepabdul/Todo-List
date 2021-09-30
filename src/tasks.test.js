import { addNewTodo } from './mock_files/tasks.js';

const task1 = { index: 1, description: 'Wash dishes', completed: false };
const task2 = { index: 2, description: 'Do laundry', completed: false };
const task3 = { index: '', description: 'Go shopping', completed: false };

const todoList = [task1, task2];

describe('Add a new task', () => {
  test('should add a new task', () => {
    const arrayOfTasks = [];
    expect(addNewTodo(task1, arrayOfTasks).length).toStrictEqual(1);
  });
  test('should update index of new added task', () => {
    const updatedTaskList = addNewTodo(task3, todoList);
    const newTaskIndex = updatedTaskList[updatedTaskList.length - 1].index;
    expect(newTaskIndex).toStrictEqual(3);
  });
});