/* * @jest-environment jsdom */
import {
  clearButton,
  todoLiMarkup,
  todoUlMarkup,
} from '../__mocks__/index.js';
import {
  addTodo,
} from '../__mocks__/modifyTodo.js';

jest.mock('../index.js');
const task1 = {
  index: 1,
  description: 'Wash dishes',
  completed: false,
};

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
  test('Should add created todo to dom', () => {
    const divElement = document.createElement('div') + todoUlMarkup();
    const arrayOfTasks = [];
    const newTodo = addTodo(task1, arrayOfTasks);
    document.body.innerHTML = divElement + todoLiMarkup(task1) + clearButton();
    const todosInDom = document.querySelectorAll('.todo-container');
    expect(newTodo.length).toStrictEqual(1);
    expect(todosInDom.length).toBe(1);
  });
});