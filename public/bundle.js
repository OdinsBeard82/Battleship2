/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code/board.js":
/*!***************************!*\
  !*** ./src/code/board.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBoard: () => (/* binding */ createBoard)\n/* harmony export */ });\nfunction createBoard() {\n    const board = document.getElementById('board');\n\n    for (let x = 0; x < 10; x++) {\n        for (let y = 0; y < 10; y++) {\n            const battleshipSquare = document.createElement('div');\n            battleshipSquare.className = 'battleship-square';\n\n            board.appendChild(battleshipSquare);\n        }\n    }\n\n    return board;\n}\n\n//# sourceURL=webpack://battleship2/./src/code/board.js?");

/***/ }),

/***/ "./src/code/shipPosition.js":
/*!**********************************!*\
  !*** ./src/code/shipPosition.js ***!
  \**********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://battleship2/./src/code/shipPosition.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _code_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code/board */ \"./src/code/board.js\");\n/* harmony import */ var _code_shipPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code/shipPosition */ \"./src/code/shipPosition.js\");\n/* harmony import */ var _code_shipPosition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_code_shipPosition__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nclass Ship {\n    constructor(length) {\n        this.length = length;\n        this.hits = 0;\n        this.sunk = false;\n   \n    }\n\n    hit() {\n        if (!this.isSunk()) {\n            this.hits++;\n            if (this.hits === this.length) {\n                this.sunk = true;\n            }\n        }\n    }\n\n    isSunk() {\n        return this.sunk;\n    }\n}\n\nconst board = (0,_code_board__WEBPACK_IMPORTED_MODULE_0__.createBoard)();\n\n\nfunction addShip(board, row, col) {\n    const shipImg = document.createElement('img');\n    shipImg.src = '../src/images/ship.jpg';\n    shipImg.className = 'ship-square';\n    const squareIndex = row * 10 + col; \n    board.children[squareIndex].appendChild(shipImg);\n}\n\n\n  let row = Math.floor(Math.random()*10)+1;\n  let col = Math.floor(Math.random()*10)+1;\n\n\n  const shipPosition = { row, col};\n  \n  addShip(board, shipPosition.row, shipPosition.col);\n\n\n//# sourceURL=webpack://battleship2/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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