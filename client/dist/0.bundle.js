(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/assets/images/cover.png":
/*!*************************************!*\
  !*** ./src/assets/images/cover.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "49f0cf44cc6d08e319a727e9c179ded6.png");

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "70236c85f2499c5ba7e9db6d1095378f.png");

/***/ }),

/***/ "./src/assets/placeholder/widget.js":
/*!******************************************!*\
  !*** ./src/assets/placeholder/widget.js ***!
  \******************************************/
/*! exports provided: ARTICLECARD, POLLS, SQUIGGLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLECARD", function() { return ARTICLECARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POLLS", function() { return POLLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQUIGGLES", function() { return SQUIGGLES; });
var ARTICLECARD = Object.freeze({
  tags: ['Department', 'Campus', 'BM-BT'],
  title: 'Chaos, Curiosity and COVID-19: A Biotechnologist’s Perspective',
  authors: ['Debabrata Malik', 'Rama Krushna Behera'],
  readTime: '12 min',
  summary: 'A webinar on COVID-19 was conducted by the BM/BT Department. Read on to know more. A webinar on COVID-19 was conducted by the BM/BT Department. Read on to know more.'
});
var POLLS = Object.freeze({
  question: 'What is your opinion about the right time for return of students to the campus?',
  votes: ['I am desperately waiting to return back to campus with rigid safety protocols.', 'I am eager to return but I am a bit apprehensive about safety protocols.', "I don't want to return in the near future because of the risk of transmission and would rather wait for normalcy."]
});
var SQUIGGLES = Object.freeze({
  text: 'Hon’ble Union Education Minister inaugurated the Golden Jubilee Building at NIT Rourkela on 19th October. The broadcast of the inauguration ceremony can be watched with the following link: https://youtu.be/CTi4VnwdGVI'
});

/***/ }),

/***/ "./src/components/marginals/Footer.js":
/*!********************************************!*\
  !*** ./src/components/marginals/Footer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // libraries





var Footer = function Footer() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.aboutInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "Monday Morning",
    className: classes.logo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2",
    className: classes.aboutText
  }, "Monday Morning is the student Media Body of National Institute Of Technology Rourkela. We cover all the events, issues and activities going on inside the campus. We serve as a link between the administration and the students."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    sm: 4,
    className: classes.containerGrid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    justify: "space-between",
    className: classes.categoryContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: classes.categories
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Campus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Connect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "DD ", '&', " CWC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Career"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Alumni"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Expressions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: classes.categories
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Guide"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Contact Us"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: classes.categories
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Subscribe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Terms of Use"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Privacy Policy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Sitemap"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.rightSide
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "secondary",
    className: classes.appButton
  }, "Google Play"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.archives
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body1"
  }, "Archives"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "month",
    className: classes.archivesSelect
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "Month"
  }, "Month")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "year",
    className: classes.archivesSelect
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "Year"
  }, "Year")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.arrchiveIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-arrow-circle-right"
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.bottomWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.bottomBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body1",
    className: classes.copyRight
  }, "\xA9 2015 - 2020 Monday Morning. All rights reserved.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.socialIcons
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.socialIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-facebook-f"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.socialIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-twitter"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.socialIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-youtube"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.socialIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-linkedin"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.socialIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-instagram"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    wrapper: {
      paddingTop: '50px',
      backgroundColor: theme.palette.secondary.neutral20
    },
    aboutInfo: _defineProperty({
      padding: '0 100px 50px 0'
    }, theme.breakpoints.down('sm'), {
      padding: '0 1rem'
    }),
    logo: {
      width: '200px'
    },
    aboutText: {
      marginTop: '20px',
      textAlign: 'justify'
    },
    containerGrid: {
      width: '100%'
    },
    categoryContainer: _defineProperty({}, theme.breakpoints.down('sm'), {
      marginTop: '2.5rem',
      marginBottom: '1.5rem',
      padding: '0 1rem'
    }),
    categories: _defineProperty({
      listStyleType: 'none',
      marginTop: '0',
      lineHeight: '24px',
      fontSize: '16px',
      fontWeight: '700'
    }, theme.breakpoints.down('sm'), {
      fontSize: '14px',
      lineHeight: '20px',
      padding: 'unset'
    }),
    rightSide: _defineProperty({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      marginBottom: '1.5rem'
    }, theme.breakpoints.down('sm'), {
      padding: '0 1rem'
    }),
    appButton: {
      marginRight: '0'
    },
    archives: {
      marginTop: '40px',
      marginRight: '0'
    },
    archivesSelect: {
      marginRight: '0.75rem',
      padding: '4px 12px',
      border: '1px solid',
      borderColor: theme.palette.common.black,
      borderRadius: '4px'
    },
    arrchiveIcon: {
      fontSize: '18px'
    },
    bottomWrapper: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white
    },
    bottomBar: _defineProperty({
      minHeight: '70px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      //Container Properties
      maxWidth: '1280px',
      paddingLeft: '16px',
      paddingRight: '16px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }, theme.breakpoints.down('sm'), {
      display: 'block',
      paddingTop: '1.5rem',
      paddingBottom: '1.5rem'
    }),
    copyRight: _defineProperty({}, theme.breakpoints.down('sm'), {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      textAlign: 'center'
    }),
    socialIcons: _defineProperty({
      textAlign: 'right'
    }, theme.breakpoints.down('sm'), {
      textAlign: 'center',
      marginTop: '1.25rem'
    }),
    socialIcon: _defineProperty({
      marginLeft: '20px',
      fontSize: '18px',
      color: theme.palette.common.white
    }, theme.breakpoints.down('sm'), {
      marginLeft: '10px'
    })
  };
});

/***/ }),

