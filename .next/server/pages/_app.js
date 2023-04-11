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

/***/ "./src/lib/actions/display.js":
/*!************************************!*\
  !*** ./src/lib/actions/display.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDisplay\": () => (/* binding */ addDisplay),\n/* harmony export */   \"deleteDisplay\": () => (/* binding */ deleteDisplay),\n/* harmony export */   \"getDisplay\": () => (/* binding */ getDisplay),\n/* harmony export */   \"getDisplays\": () => (/* binding */ getDisplays),\n/* harmony export */   \"updateDisplay\": () => (/* binding */ updateDisplay)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getDisplays = async (host = \"\")=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(host + \"/api/v1/display\");\n    if (res && res.data) {\n        return res.data;\n    }\n};\nconst addDisplay = async (host = \"\")=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(host + \"/api/v1/display\");\n    if (res && res.data) {\n        return res.data;\n    }\n};\nconst getDisplay = async (id, host = \"\")=>{\n    console.debug(\"Host GetDisplay : \", host);\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(host + \"/api/v1/display/\" + id).then((res)=>{\n        if (res && res.data) {\n            return res.data;\n        }\n    });\n};\nconst deleteDisplay = async (id, host = \"\")=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](host + \"/api/v1/display/\" + id).then((res)=>{\n        console.debug(\"API DeleteDisplay \", res);\n        if (res && res.data) {\n            return res.data;\n        }\n    });\n};\nconst updateDisplay = async (id, data, host = \"\")=>{\n    console.log(\"Update display : \", id, \"data : \", data, \"host :\", host);\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(host + \"/api/v1/display/\" + id, data).then((res)=>{\n        if (res && res.data) {\n            return res.data;\n        }\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2FjdGlvbnMvZGlzcGxheS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFFbEIsTUFBTUMsY0FBYyxPQUFPQyxPQUFPLEVBQUUsR0FBSztJQUU5QyxNQUFNQyxNQUFNLE1BQU1ILGlEQUFTLENBQUNFLE9BQU87SUFDbkMsSUFBSUMsT0FBT0EsSUFBSUUsSUFBSSxFQUFFO1FBQ25CLE9BQU9GLElBQUlFLElBQUk7SUFDakIsQ0FBQztBQUNILEVBQUM7QUFFTSxNQUFNQyxhQUFhLE9BQU9KLE9BQU8sRUFBRSxHQUFLO0lBQzdDLE1BQU1DLE1BQU0sTUFBTUgsa0RBQVUsQ0FBQ0UsT0FBTztJQUNwQyxJQUFJQyxPQUFPQSxJQUFJRSxJQUFJLEVBQUU7UUFDbkIsT0FBT0YsSUFBSUUsSUFBSTtJQUNqQixDQUFDO0FBQ0gsRUFBQztBQUVNLE1BQU1HLGFBQWEsT0FBT0MsSUFBSVAsT0FBTyxFQUFFLEdBQUs7SUFDakRRLFFBQVFDLEtBQUssQ0FBQyxzQkFBc0JUO0lBQ3BDLE9BQU9GLGlEQUFTLENBQUNFLE9BQU8scUJBQXFCTyxJQUFJRyxJQUFJLENBQUNULENBQUFBLE1BQU87UUFDM0QsSUFBSUEsT0FBT0EsSUFBSUUsSUFBSSxFQUFFO1lBQ25CLE9BQU9GLElBQUlFLElBQUk7UUFDakIsQ0FBQztJQUNIO0FBQ0YsRUFBQztBQUVNLE1BQU1RLGdCQUFnQixPQUFPSixJQUFJUCxPQUFPLEVBQUUsR0FBSztJQUNwRCxPQUFPRix1REFBWSxDQUFDRSxPQUFPLHFCQUFxQk8sSUFBSUcsSUFBSSxDQUFDVCxDQUFBQSxNQUFPO1FBQzlETyxRQUFRQyxLQUFLLENBQUMsc0JBQXNCUjtRQUNwQyxJQUFJQSxPQUFPQSxJQUFJRSxJQUFJLEVBQUU7WUFDbkIsT0FBT0YsSUFBSUUsSUFBSTtRQUNqQixDQUFDO0lBQ0g7QUFDRixFQUFDO0FBRU0sTUFBTVUsZ0JBQWdCLE9BQU9OLElBQUlKLE1BQU1ILE9BQU8sRUFBRSxHQUFLO0lBQzFEUSxRQUFRTSxHQUFHLENBQUMscUJBQXFCUCxJQUFJLFdBQVdKLE1BQU0sVUFBVUg7SUFDaEUsT0FBT0YsbURBQVcsQ0FBQ0UsT0FBTyxxQkFBcUJPLElBQUlKLE1BQU1PLElBQUksQ0FBQ1QsQ0FBQUEsTUFBTztRQUNuRSxJQUFJQSxPQUFPQSxJQUFJRSxJQUFJLEVBQUU7WUFDbkIsT0FBT0YsSUFBSUUsSUFBSTtRQUNqQixDQUFDO0lBQ0g7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2lnbmFsaWEvLi9zcmMvbGliL2FjdGlvbnMvZGlzcGxheS5qcz9jYjk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREaXNwbGF5cyA9IGFzeW5jIChob3N0ID0gJycpID0+IHtcclxuIFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChob3N0ICsgJy9hcGkvdjEvZGlzcGxheScpXHJcbiAgaWYgKHJlcyAmJiByZXMuZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcy5kYXRhXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkRGlzcGxheSA9IGFzeW5jIChob3N0ID0gJycpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGhvc3QgKyAnL2FwaS92MS9kaXNwbGF5JylcclxuICBpZiAocmVzICYmIHJlcy5kYXRhKSB7XHJcbiAgICByZXR1cm4gcmVzLmRhdGFcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXREaXNwbGF5ID0gYXN5bmMgKGlkLCBob3N0ID0gJycpID0+IHtcclxuICBjb25zb2xlLmRlYnVnKCdIb3N0IEdldERpc3BsYXkgOiAnLCBob3N0KVxyXG4gIHJldHVybiBheGlvcy5nZXQoaG9zdCArICcvYXBpL3YxL2Rpc3BsYXkvJyArIGlkKS50aGVuKHJlcyA9PiB7XHJcbiAgICBpZiAocmVzICYmIHJlcy5kYXRhKSB7XHJcbiAgICAgIHJldHVybiByZXMuZGF0YVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVEaXNwbGF5ID0gYXN5bmMgKGlkLCBob3N0ID0gJycpID0+IHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGhvc3QgKyAnL2FwaS92MS9kaXNwbGF5LycgKyBpZCkudGhlbihyZXMgPT4ge1xyXG4gICAgY29uc29sZS5kZWJ1ZygnQVBJIERlbGV0ZURpc3BsYXkgJywgcmVzKVxyXG4gICAgaWYgKHJlcyAmJiByZXMuZGF0YSkge1xyXG4gICAgICByZXR1cm4gcmVzLmRhdGFcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlRGlzcGxheSA9IGFzeW5jIChpZCwgZGF0YSwgaG9zdCA9ICcnKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1VwZGF0ZSBkaXNwbGF5IDogJywgaWQsICdkYXRhIDogJywgZGF0YSwgJ2hvc3QgOicsIGhvc3QpXHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGhvc3QgKyAnL2FwaS92MS9kaXNwbGF5LycgKyBpZCwgZGF0YSkudGhlbihyZXMgPT4ge1xyXG4gICAgaWYgKHJlcyAmJiByZXMuZGF0YSkge1xyXG4gICAgICByZXR1cm4gcmVzLmRhdGFcclxuICAgIH1cclxuICB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldERpc3BsYXlzIiwiaG9zdCIsInJlcyIsImdldCIsImRhdGEiLCJhZGREaXNwbGF5IiwicG9zdCIsImdldERpc3BsYXkiLCJpZCIsImNvbnNvbGUiLCJkZWJ1ZyIsInRoZW4iLCJkZWxldGVEaXNwbGF5IiwiZGVsZXRlIiwidXBkYXRlRGlzcGxheSIsImxvZyIsInBhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/actions/display.js\n");

