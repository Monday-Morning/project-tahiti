(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/Root.js":
/*!*********************!*\
  !*** ./src/Root.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/reducers */ "./src/store/reducers/index.js");





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === void 0 ? {} : _ref$initialState,
      children = _ref.children;
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_1__["compose"];
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_store_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], initialState, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"])));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: store
  }, children);
});

/***/ }),

/***/ "./src/assets/images/MMLogo.png":
/*!**************************************!*\
  !*** ./src/assets/images/MMLogo.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9bf46370a71f0ef0e739a329f7668265.png");

/***/ }),

/***/ "./src/components/shared/ActivityIndicator.js":
/*!****************************************************!*\
  !*** ./src/components/shared/ActivityIndicator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _assets_images_MMLogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/MMLogo.png */ "./src/assets/images/MMLogo.png");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // libraries




function ActivityIndicator() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      animate = _useState2[0],
      setAnimate = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setAnimate(true);
  });
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_MMLogo_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "MM Logo",
    className: animate ? classes.logo : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h1",
    className: classes.text
  }, "Monday Morning")));
}

/* harmony default export */ __webpack_exports__["default"] = (ActivityIndicator);
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    wrapper: {
      display: 'grid',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyItems: 'center'
    },
    logo: {
      width: '300px',
      height: '300px',
      transform: 'rotate(360deg)',
      transition: theme.transitions.create('transform', {
        duration: '3s'
      })
    },
    text: {
      marginTop: '1rem',
      textAlign: 'center',
      fontSize: '2rem',
      lineHeight: '3rem'
    }
  };
});

/***/ }),

/***/ "./src/config/themes/light.js":
/*!************************************!*\
  !*** ./src/config/themes/light.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    value: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    type: 'light',
    common: {
      black: '#000000',
      white: '#FFFFFF'
    },
    primary: {
      main: '#006DCC',
      blue90: '#00101F',
      blue80: '#002647',
      blue70: '#003C70',
      blue60: '#005299',
      blue50: '#006DCC',
      blue40: '#4091D9',
      blue30: '#73AFE3',
      blue20: '#A6CCED',
      blue10: '#D9E9F7'
    },
    secondary: {
      main: '#222222',
      neutral90: '#424242',
      neutral80: '#6E6E6E',
      neutral70: '#999999',
      neutral60: '#C4C4C4',
      neutral50: '#DADADA',
      neutral40: '#EDEDED',
      neutral30: '#F1F1F1',
      neutral20: '#F6F6F6'
    },
    accent: {
      red: '#D7242E',
      orange: '#EC642A',
      yellow: '#F8AA11',
      green: '#1F9943',
      purple: '#771CD1',
      brown: '#9B4D20',
      pink: '#BD0FA1',
      indigo: '#0F269E',
      squiggles: '#F6D982',
      squigglesButton: '#E15B62'
    },
    grey: {
      100: '#F2F2F2',
      200: '#D8D8D8',
      300: '#9F9F9F',
      400: '#737273',
      500: '#787678',
      600: '#5E5D5E',
      700: '#464546',
      800: '#2E2D2E',
      900: '#141414'
    },
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.4)',
      hint: 'rgba(0, 0, 0, 0.4)'
    },
    divider: 'rgba(0, 0, 0, 0.2)',
    background: {
      "default": '#FFF',
      paper: '#FAFAFA'
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.4)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      seletedOpacity: 0.08,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledOpacity: 0.12,
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      activatedOpacity: 0.12
    }
  },
  shadows: ['0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)', '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 8px 16px rgba(0, 0, 0, 0.12)'],
  typography: {
    // Global Font Styles
    fontFamily: ['IBM Plex Sans', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    // Individual Font Styles for each element
    h1: {
      fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: '3rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
        lineHeight: '3rem'
      }
    },
    h2: {
      fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
        lineHeight: '1.75rem'
      }
    },
    h3: {
      fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '1.375rem',
      lineHeight: '1.75rem',
      '@media (max-width:600px)': {
        fontSize: '1.125rem',
        lineHeight: '1.5rem'
      }
    },
    h4: {
      fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: '1.375rem',
      '@media (max-width:600px)': {
        fontSize: '1.125rem',
        lineHeight: '1.5rem'
      }
    },
    // Regular Body
    body1: {
      fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      '@media (max-width:600px)': {
        fontSize: '1rem',
        lineHeight: '1.5rem'
      }
    },
    // MetaData
    body2: {
      fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: '1rem'
    }
  },
  shape: {
    borderRadius: 8
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  } // spacing: [0, 4, 8, 16, 32, 64],

});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _screens_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/App */ "./src/screens/App.js");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Root */ "./src/Root.js");




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Root__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.querySelector('#root'));

