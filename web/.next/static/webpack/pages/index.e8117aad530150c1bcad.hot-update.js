webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullpage/react-fullpage */ \"../node_modules/@fullpage/react-fullpage/dist/react-fullpage.js\");\n/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/dan/Documents/Coding/blog/web/pages/index.js\",\n    _this = undefined;\n\nfunction _templateObject2() {\n  var data = Object(_Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      *[_type == \\\"project\\\" && publishedAt < now()]|order(publishedAt desc)\\n    \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      *[_type == \\\"post\\\" && publishedAt < now()]|order(publishedAt desc)\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// index.js\n\n\n\n // import \"fullpage.js/vend ors/scrolloverflow\"; // Optional. When using scrollOverflow:true\n\n\n\nvar Index = function Index(props) {\n  console.log(props);\n  var _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts;\n  var _props$projects = props.projects,\n      projects = _props$projects === void 0 ? [] : _props$projects;\n  var postLinks = posts.map(function (_ref) {\n    var _id = _ref._id,\n        _ref$title = _ref.title,\n        title = _ref$title === void 0 ? \"\" : _ref$title,\n        _ref$slug = _ref.slug,\n        slug = _ref$slug === void 0 ? \"\" : _ref$slug,\n        _ref$_updatedAt = _ref._updatedAt,\n        _updatedAt = _ref$_updatedAt === void 0 ? \"\" : _ref$_updatedAt;\n\n    return slug && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"li\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/post/[slug]\",\n        as: \"/post/\".concat(slug.current),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"a\", {\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }, _this), \" \", \"(\", new Date(_updatedAt).toDateString(), \")\"]\n    }, _id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, _this);\n  });\n  var projectLinks = projects.map(function (_ref2) {\n    var _id = _ref2._id,\n        _ref2$title = _ref2.title,\n        title = _ref2$title === void 0 ? \"\" : _ref2$title,\n        _ref2$slug = _ref2.slug,\n        slug = _ref2$slug === void 0 ? \"\" : _ref2$slug,\n        _ref2$_updatedAt = _ref2._updatedAt,\n        _updatedAt = _ref2$_updatedAt === void 0 ? \"\" : _ref2$_updatedAt;\n\n    return slug && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"li\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/project/[slug]\",\n        as: \"/project/\".concat(slug.current),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"a\", {\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, _this), \" \", \"(\", new Date(_updatedAt).toDateString(), \")\"]\n    }, _id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8___default.a // scrollOverflow={true}\n  , {\n    sectionsColor: [\"orange\", \"purple\", \"green\"] // onLeave={this.onLeave.bind(this)}\n    // afterLoad={this.afterLoad.bind(this)}\n    ,\n    render: function render(_ref3) {\n      var state = _ref3.state,\n          fullpageApi = _ref3.fullpageApi;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        id: \"fullpage-wrapper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n          className: \"section\",\n          children: projectLinks\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n          className: \"section\",\n          children: postLinks\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n          className: \"section\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"h3\", {\n            children: \"Section 3\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return fullpageApi.moveTo(1, 0);\n            },\n            children: \"Move top\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }, _this);\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          _context.next = 5;\n          return _client__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2()));\n\n        case 5:\n          _context.t1 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0,\n            projects: _context.t1\n          });\n\n        case 7:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBvc3RzIiwicHJvamVjdHMiLCJwb3N0TGlua3MiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInNsdWciLCJfdXBkYXRlZEF0IiwiY3VycmVudCIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJwcm9qZWN0TGlua3MiLCJzdGF0ZSIsImZ1bGxwYWdlQXBpIiwibW92ZVRvIiwiZ2V0SW5pdGlhbFByb3BzIiwiY2xpZW50IiwiZmV0Y2giLCJncm9xIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUR1QixxQkFFQUEsS0FGQSxDQUVmRyxLQUZlO0FBQUEsTUFFZkEsS0FGZSw2QkFFUCxFQUZPO0FBQUEsd0JBR0dILEtBSEgsQ0FHZkksUUFIZTtBQUFBLE1BR2ZBLFFBSGUsZ0NBR0osRUFISTtBQUt2QixNQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csR0FBTixDQUNoQjtBQUFBLFFBQUdDLEdBQUgsUUFBR0EsR0FBSDtBQUFBLDBCQUFRQyxLQUFSO0FBQUEsUUFBUUEsS0FBUiwyQkFBZ0IsRUFBaEI7QUFBQSx5QkFBb0JDLElBQXBCO0FBQUEsUUFBb0JBLElBQXBCLDBCQUEyQixFQUEzQjtBQUFBLCtCQUErQkMsVUFBL0I7QUFBQSxRQUErQkEsVUFBL0IsZ0NBQTRDLEVBQTVDOztBQUFBLFdBQ0VELElBQUksaUJBQ0Y7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxjQUFYO0FBQTBCLFVBQUUsa0JBQVdBLElBQUksQ0FBQ0UsT0FBaEIsQ0FBNUI7QUFBQSwrQkFDRTtBQUFBLG9CQUFJSDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFHVSxHQUhWLE9BSUksSUFBSUksSUFBSixDQUFTRixVQUFULEVBQXFCRyxZQUFyQixFQUpKO0FBQUEsT0FBU04sR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxHQURnQixDQUFsQjtBQVlBLE1BQU1PLFlBQVksR0FBR1YsUUFBUSxDQUFDRSxHQUFULENBQ25CO0FBQUEsUUFBR0MsR0FBSCxTQUFHQSxHQUFIO0FBQUEsNEJBQVFDLEtBQVI7QUFBQSxRQUFRQSxLQUFSLDRCQUFnQixFQUFoQjtBQUFBLDJCQUFvQkMsSUFBcEI7QUFBQSxRQUFvQkEsSUFBcEIsMkJBQTJCLEVBQTNCO0FBQUEsaUNBQStCQyxVQUEvQjtBQUFBLFFBQStCQSxVQUEvQixpQ0FBNEMsRUFBNUM7O0FBQUEsV0FDRUQsSUFBSSxpQkFDRjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLGlCQUFYO0FBQTZCLFVBQUUscUJBQWNBLElBQUksQ0FBQ0UsT0FBbkIsQ0FBL0I7QUFBQSwrQkFDRTtBQUFBLG9CQUFJSDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFHVSxHQUhWLE9BSUksSUFBSUksSUFBSixDQUFTRixVQUFULEVBQXFCRyxZQUFyQixFQUpKO0FBQUEsT0FBU04sR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxHQURtQixDQUFyQjtBQVlBLHNCQUNFLHFFQUFDLCtEQUFELENBQ0U7QUFERjtBQUVFLGlCQUFhLEVBQUUsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixPQUFyQixDQUZqQixDQUdFO0FBQ0E7QUFKRjtBQUtFLFVBQU0sRUFBRSx1QkFBNEI7QUFBQSxVQUF6QlEsS0FBeUIsU0FBekJBLEtBQXlCO0FBQUEsVUFBbEJDLFdBQWtCLFNBQWxCQSxXQUFrQjtBQUNsQywwQkFDRTtBQUFLLFVBQUUsRUFBQyxrQkFBUjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxTQUFmO0FBQUEsb0JBQTBCRjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxvQkFBMEJUO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBUSxtQkFBTyxFQUFFO0FBQUEscUJBQU1XLFdBQVcsQ0FBQ0MsTUFBWixDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFOO0FBQUEsYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUQ7QUFoQkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBakREOztLQUFNbEIsSztBQW1ETkEsS0FBSyxDQUFDbUIsZUFBTixtU0FBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1RDLCtDQUFNLENBQUNDLEtBQVAsQ0FBYUMsMkNBQWIsb0JBRFM7O0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSU5GLCtDQUFNLENBQUNDLEtBQVAsQ0FBYUMsMkNBQWIscUJBSk07O0FBQUE7QUFBQTtBQUFBO0FBQ3RCbEIsaUJBRHNCO0FBSXRCQyxvQkFKc0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQVNlTCxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXguanNcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IFwiZnVsbHBhZ2UuanMvdmVuZCBvcnMvc2Nyb2xsb3ZlcmZsb3dcIjsgLy8gT3B0aW9uYWwuIFdoZW4gdXNpbmcgc2Nyb2xsT3ZlcmZsb3c6dHJ1ZVxuaW1wb3J0IFJlYWN0RnVsbHBhZ2UgZnJvbSBcIkBmdWxscGFnZS9yZWFjdC1mdWxscGFnZVwiO1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIGNvbnN0IHsgcG9zdHMgPSBbXSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgcHJvamVjdHMgPSBbXSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcG9zdExpbmtzID0gcG9zdHMubWFwKFxuICAgICh7IF9pZCwgdGl0bGUgPSBcIlwiLCBzbHVnID0gXCJcIiwgX3VwZGF0ZWRBdCA9IFwiXCIgfSkgPT5cbiAgICAgIHNsdWcgJiYgKFxuICAgICAgICA8bGkga2V5PXtfaWR9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7c2x1Zy5jdXJyZW50fWB9PlxuICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICA8L0xpbms+e1wiIFwifVxuICAgICAgICAgICh7bmV3IERhdGUoX3VwZGF0ZWRBdCkudG9EYXRlU3RyaW5nKCl9KVxuICAgICAgICA8L2xpPlxuICAgICAgKVxuICApO1xuXG4gIGNvbnN0IHByb2plY3RMaW5rcyA9IHByb2plY3RzLm1hcChcbiAgICAoeyBfaWQsIHRpdGxlID0gXCJcIiwgc2x1ZyA9IFwiXCIsIF91cGRhdGVkQXQgPSBcIlwiIH0pID0+XG4gICAgICBzbHVnICYmIChcbiAgICAgICAgPGxpIGtleT17X2lkfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3QvW3NsdWddXCIgYXM9e2AvcHJvamVjdC8ke3NsdWcuY3VycmVudH1gfT5cbiAgICAgICAgICAgIDxhPnt0aXRsZX08L2E+XG4gICAgICAgICAgPC9MaW5rPntcIiBcIn1cbiAgICAgICAgICAoe25ldyBEYXRlKF91cGRhdGVkQXQpLnRvRGF0ZVN0cmluZygpfSlcbiAgICAgICAgPC9saT5cbiAgICAgIClcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdEZ1bGxwYWdlXG4gICAgICAvLyBzY3JvbGxPdmVyZmxvdz17dHJ1ZX1cbiAgICAgIHNlY3Rpb25zQ29sb3I9e1tcIm9yYW5nZVwiLCBcInB1cnBsZVwiLCBcImdyZWVuXCJdfVxuICAgICAgLy8gb25MZWF2ZT17dGhpcy5vbkxlYXZlLmJpbmQodGhpcyl9XG4gICAgICAvLyBhZnRlckxvYWQ9e3RoaXMuYWZ0ZXJMb2FkLmJpbmQodGhpcyl9XG4gICAgICByZW5kZXI9eyh7IHN0YXRlLCBmdWxscGFnZUFwaSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBpZD1cImZ1bGxwYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPntwcm9qZWN0TGlua3N9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj57cG9zdExpbmtzfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMz5TZWN0aW9uIDM8L2gzPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGZ1bGxwYWdlQXBpLm1vdmVUbygxLCAwKX0+TW92ZSB0b3A8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbiAgcG9zdHM6IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAgICAgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBwdWJsaXNoZWRBdCA8IG5vdygpXXxvcmRlcihwdWJsaXNoZWRBdCBkZXNjKVxuICAgIGApLFxuICBwcm9qZWN0czogYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgXG4gICAgICAqW190eXBlID09IFwicHJvamVjdFwiICYmIHB1Ymxpc2hlZEF0IDwgbm93KCldfG9yZGVyKHB1Ymxpc2hlZEF0IGRlc2MpXG4gICAgYCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})