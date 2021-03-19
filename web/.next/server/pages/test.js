module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/test/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/test/index.js":
/*!*****************************!*\
  !*** ./pages/test/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Test; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ap_cx_react_fullpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ap.cx/react-fullpage */ \"@ap.cx/react-fullpage\");\n/* harmony import */ var _ap_cx_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ap_cx_react_fullpage__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/dan/Documents/Coding/blog/web/pages/test/index.js\";\n\n\nfunction Test() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ap_cx_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ap_cx_react_fullpage__WEBPACK_IMPORTED_MODULE_2__[\"FullPageSections\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ap_cx_react_fullpage__WEBPACK_IMPORTED_MODULE_2__[\"FullpageSection\"], {\n        style: {\n          backgroundColor: \"lime\",\n          height: \"100vh\",\n          padding: \"1em\"\n        },\n        children: \"1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ap_cx_react_fullpage__WEBPACK_IMPORTED_MODULE_2__[\"FullpageSection\"], {\n        style: {\n          backgroundColor: \"coral\",\n          padding: \"1em\"\n        },\n        children: \"2\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ap_cx_react_fullpage__WEBPACK_IMPORTED_MODULE_2__[\"FullpageSection\"], {\n        style: {\n          backgroundColor: \"firebrick\",\n          padding: \"1em\"\n        },\n        children: \"3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0L2luZGV4LmpzP2UxMGIiXSwibmFtZXMiOlsiVGVzdCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS2UsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixzQkFDRSxxRUFBQyw0REFBRDtBQUFBLDJCQUNFLHFFQUFDLHNFQUFEO0FBQUEsOEJBQ0UscUVBQUMscUVBQUQ7QUFDRSxhQUFLLEVBQUU7QUFDTEMseUJBQWUsRUFBRSxNQURaO0FBRUxDLGdCQUFNLEVBQUUsT0FGSDtBQUdMQyxpQkFBTyxFQUFFO0FBSEosU0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUUscUVBQUMscUVBQUQ7QUFDRSxhQUFLLEVBQUU7QUFDTEYseUJBQWUsRUFBRSxPQURaO0FBRUxFLGlCQUFPLEVBQUU7QUFGSixTQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFrQkUscUVBQUMscUVBQUQ7QUFDRSxhQUFLLEVBQUU7QUFDTEYseUJBQWUsRUFBRSxXQURaO0FBRUxFLGlCQUFPLEVBQUU7QUFGSixTQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStCRCIsImZpbGUiOiIuL3BhZ2VzL3Rlc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRnVsbHBhZ2UsIHtcbiAgRnVsbFBhZ2VTZWN0aW9ucyxcbiAgRnVsbHBhZ2VTZWN0aW9uLFxufSBmcm9tIFwiQGFwLmN4L3JlYWN0LWZ1bGxwYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QoKSB7XG4gIHJldHVybiAoXG4gICAgPEZ1bGxwYWdlPlxuICAgICAgPEZ1bGxQYWdlU2VjdGlvbnM+XG4gICAgICAgIDxGdWxscGFnZVNlY3Rpb25cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImxpbWVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIxZW1cIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgMVxuICAgICAgICA8L0Z1bGxwYWdlU2VjdGlvbj5cbiAgICAgICAgPEZ1bGxwYWdlU2VjdGlvblxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiY29yYWxcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMWVtXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDJcbiAgICAgICAgPC9GdWxscGFnZVNlY3Rpb24+XG4gICAgICAgIDxGdWxscGFnZVNlY3Rpb25cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImZpcmVicmlja1wiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIxZW1cIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgM1xuICAgICAgICA8L0Z1bGxwYWdlU2VjdGlvbj5cbiAgICAgIDwvRnVsbFBhZ2VTZWN0aW9ucz5cbiAgICA8L0Z1bGxwYWdlPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test/index.js\n");

/***/ }),

/***/ "@ap.cx/react-fullpage":
/*!****************************************!*\
  !*** external "@ap.cx/react-fullpage" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ap.cx/react-fullpage\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXAuY3gvcmVhY3QtZnVsbHBhZ2VcIj85NjNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBhcC5jeC9yZWFjdC1mdWxscGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcC5jeC9yZWFjdC1mdWxscGFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@ap.cx/react-fullpage\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });