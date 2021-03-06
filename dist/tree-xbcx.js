/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getTag(value) {
  return Object.prototype.toString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (getTag);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getTag__ = __webpack_require__(0);


function isArray(value) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getTag__["a" /* default */])(value) === '[object Array]';
}

/* harmony default export */ __webpack_exports__["a"] = (isArray);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getTag__ = __webpack_require__(0);


function isPlainObject(value) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getTag__["a" /* default */])(value) === '[object Object]';
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getTag__ = __webpack_require__(0);


function isString(value) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getTag__["a" /* default */])(value) === '[object String]';
}

/* harmony default export */ __webpack_exports__["a"] = (isString);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getTag__ = __webpack_require__(0);


function isUndefined(value) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getTag__["a" /* default */])(value) === '[object Undefined]';
}

/* harmony default export */ __webpack_exports__["a"] = (isUndefined);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mergeBase__ = __webpack_require__(11);


function merge() {
  var target = arguments[0] || {};
  for (var i = 1; i < arguments.length; i++) {
    target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mergeBase__["a" /* default */])(target, arguments[i]);
  }
  return target;
}

/* harmony default export */ __webpack_exports__["a"] = (merge);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mergeDeepBase__ = __webpack_require__(12);


function mergeDeep() {
  var target = arguments[0] || {};
  for (var i = 1; i < arguments.length; i++) {
    target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mergeDeepBase__["a" /* default */])(target, arguments[i]);
  }
  return target;
}

/* harmony default export */ __webpack_exports__["a"] = (mergeDeep);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(20)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isUndefined__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isPlainObject__ = __webpack_require__(2);




var hasOwnProperty = Object.prototype.hasOwnProperty;

function mergeBase(target, src) {
  if (target === src) {
    return target;
  }
  var result = target;
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isArray__["a" /* default */])(src)) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isArray__["a" /* default */])(result)) {
      result = [];
    }
    for (var i = 0; i < src.length; i++) {
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isUndefined__["a" /* default */])(src[i]) && result[i] !== src[i] && result !== src[i]) {
        result[i] = src[i];
      }
    }
    return result;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlainObject__["a" /* default */])(src)) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlainObject__["a" /* default */])(result)) {
      result = {};
    }
    for (var key in src) {
      if (hasOwnProperty.call(src, key) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isUndefined__["a" /* default */])(src[key]) && result[key] !== src[key] && result !== src[key]) {
        result[key] = src[key];
      }
    }
    return result;
  }
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isUndefined__["a" /* default */])(src)) {
    result = src;
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (mergeBase);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isUndefined__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isPlainObject__ = __webpack_require__(2);




var hasOwnProperty = Object.prototype.hasOwnProperty;

function mergeDeepBase(target, src) {
  if (target === src) {
    return target;
  }
  var result = target;
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isArray__["a" /* default */])(src)) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isArray__["a" /* default */])(result)) {
      result = [];
    }
    for (var i = 0; i < src.length; i++) {
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isUndefined__["a" /* default */])(src[i]) && result[i] !== src[i] && result !== src[i]) {
        result[i] = mergeDeepBase(result[i], src[i]);
      }
    }
    return result;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlainObject__["a" /* default */])(src)) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlainObject__["a" /* default */])(result)) {
      result = {};
    }
    for (var key in src) {
      if (hasOwnProperty.call(src, key) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isUndefined__["a" /* default */])(src[key]) && result[key] !== src[key] && result !== src[key]) {
        result[key] = mergeDeepBase(result[key], src[key]);
      }
    }
    return result;
  }
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isUndefined__["a" /* default */])(src)) {
    result = src;
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (mergeDeepBase);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isString__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArray__ = __webpack_require__(1);



var utils = {};
utils.toArray = function (params) {
  var array = [];
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isString__["a" /* default */])(params)) {
    array = params.split(',');
  } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isArray__["a" /* default */])(params)) {
    array = params;
  } else {
    console.warn('请检查 参数 格式');
  }
  return array;
};
utils._uniqueArray = function (arrayIn) {
  var ua = [];
  for (var i = 0; i < arrayIn.length; i++) {
    if (ua.indexOf(arrayIn[i]) === -1) {
      ua.push(arrayIn[i]);
    }
  }
  return ua;
};

