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

/***/ "./src/code/board.js":
/*!***************************!*\
  !*** ./src/code/board.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBoard: () => (/* binding */ createBoard)\n/* harmony export */ });\nfunction createBoard() {\n    const board = document.getElementById('board');\n\n    for (let x = 0; x < 10; x++) {\n        for (let y = 0; y < 10; y++) {\n            const battleshipSquare = document.createElement('div');\n            battleshipSquare.className = 'battleship-square';\n\n            board.appendChild(battleshipSquare);\n        }\n    }\n\n\n}\n\n\n\n\n\n//# sourceURL=webpack://battleship2/./src/code/board.js?");

/***/ }),

/***/ "./src/code/ship.js":
/*!**************************!*\
  !*** ./src/code/ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n    constructor(length) {\n      this.length = length;\n      this.hits = 0;\n      this.sunk = false;\n    }\n\n  \n    hit() {\n      if (!this.isSunk()) {\n        this.hits++;\n        if (this.hits === this.length) {\n          this.sunk = true;\n        }\n      }\n    }\n  \n    isSunk() {\n      return this.sunk;\n    }\n  }\n \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n\n//# sourceURL=webpack://battleship2/./src/code/ship.js?");

/***/ }),

/***/ "./src/code/shipLocation.js":
/*!**********************************!*\
  !*** ./src/code/shipLocation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shipLocation: () => (/* binding */ shipLocation)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nfunction shipLocation() {\n\n\n    let shipPosition = new Node(3);\n    \n    const shipImg = document.createElement('img');\n    shipImg.src = '../Images/ship.jpg';\n    shipImg.className = 'ship-square';\n    board.children[shipPosition.row][shipPosition.col].appendChild(shipImg);\n  \n    \n}\n\n//# sourceURL=webpack://battleship2/./src/code/shipLocation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _code_board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code/board.js */ \"./src/code/board.js\");\n/* harmony import */ var _code_shipLocation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code/shipLocation.js */ \"./src/code/shipLocation.js\");\n/* harmony import */ var _code_ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code/ship.js */ \"./src/code/ship.js\");\n\n\n\n\n\n\n\n\n(0,_code_board_js__WEBPACK_IMPORTED_MODULE_0__.createBoard)();\n(0,_code_shipLocation_js__WEBPACK_IMPORTED_MODULE_1__.shipLocation)();\n(0,_code_ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship)();\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleship2/./src/index.js?");

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