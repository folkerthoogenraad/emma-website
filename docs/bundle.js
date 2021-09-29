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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  scroll-behavior: smooth; }\n\nhtml, body {\n  padding: 0;\n  margin: 0; }\n\n.container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  padding: 0px 20px; }\n  .container .content {\n    width: 100%;\n    max-width: 1280px; }\n    .container .content.slim, .container .content .slim {\n      padding-left: 128px;\n      padding-right: 128px; }\n      @media (max-width: 768px) {\n        .container .content.slim, .container .content .slim {\n          padding-left: 60px;\n          padding-right: 60px; } }\n      @media (max-width: 500px) {\n        .container .content.slim, .container .content .slim {\n          padding-left: 30px;\n          padding-right: 30px; } }\n\nbody {\n  font-family: \"Atkinson Hyperlegible\", sans-serif;\n  font-size: 18px;\n  color: #1f221f; }\n  @media (max-width: 768px) {\n    body {\n      font-size: 16px; } }\n\n.bg-dark {\n  background: #1f221f;\n  color: #fff; }\n\n.bg-primary {\n  background: #29926d;\n  color: #fff; }\n\n.bg-light {\n  background: #fff;\n  color: #1f221f; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Oswald\", sans-serif;\n  line-height: 1.5; }\n  h1.primary, h2.primary, h3.primary, h4.primary, h5.primary, h6.primary {\n    color: #29926d; }\n  h1.no-margin, h2.no-margin, h3.no-margin, h4.no-margin, h5.no-margin, h6.no-margin {\n    margin: 0; }\n\nh1, h2, h3 {\n  font-weight: bold;\n  margin-bottom: 0.2em; }\n\nh4, h5, h6 {\n  font-weight: normal;\n  margin-bottom: 0.6em; }\n\nh1 {\n  font-size: 60px; }\n  @media (max-width: 768px) {\n    h1 {\n      font-size: 50px; } }\n  @media (max-width: 500px) {\n    h1 {\n      font-size: 35px; } }\n\nh2 {\n  font-size: 40px; }\n  @media (max-width: 768px) {\n    h2 {\n      font-size: 35px; } }\n  @media (max-width: 500px) {\n    h2 {\n      font-size: 30px; } }\n\nh3 {\n  font-size: 30px; }\n  @media (max-width: 500px) {\n    h3 {\n      font-size: 24px; } }\n\nh4 {\n  font-size: 24px; }\n  @media (max-width: 500px) {\n    h4 {\n      font-size: 20px; } }\n\np {\n  line-height: 1.8;\n  margin-bottom: 1em; }\n  p.spaced {\n    text-transform: uppercase;\n    letter-spacing: 0.2em; }\n  p.small {\n    font-size: 0.8rem; }\n  p.subtitle {\n    font-family: \"Oswald\", sans-serif; }\n  p.primary {\n    color: #29926d; }\n  p.no-margin {\n    margin: 0; }\n\n.secondary {\n  opacity: 0.5; }\n\nul {\n  width: 100%; }\n  ul li {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    list-style-type: none;\n    margin-bottom: 10px; }\n    ul li a {\n      text-decoration: none;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      width: 100%; }\n    ul li .icon {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 48px;\n      height: 48px;\n      color: #29926d;\n      border: 1px solid #29926d;\n      border-radius: 8px;\n      margin-right: 10px; }\n\na {\n  color: inherit; }\n\n@font-face {\n  font-family: \"icomoon\";\n  src: url(\"/assets/img/icons/icomoon.ttf?nga1xe\") format(\"truetype\"), url(\"/assets/img/icons/icomoon.woff?nga1xe\") format(\"woff\"), url(\"/assets/img/icons/icomoon.svg?nga1xe#icomoon\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: block; }\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"icomoon\" !important;\n  speak: never;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon-phone:before {\n  content: \"\"; }\n\n.icon-envelop:before {\n  content: \"\"; }\n\n.icon-map:before {\n  content: \"\"; }\n\n.icon-play:before {\n  content: \"\"; }\n\n.icon-pause:before {\n  content: \"\"; }\n\n.icon-share:before {\n  content: \"\"; }\n\n.icon-facebook:before {\n  content: \"\"; }\n\n.icon-instagram:before {\n  content: \"\"; }\n\n.icon-twitter:before {\n  content: \"\"; }\n\n.icon-youtube:before {\n  content: \"\"; }\n\n.icon-linkedin:before {\n  content: \"\"; }\n\n.icon-filmreel:before {\n  content: \"\"; }\n\nnav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  font-family: \"Oswald\", sans-serif;\n  font-weight: 200;\n  color: #1f221f;\n  background: #fff;\n  box-shadow: 0px 5px 10px 5px rgba(31, 34, 31, 0.05);\n  transition: color, background-color, box-shadow;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in-out; }\n  nav .links {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 60px; }\n    @media (max-width: 500px) {\n      nav .links {\n        height: 50px; } }\n    nav .links .link {\n      position: relative;\n      text-decoration: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 100%; }\n      nav .links .link:not(:first-child) {\n        margin-left: 40px; }\n        @media (max-width: 500px) {\n          nav .links .link:not(:first-child) {\n            margin-left: 15px; } }\n      nav .links .link::after {\n        content: '';\n        position: absolute;\n        transform: scaleX(0);\n        transform-origin: 0%;\n        width: 100%;\n        height: 4px;\n        right: 0px;\n        bottom: 0px;\n        background-color: #1f221f;\n        transition: background-color, transform;\n        transition-duration: 0.2s;\n        transition-timing-function: ease-in-out; }\n      nav .links .link:hover::after {\n        transform: none; }\n      nav .links .link.active::after {\n        transform: none; }\n  nav.header {\n    color: #fff;\n    background: none;\n    box-shadow: none; }\n    nav.header .link::after {\n      background-color: #fff; }\n\nheader.with-image {\n  position: relative;\n  z-index: 0;\n  height: 60vh;\n  overflow: hidden;\n  border-bottom-right-radius: 120px; }\n  header.with-image .background, header.with-image .overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center; }\n  header.with-image .overlay {\n    background: linear-gradient(180deg, rgba(31, 34, 31, 0.4) 0%, rgba(31, 34, 31, 0.6) 80%, #1f221f 100%); }\n  header.with-image .background {\n    z-index: 0; }\n  header.with-image .overlay {\n    z-index: 1; }\n  header.with-image .content.main {\n    z-index: 3; }\n  header.with-image .layer-0 {\n    z-index: -8; }\n  header.with-image .layer-1 {\n    z-index: -7; }\n  header.with-image .content.main {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-start;\n    flex-direction: column;\n    height: 100%;\n    padding: 20px 0px; }\n  header.with-image .socials {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 3;\n    padding-bottom: 100px; }\n    header.with-image .socials .content {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column; }\n    header.with-image .socials .social-links .button-social:not(:first-child) {\n      margin-left: 30px; }\n\nheader.simple {\n  display: flex;\n  color: #fff;\n  background: #1f221f;\n  overflow: hidden;\n  border-bottom-right-radius: 120px; }\n  header.simple .content {\n    margin-top: 200px; }\n\n.button-primary {\n  font-family: \"Oswald\", sans-serif;\n  text-decoration: none;\n  padding: 5px 25px;\n  color: #fff;\n  background-color: #29926d;\n  border: 1px solid #29926d;\n  border-radius: 8px;\n  transition: color, background-color;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in-out; }\n  .button-primary:hover {\n    color: #29926d;\n    background-color: #fff; }\n  .bg-primary .button-primary {\n    color: #29926d;\n    background-color: #fff;\n    border-color: #fff; }\n    .bg-primary .button-primary:hover {\n      color: #fff;\n      background-color: #29926d; }\n\n.button-secondary {\n  font-family: \"Oswald\", sans-serif;\n  text-decoration: none;\n  padding: 5px 25px;\n  border: 1px solid #1f221f;\n  border-radius: 8px; }\n\n.button-social {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  width: 40px;\n  height: 40px;\n  background: #29926d;\n  color: #fff;\n  border: 1px solid #29926d;\n  border-radius: 8px;\n  transition: background-color, color;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in-out;\n  font-size: 20px; }\n  .button-social:hover {\n    background: #fff;\n    color: #29926d; }\n  .bg-primary .button-social {\n    background: #fff;\n    color: #29926d;\n    border-color: #fff; }\n    .bg-primary .button-social:hover {\n      background: #29926d;\n      color: #fff; }\n\n.button-primary.with-icon, .button-secondary.with-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.button-primary .icon, .button-secondary .icon {\n  margin-left: 10px; }\n\nfooter .info {\n  padding-top: 80px;\n  padding-bottom: 80px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 40px; }\n  @media (max-width: 768px) {\n    footer .info {\n      padding-top: 60px;\n      padding-bottom: 60px; } }\n  @media (max-width: 500px) {\n    footer .info {\n      padding-top: 30px;\n      padding-bottom: 30px; } }\n  @media (max-width: 500px) {\n    footer .info {\n      grid-template-columns: 1fr; } }\n  footer .info .contact {\n    display: flex;\n    flex-direction: column; }\n  footer .info .social-links {\n    display: flex; }\n    footer .info .social-links .button-social:not(:first-child) {\n      margin-left: 10px; }\n\nfooter .copyright {\n  border-top: 1px solid #fff;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  text-align: center; }\n\n.page-part-text {\n  padding-top: 80px;\n  padding-bottom: 80px; }\n  @media (max-width: 768px) {\n    .page-part-text {\n      padding-top: 60px;\n      padding-bottom: 60px; } }\n  @media (max-width: 500px) {\n    .page-part-text {\n      padding-top: 30px;\n      padding-bottom: 30px; } }\n  .page-part-text .content {\n    display: flex;\n    flex-direction: column; }\n\n.page-part-image {\n  padding-top: 80px;\n  padding-bottom: 80px; }\n  @media (max-width: 768px) {\n    .page-part-image {\n      padding-top: 60px;\n      padding-bottom: 60px; } }\n  @media (max-width: 500px) {\n    .page-part-image {\n      padding-top: 30px;\n      padding-bottom: 30px; } }\n  .page-part-image .content {\n    display: flex; }\n    .page-part-image .content img {\n      width: 100%; }\n\n.page-part-image-gallery {\n  padding-top: 80px;\n  padding-bottom: 80px; }\n  @media (max-width: 768px) {\n    .page-part-image-gallery {\n      padding-top: 60px;\n      padding-bottom: 60px; } }\n  @media (max-width: 500px) {\n    .page-part-image-gallery {\n      padding-top: 30px;\n      padding-bottom: 30px; } }\n  .page-part-image-gallery .image-gallery {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 10px; }\n    @media (max-width: 768px) {\n      .page-part-image-gallery .image-gallery {\n        grid-template-columns: 1fr; } }\n    .page-part-image-gallery .image-gallery .image-tile {\n      position: relative;\n      padding-top: 125%; }\n      .page-part-image-gallery .image-gallery .image-tile .image-tile-content {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        width: 100%;\n        height: 100%;\n        display: grid;\n        grid-template-columns: calc(50% - 10px / 2) calc(50% - 10px / 2);\n        grid-template-rows: calc(40% - 10px / 2) calc(60% - 10px / 2);\n        grid-template-areas: \"a a\"\r \"b c\";\n        gap: 10px; }\n        .page-part-image-gallery .image-gallery .image-tile .image-tile-content.variation-b {\n          grid-template-columns: calc(50% - 10px / 2) calc(50% - 10px / 2);\n          grid-template-rows: calc(60% - 10px / 2) calc(40% - 10px / 2);\n          grid-template-areas: \"b c\"\r \"a a\"; }\n        .page-part-image-gallery .image-gallery .image-tile .image-tile-content img {\n          object-fit: cover;\n          object-position: center;\n          border-radius: 8px;\n          width: 100%;\n          height: 100%; }\n          .page-part-image-gallery .image-gallery .image-tile .image-tile-content img:nth-child(1) {\n            grid-area: a; }\n          .page-part-image-gallery .image-gallery .image-tile .image-tile-content img:nth-child(2) {\n            grid-area: b; }\n          .page-part-image-gallery .image-gallery .image-tile .image-tile-content img:nth-child(3) {\n            grid-area: c; }\n\n.page-part-text-with-image {\n  padding-top: 80px;\n  padding-bottom: 80px; }\n  @media (max-width: 768px) {\n    .page-part-text-with-image {\n      padding-top: 60px;\n      padding-bottom: 60px; } }\n  @media (max-width: 500px) {\n    .page-part-text-with-image {\n      padding-top: 30px;\n      padding-bottom: 30px; } }\n  .page-part-text-with-image .content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 40px; }\n    @media (max-width: 500px) {\n      .page-part-text-with-image .content {\n        grid-template-columns: 1fr; } }\n    .page-part-text-with-image .content .text {\n      display: flex;\n      justify-content: center;\n      align-items: flex-start;\n      flex-direction: column; }\n      .page-part-text-with-image .content .text .buttons {\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n        .page-part-text-with-image .content .text .buttons .button-primary:not(:first-child), .page-part-text-with-image .content .text .buttons .button-secondary:not(:first-child), .page-part-text-with-image .content .text .buttons .button-social:not(:first-child) {\n          margin-left: 10px; }\n    .page-part-text-with-image .content .image {\n      overflow: hidden;\n      border-radius: 8px; }\n      .page-part-text-with-image .content .image.round {\n        border-radius: 50%; }\n      .page-part-text-with-image .content .image img {\n        object-fit: cover;\n        object-position: center;\n        width: 100%;\n        height: 100%; }\n\n.page-part-cta {\n  padding-top: 80px;\n  padding-bottom: 80px; }\n  @media (max-width: 768px) {\n    .page-part-cta {\n      padding-top: 60px;\n      padding-bottom: 60px; } }\n  @media (max-width: 500px) {\n    .page-part-cta {\n      padding-top: 30px;\n      padding-bottom: 30px; } }\n  .page-part-cta .content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    text-align: center; }\n    .page-part-cta .content .buttons {\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n      .page-part-cta .content .buttons .button-primary:not(:first-child), .page-part-cta .content .buttons .button-secondary:not(:first-child), .page-part-cta .content .buttons .button-social:not(:first-child) {\n        margin-left: 10px; }\n\n.page-part-articles {\n  padding-top: 80px;\n  padding-bottom: 80px; }\n  @media (max-width: 768px) {\n    .page-part-articles {\n      padding-top: 60px;\n      padding-bottom: 60px; } }\n  @media (max-width: 500px) {\n    .page-part-articles {\n      padding-top: 30px;\n      padding-bottom: 30px; } }\n  .page-part-articles .content {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 40px; }\n    @media (max-width: 768px) {\n      .page-part-articles .content {\n        grid-template-columns: 1fr 1fr; } }\n    @media (max-width: 500px) {\n      .page-part-articles .content {\n        grid-template-columns: 1fr; } }\n    .page-part-articles .content article .image {\n      position: relative;\n      width: 100%;\n      padding-top: 75%;\n      margin-bottom: 10px; }\n      .page-part-articles .content article .image img {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        object-position: center; }\n\n.page-part-dark .content {\n  height: 100px;\n  background: #1f221f;\n  -webkit-mask: url(\"/assets/img/icons/divider.svg\"); }\n\n.page-part-dark.flipped {\n  transform: rotate(180deg); }\n\n.page-part-youtube {\n  padding-top: 80px;\n  padding-bottom: 80px; }\n  @media (max-width: 768px) {\n    .page-part-youtube {\n      padding-top: 60px;\n      padding-bottom: 60px; } }\n  @media (max-width: 500px) {\n    .page-part-youtube {\n      padding-top: 30px;\n      padding-bottom: 30px; } }\n  .page-part-youtube .content .youtube {\n    width: 100%;\n    padding-top: 56.25%;\n    position: relative;\n    z-index: 0;\n    border-radius: 8px;\n    overflow: hidden; }\n    .page-part-youtube .content .youtube .thumbnail {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 3; }\n      .page-part-youtube .content .youtube .thumbnail .background, .page-part-youtube .content .youtube .thumbnail .overlay, .page-part-youtube .content .youtube .thumbnail .play {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        width: 100%;\n        height: 100%; }\n      .page-part-youtube .content .youtube .thumbnail .background {\n        object-fit: cover;\n        object-position: center; }\n      .page-part-youtube .content .youtube .thumbnail .overlay {\n        background-color: rgba(31, 34, 31, 0.5); }\n      .page-part-youtube .content .youtube .thumbnail .play {\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n        .page-part-youtube .content .youtube .thumbnail .play .play-button {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          border-radius: 8px;\n          cursor: pointer;\n          width: 100px;\n          height: 100px;\n          color: #fff;\n          background: #29926d; }\n    .page-part-youtube .content .youtube iframe {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 2; }\n\n.page-part-text-split {\n  padding-top: 80px;\n  padding-bottom: 80px; }\n  @media (max-width: 768px) {\n    .page-part-text-split {\n      padding-top: 60px;\n      padding-bottom: 60px; } }\n  @media (max-width: 500px) {\n    .page-part-text-split {\n      padding-top: 30px;\n      padding-bottom: 30px; } }\n  .page-part-text-split .content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 40px; }\n    .page-part-text-split .content .text {\n      display: flex;\n      justify-content: center;\n      align-items: flex-start;\n      flex-direction: column; }\n      .page-part-text-split .content .text.right {\n        align-items: flex-end; }\n\n.page-part-contact {\n  padding-top: 80px;\n  padding-bottom: 80px;\n  color: #fff;\n  background: #1f221f; }\n  @media (max-width: 768px) {\n    .page-part-contact {\n      padding-top: 60px;\n      padding-bottom: 60px; } }\n  @media (max-width: 500px) {\n    .page-part-contact {\n      padding-top: 30px;\n      padding-bottom: 30px; } }\n  .page-part-contact .content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 40px; }\n    @media (max-width: 500px) {\n      .page-part-contact .content {\n        grid-template-columns: 1fr; } }\n    .page-part-contact .content .image img {\n      object-fit: cover;\n      object-position: center;\n      width: 100%;\n      height: 100%; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main */ "./src/js/main.js");
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_main__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/ */ "./src/ts/index.ts");
/* harmony import */ var _ts___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ts___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_2__);
// Load the javascript main

 // Load the SASS main



