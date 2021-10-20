/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsdUdBQTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS1uZXh0anMtdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./constants/actionTypes.ts":
/*!**********************************!*\
  !*** ./constants/actionTypes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TODO_ONCHANGE\": () => (/* binding */ TODO_ONCHANGE),\n/* harmony export */   \"TODO_ADD\": () => (/* binding */ TODO_ADD),\n/* harmony export */   \"TODO_DELETE\": () => (/* binding */ TODO_DELETE)\n/* harmony export */ });\nconst TODO_ONCHANGE = 'TODO_ONCHANGE';\nconst TODO_ADD = 'TODO_ADD';\nconst TODO_DELETE = 'TODO_DELETE';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvYWN0aW9uVHlwZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLGFBQXBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS1uZXh0anMtdG9kby1hcHAvLi9jb25zdGFudHMvYWN0aW9uVHlwZXMudHM/ZDRmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVE9ET19PTkNIQU5HRSA9ICdUT0RPX09OQ0hBTkdFJztcbmV4cG9ydCBjb25zdCBUT0RPX0FERCA9ICdUT0RPX0FERCc7XG5leHBvcnQgY29uc3QgVE9ET19ERUxFVEUgPSAnVE9ET19ERUxFVEUnO1xuIl0sIm5hbWVzIjpbIlRPRE9fT05DSEFOR0UiLCJUT0RPX0FERCIsIlRPRE9fREVMRVRFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/actionTypes.ts\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n  enumerable: true,\n  get: function () {\n    return _utils.AppInitialProps;\n  }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n  enumerable: true,\n  get: function () {\n    return _utils.NextWebVitalsMetric;\n  }\n}));\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    default: obj\n  };\n}\n\nfunction _appGetInitialProps() {\n  _appGetInitialProps =\n  /**\n  * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n  * This allows for keeping state between navigation, custom error handling, injecting additional data.\n  */\n  _asyncToGenerator(function* ({\n    Component,\n    ctx\n  }) {\n    const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n    return {\n      pageProps\n    };\n  });\n  return _appGetInitialProps.apply(this, arguments);\n}\n\nfunction appGetInitialProps(_) {\n  return _appGetInitialProps.apply(this, arguments);\n}\n\nclass App extends _react.default.Component {\n  render() {\n    const {\n      Component,\n      pageProps\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps));\n  }\n\n}\n\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBQ2JBLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FILG1EQUFrRDtBQUM5Q0ksRUFBQUEsVUFBVSxFQUFFLElBRGtDO0FBRTlDQyxFQUFBQSxHQUFHLEVBQUUsWUFBVztBQUNaLFdBQU9DLE1BQU0sQ0FBQ0MsZUFBZDtBQUNIO0FBSjZDLENBQWxEO0FBTUFQLHVEQUFzRDtBQUNsREksRUFBQUEsVUFBVSxFQUFFLElBRHNDO0FBRWxEQyxFQUFBQSxHQUFHLEVBQUUsWUFBVztBQUNaLFdBQU9DLE1BQU0sQ0FBQ0UsbUJBQWQ7QUFDSDtBQUppRCxDQUF0RDtBQU1BTixlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O0FBQ0EsSUFBSVEsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQW5DOztBQUNBLElBQUlOLE1BQU0sR0FBR00sbUJBQU8sQ0FBQyxnREFBRCxDQUFwQjs7QUFDQSxTQUFTQyxrQkFBVCxDQUE0QkMsR0FBNUIsRUFBaUNDLE9BQWpDLEVBQTBDQyxNQUExQyxFQUFrREMsS0FBbEQsRUFBeURDLE1BQXpELEVBQWlFQyxHQUFqRSxFQUFzRUMsR0FBdEUsRUFBMkU7QUFDdkUsTUFBSTtBQUNBLFFBQUlDLElBQUksR0FBR1AsR0FBRyxDQUFDSyxHQUFELENBQUgsQ0FBU0MsR0FBVCxDQUFYO0FBQ0EsUUFBSWpCLEtBQUssR0FBR2tCLElBQUksQ0FBQ2xCLEtBQWpCO0FBQ0gsR0FIRCxDQUdFLE9BQU9tQixLQUFQLEVBQWM7QUFDWk4sSUFBQUEsTUFBTSxDQUFDTSxLQUFELENBQU47QUFDQTtBQUNIOztBQUNELE1BQUlELElBQUksQ0FBQ0UsSUFBVCxFQUFlO0FBQ1hSLElBQUFBLE9BQU8sQ0FBQ1osS0FBRCxDQUFQO0FBQ0gsR0FGRCxNQUVPO0FBQ0hxQixJQUFBQSxPQUFPLENBQUNULE9BQVIsQ0FBZ0JaLEtBQWhCLEVBQXVCc0IsSUFBdkIsQ0FBNEJSLEtBQTVCLEVBQW1DQyxNQUFuQztBQUNIO0FBQ0o7O0FBQ0QsU0FBU1EsaUJBQVQsQ0FBMkJDLEVBQTNCLEVBQStCO0FBQzNCLFNBQU8sWUFBVztBQUNkLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQUEsUUFBaUJDLElBQUksR0FBR0MsU0FBeEI7QUFDQSxXQUFPLElBQUlOLE9BQUosQ0FBWSxVQUFTVCxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUN6QyxVQUFJRixHQUFHLEdBQUdhLEVBQUUsQ0FBQ0ksS0FBSCxDQUFTSCxJQUFULEVBQWVDLElBQWYsQ0FBVjs7QUFDQSxlQUFTWixLQUFULENBQWVkLEtBQWYsRUFBc0I7QUFDbEJVLFFBQUFBLGtCQUFrQixDQUFDQyxHQUFELEVBQU1DLE9BQU4sRUFBZUMsTUFBZixFQUF1QkMsS0FBdkIsRUFBOEJDLE1BQTlCLEVBQXNDLE1BQXRDLEVBQThDZixLQUE5QyxDQUFsQjtBQUNIOztBQUNELGVBQVNlLE1BQVQsQ0FBZ0JjLEdBQWhCLEVBQXFCO0FBQ2pCbkIsUUFBQUEsa0JBQWtCLENBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUFlQyxNQUFmLEVBQXVCQyxLQUF2QixFQUE4QkMsTUFBOUIsRUFBc0MsT0FBdEMsRUFBK0NjLEdBQS9DLENBQWxCO0FBQ0g7O0FBQ0RmLE1BQUFBLEtBQUssQ0FBQ2dCLFNBQUQsQ0FBTDtBQUNILEtBVE0sQ0FBUDtBQVVILEdBWkQ7QUFhSDs7QUFDRCxTQUFTdEIsc0JBQVQsQ0FBZ0N1QixHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakN6QixJQUFBQSxPQUFPLEVBQUV5QjtBQUR3QixHQUFyQztBQUdIOztBQUNELFNBQVNFLG1CQUFULEdBQStCO0FBQzNCQSxFQUFBQSxtQkFBbUI7QUFBRztBQUMxQjtBQUNBO0FBQ0E7QUFBSVYsRUFBQUEsaUJBQWlCLENBQUMsV0FBVTtBQUFFVyxJQUFBQSxTQUFGO0FBQWNDLElBQUFBO0FBQWQsR0FBVixFQUFnQztBQUM5QyxVQUFNQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUdqQyxNQUFKLEVBQVlrQyxtQkFBWixDQUFnQ0gsU0FBaEMsRUFBMkNDLEdBQTNDLENBQXhCO0FBQ0EsV0FBTztBQUNIQyxNQUFBQTtBQURHLEtBQVA7QUFHSCxHQUxnQixDQUhqQjtBQVNBLFNBQU9ILG1CQUFtQixDQUFDTCxLQUFwQixDQUEwQixJQUExQixFQUFnQ0QsU0FBaEMsQ0FBUDtBQUNIOztBQUNELFNBQVNXLGtCQUFULENBQTRCQyxDQUE1QixFQUErQjtBQUMzQixTQUFPTixtQkFBbUIsQ0FBQ0wsS0FBcEIsQ0FBMEIsSUFBMUIsRUFBZ0NELFNBQWhDLENBQVA7QUFDSDs7QUFDRCxNQUFNYSxHQUFOLFNBQWtCakMsTUFBTSxDQUFDRCxPQUFQLENBQWU0QixTQUFqQyxDQUEyQztBQUN2Q08sRUFBQUEsTUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFFUCxNQUFBQSxTQUFGO0FBQWNFLE1BQUFBO0FBQWQsUUFBNkIsS0FBS00sS0FBeEM7QUFDQSxXQUFPLGFBQWNuQyxNQUFNLENBQUNELE9BQVAsQ0FBZXFDLGFBQWYsQ0FBNkJULFNBQTdCLEVBQXdDckMsTUFBTSxDQUFDK0MsTUFBUCxDQUFjLEVBQWQsRUFDMURSLFNBRDBELENBQXhDLENBQXJCO0FBRUg7O0FBTHNDOztBQU8zQ0ksR0FBRyxDQUFDSyxtQkFBSixHQUEwQlAsa0JBQTFCO0FBQ0FFLEdBQUcsQ0FBQ00sZUFBSixHQUFzQlIsa0JBQXRCO0FBQ0F2QyxlQUFBLEdBQWtCeUMsR0FBbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLW5leHRqcy10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcz8wNzk1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQXBwSW5pdGlhbFByb3BzXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuQXBwSW5pdGlhbFByb3BzO1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTmV4dFdlYlZpdGFsc01ldHJpY1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLk5leHRXZWJWaXRhbHNNZXRyaWM7XG4gICAgfVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3V0aWxzXCIpO1xuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9hcHBHZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgX2FwcEdldEluaXRpYWxQcm9wcyA9IC8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi8gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qKHsgQ29tcG9uZW50ICwgY3R4ICB9KSB7XG4gICAgICAgIGNvbnN0IHBhZ2VQcm9wcyA9IHlpZWxkICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZVByb3BzXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIF9hcHBHZXRJbml0aWFsUHJvcHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfKSB7XG4gICAgcmV0dXJuIF9hcHBHZXRJbml0aWFsUHJvcHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCAsIHBhZ2VQcm9wcyAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgfSwgcGFnZVByb3BzKSkpO1xuICAgIH1cbn1cbkFwcC5vcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX3V0aWxzIiwiQXBwSW5pdGlhbFByb3BzIiwiTmV4dFdlYlZpdGFsc01ldHJpYyIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJlcnJvciIsImRvbmUiLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwib2JqIiwiX19lc01vZHVsZSIsIl9hcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiXyIsIkFwcCIsInJlbmRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImFzc2lnbiIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ \"./store.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nconst _excluded = [\"store\", \"Component\"];\nvar _jsxFileName = \"/Users/Albert/GIT/node-nextjs-todo-app/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\n\n\nclass MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_1___default()) {\n  render() {\n    const _this$props = this.props,\n          {\n      store,\n      Component\n    } = _this$props,\n          props = _objectWithoutProperties(_this$props, _excluded);\n\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n      store: store,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default()(_store__WEBPACK_IMPORTED_MODULE_4__.default)(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUEsTUFBTUksS0FBTixTQUFvQkosaURBQXBCLENBQW9DO0FBQ2xDSyxFQUFBQSxNQUFNLEdBQUc7QUFDUCx3QkFBdUMsS0FBS0MsS0FBNUM7QUFBQSxVQUFNO0FBQUVILE1BQUFBLEtBQUY7QUFBU0ksTUFBQUE7QUFBVCxLQUFOO0FBQUEsVUFBNkJELEtBQTdCOztBQUNBLHdCQUNFLDhEQUFDLGlEQUFEO0FBQVUsV0FBSyxFQUFFSCxLQUFqQjtBQUFBLDZCQUNFLDhEQUFDLFNBQUQsb0JBQWVHLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEOztBQVJpQzs7QUFXcEMsaUVBQWVMLHlEQUFTLENBQUNFLDJDQUFELENBQVQsQ0FBaUJDLEtBQWpCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLW5leHRqcy10b2RvLWFwcC8uL3BhZ2VzL19hcHAudHN4PzcyMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICduZXh0JztcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3RvcmUsIHsgU3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XG5cbmludGVyZmFjZSBBcHBDb250ZXh0IGV4dGVuZHMgTmV4dFBhZ2VDb250ZXh0IHtcbiAgc3RvcmU6IFN0b3JlO1xufVxuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcDxBcHBDb250ZXh0PiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlLCBDb21wb25lbnQsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KHN0b3JlKShNeUFwcCk7XG4iXSwibmFtZXMiOlsiQXBwIiwid2l0aFJlZHV4IiwiUHJvdmlkZXIiLCJzdG9yZSIsIk15QXBwIiwicmVuZGVyIiwicHJvcHMiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./reducers/index.ts":
