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

/***/ "./src/js/Barres.js":
/*!**************************!*\
  !*** ./src/js/Barres.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Barres; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Barres = /*#__PURE__*/function () {
  function Barres(game) {
    _classCallCheck(this, Barres);

    this.game = game;
    this.spaceBetweenBarres = 100;
    this.x = game.canvas.width;
    this.maxOffset = 0;
    this.width = 230;
    this.height = 23;
    this.right = -Math.floor(Math.random() * 280) - 25;
    this.left = this.right + this.width + this.spaceBetweenBarres;
    this.barresRightFrame = {
      sx: 647,
      sy: 1881,
      sw: this.width,
      sh: this.height,
      dx: this.right,
      dy: 50,
      dw: this.width,
      dh: this.height
    };
    this.barresLeftFrame = {
      sx: 647,
      sy: 1881,
      sw: this.width,
      sh: this.height,
      dx: this.left,
      dy: 50,
      dw: this.width,
      dh: this.height
    };
    this.speed = 1;
  }

  _createClass(Barres, [{
    key: "update",
    value: function update() {
      if (this.barresRightFrame.dy <= this.maxOffset) {
        this.barresRightFrame.dy = 0;
      }

      this.barresRightFrame.dy += this.speed;

      if (this.barresLeftFrame.dy <= this.maxOffset) {
        this.barresLeftFrame.dy = 0;
      }

      this.barresLeftFrame.dy += this.speed;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.game.renderSpriteFrame(this.barresRightFrame);
      this.game.renderSpriteFrame(this.barresLeftFrame);
    }
  }]);

  return Barres;
}();



/***/ }),

/***/ "./src/js/Nuages.js":
/*!**************************!*\
  !*** ./src/js/Nuages.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nuages; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Nuages = /*#__PURE__*/function () {
  function Nuages(game) {
    _classCallCheck(this, Nuages);

    this.game = game;
    this.nuagesFrame = {
      sx: 647,
      sy: 3,
      sw: 227,
      sh: 197,
      dx: 0,
      dy: 0,
      dw: 227,
      dh: 197
    };
    this.maxOffset = 0, this.speed = 3;
  }

  _createClass(Nuages, [{
    key: "update",
    value: function update() {
      if (this.nuagesFrame.dy <= this.maxOffset) {
        this.nuagesFrame.dy = 0;
      }

      this.nuagesFrame.dy += this.speed;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.game.renderSpriteFrame(this.nuagesFrame);
    }
  }]);

  return Nuages;
}();



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
  speed: 3,
  maxOffset: 0,
  update: function update() {
    if (this.frame.dy <= this.maxOffset) {
      this.frame.dy = 0;
    }

    this.frame.dy += this.speed;
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
  height: 32,
  y: 450,
  x: 130,
  upSpeed: 0,
  maxUpSpeed: 7,
  init: function init(game) {
    this.game = game;
    this.maxAnimationStep = this.frames.length - 1;
  },
  update: function update() {
    this.render();
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
      dx: this.x,
      dy: this.y,
      dw: this.width,
      dh: this.height
    });
  },
  goUp: function goUp() {
    this.y = this.game.canvas.height / 2;
    this.render();
    console.log(this.y);
  },
  goRight: function goRight() {
    this.x += 9;
    this.render();
    console.log(this.x);
  },
  goLeft: function goLeft() {
    this.x -= 9;
    this.render();
    console.log(this.x);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (bg);

/***/ }),

/***/ "./src/js/gameController.js":
/*!**********************************!*\
  !*** ./src/js/gameController.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bg */ "./src/js/bg.js");

var gameController = {
  init: function init(game) {
    window.addEventListener('keydown', function (e) {
      if (e.key === 'z') {
        _bg__WEBPACK_IMPORTED_MODULE_0__["default"].goUp();
      }

      if (e.key === 'a') {
        _bg__WEBPACK_IMPORTED_MODULE_0__["default"].goRight();
      }

      if (e.key === 'e') {
        _bg__WEBPACK_IMPORTED_MODULE_0__["default"].goLeft();
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (gameController);

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
/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameController */ "./src/js/gameController.js");
/* harmony import */ var _Nuages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nuages */ "./src/js/Nuages.js");
/* harmony import */ var _Barres__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Barres */ "./src/js/Barres.js");






var game = {
  canvas: document.getElementById('game'),
  context: null,
  spriteSheetSrc: './resources/sprite.png',
  sprite: new Image(),
  nuages: [],
  maxNuages: 3,
  barres: [],
  maxBarres: 5,
  frameCounter: 0,
  frameInterval: 80,
  requestId: 0,
  init: function init() {
    var _this = this;

    this.context = this.canvas.getContext('2d');
    this.sprite.src = this.spriteSheetSrc;
    this.sprite.addEventListener('load', function () {
      _gameController__WEBPACK_IMPORTED_MODULE_3__["default"].init(_this);
      _background__WEBPACK_IMPORTED_MODULE_1__["default"].init(_this);
      _ground__WEBPACK_IMPORTED_MODULE_0__["default"].init(_this);
      _bg__WEBPACK_IMPORTED_MODULE_2__["default"].init(_this);

      _this.animate();
    });
  },
  animate: function animate() {
    var _this2 = this;

    this.requestId = window.requestAnimationFrame(function () {
      _this2.animate();
    });
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    _background__WEBPACK_IMPORTED_MODULE_1__["default"].update();

    if (this.frameCounter++ > this.frameInterval) {
      if (this.barres.length >= this.maxBarres) this.barres.splice(0, 1);
      this.barres.push(new _Barres__WEBPACK_IMPORTED_MODULE_5__["default"](this));
      if (this.nuages.length >= this.maxNuages) this.nuages.splice(0, 1);
      this.nuages.push(new _Nuages__WEBPACK_IMPORTED_MODULE_4__["default"](this));
      this.frameCounter = 0;
    }

    this.barres.forEach(function (barre) {
      barre.update();
    });
    this.nuages.forEach(function (nuage) {
      nuage.update();
    });
    _ground__WEBPACK_IMPORTED_MODULE_0__["default"].update();
    _bg__WEBPACK_IMPORTED_MODULE_2__["default"].update();
  },
  renderSpriteFrame: function renderSpriteFrame(coordinates) {
    this.context.drawImage(this.sprite, coordinates.sx, coordinates.sy, coordinates.sw, coordinates.sh, coordinates.dx, coordinates.dy, coordinates.dw, coordinates.dh);
  },
  cancelAnimation: function cancelAnimation() {
    window.cancelAnimationFrame(this.requestId);
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