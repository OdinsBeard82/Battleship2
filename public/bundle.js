/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code/addShip.js":
/*!*****************************!*\
  !*** ./src/code/addShip.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   numbShips: () => (/* binding */ numbShips),\n/* harmony export */   ship: () => (/* binding */ ship)\n/* harmony export */ });\nfunction ship(board, row, col) {\n  const shipImg = document.createElement('img');\n  shipImg.src = '../src/images/ship.jpg';\n  shipImg.className = 'ship-square1';\n  const squareIndex = row * 10 + col; \n  board.children[squareIndex].appendChild(shipImg);\n  \n}\n\nconst numbShips = 6;\n\n\n\n//# sourceURL=webpack://battleship2/./src/code/addShip.js?");

/***/ }),

/***/ "./src/code/board.js":
/*!***************************!*\
  !*** ./src/code/board.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBoard: () => (/* binding */ createBoard)\n/* harmony export */ });\nfunction createBoard() {\n    const board = document.getElementById('board');\n\n    for (let x = 0; x < 10; x++) {\n        for (let y = 0; y < 10; y++) {\n            const battleshipSquare = document.createElement('div');\n            battleshipSquare.className = 'battleship-square';\n            board.appendChild(battleshipSquare);\n        }\n    }\n\n    return board;\n}\n\n//# sourceURL=webpack://battleship2/./src/code/board.js?");

/***/ }),

/***/ "./src/code/boardButtons.js":
/*!**********************************!*\
  !*** ./src/code/boardButtons.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createButtons: () => (/* binding */ createButtons)\n/* harmony export */ });\n\nfunction createButtons() {\n    const board = document.getElementById('board');\n\n    for (let x = 0; x < 10; x++) {\n        for (let y = 0; y < 10; y++) {\n            const battleshipButtons = document.createElement('button');\n            battleshipButtons.className = 'battleship-button';\n            board.appendChild(battleshipButtons);\n            battleshipButtons.addEventListener(\"click\",function() {\n                this.innerHTML = 'Missed';\n                 \n         })\n                \n            }\n        }\n    \n\n    return board;\n}\n\n//# sourceURL=webpack://battleship2/./src/code/boardButtons.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _code_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code/board */ \"./src/code/board.js\");\n/* harmony import */ var _code_addShip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code/addShip */ \"./src/code/addShip.js\");\n/* harmony import */ var _code_boardButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code/boardButtons */ \"./src/code/boardButtons.js\");\n\n\n\n\n\nfunction newButton() {\nconst playButton = document.createElement('button');\nplayButton.className = ('playbutton');\nplayButton.innerHTML = 'play Button';\ndocument.body.appendChild(playButton);\n\n}\n\nconst board = (0,_code_boardButtons__WEBPACK_IMPORTED_MODULE_2__.createButtons)();\n\n\n\nfor (let i = 0; i < _code_addShip__WEBPACK_IMPORTED_MODULE_1__.numbShips; i++) {\n    let min = 0;\n    let max = 9;\n    let row = Math.floor(Math.random()*(max-min)+min);\n    let col = Math.floor(Math.random()*(max-min)+min);\n    \n    \n    (0,_code_addShip__WEBPACK_IMPORTED_MODULE_1__.ship)(board, row, col);\n    }\n  \n    newButton();\n\n//# sourceURL=webpack://battleship2/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;