/* harmony default export */ __webpack_exports__["a"] = (utils);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(15), __esModule: true };

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(5)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(54)
  , defined = __webpack_require__(21);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(79)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(75),
  /* scopeId */
  "data-v-2c0e2680",
  /* cssModules */
  null
)
Component.options.__file = "D:\\jcc\\tree-vue\\src\\tree-xbcx\\xTree.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] xTree.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c0e2680", Component.options)
  } else {
    hotAPI.reload("data-v-2c0e2680", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_merge__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_mergeDeep__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__methods__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__xTreeItem_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__xTreeItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__xTreeItem_vue__);








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'x-tree',
  components: {
    xTreeItem: __WEBPACK_IMPORTED_MODULE_4__xTreeItem_vue___default.a
  },
  props: {
    data: Array,
    options: Object,
    fn: Object
  },
  data: function data() {
    this.opts = __WEBPACK_IMPORTED_MODULE_3__methods__["a" /* default */]._initOptions(this.options);
    this.tree = __WEBPACK_IMPORTED_MODULE_3__methods__["a" /* default */]._arrayToTree(this.data, this.opts);
    this.tree = this.initTree(this.tree, this.opts);
    this.exportFn();
    return {
      dataTree: this.tree,
      opts: this.opts,
      fnfn: __WEBPACK_IMPORTED_MODULE_3__methods__["a" /* default */]
    };
  },
  computed: {},
  methods: {
    initTree: function initTree(tree, options) {
      var treeChecked = options.sel_ids ? __WEBPACK_IMPORTED_MODULE_3__methods__["a" /* default */]._checkTreeByIds(tree, options.sel_ids) : tree;
      var treeExpand = options.expandIds ? __WEBPACK_IMPORTED_MODULE_3__methods__["a" /* default */]._expandTreeByIds(treeChecked, options.expandIds) : treeChecked;

      if (options.expandIds) {
        var ids = __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* default */].toArray(options.expandIds);
        var items = __WEBPACK_IMPORTED_MODULE_3__methods__["a" /* default */].getItemByIds(tree, ids);
        for (var i = 0; i < items.length; i++) {
          this.activeItem(items[i]);
        }
      }
      return treeExpand;
    },
    exportFn: function exportFn() {
      this.fn.getItems = this.getItems;
      this.fn.getIds = this.getIds;
      this.fn.getNames = this.getNames;
      this.fn.getItemById = this.getItemById;
      this.fn.locateItem = this.locateItem;
      this.fn.locateItems = this.locateItems;
      this.fn.activeItem = this.activeItem;
      this.fn.clearActive = this.clearActive;
      this.fn.setCustom = this.setCustom;
      this.fn.setTextIcon = this.setTextIcon;
    },
    getItems: function getItems(type) {
      return __WEBPACK_IMPORTED_MODULE_3__methods__["a" /* default */].getItems(this.tree, type);
    },
    getIds: function getIds(type) {
      return __WEBPACK_IMPORTED_MODULE_3__methods__["a" /* default */].getIds(this.tree, type);
    },
    getNames: function getNames(type) {
      return __WEBPACK_IMPORTED_MODULE_3__methods__["a" /* default */].getNames(this.tree, type);
    },
    getItemById: function getItemById(id) {
      var item = __WEBPACK_IMPORTED_MODULE_3__methods__["a" /* default */].getItemById(this.tree, id);
      if (!item) {
        console.warn('没有找到对应的item');
        return;
      }
      return item;
    },
    activeItem: function activeItem(item) {
      item.class = this.opts.class.active;
      this.tree.active.push(item);
    },
    clearActive: function clearActive(type, id) {
      var array = this.tree.active;
      if (type) {
        for (var index = 0; index < array.length; index++) {
          array[index].class = '';
        }
        array.length = 0;
      } else {
        for (var _index = 0; _index < array.length; _index++) {
          if (array[_index].id == id) {
            array[_index].class = '';
            array.splice();
            break;
          }
        }
      }
      return;
    },
    locateItem: function locateItem(id) {
      var item = __WEBPACK_IMPORTED_MODULE_3__methods__["a" /* default */].getItemById(this.tree, id);
      if (!item) {
        console.warn('没有找到对应的item');
        return;
      }
      item.expand = true;
      __WEBPACK_IMPORTED_MODULE_3__methods__["a" /* default */]._expandParent(item.parent, true);
      this.activeItem(item);
      return item;
    },
    locateItems: function locateItems(ids) {
      var tree = __WEBPACK_IMPORTED_MODULE_3__methods__["a" /* default */]._expandTreeByIds(this.tree, ids);
      return tree;
    },
    setCustom: function setCustom(id, custom) {
      var item = this.getItemById(id);
      if (item) {
        item.custom = custom;
      } else {
        console.warn('未找到item, 请检查id是否正确');
      }
      return item;
    },
    setTextIcon: function setTextIcon(id, textIcon) {
      var item = this.getItemById(id);
      if (item) {
        item.textIcon = textIcon;
      } else {
        console.warn('未找到item, 请检查id是否正确');
      }
      return item;
    }
  }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'x-tree-item',
  props: {
    model: Object,
    options: Object,
    fn: Object,
    tree: Object
  },
  data: function data() {
    return {
      text: this.model.name,
      title: this.model.name,
      iconfont: 'iconfont',
      showMenu: false
    };
  },
  created: function created() {
    if (this.options.custom) {
      this.model.addition = this.options.custom(this.model);
    }
    if (this.options.menuCustom) {
      this.model.menu = this.options.menuCustom(this.model);
    }
    if (this.options.textIcon) {
      this.model.textIcon = this.options.textIcon(this.model);
    }
  },

  computed: {
    itemIf: function itemIf() {
      return true;
    },
    itemShow: function itemShow() {
      return true;
    },
    itemClass: function itemClass() {
      return this.model.is_node ? 'x-tree-node' : 'x-tree-leaf';
    },
    itemStyle: function itemStyle() {
      return '';
    },
    selfIf: function selfIf() {
      return true;
    },
    selfShow: function selfShow() {
      return this.model.level;
    },
    selfClass: function selfClass() {
      return [this.options.editable ? '' : 'editable_false', this.model.class];
    },
    selfStyle: function selfStyle() {
      var paddingLeft = this.model.level * 1.3 - 0.5;
      return [{ 'padding-left': paddingLeft + 'em' }, this.options.style.item, this.model.style];
    },
    expandIf: function expandIf() {
      return true;
    },
    expandShow: function expandShow() {
      return true;
    },
    expandClass: function expandClass() {
      if (this.childrenIf === false) {
        return 'icon-sos icon-blank';
      }
      return this.childrenShow ? 'icon-1' : 'icon-1-copy';
    },
    expandStyle: function expandStyle() {
      return '';
    },
    checkboxIf: function checkboxIf() {
      return true;
    },
    checkboxShow: function checkboxShow() {
      return this.options.checkbox;
    },
    checkboxClass: function checkboxClass() {
      var faIcon = '';
      if (this.model.checkState === true) {
        faIcon = 'icon-square-check';
      } else if (this.model.checkState === false) {
        faIcon = 'icon-square';
      } else if (this.model.checkState === 'z') {
        faIcon = 'icon-square-minus';
      }
      return faIcon;
    },
    checkboxStyle: function checkboxStyle() {
      return '';
    },
    iconIf: function iconIf() {
      return true;
    },
    iconShow: function iconShow() {
      if (this.options.textIcon) {
        return true;
      }
      if (this.model.textIcon) {
        return true;
      }
      return this.model.is_node;
    },
    iconClass: function iconClass() {
      var iconIcon = '';
      if (this.model.textIcon) {
        iconIcon = this.model.textIcon;
      } else if (this.model.is_node) {
        iconIcon = 'icon-wenjianjia1';
      }
      return iconIcon;
    },
    iconStyle: function iconStyle() {
      return '';
    },
    textIf: function textIf() {
      return true;
    },
    textShow: function textShow() {
      return true;
    },
    textClass: function textClass() {
      return true;
    },
    textStyle: function textStyle() {
      return true;
    },
    dropdownIf: function dropdownIf() {
      return this.menuIf;
    },
    dropdownShow: function dropdownShow() {
      return true;
    },
    dropdownClass: function dropdownClass() {
      return 'icon-xiangxia11';
    },
    dropdownStyle: function dropdownStyle() {
      return '';
    },
    menuIf: function menuIf() {
      if (this.options.editable === false) {
        return false;
      }
      if (this.options.defaultMenu === false) {
        return this.model.menu.length !== 0;
      } else if (!this.model.is_edit && !this.model.is_delete && !this.model.is_add && !this.sortable.upAble && !this.sortable.downAble) {
        return this.model.menu.length !== 0;
      }
      return true;
    },
    menuShow: function menuShow() {
      return this.showMenu;
    },
    menuClass: function menuClass() {
      return '';
    },
    menuStyle: function menuStyle() {
      return '';
    },
    defaultMenuIf: function defaultMenuIf() {
      return true;
    },
    defaultMenuShow: function defaultMenuShow() {
      return this.options.defaultMenu;
    },
    defaultMenuClass: function defaultMenuClass() {
      return '';
    },
    defaultMenuStyle: function defaultMenuStyle() {
      return '';
    },
    customMenuIf: function customMenuIf() {
      return true;
    },
    customMenuShow: function customMenuShow() {
      return true;
    },
    customMenuClass: function customMenuClass() {
      return '';
    },
    customMenuStyle: function customMenuStyle() {
      return '';
    },
    additionIf: function additionIf() {
      return this.model.addition;
    },
    additionShow: function additionShow() {
      return this.model.level;
    },
    additionClass: function additionClass() {
      return '';
    },
    additionStyle: function additionStyle() {
      return this.options.style.custom;
    },
    childrenIf: function childrenIf() {
      return this.model.is_node && this.model.children && this.model.children.length;
    },
    childrenShow: function childrenShow() {
      return this.model.expand;
    },
    childrenClass: function childrenClass() {
      return '';
    },
    childrenStyle: function childrenStyle() {
      return this.options.style.children;
    },
    index: function index() {
      if (!this.model.parent) {
        return false;
      }
      return this.model.parent.children.indexOf(this.model);
    },
    sortable: function sortable() {
      if (!this.model.parent || this.model.parent.children.length == 1) {
        return {
          upAble: false,
          downAble: false
        };
      }
      var upable = true;
      var downable = true;
      var index = this.model.parent.children.indexOf(this.model);
      var len = this.model.parent.children.length;
      if (index === 0) {
        upable = false;
      } else if (index >= len - 1) {
        downable = false;
      }
      upable = this.model.is_move_up !== undefined ? this.model.is_move_up : upable;
      downable = this.model.is_move_down !== undefined ? this.model.is_move_down : upable;
      return {
        upAble: upable,
        downAble: downable
      };
    }
  },

  methods: {
    expandFn: function expandFn() {
      if (this.childrenIf) {
        this.model.expand = !this.model.expand;
        this.options.onExpand(this.model);
      }
    },
    checkFn: function checkFn() {
      this.fn.changeItem(this.model, !this.model.is_check);
      this.options.onCheck(this.model);
    },
    nameFn: function nameFn() {
      this.options.onClick(this.model);
    },
    nameFnn: function nameFnn() {},
    menuShowFn: function menuShowFn() {
      this.showMenu = !this.showMenu;
    },
    menuHideFn: function menuHideFn() {
      this.showMenu = false;
    },
    editFn: function editFn() {
      this.options.onEdit(this.model, this.editFnn);
      this.showMenu = false;
    },
    editFnn: function editFnn(item, pid, result) {
      if (result && this.model.parent.id != pid) {
        var index = this.model.parent.children.indexOf(this.model);
        this.model.parent.children.splice(index, 1);
        var parent = this.fn.getItemById(this.tree, pid);
        if (!parent || !parent.is_node) {
          return 'error : 修改节点(change parent), 新的parent不合法(1、不存在 2、is_node为false 3、当前节点本身或其后代)';
        }
        parent.children.push(this.model);
      }
      return false;
    },
    menuFn: function menuFn(callback) {
      if (callback) {
        callback(this.model);
      }
      this.showMenu = false;
    },
    deleteFn: function deleteFn() {
      this.options.onDelete(this.model, this.deleteFnn);
      this.showMenu = false;
    },
    deleteFnn: function deleteFnn(item, result) {
      var index = this.model.parent.children.indexOf(this.model);
      if (result) {
        this.model.parent.children.splice(index, 1);
      }
    },
    addChildFn: function addChildFn() {
      var newChild = {
        id: '',
        name: '',
        nodeId: this.model.id,
        is_node: false,
        is_check: false,
        expand: false,
        level: this.model.level + 1,
        parent: this.model,
        children: []
      };
      this.options.onAddChild(newChild, this.addChildFnn);
      this.showMenu = false;
    },
    addChildFnn: function addChildFnn(item, result) {
      if (result) {
        item.parent.children.push(item);
      }
    },
    sortFn: function sortFn(type) {
      var index = this.model.parent.children.indexOf(this.model);
      var brother = void 0;
      if (type) {
        brother = this.model.parent.children[index - 1];
        this.options.onSort(this.model, brother, this.upFnn);
      } else {
        brother = this.model.parent.children[index + 1];
        this.options.onSort(this.model, brother, this.downFnn);
      }
      this.showMenu = false;
    },
    upFnn: function upFnn(item, result) {
      var index = this.model.parent.children.indexOf(this.model);
      if (result) {
        this.model.parent.children.splice(index, 1);
        this.model.parent.children.splice(index - 1, 0, this.model);
      }
    },
    downFnn: function downFnn(item, result) {
      var index = this.model.parent.children.indexOf(this.model);
      if (result) {
        this.model.parent.children.splice(index, 1);
        this.model.parent.children.splice(index + 1, 0, this.model);
      }
    }
  }
});

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xTree_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xTree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__xTree_vue__);


