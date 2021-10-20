"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./actions/index.ts":
/*!**************************!*\
  !*** ./actions/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onChangeTodo\": () => (/* binding */ onChangeTodo),\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo)\n/* harmony export */ });\n/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes */ \"./constants/actionTypes.ts\");\n\nconst onChangeTodo = item => ({\n  type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__.TODO_ONCHANGE,\n  item\n});\nconst addTodo = item => ({\n  type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__.TODO_ADD,\n  item\n});\nconst deleteTodo = item => ({\n  type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__.TODO_DELETE,\n  item\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hY3Rpb25zL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQU1PLE1BQU1HLFlBQVksR0FBSUMsSUFBRCxLQUFXO0FBQUVDLEVBQUFBLElBQUksRUFBRUwsaUVBQVI7QUFBdUJJLEVBQUFBO0FBQXZCLENBQVgsQ0FBckI7QUFFQSxNQUFNRSxPQUFPLEdBQUlGLElBQUQsS0FBVztBQUFFQyxFQUFBQSxJQUFJLEVBQUVKLDREQUFSO0FBQWtCRyxFQUFBQTtBQUFsQixDQUFYLENBQWhCO0FBRUEsTUFBTUcsVUFBVSxHQUFJSCxJQUFELEtBQVc7QUFBRUMsRUFBQUEsSUFBSSxFQUFFSCwrREFBUjtBQUFxQkUsRUFBQUE7QUFBckIsQ0FBWCxDQUFuQiIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtbmV4dGpzLXRvZG8tYXBwLy4vYWN0aW9ucy9pbmRleC50cz85YWYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzVGVtcGxhdGVFeHByZXNzaW9uIH0gZnJvbSAndHlwZXNjcmlwdCc7XG5pbXBvcnQge1xuICBUT0RPX09OQ0hBTkdFLFxuICBUT0RPX0FERCxcbiAgVE9ET19ERUxFVEUsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb25UeXBlcyc7XG5cbmV4cG9ydCBjb25zdCBvbkNoYW5nZVRvZG8gPSAoaXRlbSkgPT4gKHsgdHlwZTogVE9ET19PTkNIQU5HRSwgaXRlbSB9KTtcblxuZXhwb3J0IGNvbnN0IGFkZFRvZG8gPSAoaXRlbSkgPT4gKHsgdHlwZTogVE9ET19BREQsIGl0ZW0gfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVUb2RvID0gKGl0ZW0pID0+ICh7IHR5cGU6IFRPRE9fREVMRVRFLCBpdGVtIH0pO1xuIl0sIm5hbWVzIjpbIlRPRE9fT05DSEFOR0UiLCJUT0RPX0FERCIsIlRPRE9fREVMRVRFIiwib25DaGFuZ2VUb2RvIiwiaXRlbSIsInR5cGUiLCJhZGRUb2RvIiwiZGVsZXRlVG9kbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./actions/index.ts\n");

/***/ }),

/***/ "./components/page.tsx":
/*!*****************************!*\
  !*** ./components/page.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ \"recompose\");\n/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./components/todo.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/Albert/GIT/node-nextjs-todo-app/components/page.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst Page = props => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_todo__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread({}, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,recompose__WEBPACK_IMPORTED_MODULE_1__.compose)()(Page));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1HLElBQUksR0FBSUMsS0FBRCxJQUFXO0FBQ3RCLHNCQUFPLDhEQUFDLDBDQUFELG9CQUFVQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBSUEsaUVBQWVILGtEQUFPLEdBQUdFLElBQUgsQ0FBdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLW5leHRqcy10b2RvLWFwcC8uL2NvbXBvbmVudHMvcGFnZS50c3g/NjFjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuXG5jb25zdCBQYWdlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiA8VG9kbyB7Li4ucHJvcHN9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZSgpKFBhZ2UpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29tcG9zZSIsIlRvZG8iLCJQYWdlIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/page.tsx\n");

/***/ }),

