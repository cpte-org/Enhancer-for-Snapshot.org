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

eval("console.log(\"*************content***********\");\nconst storage = chrome.storage.local;\n\nconst endpoint = \"https://hub.snapshot.org/graphql\";\n\n\nlet stateCheck = setInterval(()=>{\n    if(document.readyState==\"complete\"){\n        var el = document.createElement(\"div\");\n        var div = document.getElementsByClassName(\"text-center mb-4 mx-auto\");\n        div[0].insertAdjacentHTML(\"afterend\", \"<div id='eligibleSpaces'></div>\");\n        clearInterval(stateCheck);\n    }\n}, 100)\n\nlet eligibleSpacesModal;\n\nfunction display(mode){\n    eligibleSpacesModal = document.getElementById(\"eligibleSpaces\");\n    switch(mode) {\n        case 0:\n            storage.get((result)=>{\n                if(result.Address){\n                    eligibleSpacesModal.innerHTML = \"Loading Spaces\";\n                }else{\n                    eligibleSpacesModal.innerHTML = \"<h1>Set Your Ethereum Address In The Extension's Popup ↗️</h1>\";\n                }\n            });\n            console.log(\"----Display : Placeholder----\");\n            break;\n        case 1:\n            eligibleSpacesModal.innerHTML = \"Loading Spaces\";\n            //loading (loading animation until (storage.done), tail console logs)\n            console.log(\"----Display : Loading----\");\n            break;\n        default:\n            eligibleSpacesModal.innerHTML = \"<table id='spacesTable'></table>\";\n            let spacesTable = document.getElementById(\"spacesTable\");\n\n            let finalArr = [];\n            let i = mode.length;\n\n            function displayPatch(){\n                let tableBody = finalArr.reduce((rows, nextRow) =>{\n                    return rows += \n                        '<tr>' + \n                        Object.keys(nextRow).reduce((cols, nextCol) => { \n                            return cols += '<th><a href=\"https://snapshot.org/#/'+nextRow.key+'\">' + nextRow[nextCol] + '</a></th>'\n                        }, '') + \n                        '</tr>'\n                }, '');\n                spacesTable.innerHTML = tableBody;\n            }\n\n            mode.forEach((space)=>{\n                fetch(endpoint, {\n                    method: 'POST',\n                    headers: { 'Content-Type': 'application/json' },\n                    body: JSON.stringify({ query: `query\n                        Proposals {\n                            proposals(\n                            first: 20,\n                            skip: 0,\n                            where: {\n                                space_in: [\"${space.key}\"],\n                                state: \"active\"\n                            },\n                            orderBy: \"created\",\n                            orderDirection: desc\n                            ) {\n                            id\n                            space {\n                                id\n                                name\n                            }\n                            }\n                        }` \n                    }),\n                    })\n                    .then(res => res.json())\n                    .then(res => {\n                        space.numProposals = res.data.proposals.length;\n                        finalArr.push(space);\n                        if(i==finalArr.length)displayPatch();\n                    });\n            });\n            //console.log(finalArr);\n\n            \n\n            //displaySpaces (flex box table: spaces.forEach(insertInTable)\n            console.log(\"----Display : Spaces Table----\");\n            //https://worker.snapshot.org/mirror?img=https%3A%2F%2Fraw.githubusercontent.com%2Fsnapshot-labs%2Fsnapshot-spaces%2Fmaster%2Fspaces%2Faragon%2Fspace.png\n      } \n}\n\nconst interval = setInterval(function() {\n    if(document.getElementById(\"eligibleSpaces\")){\n        storage.get( (result) => {\n            //console.log(result);\n            if (result.done){\n                display(result.Spaces);\n                clearInterval(interval);\n            }else{\n                if (result.update){\n                    display(1);\n                    storage.set({\"update\": false}, () => {\n                        console.log(\"[info]: 'Update' Flag Reset\");\n                    });\n                }else if(result.update == null){\n                    display(0);\n                    //clearInterval(interval);\n                }\n            }\n        });\n    }\n}, 1000);\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29udGVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9jb250ZW50LmpzPzRmYWMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCIqKioqKioqKioqKioqY29udGVudCoqKioqKioqKioqXCIpO1xuY29uc3Qgc3RvcmFnZSA9IGNocm9tZS5zdG9yYWdlLmxvY2FsO1xuXG5jb25zdCBlbmRwb2ludCA9IFwiaHR0cHM6Ly9odWIuc25hcHNob3Qub3JnL2dyYXBocWxcIjtcblxuXG5sZXQgc3RhdGVDaGVjayA9IHNldEludGVydmFsKCgpPT57XG4gICAgaWYoZG9jdW1lbnQucmVhZHlTdGF0ZT09XCJjb21wbGV0ZVwiKXtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0ZXh0LWNlbnRlciBtYi00IG14LWF1dG9cIik7XG4gICAgICAgIGRpdlswXS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmVuZFwiLCBcIjxkaXYgaWQ9J2VsaWdpYmxlU3BhY2VzJz48L2Rpdj5cIik7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc3RhdGVDaGVjayk7XG4gICAgfVxufSwgMTAwKVxuXG5sZXQgZWxpZ2libGVTcGFjZXNNb2RhbDtcblxuZnVuY3Rpb24gZGlzcGxheShtb2RlKXtcbiAgICBlbGlnaWJsZVNwYWNlc01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGlnaWJsZVNwYWNlc1wiKTtcbiAgICBzd2l0Y2gobW9kZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBzdG9yYWdlLmdldCgocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5BZGRyZXNzKXtcbiAgICAgICAgICAgICAgICAgICAgZWxpZ2libGVTcGFjZXNNb2RhbC5pbm5lckhUTUwgPSBcIkxvYWRpbmcgU3BhY2VzXCI7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGVsaWdpYmxlU3BhY2VzTW9kYWwuaW5uZXJIVE1MID0gXCI8aDE+U2V0IFlvdXIgRXRoZXJldW0gQWRkcmVzcyBJbiBUaGUgRXh0ZW5zaW9uJ3MgUG9wdXAg4oaX77iPPC9oMT5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLURpc3BsYXkgOiBQbGFjZWhvbGRlci0tLS1cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgZWxpZ2libGVTcGFjZXNNb2RhbC5pbm5lckhUTUwgPSBcIkxvYWRpbmcgU3BhY2VzXCI7XG4gICAgICAgICAgICAvL2xvYWRpbmcgKGxvYWRpbmcgYW5pbWF0aW9uIHVudGlsIChzdG9yYWdlLmRvbmUpLCB0YWlsIGNvbnNvbGUgbG9ncylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLURpc3BsYXkgOiBMb2FkaW5nLS0tLVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZWxpZ2libGVTcGFjZXNNb2RhbC5pbm5lckhUTUwgPSBcIjx0YWJsZSBpZD0nc3BhY2VzVGFibGUnPjwvdGFibGU+XCI7XG4gICAgICAgICAgICBsZXQgc3BhY2VzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwYWNlc1RhYmxlXCIpO1xuXG4gICAgICAgICAgICBsZXQgZmluYWxBcnIgPSBbXTtcbiAgICAgICAgICAgIGxldCBpID0gbW9kZS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlQYXRjaCgpe1xuICAgICAgICAgICAgICAgIGxldCB0YWJsZUJvZHkgPSBmaW5hbEFyci5yZWR1Y2UoKHJvd3MsIG5leHRSb3cpID0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm93cyArPSBcbiAgICAgICAgICAgICAgICAgICAgICAgICc8dHI+JyArIFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobmV4dFJvdykucmVkdWNlKChjb2xzLCBuZXh0Q29sKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2xzICs9ICc8dGg+PGEgaHJlZj1cImh0dHBzOi8vc25hcHNob3Qub3JnLyMvJytuZXh0Um93LmtleSsnXCI+JyArIG5leHRSb3dbbmV4dENvbF0gKyAnPC9hPjwvdGg+J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgJycpICsgXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC90cj4nXG4gICAgICAgICAgICAgICAgfSwgJycpO1xuICAgICAgICAgICAgICAgIHNwYWNlc1RhYmxlLmlubmVySFRNTCA9IHRhYmxlQm9keTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kZS5mb3JFYWNoKChzcGFjZSk9PntcbiAgICAgICAgICAgICAgICBmZXRjaChlbmRwb2ludCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnk6IGBxdWVyeVxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvcG9zYWxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3Q6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraXA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VfaW46IFtcIiR7c3BhY2Uua2V5fVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyQnk6IFwiY3JlYXRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyRGlyZWN0aW9uOiBkZXNjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfWAgXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlLm51bVByb3Bvc2FscyA9IHJlcy5kYXRhLnByb3Bvc2Fscy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbEFyci5wdXNoKHNwYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGk9PWZpbmFsQXJyLmxlbmd0aClkaXNwbGF5UGF0Y2goKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZmluYWxBcnIpO1xuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy9kaXNwbGF5U3BhY2VzIChmbGV4IGJveCB0YWJsZTogc3BhY2VzLmZvckVhY2goaW5zZXJ0SW5UYWJsZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLURpc3BsYXkgOiBTcGFjZXMgVGFibGUtLS0tXCIpO1xuICAgICAgICAgICAgLy9odHRwczovL3dvcmtlci5zbmFwc2hvdC5vcmcvbWlycm9yP2ltZz1odHRwcyUzQSUyRiUyRnJhdy5naXRodWJ1c2VyY29udGVudC5jb20lMkZzbmFwc2hvdC1sYWJzJTJGc25hcHNob3Qtc3BhY2VzJTJGbWFzdGVyJTJGc3BhY2VzJTJGYXJhZ29uJTJGc3BhY2UucG5nXG4gICAgICB9IFxufVxuXG5jb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxpZ2libGVTcGFjZXNcIikpe1xuICAgICAgICBzdG9yYWdlLmdldCggKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5kb25lKXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5KHJlc3VsdC5TcGFjZXMpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC51cGRhdGUpe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5KDEpO1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnNldCh7XCJ1cGRhdGVcIjogZmFsc2V9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltpbmZvXTogJ1VwZGF0ZScgRmxhZyBSZXNldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0LnVwZGF0ZSA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheSgwKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0sIDEwMDApO1xuOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/content.js\n");

/***/ })

/******/ });