Vue.component('x-tree', __WEBPACK_IMPORTED_MODULE_0__xTree_vue___default.a);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__xTree_vue___default.a);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_clone__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_cloneDeep__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_merge__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_mergeDeep__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_isEmpty__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_isString__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_isArray__ = __webpack_require__(1);









function _initOptions(options) {
  var defOptions = {
    zIndex: 9,
    is_trigger: false,
    has_search: false,
    only_child: false,
    node_merge: false,
    is_multi: true,
    expand: false,
    expandIds: null,
    sel_ids: '',
    checkbox: false,
    editable: false,
    defaultMenu: true,
    editorText: {
      edit: '修改部门',
      delete: '删除部门',
      add: '添加子部门',
      up: '上移',
      down: '下移',
      unable: '无法操作'
    },
    style: {
      tree: {
        width: null,
        maxHeight: 300
      },
      item: {},
      children: {},
      custom: {
        position: 'absolute',
        top: '0',
        left: '0'
      }
    },
    class: {
      tree: '',
      item: '',
      active: 'x-tree-item-active',
      children: '',
      custom: ''
    },
    onExpand: function onExpand() {},
    onClick: function onClick() {},
    onCheck: function onCheck() {},
    onEdit: function onEdit() {},
    onDelete: function onDelete() {},
    onAddChild: function onAddChild() {},
    onSort: function onSort() {}
  };
  if (options.style && options.style.tree && options.style.tree.width) {
    defOptions.style.custom.left = options.style.tree.width;
  }
  var opt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_mergeDeep__["a" /* default */])({}, defOptions, options);
  return opt;
}

