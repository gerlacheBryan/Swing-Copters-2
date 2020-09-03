/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var background = {
  game: null,
  frame: {
    sx: 647,
    sy: 3,
    sw: 227,
    sh: 197,
    dx: 0,
    dy: 0,
    dw: 0,
    dh: 0
  },
  x: 0,
  y: 0,
  update: function update() {
    this.game.renderSpriteFrame(this.frame);
  },
  init: function init(game) {
    this.game = game;
    this.frame.dw = this.frame.sw;
    this.frame.dh = this.frame.sh;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (background);

/***/ }),

/***/ "./src/js/bg.js":
/*!**********************!*\
  !*** ./src/js/bg.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var bg = {
  game: null,
  frames: [{
    sx: 8,
    sy: 1479
  }, {
    sx: 56,
    sy: 1479
  }, {
    sx: 105,
    sy: 1479
  }, {
    sx: 153,
    sy: 1479
  }, {
    sx: 200,
    sy: 1479
  }, {
    sx: 246,
    sy: 1479
  }, {
    sx: 296,
    sy: 1479
  }],
  maxAnimationStep: 0,
  animationStep: 0,
  counterInterval: 0,
  maxInterval: 10,
  width: 33,
  height: 23,
  update: function update() {
    this.render();
  },
  init: function init(game) {
    this.game = game;
    this.maxAnimationStep = this.frames.length - 1;
  },
  render: function render() {
    this.counterInterval++;

    if (!(this.counterInterval % this.maxInterval)) {
      this.counterInterval = 0;
      this.animationStep = this.animationStep < this.maxAnimationStep ? this.animationStep + 1 : 0;
    }

    this.game.renderSpriteFrame({
      sx: this.frames[this.animationStep].sx,
      sy: this.frames[this.animationStep].sy,
      sw: this.width,
      sh: this.height,
      dx: 130,
      dy: 430,
      dw: this.width,
      dh: this.height
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (bg);

/***/ }),

/***/ "./src/js/ground.js":
/*!**************************!*\
  !*** ./src/js/ground.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ground = {
  game: null,
  frame: {
    sx: 259,
    sy: 7,
    sw: 384,
    sh: 237,
    dx: 0,
    dy: 400,
    dw: 384,
    dh: 200
  },
  update: function update() {
    this.game.renderSpriteFrame(this.frame);
  },
  init: function init(game) {
    this.game = game;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ground);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ground */ "./src/js/ground.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "./src/js/background.js");
/* harmony import */ var _bg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bg */ "./src/js/bg.js");



var game = {
  canvas: document.getElementById('game'),
  context: null,
  spriteSheetSrc: './resources/sprite.png',
  sprite: new Image(),
  init: function init() {
    var _this = this;

    this.context = this.canvas.getContext('2d');
    this.sprite.src = this.spriteSheetSrc;
    this.sprite.addEventListener('load', function () {
      _background__WEBPACK_IMPORTED_MODULE_1__["default"].init(_this);
      _ground__WEBPACK_IMPORTED_MODULE_0__["default"].init(_this);
      _bg__WEBPACK_IMPORTED_MODULE_2__["default"].init(_this);
    });
    this.animate();
  },
  animate: function animate() {
    var _this2 = this;

    window.requestAnimationFrame(function () {
      _this2.animate();
    });
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    _ground__WEBPACK_IMPORTED_MODULE_0__["default"].update();
    _background__WEBPACK_IMPORTED_MODULE_1__["default"].update();
    _bg__WEBPACK_IMPORTED_MODULE_2__["default"].update();
  },
  renderSpriteFrame: function renderSpriteFrame(coordinates) {
    this.context.drawImage(this.sprite, coordinates.sx, coordinates.sy, coordinates.sw, coordinates.sh, coordinates.dx, coordinates.dy, coordinates.dw, coordinates.dh);
  }
};
game.init();

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/css/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Bryan\PhpstormProjects\Swing-Copters-2\src\js\main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! C:\Users\Bryan\PhpstormProjects\Swing-Copters-2\src\css\style.scss */"./src/css/style.scss");


/***/ })

/******/ });