/***/ "./src/components/marginals/Header.js":
/*!********************************************!*\
  !*** ./src/components/marginals/Header.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _config_themes_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/themes/light */ "./src/config/themes/light.js");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/logo.png */ "./src/assets/images/logo.png");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // libraries





 // images



var DeskTopHeader = function DeskTopHeader() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    className: classes.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "Monday Morning"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.searchWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    label: "Search for articles"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outlined",
    color: "primary",
    className: classes.signInButton
  }, "Sign In")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navList
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/",
    className: classes.navLink,
    exact: true,
    activeClassName: classes.activeHeaderLink
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/campus",
    className: classes.navLink,
    exact: true,
    activeClassName: classes.activeHeaderLink
  }, "Campus")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/connect",
    className: classes.navLink,
    exact: true,
    activeClassName: classes.activeHeaderLink
  }, "Connect")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "//ddcwc",
    className: classes.navLink,
    exact: true,
    activeClassName: classes.activeHeaderLink
  }, "DD ", '&', " CWC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "//career",
    className: classes.navLink,
    exact: true,
    activeClassName: classes.activeHeaderLink
  }, "Career")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/alumni",
    className: classes.navLink,
    exact: true,
    activeClassName: classes.activeHeaderLink
  }, "Alumni")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/expressions",
    className: classes.navLink,
    exact: true,
    activeClassName: classes.activeHeaderLink
  }, "Expressions"))))));
};

var MobileHeader = function MobileHeader() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      toggleMenu = _useState2[0],
      setToggleMenu = _useState2[1];

  var classes = useMobileStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.icon,
    onClick: function onClick() {
      return setToggleMenu(!toggleMenu);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-bars"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "Monday Morning",
    className: classes.logo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.icon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-search"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["SwipeableDrawer"], {
    anchor: "left",
    open: toggleMenu,
    onClose: function onClose() {
      return setToggleMenu(false);
    },
    onOpen: function onOpen() {
      return setToggleMenu(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navList
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/",
    className: classes.navLink,
    exact: true,
    activeClassName: classes.activeHeaderLink
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/campus",
    className: classes.navLink,
    exact: true,
    activeClassName: classes.activeHeaderLink
  }, "Campus")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/connect",
    className: classes.navLink,
    exact: true,
    activeClassName: classes.activeHeaderLink
  }, "Connect")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "//ddcwc",
    className: classes.navLink,
    exact: true,
    activeClassName: classes.activeHeaderLink
  }, "DD ", '&', " CWC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "//career",
    className: classes.navLink,
    exact: true,
    activeClassName: classes.activeHeaderLink
  }, "Career")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/alumni",
    className: classes.navLink,
    exact: true,
    activeClassName: classes.activeHeaderLink
  }, "Alumni")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/expressions",
    className: classes.navLink,
    exact: true,
    activeClassName: classes.activeHeaderLink
  }, "Expressions")))));
};

var Header = function Header() {
  var matches = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(_config_themes_light__WEBPACK_IMPORTED_MODULE_5__["default"].breakpoints.up('md'));

  if (matches) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DeskTopHeader, null);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MobileHeader, null);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Header);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    wrapper: {
      marginTop: '15px'
    },
    header: {
      paddingTop: '24px ',
      paddingBottom: '24px'
    },
    searchWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    signInButton: {
      alignItems: 'center',
      margin: 'auto 0 0 70px'
    },
    navbar: {
      position: 'relative',
      width: '100%'
    },
    navList: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      marginTop: '20px'
    },
    navItem: {
      width: 'auto'
    },
    navLink: {
      textDecoration: 'none',
      color: '#999999',
      fontWeight: '600',
      fontSize: '24px',
      lineHeight: '32px'
    },
    activeHeaderLink: {
      color: theme.palette.primary.blue50
    }
  };
});
var useMobileStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '1.25rem'
    },
    logo: {
      width: '180px',
      height: 'auto'
    },
    icon: {
      fontSize: '18px'
    },
    navList: {
      padding: '2rem'
    },
    navItem: {
      padding: '1rem 10px'
    },
    navLink: {
      textDecoration: 'none',
      color: 'unset'
    }
  };
});

