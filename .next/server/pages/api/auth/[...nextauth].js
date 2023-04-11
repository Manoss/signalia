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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//import axios from 'axios'\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                //const user = await axios.post('http://localhost:3001/api/v1/users/signin',{username: credentials.username, password: credentials.password})\n                const user = {\n                    data: {\n                        username: \"sainte-soline,\",\n                        email: \"sainte-soline@rip.fr\",\n                        password: \"democratie\"\n                    }\n                };\n                console.log(\"AUTHORIZE : \", user.data);\n                if (user.data.error) {\n                    throw new Error(\"No user found!\");\n                }\n                return user.data;\n            }\n        })\n    ],\n    callbacks: {\n        async session ({ session , token  }) {\n            session.user.role = token.role;\n            return session;\n        },\n        async jwt ({ token , user , profile , isNewUser  }) {\n            if (user) {\n                token.name = user.username;\n                token.role = user.role;\n            }\n            return token;\n        }\n    },\n    pages: {\n        signIn: \"/login\",\n        signOut: \"/\"\n    },\n    debug: true,\n    session: {\n        strategy: \"jwt\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFDaUM7QUFDakUsMkJBQTJCO0FBRXBCLE1BQU1FLGNBQWM7SUFDekIsaURBQWlEO0lBQ2pEQyxXQUFXO1FBQ1RGLHNFQUFtQkEsQ0FBQztZQUNoQkcsYUFBYTtnQkFDWEMsVUFBVTtvQkFBQ0MsT0FBTTtvQkFBWUMsTUFBSztnQkFBTTtnQkFDeENDLFVBQVU7b0JBQUNGLE9BQU07b0JBQVlDLE1BQU07Z0JBQVU7WUFDL0M7WUFDQSxNQUFNRSxXQUFVTCxXQUFXLEVBQUU7Z0JBQzNCLDZJQUE2STtnQkFDN0ksTUFBTU0sT0FBTztvQkFBQ0MsTUFBTzt3QkFBQ04sVUFBUzt3QkFBaUJPLE9BQU07d0JBQXVCSixVQUFTO29CQUFZO2dCQUFDO2dCQUNuR0ssUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkosS0FBS0MsSUFBSTtnQkFDckMsSUFBR0QsS0FBS0MsSUFBSSxDQUFDSSxLQUFLLEVBQUM7b0JBQ2pCLE1BQU0sSUFBSUMsTUFBTSxrQkFBaUI7Z0JBQ25DLENBQUM7Z0JBQ0QsT0FBT04sS0FBS0MsSUFBSTtZQUNsQjtRQUNKO0tBRUQ7SUFDRE0sV0FBVztRQUNULE1BQU1DLFNBQVEsRUFBRUEsUUFBTyxFQUFFQyxNQUFLLEVBQUUsRUFBRTtZQUNoQ0QsUUFBUVIsSUFBSSxDQUFDVSxJQUFJLEdBQUdELE1BQU1DLElBQUk7WUFDOUIsT0FBT0Y7UUFDVDtRQUNBLE1BQU1HLEtBQUksRUFBRUYsTUFBSyxFQUFFVCxLQUFJLEVBQUVZLFFBQU8sRUFBRUMsVUFBUyxFQUFFLEVBQUU7WUFDN0MsSUFBR2IsTUFBSztnQkFDTlMsTUFBTUssSUFBSSxHQUFHZCxLQUFLTCxRQUFRO2dCQUMxQmMsTUFBTUMsSUFBSSxHQUFHVixLQUFLVSxJQUFJO1lBQ3hCLENBQUM7WUFDRCxPQUFPRDtRQUNUO0lBQ0Y7SUFFQU0sT0FBTztRQUNMQyxRQUFRO1FBQ1JDLFNBQVM7SUFDWDtJQUNBQyxPQUFPLElBQUk7SUFDWFYsU0FBVTtRQUNSVyxVQUFVO0lBQ1o7QUFDRixFQUFDO0FBRUQsaUVBQWU3QixnREFBUUEsQ0FBQ0UsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpZ25hbGlhLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NzhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcclxuLy9pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XHJcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB7bGFiZWw6J1VzZXJuYW1lJywgdHlwZTondGV4dCd9LFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHtsYWJlbDonUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgICAvL2NvbnN0IHVzZXIgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3VzZXJzL3NpZ25pbicse3VzZXJuYW1lOiBjcmVkZW50aWFscy51c2VybmFtZSwgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkfSlcclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSB7ZGF0YSA6IHt1c2VybmFtZTonc2FpbnRlLXNvbGluZSwnLGVtYWlsOidzYWludGUtc29saW5lQHJpcC5mcicscGFzc3dvcmQ6J2RlbW9jcmF0aWUnfX1cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdBVVRIT1JJWkUgOiAnLCB1c2VyLmRhdGEpXHJcbiAgICAgICAgICBpZih1c2VyLmRhdGEuZXJyb3Ipe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHVzZXIgZm91bmQhJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB1c2VyLmRhdGFcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcclxuICBdLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi5yb2xlXHJcbiAgICAgIHJldHVybiBzZXNzaW9uXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIHByb2ZpbGUsIGlzTmV3VXNlciB9KSB7XHJcbiAgICAgIGlmKHVzZXIpe1xyXG4gICAgICAgIHRva2VuLm5hbWUgPSB1c2VyLnVzZXJuYW1lXHJcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlblxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHBhZ2VzOiB7XHJcbiAgICBzaWduSW46ICcvbG9naW4nLFxyXG4gICAgc2lnbk91dDogJy8nXHJcbiAgfSxcclxuICBkZWJ1ZzogdHJ1ZSxcclxuICBzZXNzaW9uIDoge1xyXG4gICAgc3RyYXRlZ3k6ICdqd3QnXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucykiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZGF0YSIsImVtYWlsIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiRXJyb3IiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidG9rZW4iLCJyb2xlIiwiand0IiwicHJvZmlsZSIsImlzTmV3VXNlciIsIm5hbWUiLCJwYWdlcyIsInNpZ25JbiIsInNpZ25PdXQiLCJkZWJ1ZyIsInN0cmF0ZWd5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();