/***/ "./components/todo.tsx":
/*!*****************************!*\
  !*** ./components/todo.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ \"recompose\");\n/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/Albert/GIT/node-nextjs-todo-app/components/todo.tsx\";\n\n\n\n\n\nconst {\n  Title\n} = antd__WEBPACK_IMPORTED_MODULE_2__.Typography;\n\nconst Todo = props => {\n  const {\n    item,\n    data,\n    onChangeTodo,\n    addTodo,\n    deleteTodo\n  } = props;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Title, {\n      type: \"success\",\n      children: \"TODO\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n      onSubmit: e => {\n        e.preventDefault();\n        addTodo({\n          value: item.value\n        });\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {\n        maxLength: 256,\n        style: {\n          width: '30%'\n        },\n        type: \"text\",\n        value: item.value,\n        onChange: e => onChangeTodo({\n          value: e.target.value\n        }),\n        prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.EditOutlined, {\n          className: \"site-form-item-icon\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 19\n        }, undefined),\n        suffix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {\n          title: \"Enter task here!\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.InfoCircleOutlined, {\n            style: {\n              color: 'rgba(0,0,0,.45)'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 17\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 15\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        type: \"primary\",\n        onClick: () => addTodo(item),\n        children: \"ADD\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n        type: \"submit\",\n        value: \"SUBMIT\",\n        style: {\n          display: 'none'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, undefined), data.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      children: [item.value, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        type: \"primary\",\n        onClick: () => deleteTodo(item),\n        danger: true,\n        children: \"DELETE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 11\n      }, undefined)]\n    }, index, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }, undefined))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,recompose__WEBPACK_IMPORTED_MODULE_1__.compose)()(Todo));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZG8udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFBRVEsRUFBQUE7QUFBRixJQUFZSCw0Q0FBbEI7O0FBRUEsTUFBTUksSUFBSSxHQUFHQyxLQUFELElBQVc7QUFDckIsUUFBTTtBQUNKQyxJQUFBQSxJQURJO0FBRUpDLElBQUFBLElBRkk7QUFHSkMsSUFBQUEsWUFISTtBQUlKQyxJQUFBQSxPQUpJO0FBS0pDLElBQUFBO0FBTEksTUFNRkwsS0FOSjtBQVFBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0UsOERBQUMsS0FBRDtBQUFPLFVBQUksRUFBQyxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxjQUFRLEVBQUdNLENBQUQsSUFBTztBQUNyQkEsUUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FILFFBQUFBLE9BQU8sQ0FBQztBQUNOSSxVQUFBQSxLQUFLLEVBQUVQLElBQUksQ0FBQ087QUFETixTQUFELENBQVA7QUFHRCxPQUxEO0FBQUEsOEJBTUUsOERBQUMsdUNBQUQ7QUFDRSxpQkFBUyxFQUFFLEdBRGI7QUFFRSxhQUFLLEVBQUU7QUFBRUMsVUFBQUEsS0FBSyxFQUFFO0FBQVQsU0FGVDtBQUdFLFlBQUksRUFBQyxNQUhQO0FBSUUsYUFBSyxFQUFFUixJQUFJLENBQUNPLEtBSmQ7QUFLRSxnQkFBUSxFQUFFRixDQUFDLElBQUlILFlBQVksQ0FBQztBQUMxQkssVUFBQUEsS0FBSyxFQUFFRixDQUFDLENBQUNJLE1BQUYsQ0FBU0Y7QUFEVSxTQUFELENBTDdCO0FBUUUsY0FBTSxlQUFFLDhEQUFDLDJEQUFEO0FBQWMsbUJBQVMsRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJWO0FBU0UsY0FBTSxlQUNGLDhEQUFDLHlDQUFEO0FBQVMsZUFBSyxFQUFDLGtCQUFmO0FBQUEsaUNBQ0UsOERBQUMsaUVBQUQ7QUFBb0IsaUJBQUssRUFBRTtBQUFFRyxjQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFxQkUsOERBQUMsd0NBQUQ7QUFBUSxZQUFJLEVBQUMsU0FBYjtBQUF1QixlQUFPLEVBQUUsTUFBTVAsT0FBTyxDQUFDSCxJQUFELENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJCRixlQXdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhCRixlQXlCRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsYUFBSyxFQUFDLFFBRlI7QUFHRSxhQUFLLEVBQUU7QUFDTFcsVUFBQUEsT0FBTyxFQUFFO0FBREo7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFtQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQ0YsRUFvQ0dWLElBQUksQ0FBQ1csR0FBTCxDQUFTLENBQUNaLElBQUQsRUFBT2EsS0FBUCxrQkFDUjtBQUFBLGlCQUNHYixJQUFJLENBQUNPLEtBRFIsRUFFRyxHQUZILGVBR0UsOERBQUMsd0NBQUQ7QUFBUSxZQUFJLEVBQUMsU0FBYjtBQUF1QixlQUFPLEVBQUUsTUFBTUgsVUFBVSxDQUFDSixJQUFELENBQWhEO0FBQXdELGNBQU0sTUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQSxPQUFRYSxLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsQ0FwQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFnREQsQ0F6REQ7O0FBMkRBLGlFQUFldkIsa0RBQU8sR0FBR1EsSUFBSCxDQUF0QiIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtbmV4dGpzLXRvZG8tYXBwLy4vY29tcG9uZW50cy90b2RvLnRzeD80MDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFRvb2x0aXAsIFR5cG9ncmFwaHkgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEluZm9DaXJjbGVPdXRsaW5lZCwgRWRpdE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuXG5jb25zdCB7IFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xuXG5jb25zdCBUb2RvPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGl0ZW0sXG4gICAgZGF0YSxcbiAgICBvbkNoYW5nZVRvZG8sXG4gICAgYWRkVG9kbyxcbiAgICBkZWxldGVUb2RvLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8VGl0bGUgdHlwZT1cInN1Y2Nlc3NcIj5UT0RPPC9UaXRsZT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFkZFRvZG8oe1xuICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxuICAgICAgICB9KTtcbiAgICAgIH19PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBtYXhMZW5ndGg9ezI1Nn1cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzMwJScgfX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VUb2RvKHtcbiAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBwcmVmaXg9ezxFZGl0T3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fVxuICAgICAgICAgIHN1ZmZpeD17XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiRW50ZXIgdGFzayBoZXJlIVwiPlxuICAgICAgICAgICAgICAgIDxJbmZvQ2lyY2xlT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICdyZ2JhKDAsMCwwLC40NSknIH19IC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGFkZFRvZG8oaXRlbSl9PlxuICAgICAgICAgICAgQUREXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICB2YWx1ZT1cIlNVQk1JVFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGhyIC8+XG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxwIGtleT17aW5kZXh9PlxuICAgICAgICAgIHtpdGVtLnZhbHVlfVxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRvZG8oaXRlbSl9IGRhbmdlcj5cbiAgICAgICAgICAgIERFTEVURVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L3A+XG4gICAgICApKX1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZSgpKFRvZG8pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29tcG9zZSIsIkJ1dHRvbiIsIklucHV0IiwiVG9vbHRpcCIsIlR5cG9ncmFwaHkiLCJJbmZvQ2lyY2xlT3V0bGluZWQiLCJFZGl0T3V0bGluZWQiLCJUaXRsZSIsIlRvZG8iLCJwcm9wcyIsIml0ZW0iLCJkYXRhIiwib25DaGFuZ2VUb2RvIiwiYWRkVG9kbyIsImRlbGV0ZVRvZG8iLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsIndpZHRoIiwidGFyZ2V0IiwiY29sb3IiLCJkaXNwbGF5IiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/todo.tsx\n");

/***/ }),

