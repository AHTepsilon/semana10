/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const id = document.getElementById(\"IDtext\");\r\nconst nameCandidate = document.getElementById(\"nameText\");\r\nconst idVoter = document.getElementById(\"candidateId\");\r\n\r\nconst registerBtn = document.getElementById(\"registerButton\");\r\nconst voteBtn = document.getElementById(\"voteButton\");\r\n\r\nconst candidateListBtn = document.getElementById(\"candidateList\");\r\nconst votListBtn = document.getElementById(\"votintList\");\r\n\r\nsaveDataIdName = () =>\r\n{\r\n    let i = id.value;\r\n    let n = nameCandidate.value;\r\n\r\n    let userObject =\r\n    {\r\n        ID: i,\r\n        NAME: n\r\n    };\r\n\r\n    let json = JSON.stringify(userObject);\r\n\r\n    console.log(json);\r\n}\r\n\r\nvoteForCandidateUsingId = () =>\r\n{\r\n    let iV = idVoter.value;\r\n\r\n    console.log(iV);\r\n}\r\n\r\n\r\n\r\nregisterBtn.addEventListener(\"click\", saveDataIdName);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VtYW5hMTAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiSUR0ZXh0XCIpO1xyXG5jb25zdCBuYW1lQ2FuZGlkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lVGV4dFwiKTtcclxuY29uc3QgaWRWb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuZGlkYXRlSWRcIik7XHJcblxyXG5jb25zdCByZWdpc3RlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVnaXN0ZXJCdXR0b25cIik7XHJcbmNvbnN0IHZvdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvdGVCdXR0b25cIik7XHJcblxyXG5jb25zdCBjYW5kaWRhdGVMaXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5kaWRhdGVMaXN0XCIpO1xyXG5jb25zdCB2b3RMaXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b3RpbnRMaXN0XCIpO1xyXG5cclxuc2F2ZURhdGFJZE5hbWUgPSAoKSA9PlxyXG57XHJcbiAgICBsZXQgaSA9IGlkLnZhbHVlO1xyXG4gICAgbGV0IG4gPSBuYW1lQ2FuZGlkYXRlLnZhbHVlO1xyXG5cclxuICAgIGxldCB1c2VyT2JqZWN0ID1cclxuICAgIHtcclxuICAgICAgICBJRDogaSxcclxuICAgICAgICBOQU1FOiBuXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBqc29uID0gSlNPTi5zdHJpbmdpZnkodXNlck9iamVjdCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coanNvbik7XHJcbn1cclxuXHJcbnZvdGVGb3JDYW5kaWRhdGVVc2luZ0lkID0gKCkgPT5cclxue1xyXG4gICAgbGV0IGlWID0gaWRWb3Rlci52YWx1ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhpVik7XHJcbn1cclxuXHJcblxyXG5cclxucmVnaXN0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVEYXRhSWROYW1lKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;