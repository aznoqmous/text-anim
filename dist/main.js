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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _text_anim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-anim */ \"./src/text-anim.js\");\n/* harmony import */ var _text_hola__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-hola */ \"./src/text-hola.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n  let elements = [...document.querySelectorAll('b')]\r\n  elements.map(element => {\r\n    new _text_hola__WEBPACK_IMPORTED_MODULE_1__[\"default\"](element)\r\n    // new TextAnim(element, {\r\n    //   onBuildChar: (charEl)=>{\r\n    //     let clone = document.createElement('i')\r\n    //     clone.innerHTML = charEl.innerHTML\r\n    //     charEl.appendChild(clone)\r\n    //   },\r\n    //\r\n    //   mouseEnter: ()=>{\r\n    //     let children = [...element.children]\r\n    //     children.map((el, i)=>{\r\n    //       setTimeout(()=>{\r\n    //         el.style.transform = 'translate(0, -100%)'\r\n    //       }, i * 100)\r\n    //     })\r\n    //   },\r\n    //\r\n    //   mouseLeave: ()=>{\r\n    //     let children = [...element.children]\r\n    //     children.map((el, i)=>{\r\n    //       setTimeout(()=>{\r\n    //         el.style.transform = 'translate(0, 0)'\r\n    //       }, i * 100)\r\n    //     })\r\n    //   }\r\n    //\r\n    // })\r\n\r\n  })\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/text-anim.js":
/*!**************************!*\
  !*** ./src/text-anim.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextAnim; });\nclass TextAnim {\r\n  constructor(element, options={}){\r\n    this.options = Object.assign({\r\n      transition: 'all 0.5s ease',\r\n      display: 'inline-block'\r\n      //mouseEnter: ()=>{},\r\n      //mouseLeave: ()=>{},\r\n      //onBuildChar: ()=>{},\r\n    }, options)\r\n\r\n    this.element = element\r\n\r\n    this.build()\r\n    this.bind()\r\n  }\r\n\r\n  build(){\r\n    let chars = this.element.innerText.split('')\r\n    this.element.innerHTML = ''\r\n    chars.map(char => {\r\n      let charEl = document.createElement('span')\r\n      charEl.style.transition = this.options.transition\r\n      charEl.style.display = this.options.display\r\n      charEl.innerHTML = char\r\n      this.element.appendChild(charEl)\r\n      if(this.options.onBuildChar) this.options.onBuildChar(charEl)\r\n    })\r\n  }\r\n\r\n  bind(){\r\n    this.element.addEventListener('mouseenter', ()=>{\r\n      if(this.options.mouseEnter) this.options.mouseEnter(this.element)\r\n    })\r\n    this.element.addEventListener('mouseleave', ()=>{\r\n      if(this.options.mouseLeave) this.options.mouseLeave(this.element)\r\n    })\r\n  }\r\n\r\n  static setStyles(element, styles){\r\n    for(let key in styles) element.style[key] = styles[key]\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/text-anim.js?");

/***/ }),

/***/ "./src/text-hola.js":
/*!**************************!*\
  !*** ./src/text-hola.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextHola; });\n/* harmony import */ var _text_anim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-anim */ \"./src/text-anim.js\");\n\r\n\r\nclass TextHola extends _text_anim__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(element, options){\r\n    options = Object.assign({\r\n      timing: 100\r\n    }, options)\r\n\r\n    super(element, {\r\n      onBuildChar: (charEl)=>{\r\n        _text_anim__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setStyles(charEl, {\r\n          position: 'relative'\r\n        })\r\n        let clone = document.createElement('i')\r\n        clone.innerHTML = charEl.innerHTML\r\n        _text_anim__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setStyles(clone, {\r\n          position: 'absolute',\r\n          left: 0,\r\n          top: '100%'\r\n        })\r\n        charEl.appendChild(clone)\r\n      },\r\n\r\n      mouseEnter: ()=>{\r\n        let children = [...element.children]\r\n        children.map((el, i)=>{\r\n          setTimeout(()=>{\r\n            el.style.transform = 'translate(0, -100%)'\r\n          }, i * options.timing)\r\n        })\r\n      },\r\n\r\n      mouseLeave: ()=>{\r\n        let children = [...element.children]\r\n        children.map((el, i)=>{\r\n          setTimeout(()=>{\r\n            el.style.transform = 'translate(0, 0)'\r\n          }, i * options.timing)\r\n        })\r\n      }\r\n\r\n    })\r\n\r\n    _text_anim__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setStyles(this.element, {\r\n      display: 'inline-block',\r\n      marginBottom: '-0.25rem',\r\n      overflow: 'hidden'\r\n    })\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/text-hola.js?");

/***/ })

/******/ });