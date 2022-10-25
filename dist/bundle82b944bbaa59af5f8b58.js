/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_imgs_hero_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/imgs/hero.jpg */ "./src/assets/imgs/hero.jpg");

var container = document.getElementById("container");
var home = function home() {
  // ----------- Header -----------
  var header = document.createElement("header");
  container.appendChild(header);
  var nav = document.createElement("nav");
  header.appendChild(nav);
  var logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");
  nav.appendChild(logoDiv);
  var logoH1 = document.createElement("h1");
  logoH1.textContent = "D'Edwards";
  logoDiv.appendChild(logoH1);
  var navLinks = document.createElement("div");
  navLinks.classList.add("nav-links");
  nav.appendChild(navLinks);
  var navUl = document.createElement("ul");
  navLinks.appendChild(navUl);
  var liHome = document.createElement("li");
  liHome.textContent = "Home";
  navUl.appendChild(liHome);
  var liMenu = document.createElement("li");
  liMenu.textContent = "Menu";
  navUl.appendChild(liMenu);
  var liContact = document.createElement("li");
  liContact.textContent = "Contact";
  navUl.appendChild(liContact);

  // ----------- Main Content -----------
  var main = document.createElement("main");
  container.appendChild(main);
  var section = document.createElement("section");
  section.classList.add("content");
  main.appendChild(section);
  var heroDiv = document.createElement("div");
  heroDiv.classList.add("hero");
  section.appendChild(heroDiv);
  var imgHero = document.createElement("img");
  imgHero.setAttribute("id", "hero");
  imgHero.setAttribute("alt", "ihaw ihaw");
  imgHero.src = _assets_imgs_hero_jpg__WEBPACK_IMPORTED_MODULE_0__;
  heroDiv.appendChild(imgHero);
  var contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");
  section.appendChild(contentContainer);
  var welcome = document.createElement("div");
  welcome.classList.add("welcome");
  contentContainer.appendChild(welcome);
  var welcomeH2 = document.createElement("h2");
  welcomeH2.textContent = "Welcome to";
  welcome.appendChild(welcomeH2);
  var nowrap = document.createElement("span");
  nowrap.classList.add("no-wrap");
  nowrap.textContent = "D'edwards Inihaws";
  welcome.appendChild(nowrap);
  var contentDescription = document.createElement("div");
  contentDescription.classList.add("content-description");
  contentContainer.appendChild(contentDescription);
  var descriptionH2 = document.createElement("h2");
  descriptionH2.textContent = "The best inihaw restaurant in the Town!";
  contentDescription.appendChild(descriptionH2);
  var descriptionP = document.createElement("p");
  descriptionP.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at veritatis eligendi. Obcaecati, ipsa minima recusandae aliquam odio odit voluptatem, nostrum, hic aspernatur natus officia nemo. Aperiam expedita est atque, nostrum ad perspiciatis quibusdam minus a voluptates, magnam corrupti ipsam optio culpa eos, quas tempora adipisci? Assumenda quam, voluptates laudantium itaque ipsam, nemo quo beatae possimus est quisquam eveniet odio. Obcaecati, laboriosam soluta molestiae fugit iusto at ipsum aliquam asperiores in accusantium! Enim dolore eum incidunt tempore? Magni adipisci nam alias quia illo accusantium ipsa, ratione eligendi! Enim eligendi molestias quaerat sapiente deleniti quo accusantium repellendus recusandae consequuntur. Qui, et.";
  contentDescription.appendChild(descriptionP);
  var checkBtn = document.createElement("button");
  checkBtn.classList.add("btn", "check-btn");
  checkBtn.textContent = "Check Menu";
  section.appendChild(checkBtn);

  // ----------- Footer -----------

  var footer = document.createElement("footer");
  container.appendChild(footer);
  var footerP = document.createElement("p");
  footerP.textContent = "Copyright &copy; Justine Edward P. Santos";
  footer.appendChild(footerP);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Roboto, sans-serif;\n}\n\nnav {\n  background-color: #D9F9A5;\n  display: flex;\n  height: 101px;\n}\nnav .logo {\n  padding-left: 3rem;\n  font-size: 1.9rem;\n  align-self: center;\n}\nnav .nav-links {\n  width: 77%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nnav .nav-links ul {\n  display: flex;\n  gap: 5rem;\n}\nnav .nav-links ul li {\n  list-style: none;\n  font-size: 1.7rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.1s ease-in-out;\n}\nnav .nav-links ul li:hover {\n  transform: scale(1.2);\n}\n\nmain .content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\nmain .content .hero img {\n  width: 820px;\n  height: 309px;\n}\nmain .content .content-container {\n  width: 80%;\n  height: 400px;\n  padding: 1rem;\n  background-color: #D9F9A5;\n  display: flex;\n  justify-content: space-evenly;\n}\nmain .content .content-container .welcome {\n  display: flex;\n  justify-content: center;\n  padding-top: 4rem;\n  padding-left: 5rem;\n  font-size: 1.2rem;\n}\nmain .content .content-container .welcome .no-wrap {\n  display: block;\n}\nmain .content .content-container .content-description {\n  width: 55%;\n  background-color: #D5C5C8;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 3rem;\n}\nmain .content .btn {\n  margin-top: 1rem;\n  border: 1px solid black;\n  padding: 1rem 3rem;\n  background-color: #D5C5C8;\n  border-radius: 0.5rem;\n  font-size: 1.5rem;\n  transition: 0.1s ease-in-out;\n  cursor: pointer;\n}\nmain .content .btn:hover {\n  transform: scale(1.1);\n  background-color: #D9F9A5;\n  border: none;\n}\nmain .content .btn:active {\n  background-color: green;\n}\n\nfooter {\n  width: 100%;\n  height: 55px;\n  position: absolute;\n  bottom: 0;\n  background-color: #D9F9A5;\n  text-align: center;\n  font-size: 1.2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAQA;EACI,UAAA;EACA,SAAA;EACA,sBAAA;EACA,+BATQ;AAGZ;;AAUA;EACI,yBAbe;EAcf,aAAA;EACA,aAAA;AAPJ;AASI;EACI,kBAAA;EACA,iBAAA;EACA,kBAAA;AAPR;AAUI;EACI,UAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AARR;AAWQ;EACI,aAAA;EACA,SAAA;AATZ;AAWY;EACI,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;EACA,4BAAA;AAThB;AAWgB;EACI,qBAAA;AATpB;;AAmBI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAhBR;AAkBY;EACI,YAAA;EACA,aAAA;AAhBhB;AAoBQ;EACI,UAAA;EACA,aAAA;EACA,aAAA;EACA,yBApEO;EAqEP,aAAA;EACA,6BAAA;AAlBZ;AAqBY;EACI,aAAA;EACA,uBAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;AAnBhB;AAoBgB;EACI,cAAA;AAlBpB;AAsBY;EACI,UAAA;EACA,yBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,aAAA;AApBhB;AAwBQ;EACI,gBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBAjGE;EAkGF,qBAAA;EACA,iBAAA;EACA,4BAAA;EACA,eAAA;AAtBZ;AAwBY;EACI,qBAAA;EACA,yBA1GG;EA2GH,YAAA;AAtBhB;AAyBY;EACI,uBAAA;AAvBhB;;AA6BA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,yBA1He;EA2Hf,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AA1BJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n\r\n$body-font: Roboto, sans-serif;\r\n$background-color: #D9F9A5;\r\n$accent-color:#D5C5C8;\r\n\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: $body-font;\r\n}\r\n\r\n\r\nnav {\r\n    background-color: $background-color;\r\n    display: flex;\r\n    height: 101px;\r\n\r\n    .logo {\r\n        padding-left: 3rem;\r\n        font-size: 1.9rem;\r\n        align-self: center;\r\n    }\r\n\r\n    .nav-links {\r\n        width: 77%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n\r\n\r\n        ul {\r\n            display: flex;\r\n            gap: 5rem;\r\n\r\n            li {\r\n                list-style: none;\r\n                font-size: 1.7rem;\r\n                font-weight: 600;\r\n                cursor: pointer;\r\n                transition: .1s ease-in-out;\r\n\r\n                &:hover {\r\n                    transform: scale(1.2);\r\n\r\n                }\r\n            }\r\n        }\r\n\r\n    }\r\n}\r\n\r\nmain {\r\n    .content {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        flex-direction: column;\r\n        .hero {\r\n            img {\r\n                width: 820px;\r\n                height: 309px;\r\n            }\r\n        }\r\n\r\n        .content-container {\r\n            width: 80%;\r\n            height: 400px;\r\n            padding: 1rem;\r\n            background-color: $background-color;\r\n            display: flex;\r\n            justify-content: space-evenly;\r\n            \r\n\r\n            .welcome{\r\n                display: flex;\r\n                justify-content: center;\r\n                padding-top: 4rem;\r\n                padding-left: 5rem;\r\n                font-size: 1.2rem;\r\n                .no-wrap{\r\n                    display: block;\r\n                }\r\n            }\r\n\r\n            .content-description{\r\n                width: 55%;\r\n                background-color: #D5C5C8;\r\n                display: flex;\r\n                flex-direction: column;\r\n                gap: 1rem;\r\n                padding: 3rem;\r\n            }\r\n        }\r\n\r\n        .btn{\r\n            margin-top: 1rem;\r\n            border: 1px solid black;\r\n            padding: 1rem 3rem;\r\n            background-color: $accent-color;\r\n            border-radius: .5rem;\r\n            font-size: 1.5rem;\r\n            transition: .1s ease-in-out;\r\n            cursor: pointer;\r\n\r\n            &:hover{\r\n                transform: scale(1.1);\r\n                background-color: $background-color;\r\n                border: none;\r\n            }\r\n\r\n            &:active{\r\n                background-color: green;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfooter{\r\n    width: 100%;\r\n    height: 55px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    background-color: $background-color;\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/imgs/hero.jpg":
/*!**********************************!*\
  !*** ./src/assets/imgs/hero.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hero.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
// import generateJoke from "./generateJoke"
// import './styles/main.scss'
// import profilePic from './assets/profile-pic.jpg'

// const profilesPic = document.getElementById("profilePic")
// profilesPic.src = profilePic

// const jokeBtn = document.getElementById("jokeBtn")
// jokeBtn.addEventListener("click", generateJoke)

// generateJoke()



var createHeader = function createHeader() {
  // ----------- Header -----------
  var header = document.createElement("header");
  container.appendChild(header);
  var nav = document.createElement("nav");
  header.appendChild(nav);
  var logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");
  nav.appendChild(logoDiv);
  var logoH1 = document.createElement("h1");
  logoH1.textContent = "D'Edwards";
  logoDiv.appendChild(logoH1);
  var navLinks = document.createElement("div");
  navLinks.classList.add("nav-links");
  nav.appendChild(navLinks);
  var navUl = document.createElement("ul");
  navLinks.appendChild(navUl);
  var liHome = document.createElement("li");
  liHome.textContent = "Home";
  navUl.appendChild(liHome);
  var liMenu = document.createElement("li");
  liMenu.textContent = "Menu";
  navUl.appendChild(liMenu);
  var liContact = document.createElement("li");
  liContact.textContent = "Contact";
  navUl.appendChild(liContact);
};
var createFooter = function createFooter() {
  // ----------- Footer -----------
  var footer = document.createElement("footer");
  container.appendChild(footer);
  var footerP = document.createElement("p");
  footerP.textContent = "Copyright &copy; Justine Edward P. Santos";
  footer.appendChild(footerP);
};
var createMain = function createMain() {};
(0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle82b944bbaa59af5f8b58.js.map