function _traverseTree(tree, fn, input, output) {
  if (!tree) {
    return true;
  }
  var _continue = fn(tree, input, output);
  if (_continue.children && tree.children) {
    for (var i = 0; i < tree.children.length; i++) {
      var brother = _traverseTree(tree.children[i], fn, input, output);
      if (!brother) {
        break;
      }
    }
  }
  return _continue.brother;
}

function _arrayToTree(arrayIn, opt) {
  var rootIds = this._getTreeRoot(arrayIn);
  var treeData = {
    id: rootIds,
    name: 'ROOT',
    nodeId: null,
    is_node: true,
    is_check: false,
    checkState: false,
    children: [],
    parent: null,
    level: 0,
    expand: true,
    addition: null,
    menu: null,
    textIcon: null,
    active: [],
    options: opt,
    originData: arrayIn,
    itemAmount: arrayIn.length
  };
  for (var i = 0; i < rootIds.length; i++) {
    for (var j = 0; j < arrayIn.length; j++) {
      if (arrayIn[j].nodeId == rootIds[i]) {
        treeData.children.push(newItem(arrayIn, arrayIn[j], treeData, opt));
      }
    }
  }
  return treeData;
}

function _getTreeRoot(arrayIn) {
  var rootIds = [];
  var clone = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(arrayIn));
  for (var i = 0, len = arrayIn.length; i < len; i++) {
    for (var j = i; j < len; j++) {
      if (arrayIn[i].is_node && arrayIn[i].id == arrayIn[j].nodeId) {
        clone[j] = null;
      }
      if (arrayIn[i].nodeId == arrayIn[j].id && arrayIn[j].is_node) {
        clone[i] = null;
      }
    }
  }
  for (var k = 0; k < clone.length; k++) {
    if (clone[k]) {
      rootIds.push(clone[k].nodeId);
    }
  }
  rootIds = this._uniqueArray(rootIds);
  return rootIds;
}

function _uniqueArray(arrayIn) {
  var ua = [];
  for (var i = 0; i < arrayIn.length; i++) {
    if (ua.indexOf(arrayIn[i]) == -1) {
      ua.push(arrayIn[i]);
    }
  }
  return ua;
}

function _getSubTree(arrayIn, parent, opt) {
  var result = [];
  for (var i = 0; i < arrayIn.length; i += 1) {
    if (arrayIn[i].nodeId == parent.id) {
      result.push(newItem(arrayIn, arrayIn[i], parent, opt));
    }
  }
  return result;
}

