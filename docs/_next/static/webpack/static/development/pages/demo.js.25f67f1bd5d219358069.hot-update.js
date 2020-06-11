webpackHotUpdate("static/development/pages/demo.js",{

/***/ "./pages/demo.tsx":
/*!************************!*\
  !*** ./pages/demo.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Demo; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var flowjv_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flowjv-react */ \"../flowjv-react/dist/index.js\");\n/* harmony import */ var flowjv_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flowjv_react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/kishore/MINE/fjv/packages/flowjv-builder/pages/demo.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nvar FlowJVForm = Object(flowjv_react__WEBPACK_IMPORTED_MODULE_2__[\"setupFlowJV\"])();\n_c = FlowJVForm;\nvar flowSchema = {\n  type: \"object\",\n  properties: [{\n    key: \"name\",\n    type: \"string\",\n    label: \"Name\",\n    validations: [{\n      logic: [\">\", [[\"str:len\", [\"$ref\"]], 5]],\n      err: \"String length should be greater than 4\"\n    }]\n  }, {\n    key: \"age\",\n    label: \"Age\",\n    type: \"number\"\n  }, {\n    key: \"password\",\n    type: \"string\",\n    label: \"Password\",\n    validations: [{\n      logic: [\"<=\", [5, [\"str:len\", [\"$ref\"]], 20]],\n      err: \"Password length should be between 5 and 20 characters.\"\n    }]\n  }, {\n    key: \"cnfPassword\",\n    type: \"string\",\n    label: \"Confirm Password\",\n    validations: [{\n      logic: [\"===\", [[\"$ref\"], [\"var\", [\"$data\", \"password\"]]]],\n      err: \"Confirm password should match password.\"\n    }]\n  }, {\n    key: \"gender\",\n    type: \"enum\",\n    items: [{\n      value: \"male\"\n    }, {\n      value: \"female\"\n    }],\n    label: \"Gender\"\n  }, {\n    key: \"isEmployed\",\n    type: \"boolean\",\n    label: \"Are you Employed?\",\n    validations: [{\n      logic: [\"enum\", [\"$ref\"], [true, false]],\n      err: \"Should be a boolean\"\n    }]\n  }, {\n    type: \"if\",\n    cond: [\"var\", [\"$data\", \"isEmployed\"]],\n    \"true\": [{\n      key: \"yoe\",\n      label: \"Years of Experience\",\n      type: \"number\"\n    }]\n  }]\n};\nfunction Demo() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    name: \"Kishore\"\n  }),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3199687115\",\n    __self: this\n  }, \"body{background-color:#eeeeee;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXNob3JlL01JTkUvZmp2L3BhY2thZ2VzL2Zsb3dqdi1idWlsZGVyL3BhZ2VzL2RlbW8udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9GSyxBQUdnQyx5QkFDMUIiLCJmaWxlIjoiL1VzZXJzL2tpc2hvcmUvTUlORS9manYvcGFja2FnZXMvZmxvd2p2LWJ1aWxkZXIvcGFnZXMvZGVtby50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXR1cEZsb3dKViB9IGZyb20gXCJmbG93anYtcmVhY3RcIjtcbmltcG9ydCB7IElKU09ORmxvdyB9IGZyb20gXCJmbG93anZcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZsb3dKVkZvcm0gPSBzZXR1cEZsb3dKVigpO1xuY29uc3QgZmxvd1NjaGVtYTogSUpTT05GbG93ID0ge1xuXHR0eXBlOiBcIm9iamVjdFwiLFxuXHRwcm9wZXJ0aWVzOiBbXG5cdFx0e1xuXHRcdFx0a2V5OiBcIm5hbWVcIixcblx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRsYWJlbDogXCJOYW1lXCIsXG5cdFx0XHR2YWxpZGF0aW9uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bG9naWM6IFtcIj5cIiwgW1tcInN0cjpsZW5cIiwgW1wiJHJlZlwiXV0sIDVdXSxcblx0XHRcdFx0XHRlcnI6IFwiU3RyaW5nIGxlbmd0aCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIDRcIixcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXk6IFwiYWdlXCIsXG5cdFx0XHRsYWJlbDogXCJBZ2VcIixcblx0XHRcdHR5cGU6IFwibnVtYmVyXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXk6IFwicGFzc3dvcmRcIixcblx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRsYWJlbDogXCJQYXNzd29yZFwiLFxuXHRcdFx0dmFsaWRhdGlvbnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxvZ2ljOiBbXCI8PVwiLCBbNSwgW1wic3RyOmxlblwiLCBbXCIkcmVmXCJdXSwgMjBdXSxcblx0XHRcdFx0XHRlcnI6XG5cdFx0XHRcdFx0XHRcIlBhc3N3b3JkIGxlbmd0aCBzaG91bGQgYmUgYmV0d2VlbiA1IGFuZCAyMCBjaGFyYWN0ZXJzLlwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleTogXCJjbmZQYXNzd29yZFwiLFxuXHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdGxhYmVsOiBcIkNvbmZpcm0gUGFzc3dvcmRcIixcblx0XHRcdHZhbGlkYXRpb25zOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsb2dpYzogW1wiPT09XCIsIFtbXCIkcmVmXCJdLCBbXCJ2YXJcIiwgW1wiJGRhdGFcIiwgXCJwYXNzd29yZFwiXV1dXSxcblx0XHRcdFx0XHRlcnI6IFwiQ29uZmlybSBwYXNzd29yZCBzaG91bGQgbWF0Y2ggcGFzc3dvcmQuXCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5OiBcImdlbmRlclwiLFxuXHRcdFx0dHlwZTogXCJlbnVtXCIsXG5cdFx0XHRpdGVtczogW3sgdmFsdWU6IFwibWFsZVwiIH0sIHsgdmFsdWU6IFwiZmVtYWxlXCIgfV0sXG5cdFx0XHRsYWJlbDogXCJHZW5kZXJcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleTogXCJpc0VtcGxveWVkXCIsXG5cdFx0XHR0eXBlOiBcImJvb2xlYW5cIixcblx0XHRcdGxhYmVsOiBcIkFyZSB5b3UgRW1wbG95ZWQ/XCIsXG5cdFx0XHR2YWxpZGF0aW9uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bG9naWM6IFtcImVudW1cIiwgW1wiJHJlZlwiXSwgW3RydWUsIGZhbHNlXV0sXG5cdFx0XHRcdFx0ZXJyOiBcIlNob3VsZCBiZSBhIGJvb2xlYW5cIixcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0eXBlOiBcImlmXCIsXG5cdFx0XHRjb25kOiBbXCJ2YXJcIiwgW1wiJGRhdGFcIiwgXCJpc0VtcGxveWVkXCJdXSxcblx0XHRcdHRydWU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGtleTogXCJ5b2VcIixcblx0XHRcdFx0XHRsYWJlbDogXCJZZWFycyBvZiBFeHBlcmllbmNlXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJudW1iZXJcIixcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XSxcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHtcblx0XHRuYW1lOiBcIktpc2hvcmVcIixcblx0fSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxzdHlsZSBnbG9iYWwganN4PlxuXHRcdFx0XHR7YFxuXHRcdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PGltZ1xuXHRcdFx0XHRzcmM9XCJsb2dvLXNxdWFyZS5zdmdcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJoLTIwIGJsb2NrIG14LWF1dG8gdy0xNiBtdC0xNlwiXG5cdFx0XHQvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zbSBteC1hdXRvIHctZnVsbCBiZy13aGl0ZSBwLTUgc2hhZG93LW1kXCI+XG5cdFx0XHRcdDxoMj5SZWdpc3RyYXRpb24gRGV0YWlsczwvaDI+XG5cdFx0XHRcdDxwcmU+e0pTT04uc3RyaW5naWZ5KHsgdmFsdWUgfSwgbnVsbCwgXCIgXCIpfTwvcHJlPlxuXHRcdFx0XHQ8Rmxvd0pWRm9ybVxuXHRcdFx0XHRcdHNjaGVtYT17Zmxvd1NjaGVtYX1cblx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3NldFZhbHVlfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/kishore/MINE/fjv/packages/flowjv-builder/pages/demo.tsx */\"), __jsx(\"img\", {\n    src: \"logo-square.svg\",\n    className: \"jsx-3199687115\" + \" \" + \"h-20 block mx-auto w-16 mt-16\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 4\n    }\n  }), __jsx(\"div\", {\n    className: \"jsx-3199687115\" + \" \" + \"max-w-sm mx-auto w-full bg-white p-5 shadow-md\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 4\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-3199687115\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 5\n    }\n  }, \"Registration Details\"), __jsx(\"pre\", {\n    className: \"jsx-3199687115\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 5\n    }\n  }, JSON.stringify({\n    value: value\n  }, null, \" \")), __jsx(FlowJVForm, {\n    schema: flowSchema,\n    value: value,\n    onChange: setValue,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 5\n    }\n  })));\n}\n\n_s(Demo, \"gTud8arf2+tLjpwLFKqXsnNneJg=\");\n\n_c2 = Demo;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"FlowJVForm\");\n$RefreshReg$(_c2, \"Demo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZW1vLnRzeD9hMDg4Il0sIm5hbWVzIjpbIkZsb3dKVkZvcm0iLCJzZXR1cEZsb3dKViIsImZsb3dTY2hlbWEiLCJ0eXBlIiwicHJvcGVydGllcyIsImtleSIsImxhYmVsIiwidmFsaWRhdGlvbnMiLCJsb2dpYyIsImVyciIsIml0ZW1zIiwidmFsdWUiLCJjb25kIiwiRGVtbyIsInVzZVN0YXRlIiwibmFtZSIsInNldFZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxnRUFBVyxFQUE5QjtLQUFNRCxVO0FBQ04sSUFBTUUsVUFBcUIsR0FBRztBQUM3QkMsTUFBSSxFQUFFLFFBRHVCO0FBRTdCQyxZQUFVLEVBQUUsQ0FDWDtBQUNDQyxPQUFHLEVBQUUsTUFETjtBQUVDRixRQUFJLEVBQUUsUUFGUDtBQUdDRyxTQUFLLEVBQUUsTUFIUjtBQUlDQyxlQUFXLEVBQUUsQ0FDWjtBQUNDQyxXQUFLLEVBQUUsQ0FBQyxHQUFELEVBQU0sQ0FBQyxDQUFDLFNBQUQsRUFBWSxDQUFDLE1BQUQsQ0FBWixDQUFELEVBQXdCLENBQXhCLENBQU4sQ0FEUjtBQUVDQyxTQUFHLEVBQUU7QUFGTixLQURZO0FBSmQsR0FEVyxFQVlYO0FBQ0NKLE9BQUcsRUFBRSxLQUROO0FBRUNDLFNBQUssRUFBRSxLQUZSO0FBR0NILFFBQUksRUFBRTtBQUhQLEdBWlcsRUFpQlg7QUFDQ0UsT0FBRyxFQUFFLFVBRE47QUFFQ0YsUUFBSSxFQUFFLFFBRlA7QUFHQ0csU0FBSyxFQUFFLFVBSFI7QUFJQ0MsZUFBVyxFQUFFLENBQ1o7QUFDQ0MsV0FBSyxFQUFFLENBQUMsSUFBRCxFQUFPLENBQUMsQ0FBRCxFQUFJLENBQUMsU0FBRCxFQUFZLENBQUMsTUFBRCxDQUFaLENBQUosRUFBMkIsRUFBM0IsQ0FBUCxDQURSO0FBRUNDLFNBQUcsRUFDRjtBQUhGLEtBRFk7QUFKZCxHQWpCVyxFQTZCWDtBQUNDSixPQUFHLEVBQUUsYUFETjtBQUVDRixRQUFJLEVBQUUsUUFGUDtBQUdDRyxTQUFLLEVBQUUsa0JBSFI7QUFJQ0MsZUFBVyxFQUFFLENBQ1o7QUFDQ0MsV0FBSyxFQUFFLENBQUMsS0FBRCxFQUFRLENBQUMsQ0FBQyxNQUFELENBQUQsRUFBVyxDQUFDLEtBQUQsRUFBUSxDQUFDLE9BQUQsRUFBVSxVQUFWLENBQVIsQ0FBWCxDQUFSLENBRFI7QUFFQ0MsU0FBRyxFQUFFO0FBRk4sS0FEWTtBQUpkLEdBN0JXLEVBd0NYO0FBQ0NKLE9BQUcsRUFBRSxRQUROO0FBRUNGLFFBQUksRUFBRSxNQUZQO0FBR0NPLFNBQUssRUFBRSxDQUFDO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQUQsRUFBb0I7QUFBRUEsV0FBSyxFQUFFO0FBQVQsS0FBcEIsQ0FIUjtBQUlDTCxTQUFLLEVBQUU7QUFKUixHQXhDVyxFQThDWDtBQUNDRCxPQUFHLEVBQUUsWUFETjtBQUVDRixRQUFJLEVBQUUsU0FGUDtBQUdDRyxTQUFLLEVBQUUsbUJBSFI7QUFJQ0MsZUFBVyxFQUFFLENBQ1o7QUFDQ0MsV0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLENBQUMsTUFBRCxDQUFULEVBQW1CLENBQUMsSUFBRCxFQUFPLEtBQVAsQ0FBbkIsQ0FEUjtBQUVDQyxTQUFHLEVBQUU7QUFGTixLQURZO0FBSmQsR0E5Q1csRUF5RFg7QUFDQ04sUUFBSSxFQUFFLElBRFA7QUFFQ1MsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLENBQUMsT0FBRCxFQUFVLFlBQVYsQ0FBUixDQUZQO0FBR0MsWUFBTSxDQUNMO0FBQ0NQLFNBQUcsRUFBRSxLQUROO0FBRUNDLFdBQUssRUFBRSxxQkFGUjtBQUdDSCxVQUFJLEVBQUU7QUFIUCxLQURLO0FBSFAsR0F6RFc7QUFGaUIsQ0FBOUI7QUF3RWUsU0FBU1UsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNKQyxzREFBUSxDQUFDO0FBQ2xDQyxRQUFJLEVBQUU7QUFENEIsR0FBRCxDQURKO0FBQUEsTUFDdkJKLEtBRHVCO0FBQUEsTUFDaEJLLFFBRGdCOztBQUk5QixTQUNDO0FBQUE7QUFBQTtBQUFBLHV4SEFRQztBQUNDLE9BQUcsRUFBQyxpQkFETDtBQUFBLHdDQUVXLCtCQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRCxFQVlDO0FBQUEsd0NBQWUsZ0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFUCxTQUFLLEVBQUxBO0FBQUYsR0FBZixFQUEwQixJQUExQixFQUFnQyxHQUFoQyxDQUFOLENBRkQsRUFHQyxNQUFDLFVBQUQ7QUFDQyxVQUFNLEVBQUVULFVBRFQ7QUFFQyxTQUFLLEVBQUVTLEtBRlI7QUFHQyxZQUFRLEVBQUVLLFFBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELENBWkQsQ0FERDtBQXdCQTs7R0E1QnVCSCxJOztNQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvZGVtby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXR1cEZsb3dKViB9IGZyb20gXCJmbG93anYtcmVhY3RcIjtcbmltcG9ydCB7IElKU09ORmxvdyB9IGZyb20gXCJmbG93anZcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZsb3dKVkZvcm0gPSBzZXR1cEZsb3dKVigpO1xuY29uc3QgZmxvd1NjaGVtYTogSUpTT05GbG93ID0ge1xuXHR0eXBlOiBcIm9iamVjdFwiLFxuXHRwcm9wZXJ0aWVzOiBbXG5cdFx0e1xuXHRcdFx0a2V5OiBcIm5hbWVcIixcblx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRsYWJlbDogXCJOYW1lXCIsXG5cdFx0XHR2YWxpZGF0aW9uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bG9naWM6IFtcIj5cIiwgW1tcInN0cjpsZW5cIiwgW1wiJHJlZlwiXV0sIDVdXSxcblx0XHRcdFx0XHRlcnI6IFwiU3RyaW5nIGxlbmd0aCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIDRcIixcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXk6IFwiYWdlXCIsXG5cdFx0XHRsYWJlbDogXCJBZ2VcIixcblx0XHRcdHR5cGU6IFwibnVtYmVyXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXk6IFwicGFzc3dvcmRcIixcblx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRsYWJlbDogXCJQYXNzd29yZFwiLFxuXHRcdFx0dmFsaWRhdGlvbnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxvZ2ljOiBbXCI8PVwiLCBbNSwgW1wic3RyOmxlblwiLCBbXCIkcmVmXCJdXSwgMjBdXSxcblx0XHRcdFx0XHRlcnI6XG5cdFx0XHRcdFx0XHRcIlBhc3N3b3JkIGxlbmd0aCBzaG91bGQgYmUgYmV0d2VlbiA1IGFuZCAyMCBjaGFyYWN0ZXJzLlwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleTogXCJjbmZQYXNzd29yZFwiLFxuXHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdGxhYmVsOiBcIkNvbmZpcm0gUGFzc3dvcmRcIixcblx0XHRcdHZhbGlkYXRpb25zOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsb2dpYzogW1wiPT09XCIsIFtbXCIkcmVmXCJdLCBbXCJ2YXJcIiwgW1wiJGRhdGFcIiwgXCJwYXNzd29yZFwiXV1dXSxcblx0XHRcdFx0XHRlcnI6IFwiQ29uZmlybSBwYXNzd29yZCBzaG91bGQgbWF0Y2ggcGFzc3dvcmQuXCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5OiBcImdlbmRlclwiLFxuXHRcdFx0dHlwZTogXCJlbnVtXCIsXG5cdFx0XHRpdGVtczogW3sgdmFsdWU6IFwibWFsZVwiIH0sIHsgdmFsdWU6IFwiZmVtYWxlXCIgfV0sXG5cdFx0XHRsYWJlbDogXCJHZW5kZXJcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleTogXCJpc0VtcGxveWVkXCIsXG5cdFx0XHR0eXBlOiBcImJvb2xlYW5cIixcblx0XHRcdGxhYmVsOiBcIkFyZSB5b3UgRW1wbG95ZWQ/XCIsXG5cdFx0XHR2YWxpZGF0aW9uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bG9naWM6IFtcImVudW1cIiwgW1wiJHJlZlwiXSwgW3RydWUsIGZhbHNlXV0sXG5cdFx0XHRcdFx0ZXJyOiBcIlNob3VsZCBiZSBhIGJvb2xlYW5cIixcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0eXBlOiBcImlmXCIsXG5cdFx0XHRjb25kOiBbXCJ2YXJcIiwgW1wiJGRhdGFcIiwgXCJpc0VtcGxveWVkXCJdXSxcblx0XHRcdHRydWU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGtleTogXCJ5b2VcIixcblx0XHRcdFx0XHRsYWJlbDogXCJZZWFycyBvZiBFeHBlcmllbmNlXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJudW1iZXJcIixcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XSxcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHtcblx0XHRuYW1lOiBcIktpc2hvcmVcIixcblx0fSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxzdHlsZSBnbG9iYWwganN4PlxuXHRcdFx0XHR7YFxuXHRcdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PGltZ1xuXHRcdFx0XHRzcmM9XCJsb2dvLXNxdWFyZS5zdmdcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJoLTIwIGJsb2NrIG14LWF1dG8gdy0xNiBtdC0xNlwiXG5cdFx0XHQvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zbSBteC1hdXRvIHctZnVsbCBiZy13aGl0ZSBwLTUgc2hhZG93LW1kXCI+XG5cdFx0XHRcdDxoMj5SZWdpc3RyYXRpb24gRGV0YWlsczwvaDI+XG5cdFx0XHRcdDxwcmU+e0pTT04uc3RyaW5naWZ5KHsgdmFsdWUgfSwgbnVsbCwgXCIgXCIpfTwvcHJlPlxuXHRcdFx0XHQ8Rmxvd0pWRm9ybVxuXHRcdFx0XHRcdHNjaGVtYT17Zmxvd1NjaGVtYX1cblx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3NldFZhbHVlfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/demo.tsx\n");

/***/ })

})