/***/ }),

/***/ "./src/lib/contexts/DisplayContext.js":
/*!********************************************!*\
  !*** ./src/lib/contexts/DisplayContext.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContextProvider\": () => (/* binding */ ContextProvider),\n/* harmony export */   \"useStateContext\": () => (/* binding */ useStateContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n//const ReactEasyState = require('@risingstack/react-easy-state')\n//const store = ReactEasyState.store\n\n\nconst _ = __webpack_require__(/*! lodash */ \"lodash\");\nconst DisplayActions = __webpack_require__(/*! ../actions/display */ \"./src/lib/actions/display.js\");\nconst shortid = __webpack_require__(/*! shortid */ \"shortid\");\nconst StateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ContextProvider = ({ children  })=>{\n    const updateDisplayThrottled = _.debounce((id, data)=>{\n        console.log(\"Throttled : \", id, \" data : \", data, \" Display : \", displayCtx);\n        return DisplayActions.updateDisplay(id, data);\n    }, 300);\n    const displayInitial = {\n        id: null,\n        name: null,\n        layout: null,\n        statusBar: null,\n        widgets: null\n    };\n    const [displayCtx, setDisplayCtx] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(displayInitial);\n    const setIdCtx = async (id)=>{\n        if (!id) return;\n        displayCtx._id = id;\n        const displayInfo = await DisplayActions.getDisplay(id);\n        displayCtx.layout = displayInfo.layout;\n        displayCtx.statusBar = displayInfo.statusBar;\n        displayCtx.name = displayInfo.name;\n        displayCtx.widgets = displayInfo.widgets;\n    };\n    const setNameCtx = async (name)=>{\n        if (!name) return;\n        displayCtx.name = name;\n    };\n    const updateNameCtx = async (name)=>{\n        if (!name) return;\n        displayCtx.name = name;\n        updateDisplayThrottled(displayCtx._id, {\n            name\n        });\n    };\n    const updateLayoutCtx = async (layout)=>{\n        if (!layout || ![\n            \"spaced\",\n            \"compact\"\n        ].includes(layout)) return;\n        displayCtx.layout = layout;\n        updateDisplayThrottled(displayCtx._id, {\n            layout\n        });\n    };\n    const addStatusBarItemCtx = async (type)=>{\n        displayCtx.statusBar = [\n            ...displayCtx.statusBar,\n            type + \"_\" + shortid.generate()\n        ];\n        updateDisplayThrottled(displayCtx._id, {\n            statusBar: displayCtx.statusBar\n        });\n        return Promise.resolve();\n    };\n    const removeStatusBarItemCtx = async (id)=>{\n        displayCtx.statusBar = [\n            ...displayCtx.statusBar.slice(0, id).concat(display.statusBar.slice(id + 1))\n        ];\n        updateDisplayThrottled(displayCtx.id, {\n            statusBar: displayCtx.statusBar\n        });\n    };\n    const reorderStatusBarItemsCtx = async (startIndex, endIndex)=>{\n        const result = Array.from(displayCtx.statusBar);\n        const [removed] = result.splice(startIndex, 1);\n        result.splice(endIndex, 0, removed);\n        displayCtx.statusBar = result;\n        updateDisplayThrottled(displayCtx.id, {\n            statusBar: displayCtx.statusBar\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StateContext.Provider, {\n        value: {\n            displayCtx,\n            setDisplayCtx,\n            setIdCtx,\n            setNameCtx,\n            updateNameCtx,\n            updateLayoutCtx\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\adminsys\\\\Documents\\\\GitHub\\\\signalia\\\\src\\\\lib\\\\contexts\\\\DisplayContext.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\nconst useStateContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StateContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVdLLFNBQVMsR0FBR3VCO1FBQ3ZCbEMsdUJBQXVCTSxXQUFXSixFQUFFLEVBQUU7WUFBRVMsV0FBV0wsV0FBV0ssU0FBUztRQUFDO0lBQzVFO0lBRUYscUJBQ0UsOERBQUNkLGFBQWEwQyxRQUFRO1FBQ3BCQyxPQUFPO1lBQ0xsQztZQUNBTztZQUNBQztZQUNBSTtZQUNBQztZQUNBQztRQUNGO2tCQUVDckI7Ozs7OztBQUdQLEVBQUM7QUFFTSxNQUFNMEMsa0JBQWtCLElBQU1qRCxpREFBVUEsQ0FBQ0ssY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpZ25hbGlhLy4vc3JjL2xpYi9jb250ZXh0cy9EaXNwbGF5Q29udGV4dC5qcz8zYjRhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vY29uc3QgUmVhY3RFYXN5U3RhdGUgPSByZXF1aXJlKCdAcmlzaW5nc3RhY2svcmVhY3QtZWFzeS1zdGF0ZScpXHJcbi8vY29uc3Qgc3RvcmUgPSBSZWFjdEVhc3lTdGF0ZS5zdG9yZVxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJylcclxuY29uc3QgRGlzcGxheUFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2Rpc3BsYXknKVxyXG5jb25zdCBzaG9ydGlkID0gcmVxdWlyZSgnc2hvcnRpZCcpXHJcblxyXG5jb25zdCBTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZURpc3BsYXlUaHJvdHRsZWQgPSBfLmRlYm91bmNlKChpZCwgZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhyb3R0bGVkIDogJywgaWQsICcgZGF0YSA6ICcsIGRhdGEsICcgRGlzcGxheSA6ICcsIGRpc3BsYXlDdHgpXHJcbiAgICAgICAgcmV0dXJuIERpc3BsYXlBY3Rpb25zLnVwZGF0ZURpc3BsYXkoaWQsIGRhdGEpXHJcbiAgICAgIH0sIDMwMClcclxuXHJcbiAgICBjb25zdCBkaXNwbGF5SW5pdGlhbCA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBuYW1lOiBudWxsLFxyXG4gICAgICAgIGxheW91dDogbnVsbCxcclxuICAgICAgICBzdGF0dXNCYXI6IG51bGwsXHJcbiAgICAgICAgd2lkZ2V0czogbnVsbCxcclxuICAgICAgICAvKipcclxuICAgICAgICBzZXRJZCxcclxuICAgICAgICBzZXROYW1lLFxyXG4gICAgICAgIHVwZGF0ZU5hbWUsXHJcbiAgICAgICAgdXBkYXRlTGF5b3V0LFxyXG4gICAgICAgIGFkZFN0YXR1c0Jhckl0ZW0sXHJcbiAgICAgICAgcmVtb3ZlU3RhdHVzQmFySXRlbSxcclxuICAgICAgICByZW9yZGVyU3RhdHVzQmFySXRlbXNcclxuICAgICAgICAqL1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtkaXNwbGF5Q3R4LCBzZXREaXNwbGF5Q3R4XSA9IHVzZVN0YXRlKGRpc3BsYXlJbml0aWFsKTtcclxuXHJcbiAgICBjb25zdCBzZXRJZEN0eCA9IGFzeW5jKGlkKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpZCkgcmV0dXJuXHJcbiAgICAgICAgZGlzcGxheUN0eC5faWQgPSBpZFxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlJbmZvID0gYXdhaXQgRGlzcGxheUFjdGlvbnMuZ2V0RGlzcGxheShpZClcclxuICAgICAgICBkaXNwbGF5Q3R4LmxheW91dCA9IGRpc3BsYXlJbmZvLmxheW91dFxyXG4gICAgICAgIGRpc3BsYXlDdHguc3RhdHVzQmFyID0gZGlzcGxheUluZm8uc3RhdHVzQmFyXHJcbiAgICAgICAgZGlzcGxheUN0eC5uYW1lID0gZGlzcGxheUluZm8ubmFtZVxyXG4gICAgICAgIGRpc3BsYXlDdHgud2lkZ2V0cyA9IGRpc3BsYXlJbmZvLndpZGdldHNcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXROYW1lQ3R4ID0gYXN5bmMgKG5hbWUpID0+IHtcclxuICAgICAgICBpZiAoIW5hbWUpIHJldHVyblxyXG4gICAgICAgIGRpc3BsYXlDdHgubmFtZSA9IG5hbWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVOYW1lQ3R4ID0gYXN5bmMgKG5hbWUpID0+IHtcclxuICAgICAgICBpZiAoIW5hbWUpIHJldHVyblxyXG4gICAgICAgIGRpc3BsYXlDdHgubmFtZSA9IG5hbWVcclxuICAgICAgICB1cGRhdGVEaXNwbGF5VGhyb3R0bGVkKGRpc3BsYXlDdHguX2lkLCB7IG5hbWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVMYXlvdXRDdHggPSBhc3luYyhsYXlvdXQpID0+IHtcclxuICAgICAgICBpZiAoIWxheW91dCB8fCAhWydzcGFjZWQnLCAnY29tcGFjdCddLmluY2x1ZGVzKGxheW91dCkpIHJldHVyblxyXG4gICAgICAgIGRpc3BsYXlDdHgubGF5b3V0ID0gbGF5b3V0XHJcbiAgICAgICAgdXBkYXRlRGlzcGxheVRocm90dGxlZChkaXNwbGF5Q3R4Ll9pZCwgeyBsYXlvdXQgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRTdGF0dXNCYXJJdGVtQ3R4ID0gYXN5bmModHlwZSkgPT4ge1xyXG4gICAgICBkaXNwbGF5Q3R4LnN0YXR1c0JhciA9IFsuLi5kaXNwbGF5Q3R4LnN0YXR1c0JhciwgdHlwZSArICdfJyArIHNob3J0aWQuZ2VuZXJhdGUoKV1cclxuICAgICAgICB1cGRhdGVEaXNwbGF5VGhyb3R0bGVkKGRpc3BsYXlDdHguX2lkLCB7IHN0YXR1c0JhcjogZGlzcGxheUN0eC5zdGF0dXNCYXIgfSlcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVTdGF0dXNCYXJJdGVtQ3R4ID0gYXN5bmMoaWQpID0+IHtcclxuICAgICAgZGlzcGxheUN0eC5zdGF0dXNCYXIgPSBbLi4uZGlzcGxheUN0eC5zdGF0dXNCYXIuc2xpY2UoMCwgaWQpLmNvbmNhdChkaXNwbGF5LnN0YXR1c0Jhci5zbGljZShpZCArIDEpKV1cclxuICAgICAgICB1cGRhdGVEaXNwbGF5VGhyb3R0bGVkKGRpc3BsYXlDdHguaWQsIHsgc3RhdHVzQmFyOiBkaXNwbGF5Q3R4LnN0YXR1c0JhciB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlb3JkZXJTdGF0dXNCYXJJdGVtc0N0eCA9IGFzeW5jKHN0YXJ0SW5kZXgsIGVuZEluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gQXJyYXkuZnJvbShkaXNwbGF5Q3R4LnN0YXR1c0JhcilcclxuICAgICAgICBjb25zdCBbcmVtb3ZlZF0gPSByZXN1bHQuc3BsaWNlKHN0YXJ0SW5kZXgsIDEpXHJcbiAgICAgICAgcmVzdWx0LnNwbGljZShlbmRJbmRleCwgMCwgcmVtb3ZlZClcclxuXHJcbiAgICAgICAgZGlzcGxheUN0eC5zdGF0dXNCYXIgPSByZXN1bHRcclxuICAgICAgICB1cGRhdGVEaXNwbGF5VGhyb3R0bGVkKGRpc3BsYXlDdHguaWQsIHsgc3RhdHVzQmFyOiBkaXNwbGF5Q3R4LnN0YXR1c0JhciB9KVxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0YXRlQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGRpc3BsYXlDdHgsXHJcbiAgICAgICAgc2V0RGlzcGxheUN0eCxcclxuICAgICAgICBzZXRJZEN0eCxcclxuICAgICAgICBzZXROYW1lQ3R4LFxyXG4gICAgICAgIHVwZGF0ZU5hbWVDdHgsXHJcbiAgICAgICAgdXBkYXRlTGF5b3V0Q3R4XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfIiwicmVxdWlyZSIsIkRpc3BsYXlBY3Rpb25zIiwic2hvcnRpZCIsIlN0YXRlQ29udGV4dCIsIkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXBkYXRlRGlzcGxheVRocm90dGxlZCIsImRlYm91bmNlIiwiaWQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXlDdHgiLCJ1cGRhdGVEaXNwbGF5IiwiZGlzcGxheUluaXRpYWwiLCJuYW1lIiwibGF5b3V0Iiwic3RhdHVzQmFyIiwid2lkZ2V0cyIsInNldERpc3BsYXlDdHgiLCJzZXRJZEN0eCIsIl9pZCIsImRpc3BsYXlJbmZvIiwiZ2V0RGlzcGxheSIsInNldE5hbWVDdHgiLCJ1cGRhdGVOYW1lQ3R4IiwidXBkYXRlTGF5b3V0Q3R4IiwiaW5jbHVkZXMiLCJhZGRTdGF0dXNCYXJJdGVtQ3R4IiwidHlwZSIsImdlbmVyYXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZW1vdmVTdGF0dXNCYXJJdGVtQ3R4Iiwic2xpY2UiLCJjb25jYXQiLCJkaXNwbGF5IiwicmVvcmRlclN0YXR1c0Jhckl0ZW1zQ3R4Iiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwicmVzdWx0IiwiQXJyYXkiLCJmcm9tIiwicmVtb3ZlZCIsInNwbGljZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VTdGF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/contexts/DisplayContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_GridLayoutStyles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/GridLayoutStyles.css */ \"./src/styles/GridLayoutStyles.css\");\n/* harmony import */ var _styles_GridLayoutStyles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_GridLayoutStyles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-resizable/css/styles.css */ \"./node_modules/react-resizable/css/styles.css\");\n/* harmony import */ var react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_contexts_DisplayContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/contexts/DisplayContext */ \"./src/lib/contexts/DisplayContext.js\");\n\n\n\n // Search usage\n\n\n\nfunction App({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_4__.SessionProvider, {\n            session: session,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_contexts_DisplayContext__WEBPACK_IMPORTED_MODULE_6__.ContextProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adminsys\\\\Documents\\\\GitHub\\\\signalia\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adminsys\\\\Documents\\\\GitHub\\\\signalia\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\adminsys\\\\Documents\\\\GitHub\\\\signalia\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 16,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.appWithTranslation)(App));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDUztBQUNDLENBQUMsZUFBZTtBQUNOO0FBQ0E7QUFDYztBQUUvRCxTQUFTRyxJQUFJLEVBQ1hDLFVBQVMsRUFDVEMsV0FBVyxFQUNUQyxRQUFPLEVBQ1AsR0FBR0QsV0FDSixHQUFFLEVBQUU7SUFDTCxxQkFDQTtrQkFDRSw0RUFBQ0wsNERBQWVBO1lBQUNNLFNBQVNBO3NCQUN4Qiw0RUFBQ0oseUVBQWVBOzBCQUNkLDRFQUFDRTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQztBQUVBLGlFQUFlSixnRUFBa0JBLENBQUNFLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWduYWxpYS8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0ICdAL3N0eWxlcy9HcmlkTGF5b3V0U3R5bGVzLmNzcydcclxuaW1wb3J0ICdyZWFjdC1yZXNpemFibGUvY3NzL3N0eWxlcy5jc3MnIC8vIFNlYXJjaCB1c2FnZVxyXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcclxuaW1wb3J0IHsgYXBwV2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnbmV4dC1pMThuZXh0J1xyXG5pbXBvcnQgeyBDb250ZXh0UHJvdmlkZXIgfSBmcm9tICdAL2xpYi9jb250ZXh0cy9EaXNwbGF5Q29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIEFwcCh7IFxyXG4gIENvbXBvbmVudCwgXHJcbiAgcGFnZVByb3BzOiB7XHJcbiAgICBzZXNzaW9uLFxyXG4gICAgLi4ucGFnZVByb3BzXHJcbiAgfSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICA8PlxyXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cclxuICAgICAgPENvbnRleHRQcm92aWRlcj4gIFxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9Db250ZXh0UHJvdmlkZXI+XHJcbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cclxuICA8Lz5cclxuICApXHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBXaXRoVHJhbnNsYXRpb24oQXBwKSJdLCJuYW1lcyI6WyJTZXNzaW9uUHJvdmlkZXIiLCJhcHBXaXRoVHJhbnNsYXRpb24iLCJDb250ZXh0UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/react-resizable/css/styles.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-resizable/css/styles.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/GridLayoutStyles.css":
/*!*****************************************!*\
  !*** ./src/styles/GridLayoutStyles.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("shortid");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();