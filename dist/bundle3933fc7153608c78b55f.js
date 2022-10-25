/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/pages/website.js");
/* harmony import */ var _assets_imgs_hero_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/imgs/hero.jpg */ "./src/assets/imgs/hero.jpg");


var contact = function contact() {
  var main = document.createElement("main");
  _website__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(main);
  var section = document.createElement("section");
  section.classList.add("content");
  main.appendChild(section);
  var heroImg = document.createElement("img");
  heroImg.src = _assets_imgs_hero_jpg__WEBPACK_IMPORTED_MODULE_1__;
  section.appendChild(heroImg);
  var contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  section.appendChild(contactContainer);
  var contactH1 = document.createElement("h1");
  contactH1.textContent = "Contact Us";
  var number = document.createElement("h2");
  number.textContent = "0911-1112-1111";
  var email = document.createElement("h2");
  email.textContent = "dummyemail@gmail.com";
  var address = document.createElement("h2");
  address.textContent = "Pob.NortSouth Science City of Munoz Nueva Ecija, Philippines";
  contactContainer.append(contactH1, number, email, address);
};

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _assets_imgs_hero_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/imgs/hero.jpg */ "./src/assets/imgs/hero.jpg");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ "./src/pages/website.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/pages/menu.js");



var home = function home() {
  // ----------- Main Content -----------
  var main = document.createElement("main");
  _website__WEBPACK_IMPORTED_MODULE_1__.container.appendChild(main);
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
  nowrap.textContent = "D'Edwards Inihaws";
  welcomeH2.appendChild(nowrap);
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
  checkBtn.addEventListener("click", function () {
    _website__WEBPACK_IMPORTED_MODULE_1__.container.innerHTML = "";
    (0,_website__WEBPACK_IMPORTED_MODULE_1__.createTemplate)();
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)();
  });
};

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/pages/website.js");
/* harmony import */ var _assets_imgs_chickenInasal_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/imgs/chickenInasal.jpg */ "./src/assets/imgs/chickenInasal.jpg");
/* harmony import */ var _assets_imgs_bbq_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/imgs/bbq.jpeg */ "./src/assets/imgs/bbq.jpeg");
/* harmony import */ var _assets_imgs_inihawTilapia_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/imgs/inihawTilapia.jpg */ "./src/assets/imgs/inihawTilapia.jpg");
/* harmony import */ var _assets_imgs_liempo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/imgs/liempo.jpg */ "./src/assets/imgs/liempo.jpg");





var recipeList = [{
  img: _assets_imgs_chickenInasal_jpg__WEBPACK_IMPORTED_MODULE_1__,
  title: "Chicken Inasal",
  price: 120,
  description: "Best Seller"
}, {
  img: _assets_imgs_bbq_jpeg__WEBPACK_IMPORTED_MODULE_2__,
  title: "BBQ",
  price: 100,
  description: "Best Seller"
}, {
  img: _assets_imgs_inihawTilapia_jpg__WEBPACK_IMPORTED_MODULE_3__,
  title: "Inihaw na Tilapia",
  price: 130,
  description: "Best Seller"
}, {
  img: _assets_imgs_liempo_jpg__WEBPACK_IMPORTED_MODULE_4__,
  title: "Inihaw na Liempo",
  price: 200,
  description: "Best Seller"
}];
var menu = function menu() {
  var main = document.createElement("main");
  _website__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(main);
  var section = document.createElement("section");
  section.classList.add("content");
  main.appendChild(section);
  var menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  section.appendChild(menuContainer);
  var menuH1 = document.createElement("h1");
  menuH1.textContent = "Our Menu";
  menuContainer.appendChild(menuH1);
  var recipeContainer = document.createElement("div");
  recipeContainer.classList.add("recipe-container");
  menuContainer.appendChild(recipeContainer);
  recipeList.forEach(function (index) {
    var card = document.createElement("div");
    card.classList.add("card");
    recipeContainer.appendChild(card);
    var InihawImage = document.createElement("img");
    InihawImage.src = index.img;
    card.appendChild(InihawImage);
    var recipeDescription = document.createElement("div");
    recipeDescription.classList.add("recipe");
    card.appendChild(recipeDescription);
    var recipeName = document.createElement("h3");
    recipeName.textContent = index.title;
    var recipePrice = document.createElement("p");
    recipePrice.textContent = "".concat(index.price, " pesos");
    var recipeDesc = document.createElement("p");
    recipeDesc.textContent = index.description;
    recipeDescription.append(recipeName, recipePrice, recipeDesc);
  });
};

/***/ }),

/***/ "./src/pages/website.js":
/*!******************************!*\
  !*** ./src/pages/website.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "createTemplate": () => (/* binding */ createTemplate)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/pages/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/pages/contact.js");