/***/ "./constants/actionTypes.ts":
/*!**********************************!*\
  !*** ./constants/actionTypes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TODO_ONCHANGE\": () => (/* binding */ TODO_ONCHANGE),\n/* harmony export */   \"TODO_ADD\": () => (/* binding */ TODO_ADD),\n/* harmony export */   \"TODO_DELETE\": () => (/* binding */ TODO_DELETE)\n/* harmony export */ });\nconst TODO_ONCHANGE = 'TODO_ONCHANGE';\nconst TODO_ADD = 'TODO_ADD';\nconst TODO_DELETE = 'TODO_DELETE';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvYWN0aW9uVHlwZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLGFBQXBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS1uZXh0anMtdG9kby1hcHAvLi9jb25zdGFudHMvYWN0aW9uVHlwZXMudHM/ZDRmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVE9ET19PTkNIQU5HRSA9ICdUT0RPX09OQ0hBTkdFJztcbmV4cG9ydCBjb25zdCBUT0RPX0FERCA9ICdUT0RPX0FERCc7XG5leHBvcnQgY29uc3QgVE9ET19ERUxFVEUgPSAnVE9ET19ERUxFVEUnO1xuIl0sIm5hbWVzIjpbIlRPRE9fT05DSEFOR0UiLCJUT0RPX0FERCIsIlRPRE9fREVMRVRFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/actionTypes.ts\n");

/***/ }),