function newItem(arrayIn, originItem, parent, opt) {
  var result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_clone__["a" /* default */])(originItem);
  if (opt.checkbox && result.is_check === undefined) {
    result.is_check = false;
  }
  result.parent = parent;
  result.addition = null;
  result.menu = null;
  result.textIcon = null;
  result.class = null;
  result.style = null;
  result.level = parent.level + 1;
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_isEmpty__["a" /* default */])(opt.expandIds) && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_isString__["a" /* default */])(opt.expandIds) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_isArray__["a" /* default */])(opt.expandIds))) {
    result.expand = false;
  } else {
    result.expand = expandLvl(opt.expand, result);
  }
  result.checkState = result.is_check;
  if (result.is_node) {
    result.children = _getSubTree(arrayIn, result, opt);
  } else {
    result.children = [];
  }
  return result;
}

function expandLvl(expand, temp) {
  if (expand === true) {
    return true;
  } else if (expand === false) {
    return temp.level <= 0;
  } else if (temp.level <= expand) {
    return true;
  }
  return false;
}

function _checkTreeByIds(tree, sel_ids) {
  var ids = [];
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_isString__["a" /* default */])(sel_ids)) {
    ids = sel_ids.split(',');
  } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_isArray__["a" /* default */])(sel_ids)) {
    ids = sel_ids;
  } else {
    console.warn('请检查 sel_ids 格式');
  }

  _traverseTree(tree, _checkTreeByIdsFn, ids);

  return tree;
}

function _checkTreeByIdsFn(item, ids) {
  if (!ids.length) {
    return {
      children: false,
      brother: false
    };
  }
  for (var i = 0; i < ids.length; i++) {
    if (item.id == ids[i]) {
      changeItem(item, true);
      ids.splice(i, 1);
      break;
    }
  }
  return {
    children: ids.length,
    brother: ids.length
  };
}

function _expandTreeByIds(tree, expand_ids) {
  var ids = [];
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_isString__["a" /* default */])(expand_ids)) {
    ids = expand_ids.split(',');
  } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_isArray__["a" /* default */])(expand_ids)) {
    ids = expand_ids;
  } else {
    console.warn('请检查 expandIds 格式');
  }
  _traverseTree(tree, _expandTreeByIdsFn, ids);
  return tree;
}

function _expandTreeByIdsFn(item, ids) {
  if (!ids.length) {
    return {
      children: false,
      brother: false
    };
  }
  for (var i = 0; i < ids.length; i++) {
    if (item.id == ids[i]) {
      _expandParent(item.parent, true);
      ids.splice(i, 1);
      break;
    }
  }
  return {
    children: ids.length,
    brother: ids.length
  };
}

function _activeTreeByIds(tree, expand_ids) {
  var ids = [];
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_isString__["a" /* default */])(expand_ids)) {
    ids = expand_ids.split(',');
  } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_isArray__["a" /* default */])(expand_ids)) {
    ids = expand_ids;
  } else {
    console.warn('请检查 expandIds 格式');
  }
  _traverseTree(tree, _activeTreeByIdsFn, ids);
  return tree;
}

function _activeTreeByIdsFn(item, ids) {
  if (!ids.length) {
    return {
      children: false,
      brother: false
    };
  }
  for (var i = 0; i < ids.length; i++) {
    if (item.id == ids[i]) {
      _expandParent(item.parent, true);
      ids.splice(i, 1);
      break;
    }
  }
  return {
    children: ids.length,
    brother: ids.length
  };
}

function changeItem(item, change) {
  if (!item) {
    return false;
  }
  item.is_check = change;
  item.checkState = change;
  if (item.children) {
    _changeChildren(item.children, change);
    _changeChildrenState(item.children, change);
  }
  if (item.parent) {
    _changeParent(item.parent, change);
    _changeParentState(item.parent, change);
  }
}

function _changeChildrenState(children, change) {
  if (!children) {
    return false;
  }
  for (var i = 0; i < children.length; i++) {
    children[i].checkState = change;
    if (children[i].children) {
      _changeChildrenState(children[i].children, change);
    }
  }
  return true;
}

function _changeChildren(children, change) {
  if (!children) {
    return false;
  }
  for (var i = 0; i < children.length; i++) {
    if (children[i].is_check !== change) {
      children[i].is_check = change;
      if (children[i].children) {
        _changeChildren(children[i].children, change);
      }
    }
  }
  return true;
}

function _changeParentState(parent, change) {
  if (!parent) {
    return false;
  }
  var old = parent.checkState;
  var len = parent.children.length;

  if (change === 'z') {
    parent.checkState = 'z';
  } else if (change === true) {
    var n = 0;
    for (var i = 0; i < len; i++) {
      if (parent.children[i].checkState === true) {
        n += 1;
      } else {
        parent.checkState = 'z';
        break;
      }
    }
    if (n === len) {
      parent.checkState = true;
    }
  } else if (change === false) {
    var m = 0;
    for (var j = 0; j < len; j++) {
      if (parent.children[j].checkState === false) {
        m += 1;
      } else {
        parent.checkState = 'z';
        break;
      }
    }
    if (m === len) {
      parent.checkState = false;
    }
  }

  if (parent.parent && parent.checkState !== old) {
    _changeParentState(parent.parent, parent.checkState);
  }
  return true;
}

function _changeParent(parent, change) {
  if (!parent || parent.is_check == change) {
    return false;
  }
  if (change) {
    for (var i = 0; i < parent.children.length; i++) {
      if (!parent.children[i].is_check) {
        return false;
      }
    }
  }
  parent.is_check = change;
  if (parent.parent) {
    _changeParent(parent.parent, change);
  }
  return true;
}

