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

eval("console.log(\"*************content***********\");\n\nlet storage = chrome.storage.local;\n\nlet stateCheck = setInterval(()=>{\n    if(document.readyState==\"complete\"){\n        var el = document.createElement(\"div\");\n        var div = document.getElementsByClassName(\"text-center mb-4 mx-auto\");\n        div[0].insertAdjacentHTML(\"afterend\", \"<div id='eligibleSpaces'></div>\");\n        clearInterval(stateCheck);\n    }\n}, 100) \n\n\nfunction display(mode){\n    switch(mode) {\n        case 0:\n            console.log(\"Placeholder ( setAddress (address and submit button form)\");\n            break;\n        case 1:\n            console.log(\"loading (loading animation until (storage.done), tail console logs)\");\n            break;\n        default:\n            console.log(\"displaySpaces (flex box table: spaces.forEach(insertInTable))\");\n            //https://worker.snapshot.org/mirror?img=https%3A%2F%2Fraw.githubusercontent.com%2Fsnapshot-labs%2Fsnapshot-spaces%2Fmaster%2Fspaces%2Faragon%2Fspace.png\n\n      } \n}\n\nconst interval = setInterval(function() {\n    storage.get( (result) => {\n        //console.log(result);\n        if (result.done){\n            display(result.Spaces);\n            clearInterval(interval);\n        }else{\n            if (result.update){\n                display(1);\n                storage.set({\"update\": false}, () => {\n                    console.log(\"[info]: 'Update' Flag Reset\");\n                });\n            }else if(result.update == null){\n                display(0);\n            }\n        }\n    });\n}, 1000);\n;\n\n\n\n//https://stackoverflow.com/questions/16334054/inject-html-into-a-page-from-a-content-script\n\n        \n/*\nfetch(chrome.runtime.getURL('../content-script/modal.html')).then(r => r.text()).then(html => {\n    document.body.insertAdjacentHTML('beforeend', html);\n    // not using innerHTML as it would break js event listeners of the page\n  });\n  *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29udGVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9jb250ZW50LmpzPzRmYWMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCIqKioqKioqKioqKioqY29udGVudCoqKioqKioqKioqXCIpO1xuXG5sZXQgc3RvcmFnZSA9IGNocm9tZS5zdG9yYWdlLmxvY2FsO1xuXG5sZXQgc3RhdGVDaGVjayA9IHNldEludGVydmFsKCgpPT57XG4gICAgaWYoZG9jdW1lbnQucmVhZHlTdGF0ZT09XCJjb21wbGV0ZVwiKXtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0ZXh0LWNlbnRlciBtYi00IG14LWF1dG9cIik7XG4gICAgICAgIGRpdlswXS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmVuZFwiLCBcIjxkaXYgaWQ9J2VsaWdpYmxlU3BhY2VzJz48L2Rpdj5cIik7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc3RhdGVDaGVjayk7XG4gICAgfVxufSwgMTAwKSBcblxuXG5mdW5jdGlvbiBkaXNwbGF5KG1vZGUpe1xuICAgIHN3aXRjaChtb2RlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxhY2Vob2xkZXIgKCBzZXRBZGRyZXNzIChhZGRyZXNzIGFuZCBzdWJtaXQgYnV0dG9uIGZvcm0pXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZyAobG9hZGluZyBhbmltYXRpb24gdW50aWwgKHN0b3JhZ2UuZG9uZSksIHRhaWwgY29uc29sZSBsb2dzKVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXNwbGF5U3BhY2VzIChmbGV4IGJveCB0YWJsZTogc3BhY2VzLmZvckVhY2goaW5zZXJ0SW5UYWJsZSkpXCIpO1xuICAgICAgICAgICAgLy9odHRwczovL3dvcmtlci5zbmFwc2hvdC5vcmcvbWlycm9yP2ltZz1odHRwcyUzQSUyRiUyRnJhdy5naXRodWJ1c2VyY29udGVudC5jb20lMkZzbmFwc2hvdC1sYWJzJTJGc25hcHNob3Qtc3BhY2VzJTJGbWFzdGVyJTJGc3BhY2VzJTJGYXJhZ29uJTJGc3BhY2UucG5nXG5cbiAgICAgIH0gXG59XG5cbmNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgc3RvcmFnZS5nZXQoIChyZXN1bHQpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICBpZiAocmVzdWx0LmRvbmUpe1xuICAgICAgICAgICAgZGlzcGxheShyZXN1bHQuU3BhY2VzKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudXBkYXRlKXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5KDEpO1xuICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0KHtcInVwZGF0ZVwiOiBmYWxzZX0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbaW5mb106ICdVcGRhdGUnIEZsYWcgUmVzZXRcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9ZWxzZSBpZihyZXN1bHQudXBkYXRlID09IG51bGwpe1xuICAgICAgICAgICAgICAgIGRpc3BsYXkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0sIDEwMDApO1xuO1xuXG5cblxuLy9odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNjMzNDA1NC9pbmplY3QtaHRtbC1pbnRvLWEtcGFnZS1mcm9tLWEtY29udGVudC1zY3JpcHRcblxuICAgICAgICBcbi8qXG5mZXRjaChjaHJvbWUucnVudGltZS5nZXRVUkwoJy4uL2NvbnRlbnQtc2NyaXB0L21vZGFsLmh0bWwnKSkudGhlbihyID0+IHIudGV4dCgpKS50aGVuKGh0bWwgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcbiAgICAvLyBub3QgdXNpbmcgaW5uZXJIVE1MIGFzIGl0IHdvdWxkIGJyZWFrIGpzIGV2ZW50IGxpc3RlbmVycyBvZiB0aGUgcGFnZVxuICB9KTtcbiAgKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/content.js\n");

/***/ })

/******/ });