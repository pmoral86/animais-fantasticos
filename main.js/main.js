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

/***/ "./js/modules/accordionFaq.js":
/*!************************************!*\
  !*** ./js/modules/accordionFaq.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordionFaq)\n/* harmony export */ });\nfunction initAccordionFaq() {\n  const accordionList = document.querySelectorAll('.js-accordion dt');\n  accordionList[0].classList.add('ativo');\n  accordionList[0].nextElementSibling.classList.add('ativo');\n\n  function activeAccordion() {\n    this.classList.toggle('ativo');\n    this.nextElementSibling.classList.toggle('ativo');\n  }\n\n  accordionList.forEach((item) => {\n    item.addEventListener('click', activeAccordion);\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordionFaq.js?");

/***/ }),

/***/ "./js/modules/animaScroll.js":
/*!***********************************!*\
  !*** ./js/modules/animaScroll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimationScroll)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\n\nclass AnimationScroll {\n  constructor(sections) {\n    this.sections = document.querySelectorAll(sections);\n    this.windowMetade = window.innerHeight * 0.5;\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.default)(this.checkDistance.bind(this), 150);\n  }\n\n  getDistance() {\n    this.distance = [...this.sections].map((section) => {\n      const offset = section.offsetTop;\n      return {\n        element: section,\n        offset: Math.floor(offset - this.windowMetade),\n      };\n    });\n  }\n\n  checkDistance() {\n    this.distance.forEach((item) => {\n      if (window.pageYOffset > item.offset) {\n        item.element.classList.add('ativo');\n      } else if (item.element.classList.contains('ativo')) {\n        item.element.classList.remove('ativo');\n      }\n    });\n  }\n\n  // animaScroll() {\n  //   this.sections.forEach((section) => {\n  //     const sectionTop = section.getBoundingClientRect().top;\n  //     const isSectionVisible = (sectionTop - this.windowMetade) < 0;\n  //     if (isSectionVisible) {\n  //       section.classList.add('ativo');\n  //     } else if (section.classList.contains('ativo')) {\n  //       section.classList.remove('ativo');\n  //     }\n  //   });\n  // }\n\n  init() {\n    if (this.sections.length) {\n      this.getDistance();\n      this.checkDistance();\n      window.addEventListener('scroll', this.checkDistance);\n    }\n    return this;\n  }\n\n  stop() {\n    window.removeEventListener('scroll', this.checkDistance);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/animaScroll.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  let timer;\n  return (...args) => {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      callback(...args);\n      timer = null;\n    }, delay);\n  };\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initDropdownMenu() {\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.toggle('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, ['touchstart', 'click'], () => {\n      this.classList.remove('active');\n    });\n  }\n  dropdownMenus.forEach((menu) => {\n    ['touchstart', 'click'].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetchAnimais.js":
/*!************************************!*\
  !*** ./js/modules/fetchAnimais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numeros.js */ \"./js/modules/numeros.js\");\n\n\nfunction initFetchAnimais() {\n  function createAnimal(animal) {\n    const div = document.createElement('div');\n    div.classList.add('numero-animal');\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\n    return div;\n  }\n  async function fetchAnimais(url) {\n    try {\n      const animaisResponse = await fetch(url);\n      const animaisJSON = await animaisResponse.json();\n      const numerosGrid = document.querySelector('.numeros-grid');\n\n      animaisJSON.forEach((animal) => {\n        const divAnimal = createAnimal(animal);\n        numerosGrid.appendChild(divAnimal);\n      });\n      (0,_numeros_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n    } catch (erro) {\n      console.log(Error(erro));\n    }\n  }\n  fetchAnimais('./animaisApi.json');\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetchAnimais.js?");

/***/ }),

