/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/_header/header.js":
/*!******************************************!*\
  !*** ./src/components/_header/header.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeDatalist": function() { return /* binding */ changeDatalist; }
/* harmony export */ });
/* harmony import */ var _js_clickOutside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/_clickOutside.js */ "./src/js/_clickOutside.js");

var changeDatalist = function changeDatalist() {
  var selector = document.querySelectorAll('.js--input-datalist');
  if (selector.length == 0) return;
  selector.forEach(function (csSelector) {
    var csInput = csSelector.querySelector('input');
    var csList = csSelector.querySelector('ul');
    var csOptions = csList.querySelectorAll('li');
    var aOptions = Array.from(csOptions);
    var csState = "initial";
    csSelector.setAttribute('role', 'combobox');
    csSelector.setAttribute('aria-haspopup', 'listbox');
    csSelector.setAttribute('aria-owns', 'custom-select-list');
    csInput.setAttribute('aria-autocomplete', 'both');
    csInput.setAttribute('aria-controls', 'custom-select-list');
    csList.setAttribute('role', 'listbox');
    csOptions.forEach(function (option) {
      option.setAttribute('role', 'option');
      option.setAttribute('tabindex', "-1");
    });
    csSelector.addEventListener('click', function (e) {
      var currentFocus = findFocus();
      switch (csState) {
        case 'initial':
          toggleList('Open');
          setState('opened');
          break;
        case 'opened':
          if (currentFocus === csInput) {
            toggleList('Shut');
            setState('initial');
          } else if (currentFocus.tagName === 'LI') {
            makeChoice(currentFocus);
            toggleList('Shut');
            setState('closed');
          }
          break;
        case 'filtered':
          if (currentFocus.tagName === 'LI') {
            makeChoice(currentFocus);
            toggleList('Shut');
            setState('closed');
          }
          break;
        case 'closed':
          toggleList('Open');
          setState('filtered');
          break;
      }
    });
    csSelector.addEventListener('keyup', function (e) {
      doKeyAction(e.key);
      var length = csOptions.length;
      var display_length = 0;
      csOptions.forEach(function (elem) {
        if (elem.style.display == 'none') {
          display_length++;
        }
      });
      if (length == display_length) csList.classList.add('d-none');else csList.classList.remove('d-none');
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.js--input-datalist')) {
        toggleList('Shut');
        setState('initial');
      }
    });
    function toggleList(whichWay) {
      if (whichWay === 'Open') {
        csList.classList.remove('d-none');
        csSelector.setAttribute('aria-expanded', 'true');
      } else {
        // === 'Shut'
        csList.classList.add('d-none');
        csSelector.setAttribute('aria-expanded', 'false');
      }
    }
    function findFocus() {
      var focusPoint = document.activeElement;
      return focusPoint;
    }
    function moveFocus(fromHere, toThere) {
      var aCurrentOptions = aOptions.filter(function (option) {
        if (option.style.display === '') {
          return true;
        }
      });
      if (aCurrentOptions.length === 0) {
        return;
      }
      if (toThere === 'input') {
        csInput.focus();
      }
      switch (fromHere) {
        case csInput:
          if (toThere === 'forward') {
            aCurrentOptions[0].focus();
          } else if (toThere === 'back') {
            aCurrentOptions[aCurrentOptions.length - 1].focus();
          }
          break;
        case csOptions[0]:
          if (toThere === 'forward') {
            aCurrentOptions[1].focus();
          } else if (toThere === 'back') {
            csInput.focus();
          }
          break;
        case csOptions[csOptions.length - 1]:
          if (toThere === 'forward') {
            aCurrentOptions[0].focus();
          } else if (toThere === 'back') {
            aCurrentOptions[aCurrentOptions.length - 2].focus();
          }
          break;
        default:
          // middle list or filtered items
          var currentItem = findFocus();
          var whichOne = aCurrentOptions.indexOf(currentItem);
          if (toThere === 'forward') {
            var nextOne = aCurrentOptions[whichOne + 1];
            nextOne.focus();
          } else if (toThere === 'back' && whichOne > 0) {
            var previousOne = aCurrentOptions[whichOne - 1];
            previousOne.focus();
          } else {
            // if whichOne = 0
            csInput.focus();
          }
          break;
      }
    }
    function doFilter() {
      var terms = csInput.value;
      var aFilteredOptions = aOptions.filter(function (option) {
        if (option.innerText.toUpperCase().startsWith(terms.toUpperCase())) {
          return true;
        }
      });
      csOptions.forEach(function (option) {
        return option.style.display = "none";
      });
      aFilteredOptions.forEach(function (option) {
        option.style.display = "";
      });
      setState('filtered');
    }
    function makeChoice(whichOption) {
      csInput.value = whichOption.textContent;
      moveFocus(document.activeElement, 'input');
    }
    function setState(newState) {
      switch (newState) {
        case 'initial':
          csState = 'initial';
          break;
        case 'opened':
          csState = 'opened';
          break;
        case 'filtered':
          csState = 'filtered';
          break;
        case 'closed':
          csState = 'closed';
      }
    }
    function doKeyAction(whichKey) {
      var currentFocus = findFocus();
      switch (whichKey) {
        case 'Enter':
          if (csState === 'initial') {
            toggleList('Open');
            setState('opened');
          } else if (csState === 'opened' && currentFocus.tagName === 'LI') {
            makeChoice(currentFocus);
            toggleList('Shut');
            setState('closed');
          } else if (csState === 'opened' && currentFocus === csInput) {
            toggleList('Shut');
            setState('closed');
          } else if (csState === 'filtered' && currentFocus.tagName === 'LI') {
            makeChoice(currentFocus);
            toggleList('Shut');
            setState('closed');
          } else if (csState === 'filtered' && currentFocus === csInput) {
            toggleList('Open');
            setState('opened');
          } else {
            toggleList('Open');
            setState('filtered');
          }
          break;
        case 'Escape':
          if (csState === 'opened' || csState === 'filtered') {
            toggleList('Shut');
            setState('initial');
          }
          break;
        case 'ArrowDown':
          if (csState === 'initial' || csState === 'closed') {
            toggleList('Open');
            moveFocus(csInput, 'forward');
            setState('opened');
          } else {
            toggleList('Open');
            moveFocus(currentFocus, 'forward');
          }
          break;
        case 'ArrowUp':
          if (csState === 'initial' || csState === 'closed') {
            toggleList('Open');
            moveFocus(csInput, 'back');
            setState('opened');
          } else {
            moveFocus(currentFocus, 'back');
          }
          break;
        default:
          if (csState === 'initial') {
            toggleList('Open');
            doFilter();
            setState('filtered');
          } else if (csState === 'opened') {
            doFilter();
            setState('filtered');
          } else if (csState === 'closed') {
            doFilter();
            setState('filtered');
          } else {
            doFilter();
          }
          break;
      }
    }
  });
};