/***/ "./containers/page.ts":
/*!****************************!*\
  !*** ./containers/page.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ \"recompose\");\n/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ \"./actions/index.ts\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selectors */ \"./selectors/index.ts\");\n/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/page */ \"./components/page.tsx\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,recompose__WEBPACK_IMPORTED_MODULE_2__.compose)((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)((0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectTodoItem)(), (0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectTodoData)(), (item, data) => ({\n  item,\n  data\n})), {\n  onChangeTodo: _actions__WEBPACK_IMPORTED_MODULE_3__.onChangeTodo,\n  addTodo: _actions__WEBPACK_IMPORTED_MODULE_3__.addTodo,\n  deleteTodo: _actions__WEBPACK_IMPORTED_MODULE_3__.deleteTodo\n}), recompose__WEBPACK_IMPORTED_MODULE_2__.pure)(_components_page__WEBPACK_IMPORTED_MODULE_5__.default));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXJzL3BhZ2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBS0E7QUFJQTtBQUVBLGlFQUFlRSxrREFBTyxDQUNwQkYsb0RBQU8sQ0FDTEMsd0RBQWMsQ0FDWk0sMERBQWMsRUFERixFQUVaQywwREFBYyxFQUZGLEVBR1osQ0FBQ0UsSUFBRCxFQUFPQyxJQUFQLE1BQWlCO0FBQUVELEVBQUFBLElBQUY7QUFBUUMsRUFBQUE7QUFBUixDQUFqQixDQUhZLENBRFQsRUFNTDtBQUNFUCxFQUFBQSxZQURGO0FBRUVDLEVBQUFBLE9BRkY7QUFHRUMsRUFBQUEsVUFBVUEsa0RBQUFBO0FBSFosQ0FOSyxDQURhLEVBYXBCSCwyQ0Fib0IsQ0FBUCxDQWNiTSxxREFkYSxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS1uZXh0anMtdG9kby1hcHAvLi9jb250YWluZXJzL3BhZ2UudHM/YmFkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQge1xuICBjb21wb3NlLFxuICBwdXJlLFxufSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHtcbiAgb25DaGFuZ2VUb2RvLFxuICBhZGRUb2RvLFxuICBkZWxldGVUb2RvLFxufSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7XG4gIHNlbGVjdFRvZG9JdGVtLFxuICBzZWxlY3RUb2RvRGF0YSxcbn0gZnJvbSAnLi4vc2VsZWN0b3JzJztcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIGNvbm5lY3QoXG4gICAgY3JlYXRlU2VsZWN0b3IoXG4gICAgICBzZWxlY3RUb2RvSXRlbSgpLFxuICAgICAgc2VsZWN0VG9kb0RhdGEoKSxcbiAgICAgIChpdGVtLCBkYXRhKSA9PiAoeyBpdGVtLCBkYXRhIH0pLFxuICAgICksXG4gICAge1xuICAgICAgb25DaGFuZ2VUb2RvLFxuICAgICAgYWRkVG9kbyxcbiAgICAgIGRlbGV0ZVRvZG8sXG4gICAgfSxcbiAgKSxcbiAgcHVyZSxcbikoUGFnZSk7XG4iXSwibmFtZXMiOlsiY29ubmVjdCIsImNyZWF0ZVNlbGVjdG9yIiwiY29tcG9zZSIsInB1cmUiLCJvbkNoYW5nZVRvZG8iLCJhZGRUb2RvIiwiZGVsZXRlVG9kbyIsInNlbGVjdFRvZG9JdGVtIiwic2VsZWN0VG9kb0RhdGEiLCJQYWdlIiwiaXRlbSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/page.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recompose */ \"recompose\");\n/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _containers_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/page */ \"./containers/page.ts\");\n\n\n\nconst IndexPage = (0,recompose__WEBPACK_IMPORTED_MODULE_0__.compose)()(_containers_page__WEBPACK_IMPORTED_MODULE_2__.default);\n\nIndexPage.getInitialProps = ({\n  store,\n  req\n}) => {\n  const isServer = !!req;\n  const {\n    todo\n  } = store.getState(); // we can add any custom data here\n  // for examle, the data from api server\n  // store.dispatch(addTodo(Object.assign(todo.item, {\n  //   value: 'Hello World!',\n  // })));\n\n  return {\n    isServer\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)()(IndexPage));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBUUEsTUFBTUcsU0FBOEMsR0FBR0gsa0RBQU8sR0FBR0UscURBQUgsQ0FBOUQ7O0FBRUFDLFNBQVMsQ0FBQ0MsZUFBVixHQUE0QixDQUFDO0FBQUVDLEVBQUFBLEtBQUY7QUFBU0MsRUFBQUE7QUFBVCxDQUFELEtBQW9CO0FBQzlDLFFBQU1DLFFBQWlCLEdBQUcsQ0FBQyxDQUFDRCxHQUE1QjtBQUNBLFFBQU07QUFBRUUsSUFBQUE7QUFBRixNQUFXSCxLQUFLLENBQUNJLFFBQU4sRUFBakIsQ0FGOEMsQ0FJOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFPO0FBQ0xGLElBQUFBO0FBREssR0FBUDtBQUdELENBYkQ7O0FBZUEsaUVBQWVOLG9EQUFPLEdBQUdFLFNBQUgsQ0FBdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLW5leHRqcy10b2RvLWFwcC8uL3BhZ2VzL2luZGV4LnRzeD9kYjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5leHRQYWdlQ29udGV4dCxcbiAgTmV4dENvbXBvbmVudFR5cGUsXG59IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29udGFpbmVycy9wYWdlJztcbmltcG9ydCB7IGFkZFRvZG8gfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xuXG5pbnRlcmZhY2UgSW5kZXhQYWdlQ29udGV4dCBleHRlbmRzIE5leHRQYWdlQ29udGV4dCB7XG4gIHN0b3JlOiBTdG9yZTtcbn1cblxuY29uc3QgSW5kZXhQYWdlOiBOZXh0Q29tcG9uZW50VHlwZTxJbmRleFBhZ2VDb250ZXh0PiA9IGNvbXBvc2UoKShQYWdlKTtcblxuSW5kZXhQYWdlLmdldEluaXRpYWxQcm9wcyA9ICh7IHN0b3JlLCByZXEgfSkgPT4ge1xuICBjb25zdCBpc1NlcnZlcjogYm9vbGVhbiA9ICEhcmVxO1xuICBjb25zdCB7IHRvZG8gfSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgLy8gd2UgY2FuIGFkZCBhbnkgY3VzdG9tIGRhdGEgaGVyZVxuICAvLyBmb3IgZXhhbWxlLCB0aGUgZGF0YSBmcm9tIGFwaSBzZXJ2ZXJcbiAgLy8gc3RvcmUuZGlzcGF0Y2goYWRkVG9kbyhPYmplY3QuYXNzaWduKHRvZG8uaXRlbSwge1xuICAvLyAgIHZhbHVlOiAnSGVsbG8gV29ybGQhJyxcbiAgLy8gfSkpKTtcblxuICByZXR1cm4ge1xuICAgIGlzU2VydmVyLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoSW5kZXhQYWdlKTtcbiJdLCJuYW1lcyI6WyJjb21wb3NlIiwiY29ubmVjdCIsIlBhZ2UiLCJJbmRleFBhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJzdG9yZSIsInJlcSIsImlzU2VydmVyIiwidG9kbyIsImdldFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./selectors/index.ts":
