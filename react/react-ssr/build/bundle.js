/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\src\\\\server\\\\index.js: Unexpected token (19:15)\\n\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39mapp\\u001b[33m.\\u001b[39mget(\\u001b[32m'*'\\u001b[39m\\u001b[33m,\\u001b[39m (req\\u001b[33m,\\u001b[39m res) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 18 | \\u001b[39m  \\u001b[90m// 入口组件 jsx \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 19 | \\u001b[39m  \\u001b[36mconst\\u001b[39m \\u001b[33mApp\\u001b[39m \\u001b[33m=\\u001b[39m (\\u001b[33m<\\u001b[39m\\u001b[33mHeader\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m               \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 20 | \\u001b[39m  \\u001b[90m// jsx -> babel -> React.createElement()\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 21 | \\u001b[39m  \\u001b[36mconst\\u001b[39m htmlStr \\u001b[33m=\\u001b[39m renderToString(\\u001b[33mApp\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 22 | \\u001b[39m  console\\u001b[33m.\\u001b[39mlog(htmlStr)\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser._raise (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:746:17)\\n    at Parser.raiseWithData (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:739:17)\\n    at Parser.raise (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:733:17)\\n    at Parser.unexpected (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8807:16)\\n    at Parser.parseExprAtom (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10130:20)\\n    at Parser.parseExprSubscripts (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9656:23)\\n    at Parser.parseMaybeUnary (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9636:21)\\n    at Parser.parseExprOps (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9506:23)\\n    at Parser.parseMaybeConditional (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9479:23)\\n    at Parser.parseMaybeAssign (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9434:21)\\n    at Parser.parseParenAndDistinguishExpression (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10267:28)\\n    at Parser.parseExprAtom (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10007:21)\\n    at Parser.parseExprSubscripts (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9656:23)\\n    at Parser.parseMaybeUnary (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9636:21)\\n    at Parser.parseExprOps (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9506:23)\\n    at Parser.parseMaybeConditional (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9479:23)\\n    at Parser.parseMaybeAssign (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9434:21)\\n    at Parser.parseVar (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11815:26)\\n    at Parser.parseVarStatement (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11624:10)\\n    at Parser.parseStatementContent (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11223:21)\\n    at Parser.parseStatement (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11156:17)\\n    at Parser.parseBlockOrModuleBlockBody (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11731:25)\\n    at Parser.parseBlockBody (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11717:10)\\n    at Parser.parseBlock (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11701:10)\\n    at Parser.parseFunctionBody (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10708:24)\\n    at Parser.parseArrowExpression (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10677:10)\\n    at Parser.parseParenAndDistinguishExpression (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10295:12)\\n    at Parser.parseExprAtom (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10007:21)\\n    at Parser.parseExprSubscripts (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9656:23)\\n    at Parser.parseMaybeUnary (D:\\\\lesson_shuidi\\\\LESSON\\\\react\\\\react-ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9636:21)\");\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ })

/******/ });