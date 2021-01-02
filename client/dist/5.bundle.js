(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/assets/images/photoStory.png":
/*!******************************************!*\
  !*** ./src/assets/images/photoStory.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3882a3e316a5d99996a676099ad31580.png");

/***/ }),

/***/ "./src/assets/images/profile.png":
/*!***************************************!*\
  !*** ./src/assets/images/profile.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "367b001305cbe92acd2183d9a3e902bd.png");

/***/ }),

/***/ "./src/assets/images/witsdom.png":
/*!***************************************!*\
  !*** ./src/assets/images/witsdom.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "eb1d2612aaab738e28a297eec46f4c75.png");

/***/ }),

/***/ "./src/components/expressions/PhotoStory.js":
/*!**************************************************!*\
  !*** ./src/components/expressions/PhotoStory.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _assets_images_photoStory_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/photoStory.png */ "./src/assets/images/photoStory.png");
 // libararies

 // images



function PhotoStory() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.Image,
    src: _assets_images_photoStory_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "PhotoStory"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhotoStory);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    wrapper: {
      borderRadius: '8px'
    },
    Image: {
      width: '100%',
      objectFit: 'cover'
    }
  };
});

/***/ }),

/***/ "./src/components/expressions/Witsdom.js":
/*!***********************************************!*\
  !*** ./src/components/expressions/Witsdom.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _assets_images_witsdom_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/witsdom.png */ "./src/assets/images/witsdom.png");




function Witsdom() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.Image,
    src: _assets_images_witsdom_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "Witsdom"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Witsdom);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    wrapper: {
      borderRadius: '8px'
    },
    Image: {
      width: '100%',
      objectFit: 'cover'
    }
  };
});

/***/ }),

/***/ "./src/components/portfolio/Backlink.js":
/*!**********************************************!*\
  !*** ./src/components/portfolio/Backlink.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
 // Libraries




var BackLink = function BackLink() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/about",
    className: classes.link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-chevron-left"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.text
  }, "Back to About Us")))));
};

/* harmony default export */ __webpack_exports__["default"] = (BackLink);
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    wrapper: {
      marginTop: '3rem'
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.secondary.neutral70
    },
    text: {
      marginLeft: '1rem'
    }
  };
});

/***/ }),

/***/ "./src/components/portfolio/UserCard.js":
/*!**********************************************!*\
  !*** ./src/components/portfolio/UserCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _config_themes_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/themes/light */ "./src/config/themes/light.js");
/* harmony import */ var _assets_images_profile_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/profile.png */ "./src/assets/images/profile.png");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Libraries



 // Images



