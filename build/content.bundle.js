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

eval("console.log(\"*************content***********\");\nconst storage = chrome.storage.local;\n\nconst endpoint = \"https://hub.snapshot.org/graphql\";\n\nvar progress=[];\nprogress[1]=0;\n\nlet stateCheck = setInterval(()=>{\n    if(document.readyState==\"complete\"){\n        var el = document.createElement(\"div\");\n        var div = document.getElementsByClassName(\"text-center mb-4 mx-auto\");\n        div[0].insertAdjacentHTML(\"afterend\", \"<div id='eligibleSpaces'></div>\");\n        clearInterval(stateCheck);\n    }\n}, 100)\n\nlet eligibleSpacesModal;\n\nfunction display(mode){\n    eligibleSpacesModal = document.getElementById(\"eligibleSpaces\");\n    switch(mode) {\n        case 0:\n            /*\n            storage.get((result)=>{\n                if(result.Address){\n                    eligibleSpacesModal.innerHTML = \"Loading Spaces\";\n                }else{*/\n                    eligibleSpacesModal.innerHTML = \"<h1>Set Your Ethereum Address In The Extension's Popup ↗️</h1>\";\n                /*}\n            });*/\n            //console.log(\"----Display : Placeholder----\");\n            break;\n        case 1:\n            eligibleSpacesModal.innerHTML = \"Loading Spaces\";\n            if((progress[0]+progress[1])>0)\n                console.log(\"Total Progress = \"+(progress[0]+progress[1])*100)\n            //loading (loading animation until (storage.done), tail console logs)\n            //console.log(\"----Display : Loading----\");\n            break;\n        default:\n            eligibleSpacesModal.innerHTML = \"<table id='spacesTable'></table>\";\n            let spacesTable = document.getElementById(\"spacesTable\");\n            let finalArr = [];\n            let i = mode.length;\n\n            function displayPatch(){\n                let tableBody = finalArr.reduce((rows, nextRow) =>{\n                    return rows += \n                        '<tr>' + \n                        Object.keys(nextRow).reduce((cols, nextCol) => { \n                            return cols += '<th><a href=\"https://snapshot.org/#/'+nextRow.key+'\">' + nextRow[nextCol] + '</a></th>'\n                        }, '') + \n                        '</tr>'\n                }, '');\n                spacesTable.innerHTML = tableBody;\n            }\n\n            mode.forEach((space)=>{\n                fetch(endpoint, {\n                    method: 'POST',\n                    headers: { 'Content-Type': 'application/json' },\n                    body: JSON.stringify({ query: `query\n                        Proposals {\n                            proposals(\n                            first: 20,\n                            skip: 0,\n                            where: {\n                                space_in: [\"${space.key}\"],\n                                state: \"active\"\n                            },\n                            orderBy: \"created\",\n                            orderDirection: desc\n                            ) {\n                            id\n                            space {\n                                id\n                                name\n                            }\n                            }\n                        }` \n                    }),\n                    })\n                    .then(res => res.json())\n                    .then(res => {\n                        space.numProposals = res.data.proposals.length;\n                        finalArr.push(space);\n                        progress[1]=finalArr.length/i;\n                        //console.log(\"Progress[1] = \"+progress[1]);\n                        if(i==finalArr.length)displayPatch();\n                    });\n            });\n            //console.log(finalArr);\n\n            \n\n            //displaySpaces (flex box table: spaces.forEach(insertInTable)\n            console.log(\"----Display : Spaces Table----\");\n            //https://worker.snapshot.org/mirror?img=https%3A%2F%2Fraw.githubusercontent.com%2Fsnapshot-labs%2Fsnapshot-spaces%2Fmaster%2Fspaces%2Faragon%2Fspace.png\n      } \n}\n\nconst interval = setInterval(function() {\n    if(document.getElementById(\"eligibleSpaces\")){\n        storage.get( (result) => {\n\n            if(result.Address){\n                if (result.done){\n                    display(result.Spaces);\n                    clearInterval(interval);\n                }else{\n                    display(1);\n                    if (result.Spaces){\n                        progress[0] = result.Spaces.length/result.spacesCounter; //spaces progress\n                        //console.log(\"Progress[0] = \"+progress[0]);\n                    }\n                        \n                }\n            }else{\n                display(0);\n            }\n        });\n    }\n}, 1000);\n;\n/*\nconst interval = setInterval(function() {\n    if(document.getElementById(\"eligibleSpaces\")){\n        storage.get( (result) => {\n            //console.log(result);\n            if (result.done){\n                display(result.Spaces);\n                clearInterval(interval);\n            }else{\n                if (result.update){\n                    display(1);\n                    storage.set({\"update\": false}, () => {\n                        console.log(\"[info]: 'Update' Flag Reset\");\n                    });\n                }else if(result.update == null){\n                    display(0);\n                    //clearInterval(interval);\n                }\n            }\n        });\n    }\n}, 1000);\n;\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29udGVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9jb250ZW50LmpzPzRmYWMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCIqKioqKioqKioqKioqY29udGVudCoqKioqKioqKioqXCIpO1xuY29uc3Qgc3RvcmFnZSA9IGNocm9tZS5zdG9yYWdlLmxvY2FsO1xuXG5jb25zdCBlbmRwb2ludCA9IFwiaHR0cHM6Ly9odWIuc25hcHNob3Qub3JnL2dyYXBocWxcIjtcblxudmFyIHByb2dyZXNzPVtdO1xucHJvZ3Jlc3NbMV09MDtcblxubGV0IHN0YXRlQ2hlY2sgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgIGlmKGRvY3VtZW50LnJlYWR5U3RhdGU9PVwiY29tcGxldGVcIil7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGV4dC1jZW50ZXIgbWItNCBteC1hdXRvXCIpO1xuICAgICAgICBkaXZbMF0uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJlbmRcIiwgXCI8ZGl2IGlkPSdlbGlnaWJsZVNwYWNlcyc+PC9kaXY+XCIpO1xuICAgICAgICBjbGVhckludGVydmFsKHN0YXRlQ2hlY2spO1xuICAgIH1cbn0sIDEwMClcblxubGV0IGVsaWdpYmxlU3BhY2VzTW9kYWw7XG5cbmZ1bmN0aW9uIGRpc3BsYXkobW9kZSl7XG4gICAgZWxpZ2libGVTcGFjZXNNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxpZ2libGVTcGFjZXNcIik7XG4gICAgc3dpdGNoKG1vZGUpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIHN0b3JhZ2UuZ2V0KChyZXN1bHQpPT57XG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LkFkZHJlc3Mpe1xuICAgICAgICAgICAgICAgICAgICBlbGlnaWJsZVNwYWNlc01vZGFsLmlubmVySFRNTCA9IFwiTG9hZGluZyBTcGFjZXNcIjtcbiAgICAgICAgICAgICAgICB9ZWxzZXsqL1xuICAgICAgICAgICAgICAgICAgICBlbGlnaWJsZVNwYWNlc01vZGFsLmlubmVySFRNTCA9IFwiPGgxPlNldCBZb3VyIEV0aGVyZXVtIEFkZHJlc3MgSW4gVGhlIEV4dGVuc2lvbidzIFBvcHVwIOKGl++4jzwvaDE+XCI7XG4gICAgICAgICAgICAgICAgLyp9XG4gICAgICAgICAgICB9KTsqL1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS1EaXNwbGF5IDogUGxhY2Vob2xkZXItLS0tXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGVsaWdpYmxlU3BhY2VzTW9kYWwuaW5uZXJIVE1MID0gXCJMb2FkaW5nIFNwYWNlc1wiO1xuICAgICAgICAgICAgaWYoKHByb2dyZXNzWzBdK3Byb2dyZXNzWzFdKT4wKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVG90YWwgUHJvZ3Jlc3MgPSBcIisocHJvZ3Jlc3NbMF0rcHJvZ3Jlc3NbMV0pKjEwMClcbiAgICAgICAgICAgIC8vbG9hZGluZyAobG9hZGluZyBhbmltYXRpb24gdW50aWwgKHN0b3JhZ2UuZG9uZSksIHRhaWwgY29uc29sZSBsb2dzKVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS1EaXNwbGF5IDogTG9hZGluZy0tLS1cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGVsaWdpYmxlU3BhY2VzTW9kYWwuaW5uZXJIVE1MID0gXCI8dGFibGUgaWQ9J3NwYWNlc1RhYmxlJz48L3RhYmxlPlwiO1xuICAgICAgICAgICAgbGV0IHNwYWNlc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGFjZXNUYWJsZVwiKTtcbiAgICAgICAgICAgIGxldCBmaW5hbEFyciA9IFtdO1xuICAgICAgICAgICAgbGV0IGkgPSBtb2RlLmxlbmd0aDtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZGlzcGxheVBhdGNoKCl7XG4gICAgICAgICAgICAgICAgbGV0IHRhYmxlQm9keSA9IGZpbmFsQXJyLnJlZHVjZSgocm93cywgbmV4dFJvdykgPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb3dzICs9IFxuICAgICAgICAgICAgICAgICAgICAgICAgJzx0cj4nICsgXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhuZXh0Um93KS5yZWR1Y2UoKGNvbHMsIG5leHRDb2wpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbHMgKz0gJzx0aD48YSBocmVmPVwiaHR0cHM6Ly9zbmFwc2hvdC5vcmcvIy8nK25leHRSb3cua2V5KydcIj4nICsgbmV4dFJvd1tuZXh0Q29sXSArICc8L2E+PC90aD4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAnJykgKyBcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L3RyPidcbiAgICAgICAgICAgICAgICB9LCAnJyk7XG4gICAgICAgICAgICAgICAgc3BhY2VzVGFibGUuaW5uZXJIVE1MID0gdGFibGVCb2R5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb2RlLmZvckVhY2goKHNwYWNlKT0+e1xuICAgICAgICAgICAgICAgIGZldGNoKGVuZHBvaW50LCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeTogYHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9wb3NhbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2FscyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjZV9pbjogW1wiJHtzcGFjZS5rZXl9XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogXCJjcmVhdGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJEaXJlY3Rpb246IGRlc2NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9YCBcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2UubnVtUHJvcG9zYWxzID0gcmVzLmRhdGEucHJvcG9zYWxzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsQXJyLnB1c2goc3BhY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NbMV09ZmluYWxBcnIubGVuZ3RoL2k7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUHJvZ3Jlc3NbMV0gPSBcIitwcm9ncmVzc1sxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpPT1maW5hbEFyci5sZW5ndGgpZGlzcGxheVBhdGNoKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGZpbmFsQXJyKTtcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vZGlzcGxheVNwYWNlcyAoZmxleCBib3ggdGFibGU6IHNwYWNlcy5mb3JFYWNoKGluc2VydEluVGFibGUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS1EaXNwbGF5IDogU3BhY2VzIFRhYmxlLS0tLVwiKTtcbiAgICAgICAgICAgIC8vaHR0cHM6Ly93b3JrZXIuc25hcHNob3Qub3JnL21pcnJvcj9pbWc9aHR0cHMlM0ElMkYlMkZyYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tJTJGc25hcHNob3QtbGFicyUyRnNuYXBzaG90LXNwYWNlcyUyRm1hc3RlciUyRnNwYWNlcyUyRmFyYWdvbiUyRnNwYWNlLnBuZ1xuICAgICAgfSBcbn1cblxuY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsaWdpYmxlU3BhY2VzXCIpKXtcbiAgICAgICAgc3RvcmFnZS5nZXQoIChyZXN1bHQpID0+IHtcblxuICAgICAgICAgICAgaWYocmVzdWx0LkFkZHJlc3Mpe1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZG9uZSl7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkocmVzdWx0LlNwYWNlcyk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5KDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LlNwYWNlcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc1swXSA9IHJlc3VsdC5TcGFjZXMubGVuZ3RoL3Jlc3VsdC5zcGFjZXNDb3VudGVyOyAvL3NwYWNlcyBwcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlByb2dyZXNzWzBdID0gXCIrcHJvZ3Jlc3NbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5KDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59LCAxMDAwKTtcbjtcbi8qXG5jb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxpZ2libGVTcGFjZXNcIikpe1xuICAgICAgICBzdG9yYWdlLmdldCggKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5kb25lKXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5KHJlc3VsdC5TcGFjZXMpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC51cGRhdGUpe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5KDEpO1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnNldCh7XCJ1cGRhdGVcIjogZmFsc2V9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltpbmZvXTogJ1VwZGF0ZScgRmxhZyBSZXNldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0LnVwZGF0ZSA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheSgwKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0sIDEwMDApO1xuO1xuKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/content.js\n");

/***/ })

/******/ });