var container = document.getElementById("container");
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

  // AddEventListener

  liHome.addEventListener("click", function () {
    container.innerHTML = "";
    createTemplate();
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.home)();
  });
  liMenu.addEventListener("click", function () {
    container.innerHTML = "";
    createTemplate();
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();
  });
  liContact.addEventListener("click", function () {
    container.innerHTML = "";
    createTemplate();
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)();
  });
};
var createFooter = function createFooter() {
  // ----------- Footer -----------
  var footer = document.createElement("footer");
  container.appendChild(footer);
  var footerP = document.createElement("p");
  footerP.innerHTML = "Copyright &copy; Justine Edward P. Santos";
  footer.appendChild(footerP);
};
var createTemplate = function createTemplate() {
  createHeader();
  createFooter();
};

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
___CSS_LOADER_EXPORT___.push([module.id, "nav {\n  background-color: #D9F9A5;\n  display: flex;\n  height: 101px;\n}\nnav .logo {\n  padding-left: 3rem;\n  font-size: 1.9rem;\n  align-self: center;\n}\nnav .nav-links {\n  width: 77%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nnav .nav-links ul {\n  display: flex;\n  gap: 5rem;\n}\nnav .nav-links ul li {\n  list-style: none;\n  font-size: 1.7rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.1s ease-in-out;\n}\nnav .nav-links ul li:hover {\n  transform: scale(1.2);\n}\n\nfooter {\n  width: 100%;\n  height: 55px;\n  position: absolute;\n  bottom: 0;\n  background-color: #D9F9A5;\n  text-align: center;\n  font-size: 1.2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmain .content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\nmain .content .hero img {\n  width: 820px;\n  height: 309px;\n}\nmain .content .content-container {\n  width: 80%;\n  height: 400px;\n  padding: 1rem;\n  background-color: #D9F9A5;\n  display: flex;\n  justify-content: space-evenly;\n}\nmain .content .content-container .welcome {\n  padding-top: 4rem;\n  padding-left: 5rem;\n  font-size: 1.2rem;\n}\nmain .content .content-container .welcome .no-wrap {\n  display: block;\n}\nmain .content .content-container .content-description {\n  width: 55%;\n  background-color: #D5C5C8;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 3rem;\n}\nmain .content .btn {\n  margin-top: 1rem;\n  border: 1px solid black;\n  padding: 1rem 3rem;\n  background-color: #D5C5C8;\n  border-radius: 0.5rem;\n  font-size: 1.5rem;\n  transition: 0.1s ease-in-out;\n  cursor: pointer;\n}\nmain .content .btn:hover {\n  transform: scale(1.1);\n  background-color: #D9F9A5;\n  border: none;\n}\nmain .content .btn:active {\n  background-color: green;\n}\n\nmain .content .menu-container {\n  border-radius: 0.5rem;\n  margin-top: 1rem;\n  width: 90vw;\n  height: 80vh;\n  background-color: #D9F9A5;\n}\nmain .content .menu-container h1 {\n  margin-top: 1rem;\n  text-align: center;\n}\nmain .content .menu-container .recipe-container {\n  margin: auto;\n  margin-top: 1rem;\n  background-color: white;\n  border: 1px solid black;\n  border-radius: 0.5rem;\n  width: 80%;\n  height: 90%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n  padding: 1rem;\n}\nmain .content .menu-container .recipe-container .card {\n  width: 60%;\n  height: 70%;\n  background-color: #D5C5C8;\n  border: 1px solid black;\n  border-radius: 0.5rem;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n}\nmain .content .menu-container .recipe-container .card img {\n  width: 70%;\n  height: 50%;\n  object-fit: cover;\n  border: 1px solid black;\n  border-radius: 0.5rem;\n}\nmain .content .menu-container .recipe-container .card .recipe {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 50%;\n  background-color: white;\n  border: 1px solid black;\n  border-radius: 0.5rem;\n}\n\nmain .content img {\n  width: 820px;\n  height: 309px;\n}\nmain .content .contact-container {\n  text-align: center;\n  padding: 2rem;\n}\nmain .content .contact-container h1 {\n  margin-bottom: 1rem;\n  font-size: 2rem;\n}\nmain .content .contact-container h2 {\n  letter-spacing: 0.2rem;\n  line-height: 3rem;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Roboto, sans-serif;\n}\n\n.home {\n  color: red;\n}\n\n.menu {\n  color: #D5C5C8;\n}\n\n.contact {\n  color: #D5C5C8;\n}", "",{"version":3,"sources":["webpack://./src/styles/_header.scss","webpack://./src/styles/main.scss","webpack://./src/styles/_footer.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/home.scss","webpack://./src/styles/menu.scss","webpack://./src/styles/contact.scss"],"names":[],"mappings":"AAAA;EACI,yBAAA;EACA,aAAA;EACA,aAAA;ACEJ;ADAI;EACI,kBAAA;EACA,iBAAA;EACA,kBAAA;ACER;ADCI;EACI,UAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;ACCR;ADEQ;EACI,aAAA;EACA,SAAA;ACAZ;ADEY;EACI,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;EACA,4BAAA;ACAhB;ADEgB;EACI,qBAAA;ACApB;;AC9BA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,yBCJe;EDKf,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ADiCJ;;AGzCI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AH4CR;AGzCY;EACI,YAAA;EACA,aAAA;AH2ChB;AGvCQ;EACI,UAAA;EACA,aAAA;EACA,aAAA;EACA,yBDlBO;ECmBP,aAAA;EACA,6BAAA;AHyCZ;AGtCY;EAEI,iBAAA;EACA,kBAAA;EACA,iBAAA;AHuChB;AGtCgB;EACI,cAAA;AHwCpB;AGlCY;EACI,UAAA;EACA,yBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,aAAA;AHoChB;AGhCQ;EACI,gBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBDhDE;ECiDF,qBAAA;EACA,iBAAA;EACA,4BAAA;EACA,eAAA;AHkCZ;AGhCY;EACI,qBAAA;EACA,yBDzDG;EC0DH,YAAA;AHkChB;AG/BY;EACI,uBAAA;AHiChB;;AI9FQ;EACI,qBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,yBFNO;AFuGnB;AI/FY;EACI,gBAAA;EACA,kBAAA;AJiGhB;AI7FY;EACI,YAAA;EACA,gBAAA;EACA,uBAAA;EACA,uBAAA;EACA,qBAAA;EACA,UAAA;EACA,WAAA;EACA,aAAA;EACA,kCAAA;EACA,2BAAA;EACA,mBAAA;EACA,aAAA;AJ+FhB;AI7FgB;EACI,UAAA;EACA,WAAA;EACA,yBF9BN;EE+BM,uBAAA;EACA,qBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;AJ+FpB;AI7FoB;EACI,UAAA;EACA,WAAA;EACA,iBAAA;EACA,uBAAA;EACA,qBAAA;AJ+FxB;AI5FoB;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,WAAA;EACA,uBAAA;EACA,uBAAA;EACA,qBAAA;AJ8FxB;;AKvJQ;EACI,YAAA;EACA,aAAA;AL0JZ;AKxJQ;EACI,kBAAA;EACA,aAAA;AL0JZ;AKzJY;EACI,mBAAA;EACA,eAAA;AL2JhB;AKxJY;EACI,sBAAA;EACA,iBAAA;AL0JhB;;AAhKA;EACI,UAAA;EACA,SAAA;EACA,sBAAA;EACA,+BEdQ;AFiLZ;;AA/JA;EACI,UAAA;AAkKJ;;AA/JA;EACI,cErBU;AFuLd;;AAhKA;EACI,cExBU;AF2Ld","sourcesContent":["nav {\r\n    background-color: $background-color;\r\n    display: flex;\r\n    height: 101px;\r\n\r\n    .logo {\r\n        padding-left: 3rem;\r\n        font-size: 1.9rem;\r\n        align-self: center;\r\n    }\r\n\r\n    .nav-links {\r\n        width: 77%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n\r\n\r\n        ul {\r\n            display: flex;\r\n            gap: 5rem;\r\n\r\n            li {\r\n                list-style: none;\r\n                font-size: 1.7rem;\r\n                font-weight: 600;\r\n                cursor: pointer;\r\n                transition: .1s ease-in-out;\r\n\r\n                &:hover {\r\n                    transform: scale(1.2);\r\n\r\n                }\r\n            }\r\n        }\r\n\r\n    }\r\n}","@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n@import \"./variables\";\r\n@import './header';\r\n@import './footer';\r\n@import \"./home\";\r\n@import \"./menu\";\r\n@import \"./contact\";\r\n\r\n\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: $body-font;\r\n}\r\n\r\n\r\n.home{\r\n    color: red;\r\n}\r\n\r\n.menu{\r\n    color: $accent-color;\r\n}\r\n.contact{\r\n    color: $accent-color;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n","footer{\r\n    width: 100%;\r\n    height: 55px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    background-color: $background-color;\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}","$body-font: Roboto, sans-serif;\r\n$background-color: #D9F9A5;\r\n$accent-color:#D5C5C8;","\r\nmain {\r\n    .content {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        flex-direction: column;\r\n        \r\n        .hero {\r\n            img {\r\n                width: 820px;\r\n                height: 309px;\r\n            }\r\n        }\r\n\r\n        .content-container {\r\n            width: 80%;\r\n            height: 400px;\r\n            padding: 1rem;\r\n            background-color: $background-color;\r\n            display: flex;\r\n            justify-content: space-evenly;\r\n            \r\n\r\n            .welcome{\r\n                \r\n                padding-top: 4rem;\r\n                padding-left: 5rem;\r\n                font-size: 1.2rem;\r\n                .no-wrap{\r\n                    display: block;\r\n                    \r\n                   \r\n                }\r\n            }\r\n\r\n            .content-description{\r\n                width: 55%;\r\n                background-color: #D5C5C8;\r\n                display: flex;\r\n                flex-direction: column;\r\n                gap: 1rem;\r\n                padding: 3rem;\r\n            }\r\n        }\r\n\r\n        .btn{\r\n            margin-top: 1rem;\r\n            border: 1px solid black;\r\n            padding: 1rem 3rem;\r\n            background-color: $accent-color;\r\n            border-radius: .5rem;\r\n            font-size: 1.5rem;\r\n            transition: .1s ease-in-out;\r\n            cursor: pointer;\r\n\r\n            &:hover{\r\n                transform: scale(1.1);\r\n                background-color: $background-color;\r\n                border: none;\r\n            }\r\n\r\n            &:active{\r\n                background-color: green;\r\n            }\r\n        }\r\n    }\r\n}","main{\r\n    .content{\r\n        .menu-container{\r\n            border-radius: .5rem;\r\n            margin-top: 1rem;\r\n            width: 90vw;\r\n            height: 80vh;\r\n            background-color: $background-color;\r\n\r\n            h1{ \r\n                margin-top: 1rem;\r\n                text-align: center;\r\n                \r\n            }\r\n\r\n            .recipe-container{\r\n                margin: auto;\r\n                margin-top: 1rem;\r\n                background-color: white;\r\n                border: 1px solid black;\r\n                border-radius: .5rem;\r\n                width: 80%;\r\n                height: 90%;\r\n                display: grid;\r\n                grid-template-columns: 1fr 1fr 1fr;\r\n                grid-template-rows: 1fr 1fr;\r\n                align-items: center;\r\n                padding: 1rem;\r\n                \r\n                .card{\r\n                    width: 60%;\r\n                    height: 70%;\r\n                    background-color: $accent-color;\r\n                    border: 1px solid black;\r\n                    border-radius: .5rem;\r\n                    margin: 1rem;\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n                    gap: .5rem;\r\n                    padding: 1rem;\r\n\r\n                    img{\r\n                        width: 70%;\r\n                        height: 50%;\r\n                        object-fit: cover;\r\n                        border: 1px solid black;\r\n                        border-radius: .5rem;\r\n                    }\r\n\r\n                    .recipe{\r\n                        display: flex;\r\n                        flex-direction: column;\r\n                        align-items: center;\r\n                        width: 100%;\r\n                        height: 50%;\r\n                        background-color: white;\r\n                        border: 1px solid black;\r\n                        border-radius: .5rem;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}","main{\r\n    .content{\r\n        img {\r\n            width: 820px;\r\n            height: 309px;\r\n        }\r\n        .contact-container{\r\n            text-align: center;\r\n            padding: 2rem;\r\n            h1{\r\n                margin-bottom: 1rem;\r\n                font-size: 2rem;\r\n            }\r\n\r\n            h2{\r\n                letter-spacing: .2rem;\r\n                line-height: 3rem;\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/imgs/bbq.jpeg":
/*!**********************************!*\
  !*** ./src/assets/imgs/bbq.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbq.jpeg";

/***/ }),

/***/ "./src/assets/imgs/chickenInasal.jpg":
/*!*******************************************!*\
  !*** ./src/assets/imgs/chickenInasal.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chickenInasal.jpg";

/***/ }),

/***/ "./src/assets/imgs/hero.jpg":
/*!**********************************!*\
  !*** ./src/assets/imgs/hero.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hero.jpg";

/***/ }),

/***/ "./src/assets/imgs/inihawTilapia.jpg":
/*!*******************************************!*\
  !*** ./src/assets/imgs/inihawTilapia.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "inihawTilapia.jpg";

/***/ }),

/***/ "./src/assets/imgs/liempo.jpg":
/*!************************************!*\
  !*** ./src/assets/imgs/liempo.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "liempo.jpg";

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
/* harmony import */ var _pages_website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/website */ "./src/pages/website.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
// import generateJoke from "./generateJoke"
// import './styles/main.scss'
// import profilePic from './assets/profile-pic.jpg'

// const profilesPic = document.getElementById("profilePic")
// profilesPic.src = profilePic

// const jokeBtn = document.getElementById("jokeBtn")
// jokeBtn.addEventListener("click", generateJoke)

// generateJoke()




(0,_pages_website__WEBPACK_IMPORTED_MODULE_1__.createTemplate)();
(0,_pages_home__WEBPACK_IMPORTED_MODULE_2__.home)();
})();

/******/ })()
;
//# sourceMappingURL=bundle3933fc7153608c78b55f.js.map