var UserCard = function UserCard() {
  var Desktop = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(_config_themes_light__WEBPACK_IMPORTED_MODULE_3__["default"].breakpoints.up('sm'));
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    md: 4,
    sm: 12,
    className: classes.gridPadding
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.userWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.userImage,
    src: _assets_images_profile_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "user photo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.userData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.columnFlex
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h2"
  }, "Jonna")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(classes.PostText, " ").concat(classes.subtext)
  }, "jonna@gmail.com")), Desktop ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2"
  }, "Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(classes.PostText, " ").concat(classes.subtext)
  }, "2019-20")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2"
  }, "Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(classes.PostText, " ").concat(classes.subtext)
  }, "2019-20")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2"
  }, "Number Of Posts "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "".concat(classes.PostText, " ").concat(classes.subtext)
  }, "8"))))))), Desktop ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    md: 4,
    sm: 6,
    className: "".concat(classes.bordered, " ").concat(classes.gridPadding)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.columnFlex
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4"
  }, "Number Of Posts :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "".concat(classes.PostText, " ").concat(classes.subtext)
  }, "8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.subtext
  }, "Content : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.PostText
  }, "5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.subtext
  }, "Design : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.PostText
  }, "2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.subtext
  }, "Photography : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.PostText
  }, "1"))))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    md: 4,
    sm: 6,
    className: "".concat(classes.bordered, " ").concat(classes.gridPadding)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.columnFlex
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4"
  }, "Teams"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(classes.PostText, " ").concat(classes.subtext)
  }, "Tech \u2022 Design \u2022 Content \u2022 Photography")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4"
  }, "Links"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(classes.PostText, " ").concat(classes.subtext)
  }, "https://linkedin.com/en/jonna-4578")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserCard);
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  var _gridPadding;

  return {
    wrapper: {
      marginTop: '1.5rem'
    },
    card: {
      boxShadow: theme.shadows[0]
    },
    gridPadding: (_gridPadding = {
      width: '100%',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem'
    }, _defineProperty(_gridPadding, theme.breakpoints.down('sm'), {
      marginTop: '2rem'
    }), _defineProperty(_gridPadding, theme.breakpoints.down('xs'), {
      paddingLeft: '1rem',
      paddingRight: '1rem'
    }), _gridPadding),
    bordered: _defineProperty({
      width: '100%',
      borderLeft: '1px solid',
      borderColor: theme.palette.secondary.neutral50
    }, theme.breakpoints.down('xs'), {
      paddingTop: '1rem',
      borderLeft: 'unset',
      borderTop: '1px solid',
      borderColor: theme.palette.secondary.neutral50
    }),
    userWrapper: _defineProperty({
      display: 'flex',
      justifyContent: 'space-around'
    }, theme.breakpoints.down('sm'), {
      justifyContent: 'unset'
    }),
    userImage: _defineProperty({
      height: '100%'
    }, theme.breakpoints.down('sm'), {
      height: '50%'
    }),
    columnFlex: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%'
    },
    flex: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    },
    subtext: {
      lineHeight: '1.5rem',
      fontWeight: theme.typography.fontWeightBold,
      '& span': {
        marginLeft: '0.25rem'
      }
    },
    PostText: {
      fontWeight: theme.typography.fontWeightRegular
    }
  };
});

/***/ }),

/***/ "./src/components/portfolio/Works.js":
/*!*******************************************!*\
  !*** ./src/components/portfolio/Works.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _widgets_ArticleCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/ArticleCard */ "./src/components/widgets/ArticleCard.js");
/* harmony import */ var _expressions_Witsdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../expressions/Witsdom */ "./src/components/expressions/Witsdom.js");
/* harmony import */ var _expressions_PhotoStory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../expressions/PhotoStory */ "./src/components/expressions/PhotoStory.js");
 // Libraries

 // Components





var Works = function Works() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sectionWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h1",
    color: "primary",
    className: classes.sectionHead
  }, "Content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 4
  }, [0, 1, 2, 3, 4].map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      key: key,
      item: true,
      sm: 4
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_ArticleCard__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sectionWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h1",
    color: "primary",
    className: classes.sectionHead
  }, "Design"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 4
  }, [0, 1].map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      key: key,
      item: true,
      sm: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_expressions_Witsdom__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sectionWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h1",
    color: "primary",
    className: classes.sectionHead
  }, "Photography"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 4
  }, [0].map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      key: key,
      item: true,
      sm: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_expressions_PhotoStory__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Works);
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    wrapper: {
      marginBottom: '4rem'
    },
    sectionWrapper: {
      marginTop: '2rem'
    },
    sectionHead: {
      marginBottom: '1rem'
    }
  };
});

/***/ }),

/***/ "./src/screens/Portfolio.js":
/*!**********************************!*\
  !*** ./src/screens/Portfolio.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_marginals_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/marginals/Header */ "./src/components/marginals/Header.js");
/* harmony import */ var _components_marginals_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/marginals/Footer */ "./src/components/marginals/Footer.js");
/* harmony import */ var _components_marginals_TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/marginals/TopBar */ "./src/components/marginals/TopBar.js");
/* harmony import */ var _components_portfolio_Backlink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/portfolio/Backlink */ "./src/components/portfolio/Backlink.js");
/* harmony import */ var _components_portfolio_UserCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/portfolio/UserCard */ "./src/components/portfolio/UserCard.js");
/* harmony import */ var _components_portfolio_Works__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/portfolio/Works */ "./src/components/portfolio/Works.js");
 // libraries
// Components






 //placeholders

