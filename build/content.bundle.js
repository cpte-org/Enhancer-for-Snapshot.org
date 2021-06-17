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

eval("/*\nlet elements = document.querySelectorAll('p');\nconsole.log(elements);\n*/\n\nconsole.log(\"*************content***********\");\n\nlet storage = chrome.storage.local;\n\n\n//let currentIndex;\nlet result;\nfunction updateView(spaces){\n    console.log(spaces)\n}\n\nsetInterval(function() {\n    storage.get((result) => {\n        if (result.update){\n            updateView(result.Spaces);\n            storage.set({\"update\": false}, () => {\n                console.log(\"[info]: 'Update' Flag Reset\");\n            });\n            //currentIndex = result.Spaces.lenght;\n        }\n      });\n  }, 1000); //Every 1000ms = 1sec\n\n/*\nconst appendSpace = function(space) {\n    key = Object.keys(space)[0];\n\n    function insertAfter(referenceNode, newNode) {\n        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);\n    }\n\n    var el = document.createElement(\"div\");\n    el.innerHTML = key + \" \" + space[key].name + \" \" + space[key].symbol;\n\n    var div = document.getElementsByClassName(\"mb-4\");\n\n    insertAfter(div[0], el);\n\n}\n*/\n\n    /*\n\n        function insertAfter(referenceNode, newNode) {\n            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);\n        }\n\n        var el = document.createElement(\"a\");\n        el.innerHTML = \"test\";\n        https://worker.snapshot.org/mirror?img=https%3A%2F%2Fraw.githubusercontent.com%2Fsnapshot-labs%2Fsnapshot-spaces%2Fmaster%2Fspaces%2Faragon%2Fspace.png\n\n        var div = document.getElementsByClassName(\"mb-4\");\n\n        insertAfter(div[0], el);\n\n    */\n\n        //https://stackoverflow.com/questions/16334054/inject-html-into-a-page-from-a-content-script\n/*\nfetch(chrome.runtime.getURL('../content-script/modal.html')).then(r => r.text()).then(html => {\n    document.body.insertAdjacentHTML('beforeend', html);\n    // not using innerHTML as it would break js event listeners of the page\n  });\n  *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29udGVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9jb250ZW50LmpzPzRmYWMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbmxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKTtcbmNvbnNvbGUubG9nKGVsZW1lbnRzKTtcbiovXG5cbmNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKmNvbnRlbnQqKioqKioqKioqKlwiKTtcblxubGV0IHN0b3JhZ2UgPSBjaHJvbWUuc3RvcmFnZS5sb2NhbDtcblxuXG4vL2xldCBjdXJyZW50SW5kZXg7XG5sZXQgcmVzdWx0O1xuZnVuY3Rpb24gdXBkYXRlVmlldyhzcGFjZXMpe1xuICAgIGNvbnNvbGUubG9nKHNwYWNlcylcbn1cblxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgc3RvcmFnZS5nZXQoKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LnVwZGF0ZSl7XG4gICAgICAgICAgICB1cGRhdGVWaWV3KHJlc3VsdC5TcGFjZXMpO1xuICAgICAgICAgICAgc3RvcmFnZS5zZXQoe1widXBkYXRlXCI6IGZhbHNlfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW2luZm9dOiAnVXBkYXRlJyBGbGFnIFJlc2V0XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2N1cnJlbnRJbmRleCA9IHJlc3VsdC5TcGFjZXMubGVuZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSwgMTAwMCk7IC8vRXZlcnkgMTAwMG1zID0gMXNlY1xuXG4vKlxuY29uc3QgYXBwZW5kU3BhY2UgPSBmdW5jdGlvbihzcGFjZSkge1xuICAgIGtleSA9IE9iamVjdC5rZXlzKHNwYWNlKVswXTtcblxuICAgIGZ1bmN0aW9uIGluc2VydEFmdGVyKHJlZmVyZW5jZU5vZGUsIG5ld05vZGUpIHtcbiAgICAgICAgcmVmZXJlbmNlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlLm5leHRTaWJsaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVsLmlubmVySFRNTCA9IGtleSArIFwiIFwiICsgc3BhY2Vba2V5XS5uYW1lICsgXCIgXCIgKyBzcGFjZVtrZXldLnN5bWJvbDtcblxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWItNFwiKTtcblxuICAgIGluc2VydEFmdGVyKGRpdlswXSwgZWwpO1xuXG59XG4qL1xuXG4gICAgLypcblxuICAgICAgICBmdW5jdGlvbiBpbnNlcnRBZnRlcihyZWZlcmVuY2VOb2RlLCBuZXdOb2RlKSB7XG4gICAgICAgICAgICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IFwidGVzdFwiO1xuICAgICAgICBodHRwczovL3dvcmtlci5zbmFwc2hvdC5vcmcvbWlycm9yP2ltZz1odHRwcyUzQSUyRiUyRnJhdy5naXRodWJ1c2VyY29udGVudC5jb20lMkZzbmFwc2hvdC1sYWJzJTJGc25hcHNob3Qtc3BhY2VzJTJGbWFzdGVyJTJGc3BhY2VzJTJGYXJhZ29uJTJGc3BhY2UucG5nXG5cbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYi00XCIpO1xuXG4gICAgICAgIGluc2VydEFmdGVyKGRpdlswXSwgZWwpO1xuXG4gICAgKi9cblxuICAgICAgICAvL2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2MzM0MDU0L2luamVjdC1odG1sLWludG8tYS1wYWdlLWZyb20tYS1jb250ZW50LXNjcmlwdFxuLypcbmZldGNoKGNocm9tZS5ydW50aW1lLmdldFVSTCgnLi4vY29udGVudC1zY3JpcHQvbW9kYWwuaHRtbCcpKS50aGVuKHIgPT4gci50ZXh0KCkpLnRoZW4oaHRtbCA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICAgIC8vIG5vdCB1c2luZyBpbm5lckhUTUwgYXMgaXQgd291bGQgYnJlYWsganMgZXZlbnQgbGlzdGVuZXJzIG9mIHRoZSBwYWdlXG4gIH0pO1xuICAqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/content.js\n");

/***/ })

/******/ });