/***/ }),

/***/ "./src/components/app-catalog/catalog.js":
/*!***********************************************!*\
  !*** ./src/components/app-catalog/catalog.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var openCatalogMenu = function openCatalogMenu() {
  var wrap = document.querySelector('.js--catalog');
  if (!wrap) return;
  var btn = document.querySelector('.js--catalog .js--catalog-btn');
  var menu = document.querySelector('.js--catalog-menu');
  if (!btn || !menu) return;
  var burger = btn.querySelector('.burger');
  var heightStart = menu.offsetHeight;
  menu.style.setProperty('max-height', 0);
  btn.addEventListener('click', function () {
    if (!menu.classList.contains('catalog-show')) {
      menu.classList.add('catalog-show');
      if (burger) burger.classList.add('open');
      menu.style.setProperty('max-height', menu.scrollHeight + 'px');
    } else {
      menu.classList.remove('catalog-show');
      if (burger) burger.classList.remove('open');
      menu.style.setProperty('max-height', 0);
    }
  });
  document.addEventListener('click', function (event) {
    if (!menu.classList.contains('catalog-show')) return;
    event.stopPropagation();
    if (event.target == wrap) return;
    var a = 0;
    var find = function find(node) {
      while (node) {
        if (node.classList.contains('js--catalog')) {
          a = 1;
          return node;
        } else {
          node = node.parentElement;
        }
      }
      return null;
    };
    find(event.target);
    if (a == 1) return;
    menu.classList.remove('catalog-show');
    if (burger) burger.classList.remove('open');
    menu.style.setProperty('max-height', 0);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (openCatalogMenu);

/***/ }),

/***/ "./src/components/burger/burger.js":
/*!*****************************************!*\
  !*** ./src/components/burger/burger.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var changeBurger = function changeBurger() {
  var burder = document.querySelectorAll('.js--burger');
  if (burder.length == 0) return;
  burder.forEach(function (elem) {
    elem.addEventListener('click', function () {
      if (!elem.classList.contains('open')) elem.classList.add('open');else elem.classList.remove('open');
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (changeBurger);

/***/ }),

/***/ "./src/js/_clickOutside.js":
/*!*********************************!*\
  !*** ./src/js/_clickOutside.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var _clickOutside = function _clickOutside(openClick, openOverflow, className) {
  var classNameOpen = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  document.addEventListener('click', function (event) {
    event.stopPropagation();
    if (event.target == openClick) return;
    var a = 0;
    for (var i = 0; i < openClick.children.length; i++) {
      if (event.target == openClick.children[i]) return a = 1;
    }
    for (var _i = 0; _i < openOverflow.children.length; _i++) {
      if (event.target == openOverflow.children[_i]) return a = 1;
    }
    if (a == 1) return;
    openOverflow.classList.remove(className);
    if (classNameOpen) openClick.classList.remove(classNameOpen);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (_clickOutside);

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/_header/header.js */ "./src/components/_header/header.js");
/* harmony import */ var _components_burger_burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/burger/burger.js */ "./src/components/burger/burger.js");
/* harmony import */ var _components_app_catalog_catalog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/app-catalog/catalog.js */ "./src/components/app-catalog/catalog.js");



window.addEventListener('load', function () {
  _components_header_header_js__WEBPACK_IMPORTED_MODULE_0__.changeDatalist();
  (0,_components_burger_burger_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_app_catalog_catalog_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=main.js.map