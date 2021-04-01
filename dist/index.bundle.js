/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n  font-family: 'Shadows Into Light';\n}\n\n.hello {\n  font-size: 33px;\n  font-family: 'Shadows Into Light', cursive;\n  text-transform: uppercase;\n}\n\na {\n  color: teal;\n  text-decoration: none;\n  font-size: 2em;\n}\n\n#container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.vid {\n  position: absolute;\n}\n\n\n#video {\n  visibility: hidden;\n}\n\n#piano {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  justify-content: center;\n  opacity: 0.7;\n  z-index: 1;\n  margin-left: 10px;\n}\n\n.octave {\n  display: flex;\n}\n\n.tone, .semitone {\n  width: 35px;\n  box-sizing: border-box;\n}\n\n.tone {\n  height: 25px;\n  background-color: white;\n  /* border: 0.1px solid #CCC; */\n  margin: 1px;\n}\n\n.semitone {\n  height: 100px;\n  background-color: black;\n  border: 1px solid #FFF;\n}\n\n.key-active {\n  background-color: indianred;\n}\n\n.semitone:nth-child(3) {\n  margin-left: 26px;\n}\n\n.semitone:nth-child(1) {\n  margin-left: 13px;\n}\n\n.animate-key {\n  animation-name: animateScale;\n  animation-duration: 0.5s;\n  animation-iteration-count: 2;\n  animation-direction: alternate;  \n}\n\n@keyframes animateScale {\n  from  {transform: scale(1)}\n  to  {transform: scale(1.5)}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,YAAY;EACZ,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,0CAA0C;EAC1C,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;;AAGA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;EACZ,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,4BAA4B;EAC5B,wBAAwB;EACxB,4BAA4B;EAC5B,8BAA8B;AAChC;;AAEA;EACE,OAAO,mBAAmB;EAC1B,KAAK,qBAAqB;AAC5B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');\n\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n  font-family: 'Shadows Into Light';\n}\n\n.hello {\n  font-size: 33px;\n  font-family: 'Shadows Into Light', cursive;\n  text-transform: uppercase;\n}\n\na {\n  color: teal;\n  text-decoration: none;\n  font-size: 2em;\n}\n\n#container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.vid {\n  position: absolute;\n}\n\n\n#video {\n  visibility: hidden;\n}\n\n#piano {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  justify-content: center;\n  opacity: 0.7;\n  z-index: 1;\n  margin-left: 10px;\n}\n\n.octave {\n  display: flex;\n}\n\n.tone, .semitone {\n  width: 35px;\n  box-sizing: border-box;\n}\n\n.tone {\n  height: 25px;\n  background-color: white;\n  /* border: 0.1px solid #CCC; */\n  margin: 1px;\n}\n\n.semitone {\n  height: 100px;\n  background-color: black;\n  border: 1px solid #FFF;\n}\n\n.key-active {\n  background-color: indianred;\n}\n\n.semitone:nth-child(3) {\n  margin-left: 26px;\n}\n\n.semitone:nth-child(1) {\n  margin-left: 13px;\n}\n\n.animate-key {\n  animation-name: animateScale;\n  animation-duration: 0.5s;\n  animation-iteration-count: 2;\n  animation-direction: alternate;  \n}\n\n@keyframes animateScale {\n  from  {transform: scale(1)}\n  to  {transform: scale(1.5)}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawHand": () => (/* binding */ drawHand),
/* harmony export */   "checkTouch": () => (/* binding */ checkTouch),
/* harmony export */   "drawOctaves": () => (/* binding */ drawOctaves)
/* harmony export */ });
// Points for fingers
// const points = [4, 8, 12, 16, 20];
const points = [8];
let grid = [];
const origins = {};
const noteToPlay = {};
const notes = ['C', 'D', 'E', 'G', 'A'];
// const notes = ['B#','A', 'G', 'F', 'D'];
// const notes = ['B#', 'D', 'F', 'G', 'A'];
const moveThreshold = 10;
const allPoints = {};
const startingOctave = 3;
const howManyOctaves = 2;
const howManyLines = 16;
const loopTime = '1m';
const scale = [];
const players = [];
const noteOffset = (Tone.Time('1m') / howManyLines) * 6; 
let currentPlayer = 0;
const highVolume = -10;
const lowVolume = -20;
  
const sampler = new Tone.Sampler({
  urls: {
      A0: "A0.mp3",
      C1: "C1.mp3",
      "D#1": "Ds1.mp3",
      "F#1": "Fs1.mp3",
      A1: "A1.mp3",
      C2: "C2.mp3",
      "D#2": "Ds2.mp3",
      "F#2": "Fs2.mp3",
      A2: "A2.mp3",
      C3: "C3.mp3",
      "D#3": "Ds3.mp3",
      "F#3": "Fs3.mp3",
      A3: "A3.mp3",
      C4: "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
      C5: "C5.mp3",
      "D#5": "Ds5.mp3",
      "F#5": "Fs5.mp3",
      A5: "A5.mp3",
      C6: "C6.mp3",
      "D#6": "Ds6.mp3",
      "F#6": "Fs6.mp3",
      A6: "A6.mp3",
      C7: "C7.mp3",
      "D#7": "Ds7.mp3",
      "F#7": "Fs7.mp3",
      A7: "A7.mp3",
      C8: "C8.mp3"
  },
  release: 1,
  baseUrl: "https://tonejs.github.io/audio/salamander/"
}).toDestination();

