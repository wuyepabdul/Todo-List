import _ from 'lodash';
import './style.css';

const toDoTasks = [
  { index: 1, description: 'wash dishes', completed: false },
  { index: 2, description: 'complete To Do List Project', completed: false },
  { index: 3, description: 'Fix car', completed: false },
];

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');


  return element;
}

document.body.appendChild(component());