/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", () => {
  console.log("Webpack template loaded.");
});

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = __webpack_require__(/*! navigation */ "./src/ts/navigation.ts");
var parallax_1 = __webpack_require__(/*! parallax */ "./src/ts/parallax.ts");
document.addEventListener("DOMContentLoaded", function () {
    (0, navigation_1.initNavigation)();
    (0, parallax_1.initParallax)();
});


/***/ }),

/***/ "./src/ts/navigation.ts":
/*!******************************!*\
  !*** ./src/ts/navigation.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initNavigation = void 0;
function initNavigation() {
    var navigation = document.querySelector("nav");
    if (navigation === undefined)
        return;
    if (navigation === null)
        return;
    window.addEventListener("scroll", function () {
        navigation.classList.toggle("header", window.scrollY === 0);
    });
}
exports.initNavigation = initNavigation;


/***/ }),

/***/ "./src/ts/parallax.ts":
/*!****************************!*\
  !*** ./src/ts/parallax.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initParallax = void 0;
function initParallax() {
    var parallaxes = Array.from(document.querySelectorAll("[data-parallax]"));
    var update = function () {
        var scrollPos = window.scrollY;
        parallaxes.forEach(function (parallax) {
            var selfPos = parallax.offsetTop;
            var p = parseFloat(parallax.getAttribute("data-parallax"));
            parallax.style.transform = "translateY(" + (scrollPos - selfPos) / p + "px)";
        });
    };
    window.addEventListener("scroll", update);
    update();
}
exports.initParallax = initParallax;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2FwcC5zY3NzPzUxYzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9uYXZpZ2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9wYXJhbGxheC50cyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxzQkFBc0IsS0FBSywyQkFBMkIsZUFBZSxjQUFjLDRCQUE0QixFQUFFLGdCQUFnQixlQUFlLGNBQWMsRUFBRSxnQkFBZ0Isa0JBQWtCLHdCQUF3QiwyQkFBMkIsZ0JBQWdCLHNCQUFzQixFQUFFLHlCQUF5QixrQkFBa0Isd0JBQXdCLEVBQUUsMkRBQTJELDRCQUE0Qiw2QkFBNkIsRUFBRSxtQ0FBbUMsK0RBQStELCtCQUErQixnQ0FBZ0MsRUFBRSxFQUFFLG1DQUFtQywrREFBK0QsK0JBQStCLGdDQUFnQyxFQUFFLEVBQUUsVUFBVSx1REFBdUQsb0JBQW9CLG1CQUFtQixFQUFFLCtCQUErQixZQUFZLHdCQUF3QixFQUFFLEVBQUUsY0FBYyx3QkFBd0IsZ0JBQWdCLEVBQUUsaUJBQWlCLHdCQUF3QixnQkFBZ0IsRUFBRSxlQUFlLHFCQUFxQixtQkFBbUIsRUFBRSw0QkFBNEIsd0NBQXdDLHFCQUFxQixFQUFFLDRFQUE0RSxxQkFBcUIsRUFBRSx3RkFBd0YsZ0JBQWdCLEVBQUUsZ0JBQWdCLHNCQUFzQix5QkFBeUIsRUFBRSxnQkFBZ0Isd0JBQXdCLHlCQUF5QixFQUFFLFFBQVEsb0JBQW9CLEVBQUUsK0JBQStCLFVBQVUsd0JBQXdCLEVBQUUsRUFBRSwrQkFBK0IsVUFBVSx3QkFBd0IsRUFBRSxFQUFFLFFBQVEsb0JBQW9CLEVBQUUsK0JBQStCLFVBQVUsd0JBQXdCLEVBQUUsRUFBRSwrQkFBK0IsVUFBVSx3QkFBd0IsRUFBRSxFQUFFLFFBQVEsb0JBQW9CLEVBQUUsK0JBQStCLFVBQVUsd0JBQXdCLEVBQUUsRUFBRSxRQUFRLG9CQUFvQixFQUFFLCtCQUErQixVQUFVLHdCQUF3QixFQUFFLEVBQUUsT0FBTyxxQkFBcUIsdUJBQXVCLEVBQUUsY0FBYyxnQ0FBZ0MsNEJBQTRCLEVBQUUsYUFBYSx3QkFBd0IsRUFBRSxnQkFBZ0IsMENBQTBDLEVBQUUsZUFBZSxxQkFBcUIsRUFBRSxpQkFBaUIsZ0JBQWdCLEVBQUUsZ0JBQWdCLGlCQUFpQixFQUFFLFFBQVEsZ0JBQWdCLEVBQUUsV0FBVyxvQkFBb0Isa0NBQWtDLDBCQUEwQiw0QkFBNEIsMEJBQTBCLEVBQUUsZUFBZSw4QkFBOEIsc0JBQXNCLG9DQUFvQyw0QkFBNEIsb0JBQW9CLEVBQUUsbUJBQW1CLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLG9CQUFvQixxQkFBcUIsdUJBQXVCLGtDQUFrQywyQkFBMkIsMkJBQTJCLEVBQUUsT0FBTyxtQkFBbUIsRUFBRSxnQkFBZ0IsNkJBQTZCLG9OQUFvTix3QkFBd0IsdUJBQXVCLHdCQUF3QixFQUFFLDZDQUE2Qyw0SEFBNEgsaUJBQWlCLHVCQUF1Qix3QkFBd0IseUJBQXlCLHlCQUF5QixtQkFBbUIsbUZBQW1GLHVDQUF1QyxFQUFFLHdCQUF3QixtQkFBbUIsRUFBRSwwQkFBMEIsbUJBQW1CLEVBQUUsc0JBQXNCLG1CQUFtQixFQUFFLHVCQUF1QixtQkFBbUIsRUFBRSx3QkFBd0IsbUJBQW1CLEVBQUUsd0JBQXdCLG1CQUFtQixFQUFFLDJCQUEyQixtQkFBbUIsRUFBRSw0QkFBNEIsbUJBQW1CLEVBQUUsMEJBQTBCLG1CQUFtQixFQUFFLDBCQUEwQixtQkFBbUIsRUFBRSwyQkFBMkIsbUJBQW1CLEVBQUUsMkJBQTJCLG1CQUFtQixFQUFFLFNBQVMsb0JBQW9CLFdBQVcsWUFBWSxhQUFhLGlCQUFpQix3Q0FBd0MscUJBQXFCLG1CQUFtQixxQkFBcUIsd0RBQXdELG9EQUFvRCw4QkFBOEIsNENBQTRDLEVBQUUsZ0JBQWdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG1CQUFtQixFQUFFLGlDQUFpQyxvQkFBb0IsdUJBQXVCLEVBQUUsRUFBRSx3QkFBd0IsMkJBQTJCLDhCQUE4QixzQkFBc0IsZ0NBQWdDLDRCQUE0QixxQkFBcUIsRUFBRSw0Q0FBNEMsNEJBQTRCLEVBQUUscUNBQXFDLGdEQUFnRCxnQ0FBZ0MsRUFBRSxFQUFFLGlDQUFpQyxzQkFBc0IsNkJBQTZCLCtCQUErQiwrQkFBK0Isc0JBQXNCLHNCQUFzQixxQkFBcUIsc0JBQXNCLG9DQUFvQyxrREFBa0Qsb0NBQW9DLGtEQUFrRCxFQUFFLHVDQUF1QywwQkFBMEIsRUFBRSx3Q0FBd0MsMEJBQTBCLEVBQUUsZ0JBQWdCLGtCQUFrQix1QkFBdUIsdUJBQXVCLEVBQUUsK0JBQStCLCtCQUErQixFQUFFLHVCQUF1Qix1QkFBdUIsZUFBZSxpQkFBaUIscUJBQXFCLHNDQUFzQyxFQUFFLCtEQUErRCx5QkFBeUIsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLGtCQUFrQixtQkFBbUIsd0JBQXdCLDhCQUE4QixFQUFFLGdDQUFnQyw2R0FBNkcsRUFBRSxtQ0FBbUMsaUJBQWlCLEVBQUUsZ0NBQWdDLGlCQUFpQixFQUFFLHFDQUFxQyxpQkFBaUIsRUFBRSxnQ0FBZ0Msa0JBQWtCLEVBQUUsZ0NBQWdDLGtCQUFrQixFQUFFLHFDQUFxQyxvQkFBb0IsZ0NBQWdDLDhCQUE4Qiw2QkFBNkIsbUJBQW1CLHdCQUF3QixFQUFFLGdDQUFnQyx5QkFBeUIsZUFBZSxnQkFBZ0Isa0JBQWtCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGlCQUFpQiw0QkFBNEIsRUFBRSwyQ0FBMkMsc0JBQXNCLGdDQUFnQyw0QkFBNEIsK0JBQStCLEVBQUUsaUZBQWlGLDBCQUEwQixFQUFFLG1CQUFtQixrQkFBa0IsZ0JBQWdCLHdCQUF3QixxQkFBcUIsc0NBQXNDLEVBQUUsNEJBQTRCLHdCQUF3QixFQUFFLHFCQUFxQix3Q0FBd0MsMEJBQTBCLHNCQUFzQixnQkFBZ0IsOEJBQThCLDhCQUE4Qix1QkFBdUIsd0NBQXdDLDhCQUE4Qiw0Q0FBNEMsRUFBRSwyQkFBMkIscUJBQXFCLDZCQUE2QixFQUFFLGlDQUFpQyxxQkFBcUIsNkJBQTZCLHlCQUF5QixFQUFFLHlDQUF5QyxvQkFBb0Isa0NBQWtDLEVBQUUsdUJBQXVCLHdDQUF3QywwQkFBMEIsc0JBQXNCLDhCQUE4Qix1QkFBdUIsRUFBRSxvQkFBb0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsMEJBQTBCLGdCQUFnQixpQkFBaUIsd0JBQXdCLGdCQUFnQiw4QkFBOEIsdUJBQXVCLHdDQUF3Qyw4QkFBOEIsNENBQTRDLG9CQUFvQixFQUFFLDBCQUEwQix1QkFBdUIscUJBQXFCLEVBQUUsZ0NBQWdDLHVCQUF1QixxQkFBcUIseUJBQXlCLEVBQUUsd0NBQXdDLDRCQUE0QixvQkFBb0IsRUFBRSw0REFBNEQsa0JBQWtCLDRCQUE0Qix3QkFBd0IsRUFBRSxvREFBb0Qsc0JBQXNCLEVBQUUsa0JBQWtCLHNCQUFzQix5QkFBeUIsa0JBQWtCLG1DQUFtQyxjQUFjLEVBQUUsK0JBQStCLG9CQUFvQiwwQkFBMEIsNkJBQTZCLEVBQUUsRUFBRSwrQkFBK0Isb0JBQW9CLDBCQUEwQiw2QkFBNkIsRUFBRSxFQUFFLCtCQUErQixvQkFBb0IsbUNBQW1DLEVBQUUsRUFBRSwyQkFBMkIsb0JBQW9CLDZCQUE2QixFQUFFLGdDQUFnQyxvQkFBb0IsRUFBRSxtRUFBbUUsMEJBQTBCLEVBQUUsdUJBQXVCLCtCQUErQixzQkFBc0IseUJBQXlCLHVCQUF1QixFQUFFLHFCQUFxQixzQkFBc0IseUJBQXlCLEVBQUUsK0JBQStCLHVCQUF1QiwwQkFBMEIsNkJBQTZCLEVBQUUsRUFBRSwrQkFBK0IsdUJBQXVCLDBCQUEwQiw2QkFBNkIsRUFBRSxFQUFFLDhCQUE4QixvQkFBb0IsNkJBQTZCLEVBQUUsc0JBQXNCLHNCQUFzQix5QkFBeUIsRUFBRSwrQkFBK0Isd0JBQXdCLDBCQUEwQiw2QkFBNkIsRUFBRSxFQUFFLCtCQUErQix3QkFBd0IsMEJBQTBCLDZCQUE2QixFQUFFLEVBQUUsK0JBQStCLG9CQUFvQixFQUFFLHFDQUFxQyxvQkFBb0IsRUFBRSw4QkFBOEIsc0JBQXNCLHlCQUF5QixFQUFFLCtCQUErQixnQ0FBZ0MsMEJBQTBCLDZCQUE2QixFQUFFLEVBQUUsK0JBQStCLGdDQUFnQywwQkFBMEIsNkJBQTZCLEVBQUUsRUFBRSw2Q0FBNkMsb0JBQW9CLHlDQUF5QyxnQkFBZ0IsRUFBRSxpQ0FBaUMsaURBQWlELHFDQUFxQyxFQUFFLEVBQUUsMkRBQTJELDJCQUEyQiwwQkFBMEIsRUFBRSxpRkFBaUYsNkJBQTZCLGlCQUFpQixrQkFBa0IsbUJBQW1CLG9CQUFvQixzQkFBc0IsdUJBQXVCLHdCQUF3QiwyRUFBMkUsd0VBQXdFLGlEQUFpRCxvQkFBb0IsRUFBRSwrRkFBK0YsNkVBQTZFLDBFQUEwRSxtREFBbUQsRUFBRSx1RkFBdUYsOEJBQThCLG9DQUFvQywrQkFBK0Isd0JBQXdCLHlCQUF5QixFQUFFLHNHQUFzRywyQkFBMkIsRUFBRSxzR0FBc0csMkJBQTJCLEVBQUUsc0dBQXNHLDJCQUEyQixFQUFFLGdDQUFnQyxzQkFBc0IseUJBQXlCLEVBQUUsK0JBQStCLGtDQUFrQywwQkFBMEIsNkJBQTZCLEVBQUUsRUFBRSwrQkFBK0Isa0NBQWtDLDBCQUEwQiw2QkFBNkIsRUFBRSxFQUFFLHlDQUF5QyxvQkFBb0IscUNBQXFDLGdCQUFnQixFQUFFLGlDQUFpQyw2Q0FBNkMscUNBQXFDLEVBQUUsRUFBRSxpREFBaUQsc0JBQXNCLGdDQUFnQyxnQ0FBZ0MsK0JBQStCLEVBQUUsNERBQTRELHdCQUF3QixrQ0FBa0MsOEJBQThCLEVBQUUsNlFBQTZRLDhCQUE4QixFQUFFLGtEQUFrRCx5QkFBeUIsMkJBQTJCLEVBQUUsMERBQTBELDZCQUE2QixFQUFFLHdEQUF3RCw0QkFBNEIsa0NBQWtDLHNCQUFzQix1QkFBdUIsRUFBRSxvQkFBb0Isc0JBQXNCLHlCQUF5QixFQUFFLCtCQUErQixzQkFBc0IsMEJBQTBCLDZCQUE2QixFQUFFLEVBQUUsK0JBQStCLHNCQUFzQiwwQkFBMEIsNkJBQTZCLEVBQUUsRUFBRSw2QkFBNkIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsNkJBQTZCLHlCQUF5QixFQUFFLHdDQUF3QyxzQkFBc0IsZ0NBQWdDLDRCQUE0QixFQUFFLHFOQUFxTiw0QkFBNEIsRUFBRSx5QkFBeUIsc0JBQXNCLHlCQUF5QixFQUFFLCtCQUErQiwyQkFBMkIsMEJBQTBCLDZCQUE2QixFQUFFLEVBQUUsK0JBQStCLDJCQUEyQiwwQkFBMEIsNkJBQTZCLEVBQUUsRUFBRSxrQ0FBa0Msb0JBQW9CLHlDQUF5QyxnQkFBZ0IsRUFBRSxpQ0FBaUMsc0NBQXNDLHlDQUF5QyxFQUFFLEVBQUUsaUNBQWlDLHNDQUFzQyxxQ0FBcUMsRUFBRSxFQUFFLG1EQUFtRCwyQkFBMkIsb0JBQW9CLHlCQUF5Qiw0QkFBNEIsRUFBRSx5REFBeUQsNkJBQTZCLGlCQUFpQixrQkFBa0IsbUJBQW1CLG9CQUFvQixzQkFBc0IsdUJBQXVCLDRCQUE0QixrQ0FBa0MsRUFBRSw4QkFBOEIsa0JBQWtCLHdCQUF3Qix5REFBeUQsRUFBRSw2QkFBNkIsOEJBQThCLEVBQUUsd0JBQXdCLHNCQUFzQix5QkFBeUIsRUFBRSwrQkFBK0IsMEJBQTBCLDBCQUEwQiw2QkFBNkIsRUFBRSxFQUFFLCtCQUErQiwwQkFBMEIsMEJBQTBCLDZCQUE2QixFQUFFLEVBQUUsMENBQTBDLGtCQUFrQiwwQkFBMEIseUJBQXlCLGlCQUFpQix5QkFBeUIsdUJBQXVCLEVBQUUsdURBQXVELDJCQUEyQixlQUFlLGdCQUFnQixpQkFBaUIsa0JBQWtCLG9CQUFvQixxQkFBcUIsbUJBQW1CLEVBQUUsc0xBQXNMLDZCQUE2QixpQkFBaUIsa0JBQWtCLG1CQUFtQixvQkFBb0Isc0JBQXNCLHVCQUF1QixFQUFFLHFFQUFxRSw0QkFBNEIsa0NBQWtDLEVBQUUsa0VBQWtFLGtEQUFrRCxFQUFFLCtEQUErRCx3QkFBd0Isa0NBQWtDLDhCQUE4QixFQUFFLDhFQUE4RSwwQkFBMEIsb0NBQW9DLGdDQUFnQywrQkFBK0IsNEJBQTRCLHlCQUF5QiwwQkFBMEIsd0JBQXdCLGdDQUFnQyxFQUFFLG1EQUFtRCwyQkFBMkIsZUFBZSxnQkFBZ0IsaUJBQWlCLGtCQUFrQixvQkFBb0IscUJBQXFCLG1CQUFtQixFQUFFLDJCQUEyQixzQkFBc0IseUJBQXlCLEVBQUUsK0JBQStCLDZCQUE2QiwwQkFBMEIsNkJBQTZCLEVBQUUsRUFBRSwrQkFBK0IsNkJBQTZCLDBCQUEwQiw2QkFBNkIsRUFBRSxFQUFFLG9DQUFvQyxvQkFBb0IscUNBQXFDLGdCQUFnQixFQUFFLDRDQUE0QyxzQkFBc0IsZ0NBQWdDLGdDQUFnQywrQkFBK0IsRUFBRSxvREFBb0QsZ0NBQWdDLEVBQUUsd0JBQXdCLHNCQUFzQix5QkFBeUIsZ0JBQWdCLHdCQUF3QixFQUFFLCtCQUErQiwwQkFBMEIsMEJBQTBCLDZCQUE2QixFQUFFLEVBQUUsK0JBQStCLDBCQUEwQiwwQkFBMEIsNkJBQTZCLEVBQUUsRUFBRSxpQ0FBaUMsb0JBQW9CLHFDQUFxQyxnQkFBZ0IsRUFBRSxpQ0FBaUMscUNBQXFDLHFDQUFxQyxFQUFFLEVBQUUsOENBQThDLDBCQUEwQixnQ0FBZ0Msb0JBQW9CLHFCQUFxQixFQUFFO0FBQ2hnbkI7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05hOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzdGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FHQTs7Ozs7Ozs7Ozs7OztBQ0pBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFJO0FBQy9DQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWjtBQUNGLENBRkQsRTs7Ozs7Ozs7Ozs7QUNBQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDBNQUFtRzs7QUFFckk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7Ozs7O0FDbEJBLG1GQUE0QztBQUM1Qyw2RUFBd0M7QUFFeEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO0lBQzNDLCtCQUFjLEdBQUUsQ0FBQztJQUNqQiwyQkFBWSxHQUFFLENBQUM7QUFDbEIsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMSCxTQUFnQixjQUFjO0lBQzNCLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFL0MsSUFBRyxVQUFVLEtBQUssU0FBUztRQUFFLE9BQU87SUFDcEMsSUFBRyxVQUFVLEtBQUssSUFBSTtRQUFFLE9BQU87SUFFL0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtRQUMvQixVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDLENBQUMsQ0FBQztBQUNOLENBQUM7QUFURCx3Q0FTQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RELFNBQWdCLFlBQVk7SUFDekIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBa0IsQ0FBQztJQUUzRixJQUFJLE1BQU0sR0FBRztRQUNWLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFFL0IsVUFBVSxDQUFDLE9BQU8sQ0FBQyxrQkFBUTtZQUN4QixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFFM0QsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsYUFBYSxHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDaEYsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7SUFFRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLE1BQU0sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQWhCRCxvQ0FnQkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IH1cXG5cXG5odG1sLCBib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMHB4IDIwcHg7IH1cXG4gIC5jb250YWluZXIgLmNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7IH1cXG4gICAgLmNvbnRhaW5lciAuY29udGVudC5zbGltLCAuY29udGFpbmVyIC5jb250ZW50IC5zbGltIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEyOHB4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEyOHB4OyB9XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICAuY29udGFpbmVyIC5jb250ZW50LnNsaW0sIC5jb250YWluZXIgLmNvbnRlbnQgLnNsaW0ge1xcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7IH0gfVxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgICAgLmNvbnRhaW5lciAuY29udGVudC5zbGltLCAuY29udGFpbmVyIC5jb250ZW50IC5zbGltIHtcXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4OyB9IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXRraW5zb24gSHlwZXJsZWdpYmxlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjMWYyMjFmOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgZm9udC1zaXplOiAxNnB4OyB9IH1cXG5cXG4uYmctZGFyayB7XFxuICBiYWNrZ3JvdW5kOiAjMWYyMjFmO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYmctcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kOiAjMjk5MjZkO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYmctbGlnaHQge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMWYyMjFmOyB9XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS41OyB9XFxuICBoMS5wcmltYXJ5LCBoMi5wcmltYXJ5LCBoMy5wcmltYXJ5LCBoNC5wcmltYXJ5LCBoNS5wcmltYXJ5LCBoNi5wcmltYXJ5IHtcXG4gICAgY29sb3I6ICMyOTkyNmQ7IH1cXG4gIGgxLm5vLW1hcmdpbiwgaDIubm8tbWFyZ2luLCBoMy5uby1tYXJnaW4sIGg0Lm5vLW1hcmdpbiwgaDUubm8tbWFyZ2luLCBoNi5uby1tYXJnaW4ge1xcbiAgICBtYXJnaW46IDA7IH1cXG5cXG5oMSwgaDIsIGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07IH1cXG5cXG5oNCwgaDUsIGg2IHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTsgfVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNjBweDsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIGgxIHtcXG4gICAgICBmb250LXNpemU6IDUwcHg7IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIGgxIHtcXG4gICAgICBmb250LXNpemU6IDM1cHg7IH0gfVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogNDBweDsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIGgyIHtcXG4gICAgICBmb250LXNpemU6IDM1cHg7IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIGgyIHtcXG4gICAgICBmb250LXNpemU6IDMwcHg7IH0gfVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMzBweDsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIGgzIHtcXG4gICAgICBmb250LXNpemU6IDI0cHg7IH0gfVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMjRweDsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIGg0IHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7IH0gfVxcblxcbnAge1xcbiAgbGluZS1oZWlnaHQ6IDEuODtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgcC5zcGFjZWQge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yZW07IH1cXG4gIHAuc21hbGwge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTsgfVxcbiAgcC5zdWJ0aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgcC5wcmltYXJ5IHtcXG4gICAgY29sb3I6ICMyOTkyNmQ7IH1cXG4gIHAubm8tbWFyZ2luIHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuXFxuLnNlY29uZGFyeSB7XFxuICBvcGFjaXR5OiAwLjU7IH1cXG5cXG51bCB7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgdWwgbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICB1bCBsaSBhIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcbiAgICB1bCBsaSAuaWNvbiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHdpZHRoOiA0OHB4O1xcbiAgICAgIGhlaWdodDogNDhweDtcXG4gICAgICBjb2xvcjogIzI5OTI2ZDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjk5MjZkO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0OyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImljb21vb25cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9hc3NldHMvaW1nL2ljb25zL2ljb21vb24udHRmP25nYTF4ZVxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSwgdXJsKFxcXCIvYXNzZXRzL2ltZy9pY29ucy9pY29tb29uLndvZmY/bmdhMXhlXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybChcXFwiL2Fzc2V0cy9pbWcvaWNvbnMvaWNvbW9vbi5zdmc/bmdhMXhlI2ljb21vb25cXFwiKSBmb3JtYXQoXFxcInN2Z1xcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtZGlzcGxheTogYmxvY2s7IH1cXG5cXG5bY2xhc3NePVxcXCJpY29uLVxcXCJdLCBbY2xhc3MqPVxcXCIgaWNvbi1cXFwiXSB7XFxuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJpY29tb29uXFxcIiAhaW1wb3J0YW50O1xcbiAgc3BlYWs6IG5ldmVyO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyA9PT09PT09PT09PSAqL1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOyB9XFxuXFxuLmljb24tcGhvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupYJcXFwiOyB9XFxuXFxuLmljb24tZW52ZWxvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6lhVxcXCI7IH1cXG5cXG4uaWNvbi1tYXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupYtcXFwiOyB9XFxuXFxuLmljb24tcGxheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6onFxcXCI7IH1cXG5cXG4uaWNvbi1wYXVzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6onVxcXCI7IH1cXG5cXG4uaWNvbi1zaGFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6qglxcXCI7IH1cXG5cXG4uaWNvbi1mYWNlYm9vazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6qkFxcXCI7IH1cXG5cXG4uaWNvbi1pbnN0YWdyYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLuqpJcXFwiOyB9XFxuXFxuLmljb24tdHdpdHRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6qllxcXCI7IH1cXG5cXG4uaWNvbi15b3V0dWJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qqdXFxcIjsgfVxcblxcbi5pY29uLWxpbmtlZGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7quKXFxcIjsgfVxcblxcbi5pY29uLWZpbG1yZWVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSBXFxcIjsgfVxcblxcbm5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgY29sb3I6ICMxZjIyMWY7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IDVweCByZ2JhKDMxLCAzNCwgMzEsIDAuMDUpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyB9XFxuICBuYXYgLmxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNjBweDsgfVxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgICBuYXYgLmxpbmtzIHtcXG4gICAgICAgIGhlaWdodDogNTBweDsgfSB9XFxuICAgIG5hdiAubGlua3MgLmxpbmsge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGhlaWdodDogMTAwJTsgfVxcbiAgICAgIG5hdiAubGlua3MgLmxpbms6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7IH1cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgICAgICBuYXYgLmxpbmtzIC5saW5rOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDsgfSB9XFxuICAgICAgbmF2IC5saW5rcyAubGluazo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDRweDtcXG4gICAgICAgIHJpZ2h0OiAwcHg7XFxuICAgICAgICBib3R0b206IDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjIyMWY7XFxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc2Zvcm07XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyB9XFxuICAgICAgbmF2IC5saW5rcyAubGluazpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBub25lOyB9XFxuICAgICAgbmF2IC5saW5rcyAubGluay5hY3RpdmU6OmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTsgfVxcbiAgbmF2LmhlYWRlciB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lOyB9XFxuICAgIG5hdi5oZWFkZXIgLmxpbms6OmFmdGVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuaGVhZGVyLndpdGgtaW1hZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMDtcXG4gIGhlaWdodDogNjB2aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTIwcHg7IH1cXG4gIGhlYWRlci53aXRoLWltYWdlIC5iYWNrZ3JvdW5kLCBoZWFkZXIud2l0aC1pbWFnZSAub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7IH1cXG4gIGhlYWRlci53aXRoLWltYWdlIC5vdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgzMSwgMzQsIDMxLCAwLjQpIDAlLCByZ2JhKDMxLCAzNCwgMzEsIDAuNikgODAlLCAjMWYyMjFmIDEwMCUpOyB9XFxuICBoZWFkZXIud2l0aC1pbWFnZSAuYmFja2dyb3VuZCB7XFxuICAgIHotaW5kZXg6IDA7IH1cXG4gIGhlYWRlci53aXRoLWltYWdlIC5vdmVybGF5IHtcXG4gICAgei1pbmRleDogMTsgfVxcbiAgaGVhZGVyLndpdGgtaW1hZ2UgLmNvbnRlbnQubWFpbiB7XFxuICAgIHotaW5kZXg6IDM7IH1cXG4gIGhlYWRlci53aXRoLWltYWdlIC5sYXllci0wIHtcXG4gICAgei1pbmRleDogLTg7IH1cXG4gIGhlYWRlci53aXRoLWltYWdlIC5sYXllci0xIHtcXG4gICAgei1pbmRleDogLTc7IH1cXG4gIGhlYWRlci53aXRoLWltYWdlIC5jb250ZW50Lm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4IDBweDsgfVxcbiAgaGVhZGVyLndpdGgtaW1hZ2UgLnNvY2lhbHMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMztcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4OyB9XFxuICAgIGhlYWRlci53aXRoLWltYWdlIC5zb2NpYWxzIC5jb250ZW50IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICBoZWFkZXIud2l0aC1pbWFnZSAuc29jaWFscyAuc29jaWFsLWxpbmtzIC5idXR0b24tc29jaWFsOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDsgfVxcblxcbmhlYWRlci5zaW1wbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzFmMjIxZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTIwcHg7IH1cXG4gIGhlYWRlci5zaW1wbGUgLmNvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiAyMDBweDsgfVxcblxcbi5idXR0b24tcHJpbWFyeSB7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nOiA1cHggMjVweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5OTI2ZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTkyNmQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciwgYmFja2dyb3VuZC1jb2xvcjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IH1cXG4gIC5idXR0b24tcHJpbWFyeTpob3ZlciB7XFxuICAgIGNvbG9yOiAjMjk5MjZkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAuYmctcHJpbWFyeSAuYnV0dG9uLXByaW1hcnkge1xcbiAgICBjb2xvcjogIzI5OTI2ZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmOyB9XFxuICAgIC5iZy1wcmltYXJ5IC5idXR0b24tcHJpbWFyeTpob3ZlciB7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5OTI2ZDsgfVxcblxcbi5idXR0b24tc2Vjb25kYXJ5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6IDVweCAyNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzFmMjIxZjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDsgfVxcblxcbi5idXR0b24tc29jaWFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQ6ICMyOTkyNmQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTkyNmQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvcjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICBmb250LXNpemU6IDIwcHg7IH1cXG4gIC5idXR0b24tc29jaWFsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgY29sb3I6ICMyOTkyNmQ7IH1cXG4gIC5iZy1wcmltYXJ5IC5idXR0b24tc29jaWFsIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgY29sb3I6ICMyOTkyNmQ7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjsgfVxcbiAgICAuYmctcHJpbWFyeSAuYnV0dG9uLXNvY2lhbDpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogIzI5OTI2ZDtcXG4gICAgICBjb2xvcjogI2ZmZjsgfVxcblxcbi5idXR0b24tcHJpbWFyeS53aXRoLWljb24sIC5idXR0b24tc2Vjb25kYXJ5LndpdGgtaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmJ1dHRvbi1wcmltYXJ5IC5pY29uLCAuYnV0dG9uLXNlY29uZGFyeSAuaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDsgfVxcblxcbmZvb3RlciAuaW5mbyB7XFxuICBwYWRkaW5nLXRvcDogODBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogNDBweDsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIGZvb3RlciAuaW5mbyB7XFxuICAgICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIGZvb3RlciAuaW5mbyB7XFxuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIGZvb3RlciAuaW5mbyB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH0gfVxcbiAgZm9vdGVyIC5pbmZvIC5jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgZm9vdGVyIC5pbmZvIC5zb2NpYWwtbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgIGZvb3RlciAuaW5mbyAuc29jaWFsLWxpbmtzIC5idXR0b24tc29jaWFsOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDsgfVxcblxcbmZvb3RlciAuY29weXJpZ2h0IHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5wYWdlLXBhcnQtdGV4dCB7XFxuICBwYWRkaW5nLXRvcDogODBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4OyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnBhZ2UtcGFydC10ZXh0IHtcXG4gICAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDsgfSB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLnBhZ2UtcGFydC10ZXh0IHtcXG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDsgfSB9XFxuICAucGFnZS1wYXJ0LXRleHQgLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLnBhZ2UtcGFydC1pbWFnZSB7XFxuICBwYWRkaW5nLXRvcDogODBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4OyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnBhZ2UtcGFydC1pbWFnZSB7XFxuICAgICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIC5wYWdlLXBhcnQtaW1hZ2Uge1xcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4OyB9IH1cXG4gIC5wYWdlLXBhcnQtaW1hZ2UgLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgIC5wYWdlLXBhcnQtaW1hZ2UgLmNvbnRlbnQgaW1nIHtcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcblxcbi5wYWdlLXBhcnQtaW1hZ2UtZ2FsbGVyeSB7XFxuICBwYWRkaW5nLXRvcDogODBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4OyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnBhZ2UtcGFydC1pbWFnZS1nYWxsZXJ5IHtcXG4gICAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDsgfSB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLnBhZ2UtcGFydC1pbWFnZS1nYWxsZXJ5IHtcXG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDsgfSB9XFxuICAucGFnZS1wYXJ0LWltYWdlLWdhbGxlcnkgLmltYWdlLWdhbGxlcnkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7IH1cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICAgLnBhZ2UtcGFydC1pbWFnZS1nYWxsZXJ5IC5pbWFnZS1nYWxsZXJ5IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9IH1cXG4gICAgLnBhZ2UtcGFydC1pbWFnZS1nYWxsZXJ5IC5pbWFnZS1nYWxsZXJ5IC5pbWFnZS10aWxlIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgcGFkZGluZy10b3A6IDEyNSU7IH1cXG4gICAgICAucGFnZS1wYXJ0LWltYWdlLWdhbGxlcnkgLmltYWdlLWdhbGxlcnkgLmltYWdlLXRpbGUgLmltYWdlLXRpbGUtY29udGVudCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoNTAlIC0gMTBweCAvIDIpIGNhbGMoNTAlIC0gMTBweCAvIDIpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBjYWxjKDQwJSAtIDEwcHggLyAyKSBjYWxjKDYwJSAtIDEwcHggLyAyKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJhIGFcXFwiXFxyIFxcXCJiIGNcXFwiO1xcbiAgICAgICAgZ2FwOiAxMHB4OyB9XFxuICAgICAgICAucGFnZS1wYXJ0LWltYWdlLWdhbGxlcnkgLmltYWdlLWdhbGxlcnkgLmltYWdlLXRpbGUgLmltYWdlLXRpbGUtY29udGVudC52YXJpYXRpb24tYiB7XFxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyg1MCUgLSAxMHB4IC8gMikgY2FsYyg1MCUgLSAxMHB4IC8gMik7XFxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogY2FsYyg2MCUgLSAxMHB4IC8gMikgY2FsYyg0MCUgLSAxMHB4IC8gMik7XFxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJiIGNcXFwiXFxyIFxcXCJhIGFcXFwiOyB9XFxuICAgICAgICAucGFnZS1wYXJ0LWltYWdlLWdhbGxlcnkgLmltYWdlLWdhbGxlcnkgLmltYWdlLXRpbGUgLmltYWdlLXRpbGUtY29udGVudCBpbWcge1xcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTsgfVxcbiAgICAgICAgICAucGFnZS1wYXJ0LWltYWdlLWdhbGxlcnkgLmltYWdlLWdhbGxlcnkgLmltYWdlLXRpbGUgLmltYWdlLXRpbGUtY29udGVudCBpbWc6bnRoLWNoaWxkKDEpIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IGE7IH1cXG4gICAgICAgICAgLnBhZ2UtcGFydC1pbWFnZS1nYWxsZXJ5IC5pbWFnZS1nYWxsZXJ5IC5pbWFnZS10aWxlIC5pbWFnZS10aWxlLWNvbnRlbnQgaW1nOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBiOyB9XFxuICAgICAgICAgIC5wYWdlLXBhcnQtaW1hZ2UtZ2FsbGVyeSAuaW1hZ2UtZ2FsbGVyeSAuaW1hZ2UtdGlsZSAuaW1hZ2UtdGlsZS1jb250ZW50IGltZzpudGgtY2hpbGQoMykge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogYzsgfVxcblxcbi5wYWdlLXBhcnQtdGV4dC13aXRoLWltYWdlIHtcXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAucGFnZS1wYXJ0LXRleHQtd2l0aC1pbWFnZSB7XFxuICAgICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIC5wYWdlLXBhcnQtdGV4dC13aXRoLWltYWdlIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDsgfSB9XFxuICAucGFnZS1wYXJ0LXRleHQtd2l0aC1pbWFnZSAuY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiA0MHB4OyB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgIC5wYWdlLXBhcnQtdGV4dC13aXRoLWltYWdlIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9IH1cXG4gICAgLnBhZ2UtcGFydC10ZXh0LXdpdGgtaW1hZ2UgLmNvbnRlbnQgLnRleHQge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAgIC5wYWdlLXBhcnQtdGV4dC13aXRoLWltYWdlIC5jb250ZW50IC50ZXh0IC5idXR0b25zIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgIC5wYWdlLXBhcnQtdGV4dC13aXRoLWltYWdlIC5jb250ZW50IC50ZXh0IC5idXR0b25zIC5idXR0b24tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKSwgLnBhZ2UtcGFydC10ZXh0LXdpdGgtaW1hZ2UgLmNvbnRlbnQgLnRleHQgLmJ1dHRvbnMgLmJ1dHRvbi1zZWNvbmRhcnk6bm90KDpmaXJzdC1jaGlsZCksIC5wYWdlLXBhcnQtdGV4dC13aXRoLWltYWdlIC5jb250ZW50IC50ZXh0IC5idXR0b25zIC5idXR0b24tc29jaWFsOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cXG4gICAgLnBhZ2UtcGFydC10ZXh0LXdpdGgtaW1hZ2UgLmNvbnRlbnQgLmltYWdlIHtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsgfVxcbiAgICAgIC5wYWdlLXBhcnQtdGV4dC13aXRoLWltYWdlIC5jb250ZW50IC5pbWFnZS5yb3VuZCB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cXG4gICAgICAucGFnZS1wYXJ0LXRleHQtd2l0aC1pbWFnZSAuY29udGVudCAuaW1hZ2UgaW1nIHtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTsgfVxcblxcbi5wYWdlLXBhcnQtY3RhIHtcXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAucGFnZS1wYXJ0LWN0YSB7XFxuICAgICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIC5wYWdlLXBhcnQtY3RhIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDsgfSB9XFxuICAucGFnZS1wYXJ0LWN0YSAuY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgLnBhZ2UtcGFydC1jdGEgLmNvbnRlbnQgLmJ1dHRvbnMge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgIC5wYWdlLXBhcnQtY3RhIC5jb250ZW50IC5idXR0b25zIC5idXR0b24tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKSwgLnBhZ2UtcGFydC1jdGEgLmNvbnRlbnQgLmJ1dHRvbnMgLmJ1dHRvbi1zZWNvbmRhcnk6bm90KDpmaXJzdC1jaGlsZCksIC5wYWdlLXBhcnQtY3RhIC5jb250ZW50IC5idXR0b25zIC5idXR0b24tc29jaWFsOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XFxuXFxuLnBhZ2UtcGFydC1hcnRpY2xlcyB7XFxuICBwYWRkaW5nLXRvcDogODBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4OyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnBhZ2UtcGFydC1hcnRpY2xlcyB7XFxuICAgICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIC5wYWdlLXBhcnQtYXJ0aWNsZXMge1xcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4OyB9IH1cXG4gIC5wYWdlLXBhcnQtYXJ0aWNsZXMgLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDQwcHg7IH1cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICAgLnBhZ2UtcGFydC1hcnRpY2xlcyAuY29udGVudCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IH0gfVxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgICAucGFnZS1wYXJ0LWFydGljbGVzIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9IH1cXG4gICAgLnBhZ2UtcGFydC1hcnRpY2xlcyAuY29udGVudCBhcnRpY2xlIC5pbWFnZSB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHBhZGRpbmctdG9wOiA3NSU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAgIC5wYWdlLXBhcnQtYXJ0aWNsZXMgLmNvbnRlbnQgYXJ0aWNsZSAuaW1hZ2UgaW1nIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjsgfVxcblxcbi5wYWdlLXBhcnQtZGFyayAuY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZDogIzFmMjIxZjtcXG4gIC13ZWJraXQtbWFzazogdXJsKFxcXCIvYXNzZXRzL2ltZy9pY29ucy9kaXZpZGVyLnN2Z1xcXCIpOyB9XFxuXFxuLnBhZ2UtcGFydC1kYXJrLmZsaXBwZWQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcblxcbi5wYWdlLXBhcnQteW91dHViZSB7XFxuICBwYWRkaW5nLXRvcDogODBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4OyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnBhZ2UtcGFydC15b3V0dWJlIHtcXG4gICAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDsgfSB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLnBhZ2UtcGFydC15b3V0dWJlIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDsgfSB9XFxuICAucGFnZS1wYXJ0LXlvdXR1YmUgLmNvbnRlbnQgLnlvdXR1YmUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDU2LjI1JTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLnBhZ2UtcGFydC15b3V0dWJlIC5jb250ZW50IC55b3V0dWJlIC50aHVtYm5haWwge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIHotaW5kZXg6IDM7IH1cXG4gICAgICAucGFnZS1wYXJ0LXlvdXR1YmUgLmNvbnRlbnQgLnlvdXR1YmUgLnRodW1ibmFpbCAuYmFja2dyb3VuZCwgLnBhZ2UtcGFydC15b3V0dWJlIC5jb250ZW50IC55b3V0dWJlIC50aHVtYm5haWwgLm92ZXJsYXksIC5wYWdlLXBhcnQteW91dHViZSAuY29udGVudCAueW91dHViZSAudGh1bWJuYWlsIC5wbGF5IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAgICAgLnBhZ2UtcGFydC15b3V0dWJlIC5jb250ZW50IC55b3V0dWJlIC50aHVtYm5haWwgLmJhY2tncm91bmQge1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjsgfVxcbiAgICAgIC5wYWdlLXBhcnQteW91dHViZSAuY29udGVudCAueW91dHViZSAudGh1bWJuYWlsIC5vdmVybGF5IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDM0LCAzMSwgMC41KTsgfVxcbiAgICAgIC5wYWdlLXBhcnQteW91dHViZSAuY29udGVudCAueW91dHViZSAudGh1bWJuYWlsIC5wbGF5IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgIC5wYWdlLXBhcnQteW91dHViZSAuY29udGVudCAueW91dHViZSAudGh1bWJuYWlsIC5wbGF5IC5wbGF5LWJ1dHRvbiB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgYmFja2dyb3VuZDogIzI5OTI2ZDsgfVxcbiAgICAucGFnZS1wYXJ0LXlvdXR1YmUgLmNvbnRlbnQgLnlvdXR1YmUgaWZyYW1lIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB6LWluZGV4OiAyOyB9XFxuXFxuLnBhZ2UtcGFydC10ZXh0LXNwbGl0IHtcXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAucGFnZS1wYXJ0LXRleHQtc3BsaXQge1xcbiAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4OyB9IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAucGFnZS1wYXJ0LXRleHQtc3BsaXQge1xcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4OyB9IH1cXG4gIC5wYWdlLXBhcnQtdGV4dC1zcGxpdCAuY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiA0MHB4OyB9XFxuICAgIC5wYWdlLXBhcnQtdGV4dC1zcGxpdCAuY29udGVudCAudGV4dCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgICAgLnBhZ2UtcGFydC10ZXh0LXNwbGl0IC5jb250ZW50IC50ZXh0LnJpZ2h0IHtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgfVxcblxcbi5wYWdlLXBhcnQtY29udGFjdCB7XFxuICBwYWRkaW5nLXRvcDogODBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjMWYyMjFmOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnBhZ2UtcGFydC1jb250YWN0IHtcXG4gICAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDsgfSB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLnBhZ2UtcGFydC1jb250YWN0IHtcXG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDsgfSB9XFxuICAucGFnZS1wYXJ0LWNvbnRhY3QgLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogNDBweDsgfVxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgICAucGFnZS1wYXJ0LWNvbnRhY3QgLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH0gfVxcbiAgICAucGFnZS1wYXJ0LWNvbnRhY3QgLmNvbnRlbnQgLmltYWdlIGltZyB7XFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gTG9hZCB0aGUgamF2YXNjcmlwdCBtYWluXHJcbmltcG9ydCBcIi4vanMvbWFpblwiO1xyXG5pbXBvcnQgXCIuL3RzL1wiO1xyXG5cclxuLy8gTG9hZCB0aGUgU0FTUyBtYWluXHJcbmltcG9ydCBcIi4vc2Nzcy9hcHAuc2Nzc1wiOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XHJcbiAgIGNvbnNvbGUubG9nKFwiV2VicGFjayB0ZW1wbGF0ZSBsb2FkZWQuXCIpO1xyXG59KTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBpbml0TmF2aWdhdGlvbiB9IGZyb20gXCJuYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IGluaXRQYXJhbGxheCB9IGZyb20gXCJwYXJhbGxheFwiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcclxuICAgaW5pdE5hdmlnYXRpb24oKTtcclxuICAgaW5pdFBhcmFsbGF4KCk7XHJcbn0pO1xyXG4iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXROYXZpZ2F0aW9uKCl7XHJcbiAgIGxldCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcclxuXHJcbiAgIGlmKG5hdmlnYXRpb24gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICBpZihuYXZpZ2F0aW9uID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKT0+e1xyXG4gICAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoXCJoZWFkZXJcIiwgd2luZG93LnNjcm9sbFkgPT09IDApO1xyXG4gICB9KTtcclxufSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdFBhcmFsbGF4KCl7XHJcbiAgIGxldCBwYXJhbGxheGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtcGFyYWxsYXhdXCIpKSBhcyBIVE1MRWxlbWVudFtdO1xyXG5cclxuICAgbGV0IHVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgbGV0IHNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgICAgcGFyYWxsYXhlcy5mb3JFYWNoKHBhcmFsbGF4ID0+IHtcclxuICAgICAgICAgbGV0IHNlbGZQb3MgPSBwYXJhbGxheC5vZmZzZXRUb3A7XHJcbiAgICAgICAgIGxldCBwID0gcGFyc2VGbG9hdChwYXJhbGxheC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhcmFsbGF4XCIpKTtcclxuXHJcbiAgICAgICAgIHBhcmFsbGF4LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWShcIiArIChzY3JvbGxQb3MgLSBzZWxmUG9zKSAvIHAgKyBcInB4KVwiO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZSk7XHJcbiAgIHVwZGF0ZSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==