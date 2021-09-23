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
  !*** ./src/updateTodo.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleCheck)
/* harmony export */ });
const todosFromLocalStorage = localStorage.getItem('todos') && JSON.parse(localStorage.getItem('todos'));

const listOfTodoElement = document.querySelectorAll('.todo-container');

function handleCheck(toDoTasks) {
  const list = todosFromLocalStorage || toDoTasks;
  listOfTodoElement.forEach((element) => {
    const checkInputField = element.children[0].children[0];
    const descriptionTag = element.children[0].children[1];

    checkInputField.addEventListener('change', () => {
      if (checkInputField.checked) {
        descriptionTag.classList.add('isChecked');
        list.forEach((task) => {
          const matchedIndex = task.index === Number(checkInputField.value);
          if (matchedIndex) {
            task.completed = true;
            checkInputField.checked = true;
            localStorage.setItem('todos', JSON.stringify(list));
          }
        });
      } else {
        descriptionTag.classList.remove('isChecked');
        list.forEach((task) => {
          const matchedIndex = task.index === Number(checkInputField.value);
          if (matchedIndex) {
            task.completed = false;
            localStorage.setItem('todos', JSON.stringify(list));
          }
        });
      }
    });
  });
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlVG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub2RvLUxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG9kby1MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub2RvLUxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub2RvLUxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ub2RvLUxpc3QvLi9zcmMvdXBkYXRlVG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHRvZG9zRnJvbUxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuXG5jb25zdCBsaXN0T2ZUb2RvRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWNvbnRhaW5lcicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVDaGVjayh0b0RvVGFza3MpIHtcbiAgY29uc3QgbGlzdCA9IHRvZG9zRnJvbUxvY2FsU3RvcmFnZSB8fCB0b0RvVGFza3M7XG4gIGxpc3RPZlRvZG9FbGVtZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjaGVja0lucHV0RmllbGQgPSBlbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGFnID0gZWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblsxXTtcblxuICAgIGNoZWNrSW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAoY2hlY2tJbnB1dEZpZWxkLmNoZWNrZWQpIHtcbiAgICAgICAgZGVzY3JpcHRpb25UYWcuY2xhc3NMaXN0LmFkZCgnaXNDaGVja2VkJyk7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hdGNoZWRJbmRleCA9IHRhc2suaW5kZXggPT09IE51bWJlcihjaGVja0lucHV0RmllbGQudmFsdWUpO1xuICAgICAgICAgIGlmIChtYXRjaGVkSW5kZXgpIHtcbiAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoZWNrSW5wdXRGaWVsZC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVzY3JpcHRpb25UYWcuY2xhc3NMaXN0LnJlbW92ZSgnaXNDaGVja2VkJyk7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hdGNoZWRJbmRleCA9IHRhc2suaW5kZXggPT09IE51bWJlcihjaGVja0lucHV0RmllbGQudmFsdWUpO1xuICAgICAgICAgIGlmIChtYXRjaGVkSW5kZXgpIHtcbiAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=