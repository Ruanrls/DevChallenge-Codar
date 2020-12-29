webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container */ \"./src/components/container.js\");\n\n\n\nvar _jsxFileName = \"/home/kali/Desktop/Codar-DevChallenge/Codar/src/components/footer.js\",\n    _this = undefined;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\" \\n    color: white;\\n    font-size: 1.2em;\\n    font-weight: bolder;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    font-size: 1.5em;\\n    color: white;\\n    font-weight: bolder;\\n\\n    &:after {\\n        content: '.';\\n        font-size: 2em;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar ContainerText = function ContainerText(_ref) {\n  var title = _ref.title,\n      text = _ref.text;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    style: {\n      padding: '0px 20px'\n    },\n    column: true,\n    align: \"flex-start\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SubTitle, {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"text\", {\n      style: {\n        color: 'white'\n      },\n      children: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = ContainerText;\n\nvar Footer = function Footer() {\n  var texts = [{\n    title: \"Sobre\",\n    text: \"Amamos criar soluções e entregar sites incríveis\"\n  }, {\n    title: \"Contato\",\n    text: \"123 Av. Manjar - Nárnia\\n+55 31 97070-7070\\ncontato@contato.com\"\n  }, {\n    title: \"Redes Sociais\",\n    text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"i\", {\n      color: \"white\",\n      children: \"teste\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 19\n    }, _this)\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    style: {\n      backgroundColor: 'black',\n      marginTop: 100,\n      padding: '20px'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Title, {\n        children: \"Codar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"text\", {\n        children: \"Criamos websites incr\\xEDveis\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, _this), texts.map(function (item) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ContainerText, {\n        text: item.text,\n        title: item.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }, _this);\n};\n\n_c2 = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].text(_templateObject());\n_c3 = Title;\nvar SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].text(_templateObject2());\n_c4 = SubTitle;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"ContainerText\");\n$RefreshReg$(_c2, \"Footer\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"SubTitle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzPzViZmYiXSwibmFtZXMiOlsiQ29udGFpbmVyVGV4dCIsInRpdGxlIiwidGV4dCIsInBhZGRpbmciLCJjb2xvciIsIkZvb3RlciIsInRleHRzIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luVG9wIiwibWFwIiwiaXRlbSIsIlRpdGxlIiwic3R5bGVkIiwiU3ViVGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQXFCO0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUV2QyxzQkFFSSxxRUFBQyxrREFBRDtBQUFXLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFsQjtBQUEyQyxVQUFNLE1BQWpEO0FBQWtELFNBQUssRUFBQyxZQUF4RDtBQUFBLDRCQUNJLHFFQUFDLFFBQUQ7QUFBQSxnQkFDS0Y7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSTtBQUFNLFdBQUssRUFBRTtBQUFFRyxhQUFLLEVBQUU7QUFBVCxPQUFiO0FBQUEsZ0JBQWtDRjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUFVSCxDQVpEOztLQUFNRixhOztBQWNOLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFFakIsTUFBTUMsS0FBSyxHQUFHLENBQ1Y7QUFDSUwsU0FBSyxFQUFFLE9BRFg7QUFFSUMsUUFBSSxFQUFFO0FBRlYsR0FEVSxFQUtWO0FBQ0lELFNBQUssRUFBRSxTQURYO0FBRUlDLFFBQUksRUFBRTtBQUZWLEdBTFUsRUFTVjtBQUNJRCxTQUFLLEVBQUUsZUFEWDtBQUVJQyxRQUFJLGVBQUU7QUFBRyxXQUFLLEVBQUMsT0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZWLEdBVFUsQ0FBZDtBQWdCQSxzQkFDSSxxRUFBQyxrREFBRDtBQUFXLFNBQUssRUFBRTtBQUFFSyxxQkFBZSxFQUFFLE9BQW5CO0FBQTRCQyxlQUFTLEVBQUUsR0FBdkM7QUFBNENMLGFBQU8sRUFBRTtBQUFyRCxLQUFsQjtBQUFBLDRCQUNJLHFFQUFDLGtEQUFEO0FBQUEsOEJBQ0kscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQU1LRyxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsMEJBQ1AscUVBQUMsYUFBRDtBQUNJLFlBQUksRUFBRUEsSUFBSSxDQUFDUixJQURmO0FBRUksYUFBSyxFQUFFUSxJQUFJLENBQUNUO0FBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETztBQUFBLEtBQVYsQ0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdCSCxDQWxDRDs7TUFBTUksTTtBQW9DU0EscUVBQWY7QUFFQSxJQUFNTSxLQUFLLEdBQUdDLHlEQUFNLENBQUNWLElBQVYsbUJBQVg7TUFBTVMsSztBQVdOLElBQU1FLFFBQVEsR0FBR0QseURBQU0sQ0FBQ1YsSUFBVixvQkFBZDtNQUFNVyxRIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcidcclxuXHJcbmNvbnN0IENvbnRhaW5lclRleHQgPSAoeyB0aXRsZSwgdGV4dCB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBwYWRkaW5nOiAnMHB4IDIwcHgnIH19IGNvbHVtbiBhbGlnbj1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgICAgPFN1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICA8L1N1YlRpdGxlPlxyXG5cclxuICAgICAgICAgICAgPHRleHQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+e3RleHR9PC90ZXh0PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdGV4dHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJTb2JyZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkFtYW1vcyBjcmlhciBzb2x1w6fDtWVzIGUgZW50cmVnYXIgc2l0ZXMgaW5jcsOtdmVpc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbnRhdG9cIixcclxuICAgICAgICAgICAgdGV4dDogXCIxMjMgQXYuIE1hbmphciAtIE7DoXJuaWFcXG4rNTUgMzEgOTcwNzAtNzA3MFxcbmNvbnRhdG9AY29udGF0by5jb21cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiUmVkZXMgU29jaWFpc1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiA8aSBjb2xvcj1cIndoaXRlXCI+dGVzdGU8L2k+XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLCBtYXJnaW5Ub3A6IDEwMCwgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlPkNvZGFyPC9UaXRsZT5cclxuICAgICAgICAgICAgICAgIDx0ZXh0PkNyaWFtb3Mgd2Vic2l0ZXMgaW5jcsOtdmVpczwvdGV4dD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgICAgICB7dGV4dHMubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lclRleHRcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC50ZXh0YFxyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJy4nO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBTdWJUaXRsZSA9IHN0eWxlZC50ZXh0YCBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/footer.js\n");

/***/ })

})