const sampler2 = new Tone.Sampler({
	urls: {
		A1: "A1.mp3",
		A2: "A2.mp3",
	},
	baseUrl: "https://tonejs.github.io/audio/casio/",
}).toDestination();

const synth1 = new Tone.Synth().toDestination();
const synth2 = new Tone.MembraneSynth().toDestination();
const synth3 = new Tone.MonoSynth({
	oscillator: {
		type: "square"
	},
	envelope: {
		attack: 0.1
	}
}).toDestination();

const filter = new Tone.Filter({ frequency: 1100, rolloff: -12 }).toDestination();
const synth4 = new Tone.Synth({
  oscillator: {
    type: 'sine',
  },
  envelope: {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.3,
    release: 1,
  },
}).connect(filter);

const synth5 = new Tone.Synth({
  oscillator: {
    type: 'sawtooth',
  },
  envelope: {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.3,
    release: 2,
  },
}).connect(filter);

// Drawing function
const drawHand = (results, ctx, ctxVideo, w, h) => {
  // Loop through each prediction
  ctx.save();
  ctx.clearRect(0, 0, w, h);
  ctxVideo.clearRect(0, 0, w, h);
  ctxVideo.drawImage(results.image, 0, 0, w, h);
  const rH = results?.rightHandLandmarks || [];
  const lH = results?.leftHandLandmarks || [];
  const hands = [rH];
  hands.forEach((hand, i) => {
    // Loop through fingers
    if (hand.length) {
      points.forEach(point => {
        // if (!allPoints[`${i}_${point}`]) {
        allPoints[`${i}_${point}`] = {};
        // }
        const prevPoint = allPoints[`${i}_${point}`];
        let currentPoint = { ...prevPoint };
        const x = hand[point].x * w;
        const y = hand[point].y * h;
        const r = (Math.abs(hand[point].z * w))/13;
        // const r = 7;
        // if (x > prevPoint.x + moveThreshold || x < prevPoint.x - moveThreshold ||
        //     y > prevPoint.y + moveThreshold || y < prevPoint.y - moveThreshold || prevPoint === {}) { 
          
        //   currentPoint = { x, y, r };
        // }
        ctx.beginPath();
        // ctx.arc(currentPoint.x, currentPoint.y, currentPoint.r, 0, 2 * Math.PI);
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = r > 7 ? 'red' : 'gold';
        if (r > 7) {
          allPoints[`${i}_${point}`] = { x, y, r };
        }
        ctx.fill();
      });
    }
  });
  ctx.restore();
  if (Object.values(allPoints).length) {
    checkTouch();
  }
};

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

const checkTouch = () =>  {
  grid.forEach(elem => {
    const { id } = elem;
    const bBox = elem.getBoundingClientRect();
    let touched = false;
    Object.values(allPoints).forEach(p => {
      if (p.x > bBox.x - origins.x && p.x < bBox.x - origins.x + bBox.width &&
        p.y > bBox.y - origins.y && p.y < bBox.y - origins.y + bBox.height) {
        touched = true;
      }
    })

    if (touched) {
      if (!noteToPlay[id].active) {
        noteToPlay[id].active = true;
        elem.classList.toggle('key-active');
        scheduleNote(elem);
      }
    } else {
      noteToPlay[id].active = false;
    }
  });
}

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

const drawOctaves = (originX, originY) => {
  createScale();
  origins.x = originX;
  origins.y = originY;
  const piano = document.getElementById('piano');
  for (let y=0; y < howManyLines; y++) {
    const octave = document.createElement('div');
    octave.classList.add('octave');
    piano.appendChild(octave);

    for (let x=0; x < scale.length; x++) {
      const toneDiv = document.createElement('div');
      const currentNote = scale[x];
      toneDiv.id = `${currentNote}-${y}`;
      toneDiv.setAttribute('x', x);
      toneDiv.setAttribute('y', y);
      toneDiv.setAttribute('note', currentNote);

      toneDiv.addEventListener('click', () => {
        toneDiv.classList.toggle('key-active');
        scheduleNote(toneDiv);
      });

      toneDiv.classList.add('tone');
      octave.appendChild(toneDiv);
      
      grid.push(toneDiv);
      noteToPlay[toneDiv.id] = { currentNote };
    }
  }
  playSequence();
  initializeTone();
}

const createScale = () => {
  for (let i=0; i < howManyOctaves; i++) {
    for (let j=0; j < notes.length; j++) {
      scale.push(`${ notes[j] }${ i + startingOctave }`);
    }
  }
}

const initializeTone = () => {
  Tone.Offline(() => {
    for (let i = 0; i < scale.length; i++) {
      synth5.triggerAttackRelease(scale[i], Tone.Time('1m') / howManyLines, i * noteOffset);
    };
  }, noteOffset * scale.length).then(buffer => {
    for (let i = 0; i < scale.length; i++) {
      Tone.setContext(Tone.context);
      const player = new Tone.Player(buffer).toDestination();
      players.push(player);
    }
  });
}

