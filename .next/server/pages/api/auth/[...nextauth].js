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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//import axios from 'axios'\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                //const user = await axios.post('http://localhost:3001/api/v1/users/signin',{username: credentials.username, password: credentials.password})\n                const user = {\n                    data: {\n                        username: \"sainte-soline,\",\n                        email: \"sainte-soline@rip.fr\",\n                        password: \"democratie\"\n                    }\n                };\n                console.log(\"AUTHORIZE : \", user.data);\n                if (user.data.error) {\n                    throw new Error(\"No user found!\");\n                }\n                return user.data;\n            }\n        })\n    ],\n    callbacks: {\n        async session ({ session , token  }) {\n            session.user.role = token.role;\n            return session;\n        },\n        async jwt ({ token , user , profile , isNewUser  }) {\n            if (user) {\n                token.name = user.username;\n                token.role = user.role;\n            }\n            return token;\n        }\n    },\n    pages: {\n        signIn: \"/login\",\n        signOut: \"/\"\n    },\n    debug: true,\n    session: {\n        strategy: \"jwt\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFDaUM7QUFDakUsMkJBQTJCO0FBRXBCLE1BQU1FLGNBQWM7SUFDekIsaURBQWlEO0lBQ2pEQyxXQUFXO1FBQ1RGLHNFQUFtQkEsQ0FBQztZQUNoQkcsYUFBYTtnQkFDWEMsVUFBVTtvQkFBQ0MsT0FBTTtvQkFBWUMsTUFBSztnQkFBTTtnQkFDeENDLFVBQVU7b0JBQUNGLE9BQU07b0JBQVlDLE1BQU07Z0JBQVU7WUFDL0M7WUFDQSxNQUFNRSxXQUFVTCxXQUFXLEVBQUU7Z0JBQzNCLDZJQUE2STtnQkFDN0ksTUFBTU0sT0FBTztvQkFBQ0MsTUFBTzt3QkFBQ04sVUFBUzt3QkFBaUJPLE9BQU07d0JBQXVCSixVQUFTO29CQUFZO2dCQUFDO2dCQUNuR0ssUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkosS0FBS0MsSUFBSTtnQkFDckMsSUFBR0QsS0FBS0MsSUFBSSxDQUFDSSxLQUFLLEVBQUM7b0JBQ2pCLE1BQU0sSUFBSUMsTUFBTSxrQkFBaUI7Z0JBQ25DLENBQUM7Z0JBQ0QsT0FBT04sS0FBS0MsSUFBSTtZQUNsQjtRQUNKO0tBRUQ7SUFDRE0sV0FBVztRQUNULE1BQU1DLFNBQVEsRUFBRUEsUUFBTyxFQUFFQyxNQUFLLEVBQUUsRUFBRTtZQUNoQ0QsUUFBUVIsSUFBSSxDQUFDVSxJQUFJLEdBQUdELE1BQU1DLElBQUk7WUFDOUIsT0FBT0Y7UUFDVDtRQUNBLE1BQU1HLEtBQUksRUFBRUYsTUFBSyxFQUFFVCxLQUFJLEVBQUVZLFFBQU8sRUFBRUMsVUFBUyxFQUFFLEVBQUU7WUFDN0MsSUFBR2IsTUFBSztnQkFDTlMsTUFBTUssSUFBSSxHQUFHZCxLQUFLTCxRQUFRO2dCQUMxQmMsTUFBTUMsSUFBSSxHQUFHVixLQUFLVSxJQUFJO1lBQ3hCLENBQUM7WUFDRCxPQUFPRDtRQUNUO0lBQ0Y7SUFFQU0sT0FBTztRQUNMQyxRQUFRO1FBQ1JDLFNBQVM7SUFDWDtJQUNBQyxPQUFPLElBQUk7SUFDWFYsU0FBVTtRQUNSVyxVQUFVO0lBQ1o7QUFDRixFQUFDO0FBRUQsaUVBQWU3QixnREFBUUEsQ0FBQ0UsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpZ25hbGlhLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NzhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiXG4vL2ltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgIHVzZXJuYW1lOiB7bGFiZWw6J1VzZXJuYW1lJywgdHlwZTondGV4dCd9LFxuICAgICAgICAgIHBhc3N3b3JkOiB7bGFiZWw6J1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJ31cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgLy9jb25zdCB1c2VyID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS91c2Vycy9zaWduaW4nLHt1c2VybmFtZTogY3JlZGVudGlhbHMudXNlcm5hbWUsIHBhc3N3b3JkOiBjcmVkZW50aWFscy5wYXNzd29yZH0pXG4gICAgICAgICAgY29uc3QgdXNlciA9IHtkYXRhIDoge3VzZXJuYW1lOidzYWludGUtc29saW5lLCcsZW1haWw6J3NhaW50ZS1zb2xpbmVAcmlwLmZyJyxwYXNzd29yZDonZGVtb2NyYXRpZSd9fVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdBVVRIT1JJWkUgOiAnLCB1c2VyLmRhdGEpXG4gICAgICAgICAgaWYodXNlci5kYXRhLmVycm9yKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdXNlciBmb3VuZCEnKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdXNlci5kYXRhXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBzZXNzaW9uLnVzZXIucm9sZSA9IHRva2VuLnJvbGVcbiAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgfSxcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciwgcHJvZmlsZSwgaXNOZXdVc2VyIH0pIHtcbiAgICAgIGlmKHVzZXIpe1xuICAgICAgICB0b2tlbi5uYW1lID0gdXNlci51c2VybmFtZVxuICAgICAgICB0b2tlbi5yb2xlID0gdXNlci5yb2xlXG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW5cbiAgICB9XG4gIH0sXG5cbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvbG9naW4nLFxuICAgIHNpZ25PdXQ6ICcvJ1xuICB9LFxuICBkZWJ1ZzogdHJ1ZSxcbiAgc2Vzc2lvbiA6IHtcbiAgICBzdHJhdGVneTogJ2p3dCdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucykiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZGF0YSIsImVtYWlsIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiRXJyb3IiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidG9rZW4iLCJyb2xlIiwiand0IiwicHJvZmlsZSIsImlzTmV3VXNlciIsIm5hbWUiLCJwYWdlcyIsInNpZ25JbiIsInNpZ25PdXQiLCJkZWJ1ZyIsInN0cmF0ZWd5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

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