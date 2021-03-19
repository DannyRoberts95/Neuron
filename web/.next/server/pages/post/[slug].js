module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/post/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// client.js\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n  projectId: \"i6ftokgg\",\n  // you can find this in sanity.json\n  dataset: \"production\",\n  // or the name you chose in step 1\n  useCdn: false // `false` if you want to ensure fresh data\n\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQuanM/Y2MyNSJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwidXNlQ2RuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWVBLG9IQUFZLENBQUM7QUFDMUJDLFdBQVMsRUFBRSxVQURlO0FBQ0g7QUFDdkJDLFNBQU8sRUFBRSxZQUZpQjtBQUVIO0FBQ3ZCQyxRQUFNLEVBQUUsS0FIa0IsQ0FHWjs7QUFIWSxDQUFELENBQTNCIiwiZmlsZSI6Ii4vY2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY2xpZW50LmpzXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xuXG5leHBvcnQgZGVmYXVsdCBzYW5pdHlDbGllbnQoe1xuICBwcm9qZWN0SWQ6IFwiaTZmdG9rZ2dcIiwgLy8geW91IGNhbiBmaW5kIHRoaXMgaW4gc2FuaXR5Lmpzb25cbiAgZGF0YXNldDogXCJwcm9kdWN0aW9uXCIsIC8vIG9yIHRoZSBuYW1lIHlvdSBjaG9zZSBpbiBzdGVwIDFcbiAgdXNlQ2RuOiBmYWxzZSAvLyBgZmFsc2VgIGlmIHlvdSB3YW50IHRvIGVuc3VyZSBmcmVzaCBkYXRhXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"@sanity/block-content-to-react\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\nvar _jsxFileName = \"/Users/dan/Documents/Coding/blog/web/pages/post/[slug].js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// [slug].js\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).image(source);\n}\n\nconst Post = props => {\n  console.log(props);\n  const {\n    title = 'Missing title',\n    name = 'Missing name',\n    categories,\n    authorImage,\n    mainImage,\n    body = []\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: [\"By \", name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined), categories && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [\"Posted in\", categories.map(category => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: category\n      }, category, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 39\n      }, undefined))]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }, undefined), mainImage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n        style: {\n          margin: 0\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          width: \"100%\",\n          src: urlFor(mainImage[0]).height(Math.floor(9 / 16 * 2000)).fit('crop').auto('format').url()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }, undefined), authorImage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: urlFor(authorImage).width(50).url()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread({\n      blocks: body,\n      imageOptions: {\n        w: 320,\n        h: 240,\n        fit: 'max'\n      }\n    }, _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config()), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst query = groq__WEBPACK_IMPORTED_MODULE_1___default.a`*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  \"name\": author->name,\n  \"categories\": categories[]->title,\n  \"authorImage\": author->image,\n  \"mainImage\": mainImage=>image,\n  publishedAt,\n  _updatedAt,\n\n  body\n}`;\n\nPost.getInitialProps = async function (context) {\n  // It's important to default the slug so that it doesn't return \"undefined\"\n  const {\n    slug = \"\"\n  } = context.query;\n  return await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(query, {\n    slug\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz81MzU0Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiUG9zdCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibmFtZSIsImNhdGVnb3JpZXMiLCJhdXRob3JJbWFnZSIsIm1haW5JbWFnZSIsImJvZHkiLCJtYXAiLCJjYXRlZ29yeSIsIm1hcmdpbiIsImhlaWdodCIsIk1hdGgiLCJmbG9vciIsImZpdCIsImF1dG8iLCJ1cmwiLCJ3aWR0aCIsInciLCJoIiwiY29uZmlnIiwicXVlcnkiLCJncm9xIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInNsdWciLCJmZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDdkIsU0FBT0Msd0RBQWUsQ0FBQ0MsK0NBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDRDs7QUFFRCxNQUFNSSxJQUFJLEdBQUlDLEtBQUQsSUFBVztBQUN0QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxRQUFNO0FBQ0pHLFNBQUssR0FBRyxlQURKO0FBRUpDLFFBQUksR0FBRyxjQUZIO0FBR0pDLGNBSEk7QUFJSkMsZUFKSTtBQUtKQyxhQUxJO0FBTUpDLFFBQUksR0FBRztBQU5ILE1BT0ZSLEtBUEo7QUFRQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtHO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsd0JBQVVDLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBR0dDLFVBQVUsaUJBQ1Q7QUFBQSw4QkFFR0EsVUFBVSxDQUFDSSxHQUFYLENBQWVDLFFBQVEsaUJBQUk7QUFBQSxrQkFBb0JBO0FBQXBCLFNBQVNBLFFBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBM0IsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosRUFVR0gsU0FBUyxpQkFDUjtBQUFBLDZCQUNFO0FBQVEsYUFBSyxFQUFFO0FBQUNJLGdCQUFNLEVBQUM7QUFBUixTQUFmO0FBQUEsK0JBQ0E7QUFDQSxlQUFLLEVBQUMsTUFETjtBQUVFLGFBQUcsRUFBRWpCLE1BQU0sQ0FBQ2EsU0FBUyxDQUFDLENBQUQsQ0FBVixDQUFOLENBQ0ZLLE1BREUsQ0FDS0MsSUFBSSxDQUFDQyxLQUFMLENBQVksSUFBSSxFQUFMLEdBQVcsSUFBdEIsQ0FETCxFQUVGQyxHQUZFLENBRUUsTUFGRixFQUdGQyxJQUhFLENBR0csUUFISCxFQUlGQyxHQUpFO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhKLEVBd0JHWCxXQUFXLGlCQUNWO0FBQUEsNkJBQ0U7QUFDRSxXQUFHLEVBQUVaLE1BQU0sQ0FBQ1ksV0FBRCxDQUFOLENBQ0ZZLEtBREUsQ0FDSSxFQURKLEVBRUZELEdBRkU7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6QkosZUFpQ0UscUVBQUMscUVBQUQ7QUFDRSxZQUFNLEVBQUVULElBRFY7QUFFRSxrQkFBWSxFQUFFO0FBQUVXLFNBQUMsRUFBRSxHQUFMO0FBQVVDLFNBQUMsRUFBRSxHQUFiO0FBQWtCTCxXQUFHLEVBQUU7QUFBdkI7QUFGaEIsT0FHTWxCLCtDQUFNLENBQUN3QixNQUFQLEVBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5Q0QsQ0FuREQ7O0FBcURBLE1BQU1DLEtBQUssR0FBR0MsMkNBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFWQTs7QUFZQXhCLElBQUksQ0FBQ3lCLGVBQUwsR0FBdUIsZ0JBQWdCQyxPQUFoQixFQUF5QjtBQUM5QztBQUNBLFFBQU07QUFBRUMsUUFBSSxHQUFHO0FBQVQsTUFBZ0JELE9BQU8sQ0FBQ0gsS0FBOUI7QUFDQSxTQUFPLE1BQU16QiwrQ0FBTSxDQUFDOEIsS0FBUCxDQUFhTCxLQUFiLEVBQW9CO0FBQUVJO0FBQUYsR0FBcEIsQ0FBYjtBQUNELENBSkQ7O0FBTWUzQixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3QvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW3NsdWddLmpzXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnXG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2cocHJvcHMpXG4gIGNvbnN0IHtcbiAgICB0aXRsZSA9ICdNaXNzaW5nIHRpdGxlJyxcbiAgICBuYW1lID0gJ01pc3NpbmcgbmFtZScsXG4gICAgY2F0ZWdvcmllcyxcbiAgICBhdXRob3JJbWFnZSxcbiAgICBtYWluSW1hZ2UsXG4gICAgYm9keSA9IFtdXG4gIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPHNwYW4+Qnkge25hbWV9PC9zcGFuPlxuICAgICAge2NhdGVnb3JpZXMgJiYgKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgUG9zdGVkIGluXG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT4pfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cblxuICAgICAge21haW5JbWFnZSAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZpZ3VyZSBzdHlsZT17e21hcmdpbjowfX0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBzcmM9e3VybEZvcihtYWluSW1hZ2VbMF0pXG4gICAgICAgICAgICAgIC5oZWlnaHQoTWF0aC5mbG9vcigoOSAvIDE2KSAqIDIwMDApKVxuICAgICAgICAgICAgICAuZml0KCdjcm9wJylcbiAgICAgICAgICAgICAgLmF1dG8oJ2Zvcm1hdCcpXG4gICAgICAgICAgICAgIC51cmwoKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7YXV0aG9ySW1hZ2UgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17dXJsRm9yKGF1dGhvckltYWdlKVxuICAgICAgICAgICAgICAud2lkdGgoNTApXG4gICAgICAgICAgICAgIC51cmwoKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgIGJsb2Nrcz17Ym9keX1cbiAgICAgICAgaW1hZ2VPcHRpb25zPXt7IHc6IDMyMCwgaDogMjQwLCBmaXQ6ICdtYXgnIH19XG4gICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAvPlxuICAgIDwvYXJ0aWNsZT5cbiAgKVxufVxuXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xuICB0aXRsZSxcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG4gIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcbiAgXCJtYWluSW1hZ2VcIjogbWFpbkltYWdlPT5pbWFnZSxcbiAgcHVibGlzaGVkQXQsXG4gIF91cGRhdGVkQXQsXG5cbiAgYm9keVxufWBcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5XG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/block-content-to-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIj9mYWQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/block-content-to-react\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiPzNmYTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNhbml0eS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/client\n");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/image-url\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2ltYWdlLXVybFwiPzhlZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNhbml0eS9pbWFnZS11cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2ltYWdlLXVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/image-url\n");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"groq\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncm9xXCI/ZTYzYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJncm9xLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JvcVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///groq\n");

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