function _expandParent(parent, expand) {
  parent.expand = expand;
  if (parent.parent) {
    _expandParent(parent.parent, expand);
  }
  return true;
}

function getItemById(tree, id) {
  if (!tree || id == undefined || id == null) {
    return false;
  }
  if (tree.id == id) {
    return tree;
  }
  if (tree.children && tree.children.length) {
    for (var i = 0; i < tree.children.length; i++) {
      var item = getItemById(tree.children[i], id);
      if (item) {
        return item;
      }
    }
  }
  return false;
}

function getItemByIds(tree, ids) {
  if (!tree || !ids || !ids.length) {
    return false;
  }
  var result = [];
  for (var i = 0; i < ids.length; i++) {
    if (tree.id == ids[i]) {
      result.push(tree);
      ids.splice(i, 1);
    }
  }
  if (ids.length && tree.children && tree.children.length) {
    for (var _i = 0; _i < tree.children.length; _i++) {
      var result2 = getItemByIds(tree.children[_i], ids);
      result = result.concat(result2);
      if (!ids.length) {
        break;
      }
    }
  }
  return result;
}

function changeItemKeyValue(item, key, value) {
  if (!item || !key) {
    return false;
  }
  var temp = item;
  temp[key] = value;
  return true;
}

function getCheckedItems(tree) {
  if (!tree) {
    return false;
  }
  var result = [];
  if (tree.is_check === true) {
    result.push(tree);
  }
  if (tree.children && tree.children.length) {
    for (var i = 0; i < tree.children.length; i++) {
      var result2 = getCheckedItems(tree.children[i]);
      result = result.concat(result2);
    }
  }
  return result;
}

function getItems(tree, typeIn) {
  if (!tree) {
    return false;
  }

  var type = void 0;
  var leaf = [];
  var node = [];
  var data = getCheckedItems(tree);

  if (!typeIn) {
    type = 1;
  } else {
    type = typeIn;
  }

  switch (type) {
    case 'node':
      data.forEach(function (n) {
        if (n.is_check === true && n.is_node === true) {
          node.push(n);
        }
      }, this);
      break;

    case 'leaf':
      data.forEach(function (n) {
        if (n.is_check === true && n.is_node === false) {
          leaf.push(n);
        }
      }, this);
      break;

    case 'merge':
      var nodeIds = [];
      data.forEach(function (n) {
        if (n.is_check === true && n.is_node === true && n.level !== 0) {
          nodeIds.push(n.id);
        }
      }, this);

      var copy = [];
      for (var index = 0; index < data.length; index++) {
        copy[index] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_clone__["a" /* default */])(data[index]);
      }

      for (var _index = 0; _index < copy.length; _index++) {
        if (nodeIds.indexOf(copy[_index].nodeId) != -1 || !copy[_index].is_check || copy[_index].level === 0) {
          copy[_index] = null;
        }
      }
      copy.forEach(function (n) {
        if (n && n.is_node === true) {
          node.push(n);
        } else if (n && n.is_node === false) {
          leaf.push(n);
        }
      }, this);
      break;
    case 'all':
    default:
      data.forEach(function (n) {
        if (n.is_check === true && n.is_node === true) {
          node.push(n);
        } else if (n.is_check === true && n.is_node === false) {
          leaf.push(n);
        }
      }, this);
      break;
  }

  return {
    node: node,
    leaf: leaf
  };
}

function getIds(tree, type) {
  var _this = this;

  var ids = {};
  var items = getItems(tree, type);

  var _loop = function _loop(key) {
    ids[key] = [];
    if (items.hasOwnProperty(key) && items[key].length > 0) {
      items[key].forEach(function (element) {
        ids[key].push(element.id);
      }, _this);
    }
  };

  for (var key in items) {
    _loop(key);
  }

  return ids;
}

function getNames(tree, type) {
  var _this2 = this;

  var names = {};
  var items = getItems(tree, type);

  var _loop2 = function _loop2(key) {
    names[key] = [];
    if (items.hasOwnProperty(key) && items[key].length > 0) {
      items[key].forEach(function (element) {
        names[key].push(element.name);
      }, _this2);
    }
  };

  for (var key in items) {
    _loop2(key);
  }
  return names;
}

function getItem(tree) {
  var data = getItems(tree);
  _traverseTree(model, getNameFn, name);
  return name;
}

function getId(model) {
  var name = [];
  _traverseTree(model, getNameFn, name);
  return name;
}

function getName(model) {
  var name = [];
  _traverseTree(model, getNameFn, name);
  return name;
}

var fn = {
  _initOptions: _initOptions,

  _arrayToTree: _arrayToTree,
  _getTreeRoot: _getTreeRoot,
  _uniqueArray: _uniqueArray,
  _getSubTree: _getSubTree,

  _checkTreeByIds: _checkTreeByIds,
  _checkTreeByIdsFn: _checkTreeByIdsFn,

  _expandTreeByIds: _expandTreeByIds,
  _expandTreeByIdsFn: _expandTreeByIdsFn,
  _expandParent: _expandParent,

  _activeTreeByIds: _activeTreeByIds,
  _activeTreeByIdsFn: _activeTreeByIdsFn,

  _traverseTree: _traverseTree,

  changeItem: changeItem,
  _changeChildren: _changeChildren,
  _changeParent: _changeParent,

  getItemById: getItemById,
  getItemByIds: getItemByIds,

  getItems: getItems,
  getIds: getIds,
  getNames: getNames,
  getItem: getItem,
  getId: getId,
  getName: getName
};

/* harmony default export */ __webpack_exports__["a"] = (fn);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isPlainObject__ = __webpack_require__(2);



