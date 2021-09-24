/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/modifyTodo.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "editTodo": () => (/* binding */ editTodo),
/* harmony export */   "clearCompletedTodos": () => (/* binding */ clearCompletedTodos)
/* harmony export */ });
const data = { index: 1, description: '', completed: false };

const addTodo = (todosFromLocalStorage) => {
  const inputField = document.querySelector('#new-todo');
  const addBtn = document.querySelector('.add-btn');

  inputField.addEventListener('change', (event) => {
    data.description = event.target.value;
  });

  addBtn.addEventListener('click', () => {
    todosFromLocalStorage.push(data);
    todosFromLocalStorage[todosFromLocalStorage.length - 1].index = todosFromLocalStorage.length;
    localStorage.setItem('todos', JSON.stringify(todosFromLocalStorage));
    window.location.reload();
  });
};

const deleteTodo = (todosFromLocalStorage) => {
  const deleteIcons = document.querySelectorAll('.delete-todo');
  let listOfTodos = [];
  deleteIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const todoId = Number(icon.parentElement.id);
      todosFromLocalStorage.forEach((todo) => {
        if (todoId === todo.index) {
          listOfTodos = todosFromLocalStorage.filter(
            (todo) => todo.index !== todoId,
          );
        }
      });
      listOfTodos.forEach((todo, index) => {
        todo.index = index + 1;
      });
      localStorage.setItem('todos', JSON.stringify(listOfTodos));
      window.location.reload();
    });
  });
};

const editTodo = (todosFromLocalStorage) => {
  const editIcons = document.querySelectorAll('.edit-todo');

  editIcons.forEach((editIcon) => {
    editIcon.addEventListener('click', () => {
      const editInputField = editIcon.parentElement;
      const deleteIcon = editIcon.parentElement.children[1];
      const todoId = Number(editIcon.parentElement.id);

      editIcon.classList.add('inActive');
      deleteIcon.classList.remove('inActive');
      todosFromLocalStorage.forEach((todo, index) => {
        if (todoId === todo.index) {
          const inputField = editInputField.parentElement.children[0].lastElementChild;
          inputField.readOnly = false;
          inputField.addEventListener('keyup', (event) => {
            todo.description = event.target.value;
            todosFromLocalStorage.splice(index, 1, todo);
            localStorage.setItem(
              'todos',
              JSON.stringify(todosFromLocalStorage),
            );
            if (event.key === 'Enter') {
              window.location.reload();
            }
          });
        }
      });
    });
  });
};

const clearCompletedTodos = (todosFromLocalStorage) => {
  const clearBtn = document.querySelector('.clear-btn');
  clearBtn.addEventListener('click', () => {
    todosFromLocalStorage.forEach((todo) => {
      if (todo.completed) {
        const newTodoList = todosFromLocalStorage.filter(
          (todo) => !todo.completed,
        );
        newTodoList.forEach((todo, index) => {
          todo.index = index + 1;
        });
        localStorage.setItem('todos', JSON.stringify(newTodoList));
        window.location.reload();
      }
    });
  });
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5VG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQSxlQUFlOztBQUVSO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub2RvLUxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG9kby1MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub2RvLUxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub2RvLUxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ub2RvLUxpc3QvLi9zcmMvbW9kaWZ5VG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGRhdGEgPSB7IGluZGV4OiAxLCBkZXNjcmlwdGlvbjogJycsIGNvbXBsZXRlZDogZmFsc2UgfTtcblxuZXhwb3J0IGNvbnN0IGFkZFRvZG8gPSAodG9kb3NGcm9tTG9jYWxTdG9yYWdlKSA9PiB7XG4gIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8nKTtcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4nKTtcblxuICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgIGRhdGEuZGVzY3JpcHRpb24gPSBldmVudC50YXJnZXQudmFsdWU7XG4gIH0pO1xuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2Rvc0Zyb21Mb2NhbFN0b3JhZ2UucHVzaChkYXRhKTtcbiAgICB0b2Rvc0Zyb21Mb2NhbFN0b3JhZ2VbdG9kb3NGcm9tTG9jYWxTdG9yYWdlLmxlbmd0aCAtIDFdLmluZGV4ID0gdG9kb3NGcm9tTG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2Rvc0Zyb21Mb2NhbFN0b3JhZ2UpKTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRvZG8gPSAodG9kb3NGcm9tTG9jYWxTdG9yYWdlKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZUljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS10b2RvJyk7XG4gIGxldCBsaXN0T2ZUb2RvcyA9IFtdO1xuICBkZWxldGVJY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHRvZG9JZCA9IE51bWJlcihpY29uLnBhcmVudEVsZW1lbnQuaWQpO1xuICAgICAgdG9kb3NGcm9tTG9jYWxTdG9yYWdlLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgaWYgKHRvZG9JZCA9PT0gdG9kby5pbmRleCkge1xuICAgICAgICAgIGxpc3RPZlRvZG9zID0gdG9kb3NGcm9tTG9jYWxTdG9yYWdlLmZpbHRlcihcbiAgICAgICAgICAgICh0b2RvKSA9PiB0b2RvLmluZGV4ICE9PSB0b2RvSWQsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsaXN0T2ZUb2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgICAgICB0b2RvLmluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgfSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeShsaXN0T2ZUb2RvcykpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0VG9kbyA9ICh0b2Rvc0Zyb21Mb2NhbFN0b3JhZ2UpID0+IHtcbiAgY29uc3QgZWRpdEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtdG9kbycpO1xuXG4gIGVkaXRJY29ucy5mb3JFYWNoKChlZGl0SWNvbikgPT4ge1xuICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgZWRpdElucHV0RmllbGQgPSBlZGl0SWNvbi5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGVkaXRJY29uLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV07XG4gICAgICBjb25zdCB0b2RvSWQgPSBOdW1iZXIoZWRpdEljb24ucGFyZW50RWxlbWVudC5pZCk7XG5cbiAgICAgIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoJ2luQWN0aXZlJyk7XG4gICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2luQWN0aXZlJyk7XG4gICAgICB0b2Rvc0Zyb21Mb2NhbFN0b3JhZ2UuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHRvZG9JZCA9PT0gdG9kby5pbmRleCkge1xuICAgICAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBlZGl0SW5wdXRGaWVsZC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgaW5wdXRGaWVsZC5yZWFkT25seSA9IGZhbHNlO1xuICAgICAgICAgIGlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRvZG8uZGVzY3JpcHRpb24gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB0b2Rvc0Zyb21Mb2NhbFN0b3JhZ2Uuc3BsaWNlKGluZGV4LCAxLCB0b2RvKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAndG9kb3MnLFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0b2Rvc0Zyb21Mb2NhbFN0b3JhZ2UpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJDb21wbGV0ZWRUb2RvcyA9ICh0b2Rvc0Zyb21Mb2NhbFN0b3JhZ2UpID0+IHtcbiAgY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXItYnRuJyk7XG4gIGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZG9zRnJvbUxvY2FsU3RvcmFnZS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBpZiAodG9kby5jb21wbGV0ZWQpIHtcbiAgICAgICAgY29uc3QgbmV3VG9kb0xpc3QgPSB0b2Rvc0Zyb21Mb2NhbFN0b3JhZ2UuZmlsdGVyKFxuICAgICAgICAgICh0b2RvKSA9PiAhdG9kby5jb21wbGV0ZWQsXG4gICAgICAgICk7XG4gICAgICAgIG5ld1RvZG9MaXN0LmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgdG9kby5pbmRleCA9IGluZGV4ICsgMTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KG5ld1RvZG9MaXN0KSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9