/*!****************************!*\
  !*** ./selectors/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectState\": () => (/* binding */ selectState),\n/* harmony export */   \"selectTodoItem\": () => (/* binding */ selectTodoItem),\n/* harmony export */   \"selectTodoData\": () => (/* binding */ selectTodoData)\n/* harmony export */ });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n\nconst selectState = () => state => state.todo;\nconst selectTodoItem = () => (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectState(), todo => todo.item);\nconst selectTodoData = () => (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectState(), todo => todo.data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWxlY3RvcnMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1DLFdBQVcsR0FBRyxNQUFNQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsSUFBekM7QUFFQSxNQUFNQyxjQUFjLEdBQUcsTUFDNUJKLHdEQUFjLENBQ1pDLFdBQVcsRUFEQyxFQUVaRSxJQUFJLElBQUlBLElBQUksQ0FBQ0UsSUFGRCxDQURUO0FBTUEsTUFBTUMsY0FBYyxHQUFHLE1BQzVCTix3REFBYyxDQUNaQyxXQUFXLEVBREMsRUFFWkUsSUFBSSxJQUFJQSxJQUFJLENBQUNJLElBRkQsQ0FEVCIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtbmV4dGpzLXRvZG8tYXBwLy4vc2VsZWN0b3JzL2luZGV4LnRzP2M3ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RTdGF0ZSA9ICgpID0+IHN0YXRlID0+IHN0YXRlLnRvZG87XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RUb2RvSXRlbSA9ICgpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdFN0YXRlKCksXG4gICAgdG9kbyA9PiB0b2RvLml0ZW0sXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RUb2RvRGF0YSA9ICgpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdFN0YXRlKCksXG4gICAgdG9kbyA9PiB0b2RvLmRhdGEsXG4gICk7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2VsZWN0b3IiLCJzZWxlY3RTdGF0ZSIsInN0YXRlIiwidG9kbyIsInNlbGVjdFRvZG9JdGVtIiwiaXRlbSIsInNlbGVjdFRvZG9EYXRhIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./selectors/index.ts\n");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("recompose");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("reselect");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();