/*!***************************!*\
  !*** ./reducers/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": () => (/* binding */ initialState),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./reducers/todo.ts\");\n\n\nconst initialState = {\n  todo: _todo__WEBPACK_IMPORTED_MODULE_1__.initialState\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  todo: _todo__WEBPACK_IMPORTED_MODULE_1__.default\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNRSxZQUFZLEdBQUc7QUFDMUJELEVBQUFBLElBQUksRUFBRUUsK0NBQVNBO0FBRFcsQ0FBckI7QUFJUCxpRUFBZUgsc0RBQWUsQ0FBQztBQUM3QkMsRUFBQUEsSUFBSUEsNENBQUFBO0FBRHlCLENBQUQsQ0FBOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLW5leHRqcy10b2RvLWFwcC8uL3JlZHVjZXJzL2luZGV4LnRzP2NlNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRvZG8sIHsgaW5pdGlhbFN0YXRlIGFzIHRvZG9TdGF0ZSB9IGZyb20gJy4vdG9kbyc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHRvZG86IHRvZG9TdGF0ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHRvZG8sXG59KTtcbiJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJ0b2RvIiwiaW5pdGlhbFN0YXRlIiwidG9kb1N0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.ts\n");

/***/ }),

/***/ "./reducers/todo.ts":
/*!**************************!*\
  !*** ./reducers/todo.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": () => (/* binding */ initialState),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes */ \"./constants/actionTypes.ts\");\nconst _excluded = [\"data\"];\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\nconst initialState = {\n  item: {\n    value: ''\n  },\n  data: []\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action) => {\n  const {\n    type,\n    item\n  } = action;\n\n  switch (type) {\n    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__.TODO_ONCHANGE:\n      {\n        return Object.assign({}, state, {\n          item\n        });\n      }\n\n    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__.TODO_ADD:\n      {\n        if (item.value === '') {\n          return state;\n        }\n\n        return Object.assign({}, state, {\n          item: {\n            value: ''\n          },\n          data: [...state.data, item]\n        });\n      }\n\n    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__.TODO_DELETE:\n      {\n        const {\n          data\n        } = state,\n              restState = _objectWithoutProperties(state, _excluded);\n\n        const updated = [...data].filter(_item => _item.value !== item.value);\n        return Object.assign({}, restState, {\n          data: updated\n        });\n      }\n\n    default:\n      {\n        return state;\n      }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy90b2RvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBTU8sTUFBTUcsWUFBWSxHQUFHO0FBQzFCQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsS0FBSyxFQUFFO0FBREgsR0FEb0I7QUFJMUJDLEVBQUFBLElBQUksRUFBRTtBQUpvQixDQUFyQjtBQU9QLGlFQUFlLENBQUNDLEtBQUssR0FBR0osWUFBVCxFQUF1QkssTUFBdkIsS0FBa0M7QUFDL0MsUUFBTTtBQUNKQyxJQUFBQSxJQURJO0FBRUpMLElBQUFBO0FBRkksTUFHRkksTUFISjs7QUFJQSxVQUFRQyxJQUFSO0FBQ0UsU0FBS1QsaUVBQUw7QUFBb0I7QUFDbEIsZUFBT1UsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosS0FBbEIsRUFBeUI7QUFDOUJILFVBQUFBO0FBRDhCLFNBQXpCLENBQVA7QUFHRDs7QUFFRCxTQUFLSCw0REFBTDtBQUFlO0FBQ2IsWUFBSUcsSUFBSSxDQUFDQyxLQUFMLEtBQWUsRUFBbkIsRUFBdUI7QUFDckIsaUJBQU9FLEtBQVA7QUFDRDs7QUFFRCxlQUFPRyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCSixLQUFsQixFQUF5QjtBQUM5QkgsVUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFlBQUFBLEtBQUssRUFBRTtBQURILFdBRHdCO0FBSTlCQyxVQUFBQSxJQUFJLEVBQUUsQ0FDSixHQUFJQyxLQUFLLENBQUNELElBRE4sRUFFSkYsSUFGSTtBQUp3QixTQUF6QixDQUFQO0FBU0Q7O0FBRUQsU0FBS0YsK0RBQUw7QUFBa0I7QUFDaEIsY0FBTTtBQUFFSSxVQUFBQTtBQUFGLFlBQXlCQyxLQUEvQjtBQUFBLGNBQWlCSyxTQUFqQiw0QkFBK0JMLEtBQS9COztBQUNBLGNBQU1NLE9BQU8sR0FBRyxDQUFDLEdBQUdQLElBQUosRUFBVVEsTUFBVixDQUFpQkMsS0FBSyxJQUFJQSxLQUFLLENBQUNWLEtBQU4sS0FBZ0JELElBQUksQ0FBQ0MsS0FBL0MsQ0FBaEI7QUFDQSxlQUFPSyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCQyxTQUFsQixFQUE2QjtBQUNsQ04sVUFBQUEsSUFBSSxFQUFFTztBQUQ0QixTQUE3QixDQUFQO0FBR0Q7O0FBRUQ7QUFBUztBQUNQLGVBQU9OLEtBQVA7QUFDRDtBQWpDSDtBQW1DRCxDQXhDRCIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtbmV4dGpzLXRvZG8tYXBwLy4vcmVkdWNlcnMvdG9kby50cz8yYzM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFRPRE9fT05DSEFOR0UsXG4gIFRPRE9fQURELFxuICBUT0RPX0RFTEVURSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXRlbToge1xuICAgIHZhbHVlOiAnJyxcbiAgfSxcbiAgZGF0YTogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7XG4gICAgdHlwZSxcbiAgICBpdGVtLFxuICB9ID0gYWN0aW9uO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFRPRE9fT05DSEFOR0U6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FzZSBUT0RPX0FERDoge1xuICAgICAgaWYgKGl0ZW0udmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAuLi4oc3RhdGUuZGF0YSksXG4gICAgICAgICAgaXRlbSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhc2UgVE9ET19ERUxFVEU6IHtcbiAgICAgIGNvbnN0IHsgZGF0YSwgLi4ucmVzdFN0YXRlIH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBbLi4uZGF0YV0uZmlsdGVyKF9pdGVtID0+IF9pdGVtLnZhbHVlICE9PSBpdGVtLnZhbHVlKTtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZXN0U3RhdGUsIHtcbiAgICAgICAgZGF0YTogdXBkYXRlZCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiVE9ET19PTkNIQU5HRSIsIlRPRE9fQUREIiwiVE9ET19ERUxFVEUiLCJpbml0aWFsU3RhdGUiLCJpdGVtIiwidmFsdWUiLCJkYXRhIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiT2JqZWN0IiwiYXNzaWduIiwicmVzdFN0YXRlIiwidXBkYXRlZCIsImZpbHRlciIsIl9pdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/todo.ts\n");

