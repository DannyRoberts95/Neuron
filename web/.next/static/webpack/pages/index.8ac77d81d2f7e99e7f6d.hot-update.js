webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullpage/react-fullpage */ \"../node_modules/@fullpage/react-fullpage/dist/react-fullpage.js\");\n/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/dan/Documents/Coding/blog/web/pages/index.js\",\n    _this = undefined;\n\nfunction _templateObject2() {\n  var data = Object(_Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      *[_type == \\\"project\\\" && publishedAt < now()]|order(publishedAt desc)\\n    \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      *[_type == \\\"post\\\" && publishedAt < now()]|order(publishedAt desc)\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// index.js\n\n\n\n // import \"fullpage.js/vend ors/scrolloverflow\"; // Optional. When using scrollOverflow:true\n\n\n\nvar Index = function Index(props) {\n  console.log(props);\n  var _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts;\n  var _props$projects = props.projects,\n      projects = _props$projects === void 0 ? [] : _props$projects;\n  var postLinks = posts.map(function (_ref) {\n    var _id = _ref._id,\n        _ref$title = _ref.title,\n        title = _ref$title === void 0 ? \"\" : _ref$title,\n        _ref$slug = _ref.slug,\n        slug = _ref$slug === void 0 ? \"\" : _ref$slug,\n        _ref$_updatedAt = _ref._updatedAt,\n        _updatedAt = _ref$_updatedAt === void 0 ? \"\" : _ref$_updatedAt;\n\n    return slug && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"li\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/post/[slug]\",\n        as: \"/post/\".concat(slug.current),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"a\", {\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }, _this), \" \", \"(\", new Date(_updatedAt).toDateString(), \")\"]\n    }, _id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, _this);\n  });\n  var projectLinks = projects.map(function (_ref2) {\n    var _id = _ref2._id,\n        _ref2$title = _ref2.title,\n        title = _ref2$title === void 0 ? \"\" : _ref2$title,\n        _ref2$slug = _ref2.slug,\n        slug = _ref2$slug === void 0 ? \"\" : _ref2$slug,\n        _ref2$_updatedAt = _ref2._updatedAt,\n        _updatedAt = _ref2$_updatedAt === void 0 ? \"\" : _ref2$_updatedAt;\n\n    return slug && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"li\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/project/[slug]\",\n        as: \"/project/\".concat(slug.current),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"a\", {\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, _this), \" \", \"(\", new Date(_updatedAt).toDateString(), \")\"]\n    }, _id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8___default.a // scrollOverflow={true}\n  , {\n    sectionsColor: [\"orange\", \"purple\", \"green\"] // onLeave={this.onLeave.bind(this)}\n    // afterLoad={this.afterLoad.bind(this)}\n    ,\n    render: function render(_ref3) {\n      var state = _ref3.state,\n          fullpageApi = _ref3.fullpageApi;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        id: \"fullpage-wrapper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n          className: \"section section1\",\n          children: projectLinks\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n          className: \"section\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n            className: \"slide\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"h3\", {\n              children: \"Section 1\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 17\n            }, _this), postLinks]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n          className: \"section\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"h3\", {\n            children: \"Section 3\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return fullpageApi.moveTo(1, 0);\n            },\n            children: \"Move top\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }, _this);\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _Users_dan_Documents_Coding_blog_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          _context.next = 5;\n          return _client__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2()));\n\n        case 5:\n          _context.t1 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0,\n            projects: _context.t1\n          });\n\n        case 7:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBvc3RzIiwicHJvamVjdHMiLCJwb3N0TGlua3MiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInNsdWciLCJfdXBkYXRlZEF0IiwiY3VycmVudCIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJwcm9qZWN0TGlua3MiLCJzdGF0ZSIsImZ1bGxwYWdlQXBpIiwibW92ZVRvIiwiZ2V0SW5pdGlhbFByb3BzIiwiY2xpZW50IiwiZmV0Y2giLCJncm9xIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUR1QixxQkFFQUEsS0FGQSxDQUVmRyxLQUZlO0FBQUEsTUFFZkEsS0FGZSw2QkFFUCxFQUZPO0FBQUEsd0JBR0dILEtBSEgsQ0FHZkksUUFIZTtBQUFBLE1BR2ZBLFFBSGUsZ0NBR0osRUFISTtBQUt2QixNQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csR0FBTixDQUNoQjtBQUFBLFFBQUdDLEdBQUgsUUFBR0EsR0FBSDtBQUFBLDBCQUFRQyxLQUFSO0FBQUEsUUFBUUEsS0FBUiwyQkFBZ0IsRUFBaEI7QUFBQSx5QkFBb0JDLElBQXBCO0FBQUEsUUFBb0JBLElBQXBCLDBCQUEyQixFQUEzQjtBQUFBLCtCQUErQkMsVUFBL0I7QUFBQSxRQUErQkEsVUFBL0IsZ0NBQTRDLEVBQTVDOztBQUFBLFdBQ0VELElBQUksaUJBQ0Y7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxjQUFYO0FBQTBCLFVBQUUsa0JBQVdBLElBQUksQ0FBQ0UsT0FBaEIsQ0FB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Y2VzQ29udGVudCI6WyIvLyBpbmRleC5qc1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgXCJmdWxscGFnZS5qcy92ZW5kIG9ycy9zY3JvbGxvdmVyZmxvd1wiOyAvLyBPcHRpb25hbC4gV2hlbiB1c2luZyBzY3JvbGxPdmVyZmxvdzp0cnVlXG5pbXBvcnQgUmVhY3RGdWxscGFnZSBmcm9tIFwiQGZ1bGxwYWdlL3JlYWN0LWZ1bGxwYWdlXCI7XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb3BzKTtcbiAgY29uc3QgeyBwb3N0cyA9IFtdIH0gPSBwcm9wcztcbiAgY29uc3QgeyBwcm9qZWN0cyA9IFtdIH0gPSBwcm9wcztcblxuICBjb25zdCBwb3N0TGlua3MgPSBwb3N0cy5tYXAoXG4gICAgKHsgX2lkLCB0aXRsZSA9IFwiXCIsIHNsdWcgPSBcIlwiLCBfdXBkYXRlZEF0ID0gXCJcIiB9KSA9PlxuICAgICAgc2x1ZyAmJiAoXG4gICAgICAgIDxsaSBrZXk9e19pZH0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICAgIDwvTGluaz57XCIgXCJ9XG4gICAgICAgICAgKHtuZXcgRGF0ZShfdXBkYXRlZEF0KS50b0RhdGVTdHJpbmcoKX0pXG4gICAgICAgIDwvbGk+XG4gICAgICApXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdExpbmtzID0gcHJvamVjdHMubWFwKFxuICAgICh7IF9pZCwgdGl0bGUgPSBcIlwiLCBzbHVnID0gXCJcIiwgX3VwZGF0ZWRBdCA9IFwiXCIgfSkgPT5cbiAgICAgIHNsdWcgJiYgKFxuICAgICAgICA8bGkga2V5PXtfaWR9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdC9bc2x1Z11cIiBhcz17YC9wcm9qZWN0LyR7c2x1Zy5jdXJyZW50fWB9PlxuICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICA8L0xpbms+e1wiIFwifVxuICAgICAgICAgICh7bmV3IERhdGUoX3VwZGF0ZWRBdCkudG9EYXRlU3RyaW5nKCl9KVxuICAgICAgICA8L2xpPlxuICAgICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0RnVsbHBhZ2VcbiAgICAgIC8vIHNjcm9sbE92ZXJmbG93PXt0cnVlfVxuICAgICAgc2VjdGlvbnNDb2xvcj17W1wib3JhbmdlXCIsIFwicHVycGxlXCIsIFwiZ3JlZW5cIl19XG4gICAgICAvLyBvbkxlYXZlPXt0aGlzLm9uTGVhdmUuYmluZCh0aGlzKX1cbiAgICAgIC8vIGFmdGVyTG9hZD17dGhpcy5hZnRlckxvYWQuYmluZCh0aGlzKX1cbiAgICAgIHJlbmRlcj17KHsgc3RhdGUsIGZ1bGxwYWdlQXBpIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGlkPVwiZnVsbHBhZ2Utd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24xXCI+XG4gICAgICAgICAgICAgIHtwcm9qZWN0TGlua3N9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlXCI+XG4gICAgICAgICAgICAgICAgPGgzPlNlY3Rpb24gMTwvaDM+XG4gICAgICAgICAgICAgICAge3Bvc3RMaW5rc31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8aDM+U2VjdGlvbiAzPC9oMz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmdWxscGFnZUFwaS5tb3ZlVG8oMSwgMCl9Pk1vdmUgdG9wPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn07XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gIHBvc3RzOiBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcbiAgICAgICpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgcHVibGlzaGVkQXQgPCBub3coKV18b3JkZXIocHVibGlzaGVkQXQgZGVzYylcbiAgICBgKSxcbiAgcHJvamVjdHM6IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAgICAgKltfdHlwZSA9PSBcInByb2plY3RcIiAmJiBwdWJsaXNoZWRBdCA8IG5vdygpXXxvcmRlcihwdWJsaXNoZWRBdCBkZXNjKVxuICAgIGApLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})