/***/ "./js/modules/fetchBtc.js":
/*!********************************!*\
  !*** ./js/modules/fetchBtc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFeatchBtc)\n/* harmony export */ });\nfunction initFeatchBtc() {\n  fetch('https://blockchain.info/ticker')\n    .then((response) => response.json())\n    .then((bitcoin) => {\n      const btcPreco = document.querySelector('.btc-preco');\n      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(6);\n    }).catch((erro) => console.log(Error(erro)));\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetchBtc.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector('[data-semana]');\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horaAgora = dataAgora.getHours();\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  const horarioAberto = (horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1]);\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add('aberto');\n  }\n}\n\n// const agora = new Date();\n// const futuro = new Date('Dec 24 2022 23:59');\n\n// function transformarDias(tempo) {\n//     return tempo / (24 * 60 * 60 * 1000)\n// }\n\n// const diasAgora = transformarDias(agora.getTime());\n// const diasFuturo = transformarDias(futuro.getTime());\n\n// console.log(transformarDias(agora.getTime()))\n// console.log(Math.floor(diasFuturo - diasAgora))\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menumobile.js":
/*!**********************************!*\
  !*** ./js/modules/menumobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.querySelector('[data-menu=\"list\"]');\n  const eventos = ['click'];\n\n  function openMenu() {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__.default)(menuList, eventos, () => {\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n\n  if (menuButton) {\n    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menumobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\n\n  function toggleModal(event) {\n    event.preventDefault();\n    containerModal.classList.toggle('ativo');\n  }\n\n  function cliqueForaModal(event) {\n    if (event.target === this) toggleModal(event);\n  }\n\n  if (botaoAbrir && botaoFechar && containerModal) {\n    botaoAbrir.addEventListener('click', toggleModal);\n    botaoFechar.addEventListener('click', toggleModal);\n    containerModal.addEventListener('click', cliqueForaModal);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/numeros.js":
/*!*******************************!*\
  !*** ./js/modules/numeros.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNumeros)\n/* harmony export */ });\nfunction initNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll('[data-numero]');\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const incremento = Math.floor(total / 100);\n      let start = 0;\n      const timer = setInterval(() => {\n        start += incremento;\n        numero.innerText = start;\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n  let observer;\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n  const observeTarget = document.querySelector('.numeros');\n  observer = new MutationObserver(handleMutation);\n  observer.observe(observeTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/numeros.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scrollSuave.js":
/*!***********************************!*\
  !*** ./js/modules/scrollSuave.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\n  const linksInternos = document.querySelectorAll('.js-menu a[href^=\"#\"]');\n\n  function scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n    section.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start',\n    });\n  }\n  linksInternos.forEach((link) => {\n    link.addEventListener('click', scrollToSection);\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scrollSuave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  const tabMenu = document.querySelectorAll('.js-tabmenu li');\n  const tabContent = document.querySelectorAll('.js-tabcontent section');\n\n  function activeTab(index) {\n    tabContent.forEach((content) => {\n      content.classList.remove('ativo');\n    });\n    tabContent[index].classList.add('ativo');\n  }\n\n  if (tabMenu.length && tabContent.length) {\n    tabContent[0].classList.add('ativo');\n    tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => {\n        activeTab(index);\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll('[data-tooltip]');\n\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 10}px`;\n      this.tooltipBox.style.left = `${event.pageX + 10}px`;\n    },\n  };\n\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseover', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    },\n  };\n\n  function criarTooltipBox(element) {\n    const tooltipBox = document.createElement('div');\n    const text = element.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n\n  function onMouseOver() {\n    const tooltipBox = criarTooltipBox(this);\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener('mousemove', onMouseMove);\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener('mouseleave', onMouseLeave);\n  }\n\n  tooltips.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver);\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scrollSuave.js */ \"./js/modules/scrollSuave.js\");\n/* harmony import */ var _modules_animaScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animaScroll.js */ \"./js/modules/animaScroll.js\");\n/* harmony import */ var _modules_accordionFaq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordionFaq.js */ \"./js/modules/accordionFaq.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menumobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menumobile.js */ \"./js/modules/menumobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchAnimais.js */ \"./js/modules/fetchAnimais.js\");\n/* harmony import */ var _modules_fetchBtc_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetchBtc.js */ \"./js/modules/fetchBtc.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_accordionFaq_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_modules_menumobile_js__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__.default)();\n(0,_modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__.default)();\n(0,_modules_fetchBtc_js__WEBPACK_IMPORTED_MODULE_10__.default)();\n\nconst scrollAnimado = new _modules_animaScroll_js__WEBPACK_IMPORTED_MODULE_1__.default('[data-anime=\"scroll\"]');\nscrollAnimado.init();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/scripts.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/scripts.js");
/******/ 	
/******/ })()
;