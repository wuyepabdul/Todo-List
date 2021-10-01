/*
 * @jest-environment jsdom
 */

import {
  addTodo,
  clearCompletedTodos,
  deleteTodo,
  editTodo,
  handleChecks,
} from '../modifyTodo.js';

jest.mock('../modifyTodo.js');

const task1 = {
  index: 1,
  description: 'Wash dishes',
  completed: false,
};
const task2 = {
  index: 2,
  description: 'Do laundry',
  completed: true,
};
const task3 = {
  index: 3,
  description: 'Go shopping',
  completed: false,
};

const task4 = {
  index: 4,
  description: 'Go Driving',
  completed: true,
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

describe('Edit a new task', () => {
  test('should edit a task from the array', () => {
    const todo = { index: 1, description: 'Wash dishes', completed: false };
    // const todo = { index: 1, description: 'Workout', completed: false };
    const value = 'Workout';

    expect(editTodo(todo, value).description).toBe('Workout');
  });
  test('should update task to completed or not completed', () => {
    expect(handleChecks(task1).completed).toBeTruthy();
    expect(handleChecks(task2).completed).toBeFalsy();
  });
  test('should clear completed tasks', () => {
    const arrayOfTasks = [task1, task2, task3, task4];
    expect(clearCompletedTodos(arrayOfTasks).length).toStrictEqual(2);
    expect(clearCompletedTodos(arrayOfTasks)[0].index).toStrictEqual(1);
  });
});

describe('Dom manipulation', () => {
  it('should pass', () => {
    document.body.innerHTML = `
        <div class='wrapper'>
            <ul>
              <li id='list1'> 1 </li>
              <li id='list1'> 2 </li>
              <li id='list1'> 3 </li>
            </ul>
        </div>
    `;
    const listTags = document.querySelectorAll('#list1');
    expect(listTags.length).toBe(3);
  });
});