/***/ }),

/***/ "./src/components/marginals/TopBar.js":
/*!********************************************!*\
  !*** ./src/components/marginals/TopBar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // libraries




var TopBar = function TopBar() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.topBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: classes.navList
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "",
    className: classes.navLink
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "",
    className: classes.navLink
  }, "Guide")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: classes.navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "",
    className: classes.navLink
  }, "Contact Us")))));
};

/* harmony default export */ __webpack_exports__["default"] = (TopBar);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    topBar: {
      marginTop: '0',
      backgroundColor: theme.palette.primary.blue50
    },
    container: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '40px',
      //Container Properties
      maxWidth: '1280px',
      paddingLeft: '16px',
      paddingRight: '16px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    navList: {
      margin: '0',
      listStyleType: 'none'
    },
    navItem: _defineProperty({
      display: 'inline',
      marginLeft: '40px',
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: '400'
    }, theme.breakpoints.down('sm'), {
      marginLeft: '20px',
      fontSize: '1rem'
    }),
    navLink: {
      textDecoration: 'none',
      color: theme.palette.common.white
    }
  };
});

/***/ }),

/***/ "./src/components/widgets/ArticleCard.js":
/*!***********************************************!*\
  !*** ./src/components/widgets/ArticleCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _assets_placeholder_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/placeholder/widget */ "./src/assets/placeholder/widget.js");
/* harmony import */ var _assets_images_cover_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/cover.png */ "./src/assets/images/cover.png");
 // libraries


 // Components

 // images



