webpackHotUpdate("static/development/pages/demo.js",{

/***/ "./components/Demo.tsx":
/*!*****************************!*\
  !*** ./components/Demo.tsx ***!
  \*****************************/
/*! exports provided: DemoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DemoForm\", function() { return DemoForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var flowjv_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flowjv-react */ \"../flowjv-react/dist/index.js\");\n/* harmony import */ var flowjv_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flowjv_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var flowjv_react_dist_bindings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flowjv-react/dist/bindings */ \"../flowjv-react/dist/bindings/index.js\");\n/* harmony import */ var flowjv_react_dist_bindings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flowjv_react_dist_bindings__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"../../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schema */ \"./components/schema.tsx\");\nvar _jsxFileName = \"/Users/kishore/MINE/fjv/packages/flowjv-builder/components/Demo.tsx\",\n    _s = $RefreshSig$(),\n    _this2 = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar FlowJVForm = Object(flowjv_react__WEBPACK_IMPORTED_MODULE_1__[\"setupFlowJV\"])(flowjv_react_dist_bindings__WEBPACK_IMPORTED_MODULE_2__[\"FormConfig\"]);\n_c = FlowJVForm;\nfunction DemoForm() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    value: {},\n    isValid: false\n  }),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showData = _useState2[0],\n      setShowData = _useState2[1];\n\n  return __jsx(\"div\", {\n    className: \"max-w-md p-5 mx-auto bg-gray-100 shadow-lg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 3\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }\n  }, \"Registration Form\"), showData && __jsx(\"pre\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, JSON.stringify(data.value, null, \"  \")), __jsx(FlowJVForm, {\n    formProps: {\n      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({\n        hidden: showData\n      })\n    },\n    schema: _schema__WEBPACK_IMPORTED_MODULE_4__[\"flowSchema\"],\n    value: data.value,\n    onChange: setData,\n    renderMap: {\n      name: function name(_ref) {\n        var value = _ref.value,\n            _onChange = _ref.onChange;\n        return __jsx(\"input\", {\n          type: \"text\",\n          value: value,\n          onChange: function onChange(e) {\n            return _onChange(e.target.value);\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 7\n          }\n        });\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 4\n    }\n  }, __jsx(RegisterButton, {\n    isValid: data.isValid,\n    onRegister: function onRegister() {\n      setShowData(true);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  })));\n}\n\n_s(DemoForm, \"WwsLwmuYjxvP+OnvnszdJLPXq84=\");\n\n_c2 = DemoForm;\nDemoForm.displayName = \"DemoForm\";\n\nvar RegisterButton = function RegisterButton(_ref2) {\n  var isValid = _ref2.isValid,\n      onRegister = _ref2.onRegister;\n  return __jsx(\"input\", {\n    type: \"submit\",\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"p-3 mt-3 w-full outline-none focus:outline-none transition-all duration-300\", {\n      \"text-white bg-teal-700 hover:bg-teal-800 cursor-pointer\": isValid,\n      \"bg-gray-300 text-gray-400 hover:bg-gray-300 cursor-default\": !isValid\n    }),\n    onClick: function onClick(e) {\n      isValid && (onRegister === null || onRegister === void 0 ? void 0 : onRegister());\n    },\n    value: \"Register\",\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 3\n    }\n  });\n};\n\n_c3 = RegisterButton;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"FlowJVForm\");\n$RefreshReg$(_c2, \"DemoForm\");\n$RefreshReg$(_c3, \"RegisterButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RlbW8udHN4PzE4NGYiXSwibmFtZXMiOlsiRmxvd0pWRm9ybSIsInNldHVwRmxvd0pWIiwiRm9ybUNvbmZpZyIsIkRlbW9Gb3JtIiwidXNlU3RhdGUiLCJ2YWx1ZSIsImlzVmFsaWQiLCJkYXRhIiwic2V0RGF0YSIsInNob3dEYXRhIiwic2V0U2hvd0RhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xhc3NOYW1lIiwiY3giLCJoaWRkZW4iLCJmbG93U2NoZW1hIiwibmFtZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImRpc3BsYXlOYW1lIiwiUmVnaXN0ZXJCdXR0b24iLCJvblJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLGdFQUFXLENBQUNDLHFFQUFELENBQTlCO0tBQU1GLFU7QUFFQyxTQUFTRyxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUM7QUFBRUMsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsV0FBTyxFQUFFO0FBQXRCLEdBQUQsQ0FETjtBQUFBLE1BQ25CQyxJQURtQjtBQUFBLE1BQ2JDLE9BRGE7O0FBQUEsbUJBRU1KLHNEQUFRLENBQUMsS0FBRCxDQUZkO0FBQUEsTUFFbkJLLFFBRm1CO0FBQUEsTUFFVEMsV0FGUzs7QUFHMUIsU0FDQztBQUFLLGFBQVMsRUFBQyw0Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERCxFQUVFRCxRQUFRLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsSUFBSSxDQUFDRixLQUFwQixFQUEyQixJQUEzQixFQUFpQyxJQUFqQyxDQUFOLENBRmQsRUFHQyxNQUFDLFVBQUQ7QUFDQyxhQUFTLEVBQUU7QUFDVlEsZUFBUyxFQUFFQyxpREFBRSxDQUFDO0FBQ2JDLGNBQU0sRUFBRU47QUFESyxPQUFEO0FBREgsS0FEWjtBQU1DLFVBQU0sRUFBRU8sa0RBTlQ7QUFPQyxTQUFLLEVBQUVULElBQUksQ0FBQ0YsS0FQYjtBQVFDLFlBQVEsRUFBRUcsT0FSWDtBQVNDLGFBQVMsRUFBRTtBQUNWUyxVQUFJLEVBQUU7QUFBQSxZQUFHWixLQUFILFFBQUdBLEtBQUg7QUFBQSxZQUFVYSxTQUFWLFFBQVVBLFFBQVY7QUFBQSxlQUNMO0FBQ0MsY0FBSSxFQUFDLE1BRE47QUFFQyxlQUFLLEVBQUViLEtBRlI7QUFHQyxrQkFBUSxFQUFFLGtCQUFDYyxDQUFEO0FBQUEsbUJBQU9ELFNBQVEsQ0FBQ0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNmLEtBQVYsQ0FBZjtBQUFBLFdBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURLO0FBQUE7QUFESSxLQVRaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FtQkMsTUFBQyxjQUFEO0FBQ0MsV0FBTyxFQUFFRSxJQUFJLENBQUNELE9BRGY7QUFFQyxjQUFVLEVBQUUsc0JBQU07QUFDakJJLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0EsS0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJELENBSEQsQ0FERDtBQWdDQTs7R0FuQ2VQLFE7O01BQUFBLFE7QUFvQ2hCQSxRQUFRLENBQUNrQixXQUFULEdBQXVCLFVBQXZCOztBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsUUFBNkI7QUFBQSxNQUExQmhCLE9BQTBCLFNBQTFCQSxPQUEwQjtBQUFBLE1BQWpCaUIsVUFBaUIsU0FBakJBLFVBQWlCO0FBQ25ELFNBQ0M7QUFDQyxRQUFJLEVBQUMsUUFETjtBQUVDLGFBQVMsRUFBRVQsaURBQUUsQ0FDWiw2RUFEWSxFQUVaO0FBQ0MsaUVBQTJEUixPQUQ1RDtBQUVDLG9FQUE4RCxDQUFDQTtBQUZoRSxLQUZZLENBRmQ7QUFTQyxXQUFPLEVBQUUsaUJBQUNhLENBQUQsRUFBTztBQUNmYixhQUFPLEtBQUlpQixVQUFKLGFBQUlBLFVBQUosdUJBQUlBLFVBQVUsRUFBZCxDQUFQO0FBQ0EsS0FYRjtBQVlDLFNBQUssRUFBQyxVQVpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERDtBQWdCQSxDQWpCRDs7TUFBTUQsYyIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGVtby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXR1cEZsb3dKViwgRmllbGQsIEJsb2NrIH0gZnJvbSBcImZsb3dqdi1yZWFjdFwiO1xuaW1wb3J0IHsgRm9ybUNvbmZpZyB9IGZyb20gXCJmbG93anYtcmVhY3QvZGlzdC9iaW5kaW5nc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjeCBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgZmxvd1NjaGVtYSB9IGZyb20gXCIuL3NjaGVtYVwiO1xuXG5jb25zdCBGbG93SlZGb3JtID0gc2V0dXBGbG93SlYoRm9ybUNvbmZpZyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBEZW1vRm9ybSgpIHtcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoeyB2YWx1ZToge30sIGlzVmFsaWQ6IGZhbHNlIH0pO1xuXHRjb25zdCBbc2hvd0RhdGEsIHNldFNob3dEYXRhXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIHAtNSBteC1hdXRvIGJnLWdyYXktMTAwIHNoYWRvdy1sZ1wiPlxuXHRcdFx0PGgyPlJlZ2lzdHJhdGlvbiBGb3JtPC9oMj5cblx0XHRcdHtzaG93RGF0YSAmJiA8cHJlPntKU09OLnN0cmluZ2lmeShkYXRhLnZhbHVlLCBudWxsLCBcIiAgXCIpfTwvcHJlPn1cblx0XHRcdDxGbG93SlZGb3JtXG5cdFx0XHRcdGZvcm1Qcm9wcz17e1xuXHRcdFx0XHRcdGNsYXNzTmFtZTogY3goe1xuXHRcdFx0XHRcdFx0aGlkZGVuOiBzaG93RGF0YSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0fX1cblx0XHRcdFx0c2NoZW1hPXtmbG93U2NoZW1hfVxuXHRcdFx0XHR2YWx1ZT17ZGF0YS52YWx1ZX1cblx0XHRcdFx0b25DaGFuZ2U9e3NldERhdGF9XG5cdFx0XHRcdHJlbmRlck1hcD17e1xuXHRcdFx0XHRcdG5hbWU6ICh7IHZhbHVlLCBvbkNoYW5nZSB9KSA9PiAoXG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpLFxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8UmVnaXN0ZXJCdXR0b25cblx0XHRcdFx0XHRpc1ZhbGlkPXtkYXRhLmlzVmFsaWR9XG5cdFx0XHRcdFx0b25SZWdpc3Rlcj17KCkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0U2hvd0RhdGEodHJ1ZSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvRmxvd0pWRm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbkRlbW9Gb3JtLmRpc3BsYXlOYW1lID0gXCJEZW1vRm9ybVwiO1xuXG5jb25zdCBSZWdpc3RlckJ1dHRvbiA9ICh7IGlzVmFsaWQsIG9uUmVnaXN0ZXIgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbnB1dFxuXHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRjbGFzc05hbWU9e2N4KFxuXHRcdFx0XHRcInAtMyBtdC0zIHctZnVsbCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0ZXh0LXdoaXRlIGJnLXRlYWwtNzAwIGhvdmVyOmJnLXRlYWwtODAwIGN1cnNvci1wb2ludGVyXCI6IGlzVmFsaWQsXG5cdFx0XHRcdFx0XCJiZy1ncmF5LTMwMCB0ZXh0LWdyYXktNDAwIGhvdmVyOmJnLWdyYXktMzAwIGN1cnNvci1kZWZhdWx0XCI6ICFpc1ZhbGlkLFxuXHRcdFx0XHR9XG5cdFx0XHQpfVxuXHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0aXNWYWxpZCAmJiBvblJlZ2lzdGVyPy4oKTtcblx0XHRcdH19XG5cdFx0XHR2YWx1ZT1cIlJlZ2lzdGVyXCJcblx0XHQvPlxuXHQpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Demo.tsx\n");

/***/ })

})