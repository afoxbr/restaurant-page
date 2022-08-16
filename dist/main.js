/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction aboutContent() {\n    const main = document.getElementById(\"main\");\n    //Removes previous DOM content\n    main.innerHTML = '';\n    //This function adds the about page content\n    const title = document.createElement(\"h2\");\n    title.innerHTML = \"Welcome to Chris' Milk Shack!\";\n    main.appendChild(title);\n\n    const icon = document.createElement(\"img\");\n    icon.src = \"../src/assets/20220810_201741_0000.png\";\n    icon.setAttribute(\"height\", \"480px\");\n    icon.setAttribute(\"width\", \"480px\");\n    main.appendChild(icon);\n\n    const blurb = document.createElement(\"p\");\n    blurb.innerText = \"Chris' Milk Shack is Canada's premium outlet for mammal juice of all varieties! Cow? You bet! Goat? Of course! Human? As long as you don't ask where we got it!\";\n    main.appendChild(blurb);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutContent);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactContent() {\n    const main = document.getElementById(\"main\");\n    //Removes previous DOM content\n    main.innerHTML = '';\n    //this function creates the contact content\n    const subtitle = document.createElement(\"h3\");\n    subtitle.innerHTML = \"Contact Us\";\n    main.appendChild(subtitle);\n\n    const details = document.createElement(\"ul\");\n    main.appendChild(details);\n\n    const address = document.createElement(\"li\");\n    address.innerHTML = \"Address:<br>8140 Leslie Rd<br>Richmond<br>British Columbia<br>V6X 4A8<br>Canada\";\n    details.appendChild(address);\n\n    const phone = document.createElement(\"li\");\n    phone.innerHTML = \"Phone number<br>(604) 276-8282\";\n    details.appendChild(phone);\n\n    const email = document.createElement(\"li\");\n    email.innerHTML = \"Email<br>chris@milkshack.com\";\n    details.appendChild(email);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactContent);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/firstLoad.js":
/*!**************************!*\
  !*** ./src/firstLoad.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction firstLoad() {\n    const controlPanel = document.createElement(\"div\");\n    controlPanel.classList.add(\"controlPanel\");\n    document.getElementById(\"content\").appendChild(controlPanel);\n\n    const aboutTab = document.createElement(\"button\");\n    aboutTab.classList.add(\"tab\");\n    aboutTab.innerHTML = (\"About\");\n    controlPanel.appendChild(aboutTab);\n    aboutTab.addEventListener(\"click\", () => {\n        (0,_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        aboutTab.classList.add(\"active\");\n        menuTab.classList.remove(\"active\");\n        contactTab.classList.remove(\"active\");\n    });\n\n    const contactTab = document.createElement(\"button\");\n    contactTab.classList.add(\"tab\");\n    contactTab.innerHTML = (\"Contact\");\n    controlPanel.appendChild(contactTab);\n    contactTab.addEventListener(\"click\", () => {\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        contactTab.classList.add(\"active\");\n        aboutTab.classList.remove(\"active\");\n        menuTab.classList.remove(\"active\");\n    });\n\n    const menuTab = document.createElement(\"button\");\n    menuTab.classList.add(\"tab\");\n    menuTab.innerHTML = (\"Menu\");\n    controlPanel.appendChild(menuTab);\n    menuTab.addEventListener(\"click\", () => {\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        menuTab.classList.add(\"active\");\n        contactTab.classList.remove(\"active\");\n        aboutTab.classList.remove(\"active\");\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/firstLoad.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _firstLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firstLoad */ \"./src/firstLoad.js\");\n\n\n\n\n(0,_firstLoad__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst main = document.createElement(\"div\");\nmain.setAttribute(\"id\", \"main\");\ndocument.getElementById(\"content\").appendChild(main);\n\n(0,_about_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuContent() {\n    const main = document.getElementById(\"main\");\n    //Removes previous DOM content\n    main.innerHTML = '';\n    //Adds menu content    \n    const menuTitle = document.createElement(\"h3\");\n    menuTitle.innerHTML = \"Menu\";\n    main.appendChild(menuTitle);\n\n    const basicMilk = document.createElement(\"div\");\n    basicMilk.classList.add(\"recipeCard\");\n    main.appendChild(basicMilk);\n\n    const basicMilkTitle = document.createElement(\"h4\");\n    basicMilkTitle.innerHTML = \"Milk\";\n    basicMilk.appendChild(basicMilkTitle);\n\n    const basicBlurb = document.createElement(\"p\");\n    basicBlurb.innerHTML = \"Unflavoured milk from cow, goat, or surprise mammal.\\n$45\";\n    basicMilk.appendChild(basicBlurb);\n\n    const flavouredMilk = document.createElement(\"div\");\n    flavouredMilk.classList.add(\"recipeCard\");\n    main.appendChild(flavouredMilk);\n\n    const flavouredMilkTitle = document.createElement(\"h4\");\n    flavouredMilkTitle.innerHTML = \"Flavoured Milk\";\n    flavouredMilk.appendChild(flavouredMilkTitle);\n\n    const flavouredBlurb = document.createElement(\"p\");\n    flavouredBlurb.innerHTML = \"As above, but flavoured with chocolate, strawberry, poutine, or moose.\\n$65\";\n    flavouredMilk.appendChild(flavouredBlurb);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContent);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;