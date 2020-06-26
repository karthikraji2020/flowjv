webpackHotUpdate("static/development/pages/demo.js",{

/***/ "../flowjv/dist/jsonflow/blocks/object.js":
/*!************************************************!*\
  !*** ../flowjv/dist/jsonflow/blocks/object.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __values = (this && this.__values) || function(o) {\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\n    if (m) return m.call(o);\n    if (o && typeof o.length === \"number\") return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\n};\nvar __read = (this && this.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nvar __spread = (this && this.__spread) || function () {\n    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));\n    return ar;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.execObjectFlow = void 0;\nvar jsonlogic_1 = __webpack_require__(/*! ../../jsonlogic */ \"../flowjv/dist/jsonlogic/index.js\");\nvar get_1 = __importDefault(__webpack_require__(/*! lodash/get */ \"../../node_modules/lodash/get.js\"));\nvar unset_1 = __importDefault(__webpack_require__(/*! lodash/unset */ \"../../node_modules/lodash/unset.js\"));\nvar flowatoms_1 = __webpack_require__(/*! ./flowatoms */ \"../flowjv/dist/jsonflow/blocks/flowatoms/index.js\");\nexports.execObjectFlow = function (flow, data, flowContext, options) {\n    var e_1, _a;\n    var _b;\n    var properties = flow.properties;\n    var errorStore = { errors: [], isValid: true };\n    try {\n        for (var properties_1 = __values(properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {\n            var config = properties_1_1.value;\n            if (config.type === \"switch\") {\n                var cond = jsonlogic_1.execJSONExpression(config.cond, data);\n                var flow_1 = config.cases[cond];\n                if (flow_1) {\n                    var result = exports.execObjectFlow({ type: \"object\", properties: flow_1 }, data, flowContext, options);\n                    if (!result.isValid) {\n                        if (options === null || options === void 0 ? void 0 : options.aggressive) {\n                            errorStore = {\n                                isValid: false,\n                                errors: __spread(errorStore.errors, result.errors),\n                            };\n                        }\n                        else {\n                            return result;\n                        }\n                    }\n                }\n                continue;\n            }\n            if (config.type === \"if\") {\n                var cond = !!jsonlogic_1.execJSONExpression(config.cond, data);\n                if (options === null || options === void 0 ? void 0 : options.enforceSchema) {\n                    if (cond) {\n                        // delete false fields.\n                        (_b = config.false) === null || _b === void 0 ? void 0 : _b.forEach(function (v) {\n                            unset_1.default(data.data, __spread(flowContext.refPath, [v.key]).join(\".\"));\n                        });\n                    }\n                    else {\n                        // delete true fields.\n                        config.true.forEach(function (v) {\n                            unset_1.default(data.data, __spread(flowContext.refPath, [v.key]).join(\".\"));\n                        });\n                    }\n                }\n                var flow_2 = cond ? config.true : config.false;\n                if (flow_2) {\n                    var result = exports.execObjectFlow({ type: \"object\", properties: flow_2 }, data, flowContext, options);\n                    if (!result.isValid) {\n                        if (options === null || options === void 0 ? void 0 : options.aggressive) {\n                            errorStore = {\n                                isValid: false,\n                                errors: __spread(errorStore.errors, result.errors),\n                            };\n                        }\n                        else {\n                            return result;\n                        }\n                    }\n                }\n                continue;\n            }\n            var ignoreKey = config.ignoreKey, key = config.key;\n            if (ignoreKey) {\n                var ignore = !!jsonlogic_1.execJSONExpression(ignoreKey, data);\n                if (ignore)\n                    continue;\n            }\n            var refPath = __spread(flowContext.refPath, [key]);\n            switch (config.type) {\n                case \"object\": {\n                    return exports.execObjectFlow(config, data, __assign(__assign({}, flowContext), { refPath: refPath }));\n                }\n                // Default specifies a primitive value type!\n                default: {\n                    var result = flowatoms_1.execPrimitiveFlow(config, __assign(__assign({}, data), { ref: get_1.default(data.data, key) }), __assign(__assign({}, flowContext), { refPath: refPath }));\n                    if (!result.isValid) {\n                        if (options === null || options === void 0 ? void 0 : options.aggressive) {\n                            // If aggressive, collect all errors!\n                            errorStore = {\n                                isValid: false,\n                                errors: __spread(errorStore.errors, result.errors),\n                            };\n                            continue;\n                        }\n                        return result;\n                    }\n                    break;\n                }\n            }\n        }\n    }\n    catch (e_1_1) { e_1 = { error: e_1_1 }; }\n    finally {\n        try {\n            if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return)) _a.call(properties_1);\n        }\n        finally { if (e_1) throw e_1.error; }\n    }\n    return errorStore;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vZmxvd2p2L2Rpc3QvanNvbmZsb3cvYmxvY2tzL29iamVjdC5qcz82MzFmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsMERBQWlCO0FBQzNDLDRCQUE0QixtQkFBTyxDQUFDLG9EQUFZO0FBQ2hELDhCQUE4QixtQkFBTyxDQUFDLHdEQUFjO0FBQ3BELGtCQUFrQixtQkFBTyxDQUFDLHNFQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsMkZBQTJGLHNCQUFzQjtBQUNqSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELHFDQUFxQztBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxxQ0FBcUM7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRixpQkFBaUIsbUJBQW1CO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixVQUFVLHFDQUFxQyx1QkFBdUIsaUJBQWlCLG1CQUFtQjtBQUNyTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBIiwiZmlsZSI6Ii4uL2Zsb3dqdi9kaXN0L2pzb25mbG93L2Jsb2Nrcy9vYmplY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX19zcHJlYWQgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgICByZXR1cm4gYXI7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5leGVjT2JqZWN0RmxvdyA9IHZvaWQgMDtcbnZhciBqc29ubG9naWNfMSA9IHJlcXVpcmUoXCIuLi8uLi9qc29ubG9naWNcIik7XG52YXIgZ2V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvZGFzaC9nZXRcIikpO1xudmFyIHVuc2V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvZGFzaC91bnNldFwiKSk7XG52YXIgZmxvd2F0b21zXzEgPSByZXF1aXJlKFwiLi9mbG93YXRvbXNcIik7XG5leHBvcnRzLmV4ZWNPYmplY3RGbG93ID0gZnVuY3Rpb24gKGZsb3csIGRhdGEsIGZsb3dDb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIGVfMSwgX2E7XG4gICAgdmFyIF9iO1xuICAgIHZhciBwcm9wZXJ0aWVzID0gZmxvdy5wcm9wZXJ0aWVzO1xuICAgIHZhciBlcnJvclN0b3JlID0geyBlcnJvcnM6IFtdLCBpc1ZhbGlkOiB0cnVlIH07XG4gICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydGllc18xID0gX192YWx1ZXMocHJvcGVydGllcyksIHByb3BlcnRpZXNfMV8xID0gcHJvcGVydGllc18xLm5leHQoKTsgIXByb3BlcnRpZXNfMV8xLmRvbmU7IHByb3BlcnRpZXNfMV8xID0gcHJvcGVydGllc18xLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIGNvbmZpZyA9IHByb3BlcnRpZXNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy50eXBlID09PSBcInN3aXRjaFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmQgPSBqc29ubG9naWNfMS5leGVjSlNPTkV4cHJlc3Npb24oY29uZmlnLmNvbmQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHZhciBmbG93XzEgPSBjb25maWcuY2FzZXNbY29uZF07XG4gICAgICAgICAgICAgICAgaWYgKGZsb3dfMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXhwb3J0cy5leGVjT2JqZWN0Rmxvdyh7IHR5cGU6IFwib2JqZWN0XCIsIHByb3BlcnRpZXM6IGZsb3dfMSB9LCBkYXRhLCBmbG93Q29udGV4dCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWdncmVzc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yU3RvcmUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IF9fc3ByZWFkKGVycm9yU3RvcmUuZXJyb3JzLCByZXN1bHQuZXJyb3JzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcudHlwZSA9PT0gXCJpZlwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmQgPSAhIWpzb25sb2dpY18xLmV4ZWNKU09ORXhwcmVzc2lvbihjb25maWcuY29uZCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5lbmZvcmNlU2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgZmFsc2UgZmllbGRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgKF9iID0gY29uZmlnLmZhbHNlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc2V0XzEuZGVmYXVsdChkYXRhLmRhdGEsIF9fc3ByZWFkKGZsb3dDb250ZXh0LnJlZlBhdGgsIFt2LmtleV0pLmpvaW4oXCIuXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlIHRydWUgZmllbGRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLnRydWUuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc2V0XzEuZGVmYXVsdChkYXRhLmRhdGEsIF9fc3ByZWFkKGZsb3dDb250ZXh0LnJlZlBhdGgsIFt2LmtleV0pLmpvaW4oXCIuXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmbG93XzIgPSBjb25kID8gY29uZmlnLnRydWUgOiBjb25maWcuZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGZsb3dfMikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXhwb3J0cy5leGVjT2JqZWN0Rmxvdyh7IHR5cGU6IFwib2JqZWN0XCIsIHByb3BlcnRpZXM6IGZsb3dfMiB9LCBkYXRhLCBmbG93Q29udGV4dCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWdncmVzc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yU3RvcmUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IF9fc3ByZWFkKGVycm9yU3RvcmUuZXJyb3JzLCByZXN1bHQuZXJyb3JzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpZ25vcmVLZXkgPSBjb25maWcuaWdub3JlS2V5LCBrZXkgPSBjb25maWcua2V5O1xuICAgICAgICAgICAgaWYgKGlnbm9yZUtleSkge1xuICAgICAgICAgICAgICAgIHZhciBpZ25vcmUgPSAhIWpzb25sb2dpY18xLmV4ZWNKU09ORXhwcmVzc2lvbihpZ25vcmVLZXksIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChpZ25vcmUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlZlBhdGggPSBfX3NwcmVhZChmbG93Q29udGV4dC5yZWZQYXRoLCBba2V5XSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbmZpZy50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm9iamVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBleHBvcnRzLmV4ZWNPYmplY3RGbG93KGNvbmZpZywgZGF0YSwgX19hc3NpZ24oX19hc3NpZ24oe30sIGZsb3dDb250ZXh0KSwgeyByZWZQYXRoOiByZWZQYXRoIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCBzcGVjaWZpZXMgYSBwcmltaXRpdmUgdmFsdWUgdHlwZSFcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBmbG93YXRvbXNfMS5leGVjUHJpbWl0aXZlRmxvdyhjb25maWcsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBkYXRhKSwgeyByZWY6IGdldF8xLmRlZmF1bHQoZGF0YS5kYXRhLCBrZXkpIH0pLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZmxvd0NvbnRleHQpLCB7IHJlZlBhdGg6IHJlZlBhdGggfSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFnZ3Jlc3NpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBhZ2dyZXNzaXZlLCBjb2xsZWN0IGFsbCBlcnJvcnMhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JTdG9yZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogX19zcHJlYWQoZXJyb3JTdG9yZS5lcnJvcnMsIHJlc3VsdC5lcnJvcnMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNfMV8xICYmICFwcm9wZXJ0aWVzXzFfMS5kb25lICYmIChfYSA9IHByb3BlcnRpZXNfMS5yZXR1cm4pKSBfYS5jYWxsKHByb3BlcnRpZXNfMSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gZXJyb3JTdG9yZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../flowjv/dist/jsonflow/blocks/object.js\n");

/***/ })

})