/***/ }),

/***/ "./src/screens lazy recursive ^.*$":
/*!************************************************!*\
  !*** ./src/screens lazy ^.*$ namespace object ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./App": [
		"./src/screens/App.js"
	],
	"./App.js": [
		"./src/screens/App.js"
	],
	"./Article": [
		"./src/screens/Article.js",
		1,
		0,
		2
	],
	"./Article.js": [
		"./src/screens/Article.js",
		1,
		0,
		2
	],
	"./Home": [
		"./src/screens/Home.js",
		0,
		3
	],
	"./Home.js": [
		"./src/screens/Home.js",
		0,
		3
	],
	"./Onboarding": [
		"./src/screens/Onboarding.js",
		4
	],
	"./Onboarding.js": [
		"./src/screens/Onboarding.js",
		4
	],
	"./Portfolio": [
		"./src/screens/Portfolio.js",
		0,
		5
	],
	"./Portfolio.js": [
		"./src/screens/Portfolio.js",
		0,
		5
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/screens lazy recursive ^.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/screens/App.js":
/*!****************************!*\
  !*** ./src/screens/App.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_shared_ActivityIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shared/ActivityIndicator */ "./src/components/shared/ActivityIndicator.js");
/* harmony import */ var _utils_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/history */ "./src/utils/history.js");
/* harmony import */ var _config_themes_light__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/themes/light */ "./src/config/themes/light.js");
 // Libraries




 // Components

 // Helpers

 // Theme



var AsyncRoute = function AsyncRoute(route) {
  return react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({
    loader: function loader() {
      return __webpack_require__("./src/screens lazy recursive ^.*$")("".concat(route));
    },
    loading: _components_shared_ActivityIndicator__WEBPACK_IMPORTED_MODULE_5__["default"]
  });
};

var AsyncHome = AsyncRoute('./Home');
var AsyncOnboarding = AsyncRoute('./Onboarding');
var AsyncArticle = AsyncRoute('./Article');
var AsyncPortfolio = AsyncRoute('./Portfolio');

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _config_themes_light__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CssBaseline"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Router"], {
    history: _utils_history__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true,
    component: AsyncHome
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/onboarding",
    exact: true,
    component: AsyncOnboarding
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/article",
    component: AsyncArticle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/portfolio",
    component: AsyncPortfolio
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {});

/***/ }),

