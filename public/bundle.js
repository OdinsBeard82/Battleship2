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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Ship {\n    constructor(length) {\n        this.length = length;\n        this.hits = 0;\n        this.sunk = false;\n    }\n\n    hit() {\n        if (!this.isSunk()) {\n            this.hits++;\n            if (this.hits === this.length) {\n                this.sunk = true;\n            }\n        }\n    }\n\n    isSunk() {\n        return this.sunk;\n    }\n}\n\nfunction createBoard() {\n    const board = document.getElementById('board');\n\n    for (let x = 0; x < 10; x++) {\n        for (let y = 0; y < 10; y++) {\n            const battleshipSquare = document.createElement('div');\n            battleshipSquare.className = 'battleship-square';\n\n            board.appendChild(battleshipSquare);\n        }\n    }\n\n    return board;\n}\n\nconst board = createBoard();\n\nfunction addShip(board, row, col) {\n    const shipImg = document.createElement('img');\n    shipImg.src = '../src/images/ship.jpg';\n    shipImg.className = 'ship-square';\n    const squareIndex = row * 10 + col; \n    board.children[squareIndex].appendChild(shipImg);\n}\n\nconst shipPosition = { row: 0, col: 1 };\naddShip(board, shipPosition.row, shipPosition.col);\n\n\n  \n\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleship2/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;