function Portfolio() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_marginals_TopBar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_marginals_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_portfolio_Backlink__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_portfolio_UserCard__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_portfolio_Works__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_marginals_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9waG90b1N0b3J5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9wcm9maWxlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy93aXRzZG9tLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9leHByZXNzaW9ucy9QaG90b1N0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V4cHJlc3Npb25zL1dpdHNkb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcG9ydGZvbGlvL0JhY2tsaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BvcnRmb2xpby9Vc2VyQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3J0Zm9saW8vV29ya3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvUG9ydGZvbGlvLmpzIl0sIm5hbWVzIjpbIlBob3RvU3RvcnkiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwid3JhcHBlciIsIkltYWdlIiwicGhvdG9TdG9yeSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwib2JqZWN0Rml0IiwiV2l0c2RvbSIsIndpdHNkb20iLCJCYWNrTGluayIsImxpbmsiLCJ0ZXh0IiwibWFyZ2luVG9wIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJuZXV0cmFsNzAiLCJtYXJnaW5MZWZ0IiwiVXNlckNhcmQiLCJEZXNrdG9wIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwidXAiLCJjYXJkIiwiZ3JpZFBhZGRpbmciLCJ1c2VyV3JhcHBlciIsInVzZXJJbWFnZSIsInByb2ZpbGUiLCJ1c2VyRGF0YSIsImNvbHVtbkZsZXgiLCJQb3N0VGV4dCIsInN1YnRleHQiLCJib3JkZXJlZCIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImRvd24iLCJib3JkZXJMZWZ0IiwiYm9yZGVyQ29sb3IiLCJuZXV0cmFsNTAiLCJwYWRkaW5nVG9wIiwiYm9yZGVyVG9wIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsInR5cG9ncmFwaHkiLCJmb250V2VpZ2h0Qm9sZCIsImZvbnRXZWlnaHRSZWd1bGFyIiwiV29ya3MiLCJzZWN0aW9uV3JhcHBlciIsInNlY3Rpb25IZWFkIiwibWFwIiwia2V5IiwibWFyZ2luQm90dG9tIiwiUG9ydGZvbGlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztDQUdBOztBQUNBOztBQUVBLFNBQVNBLFVBQVQsR0FBc0I7QUFDcEIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVELE9BQU8sQ0FBQ0U7QUFBeEIsa0JBQ0U7QUFBSyxhQUFTLEVBQUVGLE9BQU8sQ0FBQ0csS0FBeEI7QUFBK0IsT0FBRyxFQUFFQyxxRUFBcEM7QUFBZ0QsT0FBRyxFQUFDO0FBQXBELElBREYsQ0FERjtBQUtEOztBQUVjTCx5RUFBZjtBQUVBLElBQU1FLFNBQVMsR0FBR0ksMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0osV0FBTyxFQUFFO0FBQ1BLLGtCQUFZLEVBQUU7QUFEUCxLQUQ4QjtBQUl2Q0osU0FBSyxFQUFFO0FBQ0xLLFdBQUssRUFBRSxNQURGO0FBRUxDLGVBQVMsRUFBRTtBQUZOO0FBSmdDLEdBQVo7QUFBQSxDQUFE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Q0FERjtBQVVEOztBQUVjQSx3RUFBZixFIiwiZmlsZSI6IjUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM4ODJhM2UzMTZhNWQ5OTk5NmE2NzYwOTlhZDMxNTgwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzNjdiMDAxMzA1Y2JlOTJhY2QyMTgzZDlhM2U5MDJiZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWIxZDI2MTJhYWFiNzM4ZTI4YTI5N2VlYzQ2ZjRjNzUucG5nXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGxpYmFyYXJpZXNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG4vLyBpbWFnZXNcclxuaW1wb3J0IHBob3RvU3RvcnkgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9waG90b1N0b3J5LnBuZyc7XHJcblxyXG5mdW5jdGlvbiBQaG90b1N0b3J5KCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLkltYWdlfSBzcmM9e3Bob3RvU3Rvcnl9IGFsdD0nUGhvdG9TdG9yeScgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBob3RvU3Rvcnk7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICB3cmFwcGVyOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxyXG4gIH0sXHJcbiAgSW1hZ2U6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgfSxcclxufSkpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHdpdHNkb20gZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy93aXRzZG9tLnBuZyc7XHJcblxyXG5mdW5jdGlvbiBXaXRzZG9tKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLkltYWdlfSBzcmM9e3dpdHNkb219IGFsdD0nV2l0c2RvbScgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpdHNkb207XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICB3cmFwcGVyOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxyXG4gIH0sXHJcbiAgSW1hZ2U6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgfSxcclxufSkpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gTGlicmFyaWVzXHJcbmltcG9ydCB7IENvbnRhaW5lciwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgQmFja0xpbmsgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICA8TGluayB0bz0nL2Fib3V0JyBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmFzIGZhLWNoZXZyb24tbGVmdCc+PC9pPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+QmFjayB0byBBYm91dCBVczwvc3Bhbj5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQmFja0xpbms7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICB3cmFwcGVyOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICczcmVtJyxcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubmV1dHJhbDcwLFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgbWFyZ2luTGVmdDogJzFyZW0nLFxyXG4gIH0sXHJcbn0pKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIExpYnJhcmllc1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5LCBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL2NvbmZpZy90aGVtZXMvbGlnaHQnO1xyXG5cclxuLy8gSW1hZ2VzXHJcbmltcG9ydCBwcm9maWxlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS5wbmcnO1xyXG5cclxuY29uc3QgVXNlckNhcmQgPSAoKSA9PiB7XHJcbiAgbGV0IERlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezR9IHNtPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRQYWRkaW5nfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VySW1hZ2V9IHNyYz17cHJvZmlsZX0gYWx0PSd1c2VyIHBob3RvJyAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXNlckRhdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbHVtbkZsZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInPkpvbm5hPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Mic+RW1haWw8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLlBvc3RUZXh0fSAke2NsYXNzZXMuc3VidGV4dH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBqb25uYUBnbWFpbC5jb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtEZXNrdG9wID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJz5ZZWFyPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLlBvc3RUZXh0fSAke2NsYXNzZXMuc3VidGV4dH1gfT4yMDE5LTIwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInPlllYXI8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5Qb3N0VGV4dH0gJHtjbGFzc2VzLnN1YnRleHR9YH0+MjAxOS0yMDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJz5OdW1iZXIgT2YgUG9zdHMgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtjbGFzc2VzLlBvc3RUZXh0fSAke2NsYXNzZXMuc3VidGV4dH1gfT44PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAge0Rlc2t0b3AgPyAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSBzbT17Nn0gY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmJvcmRlcmVkfSAke2NsYXNzZXMuZ3JpZFBhZGRpbmd9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbHVtbkZsZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCc+TnVtYmVyIE9mIFBvc3RzIDo8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuUG9zdFRleHR9ICR7Y2xhc3Nlcy5zdWJ0ZXh0fWB9Pjg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb250ZW50IDogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLlBvc3RUZXh0fT41PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJ0ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGVzaWduIDogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLlBvc3RUZXh0fT4yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJ0ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGhvdG9ncmFwaHkgOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuUG9zdFRleHR9PjE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17NH0gc209ezZ9IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5ib3JkZXJlZH0gJHtjbGFzc2VzLmdyaWRQYWRkaW5nfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29sdW1uRmxleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnPlRlYW1zPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLlBvc3RUZXh0fSAke2NsYXNzZXMuc3VidGV4dH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIFRlY2gg4oCiIERlc2lnbiDigKIgQ29udGVudCDigKIgUGhvdG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnPkxpbmtzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLlBvc3RUZXh0fSAke2NsYXNzZXMuc3VidGV4dH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIGh0dHBzOi8vbGlua2VkaW4uY29tL2VuL2pvbm5hLTQ1NzhcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDYXJkO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgd3JhcHBlcjoge1xyXG4gICAgbWFyZ2luVG9wOiAnMS41cmVtJyxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1swXSxcclxuICB9LFxyXG4gIGdyaWRQYWRkaW5nOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcGFkZGluZ0xlZnQ6ICcxLjVyZW0nLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAnMS41cmVtJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6ICcycmVtJyxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6ICcxcmVtJyxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiAnMXJlbScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYm9yZGVyZWQ6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkJyxcclxuICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5uZXV0cmFsNTAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgcGFkZGluZ1RvcDogJzFyZW0nLFxyXG4gICAgICBib3JkZXJMZWZ0OiAndW5zZXQnLFxyXG4gICAgICBib3JkZXJUb3A6ICcxcHggc29saWQnLFxyXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubmV1dHJhbDUwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHVzZXJXcmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICd1bnNldCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdXNlckltYWdlOiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBoZWlnaHQ6ICc1MCUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbHVtbkZsZXg6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgZmxleDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBzdWJ0ZXh0OiB7XHJcbiAgICBsaW5lSGVpZ2h0OiAnMS41cmVtJyxcclxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICAnJiBzcGFuJzoge1xyXG4gICAgICBtYXJnaW5MZWZ0OiAnMC4yNXJlbScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgUG9zdFRleHQ6IHtcclxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXIsXHJcbiAgfSxcclxufSkpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gTGlicmFyaWVzXHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IEFydGljbGVDYXJkIGZyb20gJy4uL3dpZGdldHMvQXJ0aWNsZUNhcmQnO1xyXG5pbXBvcnQgV2l0c2RvbSBmcm9tICcuLi9leHByZXNzaW9ucy9XaXRzZG9tJztcclxuaW1wb3J0IFBob3RvU3RvcnkgZnJvbSAnLi4vZXhwcmVzc2lvbnMvUGhvdG9TdG9yeSc7XHJcblxyXG5jb25zdCBXb3JrcyA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25XcmFwcGVyfT5cclxuICAgICAgICAgIHsvKiBDb250ZW50ICovfVxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSdwcmltYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbkhlYWR9PlxyXG4gICAgICAgICAgICBDb250ZW50XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XHJcbiAgICAgICAgICAgIHtbMCwgMSwgMiwgMywgNF0ubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEdyaWQga2V5PXtrZXl9IGl0ZW0gc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICA8QXJ0aWNsZUNhcmQgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uV3JhcHBlcn0+XHJcbiAgICAgICAgICB7LyogRGVzaWduICovfVxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSdwcmltYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbkhlYWR9PlxyXG4gICAgICAgICAgICBEZXNpZ25cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cclxuICAgICAgICAgICAge1swLCAxXS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBrZXk9e2tleX0gaXRlbSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgIDxXaXRzZG9tIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbldyYXBwZXJ9PlxyXG4gICAgICAgICAgey8qIFBob3RvZ3JhcGh5ICovfVxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSdwcmltYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbkhlYWR9PlxyXG4gICAgICAgICAgICBQaG90b2dyYXBoeVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgICAgICB7WzBdLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGtleT17a2V5fSBpdGVtIHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgPFBob3RvU3RvcnkgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBXb3JrcztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHdyYXBwZXI6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogJzRyZW0nLFxyXG4gIH0sXHJcbiAgc2VjdGlvbldyYXBwZXI6IHtcclxuICAgIG1hcmdpblRvcDogJzJyZW0nLFxyXG4gIH0sXHJcbiAgc2VjdGlvbkhlYWQ6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogJzFyZW0nLFxyXG4gIH0sXHJcbn0pKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGxpYnJhcmllc1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbWFyZ2luYWxzL0hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9tYXJnaW5hbHMvRm9vdGVyJztcclxuaW1wb3J0IFRvcEJhciBmcm9tICcuLi9jb21wb25lbnRzL21hcmdpbmFscy9Ub3BCYXInO1xyXG5pbXBvcnQgQmFja0xpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9wb3J0Zm9saW8vQmFja2xpbmsnO1xyXG5pbXBvcnQgVXNlckNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9wb3J0Zm9saW8vVXNlckNhcmQnO1xyXG5pbXBvcnQgV29ya3MgZnJvbSAnLi4vY29tcG9uZW50cy9wb3J0Zm9saW8vV29ya3MnO1xyXG5cclxuLy9wbGFjZWhvbGRlcnNcclxuXHJcbmZ1bmN0aW9uIFBvcnRmb2xpbygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFRvcEJhciAvPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxCYWNrTGluayAvPlxyXG4gICAgICA8VXNlckNhcmQgLz5cclxuICAgICAgPFdvcmtzIC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==