/***/ "./src/utils/history.js":
/*!******************************!*\
  !*** ./src/utils/history.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"])());

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi babel-polyfill ./src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"./node_modules/babel-polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

},[[0,"manifest","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9NTUxvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9BY3Rpdml0eUluZGljYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3RoZW1lcy9saWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMgbGF6eSBeLiokIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGlzdG9yeS5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJjaGlsZHJlbiIsImNvbXBvc2VFbmhhbmNlcnMiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJjb21wb3NlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXJzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJBY3Rpdml0eUluZGljYXRvciIsInVzZVN0YXRlIiwiYW5pbWF0ZSIsInNldEFuaW1hdGUiLCJ1c2VFZmZlY3QiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwid3JhcHBlciIsImxvZ28iLCJ0ZXh0IiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlJdGVtcyIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImR1cmF0aW9uIiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiY3JlYXRlTXVpVGhlbWUiLCJicmVha3BvaW50cyIsImtleXMiLCJ2YWx1ZSIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJwYWxldHRlIiwidHlwZSIsImNvbW1vbiIsImJsYWNrIiwid2hpdGUiLCJwcmltYXJ5IiwibWFpbiIsImJsdWU5MCIsImJsdWU4MCIsImJsdWU3MCIsImJsdWU2MCIsImJsdWU1MCIsImJsdWU0MCIsImJsdWUzMCIsImJsdWUyMCIsImJsdWUxMCIsInNlY29uZGFyeSIsIm5ldXRyYWw5MCIsIm5ldXRyYWw4MCIsIm5ldXRyYWw3MCIsIm5ldXRyYWw2MCIsIm5ldXRyYWw1MCIsIm5ldXRyYWw0MCIsIm5ldXRyYWwzMCIsIm5ldXRyYWwyMCIsImFjY2VudCIsInJlZCIsIm9yYW5nZSIsInllbGxvdyIsImdyZWVuIiwicHVycGxlIiwiYnJvd24iLCJwaW5rIiwiaW5kaWdvIiwic3F1aWdnbGVzIiwic3F1aWdnbGVzQnV0dG9uIiwiZ3JleSIsImRpc2FibGVkIiwiaGludCIsImRpdmlkZXIiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJhY3Rpb24iLCJhY3RpdmUiLCJob3ZlciIsImhvdmVyT3BhY2l0eSIsInNlbGVjdGVkIiwic2VsZXRlZE9wYWNpdHkiLCJmb2N1cyIsImZvY3VzT3BhY2l0eSIsImRpc2FibGVkT3BhY2l0eSIsImRpc2FibGVkQmFja2dyb3VuZCIsImFjdGl2YXRlZE9wYWNpdHkiLCJzaGFkb3dzIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIiwiZm9udFdlaWdodExpZ2h0IiwiZm9udFdlaWdodFJlZ3VsYXIiLCJmb250V2VpZ2h0TWVkaXVtIiwiZm9udFdlaWdodEJvbGQiLCJoMSIsImZvbnRXZWlnaHQiLCJoMiIsImgzIiwiaDQiLCJib2R5MSIsImJvZHkyIiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJ6SW5kZXgiLCJtb2JpbGVTdGVwcGVyIiwic3BlZWREaWFsIiwiYXBwQmFyIiwiZHJhd2VyIiwibW9kYWwiLCJzbmFja2JhciIsInRvb2x0aXAiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFzeW5jUm91dGUiLCJyb3V0ZSIsIkxvYWRhYmxlIiwibG9hZGVyIiwibG9hZGluZyIsIkFzeW5jSG9tZSIsIkFzeW5jT25ib2FyZGluZyIsIkFzeW5jQXJ0aWNsZSIsIkFzeW5jUG9ydGZvbGlvIiwiQXBwIiwibGlnaHRUaGVtZSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsK0VBQXFDO0FBQUEsK0JBQWxDQSxZQUFrQztBQUFBLE1BQWxDQSxZQUFrQyxrQ0FBbkIsRUFBbUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbEQsTUFBTUMsZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBQ0Msb0NBQVAsSUFBK0NDLDZDQUF4RTtBQUVBLE1BQU1DLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsdURBQUQsRUFBV1IsWUFBWCxFQUF5QkUsZ0JBQWdCLENBQUNPLDZEQUFlLENBQUNDLG1EQUFELENBQWhCLENBQXpDLENBQXpCO0FBRUEsc0JBQU8sMkRBQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVKO0FBQWpCLEtBQXlCTCxRQUF6QixDQUFQO0FBQ0QsQ0FORCxFOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NFL0U7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTVSxpQkFBVCxHQUE2QjtBQUFBLGtCQUNHQyxzREFBUSxDQUFDLEtBQUQsQ0FEWDtBQUFBO0FBQUEsTUFDcEJDLE9BRG9CO0FBQUEsTUFDWEMsVUFEVzs7QUFHM0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsR0FGUSxDQUFUO0FBR0EsTUFBTUUsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVELE9BQU8sQ0FBQ0U7QUFBeEIsa0JBQ0UscUZB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QyxzREFBRDtBQUFPLFFBQUksRUFBQyxZQUFaO0FBQXlCLGFBQVMsRUFBRUM7QUFBcEMsSUFKRixDQURGLENBRkYsQ0FERjtBQWNEOztBQUVjQyxrRUFBZixFOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBZSwyRUFBTSxDQUFFLENBQXZCLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUVlRSxtSUFBb0IsRUFBbkMsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5cclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vc3RvcmUvcmVkdWNlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgaW5pdGlhbFN0YXRlID0ge30sIGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xyXG5cclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUsIGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSkpO1xyXG5cclxuICByZXR1cm4gPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+e2NoaWxkcmVufTwvUHJvdmlkZXI+O1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWJmNDYzNzBhNzFmMGVmMGU3MzlhMzI5Zjc2NjgyNjUucG5nXCI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBsaWJyYXJpZXNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9NTUxvZ28ucG5nJztcclxuXHJcbmZ1bmN0aW9uIEFjdGl2aXR5SW5kaWNhdG9yKCkge1xyXG4gIGNvbnN0IFthbmltYXRlLCBzZXRBbmltYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEFuaW1hdGUodHJ1ZSk7XHJcbiAgfSk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PSdNTSBMb2dvJyBjbGFzc05hbWU9e2FuaW1hdGUgPyBjbGFzc2VzLmxvZ28gOiAnJ30gLz5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMScgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgTW9uZGF5IE1vcm5pbmdcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHlJbmRpY2F0b3I7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICB3cmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIHdpZHRoOiAnMzAwcHgnLFxyXG4gICAgaGVpZ2h0OiAnMzAwcHgnLFxyXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDM2MGRlZyknLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XHJcbiAgICAgIGR1cmF0aW9uOiAnM3MnLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBtYXJnaW5Ub3A6ICcxcmVtJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzJyZW0nLFxyXG4gICAgbGluZUhlaWdodDogJzNyZW0nLFxyXG4gIH0sXHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIGtleXM6IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSxcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIHhzOiAwLFxyXG4gICAgICBzbTogNjAwLFxyXG4gICAgICBtZDogOTAwLFxyXG4gICAgICBsZzogMTI4MCxcclxuICAgICAgeGw6IDE5MjAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFsZXR0ZToge1xyXG4gICAgdHlwZTogJ2xpZ2h0JyxcclxuICAgIGNvbW1vbjoge1xyXG4gICAgICBibGFjazogJyMwMDAwMDAnLFxyXG4gICAgICB3aGl0ZTogJyNGRkZGRkYnLFxyXG4gICAgfSxcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogJyMwMDZEQ0MnLFxyXG4gICAgICBibHVlOTA6ICcjMDAxMDFGJyxcclxuICAgICAgYmx1ZTgwOiAnIzAwMjY0NycsXHJcbiAgICAgIGJsdWU3MDogJyMwMDNDNzAnLFxyXG4gICAgICBibHVlNjA6ICcjMDA1Mjk5JyxcclxuICAgICAgYmx1ZTUwOiAnIzAwNkRDQycsXHJcbiAgICAgIGJsdWU0MDogJyM0MDkxRDknLFxyXG4gICAgICBibHVlMzA6ICcjNzNBRkUzJyxcclxuICAgICAgYmx1ZTIwOiAnI0E2Q0NFRCcsXHJcbiAgICAgIGJsdWUxMDogJyNEOUU5RjcnLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOiAnIzIyMjIyMicsXHJcbiAgICAgIG5ldXRyYWw5MDogJyM0MjQyNDInLFxyXG4gICAgICBuZXV0cmFsODA6ICcjNkU2RTZFJyxcclxuICAgICAgbmV1dHJhbDcwOiAnIzk5OTk5OScsXHJcbiAgICAgIG5ldXRyYWw2MDogJyNDNEM0QzQnLFxyXG4gICAgICBuZXV0cmFsNTA6ICcjREFEQURBJyxcclxuICAgICAgbmV1dHJhbDQwOiAnI0VERURFRCcsXHJcbiAgICAgIG5ldXRyYWwzMDogJyNGMUYxRjEnLFxyXG4gICAgICBuZXV0cmFsMjA6ICcjRjZGNkY2JyxcclxuICAgIH0sXHJcbiAgICBhY2NlbnQ6IHtcclxuICAgICAgcmVkOiAnI0Q3MjQyRScsXHJcbiAgICAgIG9yYW5nZTogJyNFQzY0MkEnLFxyXG4gICAgICB5ZWxsb3c6ICcjRjhBQTExJyxcclxuICAgICAgZ3JlZW46ICcjMUY5OTQzJyxcclxuICAgICAgcHVycGxlOiAnIzc3MUNEMScsXHJcbiAgICAgIGJyb3duOiAnIzlCNEQyMCcsXHJcbiAgICAgIHBpbms6ICcjQkQwRkExJyxcclxuICAgICAgaW5kaWdvOiAnIzBGMjY5RScsXHJcbiAgICAgIHNxdWlnZ2xlczogJyNGNkQ5ODInLFxyXG4gICAgICBzcXVpZ2dsZXNCdXR0b246ICcjRTE1QjYyJyxcclxuICAgIH0sXHJcbiAgICBncmV5OiB7XHJcbiAgICAgIDEwMDogJyNGMkYyRjInLFxyXG4gICAgICAyMDA6ICcjRDhEOEQ4JyxcclxuICAgICAgMzAwOiAnIzlGOUY5RicsXHJcbiAgICAgIDQwMDogJyM3MzcyNzMnLFxyXG4gICAgICA1MDA6ICcjNzg3Njc4JyxcclxuICAgICAgNjAwOiAnIzVFNUQ1RScsXHJcbiAgICAgIDcwMDogJyM0NjQ1NDYnLFxyXG4gICAgICA4MDA6ICcjMkUyRDJFJyxcclxuICAgICAgOTAwOiAnIzE0MTQxNCcsXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAxKScsXHJcbiAgICAgIHNlY29uZGFyeTogJ3JnYmEoMCwgMCwgMCwgMC42KScsXHJcbiAgICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjQpJyxcclxuICAgICAgaGludDogJ3JnYmEoMCwgMCwgMCwgMC40KScsXHJcbiAgICB9LFxyXG4gICAgZGl2aWRlcjogJ3JnYmEoMCwgMCwgMCwgMC4yKScsXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgIGRlZmF1bHQ6ICcjRkZGJyxcclxuICAgICAgcGFwZXI6ICcjRkFGQUZBJyxcclxuICAgIH0sXHJcbiAgICBhY3Rpb246IHtcclxuICAgICAgYWN0aXZlOiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXHJcbiAgICAgIGhvdmVyOiAncmdiYSgwLCAwLCAwLCAwLjQpJyxcclxuICAgICAgaG92ZXJPcGFjaXR5OiAwLjA0LFxyXG4gICAgICBzZWxlY3RlZDogJ3JnYmEoMCwgMCwgMCwgMC4wOCknLFxyXG4gICAgICBzZWxldGVkT3BhY2l0eTogMC4wOCxcclxuICAgICAgZm9jdXM6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcclxuICAgICAgZm9jdXNPcGFjaXR5OiAwLjEyLFxyXG4gICAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4yNiknLFxyXG4gICAgICBkaXNhYmxlZE9wYWNpdHk6IDAuMTIsXHJcbiAgICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxyXG4gICAgICBhY3RpdmF0ZWRPcGFjaXR5OiAwLjEyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNoYWRvd3M6IFtcclxuICAgICcwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQpLCAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpJyxcclxuICAgICcwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQpLCAwcHggOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEyKScsXHJcbiAgXSxcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICAvLyBHbG9iYWwgRm9udCBTdHlsZXNcclxuICAgIGZvbnRGYW1pbHk6IFtcclxuICAgICAgJ0lCTSBQbGV4IFNhbnMnLFxyXG4gICAgICAnUm9ib3RvJyxcclxuICAgICAgJ1wiSGVsdmV0aWNhIE5ldWVcIicsXHJcbiAgICAgICdBcmlhbCcsXHJcbiAgICAgICdzYW5zLXNlcmlmJyxcclxuICAgICAgJ1wiQXBwbGUgQ29sb3IgRW1vamlcIicsXHJcbiAgICAgICdcIlNlZ29lIFVJIEVtb2ppXCInLFxyXG4gICAgICAnXCJTZWdvZSBVSSBTeW1ib2xcIicsXHJcbiAgICBdLmpvaW4oJywnKSxcclxuICAgIGZvbnRTaXplOiAxNixcclxuICAgIGZvbnRXZWlnaHRMaWdodDogMzAwLFxyXG4gICAgZm9udFdlaWdodFJlZ3VsYXI6IDQwMCxcclxuICAgIGZvbnRXZWlnaHRNZWRpdW06IDUwMCxcclxuICAgIGZvbnRXZWlnaHRCb2xkOiA3MDAsXHJcbiAgICAvLyBJbmRpdmlkdWFsIEZvbnQgU3R5bGVzIGZvciBlYWNoIGVsZW1lbnRcclxuICAgIGgxOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdcIklCTSBQbGV4IFNhbnNcIiAsXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJyxcclxuICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICBmb250U2l6ZTogJzJyZW0nLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICdAbWVkaWEgKG1heC13aWR0aDo2MDBweCknOiB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxLjVyZW0nLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICczcmVtJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICBmb250RmFtaWx5OiAnXCJJQk0gUGxleCBTYW5zXCIgLFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgZm9udFNpemU6ICcxLjVyZW0nLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMnJlbScsXHJcbiAgICAgICdAbWVkaWEgKG1heC13aWR0aDo2MDBweCknOiB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxLjI1cmVtJyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnMS43NXJlbScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udEZhbWlseTogJ1wiSUJNIFBsZXggU2Fuc1wiICxcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnLFxyXG4gICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgIGZvbnRTaXplOiAnMS4zNzVyZW0nLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMS43NXJlbScsXHJcbiAgICAgICdAbWVkaWEgKG1heC13aWR0aDo2MDBweCknOiB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxLjEyNXJlbScsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzEuNXJlbScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaDQ6IHtcclxuICAgICAgZm9udEZhbWlseTogJ1wiSUJNIFBsZXggU2Fuc1wiICxcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnLFxyXG4gICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgIGZvbnRTaXplOiAnMS4xMjVyZW0nLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4zNzVyZW0nLFxyXG4gICAgICAnQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpJzoge1xyXG4gICAgICAgIGZvbnRTaXplOiAnMS4xMjVyZW0nLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxLjVyZW0nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8vIFJlZ3VsYXIgQm9keVxyXG4gICAgYm9keTE6IHtcclxuICAgICAgZm9udEZhbWlseTogJ1wiSUJNIFBsZXggU2Fuc1wiICxcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnLFxyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGZvbnRTaXplOiAnMS4yNXJlbScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjc1cmVtJyxcclxuICAgICAgJ0BtZWRpYSAobWF4LXdpZHRoOjYwMHB4KSc6IHtcclxuICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxLjVyZW0nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8vIE1ldGFEYXRhXHJcbiAgICBib2R5Mjoge1xyXG4gICAgICBmb250RmFtaWx5OiAnXCJJQk0gUGxleCBTYW5zXCIgLFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgZm9udFNpemU6ICcwLjc1cmVtJyxcclxuICAgICAgbGluZUhlaWdodDogJzFyZW0nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNoYXBlOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgfSxcclxuICB6SW5kZXg6IHtcclxuICAgIG1vYmlsZVN0ZXBwZXI6IDEwMDAsXHJcbiAgICBzcGVlZERpYWw6IDEwNTAsXHJcbiAgICBhcHBCYXI6IDExMDAsXHJcbiAgICBkcmF3ZXI6IDEyMDAsXHJcbiAgICBtb2RhbDogMTMwMCxcclxuICAgIHNuYWNrYmFyOiAxNDAwLFxyXG4gICAgdG9vbHRpcDogMTUwMCxcclxuICB9LFxyXG4gIC8vIHNwYWNpbmc6IFswLCA0LCA4LCAxNiwgMzIsIDY0XSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5pbXBvcnQgQXBwIGZyb20gJy4vc2NyZWVucy9BcHAnO1xyXG5pbXBvcnQgUm9vdCBmcm9tICcuL1Jvb3QnO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxSb290PlxyXG4gICAgPEFwcCAvPlxyXG4gIDwvUm9vdD4sXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKSxcclxuKTtcclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL0FwcFwiOiBbXG5cdFx0XCIuL3NyYy9zY3JlZW5zL0FwcC5qc1wiXG5cdF0sXG5cdFwiLi9BcHAuanNcIjogW1xuXHRcdFwiLi9zcmMvc2NyZWVucy9BcHAuanNcIlxuXHRdLFxuXHRcIi4vQXJ0aWNsZVwiOiBbXG5cdFx0XCIuL3NyYy9zY3JlZW5zL0FydGljbGUuanNcIixcblx0XHQxLFxuXHRcdDAsXG5cdFx0MlxuXHRdLFxuXHRcIi4vQXJ0aWNsZS5qc1wiOiBbXG5cdFx0XCIuL3NyYy9zY3JlZW5zL0FydGljbGUuanNcIixcblx0XHQxLFxuXHRcdDAsXG5cdFx0MlxuXHRdLFxuXHRcIi4vSG9tZVwiOiBbXG5cdFx0XCIuL3NyYy9zY3JlZW5zL0hvbWUuanNcIixcblx0XHQwLFxuXHRcdDNcblx0XSxcblx0XCIuL0hvbWUuanNcIjogW1xuXHRcdFwiLi9zcmMvc2NyZWVucy9Ib21lLmpzXCIsXG5cdFx0MCxcblx0XHQzXG5cdF0sXG5cdFwiLi9PbmJvYXJkaW5nXCI6IFtcblx0XHRcIi4vc3JjL3NjcmVlbnMvT25ib2FyZGluZy5qc1wiLFxuXHRcdDRcblx0XSxcblx0XCIuL09uYm9hcmRpbmcuanNcIjogW1xuXHRcdFwiLi9zcmMvc2NyZWVucy9PbmJvYXJkaW5nLmpzXCIsXG5cdFx0NFxuXHRdLFxuXHRcIi4vUG9ydGZvbGlvXCI6IFtcblx0XHRcIi4vc3JjL3NjcmVlbnMvUG9ydGZvbGlvLmpzXCIsXG5cdFx0MCxcblx0XHQ1XG5cdF0sXG5cdFwiLi9Qb3J0Zm9saW8uanNcIjogW1xuXHRcdFwiLi9zcmMvc2NyZWVucy9Qb3J0Zm9saW8uanNcIixcblx0XHQwLFxuXHRcdDVcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vc3JjL3NjcmVlbnMgbGF6eSByZWN1cnNpdmUgXi4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBMaWJyYXJpZXNcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgU3dpdGNoLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQ3NzQmFzZWxpbmUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBBY3Rpdml0eUluZGljYXRvciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9BY3Rpdml0eUluZGljYXRvcic7XHJcblxyXG4vLyBIZWxwZXJzXHJcbmltcG9ydCBjcmVhdGVCcm93c2VySGlzdG9yeSBmcm9tICcuLi91dGlscy9oaXN0b3J5JztcclxuXHJcbi8vIFRoZW1lXHJcbmltcG9ydCBsaWdodFRoZW1lIGZyb20gJy4uL2NvbmZpZy90aGVtZXMvbGlnaHQnO1xyXG5cclxuY29uc3QgQXN5bmNSb3V0ZSA9IChyb3V0ZSkgPT5cclxuICBMb2FkYWJsZSh7XHJcbiAgICBsb2FkZXI6ICgpID0+IGltcG9ydChgJHtyb3V0ZX1gKSxcclxuICAgIGxvYWRpbmc6IEFjdGl2aXR5SW5kaWNhdG9yLFxyXG4gIH0pO1xyXG5cclxuY29uc3QgQXN5bmNIb21lID0gQXN5bmNSb3V0ZSgnLi9Ib21lJyk7XHJcbmNvbnN0IEFzeW5jT25ib2FyZGluZyA9IEFzeW5jUm91dGUoJy4vT25ib2FyZGluZycpO1xyXG5jb25zdCBBc3luY0FydGljbGUgPSBBc3luY1JvdXRlKCcuL0FydGljbGUnKTtcclxuY29uc3QgQXN5bmNQb3J0Zm9saW8gPSBBc3luY1JvdXRlKCcuL1BvcnRmb2xpbycpO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17bGlnaHRUaGVtZX0+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8Um91dGVyIGhpc3Rvcnk9e2NyZWF0ZUJyb3dzZXJIaXN0b3J5fT5cclxuICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy8nIGV4YWN0IGNvbXBvbmVudD17QXN5bmNIb21lfSAvPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9vbmJvYXJkaW5nJyBleGFjdCBjb21wb25lbnQ9e0FzeW5jT25ib2FyZGluZ30gLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYXJ0aWNsZScgY29tcG9uZW50PXtBc3luY0FydGljbGV9IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD0nL3BvcnRmb2xpbycgY29tcG9uZW50PXtBc3luY1BvcnRmb2xpb30gLz5cclxuICAgICAgICAgIHsvKiA8UmVkaXJlY3QgdG89Jy8nIC8+ICovfVxyXG4gICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICA8L1JvdXRlcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHt9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==