/***/ }),

/***/ "./store.ts":
/*!******************!*\
  !*** ./store.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./reducers/index.ts\");\n\n\n\n\nconst dev = true;\nconst {\n  composeWithDevTools\n} = dev ? __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\") : __webpack_require__(/*! redux-devtools-extension/logOnlyInProduction */ \"redux-devtools-extension/logOnlyInProduction\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = _reducers__WEBPACK_IMPORTED_MODULE_3__.initialState) => {\n  const middlewares = dev ? [(redux_thunk__WEBPACK_IMPORTED_MODULE_0___default()), (0,redux_logger__WEBPACK_IMPORTED_MODULE_2__.createLogger)()] : [];\n  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__.default, state, composeWithDevTools((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares)));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBRUEsTUFBTU0sR0FBWSxPQUFsQjtBQUVBLE1BQU07QUFBRUMsRUFBQUE7QUFBRixJQUEwQkQsR0FBRyxHQUFHRSxtQkFBTyxDQUFDLDBEQUFELENBQVYsR0FBeUNBLG1CQUFPLENBQUMsa0dBQUQsQ0FBbkY7QUFJQSxpRUFBZSxDQUFDQyxLQUFLLEdBQUdKLG1EQUFULEtBQWlDO0FBQzlDLFFBQU1LLFdBQVcsR0FBR0osR0FBRyxHQUFHLENBQUNOLG9EQUFELEVBQWtCRywwREFBWSxFQUE5QixDQUFILEdBQXVDLEVBQTlEO0FBQ0EsU0FBT0Ysa0RBQVcsQ0FBQ0csOENBQUQsRUFBV0ssS0FBWCxFQUFrQkYsbUJBQW1CLENBQUNMLHNEQUFlLENBQUMsR0FBR1EsV0FBSixDQUFoQixDQUFyQyxDQUFsQjtBQUNELENBSEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLW5leHRqcy10b2RvLWFwcC8uL3N0b3JlLnRzP2MzMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQge1xuICBjcmVhdGVTdG9yZSxcbiAgYXBwbHlNaWRkbGV3YXJlLFxuICBTdG9yZSBhcyBSZWR1eFN0b3JlLFxufSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdyZWR1eC1sb2dnZXInO1xuaW1wb3J0IHJlZHVjZXJzLCB7IGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vcmVkdWNlcnMnO1xuXG5jb25zdCBkZXY6IGJvb2xlYW4gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG5jb25zdCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSA9IGRldiA/IHJlcXVpcmUoJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbicpIDogcmVxdWlyZSgncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2xvZ09ubHlJblByb2R1Y3Rpb24nKTtcblxuZXhwb3J0IHR5cGUgU3RvcmUgPSBSZWR1eFN0b3JlPHR5cGVvZiBpbml0aWFsU3RhdGU+O1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUpOiBTdG9yZSA9PiB7XG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gZGV2ID8gW3RodW5rTWlkZGxld2FyZSwgY3JlYXRlTG9nZ2VyKCldIDogW107XG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2Vycywgc3RhdGUsIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkpO1xufTtcbiJdLCJuYW1lcyI6WyJ0aHVua01pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZUxvZ2dlciIsInJlZHVjZXJzIiwiaW5pdGlhbFN0YXRlIiwiZGV2IiwiY29tcG9zZVdpdGhEZXZUb29scyIsInJlcXVpcmUiLCJzdGF0ZSIsIm1pZGRsZXdhcmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store.ts\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-devtools-extension/logOnlyInProduction":
/*!***************************************************************!*\
  !*** external "redux-devtools-extension/logOnlyInProduction" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension/logOnlyInProduction");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();