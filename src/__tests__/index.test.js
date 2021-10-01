/* * @jest-environment jsdom */
import {
  clearButton,
  todoLiMarkup,
  todoUlMarkup,
} from '../__mocks__/index.js';
import {
  addTodo
} from '../__mocks__/modifyTodo.js';
jest.mock('../index.js');
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
const todoList = [task1, task2, task3];
describe('Dom manipulation', () => {
  test('Should add todo heading to dom', () => {
    const divElement = document.createElement('div') + todoUlMarkup() + clearButton();
    document.body.innerHTML = divElement;
    const ulTag = document.getElementsByTagName('ul');
    const headingTag = ulTag[0].firstElementChild.firstElementChild.innerHTML;
    const clearBtn = document.querySelector('.clear-btn');
    expect(ulTag.length).toBe(1);
    expect(headingTag).toBe("Today's To Do");
    expect(clearBtn).toBeTruthy();
  });

});