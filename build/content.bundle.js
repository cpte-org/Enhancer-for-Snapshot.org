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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/content.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/content.js":
/*!***************************!*\
  !*** ./src/js/content.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nlet elements = document.querySelectorAll('p');\nconsole.log(elements);\n*/\n\nconsole.log(\"*************content***********\");\n\nlet storage = chrome.storage.local;\n\nfunction displayLoading(){\n    console.log(\"loading\");\n}\nfunction displaySpaces(spaces){ //spaces[]\n    console.log(spaces);\n}\n\nconst interval = setInterval(function() {\n    storage.get( (result) => {\n        console.log(result);\n        if (result.done){\n            displaySpaces(result.Spaces);\n            clearInterval(interval);\n        }else{\n            if (result.update == true || result.update == null){\n                displayLoading();\n                storage.set({\"update\": false}, () => {\n                    console.log(\"[info]: 'Update' Flag Reset\");\n                });\n            }\n        }\n    });\n}, 1000); //Every 1000ms = 1sec\n;\n\n\n\n//wait for storage.Spaces to fill, then displaySpaces\n/*\nsetInterval(function() {\nstorage.get((result) => {\n    if(result.update == false){\n        console.log(\"[info]: 'Update' Flag DOWN\");\n        displaySpaces(result.Spaces);\n    }else{\n        console.log(\"[info]: 'Update' Flag UP\");\n        \n            storage.get((result) => {\n                if (result.update){\n                    displaySpaces(result.Spaces);\n                    storage.set({\"update\": false}, () => {\n                        console.log(\"[info]: 'Update' Flag Reset\");\n                    });\n                }\n              });\n          \n          \n    }\n});\n\n}, 1000); //Every 1000ms = 1sec\n*/\n\n/*\nconst appendSpace = function(space) {\n    key = Object.keys(space)[0];\n\n    function insertAfter(referenceNode, newNode) {\n        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);\n    }\n\n    var el = document.createElement(\"div\");\n    el.innerHTML = key + \" \" + space[key].name + \" \" + space[key].symbol;\n\n    var div = document.getElementsByClassName(\"mb-4\");\n\n    insertAfter(div[0], el);\n\n}\n*/\n\n    /*\n\n        function insertAfter(referenceNode, newNode) {\n            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);\n        }\n\n        var el = document.createElement(\"a\");\n        el.innerHTML = \"test\";\n        https://worker.snapshot.org/mirror?img=https%3A%2F%2Fraw.githubusercontent.com%2Fsnapshot-labs%2Fsnapshot-spaces%2Fmaster%2Fspaces%2Faragon%2Fspace.png\n\n        var div = document.getElementsByClassName(\"mb-4\");\n\n        insertAfter(div[0], el);\n\n    */\n\n        //https://stackoverflow.com/questions/16334054/inject-html-into-a-page-from-a-content-script\n/*\nfetch(chrome.runtime.getURL('../content-script/modal.html')).then(r => r.text()).then(html => {\n    document.body.insertAdjacentHTML('beforeend', html);\n    // not using innerHTML as it would break js event listeners of the page\n  });\n  *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29udGVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9jb250ZW50LmpzPzRmYWMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbmxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKTtcbmNvbnNvbGUubG9nKGVsZW1lbnRzKTtcbiovXG5cbmNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKmNvbnRlbnQqKioqKioqKioqKlwiKTtcblxubGV0IHN0b3JhZ2UgPSBjaHJvbWUuc3RvcmFnZS5sb2NhbDtcblxuZnVuY3Rpb24gZGlzcGxheUxvYWRpbmcoKXtcbiAgICBjb25zb2xlLmxvZyhcImxvYWRpbmdcIik7XG59XG5mdW5jdGlvbiBkaXNwbGF5U3BhY2VzKHNwYWNlcyl7IC8vc3BhY2VzW11cbiAgICBjb25zb2xlLmxvZyhzcGFjZXMpO1xufVxuXG5jb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIHN0b3JhZ2UuZ2V0KCAocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIGlmIChyZXN1bHQuZG9uZSl7XG4gICAgICAgICAgICBkaXNwbGF5U3BhY2VzKHJlc3VsdC5TcGFjZXMpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYgKHJlc3VsdC51cGRhdGUgPT0gdHJ1ZSB8fCByZXN1bHQudXBkYXRlID09IG51bGwpe1xuICAgICAgICAgICAgICAgIGRpc3BsYXlMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgc3RvcmFnZS5zZXQoe1widXBkYXRlXCI6IGZhbHNlfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltpbmZvXTogJ1VwZGF0ZScgRmxhZyBSZXNldFwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSwgMTAwMCk7IC8vRXZlcnkgMTAwMG1zID0gMXNlY1xuO1xuXG5cblxuLy93YWl0IGZvciBzdG9yYWdlLlNwYWNlcyB0byBmaWxsLCB0aGVuIGRpc3BsYXlTcGFjZXNcbi8qXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbnN0b3JhZ2UuZ2V0KChyZXN1bHQpID0+IHtcbiAgICBpZihyZXN1bHQudXBkYXRlID09IGZhbHNlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJbaW5mb106ICdVcGRhdGUnIEZsYWcgRE9XTlwiKTtcbiAgICAgICAgZGlzcGxheVNwYWNlcyhyZXN1bHQuU3BhY2VzKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coXCJbaW5mb106ICdVcGRhdGUnIEZsYWcgVVBcIik7XG4gICAgICAgIFxuICAgICAgICAgICAgc3RvcmFnZS5nZXQoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudXBkYXRlKXtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNwYWNlcyhyZXN1bHQuU3BhY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5zZXQoe1widXBkYXRlXCI6IGZhbHNlfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbaW5mb106ICdVcGRhdGUnIEZsYWcgUmVzZXRcIik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgfVxufSk7XG5cbn0sIDEwMDApOyAvL0V2ZXJ5IDEwMDBtcyA9IDFzZWNcbiovXG5cbi8qXG5jb25zdCBhcHBlbmRTcGFjZSA9IGZ1bmN0aW9uKHNwYWNlKSB7XG4gICAga2V5ID0gT2JqZWN0LmtleXMoc3BhY2UpWzBdO1xuXG4gICAgZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIocmVmZXJlbmNlTm9kZSwgbmV3Tm9kZSkge1xuICAgICAgICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xuICAgIH1cblxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWwuaW5uZXJIVE1MID0ga2V5ICsgXCIgXCIgKyBzcGFjZVtrZXldLm5hbWUgKyBcIiBcIiArIHNwYWNlW2tleV0uc3ltYm9sO1xuXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYi00XCIpO1xuXG4gICAgaW5zZXJ0QWZ0ZXIoZGl2WzBdLCBlbCk7XG5cbn1cbiovXG5cbiAgICAvKlxuXG4gICAgICAgIGZ1bmN0aW9uIGluc2VydEFmdGVyKHJlZmVyZW5jZU5vZGUsIG5ld05vZGUpIHtcbiAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gXCJ0ZXN0XCI7XG4gICAgICAgIGh0dHBzOi8vd29ya2VyLnNuYXBzaG90Lm9yZy9taXJyb3I/aW1nPWh0dHBzJTNBJTJGJTJGcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSUyRnNuYXBzaG90LWxhYnMlMkZzbmFwc2hvdC1zcGFjZXMlMkZtYXN0ZXIlMkZzcGFjZXMlMkZhcmFnb24lMkZzcGFjZS5wbmdcblxuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1iLTRcIik7XG5cbiAgICAgICAgaW5zZXJ0QWZ0ZXIoZGl2WzBdLCBlbCk7XG5cbiAgICAqL1xuXG4gICAgICAgIC8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTYzMzQwNTQvaW5qZWN0LWh0bWwtaW50by1hLXBhZ2UtZnJvbS1hLWNvbnRlbnQtc2NyaXB0XG4vKlxuZmV0Y2goY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCcuLi9jb250ZW50LXNjcmlwdC9tb2RhbC5odG1sJykpLnRoZW4ociA9PiByLnRleHQoKSkudGhlbihodG1sID0+IHtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gICAgLy8gbm90IHVzaW5nIGlubmVySFRNTCBhcyBpdCB3b3VsZCBicmVhayBqcyBldmVudCBsaXN0ZW5lcnMgb2YgdGhlIHBhZ2VcbiAgfSk7XG4gICovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/content.js\n");

/***/ })

/******/ });