var hasOwnProperty = Object.prototype.hasOwnProperty;

function clone(src) {
  var target = void 0;
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isArray__["a" /* default */])(src)) {
    target = [];
    for (var i = 0; i < src.length; i++) {
      target[i] = src[i];
    }
    return target;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isPlainObject__["a" /* default */])(src)) {
    target = {};
    for (var key in src) {
      if (hasOwnProperty.call(src, key)) {
        target[key] = src[key];
      }
    }
    return target;
  }
  target = src;
  return target;
}

/* harmony default export */ __webpack_exports__["a"] = (clone);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isPlainObject__ = __webpack_require__(2);



var hasOwnProperty = Object.prototype.hasOwnProperty;

function cloneDeep(src) {
  var target = void 0;
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isArray__["a" /* default */])(src)) {
    target = [];
    for (var index = 0; index < src.length; index++) {
      if (target[index] !== src[index] && target !== src[index]) {
        target[index] = cloneDeep(src[index]);
      }
    }
    return target;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isPlainObject__["a" /* default */])(src)) {
    target = {};
    for (var key in src) {
      if (hasOwnProperty.call(src, key) && target[key] !== src[key] && target !== src[key]) {
        target[key] = cloneDeep(src[key]);
      }
    }
    return target;
  }
  target = src;
  return target;
}

/* unused harmony default export */ var _unused_webpack_default_export = (cloneDeep);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getTag__ = __webpack_require__(0);


function isArguments(value) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getTag__["a" /* default */])(value) === '[object Arguments]';
}

/* harmony default export */ __webpack_exports__["a"] = (isArguments);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isUndefined__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isNull__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isString__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isFunction__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isArguments__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isPrototype__ = __webpack_require__(40);









var hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(value) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isUndefined__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isNull__["a" /* default */])(value)) {
    return true;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__isFunction__["a" /* default */])(value)) {
    return false;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__isArray__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isString__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__isArguments__["a" /* default */])(value)) {
    return !value.length;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__isPrototype__["a" /* default */])(value)) {
    return !__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

/* harmony default export */ __webpack_exports__["a"] = (isEmpty);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getTag__ = __webpack_require__(0);


function isFunction(value) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getTag__["a" /* default */])(value) === '[object Function]';
}

/* harmony default export */ __webpack_exports__["a"] = (isFunction);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getTag__ = __webpack_require__(0);


function isNull(value) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getTag__["a" /* default */])(value) === '[object Null]';
}

/* harmony default export */ __webpack_exports__["a"] = (isNull);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var objectProto = Object.prototype;

function isPrototype(value) {
  var Ctor = value && value.constructor;
  var proto = typeof Ctor === 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

/* harmony default export */ __webpack_exports__["a"] = (isPrototype);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(42), __esModule: true };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67);
module.exports = __webpack_require__(5).Object.keys;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(23)
  , toLength  = __webpack_require__(63)
  , toIndex   = __webpack_require__(62);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(43);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19)
  , document = __webpack_require__(18).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(18)
  , core      = __webpack_require__(5)
  , ctx       = __webpack_require__(47)
  , hide      = __webpack_require__(52)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(55)
  , createDesc = __webpack_require__(59);
module.exports = __webpack_require__(16) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(16) && !__webpack_require__(17)(function(){
  return Object.defineProperty(__webpack_require__(48)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(46);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(44)
  , IE8_DOM_DEFINE = __webpack_require__(53)
  , toPrimitive    = __webpack_require__(65)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(51)
  , toIObject    = __webpack_require__(23)
  , arrayIndexOf = __webpack_require__(45)(false)
  , IE_PROTO     = __webpack_require__(60)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(56)
  , enumBugKeys = __webpack_require__(49);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(50)
  , core    = __webpack_require__(5)
  , fails   = __webpack_require__(17);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(61)('keys')
  , uid    = __webpack_require__(66);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(18)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(21);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(19);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(64)
  , $keys    = __webpack_require__(57);

__webpack_require__(58)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "\n.x-tree-wrapper[data-v-2c0e2680] {\n  position: relative;\n  cursor: pointer;\n  font-size: 1em;\n  line-height: 1.8em;\n  white-space: nowrap;\n}\n", ""]);

// exports


/***/ }),
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "\n.x-tree-item[data-v-b33c931a] {\n  position: relative;\n  font-size: 14px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.x-tree-item-self[data-v-b33c931a] {\n  position: relative;\n  padding: 0 2em 0 0.5em;\n}\n.x-tree-item-self[data-v-b33c931a]:hover {\n  background: #E9EBEE;\n}\n.iconfont[data-v-b33c931a] {\n  font-size: 14px;\n  width: 14px;\n  color: #999;\n}\n.icon-blank[data-v-b33c931a] {\n  opacity: 0;\n}\n.x-tree-item-expand[data-v-b33c931a] {\n}\n.x-tree-item-checkbox[data-v-b33c931a] {\n}\n.x-tree-item-text[data-v-b33c931a] {\n  display: inline-block;\n  vertical-align: bottom;\n  padding: 0 1em 0 0em;\n  width: calc(100% - 40px);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.x-tree-item-text-tip[data-v-b33c931a] {\n  position: absolute;\n  top: -20px;\n  left: 0px;\n  display: inline-block;\n  padding: 0 15px;\n  border: 1px solid #fff;\n  background: #fff;\n}\n.x-tree-item-menu-dropdown[data-v-b33c931a] {\n  display: none;\n  position: absolute;\n  top: 0.36em;\n  right: 0.27em;\n}\n.x-tree-item-self:hover .x-tree-item-menu-dropdown[data-v-b33c931a] {\n  display: block;\n}\n.x-tree-item-menu[data-v-b33c931a] {\n  display: block;\n  position: absolute;\n  right: 0;\n  width: 120px;\n  z-index: 99;\n  box-shadow: 0 1px 4px #999;\n  background: #fff;\n}\n.x-tree-item-menu-item[data-v-b33c931a] {\n  display: block;\n  padding: 2px 35px 2px 15px;\n}\n.x-tree-item-menu-item[data-v-b33c931a]:hover {\n  background: #E9EBEE;\n}\n.x-tree-item-children[data-v-b33c931a] {\n  /*padding-left: 1.3em;*/\n}\n.editable_false[data-v-b33c931a] {\n  padding-right: 0;\n}\n.x-tree-node>.editable_false>.x-tree-item-text[data-v-b33c931a] {\n  padding: 0;\n  width: calc(100% - 37px);\n}\n.x-tree-leaf>.editable_false>.x-tree-item-text[data-v-b33c931a] {\n  padding: 0;\n  width: calc(100% - 20px);\n}\n", ""]);