const scheduleNote = elem => {
  const { id } = elem;
  const x = parseInt(elem.getAttribute('x'));
  const y = parseInt(elem.getAttribute('y'));
  console.log(x, y, elem, id, noteToPlay[id]);
  if (elem.classList.contains('key-active')) {
    const scheduleId = Tone.Transport.schedule(time => {
      // const volume = ((scale.length - y) / scale.length) * (highVolume - lowVolume) + lowVolume;

      // players[currentPlayer].volume.setValueAtTime(volume, time);
      players[currentPlayer].start();
      console.log(x, y, players[currentPlayer], time, noteOffset);
      currentPlayer = (currentPlayer + 1) % players.length;

      elem.classList.add('animate-key');
      setTimeout(() => elem.classList.remove('animate-key'), 1000);
    }, y * (Tone.Time('1m') / howManyLines));
    noteToPlay[id].scheduleId = scheduleId;
  } else {
    Tone.Transport.clear(noteToPlay[id].scheduleId);
  }
}

const playSequence = () => {
  Tone.Transport.loopEnd = loopTime; // loop at one measure
  Tone.Transport.loop = true;
  Tone.Transport.start();
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");




const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const canvasVideo = document.getElementById('canvasVideo');
const piano = document.getElementById('piano');
const ctx = canvas.getContext('2d');
const ctxVideo = canvasVideo.getContext('2d');
let canvasWidth;
let canvasHeight;

function startVideo() {
  navigator.getUserMedia(
    { 
      audio: false,
      video: {
        width: { min: 780, ideal: 780, max: 1024 },
        height: { min: 438, ideal: 438, max: 576 }
      }
    },
    stream => video.srcObject = stream,
    err => console.error(err)
  );
  const playPromise = document.querySelector('video').play();
  if (playPromise) {
    playPromise.then(response => {
      const videoRatio = video.offsetWidth / video.offsetHeight;
      canvas.width = canvasVideo.width = 780;
      canvas.height = canvasVideo.height = canvas.width / videoRatio;
      canvasWidth = canvas.width;
      canvasHeight = canvas.height;
      detect();
      piano.style.width = `${ canvasWidth }px`;
      piano.style.height = `${ canvasHeight }px`;

      const originX = piano.getBoundingClientRect().x;
      const originY = piano.getBoundingClientRect().y;

      (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawOctaves)(originX, originY);

    })
    .catch(error => { console.error(error) });
  }
}

startVideo();

function onResults(results) {
  (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.drawHand)(results, ctx, ctxVideo, canvasWidth, canvasHeight);
}

const holistic = new Holistic({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.1/${file}`;
}});
holistic.setOptions({
  selfieMode: true,
  upperBodyOnly: true,
  smoothLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
holistic.onResults(onResults);

const detect = async () => {
  await holistic.send({ image: video });
  requestAnimationFrame(detect);
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW5kLXRvLXNvdW5kLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9oYW5kLXRvLXNvdW5kLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9oYW5kLXRvLXNvdW5kLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vaGFuZC10by1zb3VuZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9oYW5kLXRvLXNvdW5kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2hhbmQtdG8tc291bmQvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL2hhbmQtdG8tc291bmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGFuZC10by1zb3VuZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9oYW5kLXRvLXNvdW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oYW5kLXRvLXNvdW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGFuZC10by1zb3VuZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hhbmQtdG8tc291bmQvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRixnSUFBZ0k7QUFDaEk7QUFDQSxnREFBZ0QsY0FBYyxlQUFlLGlC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OztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOcUI7O0FBRStCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrQ0FBa0M7QUFDbEQsaUJBQWlCO0FBQ2pCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDLDhCQUE4QixlQUFlOztBQUU3QztBQUNBOztBQUVBLE1BQU0sdURBQVc7O0FBRWpCLEtBQUs7QUFDTCxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFLG9EQUFRO0FBQ1Y7O0FBRUEsK0JBQStCO0FBQy9CLGlFQUFpRSxLQUFLO0FBQ3RFLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQSx1QkFBdUIsZUFBZTtBQUN0QztBQUNBLEUiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TaGFkb3dzK0ludG8rTGlnaHQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiAnU2hhZG93cyBJbnRvIExpZ2h0JztcXG59XFxuXFxuLmhlbGxvIHtcXG4gIGZvbnQtc2l6ZTogMzNweDtcXG4gIGZvbnQtZmFtaWx5OiAnU2hhZG93cyBJbnRvIExpZ2h0JywgY3Vyc2l2ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHRlYWw7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udmlkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuXFxuI3ZpZGVvIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI3BpYW5vIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvcGFjaXR5OiAwLjc7XFxuICB6LWluZGV4OiAxO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5vY3RhdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvbmUsIC5zZW1pdG9uZSB7XFxuICB3aWR0aDogMzVweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi50b25lIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLyogYm9yZGVyOiAwLjFweCBzb2xpZCAjQ0NDOyAqL1xcbiAgbWFyZ2luOiAxcHg7XFxufVxcblxcbi5zZW1pdG9uZSB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xcbn1cXG5cXG4ua2V5LWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7XFxufVxcblxcbi5zZW1pdG9uZTpudGgtY2hpbGQoMykge1xcbiAgbWFyZ2luLWxlZnQ6IDI2cHg7XFxufVxcblxcbi5zZW1pdG9uZTpudGgtY2hpbGQoMSkge1xcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XFxufVxcblxcbi5hbmltYXRlLWtleSB7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZVNjYWxlO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMjtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTsgIFxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGVTY2FsZSB7XFxuICBmcm9tICB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cXG4gIHRvICB7dHJhbnNmb3JtOiBzY2FsZSgxLjUpfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQ0FBMEM7RUFDMUMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxPQUFPLG1CQUFtQjtFQUMxQixLQUFLLHFCQUFxQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TaGFkb3dzK0ludG8rTGlnaHQmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiAnU2hhZG93cyBJbnRvIExpZ2h0JztcXG59XFxuXFxuLmhlbGxvIHtcXG4gIGZvbnQtc2l6ZTogMzNweDtcXG4gIGZvbnQtZmFtaWx5OiAnU2hhZG93cyBJbnRvIExpZ2h0JywgY3Vyc2l2ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHRlYWw7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udmlkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuXFxuI3ZpZGVvIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI3BpYW5vIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvcGFjaXR5OiAwLjc7XFxuICB6LWluZGV4OiAxO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5vY3RhdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvbmUsIC5zZW1pdG9uZSB7XFxuICB3aWR0aDogMzVweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi50b25lIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLyogYm9yZGVyOiAwLjFweCBzb2xpZCAjQ0NDOyAqL1xcbiAgbWFyZ2luOiAxcHg7XFxufVxcblxcbi5zZW1pdG9uZSB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xcbn1cXG5cXG4ua2V5LWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7XFxufVxcblxcbi5zZW1pdG9uZTpudGgtY2hpbGQoMykge1xcbiAgbWFyZ2luLWxlZnQ6IDI2cHg7XFxufVxcblxcbi5zZW1pdG9uZTpudGgtY2hpbGQoMSkge1xcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XFxufVxcblxcbi5hbmltYXRlLWtleSB7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZVNjYWxlO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMjtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTsgIFxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGVTY2FsZSB7XFxuICBmcm9tICB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cXG4gIHRvICB7dHJhbnNmb3JtOiBzY2FsZSgxLjUpfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFBvaW50cyBmb3IgZmluZ2Vyc1xuLy8gY29uc3QgcG9pbnRzID0gWzQsIDgsIDEyLCAxNiwgMjBdO1xuY29uc3QgcG9pbnRzID0gWzhdO1xubGV0IGdyaWQgPSBbXTtcbmNvbnN0IG9yaWdpbnMgPSB7fTtcbmNvbnN0IG5vdGVUb1BsYXkgPSB7fTtcbmNvbnN0IG5vdGVzID0gWydDJywgJ0QnLCAnRScsICdHJywgJ0EnXTtcbi8vIGNvbnN0IG5vdGVzID0gWydCIycsJ0EnLCAnRycsICdGJywgJ0QnXTtcbi8vIGNvbnN0IG5vdGVzID0gWydCIycsICdEJywgJ0YnLCAnRycsICdBJ107XG5jb25zdCBtb3ZlVGhyZXNob2xkID0gMTA7XG5jb25zdCBhbGxQb2ludHMgPSB7fTtcbmNvbnN0IHN0YXJ0aW5nT2N0YXZlID0gMztcbmNvbnN0IGhvd01hbnlPY3RhdmVzID0gMjtcbmNvbnN0IGhvd01hbnlMaW5lcyA9IDE2O1xuY29uc3QgbG9vcFRpbWUgPSAnMW0nO1xuY29uc3Qgc2NhbGUgPSBbXTtcbmNvbnN0IHBsYXllcnMgPSBbXTtcbmNvbnN0IG5vdGVPZmZzZXQgPSAoVG9uZS5UaW1lKCcxbScpIC8gaG93TWFueUxpbmVzKSAqIDY7IFxubGV0IGN1cnJlbnRQbGF5ZXIgPSAwO1xuY29uc3QgaGlnaFZvbHVtZSA9IC0xMDtcbmNvbnN0IGxvd1ZvbHVtZSA9IC0yMDtcbiAgXG5jb25zdCBzYW1wbGVyID0gbmV3IFRvbmUuU2FtcGxlcih7XG4gIHVybHM6IHtcbiAgICAgIEEwOiBcIkEwLm1wM1wiLFxuICAgICAgQzE6IFwiQzEubXAzXCIsXG4gICAgICBcIkQjMVwiOiBcIkRzMS5tcDNcIixcbiAgICAgIFwiRiMxXCI6IFwiRnMxLm1wM1wiLFxuICAgICAgQTE6IFwiQTEubXAzXCIsXG4gICAgICBDMjogXCJDMi5tcDNcIixcbiAgICAgIFwiRCMyXCI6IFwiRHMyLm1wM1wiLFxuICAgICAgXCJGIzJcIjogXCJGczIubXAzXCIsXG4gICAgICBBMjogXCJBMi5tcDNcIixcbiAgICAgIEMzOiBcIkMzLm1wM1wiLFxuICAgICAgXCJEIzNcIjogXCJEczMubXAzXCIsXG4gICAgICBcIkYjM1wiOiBcIkZzMy5tcDNcIixcbiAgICAgIEEzOiBcIkEzLm1wM1wiLFxuICAgICAgQzQ6IFwiQzQubXAzXCIsXG4gICAgICBcIkQjNFwiOiBcIkRzNC5tcDNcIixcbiAgICAgIFwiRiM0XCI6IFwiRnM0Lm1wM1wiLFxuICAgICAgQTQ6IFwiQTQubXAzXCIsXG4gICAgICBDNTogXCJDNS5tcDNcIixcbiAgICAgIFwiRCM1XCI6IFwiRHM1Lm1wM1wiLFxuICAgICAgXCJGIzVcIjogXCJGczUubXAzXCIsXG4gICAgICBBNTogXCJBNS5tcDNcIixcbiAgICAgIEM2OiBcIkM2Lm1wM1wiLFxuICAgICAgXCJEIzZcIjogXCJEczYubXAzXCIsXG4gICAgICBcIkYjNlwiOiBcIkZzNi5tcDNcIixcbiAgICAgIEE2OiBcIkE2Lm1wM1wiLFxuICAgICAgQzc6IFwiQzcubXAzXCIsXG4gICAgICBcIkQjN1wiOiBcIkRzNy5tcDNcIixcbiAgICAgIFwiRiM3XCI6IFwiRnM3Lm1wM1wiLFxuICAgICAgQTc6IFwiQTcubXAzXCIsXG4gICAgICBDODogXCJDOC5tcDNcIlxuICB9LFxuICByZWxlYXNlOiAxLFxuICBiYXNlVXJsOiBcImh0dHBzOi8vdG9uZWpzLmdpdGh1Yi5pby9hdWRpby9zYWxhbWFuZGVyL1wiXG59KS50b0Rlc3RpbmF0aW9uKCk7XG5cbmNvbnN0IHNhbXBsZXIyID0gbmV3IFRvbmUuU2FtcGxlcih7XG5cdHVybHM6IHtcblx0XHRBMTogXCJBMS5tcDNcIixcblx0XHRBMjogXCJBMi5tcDNcIixcblx0fSxcblx0YmFzZVVybDogXCJodHRwczovL3RvbmVqcy5naXRodWIuaW8vYXVkaW8vY2FzaW8vXCIsXG59KS50b0Rlc3RpbmF0aW9uKCk7XG5cbmNvbnN0IHN5bnRoMSA9IG5ldyBUb25lLlN5bnRoKCkudG9EZXN0aW5hdGlvbigpO1xuY29uc3Qgc3ludGgyID0gbmV3IFRvbmUuTWVtYnJhbmVTeW50aCgpLnRvRGVzdGluYXRpb24oKTtcbmNvbnN0IHN5bnRoMyA9IG5ldyBUb25lLk1vbm9TeW50aCh7XG5cdG9zY2lsbGF0b3I6IHtcblx0XHR0eXBlOiBcInNxdWFyZVwiXG5cdH0sXG5cdGVudmVsb3BlOiB7XG5cdFx0YXR0YWNrOiAwLjFcblx0fVxufSkudG9EZXN0aW5hdGlvbigpO1xuXG5jb25zdCBmaWx0ZXIgPSBuZXcgVG9uZS5GaWx0ZXIoeyBmcmVxdWVuY3k6IDExMDAsIHJvbGxvZmY6IC0xMiB9KS50b0Rlc3RpbmF0aW9uKCk7XG5jb25zdCBzeW50aDQgPSBuZXcgVG9uZS5TeW50aCh7XG4gIG9zY2lsbGF0b3I6IHtcbiAgICB0eXBlOiAnc2luZScsXG4gIH0sXG4gIGVudmVsb3BlOiB7XG4gICAgYXR0YWNrOiAwLjAwNSxcbiAgICBkZWNheTogMC4xLFxuICAgIHN1c3RhaW46IDAuMyxcbiAgICByZWxlYXNlOiAxLFxuICB9LFxufSkuY29ubmVjdChmaWx0ZXIpO1xuXG5jb25zdCBzeW50aDUgPSBuZXcgVG9uZS5TeW50aCh7XG4gIG9zY2lsbGF0b3I6IHtcbiAgICB0eXBlOiAnc2F3dG9vdGgnLFxuICB9LFxuICBlbnZlbG9wZToge1xuICAgIGF0dGFjazogMC4wMDUsXG4gICAgZGVjYXk6IDAuMSxcbiAgICBzdXN0YWluOiAwLjMsXG4gICAgcmVsZWFzZTogMixcbiAgfSxcbn0pLmNvbm5lY3QoZmlsdGVyKTtcblxuLy8gRHJhd2luZyBmdW5jdGlvblxuZXhwb3J0IGNvbnN0IGRyYXdIYW5kID0gKHJlc3VsdHMsIGN0eCwgY3R4VmlkZW8sIHcsIGgpID0+IHtcbiAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggcHJlZGljdGlvblxuICBjdHguc2F2ZSgpO1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuICBjdHhWaWRlby5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gIGN0eFZpZGVvLmRyYXdJbWFnZShyZXN1bHRzLmltYWdlLCAwLCAwLCB3LCBoKTtcbiAgY29uc3QgckggPSByZXN1bHRzPy5yaWdodEhhbmRMYW5kbWFya3MgfHwgW107XG4gIGNvbnN0IGxIID0gcmVzdWx0cz8ubGVmdEhhbmRMYW5kbWFya3MgfHwgW107XG4gIGNvbnN0IGhhbmRzID0gW3JIXTtcbiAgaGFuZHMuZm9yRWFjaCgoaGFuZCwgaSkgPT4ge1xuICAgIC8vIExvb3AgdGhyb3VnaCBmaW5nZXJzXG4gICAgaWYgKGhhbmQubGVuZ3RoKSB7XG4gICAgICBwb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgICAgIC8vIGlmICghYWxsUG9pbnRzW2Ake2l9XyR7cG9pbnR9YF0pIHtcbiAgICAgICAgYWxsUG9pbnRzW2Ake2l9XyR7cG9pbnR9YF0gPSB7fTtcbiAgICAgICAgLy8gfVxuICAgICAgICBjb25zdCBwcmV2UG9pbnQgPSBhbGxQb2ludHNbYCR7aX1fJHtwb2ludH1gXTtcbiAgICAgICAgbGV0IGN1cnJlbnRQb2ludCA9IHsgLi4ucHJldlBvaW50IH07XG4gICAgICAgIGNvbnN0IHggPSBoYW5kW3BvaW50XS54ICogdztcbiAgICAgICAgY29uc3QgeSA9IGhhbmRbcG9pbnRdLnkgKiBoO1xuICAgICAgICBjb25zdCByID0gKE1hdGguYWJzKGhhbmRbcG9pbnRdLnogKiB3KSkvMTM7XG4gICAgICAgIC8vIGNvbnN0IHIgPSA3O1xuICAgICAgICAvLyBpZiAoeCA+IHByZXZQb2ludC54ICsgbW92ZVRocmVzaG9sZCB8fCB4IDwgcHJldlBvaW50LnggLSBtb3ZlVGhyZXNob2xkIHx8XG4gICAgICAgIC8vICAgICB5ID4gcHJldlBvaW50LnkgKyBtb3ZlVGhyZXNob2xkIHx8IHkgPCBwcmV2UG9pbnQueSAtIG1vdmVUaHJlc2hvbGQgfHwgcHJldlBvaW50ID09PSB7fSkgeyBcbiAgICAgICAgICBcbiAgICAgICAgLy8gICBjdXJyZW50UG9pbnQgPSB7IHgsIHksIHIgfTtcbiAgICAgICAgLy8gfVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vIGN0eC5hcmMoY3VycmVudFBvaW50LngsIGN1cnJlbnRQb2ludC55LCBjdXJyZW50UG9pbnQuciwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHIgPiA3ID8gJ3JlZCcgOiAnZ29sZCc7XG4gICAgICAgIGlmIChyID4gNykge1xuICAgICAgICAgIGFsbFBvaW50c1tgJHtpfV8ke3BvaW50fWBdID0geyB4LCB5LCByIH07XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIGN0eC5yZXN0b3JlKCk7XG4gIGlmIChPYmplY3QudmFsdWVzKGFsbFBvaW50cykubGVuZ3RoKSB7XG4gICAgY2hlY2tUb3VjaCgpO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBjaGVja1RvdWNoID0gKCkgPT4gIHtcbiAgZ3JpZC5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IGVsZW07XG4gICAgY29uc3QgYkJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHRvdWNoZWQgPSBmYWxzZTtcbiAgICBPYmplY3QudmFsdWVzKGFsbFBvaW50cykuZm9yRWFjaChwID0+IHtcbiAgICAgIGlmIChwLnggPiBiQm94LnggLSBvcmlnaW5zLnggJiYgcC54IDwgYkJveC54IC0gb3JpZ2lucy54ICsgYkJveC53aWR0aCAmJlxuICAgICAgICBwLnkgPiBiQm94LnkgLSBvcmlnaW5zLnkgJiYgcC55IDwgYkJveC55IC0gb3JpZ2lucy55ICsgYkJveC5oZWlnaHQpIHtcbiAgICAgICAgdG91Y2hlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0b3VjaGVkKSB7XG4gICAgICBpZiAoIW5vdGVUb1BsYXlbaWRdLmFjdGl2ZSkge1xuICAgICAgICBub3RlVG9QbGF5W2lkXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2tleS1hY3RpdmUnKTtcbiAgICAgICAgc2NoZWR1bGVOb3RlKGVsZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBub3RlVG9QbGF5W2lkXS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBkcmF3T2N0YXZlcyA9IChvcmlnaW5YLCBvcmlnaW5ZKSA9PiB7XG4gIGNyZWF0ZVNjYWxlKCk7XG4gIG9yaWdpbnMueCA9IG9yaWdpblg7XG4gIG9yaWdpbnMueSA9IG9yaWdpblk7XG4gIGNvbnN0IHBpYW5vID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpYW5vJyk7XG4gIGZvciAobGV0IHk9MDsgeSA8IGhvd01hbnlMaW5lczsgeSsrKSB7XG4gICAgY29uc3Qgb2N0YXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb2N0YXZlLmNsYXNzTGlzdC5hZGQoJ29jdGF2ZScpO1xuICAgIHBpYW5vLmFwcGVuZENoaWxkKG9jdGF2ZSk7XG5cbiAgICBmb3IgKGxldCB4PTA7IHggPCBzY2FsZS5sZW5ndGg7IHgrKykge1xuICAgICAgY29uc3QgdG9uZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgY3VycmVudE5vdGUgPSBzY2FsZVt4XTtcbiAgICAgIHRvbmVEaXYuaWQgPSBgJHtjdXJyZW50Tm90ZX0tJHt5fWA7XG4gICAgICB0b25lRGl2LnNldEF0dHJpYnV0ZSgneCcsIHgpO1xuICAgICAgdG9uZURpdi5zZXRBdHRyaWJ1dGUoJ3knLCB5KTtcbiAgICAgIHRvbmVEaXYuc2V0QXR0cmlidXRlKCdub3RlJywgY3VycmVudE5vdGUpO1xuXG4gICAgICB0b25lRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b25lRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2tleS1hY3RpdmUnKTtcbiAgICAgICAgc2NoZWR1bGVOb3RlKHRvbmVEaXYpO1xuICAgICAgfSk7XG5cbiAgICAgIHRvbmVEaXYuY2xhc3NMaXN0LmFkZCgndG9uZScpO1xuICAgICAgb2N0YXZlLmFwcGVuZENoaWxkKHRvbmVEaXYpO1xuICAgICAgXG4gICAgICBncmlkLnB1c2godG9uZURpdik7XG4gICAgICBub3RlVG9QbGF5W3RvbmVEaXYuaWRdID0geyBjdXJyZW50Tm90ZSB9O1xuICAgIH1cbiAgfVxuICBwbGF5U2VxdWVuY2UoKTtcbiAgaW5pdGlhbGl6ZVRvbmUoKTtcbn1cblxuY29uc3QgY3JlYXRlU2NhbGUgPSAoKSA9PiB7XG4gIGZvciAobGV0IGk9MDsgaSA8IGhvd01hbnlPY3RhdmVzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqPTA7IGogPCBub3Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgc2NhbGUucHVzaChgJHsgbm90ZXNbal0gfSR7IGkgKyBzdGFydGluZ09jdGF2ZSB9YCk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGluaXRpYWxpemVUb25lID0gKCkgPT4ge1xuICBUb25lLk9mZmxpbmUoKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NhbGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN5bnRoNS50cmlnZ2VyQXR0YWNrUmVsZWFzZShzY2FsZVtpXSwgVG9uZS5UaW1lKCcxbScpIC8gaG93TWFueUxpbmVzLCBpICogbm90ZU9mZnNldCk7XG4gICAgfTtcbiAgfSwgbm90ZU9mZnNldCAqIHNjYWxlLmxlbmd0aCkudGhlbihidWZmZXIgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NhbGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIFRvbmUuc2V0Q29udGV4dChUb25lLmNvbnRleHQpO1xuICAgICAgY29uc3QgcGxheWVyID0gbmV3IFRvbmUuUGxheWVyKGJ1ZmZlcikudG9EZXN0aW5hdGlvbigpO1xuICAgICAgcGxheWVycy5wdXNoKHBsYXllcik7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3Qgc2NoZWR1bGVOb3RlID0gZWxlbSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGVsZW07XG4gIGNvbnN0IHggPSBwYXJzZUludChlbGVtLmdldEF0dHJpYnV0ZSgneCcpKTtcbiAgY29uc3QgeSA9IHBhcnNlSW50KGVsZW0uZ2V0QXR0cmlidXRlKCd5JykpO1xuICBjb25zb2xlLmxvZyh4LCB5LCBlbGVtLCBpZCwgbm90ZVRvUGxheVtpZF0pO1xuICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2tleS1hY3RpdmUnKSkge1xuICAgIGNvbnN0IHNjaGVkdWxlSWQgPSBUb25lLlRyYW5zcG9ydC5zY2hlZHVsZSh0aW1lID0+IHtcbiAgICAgIC8vIGNvbnN0IHZvbHVtZSA9ICgoc2NhbGUubGVuZ3RoIC0geSkgLyBzY2FsZS5sZW5ndGgpICogKGhpZ2hWb2x1bWUgLSBsb3dWb2x1bWUpICsgbG93Vm9sdW1lO1xuXG4gICAgICAvLyBwbGF5ZXJzW2N1cnJlbnRQbGF5ZXJdLnZvbHVtZS5zZXRWYWx1ZUF0VGltZSh2b2x1bWUsIHRpbWUpO1xuICAgICAgcGxheWVyc1tjdXJyZW50UGxheWVyXS5zdGFydCgpO1xuICAgICAgY29uc29sZS5sb2coeCwgeSwgcGxheWVyc1tjdXJyZW50UGxheWVyXSwgdGltZSwgbm90ZU9mZnNldCk7XG4gICAgICBjdXJyZW50UGxheWVyID0gKGN1cnJlbnRQbGF5ZXIgKyAxKSAlIHBsYXllcnMubGVuZ3RoO1xuXG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUta2V5Jyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1rZXknKSwgMTAwMCk7XG4gICAgfSwgeSAqIChUb25lLlRpbWUoJzFtJykgLyBob3dNYW55TGluZXMpKTtcbiAgICBub3RlVG9QbGF5W2lkXS5zY2hlZHVsZUlkID0gc2NoZWR1bGVJZDtcbiAgfSBlbHNlIHtcbiAgICBUb25lLlRyYW5zcG9ydC5jbGVhcihub3RlVG9QbGF5W2lkXS5zY2hlZHVsZUlkKTtcbiAgfVxufVxuXG5jb25zdCBwbGF5U2VxdWVuY2UgPSAoKSA9PiB7XG4gIFRvbmUuVHJhbnNwb3J0Lmxvb3BFbmQgPSBsb29wVGltZTsgLy8gbG9vcCBhdCBvbmUgbWVhc3VyZVxuICBUb25lLlRyYW5zcG9ydC5sb29wID0gdHJ1ZTtcbiAgVG9uZS5UcmFuc3BvcnQuc3RhcnQoKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgeyBkcmF3SGFuZCwgZHJhd09jdGF2ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8nKTtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbmNvbnN0IGNhbnZhc1ZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhc1ZpZGVvJyk7XG5jb25zdCBwaWFubyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWFubycpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBjdHhWaWRlbyA9IGNhbnZhc1ZpZGVvLmdldENvbnRleHQoJzJkJyk7XG5sZXQgY2FudmFzV2lkdGg7XG5sZXQgY2FudmFzSGVpZ2h0O1xuXG5mdW5jdGlvbiBzdGFydFZpZGVvKCkge1xuICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhKFxuICAgIHsgXG4gICAgICBhdWRpbzogZmFsc2UsXG4gICAgICB2aWRlbzoge1xuICAgICAgICB3aWR0aDogeyBtaW46IDc4MCwgaWRlYWw6IDc4MCwgbWF4OiAxMDI0IH0sXG4gICAgICAgIGhlaWdodDogeyBtaW46IDQzOCwgaWRlYWw6IDQzOCwgbWF4OiA1NzYgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc3RyZWFtID0+IHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbSxcbiAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpXG4gICk7XG4gIGNvbnN0IHBsYXlQcm9taXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndmlkZW8nKS5wbGF5KCk7XG4gIGlmIChwbGF5UHJvbWlzZSkge1xuICAgIHBsYXlQcm9taXNlLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgdmlkZW9SYXRpbyA9IHZpZGVvLm9mZnNldFdpZHRoIC8gdmlkZW8ub2Zmc2V0SGVpZ2h0O1xuICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzVmlkZW8ud2lkdGggPSA3ODA7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzVmlkZW8uaGVpZ2h0ID0gY2FudmFzLndpZHRoIC8gdmlkZW9SYXRpbztcbiAgICAgIGNhbnZhc1dpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgY2FudmFzSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgIGRldGVjdCgpO1xuICAgICAgcGlhbm8uc3R5bGUud2lkdGggPSBgJHsgY2FudmFzV2lkdGggfXB4YDtcbiAgICAgIHBpYW5vLnN0eWxlLmhlaWdodCA9IGAkeyBjYW52YXNIZWlnaHQgfXB4YDtcblxuICAgICAgY29uc3Qgb3JpZ2luWCA9IHBpYW5vLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLng7XG4gICAgICBjb25zdCBvcmlnaW5ZID0gcGlhbm8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcblxuICAgICAgZHJhd09jdGF2ZXMob3JpZ2luWCwgb3JpZ2luWSk7XG5cbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpIH0pO1xuICB9XG59XG5cbnN0YXJ0VmlkZW8oKTtcblxuZnVuY3Rpb24gb25SZXN1bHRzKHJlc3VsdHMpIHtcbiAgZHJhd0hhbmQocmVzdWx0cywgY3R4LCBjdHhWaWRlbywgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XG59XG5cbmNvbnN0IGhvbGlzdGljID0gbmV3IEhvbGlzdGljKHtsb2NhdGVGaWxlOiAoZmlsZSkgPT4ge1xuICByZXR1cm4gYGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQG1lZGlhcGlwZS9ob2xpc3RpY0AwLjEvJHtmaWxlfWA7XG59fSk7XG5ob2xpc3RpYy5zZXRPcHRpb25zKHtcbiAgc2VsZmllTW9kZTogdHJ1ZSxcbiAgdXBwZXJCb2R5T25seTogdHJ1ZSxcbiAgc21vb3RoTGFuZG1hcmtzOiB0cnVlLFxuICBtaW5EZXRlY3Rpb25Db25maWRlbmNlOiAwLjUsXG4gIG1pblRyYWNraW5nQ29uZmlkZW5jZTogMC41XG59KTtcbmhvbGlzdGljLm9uUmVzdWx0cyhvblJlc3VsdHMpO1xuXG5jb25zdCBkZXRlY3QgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGhvbGlzdGljLnNlbmQoeyBpbWFnZTogdmlkZW8gfSk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkZXRlY3QpO1xufTsiXSwic291cmNlUm9vdCI6IiJ9