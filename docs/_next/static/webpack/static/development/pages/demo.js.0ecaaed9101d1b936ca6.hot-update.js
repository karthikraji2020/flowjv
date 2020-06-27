webpackHotUpdate("static/development/pages/demo.js",{

/***/ "../flowjv-react/dist/bindings/form/index.js":
/*!***************************************************!*\
  !*** ../flowjv-react/dist/bindings/form/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setupFlowJV = exports.formContext = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\nvar flowjv_1 = __webpack_require__(/*! flowjv */ \"../flowjv/dist/index.js\");\nvar utils_1 = __webpack_require__(/*! ./utils */ \"../flowjv-react/dist/bindings/form/utils.js\");\nvar flowjv_2 = __webpack_require__(/*! flowjv */ \"../flowjv/dist/index.js\");\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"../../node_modules/classnames/index.js\"));\nvar debounce_1 = __importDefault(__webpack_require__(/*! lodash/debounce */ \"../../node_modules/lodash/debounce.js\"));\nexports.formContext = react_1.default.createContext({});\nexports.setupFlowJV = function (Config) {\n    return /** @class */ (function (_super) {\n        __extends(class_1, _super);\n        function class_1(props) {\n            var _this = _super.call(this, props) || this;\n            _this.refSet = new Set();\n            _this.getValue = function (key) {\n                if (key === void 0) { key = \"\"; }\n                if (_this.props.value) {\n                    return utils_1.gett(_this.props.value, key);\n                }\n                return utils_1.gett(_this.state.value, key);\n            };\n            _this.setValue = function (key, value) {\n                var _a, _b;\n                if (_this.props.value) {\n                    var newvalue_1 = utils_1.sett(_this.props.value, key, value);\n                    (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, {\n                        value: newvalue_1,\n                        isValid: _this.state.isValid,\n                    });\n                    _this.validate(newvalue_1, function () {\n                        var _a, _b;\n                        (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, {\n                            value: newvalue_1,\n                            isValid: _this.state.isValid,\n                        });\n                    });\n                }\n                else {\n                    var newvalue_2 = utils_1.sett(_this.state.value, key, value);\n                    _this.setState({\n                        value: newvalue_2,\n                    });\n                    _this.validate(_this.state.value, function () { var _a, _b; return (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, {\n                        value: newvalue_2,\n                        isValid: _this.state.isValid,\n                    }); });\n                }\n            };\n            _this.unsetValue = function (key) { return function () {\n                var _a, _b;\n                if (_this.props.value) {\n                    (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, {\n                        value: utils_1.unsett(_this.props.value, key),\n                        isValid: _this.state.isValid,\n                    });\n                }\n                else {\n                    _this.setState({\n                        value: utils_1.unsett(_this.state.value, key),\n                    });\n                }\n            }; };\n            _this.setTouch = function (refPath) {\n                _this.refSet.add(refPath);\n                return function () {\n                    if (!_this.state.touchMap[refPath]) {\n                        _this.setState(function (state) {\n                            var _a;\n                            return ({\n                                touchMap: __assign(__assign({}, state.touchMap), (_a = {}, _a[refPath] = true, _a)),\n                            });\n                        });\n                        _this.validate(_this.props.value ? _this.props.value : _this.state.value);\n                    }\n                };\n            };\n            _this.touchAll = function () {\n                _this.setState({\n                    touchMap: Array.from(_this.refSet).reduce(function (agg, v) {\n                        var _a;\n                        return (__assign(__assign({}, agg), (_a = {}, _a[v] = true, _a)));\n                    }, {}),\n                });\n            };\n            _this.validate = function (value, func) {\n                var result = flowjv_1.validateJSONFlow(_this.props.schema, {\n                    context: _this.props.context,\n                    data: value,\n                    options: { aggressive: true, enforceSchema: true },\n                });\n                if (!result.isValid) {\n                    var errorMap = result.errors.reduce(function (agg, v) {\n                        var _a;\n                        return (__assign(__assign({}, agg), (_a = {}, _a[v.refPath.join(\".\")] = v.msgs, _a)));\n                    }, {});\n                    _this.setState({\n                        isValid: false,\n                        errorMap: errorMap,\n                    }, func);\n                }\n                else {\n                    _this.setState({\n                        isValid: true,\n                        errorMap: {},\n                    }, func);\n                }\n            };\n            _this.getContext = function () {\n                return {\n                    data: _this.getValue(),\n                    context: _this.props.context,\n                    schema: _this.props.schema,\n                };\n            };\n            _this.getRefPathValue = function (refPath) {\n                var value;\n                if (_this.props.value) {\n                    value = utils_1.gett(_this.props.value, refPath);\n                }\n                else {\n                    value = utils_1.gett(_this.state.value, refPath);\n                }\n                var isTouched = _this.state.touchMap[refPath];\n                var errors = _this.state.errorMap[refPath] || [];\n                return {\n                    value: value,\n                    errors: isTouched ? errors : [],\n                    success: isTouched ? errors.length === 0 : false,\n                };\n            };\n            _this.renderAtom = function (ref) {\n                var refPath = ref.join(\".\");\n                var schema = flowjv_2.lookup.atom(_this.props.schema, ref);\n                if (schema === null)\n                    return null;\n                var _a = _this.getRefPathValue(refPath), errors = _a.errors, success = _a.success, value = _a.value;\n                return (react_1.default.createElement(Config, { key: refPath, schema: schema, ui: {\n                        className: \"pt-3\",\n                        label: schema.label,\n                        errors: errors,\n                        success: success,\n                        value: value,\n                        onChange: function (v) {\n                            if (schema.type === \"number\")\n                                v = +v;\n                            _this.setValue(refPath, v);\n                        },\n                        setTouch: _this.setTouch(refPath),\n                    } }));\n            };\n            _this.renderBlockBySchema = function (schema, ref) {\n                var refPath = ref.join(\".\");\n                switch (schema.type) {\n                    case \"if\": {\n                        var cond = !!flowjv_1.execJSONExpression(schema.cond, {\n                            data: _this.getValue(),\n                            context: _this.props.context,\n                            ref: _this.getValue(refPath),\n                        });\n                        var flow = cond ? schema.true : schema.false;\n                        return (react_1.default.createElement(Config, { key: refPath + \"$if\", schema: { type: \"conditionWrapper\", animKey: \"if\" }, ui: {\n                                errors: [],\n                                success: false,\n                            } }, flow &&\n                            _this.renderFlow({\n                                type: \"object\",\n                                properties: flow,\n                            }, ref)));\n                    }\n                    case \"switch\": {\n                        var cond = flowjv_1.execJSONExpression(schema.cond, {\n                            data: _this.getValue(),\n                            context: _this.props.context,\n                            ref: _this.getValue(ref.join(\".\")),\n                        });\n                        var flow = schema.cases[cond];\n                        return (react_1.default.createElement(Config, { key: refPath + \".$case\", schema: { type: \"conditionWrapper\", animKey: cond }, ui: {\n                                errors: [],\n                                success: false,\n                            } }, flow &&\n                            _this.renderFlow({ type: \"object\", properties: flow }, ref)));\n                    }\n                }\n                return null;\n            };\n            _this.renderBlockById = function (blockId) {\n                var _a = flowjv_2.lookup.block(_this.props.schema, blockId), block = _a.block, ref = _a.ref;\n                if (!block) {\n                    return null;\n                }\n                return _this.renderBlockBySchema(block, ref);\n            };\n            _this.renderFlow = function (schema, ref) {\n                var _a;\n                switch (schema.type) {\n                    case \"object\": {\n                        // Loop over all the elements.\n                        return schema.properties.map(function (objconfig) {\n                            switch (objconfig.type) {\n                                case \"if\":\n                                case \"switch\": {\n                                    return _this.renderBlockBySchema(objconfig, ref);\n                                }\n                                default: {\n                                    return _this.renderFlow(objconfig, __spreadArrays(ref, [\n                                        objconfig.key,\n                                    ]));\n                                }\n                            }\n                        });\n                    }\n                }\n                var refPath = ref.join(\".\");\n                switch (schema.type) {\n                    case \"enum\":\n                    case \"boolean\":\n                    case \"number\":\n                    case \"string\": {\n                        var render = (_a = _this.props.renderMap) === null || _a === void 0 ? void 0 : _a[refPath];\n                        if (render) {\n                            var _b = _this.getRefPathValue(refPath), errors = _b.errors, success = _b.success, value = _b.value;\n                            return render({\n                                errors: errors,\n                                success: success,\n                                value: value,\n                                onChange: function (v) { return _this.setValue(refPath, v); },\n                                setTouch: function () { return _this.setTouch(refPath); },\n                            });\n                        }\n                        return _this.renderAtom(ref);\n                    }\n                }\n            };\n            _this.state = {\n                value: _this.props.defaultValue,\n                isValid: false,\n                touchMap: {},\n                errorMap: {},\n            };\n            _this.validate = debounce_1.default(_this.validate, 300, {\n                trailing: true,\n                leading: true,\n            });\n            return _this;\n        }\n        class_1.prototype.componentDidMount = function () {\n            var _this = this;\n            this.validate(this.getValue(), function () {\n                var _a, _b;\n                (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, {\n                    value: _this.getValue(),\n                    isValid: _this.state.isValid,\n                });\n            });\n        };\n        class_1.prototype.render = function () {\n            var _this = this;\n            var _a = this.props, className = _a.className, schema = _a.schema, children = _a.children, theme = _a.theme;\n            return (react_1.default.createElement(exports.formContext.Provider, { value: {\n                    renderAtom: this.renderAtom,\n                    renderBlockById: this.renderBlockById,\n                    getValue: this.getRefPathValue,\n                    getContext: this.getContext,\n                    setValue: this.setValue,\n                    setTouch: this.setTouch,\n                } },\n                react_1.default.createElement(\"form\", { className: classnames_1.default(className, theme, \"fjv-form\"), onSubmit: function (e) {\n                        e.preventDefault();\n                        _this.touchAll();\n                        var value = _this.getValue();\n                        _this.validate(value, function () {\n                            var _a, _b;\n                            (_b = (_a = _this.props).onSubmit) === null || _b === void 0 ? void 0 : _b.call(_a, {\n                                value: value,\n                                isValid: _this.state.isValid,\n                            });\n                        });\n                    } },\n                    this.props.prepend,\n                    children ? null : this.renderFlow(schema, []),\n                    this.props.append)));\n        };\n        return class_1;\n    }(react_1.default.Component));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vZmxvd2p2LXJlYWN0L2Rpc3QvYmluZGluZ3MvZm9ybS9pbmRleC5qcz9mNWFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxRQUFRO0FBQ3pELHdDQUF3QyxRQUFRO0FBQ2hELHdEQUF3RCxRQUFRO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSw4QkFBOEIsbUJBQU8sQ0FBQyxnREFBTztBQUM3QyxlQUFlLG1CQUFPLENBQUMsdUNBQVE7QUFDL0IsY0FBYyxtQkFBTyxDQUFDLDREQUFTO0FBQy9CLGVBQWUsbUJBQU8sQ0FBQyx1Q0FBUTtBQUMvQixtQ0FBbUMsbUJBQU8sQ0FBQywwREFBWTtBQUN2RCxpQ0FBaUMsbUJBQU8sQ0FBQyw4REFBaUI7QUFDMUQsc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFVBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsbUVBQW1FLFlBQVk7QUFDL0U7QUFDQTtBQUNBLHFCQUFxQixFQUFFLEVBQUU7QUFDekI7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELDJCQUEyQjtBQUN6Riw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsZ0JBQWdCO0FBQ3BFLHFCQUFxQixJQUFJO0FBQ3pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdDQUF3QztBQUN0RSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGdCQUFnQjtBQUNwRSxxQkFBcUIsSUFBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQixFQUFFO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHVFQUF1RSxnQ0FBZ0MsMENBQTBDO0FBQ2pKO0FBQ0E7QUFDQSw2QkFBNkIsRUFBRTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsdUVBQXVFLG1DQUFtQywwQ0FBMEM7QUFDcEo7QUFDQTtBQUNBLDZCQUE2QixFQUFFO0FBQy9CLDhDQUE4QyxtQ0FBbUM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELG1DQUFtQyxFQUFFO0FBQzdGLHVEQUF1RCxnQ0FBZ0MsRUFBRTtBQUN6Riw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQix1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIscUJBQXFCLEVBQUU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiIuLi9mbG93anYtcmVhY3QvZGlzdC9iaW5kaW5ncy9mb3JtL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2V0dXBGbG93SlYgPSBleHBvcnRzLmZvcm1Db250ZXh0ID0gdm9pZCAwO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBmbG93anZfMSA9IHJlcXVpcmUoXCJmbG93anZcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xudmFyIGZsb3dqdl8yID0gcmVxdWlyZShcImZsb3dqdlwiKTtcbnZhciBjbGFzc25hbWVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xudmFyIGRlYm91bmNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvZGFzaC9kZWJvdW5jZVwiKSk7XG5leHBvcnRzLmZvcm1Db250ZXh0ID0gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe30pO1xuZXhwb3J0cy5zZXR1cEZsb3dKViA9IGZ1bmN0aW9uIChDb25maWcpIHtcbiAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoY2xhc3NfMSwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gY2xhc3NfMShwcm9wcykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgICAgICBfdGhpcy5yZWZTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBfdGhpcy5nZXRWYWx1ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSB2b2lkIDApIHsga2V5ID0gXCJcIjsgfVxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHNfMS5nZXR0KF90aGlzLnByb3BzLnZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHNfMS5nZXR0KF90aGlzLnN0YXRlLnZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF90aGlzLnNldFZhbHVlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3dmFsdWVfMSA9IHV0aWxzXzEuc2V0dChfdGhpcy5wcm9wcy52YWx1ZSwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IF90aGlzLnByb3BzKS5vbkNoYW5nZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXd2YWx1ZV8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogX3RoaXMuc3RhdGUuaXNWYWxpZCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnZhbGlkYXRlKG5ld3ZhbHVlXzEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSBfdGhpcy5wcm9wcykub25DaGFuZ2UpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ld3ZhbHVlXzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogX3RoaXMuc3RhdGUuaXNWYWxpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXd2YWx1ZV8yID0gdXRpbHNfMS5zZXR0KF90aGlzLnN0YXRlLnZhbHVlLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ld3ZhbHVlXzIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy52YWxpZGF0ZShfdGhpcy5zdGF0ZS52YWx1ZSwgZnVuY3Rpb24gKCkgeyB2YXIgX2EsIF9iOyByZXR1cm4gKF9iID0gKF9hID0gX3RoaXMucHJvcHMpLm9uQ2hhbmdlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ld3ZhbHVlXzIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiBfdGhpcy5zdGF0ZS5pc1ZhbGlkLFxuICAgICAgICAgICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF90aGlzLnVuc2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gKF9hID0gX3RoaXMucHJvcHMpLm9uQ2hhbmdlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHV0aWxzXzEudW5zZXR0KF90aGlzLnByb3BzLnZhbHVlLCBrZXkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogX3RoaXMuc3RhdGUuaXNWYWxpZCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdXRpbHNfMS51bnNldHQoX3RoaXMuc3RhdGUudmFsdWUsIGtleSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07IH07XG4gICAgICAgICAgICBfdGhpcy5zZXRUb3VjaCA9IGZ1bmN0aW9uIChyZWZQYXRoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVmU2V0LmFkZChyZWZQYXRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLnN0YXRlLnRvdWNoTWFwW3JlZlBhdGhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTWFwOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc3RhdGUudG91Y2hNYXApLCAoX2EgPSB7fSwgX2FbcmVmUGF0aF0gPSB0cnVlLCBfYSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy52YWxpZGF0ZShfdGhpcy5wcm9wcy52YWx1ZSA/IF90aGlzLnByb3BzLnZhbHVlIDogX3RoaXMuc3RhdGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy50b3VjaEFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoTWFwOiBBcnJheS5mcm9tKF90aGlzLnJlZlNldCkucmVkdWNlKGZ1bmN0aW9uIChhZ2csIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoX19hc3NpZ24oX19hc3NpZ24oe30sIGFnZyksIChfYSA9IHt9LCBfYVt2XSA9IHRydWUsIF9hKSkpO1xuICAgICAgICAgICAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAodmFsdWUsIGZ1bmMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZmxvd2p2XzEudmFsaWRhdGVKU09ORmxvdyhfdGhpcy5wcm9wcy5zY2hlbWEsIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogX3RoaXMucHJvcHMuY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHsgYWdncmVzc2l2ZTogdHJ1ZSwgZW5mb3JjZVNjaGVtYTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yTWFwID0gcmVzdWx0LmVycm9ycy5yZWR1Y2UoZnVuY3Rpb24gKGFnZywgdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYWdnKSwgKF9hID0ge30sIF9hW3YucmVmUGF0aC5qb2luKFwiLlwiKV0gPSB2Lm1zZ3MsIF9hKSkpO1xuICAgICAgICAgICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNYXA6IGVycm9yTWFwLFxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1hcDoge30sXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy5nZXRDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IF90aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IF90aGlzLnByb3BzLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYTogX3RoaXMucHJvcHMuc2NoZW1hLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMuZ2V0UmVmUGF0aFZhbHVlID0gZnVuY3Rpb24gKHJlZlBhdGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdXRpbHNfMS5nZXR0KF90aGlzLnByb3BzLnZhbHVlLCByZWZQYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdXRpbHNfMS5nZXR0KF90aGlzLnN0YXRlLnZhbHVlLCByZWZQYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGlzVG91Y2hlZCA9IF90aGlzLnN0YXRlLnRvdWNoTWFwW3JlZlBhdGhdO1xuICAgICAgICAgICAgICAgIHZhciBlcnJvcnMgPSBfdGhpcy5zdGF0ZS5lcnJvck1hcFtyZWZQYXRoXSB8fCBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yczogaXNUb3VjaGVkID8gZXJyb3JzIDogW10sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGlzVG91Y2hlZCA/IGVycm9ycy5sZW5ndGggPT09IDAgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF90aGlzLnJlbmRlckF0b20gPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZlBhdGggPSByZWYuam9pbihcIi5cIik7XG4gICAgICAgICAgICAgICAgdmFyIHNjaGVtYSA9IGZsb3dqdl8yLmxvb2t1cC5hdG9tKF90aGlzLnByb3BzLnNjaGVtYSwgcmVmKTtcbiAgICAgICAgICAgICAgICBpZiAoc2NoZW1hID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5nZXRSZWZQYXRoVmFsdWUocmVmUGF0aCksIGVycm9ycyA9IF9hLmVycm9ycywgc3VjY2VzcyA9IF9hLnN1Y2Nlc3MsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb25maWcsIHsga2V5OiByZWZQYXRoLCBzY2hlbWE6IHNjaGVtYSwgdWk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJwdC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc2NoZW1hLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBlcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gK3Y7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0VmFsdWUocmVmUGF0aCwgdik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2g6IF90aGlzLnNldFRvdWNoKHJlZlBhdGgpLFxuICAgICAgICAgICAgICAgICAgICB9IH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy5yZW5kZXJCbG9ja0J5U2NoZW1hID0gZnVuY3Rpb24gKHNjaGVtYSwgcmVmKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZlBhdGggPSByZWYuam9pbihcIi5cIik7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaWZcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmQgPSAhIWZsb3dqdl8xLmV4ZWNKU09ORXhwcmVzc2lvbihzY2hlbWEuY29uZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF90aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogX3RoaXMucHJvcHMuY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IF90aGlzLmdldFZhbHVlKHJlZlBhdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmxvdyA9IGNvbmQgPyBzY2hlbWEudHJ1ZSA6IHNjaGVtYS5mYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29uZmlnLCB7IGtleTogcmVmUGF0aCArIFwiJGlmXCIsIHNjaGVtYTogeyB0eXBlOiBcImNvbmRpdGlvbldyYXBwZXJcIiwgYW5pbUtleTogXCJpZlwiIH0sIHVpOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgZmxvdyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlbmRlckZsb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBmbG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJlZikpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3dpdGNoXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25kID0gZmxvd2p2XzEuZXhlY0pTT05FeHByZXNzaW9uKHNjaGVtYS5jb25kLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3RoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBfdGhpcy5wcm9wcy5jb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogX3RoaXMuZ2V0VmFsdWUocmVmLmpvaW4oXCIuXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZsb3cgPSBzY2hlbWEuY2FzZXNbY29uZF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbmZpZywgeyBrZXk6IHJlZlBhdGggKyBcIi4kY2FzZVwiLCBzY2hlbWE6IHsgdHlwZTogXCJjb25kaXRpb25XcmFwcGVyXCIsIGFuaW1LZXk6IGNvbmQgfSwgdWk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCBmbG93ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVuZGVyRmxvdyh7IHR5cGU6IFwib2JqZWN0XCIsIHByb3BlcnRpZXM6IGZsb3cgfSwgcmVmKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF90aGlzLnJlbmRlckJsb2NrQnlJZCA9IGZ1bmN0aW9uIChibG9ja0lkKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hID0gZmxvd2p2XzIubG9va3VwLmJsb2NrKF90aGlzLnByb3BzLnNjaGVtYSwgYmxvY2tJZCksIGJsb2NrID0gX2EuYmxvY2ssIHJlZiA9IF9hLnJlZjtcbiAgICAgICAgICAgICAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVuZGVyQmxvY2tCeVNjaGVtYShibG9jaywgcmVmKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy5yZW5kZXJGbG93ID0gZnVuY3Rpb24gKHNjaGVtYSwgcmVmKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm9iamVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMb29wIG92ZXIgYWxsIHRoZSBlbGVtZW50cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzY2hlbWEucHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKG9iamNvbmZpZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAob2JqY29uZmlnLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlmXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzd2l0Y2hcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlbmRlckJsb2NrQnlTY2hlbWEob2JqY29uZmlnLCByZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZW5kZXJGbG93KG9iamNvbmZpZywgX19zcHJlYWRBcnJheXMocmVmLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqY29uZmlnLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByZWZQYXRoID0gcmVmLmpvaW4oXCIuXCIpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVudW1cIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW5kZXIgPSAoX2EgPSBfdGhpcy5wcm9wcy5yZW5kZXJNYXApID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtyZWZQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW5kZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2IgPSBfdGhpcy5nZXRSZWZQYXRoVmFsdWUocmVmUGF0aCksIGVycm9ycyA9IF9iLmVycm9ycywgc3VjY2VzcyA9IF9iLnN1Y2Nlc3MsIHZhbHVlID0gX2IudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAodikgeyByZXR1cm4gX3RoaXMuc2V0VmFsdWUocmVmUGF0aCwgdik7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvdWNoOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zZXRUb3VjaChyZWZQYXRoKTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZW5kZXJBdG9tKHJlZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF90aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0b3VjaE1hcDoge30sXG4gICAgICAgICAgICAgICAgZXJyb3JNYXA6IHt9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF90aGlzLnZhbGlkYXRlID0gZGVib3VuY2VfMS5kZWZhdWx0KF90aGlzLnZhbGlkYXRlLCAzMDAsIHtcbiAgICAgICAgICAgICAgICB0cmFpbGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsZWFkaW5nOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSh0aGlzLmdldFZhbHVlKCksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IF90aGlzLnByb3BzKS5vbkNoYW5nZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF90aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IF90aGlzLnN0YXRlLmlzVmFsaWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgc2NoZW1hID0gX2Euc2NoZW1hLCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCB0aGVtZSA9IF9hLnRoZW1lO1xuICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChleHBvcnRzLmZvcm1Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckF0b206IHRoaXMucmVuZGVyQXRvbSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQmxvY2tCeUlkOiB0aGlzLnJlbmRlckJsb2NrQnlJZCxcbiAgICAgICAgICAgICAgICAgICAgZ2V0VmFsdWU6IHRoaXMuZ2V0UmVmUGF0aFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBnZXRDb250ZXh0OiB0aGlzLmdldENvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlOiB0aGlzLnNldFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaDogdGhpcy5zZXRUb3VjaCxcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgY2xhc3NOYW1lOiBjbGFzc25hbWVzXzEuZGVmYXVsdChjbGFzc05hbWUsIHRoZW1lLCBcImZqdi1mb3JtXCIpLCBvblN1Ym1pdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRvdWNoQWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBfdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudmFsaWRhdGUodmFsdWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IF90aGlzLnByb3BzKS5vblN1Ym1pdCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiBfdGhpcy5zdGF0ZS5pc1ZhbGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVwZW5kLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbiA/IG51bGwgOiB0aGlzLnJlbmRlckZsb3coc2NoZW1hLCBbXSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwZW5kKSkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY2xhc3NfMTtcbiAgICB9KHJlYWN0XzEuZGVmYXVsdC5Db21wb25lbnQpKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../flowjv-react/dist/bindings/form/index.js\n");

/***/ })

})