// exports


/***/ }),
/* 72 */,
/* 73 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(81)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(77),
  /* scopeId */
  "data-v-b33c931a",
  /* cssModules */
  null
)
Component.options.__file = "D:\\jcc\\tree-vue\\src\\tree-xbcx\\xTreeItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] xTreeItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b33c931a", Component.options)
  } else {
    hotAPI.reload("data-v-b33c931a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-tree-wrapper"
  }, [_c('x-tree-item', {
    staticClass: "x-tree-root",
    attrs: {
      "model": _vm.dataTree,
      "tree": _vm.dataTree,
      "options": _vm.opts,
      "fn": _vm.fnfn
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2c0e2680", module.exports)
  }
}

/***/ }),
/* 76 */,
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-tree-item",
    class: _vm.itemClass
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.selfShow),
      expression: "selfShow"
    }],
    staticClass: "x-tree-item-self",
    class: _vm.selfClass,
    style: (_vm.selfStyle),
    on: {
      "mouseleave": _vm.menuHideFn
    }
  }, [_c('i', {
    staticClass: "x-tree-item-expand",
    class: [_vm.iconfont, _vm.expandClass],
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.expandFn($event)
      }
    }
  }), _vm._v(" "), _c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.checkboxShow),
      expression: "checkboxShow"
    }],
    staticClass: "x-tree-item-checkbox",
    class: [_vm.iconfont, _vm.checkboxClass],
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.checkFn($event)
      }
    }
  }), _vm._v(" "), _c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.iconShow),
      expression: "iconShow"
    }],
    staticClass: "x-tree-item-icon",
    class: [_vm.iconfont, _vm.iconClass]
  }), _vm._v(" "), _c('span', {
    staticClass: "x-tree-item-text",
    attrs: {
      "title": _vm.model.name
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.nameFn($event)
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.model.name) + "\n    ")]), _vm._v(" "), (_vm.dropdownIf) ? _c('i', {
    staticClass: "x-tree-item-menu-dropdown",
    class: [_vm.iconfont, _vm.dropdownClass],
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.menuShowFn($event)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.menuIf) ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.menuShow),
      expression: "menuShow"
    }],
    staticClass: "x-tree-item-menu"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.defaultMenuShow),
      expression: "defaultMenuShow"
    }]
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.model.is_edit),
      expression: "model.is_edit"
    }],
    staticClass: "x-tree-item-menu-item",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.editFn($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.options.editorText.edit))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.model.is_delete),
      expression: "model.is_delete"
    }],
    staticClass: "x-tree-item-menu-item",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.deleteFn($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.options.editorText.delete))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.model.is_add),
      expression: "model.is_add"
    }],
    staticClass: "x-tree-item-menu-item",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.addChildFn($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.options.editorText.add))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.sortable.upAble),
      expression: "sortable.upAble"
    }],
    staticClass: "x-tree-item-menu-item",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.sortFn(true)
      }
    }
  }, [_vm._v(_vm._s(_vm.options.editorText.up))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.sortable.downAble),
      expression: "sortable.downAble"
    }],
    staticClass: "x-tree-item-menu-item",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.sortFn(false)
      }
    }
  }, [_vm._v(_vm._s(_vm.options.editorText.down))])]), _vm._v(" "), _c('div', _vm._l((_vm.model.menu), function(item, index) {
    return _c('span', {
      staticClass: "x-tree-item-menu-item",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.menuFn(item.callback)
        }
      }
    }, [_vm._v("\n          " + _vm._s(item.text) + "\n        ")])
  }))]) : _vm._e(), _vm._v(" "), (_vm.additionIf) ? _c('div', {
    staticClass: "x-tree-item-addition x-tree-item-custom",
    style: (_vm.additionStyle),
    domProps: {
      "innerHTML": _vm._s(_vm.model.addition)
    }
  }) : _vm._e()]), _vm._v(" "), (_vm.childrenIf) ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.childrenShow),
      expression: "childrenShow"
    }],
    staticClass: "x-tree-item-children",
    style: (_vm.childrenStyle)
  }, _vm._l((_vm.model.children), function(child) {
    return _c('x-tree-item', {
      attrs: {
        "model": child,
        "tree": _vm.tree,
        "options": _vm.options,
        "fn": _vm.fn
      }
    })
  })) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b33c931a", module.exports)
  }
}

/***/ }),
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("5e67b96a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2c0e2680\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./xTree.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2c0e2680\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./xTree.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 80 */,
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("1d6dc580", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b33c931a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./xTreeItem.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b33c931a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./xTreeItem.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })
/******/ ]);