var ArticleCard = function ArticleCard() {
  var props = {
    article: _assets_placeholder_widget__WEBPACK_IMPORTED_MODULE_3__["ARTICLECARD"]
  };
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: classes.articleCard
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.featuredImage,
    src: _assets_images_cover_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "Featured"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 1
  }, props.article.tags.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      key: tag
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.tag
    }, tag));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.title,
    variant: "h2"
  }, props.article.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.authorList
  }, props.article.authors.map(function (author) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "body2",
      key: author,
      className: classes.author
    }, author);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.readTime
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2"
  }, props.article.readTime))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2",
    className: classes.articleDescription
  }, props.article.summary)));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleCard);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    articleCard: {
      boxShadow: theme.shadows[0]
    },
    featuredImage: {
      width: '100%'
    },
    tag: {
      // backgroundColor: 'unset',
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '16px',
      color: theme.palette.secondary.neutral60,
      textDecoration: 'underline'
    },
    title: {
      marginTop: '4px'
    },
    wrapper: {
      display: 'flex',
      marginTop: '4px',
      justifyContent: 'space-between'
    },
    readTime: {},
    author: {
      display: 'inline',
      color: theme.palette.secondary.neutral60,
      fontWeight: '400',
      marginRight: '10px'
    },
    articleDescription: {
      marginTop: '12px',
      fontWeight: '400',
      color: theme.palette.common.black
    }
  };
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9jb3Zlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wbGFjZWhvbGRlci93aWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFyZ2luYWxzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXJnaW5hbHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hcmdpbmFscy9Ub3BCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9BcnRpY2xlQ2FyZC5qcyJdLCJuYW1lcyI6WyJBUlRJQ0xFQ0FSRCIsIk9iamVjdCIsImZyZWV6ZSIsInRhZ3MiLCJ0aXRsZSIsImF1dGhvcnMiLCJyZWFkVGltZSIsInN1bW1hcnkiLCJQT0xMUyIsInF1ZXN0aW9uIiwidm90ZXMiLCJTUVVJR0dMRVMiLCJ0ZXh0IiwiRm9vdGVyIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsIndyYXBwZXIiLCJhYm91dEluZm8iLCJsb2dvIiwiYWJvdXRUZXh0IiwiY29udGFpbmVyR3JpZCIsImNhdGVnb3J5Q29udGFpbmVyIiwiY2F0ZWdvcmllcyIsInJpZ2h0U2lkZSIsImFwcEJ1dHRvbiIsImFyY2hpdmVzIiwiYXJjaGl2ZXNTZWxlY3QiLCJhcnJjaGl2ZUljb24iLCJib3R0b21XcmFwcGVyIiwiYm90dG9tQmFyIiwiY29weVJpZ2h0Iiwic29jaWFsSWNvbnMiLCJzb2NpYWxJY29uIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFkZGluZ1RvcCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJuZXV0cmFsMjAiLCJwYWRkaW5nIiwiYnJlYWtwb2ludHMiLCJkb3duIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJsaXN0U3R5bGVUeXBlIiwibGluZUhlaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcmdpblJpZ2h0IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJjb21tb24iLCJibGFjayIsImJvcmRlclJhZGl1cyIsIm1haW4iLCJjb2xvciIsIndoaXRlIiwibWluSGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJtYXhXaWR0aCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibWFyZ2luTGVmdCIsInBhZGRpbmdCb3R0b20iLCJEZXNrVG9wSGVhZGVyIiwiaGVhZGVyIiwic2VhcmNoV3JhcHBlciIsInNpZ25JbkJ1dHRvbiIsIm5hdmJhciIsIm5hdkxpc3QiLCJuYXZJdGVtIiwibmF2TGluayIsImFjdGl2ZUhlYWRlckxpbmsiLCJNb2JpbGVIZWFkZXIiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1lbnUiLCJzZXRUb2dnbGVNZW51IiwidXNlTW9iaWxlU3R5bGVzIiwiaWNvbiIsIkhlYWRlciIsIm1hdGNoZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwidXAiLCJtYXJnaW4iLCJwb3NpdGlvbiIsInRleHREZWNvcmF0aW9uIiwicHJpbWFyeSIsImJsdWU1MCIsImhlaWdodCIsIlRvcEJhciIsInRvcEJhciIsImNvbnRhaW5lciIsIkFydGljbGVDYXJkIiwicHJvcHMiLCJhcnRpY2xlIiwiYXJ0aWNsZUNhcmQiLCJmZWF0dXJlZEltYWdlIiwiY292ZXIiLCJtYXAiLCJ0YWciLCJhdXRob3JMaXN0IiwiYXV0aG9yIiwiYXJ0aWNsZURlc2NyaXB0aW9uIiwiYm94U2hhZG93Iiwic2hhZG93cyIsIm5ldXRyYWw2MCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFBO0FBQUE7QUFB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QUFBLENBQUQsQ0FBNUIsQyIsImZpbGUiOiIwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0OWYwY2Y0NGNjNmQwOGUzMTlhNzI3ZTljMTc5ZGVkNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzAyMzZjODVmMjQ5OWM1YmE3ZTlkYjZkMTA5NTM3OGYucG5nXCI7IiwiZXhwb3J0IGNvbnN0IEFSVElDTEVDQVJEID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgdGFnczogWydEZXBhcnRtZW50JywgJ0NhbXB1cycsICdCTS1CVCddLFxyXG4gIHRpdGxlOiAnQ2hhb3MsIEN1cmlvc2l0eSBhbmQgQ09WSUQtMTk6IEEgQmlvdGVjaG5vbG9naXN04oCZcyBQZXJzcGVjdGl2ZScsXHJcbiAgYXV0aG9yczogWydEZWJhYnJhdGEgTWFsaWsnLCAnUmFtYSBLcnVzaG5hIEJlaGVyYSddLFxyXG4gIHJlYWRUaW1lOiAnMTIgbWluJyxcclxuICBzdW1tYXJ5OlxyXG4gICAgJ0Egd2ViaW5hciBvbiBDT1ZJRC0xOSB3YXMgY29uZHVjdGVkIGJ5IHRoZSBCTS9CVCBEZXBhcnRtZW50LiBSZWFkIG9uIHRvIGtub3cgbW9yZS4gQSB3ZWJpbmFyIG9uIENPVklELTE5IHdhcyBjb25kdWN0ZWQgYnkgdGhlIEJNL0JUIERlcGFydG1lbnQuIFJlYWQgb24gdG8ga25vdyBtb3JlLicsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBPTExTID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgcXVlc3Rpb246ICdXaGF0IGlzIHlvdXIgb3BpbmlvbiBhYm91dCB0aGUgcmlnaHQgdGltZSBmb3IgcmV0dXJuIG9mIHN0dWRlbnRzIHRvIHRoZSBjYW1wdXM/JyxcclxuICB2b3RlczogW1xyXG4gICAgJ0kgYW0gZGVzcGVyYXRlbHkgd2FpdGluZyB0byByZXR1cm4gYmFjayB0byBjYW1wdXMgd2l0aCByaWdpZCBzYWZldHkgcHJvdG9jb2xzLicsXHJcbiAgICAnSSBhbSBlYWdlciB0byByZXR1cm4gYnV0IEkgYW0gYSBiaXQgYXBwcmVoZW5zaXZlIGFib3V0IHNhZmV0eSBwcm90b2NvbHMuJyxcclxuICAgIFwiSSBkb24ndCB3YW50IHRvIHJldHVybiBpbiB0aGUgbmVhciBmdXR1cmUgYmVjYXVzZSBvZiB0aGUgcmlzayBvZiB0cmFuc21pc3Npb24gYW5kIHdvdWxkIHJhdGhlciB3YWl0IGZvciBub3JtYWxjeS5cIixcclxuICBdLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBTUVVJR0dMRVMgPSBPYmplY3QuZnJlZXplKHtcclxuICB0ZXh0OlxyXG4gICAgJ0hvbuKAmWJsZSBVbmlvbiBFZHVjYXRpb24gTWluaXN0ZXIgaW5hdWd1cmF0ZWQgdGhlIEdvbGRlbiBKdWJpbGVlIEJ1aWxkaW5nIGF0IE5JVCBSb3Vya2VsYSBvbiAxOXRoIE9jdG9iZXIuIFRoZSBicm9hZGNhc3Qgb2YgdGhlIGluYXVndXJhdGlvbiBjZXJlbW9ueSBjYW4gYmUgd2F0Y2hlZCB3aXRoIHRoZSBmb2xsb3dpbmcgbGluazogaHR0cHM6Ly95b3V0dS5iZS9DVGk0Vm53ZEdWSScsXHJcbn0pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gbGlicmFyaWVzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdyb3cnPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBzbT17NH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFib3V0SW5mb30+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD0nTW9uZGF5IE1vcm5pbmcnIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJyBjbGFzc05hbWU9e2NsYXNzZXMuYWJvdXRUZXh0fT5cclxuICAgICAgICAgICAgICAgIE1vbmRheSBNb3JuaW5nIGlzIHRoZSBzdHVkZW50IE1lZGlhIEJvZHkgb2YgTmF0aW9uYWwgSW5zdGl0dXRlIE9mIFRlY2hub2xvZ3lcclxuICAgICAgICAgICAgICAgIFJvdXJrZWxhLiBXZSBjb3ZlciBhbGwgdGhlIGV2ZW50cywgaXNzdWVzIGFuZCBhY3Rpdml0aWVzIGdvaW5nIG9uIGluc2lkZSB0aGUgY2FtcHVzLlxyXG4gICAgICAgICAgICAgICAgV2Ugc2VydmUgYXMgYSBsaW5rIGJldHdlZW4gdGhlIGFkbWluaXN0cmF0aW9uIGFuZCB0aGUgc3R1ZGVudHMuXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJHcmlkfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yeUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmNhdGVnb3JpZXN9PlxyXG4gICAgICAgICAgICAgICAgICA8bGk+Q2FtcHVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPkNvbm5lY3Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+REQgeycmJ30gQ1dDPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPkNhcmVlcjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5BbHVtbmk8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+RXhwcmVzc2lvbnM8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmNhdGVnb3JpZXN9PlxyXG4gICAgICAgICAgICAgICAgICA8bGk+QWJvdXQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+R3VpZGU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+Q29udGFjdCBVczwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMuY2F0ZWdvcmllc30+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5TdWJzY3JpYmU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+VGVybXMgb2YgVXNlPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlByaXZhY3kgUG9saWN5PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlNpdGVtYXA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yaWdodFNpZGV9PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgIEdvb2dsZSBQbGF5XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFyY2hpdmVzfT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPkFyY2hpdmVzPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPSdtb250aCcgY2xhc3NOYW1lPXtjbGFzc2VzLmFyY2hpdmVzU2VsZWN0fT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdNb250aCc+TW9udGg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT0neWVhcicgY2xhc3NOYW1lPXtjbGFzc2VzLmFyY2hpdmVzU2VsZWN0fT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdZZWFyJz5ZZWFyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuYXJyY2hpdmVJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWFycm93LWNpcmNsZS1yaWdodCc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvdHRvbVdyYXBwZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvdHRvbUJhcn0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgY2xhc3NOYW1lPXtjbGFzc2VzLmNvcHlSaWdodH0+XHJcbiAgICAgICAgICAgICAgwqkgMjAxNSAtIDIwMjAgTW9uZGF5IE1vcm5pbmcuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsSWNvbnN9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsSWNvbn0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtZmFjZWJvb2stZic+PC9pPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWxJY29ufT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhYiBmYS10d2l0dGVyJz48L2k+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNvY2lhbEljb259PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmFiIGZhLXlvdXR1YmUnPjwvaT5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsSWNvbn0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtbGlua2VkaW4nPjwvaT5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsSWNvbn0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtaW5zdGFncmFtJz48L2k+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHdyYXBwZXI6IHtcclxuICAgIHBhZGRpbmdUb3A6ICc1MHB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubmV1dHJhbDIwLFxyXG4gIH0sXHJcbiAgYWJvdXRJbmZvOiB7XHJcbiAgICBwYWRkaW5nOiAnMCAxMDBweCA1MHB4IDAnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6ICcwIDFyZW0nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIHdpZHRoOiAnMjAwcHgnLFxyXG4gIH0sXHJcbiAgYWJvdXRUZXh0OiB7XHJcbiAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICAgIHRleHRBbGlnbjogJ2p1c3RpZnknLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyR3JpZDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGNhdGVnb3J5Q29udGFpbmVyOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiAnMi41cmVtJyxcclxuICAgICAgbWFyZ2luQm90dG9tOiAnMS41cmVtJyxcclxuICAgICAgcGFkZGluZzogJzAgMXJlbScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2F0ZWdvcmllczoge1xyXG4gICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxyXG4gICAgbWFyZ2luVG9wOiAnMCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXHJcbiAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxyXG4gICAgICBwYWRkaW5nOiAndW5zZXQnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJpZ2h0U2lkZToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMS41cmVtJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiAnMCAxcmVtJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhcHBCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiAnMCcsXHJcbiAgfSxcclxuICBhcmNoaXZlczoge1xyXG4gICAgbWFyZ2luVG9wOiAnNDBweCcsXHJcbiAgICBtYXJnaW5SaWdodDogJzAnLFxyXG4gIH0sXHJcbiAgYXJjaGl2ZXNTZWxlY3Q6IHtcclxuICAgIG1hcmdpblJpZ2h0OiAnMC43NXJlbScsXHJcbiAgICBwYWRkaW5nOiAnNHB4IDEycHgnLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgfSxcclxuICBhcnJjaGl2ZUljb246IHtcclxuICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgfSxcclxuICBib3R0b21XcmFwcGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgfSxcclxuICBib3R0b21CYXI6IHtcclxuICAgIG1pbkhlaWdodDogJzcwcHgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgLy9Db250YWluZXIgUHJvcGVydGllc1xyXG4gICAgbWF4V2lkdGg6ICcxMjgwcHgnLFxyXG4gICAgcGFkZGluZ0xlZnQ6ICcxNnB4JyxcclxuICAgIHBhZGRpbmdSaWdodDogJzE2cHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBwYWRkaW5nVG9wOiAnMS41cmVtJyxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogJzEuNXJlbScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29weVJpZ2h0OiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZm9udFNpemU6ICcwLjc1cmVtJyxcclxuICAgICAgbGluZUhlaWdodDogJzFyZW0nLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNvY2lhbEljb25zOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luVG9wOiAnMS4yNXJlbScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc29jaWFsSWNvbjoge1xyXG4gICAgbWFyZ2luTGVmdDogJzIwcHgnLFxyXG4gICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gbGlicmFyaWVzXHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkLCBCdXR0b24sIENvbnRhaW5lciwgVGV4dEZpZWxkLCBTd2lwZWFibGVEcmF3ZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi9jb25maWcvdGhlbWVzL2xpZ2h0JztcclxuXHJcbi8vIGltYWdlc1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nJztcclxuXHJcbmNvbnN0IERlc2tUb3BIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHNtPXs2fT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD0nTW9uZGF5IE1vcm5pbmcnIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHNtPXs2fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD0nU2VhcmNoIGZvciBhcnRpY2xlcycgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJyBjb2xvcj0ncHJpbWFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLnNpZ25JbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICBTaWduIEluXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZiYXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2TGlzdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkl0ZW19PlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz0nLydcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZMaW5rfVxyXG4gICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17Y2xhc3Nlcy5hY3RpdmVIZWFkZXJMaW5rfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZJdGVtfT5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89Jy9jYW1wdXMnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmF2TGlua31cclxuICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e2NsYXNzZXMuYWN0aXZlSGVhZGVyTGlua31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW1wdXNcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZJdGVtfT5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89Jy9jb25uZWN0J1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkxpbmt9XHJcbiAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXtjbGFzc2VzLmFjdGl2ZUhlYWRlckxpbmt9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29ubmVjdFxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkl0ZW19PlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz0nLy9kZGN3YydcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZMaW5rfVxyXG4gICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17Y2xhc3Nlcy5hY3RpdmVIZWFkZXJMaW5rfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEREIHsnJid9IENXQ1xyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkl0ZW19PlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz0nLy9jYXJlZXInXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmF2TGlua31cclxuICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e2NsYXNzZXMuYWN0aXZlSGVhZGVyTGlua31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYXJlZXJcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZJdGVtfT5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89Jy9hbHVtbmknXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmF2TGlua31cclxuICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e2NsYXNzZXMuYWN0aXZlSGVhZGVyTGlua31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBbHVtbmlcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZJdGVtfT5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89Jy9leHByZXNzaW9ucydcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZMaW5rfVxyXG4gICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17Y2xhc3Nlcy5hY3RpdmVIZWFkZXJMaW5rfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEV4cHJlc3Npb25zXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBNb2JpbGVIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZU1lbnUsIHNldFRvZ2dsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlTW9iaWxlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVNZW51KCF0b2dnbGVNZW51KX0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWJhcnMnPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD0nTW9uZGF5IE1vcm5pbmcnIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJz48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFN3aXBlYWJsZURyYXdlclxyXG4gICAgICAgIGFuY2hvcj0nbGVmdCdcclxuICAgICAgICBvcGVuPXt0b2dnbGVNZW51fVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFRvZ2dsZU1lbnUoZmFsc2UpfVxyXG4gICAgICAgIG9uT3Blbj17KCkgPT4gc2V0VG9nZ2xlTWVudSh0cnVlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkxpc3R9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2SXRlbX0+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89Jy8nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkxpbmt9XHJcbiAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e2NsYXNzZXMuYWN0aXZlSGVhZGVyTGlua31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZJdGVtfT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz0nL2NhbXB1cydcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmF2TGlua31cclxuICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17Y2xhc3Nlcy5hY3RpdmVIZWFkZXJMaW5rfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2FtcHVzXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2SXRlbX0+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89Jy9jb25uZWN0J1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZMaW5rfVxyXG4gICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXtjbGFzc2VzLmFjdGl2ZUhlYWRlckxpbmt9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb25uZWN0XHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2SXRlbX0+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89Jy8vZGRjd2MnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkxpbmt9XHJcbiAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e2NsYXNzZXMuYWN0aXZlSGVhZGVyTGlua31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEREIHsnJid9IENXQ1xyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkl0ZW19PlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPScvL2NhcmVlcidcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmF2TGlua31cclxuICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17Y2xhc3Nlcy5hY3RpdmVIZWFkZXJMaW5rfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2FyZWVyXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2SXRlbX0+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89Jy9hbHVtbmknXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkxpbmt9XHJcbiAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e2NsYXNzZXMuYWN0aXZlSGVhZGVyTGlua31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFsdW1uaVxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkl0ZW19PlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPScvZXhwcmVzc2lvbnMnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkxpbmt9XHJcbiAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e2NsYXNzZXMuYWN0aXZlSGVhZGVyTGlua31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEV4cHJlc3Npb25zXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1N3aXBlYWJsZURyYXdlcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgbGV0IG1hdGNoZXMgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpKTtcclxuICBpZiAobWF0Y2hlcykge1xyXG4gICAgcmV0dXJuIDxEZXNrVG9wSGVhZGVyIC8+O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPE1vYmlsZUhlYWRlciAvPjtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHdyYXBwZXI6IHtcclxuICAgIG1hcmdpblRvcDogJzE1cHgnLFxyXG4gIH0sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICBwYWRkaW5nVG9wOiAnMjRweCAnLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogJzI0cHgnLFxyXG4gIH0sXHJcbiAgc2VhcmNoV3JhcHBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIHNpZ25JbkJ1dHRvbjoge1xyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtYXJnaW46ICdhdXRvIDAgMCA3MHB4JyxcclxuICB9LFxyXG4gIG5hdmJhcjoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgbmF2TGlzdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICB9LFxyXG4gIG5hdkl0ZW06IHtcclxuICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgfSxcclxuICBuYXZMaW5rOiB7XHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgY29sb3I6ICcjOTk5OTk5JyxcclxuICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxyXG4gICAgZm9udFNpemU6ICcyNHB4JyxcclxuICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcclxuICB9LFxyXG4gIGFjdGl2ZUhlYWRlckxpbms6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuYmx1ZTUwLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgdXNlTW9iaWxlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgd3JhcHBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgbWFyZ2luVG9wOiAnMS4yNXJlbScsXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICB3aWR0aDogJzE4MHB4JyxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgZm9udFNpemU6ICcxOHB4JyxcclxuICB9LFxyXG4gIG5hdkxpc3Q6IHtcclxuICAgIHBhZGRpbmc6ICcycmVtJyxcclxuICB9LFxyXG4gIG5hdkl0ZW06IHtcclxuICAgIHBhZGRpbmc6ICcxcmVtIDEwcHgnLFxyXG4gIH0sXHJcbiAgbmF2TGluazoge1xyXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIGNvbG9yOiAndW5zZXQnLFxyXG4gIH0sXHJcbn0pKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGxpYnJhcmllc1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgVG9wQmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9wQmFyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkxpc3R9PlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZJdGVtfT5cclxuICAgICAgICAgICAgPExpbmsgdG89JycgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkxpbmt9PlxyXG4gICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkl0ZW19PlxyXG4gICAgICAgICAgICA8TGluayB0bz0nJyBjbGFzc05hbWU9e2NsYXNzZXMubmF2TGlua30+XHJcbiAgICAgICAgICAgICAgR3VpZGVcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubmF2SXRlbX0+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPScnIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZMaW5rfT5cclxuICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUb3BCYXI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICB0b3BCYXI6IHtcclxuICAgIG1hcmdpblRvcDogJzAnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuYmx1ZTUwLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAnNDBweCcsXHJcbiAgICAvL0NvbnRhaW5lciBQcm9wZXJ0aWVzXHJcbiAgICBtYXhXaWR0aDogJzEyODBweCcsXHJcbiAgICBwYWRkaW5nTGVmdDogJzE2cHgnLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAnMTZweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgbmF2TGlzdDoge1xyXG4gICAgbWFyZ2luOiAnMCcsXHJcbiAgICBsaXN0U3R5bGVUeXBlOiAnbm9uZScsXHJcbiAgfSxcclxuICBuYXZJdGVtOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lJyxcclxuICAgIG1hcmdpbkxlZnQ6ICc0MHB4JyxcclxuICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMjhweCcsXHJcbiAgICBmb250V2VpZ2h0OiAnNDAwJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5MZWZ0OiAnMjBweCcsXHJcbiAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbmF2TGluazoge1xyXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICB9LFxyXG59KSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBsaWJyYXJpZXNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgeyBBUlRJQ0xFQ0FSRCB9IGZyb20gJy4uLy4uL2Fzc2V0cy9wbGFjZWhvbGRlci93aWRnZXQnO1xyXG5cclxuLy8gaW1hZ2VzXHJcbmltcG9ydCBjb3ZlciBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2NvdmVyLnBuZyc7XHJcblxyXG5jb25zdCBBcnRpY2xlQ2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBwcm9wcyA9IHtcclxuICAgIGFydGljbGU6IEFSVElDTEVDQVJELFxyXG4gIH07XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuYXJ0aWNsZUNhcmR9PlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5mZWF0dXJlZEltYWdlfSBzcmM9e2NvdmVyfSBhbHQ9J0ZlYXR1cmVkJyAvPlxyXG4gICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAge3Byb3BzLmFydGljbGUudGFncy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIGtleT17dGFnfT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGFnfT57dGFnfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD0naDInPlxyXG4gICAgICAgICAge3Byb3BzLmFydGljbGUudGl0bGV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aG9yTGlzdH0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5hcnRpY2xlLmF1dGhvcnMubWFwKChhdXRob3IpID0+IChcclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Micga2V5PXthdXRob3J9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRob3J9PlxyXG4gICAgICAgICAgICAgICAge2F1dGhvcn1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWFkVGltZX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJz57cHJvcHMuYXJ0aWNsZS5yZWFkVGltZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MicgY2xhc3NOYW1lPXtjbGFzc2VzLmFydGljbGVEZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICB7cHJvcHMuYXJ0aWNsZS5zdW1tYXJ5fVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUNhcmQ7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGFydGljbGVDYXJkOiB7XHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMF0sXHJcbiAgfSxcclxuICBmZWF0dXJlZEltYWdlOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgdGFnOiB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICd1bnNldCcsXHJcbiAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgZm9udFdlaWdodDogJzQwMCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMTZweCcsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubmV1dHJhbDYwLFxyXG4gICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIG1hcmdpblRvcDogJzRweCcsXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBtYXJnaW5Ub3A6ICc0cHgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICB9LFxyXG4gIHJlYWRUaW1lOiB7fSxcclxuICBhdXRob3I6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm5ldXRyYWw2MCxcclxuICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxyXG4gICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuICB9LFxyXG4gIGFydGljbGVEZXNjcmlwdGlvbjoge1xyXG4gICAgbWFyZ2luVG9wOiAnMTJweCcsXHJcbiAgICBmb250V2VpZ2h0OiAnNDAwJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICB9LFxyXG59KSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=