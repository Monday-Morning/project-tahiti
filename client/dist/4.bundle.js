(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "./src/assets/images/onboarding/newsletter.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/onboarding/newsletter.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f2d7ee5cae642e87372ba3d1595c8acb.png");

/***/ }),

/***/ "./src/assets/images/onboarding/verifyEmail.png":
/*!******************************************************!*\
  !*** ./src/assets/images/onboarding/verifyEmail.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "08cb804cff1ef07631342cf55be3e887.png");

/***/ }),

/***/ "./src/assets/placeholder/onboarding.js":
/*!**********************************************!*\
  !*** ./src/assets/placeholder/onboarding.js ***!
  \**********************************************/
/*! exports provided: ONBOARDING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONBOARDING", function() { return ONBOARDING; });
var ONBOARDING = Object.freeze({
  WELCOME: {
    CONTENT: 'Welcome to Monday Morning, \n the student media body of NIT Rourkela, \n and India’s 2nd largest student media body !',
    TERMS: 'By creating an account, I accept \n MM’s Terms of Use'
  },
  VERIFY_EMAIL: {
    PRIMARY: {
      TITLE: 'Verify Account',
      CONTENT: 'Verify your account with institute \n email id just once and get access to \n limited access articles !'
    },
    SECONDARY: {
      TITLE: 'Email',
      CONTENT: 'You need to verify your email to access certain \n restricted articles. If you have not received the \n verification email please check your Spam \n folder. You can also click on the resend button \n below to have another email sent to you'
    },
    EMAIL_PLACEHOLDER: 'instituteID@nitrkl.ac.in',
    BUTTON: {
      PRIMARY: 'Get Verification Link',
      SECONDARY: 'Check again and continue'
    },
    NOTE: 'Note: This only works if you’re a current student/employee of \n NIT Rourkela with a valid institute email id.'
  },
  INTERESTED_TOPICS: {
    PRIMARY: {
      TITLE: 'Interested Topics',
      CONTENT: "Select the topics you're interested in, and get smarter article suggestions on the MM website!"
    },
    TOPICS: ['Witsdom', 'Campus Buzz', 'Student Activities', 'Alumni Affairs', 'Halls', 'Interviews', 'SAC Speaks', 'Dean Speaks', 'Videos', 'Guest Interviews', "Director's Desk", "Chief Warden's Column", 'Comics', 'Alumnus Speaks', 'Editorial', 'Placements', 'Internships', 'Higher Education', 'Photostories']
  },
  NEWSLETTER: {
    PRIMARY: {
      TITLE: 'Newsletter Signup',
      CONTENT: 'Sign up for the MM newsletter and get news and \n articles delivered straight to your mailbox!'
    },
    SECONDARY: {
      TITLE: 'Email',
      CONTENT: 'You’ve successfully signed up for the newsletter. \n Be the first to know the happenings at NITR and \n never miss out on an issue release !'
    },
    EMAIL_PLACEHOLDER: 'instituteID@nitrkl.ac.in',
    BUTTON: {
      PRIMARY: 'Signup for newsletter',
      SECONDARY: 'Get Started'
    },
    NOTE: 'Note: Newsletters are sent once a week or once in a fortnight \n during the working session of the institute'
  }
});

/***/ }),

/***/ "./src/components/onboarding/stages/NewsletterSignup.js":
/*!**************************************************************!*\
  !*** ./src/components/onboarding/stages/NewsletterSignup.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _utils_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/history */ "./src/utils/history.js");
/* harmony import */ var _shared_button_Regular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/button/Regular */ "./src/components/shared/button/Regular.js");
/* harmony import */ var _shared_input_Regular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/input/Regular */ "./src/components/shared/input/Regular.js");
/* harmony import */ var _assets_images_onboarding_newsletter_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/onboarding/newsletter.png */ "./src/assets/images/onboarding/newsletter.png");
/* harmony import */ var _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/placeholder/onboarding */ "./src/assets/placeholder/onboarding.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // Library


 // Helper

 // Components


 // Assets




function VerifyEmail(props) {
  var classes = useStyles(); // Local States

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSigned = _useState2[0],
      setIsSigned = _useState2[1]; // Props


  var email = props.email,
      setEmail = props.setEmail,
      signupNewsletter = props.signupNewsletter;

  var onSignup = function onSignup() {
    setIsSigned(true);
    signupNewsletter();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.container,
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.content,
    item: true,
    sm: 12,
    md: 12,
    lg: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.verifyTitle,
    variant: "h1"
  }, _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].NEWSLETTER.PRIMARY.TITLE), isSigned ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.iconContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-check-circle fa-6x ".concat(classes.icon)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.verifyContent,
    variant: "body1"
  }, _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].NEWSLETTER.PRIMARY.CONTENT)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.verifyContent,
    variant: "body1"
  }, _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].NEWSLETTER.SECONDARY.CONTENT), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.emailTitle,
    variant: "h3"
  }, _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].NEWSLETTER.SECONDARY.TITLE), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_input_Regular__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.emailInput,
    value: email,
    onChange: setEmail,
    placeholder: _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].NEWSLETTER.EMAIL_PLACEHOLDER
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_button_Regular__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: isSigned ? _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].NEWSLETTER.BUTTON.SECONDARY : _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].NEWSLETTER.BUTTON.PRIMARY,
    onClick: isSigned ? function () {
      return _utils_history__WEBPACK_IMPORTED_MODULE_3__["default"].push('/');
    } : onSignup,
    containerStyles: classes.button
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.note,
    variant: "body2"
  }, _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].NEWSLETTER.NOTE)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.imgContainer,
    item: true,
    sm: 12,
    md: 12,
    lg: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.img,
    src: _assets_images_onboarding_newsletter_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "Verify Email"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (VerifyEmail);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.background["default"],
      padding: 10,
      paddingLeft: 40
    },
    content: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    verifyTitle: {
      color: theme.palette.common.black,
      marginTop: 20
    },
    verifyContent: {
      color: theme.palette.common.black,
      marginBottom: 30,
      fontWeight: '400',
      fontSize: '18px'
    },
    emailInput: {
      width: '85%'
    },
    button: {
      width: '85%'
    },
    imgContainer: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    img: {
      width: '150%',
      height: 'auto',
      marginRight: 10
    },
    note: {
      marginTop: 40,
      color: theme.palette.common.black
    },
    iconContainer: {
      width: '80%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px 0'
    },
    icon: {
      color: theme.palette.accent.green
    }
  };
});

/***/ }),

/***/ "./src/components/onboarding/stages/SelectTopics.js":
/*!**********************************************************!*\
  !*** ./src/components/onboarding/stages/SelectTopics.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useToggle */ "./src/hooks/useToggle.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _shared_button_Regular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/button/Regular */ "./src/components/shared/button/Regular.js");
/* harmony import */ var _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/placeholder/onboarding */ "./src/assets/placeholder/onboarding.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // Hooks

 // Libraries


 // Components

 // Constants



var Topic = function Topic(props) {
  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__["default"])(false),
      _useToggle2 = _slicedToArray(_useToggle, 2),
      selected = _useToggle2[0],
      toggleSelected = _useToggle2[1];

  var classes = useStyles(selected); // Props

  var topic = props.topic,
      addSelectedTopic = props.addSelectedTopic,
      removeSelectedTopic = props.removeSelectedTopic;

  var onClick = function onClick() {
    selected ? removeSelectedTopic(topic) : addSelectedTopic(topic);
    toggleSelected();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    onClick: onClick,
    className: classes.topicName,
    variant: "body1"
  }, topic);
};

function SelectTopics(props) {
  var classes = useStyles(); // props

  var selectedTopics = props.selectedTopics,
      addSelectedTopic = props.addSelectedTopic,
      removeSelectedTopic = props.removeSelectedTopic,
      onNext = props.onNext;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.title,
    variant: "h1"
  }, _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_5__["ONBOARDING"].INTERESTED_TOPICS.PRIMARY.TITLE), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.content,
    variant: "body1"
  }, _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_5__["ONBOARDING"].INTERESTED_TOPICS.PRIMARY.CONTENT), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.topicsContainer
  }, _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_5__["ONBOARDING"].INTERESTED_TOPICS.TOPICS.map(function (topic, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Topic, {
      key: index,
      topic: topic,
      index: index,
      addSelectedTopic: addSelectedTopic,
      removeSelectedTopic: removeSelectedTopic
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_button_Regular__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: "Next",
    onClick: function onClick() {
      onNext();
      console.log('Following are the selected Topics: ', selectedTopics);
    },
    containerStyles: classes.nextButton
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SelectTopics);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    container: {
      width: '100%',
      height: '100%',
      padding: 50,
      paddingTop: 20,
      position: 'relative'
    },
    title: {
      fontWeight: 600,
      textAlign: 'left',
      margin: '20px 0px'
    },
    content: {
      fontWeight: 400,
      textAlign: 'left',
      marginBottom: 20
    },
    topicsContainer: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap'
    },
    topicName: {
      textAlign: 'center',
      fontWeight: 400,
      backgroundColor: function backgroundColor(selected) {
        return selected ? theme.palette.primary.blue40 : theme.palette.secondary.neutral30;
      },
      color: function color(selected) {
        return selected ? theme.palette.common.white : theme.palette.secondary.neutral80;
      },
      padding: '5px 12px',
      margin: 10,
      marginLeft: 0,
      borderRadius: 200,
      '&:hover': {
        cursor: 'pointer'
      }
    },
    nextButton: {
      position: 'absolute',
      bottom: '5%',
      right: '5%',
      margin: 10,
      padding: 5,
      minWidth: 80,
      width: 'auto'
    }
  };
});

/***/ }),

/***/ "./src/components/onboarding/stages/VerifyEmail.js":
/*!*********************************************************!*\
  !*** ./src/components/onboarding/stages/VerifyEmail.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _assets_images_onboarding_verifyEmail_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/onboarding/verifyEmail.png */ "./src/assets/images/onboarding/verifyEmail.png");
/* harmony import */ var _config_themes_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/themes/light */ "./src/config/themes/light.js");
/* harmony import */ var _shared_button_Regular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/button/Regular */ "./src/components/shared/button/Regular.js");
/* harmony import */ var _shared_input_Regular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/input/Regular */ "./src/components/shared/input/Regular.js");
/* harmony import */ var _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/placeholder/onboarding */ "./src/assets/placeholder/onboarding.js");
 // Library


 // Assets


 // Components


 // Constants



function VerifyEmail(props) {
  var classes = useStyles(); // props

  var email = props.email,
      setEmail = props.setEmail,
      isEmailVerified = props.isEmailVerified,
      toggleIsEmailVerified = props.toggleIsEmailVerified,
      verifyEmail = props.verifyEmail,
      onNext = props.onNext;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.container,
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.content,
    item: true,
    sm: 12,
    md: 12,
    lg: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.verifyTitle,
    variant: "h1"
  }, _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].VERIFY_EMAIL.PRIMARY.TITLE), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.verifyContent,
    variant: "body1"
  }, !isEmailVerified ? _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].VERIFY_EMAIL.PRIMARY.CONTENT : "We have sent an email to ".concat(email)), isEmailVerified ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.verifyContent,
    variant: "body1"
  }, _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].VERIFY_EMAIL.SECONDARY.CONTENT) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.emailTitle,
    variant: "h3"
  }, _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].VERIFY_EMAIL.SECONDARY.TITLE), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_input_Regular__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.emailInput,
    value: email,
    onChange: setEmail,
    placeholder: _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].VERIFY_EMAIL.EMAIL_PLACEHOLDER
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_button_Regular__WEBPACK_IMPORTED_MODULE_5__["default"], {
    containerStyles: classes.button,
    text: isEmailVerified ? _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].VERIFY_EMAIL.BUTTON.SECONDARY : _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].VERIFY_EMAIL.BUTTON.PRIMARY,
    onClick: !isEmailVerified ? function () {
      verifyEmail();
      toggleIsEmailVerified();
    } : onNext
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.note,
    variant: "body2"
  }, _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_7__["ONBOARDING"].VERIFY_EMAIL.NOTE)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.imgContainer,
    item: true,
    sm: 12,
    md: 12,
    lg: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.img,
    src: _assets_images_onboarding_verifyEmail_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "Verify Email"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (VerifyEmail);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function () {
  return {
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: _config_themes_light__WEBPACK_IMPORTED_MODULE_4__["default"].palette.background["default"],
      padding: 10,
      paddingLeft: 40
    },
    content: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    verifyTitle: {
      color: _config_themes_light__WEBPACK_IMPORTED_MODULE_4__["default"].palette.common.black,
      marginTop: 20
    },
    verifyContent: {
      color: _config_themes_light__WEBPACK_IMPORTED_MODULE_4__["default"].palette.common.black,
      marginBottom: 30,
      fontWeight: '400',
      fontSize: '18px'
    },
    emailInput: {
      width: '85%'
    },
    button: {
      width: '85%',
      padding: 10
    },
    imgContainer: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    img: {
      width: '150%',
      height: 'auto',
      marginRight: 10
    },
    note: {
      marginTop: 40,
      color: _config_themes_light__WEBPACK_IMPORTED_MODULE_4__["default"].palette.common.black
    }
  };
});

/***/ }),

/***/ "./src/components/onboarding/stages/Welcome.js":
/*!*****************************************************!*\
  !*** ./src/components/onboarding/stages/Welcome.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/placeholder/onboarding */ "./src/assets/placeholder/onboarding.js");
 // Libraries



 // Assets

 // Constants



function Welcome(props) {
  var classes = useStyles(); // Props

  var onNext = props.onNext,
      onLogin = props.onLogin; // Helper Functions

  var onSignupClick = function onSignupClick() {
    onLogin();
    onNext();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.logo,
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "Monday Morning"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.welcomeText,
    variant: "body1"
  }, _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_5__["ONBOARDING"].WELCOME.CONTENT), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.loginButton,
    onClick: onSignupClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-google fa-2x"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    className: classes.signupText
  }, "Sign up with Google")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.skip,
    variant: "body1"
  }, "Skip")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.terms,
    variant: "body2"
  }, _assets_placeholder_onboarding__WEBPACK_IMPORTED_MODULE_5__["ONBOARDING"].WELCOME.TERMS));
}

/* harmony default export */ __webpack_exports__["default"] = (Welcome);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.background["default"],
      padding: 10
    },
    logo: {
      width: '45%',
      height: 'auto',
      marginBottom: 50,
      marginTop: 30
    },
    welcomeText: {
      width: '60%',
      height: 'auto',
      color: theme.palette.secondary.neutral70,
      textAlign: 'center',
      marginBottom: 40
    },
    loginButton: {
      // width: '25%',
      height: 'auto',
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      border: "1px solid ".concat(theme.palette.common.black),
      borderRadius: 5,
      '&:hover': {
        cursor: 'pointer'
      }
    },
    signupText: {
      marginLeft: 20
    },
    skip: {
      marginTop: 10,
      marginBottom: 50,
      color: theme.palette.secondary.neutral50
    },
    terms: {
      color: theme.palette.secondary.neutral60
    }
  };
});

/***/ }),

/***/ "./src/components/shared/button/Regular.js":
/*!*************************************************!*\
  !*** ./src/components/shared/button/Regular.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
 // Library




function RegularButton(props) {
  var classes = useStyles();
  var text = props.text,
      loading = props.loading,
      containerStyles = props.containerStyles,
      textStyles = props.textStyles,
      disabled = props.disabled,
      onClick = props.onClick; // TODO: Change button styling when component disabled.

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    className: "".concat(classes.container, " ").concat(containerStyles)
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: "".concat(classes.buttonText, " ").concat(textStyles),
    variant: "body1"
  }, "Loading...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: "".concat(classes.buttonText, " ").concat(textStyles),
    variant: "body1"
  }, text));
}

/* harmony default export */ __webpack_exports__["default"] = (RegularButton);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    container: {
      width: '100%',
      padding: 7,
      backgroundColor: theme.palette.primary.blue50,
      display: 'flex',
      justifyContent: 'center',
      alignmentItems: 'center',
      borderRadius: 5,
      border: 0,
      '&:hover': {
        cursor: 'pointer'
      }
    },
    buttonText: {
      color: theme.palette.common.white,
      fontSize: '18px',
      margin: 0,
      padding: 0
    }
  };
});

/***/ }),

/***/ "./src/components/shared/input/Regular.js":
/*!************************************************!*\
  !*** ./src/components/shared/input/Regular.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
 // Library



function RegularInput(props) {
  var classes = useStyles();
  var value = props.value,
      _onChange = props.onChange,
      placeholder = props.placeholder,
      className = props.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "".concat(classes.input, " ").concat(className),
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    placeholder: placeholder
  });
}

/* harmony default export */ __webpack_exports__["default"] = (RegularInput);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    input: {
      width: '100%',
      padding: 10,
      backgroundColor: theme.palette.secondary.neutral30,
      borderRadius: 5,
      margin: 10,
      marginLeft: 0,
      color: theme.palette.text.disabled,
      fontSize: '18px',
      border: '0px'
    }
  };
});

/***/ }),

/***/ "./src/hooks/useInput.js":
/*!*******************************!*\
  !*** ./src/hooks/useInput.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var set = function set(value) {
    return setState(value);
  };

  var reset = function reset() {
    return setState('');
  };

  return [state, set, reset];
});

/***/ }),

/***/ "./src/hooks/useToggle.js":
/*!********************************!*\
  !*** ./src/hooks/useToggle.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var toggle = function toggle() {
    return setState(function (state) {
      return !state;
    });
  };

  return [state, toggle, setState];
});

/***/ }),

/***/ "./src/screens/Onboarding.js":
/*!***********************************!*\
  !*** ./src/screens/Onboarding.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_onboarding_stages_Welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/onboarding/stages/Welcome */ "./src/components/onboarding/stages/Welcome.js");
/* harmony import */ var _components_onboarding_stages_VerifyEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/onboarding/stages/VerifyEmail */ "./src/components/onboarding/stages/VerifyEmail.js");
/* harmony import */ var _components_onboarding_stages_SelectTopics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/onboarding/stages/SelectTopics */ "./src/components/onboarding/stages/SelectTopics.js");
/* harmony import */ var _components_onboarding_stages_NewsletterSignup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/onboarding/stages/NewsletterSignup */ "./src/components/onboarding/stages/NewsletterSignup.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./src/hooks/useInput.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useToggle */ "./src/hooks/useToggle.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // Libraries


 // Components




 // Hooks



var STAGES = {
  WELCOME: 'welcome-stage',
  VERIFY_EMAIL: 'verify-email',
  INTERESTED_TOPICS: 'interested-topics',
  NEWSLETTER: 'newsletter-signup'
};

function Onboarding() {
  var classes = useStyles(); // Local States

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(STAGES.WELCOME),
      _useState2 = _slicedToArray(_useState, 2),
      stage = _useState2[0],
      setStage = _useState2[1];

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput2 = _slicedToArray(_useInput, 2),
      email = _useInput2[0],
      setEmail = _useInput2[1];

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_8__["default"])(false),
      _useToggle2 = _slicedToArray(_useToggle, 2),
      isEmailVerified = _useToggle2[0],
      toggleIsEmailVerified = _useToggle2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedTopics = _useState4[0],
      setSelectedTopics = _useState4[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput4 = _slicedToArray(_useInput3, 2),
      newsletterEmail = _useInput4[0],
      setNewsletterEmail = _useInput4[1]; // Stage Change functions


  var setStageToWelcome = function setStageToWelcome() {
    return setStage(STAGES.WELCOME);
  };

  var setStageToVerifyEmail = function setStageToVerifyEmail() {
    return setStage(STAGES.VERIFY_EMAIL);
  };

  var setStageToInterestedTopics = function setStageToInterestedTopics() {
    return setStage(STAGES.INTERESTED_TOPICS);
  };

  var setStageToNewsletter = function setStageToNewsletter() {
    return setStage(STAGES.NEWSLETTER);
  }; // Local Helper Functions


  var onLogin = function onLogin() {
    return console.log('Login Function Executed');
  };

  var verifyEmail = function verifyEmail() {
    return console.log('Email Verify Function Executed');
  };

  var signupNewsletter = function signupNewsletter() {
    return console.log('Signed up for Newsletter');
  };

  var addSelectedTopic = function addSelectedTopic(newTopic) {
    return setSelectedTopics(function (current) {
      return [].concat(_toConsumableArray(current), [newTopic]);
    });
  };

  var removeSelectedTopic = function removeSelectedTopic(topic) {
    return setSelectedTopics(function (selected) {
      return selected.filter(function (selectedTopic) {
        if (selectedTopic !== topic) return selectedTopic;
      });
    });
  };

  var renderStages = function renderStages() {
    switch (stage) {
      case STAGES.WELCOME:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_onboarding_stages_Welcome__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onNext: setStageToVerifyEmail,
          onLogin: onLogin
        });

      case STAGES.VERIFY_EMAIL:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_onboarding_stages_VerifyEmail__WEBPACK_IMPORTED_MODULE_4__["default"], {
          email: email,
          setEmail: setEmail,
          isEmailVerified: isEmailVerified,
          toggleIsEmailVerified: toggleIsEmailVerified,
          verifyEmail: verifyEmail,
          onNext: setStageToInterestedTopics
        });

      case STAGES.INTERESTED_TOPICS:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_onboarding_stages_SelectTopics__WEBPACK_IMPORTED_MODULE_5__["default"], {
          selectedTopics: selectedTopics,
          addSelectedTopic: addSelectedTopic,
          removeSelectedTopic: removeSelectedTopic,
          onNext: setStageToNewsletter
        });

      case STAGES.NEWSLETTER:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_onboarding_stages_NewsletterSignup__WEBPACK_IMPORTED_MODULE_6__["default"], {
          email: newsletterEmail,
          setEmail: setNewsletterEmail,
          signupNewsletter: signupNewsletter
        });

      default:
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
          variant: "body1"
        }, "Loading....");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.screen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.box
  }, renderStages()));
}

/* harmony default export */ __webpack_exports__["default"] = (Onboarding);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    screen: {
      width: '100%',
      height: window.innerHeight,
      backgroundColor: '#E5E5E5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    box: {
      minWidth: 350,
      minHeight: 500,
      width: '55%',
      height: '55%',
      backgroundColor: theme.palette.background["default"],
      borderRadius: 5,
      overflow: 'hidden'
    }
  };
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9vbmJvYXJkaW5nL25ld3NsZXR0ZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL29uYm9hcmRpbmcvdmVyaWZ5RW1haWwucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGxhY2Vob2xkZXIvb25ib2FyZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vbmJvYXJkaW5nL3N0YWdlcy9OZXdzbGV0dGVyU2lnbnVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29uYm9hcmRpbmcvc3RhZ2VzL1NlbGVjdFRvcGljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vbmJvYXJkaW5nL3N0YWdlcy9WZXJpZnlFbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vbmJvYXJkaW5nL3N0YWdlcy9XZWxjb21lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9idXR0b24vUmVndWxhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvaW5wdXQvUmVndWxhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZVRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9PbmJvYXJkaW5nLmpzIl0sIm5hbWVzIjpbIk9OQk9BUkRJTkciLCJPYmplY3QiLCJmcmVlemUiLCJXRUxDT01FIiwiQ09OVEVOVCIsIlRFUk1TIiwiVkVSSUZZX0VNQUlMIiwiUFJJTUFSWSIsIlRJVExFIiwiU0VDT05EQVJZIiwiRU1BSUxfUExBQ0VIT0xERVIiLCJCVVRUT04iLCJOT1RFIiwiSU5URVJFU1RFRF9UT1BJQ1MiLCJUT1BJQ1MiLCJORVdTTEVUVEVSIiwiVmVyaWZ5RW1haWwiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ1c2VTdGF0ZSIsImlzU2lnbmVkIiwic2V0SXNTaWduZWQiLCJlbWFpbCIsInNldEVtYWlsIiwic2lnbnVwTmV3c2xldHRlciIsIm9uU2lnbnVwIiwiY29udGFpbmVyIiwiY29udGVudCIsInZlcmlmeVRpdGxlIiwiaWNvbkNvbnRhaW5lciIsImljb24iLCJ2ZXJpZnlDb250ZW50IiwiZW1haWxUaXRsZSIsImVtYWlsSW5wdXQiLCJjcmVhdGVCcm93c2VySGlzdG9yeSIsInB1c2giLCJidXR0b24iLCJub3RlIiwiaW1nQ29udGFpbmVyIiwiaW1nIiwibmV3c2xldHRlciIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwicGFkZGluZ0xlZnQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwiY29tbW9uIiwiYmxhY2siLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsIm1hcmdpbiIsImFjY2VudCIsImdyZWVuIiwiVG9waWMiLCJ1c2VUb2dnbGUiLCJzZWxlY3RlZCIsInRvZ2dsZVNlbGVjdGVkIiwidG9waWMiLCJhZGRTZWxlY3RlZFRvcGljIiwicmVtb3ZlU2VsZWN0ZWRUb3BpYyIsIm9uQ2xpY2siLCJ0b3BpY05hbWUiLCJTZWxlY3RUb3BpY3MiLCJzZWxlY3RlZFRvcGljcyIsIm9uTmV4dCIsInRpdGxlIiwidG9waWNzQ29udGFpbmVyIiwibWFwIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwibmV4dEJ1dHRvbiIsInBhZGRpbmdUb3AiLCJwb3NpdGlvbiIsInRleHRBbGlnbiIsImZsZXhXcmFwIiwicHJpbWFyeSIsImJsdWU0MCIsInNlY29uZGFyeSIsIm5ldXRyYWwzMCIsIndoaXRlIiwibmV1dHJhbDgwIiwibWFyZ2luTGVmdCIsImJvcmRlclJhZGl1cyIsImN1cnNvciIsImJvdHRvbSIsInJpZ2h0IiwibWluV2lkdGgiLCJpc0VtYWlsVmVyaWZpZWQiLCJ0b2dnbGVJc0VtYWlsVmVyaWZpZWQiLCJ2ZXJpZnlFbWFpbCIsInZlcmlmeUVtYWlsSW1nIiwiV2VsY29tZSIsIm9uTG9naW4iLCJvblNpZ251cENsaWNrIiwibG9nbyIsIndlbGNvbWVUZXh0IiwibG9naW5CdXR0b24iLCJzaWdudXBUZXh0IiwidGV4dERlY29yYXRpb24iLCJza2lwIiwidGVybXMiLCJuZXV0cmFsNzAiLCJib3JkZXIiLCJuZXV0cmFsNTAiLCJuZXV0cmFsNjAiLCJSZWd1bGFyQnV0dG9uIiwidGV4dCIsImxvYWRpbmciLCJjb250YWluZXJTdHlsZXMiLCJ0ZXh0U3R5bGVzIiwiZGlzYWJsZWQiLCJidXR0b25UZXh0IiwiYmx1ZTUwIiwiYWxpZ25tZW50SXRlbXMiLCJSZWd1bGFySW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJpbnB1dCIsImUiLCJ0YXJnZXQiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwic2V0IiwicmVzZXQiLCJ0b2dnbGUiLCJTVEFHRVMiLCJPbmJvYXJkaW5nIiwic3RhZ2UiLCJzZXRTdGFnZSIsInVzZUlucHV0Iiwic2V0U2VsZWN0ZWRUb3BpY3MiLCJuZXdzbGV0dGVyRW1haWwiLCJzZXROZXdzbGV0dGVyRW1haWwiLCJzZXRTdGFnZVRvV2VsY29tZSIsInNldFN0YWdlVG9WZXJpZnlFbWFpbCIsInNldFN0YWdlVG9JbnRlcmVzdGVkVG9waWNzIiwic2V0U3RhZ2VUb05ld3NsZXR0ZXIiLCJuZXdUb3BpYyIsImN1cnJlbnQiLCJmaWx0ZXIiLCJzZWxlY3RlZFRvcGljIiwicmVuZGVyU3RhZ2VzIiwic2NyZWVuIiwiYm94Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJtaW5IZWlnaHQi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Q0FERixDQURGO0FBS0Q7O0FBRWNmLHlFQUFmO0FBRUEsSUFBTTVILFNBQVMsR0FBR3VCLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNvSCxVQUFNLEVBQUU7QUFDTm5ILFdBQUssRUFBRSxNQUREO0FBRU5DLFlBQU0sRUFBRW9ILE1BQU0sQ0FBQ0MsV0FGVDtBQUdOcEgscUJBQWUsRUFBRSxTQUhYO0FBSU5LLGFBQU8sRUFBRSxNQUpIO0FBS05HLG9CQUFjLEVBQUUsUUFMVjtBQU1ORCxnQkFBVSxFQUFFO0FBTk4sS0FEK0I7QUFTdkMyRyxPQUFHLEVBQUU7QUFDSDVELGNBQVEsRUFBRSxHQURQO0FBRUgrRCxlQUFTLEVBQUUsR0FGUjtBQUdIdkgsV0FBSyxFQUFFLEtBSEo7QUFJSEMsWUFBTSxFQUFFLEtBSkw7QUFLSEMscUJBQWUsRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWNDLFVBQWQsV0FMZDtBQU1IZ0Qsa0JBQVksRUFBRSxDQU5YO0FBT0hvRSxjQUFRLEVBQUU7QUFQUDtBQVRrQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QixDIiwiZmlsZSI6IjQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjcwMjM2Yzg1ZjI0OTljNWJhN2U5ZGI2ZDEwOTUzNzhmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmMmQ3ZWU1Y2FlNjQyZTg3MzcyYmEzZDE1OTVjOGFjYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDhjYjgwNGNmZjFlZjA3NjMxMzQyY2Y1NWJlM2U4ODcucG5nXCI7IiwiZXhwb3J0IGNvbnN0IE9OQk9BUkRJTkcgPSBPYmplY3QuZnJlZXplKHtcclxuICBXRUxDT01FOiB7XHJcbiAgICBDT05URU5UOlxyXG4gICAgICAnV2VsY29tZSB0byBNb25kYXkgTW9ybmluZywgXFxuIHRoZSBzdHVkZW50IG1lZGlhIGJvZHkgb2YgTklUIFJvdXJrZWxhLCBcXG4gYW5kIEluZGlh4oCZcyAybmQgbGFyZ2VzdCBzdHVkZW50IG1lZGlhIGJvZHkgIScsXHJcbiAgICBURVJNUzogJ0J5IGNyZWF0aW5nIGFuIGFjY291bnQsIEkgYWNjZXB0IFxcbiBNTeKAmXMgVGVybXMgb2YgVXNlJyxcclxuICB9LFxyXG4gIFZFUklGWV9FTUFJTDoge1xyXG4gICAgUFJJTUFSWToge1xyXG4gICAgICBUSVRMRTogJ1ZlcmlmeSBBY2NvdW50JyxcclxuICAgICAgQ09OVEVOVDpcclxuICAgICAgICAnVmVyaWZ5IHlvdXIgYWNjb3VudCB3aXRoIGluc3RpdHV0ZSBcXG4gZW1haWwgaWQganVzdCBvbmNlIGFuZCBnZXQgYWNjZXNzIHRvIFxcbiBsaW1pdGVkIGFjY2VzcyBhcnRpY2xlcyAhJyxcclxuICAgIH0sXHJcbiAgICBTRUNPTkRBUlk6IHtcclxuICAgICAgVElUTEU6ICdFbWFpbCcsXHJcbiAgICAgIENPTlRFTlQ6XHJcbiAgICAgICAgJ1lvdSBuZWVkIHRvIHZlcmlmeSB5b3VyIGVtYWlsIHRvIGFjY2VzcyBjZXJ0YWluIFxcbiByZXN0cmljdGVkIGFydGljbGVzLiBJZiB5b3UgaGF2ZSBub3QgcmVjZWl2ZWQgdGhlIFxcbiB2ZXJpZmljYXRpb24gZW1haWwgcGxlYXNlIGNoZWNrIHlvdXIgU3BhbSBcXG4gZm9sZGVyLiBZb3UgY2FuIGFsc28gY2xpY2sgb24gdGhlIHJlc2VuZCBidXR0b24gXFxuIGJlbG93IHRvIGhhdmUgYW5vdGhlciBlbWFpbCBzZW50IHRvIHlvdScsXHJcbiAgICB9LFxyXG4gICAgRU1BSUxfUExBQ0VIT0xERVI6ICdpbnN0aXR1dGVJREBuaXRya2wuYWMuaW4nLFxyXG4gICAgQlVUVE9OOiB7XHJcbiAgICAgIFBSSU1BUlk6ICdHZXQgVmVyaWZpY2F0aW9uIExpbmsnLFxyXG4gICAgICBTRUNPTkRBUlk6ICdDaGVjayBhZ2FpbiBhbmQgY29udGludWUnLFxyXG4gICAgfSxcclxuICAgIE5PVEU6XHJcbiAgICAgICdOb3RlOiBUaGlzIG9ubHkgd29ya3MgaWYgeW914oCZcmUgYSBjdXJyZW50IHN0dWRlbnQvZW1wbG95ZWUgb2YgXFxuIE5JVCBSb3Vya2VsYSB3aXRoIGEgdmFsaWQgaW5zdGl0dXRlIGVtYWlsIGlkLicsXHJcbiAgfSxcclxuICBJTlRFUkVTVEVEX1RPUElDUzoge1xyXG4gICAgUFJJTUFSWToge1xyXG4gICAgICBUSVRMRTogJ0ludGVyZXN0ZWQgVG9waWNzJyxcclxuICAgICAgQ09OVEVOVDpcclxuICAgICAgICBcIlNlbGVjdCB0aGUgdG9waWNzIHlvdSdyZSBpbnRlcmVzdGVkIGluLCBhbmQgZ2V0IHNtYXJ0ZXIgYXJ0aWNsZSBzdWdnZXN0aW9ucyBvbiB0aGUgTU0gd2Vic2l0ZSFcIixcclxuICAgIH0sXHJcbiAgICBUT1BJQ1M6IFtcclxuICAgICAgJ1dpdHNkb20nLFxyXG4gICAgICAnQ2FtcHVzIEJ1enonLFxyXG4gICAgICAnU3R1ZGVudCBBY3Rpdml0aWVzJyxcclxuICAgICAgJ0FsdW1uaSBBZmZhaXJzJyxcclxuICAgICAgJ0hhbGxzJyxcclxuICAgICAgJ0ludGVydmlld3MnLFxyXG4gICAgICAnU0FDIFNwZWFrcycsXHJcbiAgICAgICdEZWFuIFNwZWFrcycsXHJcbiAgICAgICdWaWRlb3MnLFxyXG4gICAgICAnR3Vlc3QgSW50ZXJ2aWV3cycsXHJcbiAgICAgIFwiRGlyZWN0b3IncyBEZXNrXCIsXHJcbiAgICAgIFwiQ2hpZWYgV2FyZGVuJ3MgQ29sdW1uXCIsXHJcbiAgICAgICdDb21pY3MnLFxyXG4gICAgICAnQWx1bW51cyBTcGVha3MnLFxyXG4gICAgICAnRWRpdG9yaWFsJyxcclxuICAgICAgJ1BsYWNlbWVudHMnLFxyXG4gICAgICAnSW50ZXJuc2hpcHMnLFxyXG4gICAgICAnSGlnaGVyIEVkdWNhdGlvbicsXHJcbiAgICAgICdQaG90b3N0b3JpZXMnLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIE5FV1NMRVRURVI6IHtcclxuICAgIFBSSU1BUlk6IHtcclxuICAgICAgVElUTEU6ICdOZXdzbGV0dGVyIFNpZ251cCcsXHJcbiAgICAgIENPTlRFTlQ6XHJcbiAgICAgICAgJ1NpZ24gdXAgZm9yIHRoZSBNTSBuZXdzbGV0dGVyIGFuZCBnZXQgbmV3cyBhbmQgXFxuIGFydGljbGVzIGRlbGl2ZXJlZCBzdHJhaWdodCB0byB5b3VyIG1haWxib3ghJyxcclxuICAgIH0sXHJcbiAgICBTRUNPTkRBUlk6IHtcclxuICAgICAgVElUTEU6ICdFbWFpbCcsXHJcbiAgICAgIENPTlRFTlQ6XHJcbiAgICAgICAgJ1lvdeKAmXZlIHN1Y2Nlc3NmdWxseSBzaWduZWQgdXAgZm9yIHRoZSBuZXdzbGV0dGVyLiBcXG4gQmUgdGhlIGZpcnN0IHRvIGtub3cgdGhlIGhhcHBlbmluZ3MgYXQgTklUUiBhbmQgXFxuIG5ldmVyIG1pc3Mgb3V0IG9uIGFuIGlzc3VlIHJlbGVhc2UgIScsXHJcbiAgICB9LFxyXG4gICAgRU1BSUxfUExBQ0VIT0xERVI6ICdpbnN0aXR1dGVJREBuaXRya2wuYWMuaW4nLFxyXG4gICAgQlVUVE9OOiB7XHJcbiAgICAgIFBSSU1BUlk6ICdTaWdudXAgZm9yIG5ld3NsZXR0ZXInLFxyXG4gICAgICBTRUNPTkRBUlk6ICdHZXQgU3RhcnRlZCcsXHJcbiAgICB9LFxyXG4gICAgTk9URTpcclxuICAgICAgJ05vdGU6IE5ld3NsZXR0ZXJzIGFyZSBzZW50IG9uY2UgYSB3ZWVrIG9yIG9uY2UgaW4gYSBmb3J0bmlnaHQgXFxuIGR1cmluZyB0aGUgd29ya2luZyBzZXNzaW9uIG9mIHRoZSBpbnN0aXR1dGUnLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBMaWJyYXJ5XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuLy8gSGVscGVyXHJcbmltcG9ydCBjcmVhdGVCcm93c2VySGlzdG9yeSBmcm9tICcuLi8uLi8uLi91dGlscy9oaXN0b3J5JztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9zaGFyZWQvYnV0dG9uL1JlZ3VsYXInO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vLi4vc2hhcmVkL2lucHV0L1JlZ3VsYXInO1xyXG5cclxuLy8gQXNzZXRzXHJcbmltcG9ydCBuZXdzbGV0dGVyIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb25ib2FyZGluZy9uZXdzbGV0dGVyLnBuZyc7XHJcbmltcG9ydCB7IE9OQk9BUkRJTkcgfSBmcm9tICcuLi8uLi8uLi9hc3NldHMvcGxhY2Vob2xkZXIvb25ib2FyZGluZyc7XHJcblxyXG5mdW5jdGlvbiBWZXJpZnlFbWFpbChwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgLy8gTG9jYWwgU3RhdGVzXHJcbiAgY29uc3QgW2lzU2lnbmVkLCBzZXRJc1NpZ25lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIFByb3BzXHJcbiAgY29uc3QgeyBlbWFpbCwgc2V0RW1haWwsIHNpZ251cE5ld3NsZXR0ZXIgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBvblNpZ251cCA9ICgpID0+IHtcclxuICAgIHNldElzU2lnbmVkKHRydWUpO1xyXG4gICAgc2lnbnVwTmV3c2xldHRlcigpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fSBpdGVtIHNtPXsxMn0gbWQ9ezEyfSBsZz17N30+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnZlcmlmeVRpdGxlfSB2YXJpYW50PSdoMSc+XHJcbiAgICAgICAgICB7T05CT0FSRElORy5ORVdTTEVUVEVSLlBSSU1BUlkuVElUTEV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICB7aXNTaWduZWQgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYXIgZmEtY2hlY2stY2lyY2xlIGZhLTZ4ICR7Y2xhc3Nlcy5pY29ufWB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudmVyaWZ5Q29udGVudH0gdmFyaWFudD0nYm9keTEnPlxyXG4gICAgICAgICAgICAgIHtPTkJPQVJESU5HLk5FV1NMRVRURVIuUFJJTUFSWS5DT05URU5UfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnZlcmlmeUNvbnRlbnR9IHZhcmlhbnQ9J2JvZHkxJz5cclxuICAgICAgICAgICAgICB7T05CT0FSRElORy5ORVdTTEVUVEVSLlNFQ09OREFSWS5DT05URU5UfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5lbWFpbFRpdGxlfSB2YXJpYW50PSdoMyc+XHJcbiAgICAgICAgICAgICAge09OQk9BUkRJTkcuTkVXU0xFVFRFUi5TRUNPTkRBUlkuVElUTEV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmVtYWlsSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRFbWFpbH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17T05CT0FSRElORy5ORVdTTEVUVEVSLkVNQUlMX1BMQUNFSE9MREVSfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdGV4dD17XHJcbiAgICAgICAgICAgIGlzU2lnbmVkID8gT05CT0FSRElORy5ORVdTTEVUVEVSLkJVVFRPTi5TRUNPTkRBUlkgOiBPTkJPQVJESU5HLk5FV1NMRVRURVIuQlVUVE9OLlBSSU1BUllcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uQ2xpY2s9e2lzU2lnbmVkID8gKCkgPT4gY3JlYXRlQnJvd3Nlckhpc3RvcnkucHVzaCgnLycpIDogb25TaWdudXB9XHJcbiAgICAgICAgICBjb250YWluZXJTdHlsZXM9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RlfSB2YXJpYW50PSdib2R5Mic+XHJcbiAgICAgICAgICB7T05CT0FSRElORy5ORVdTTEVUVEVSLk5PVEV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQ29udGFpbmVyfSBpdGVtIHNtPXsxMn0gbWQ9ezEyfSBsZz17NX0+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfSBzcmM9e25ld3NsZXR0ZXJ9IGFsdD0nVmVyaWZ5IEVtYWlsJyAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVyaWZ5RW1haWw7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXHJcbiAgICBwYWRkaW5nOiAxMCxcclxuICAgIHBhZGRpbmdMZWZ0OiA0MCxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgfSxcclxuICB2ZXJpZnlUaXRsZToge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxyXG4gICAgbWFyZ2luVG9wOiAyMCxcclxuICB9LFxyXG4gIHZlcmlmeUNvbnRlbnQ6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICBmb250V2VpZ2h0OiAnNDAwJyxcclxuICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgfSxcclxuICBlbWFpbElucHV0OiB7XHJcbiAgICB3aWR0aDogJzg1JScsXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiAnODUlJyxcclxuICB9LFxyXG4gIGltZ0NvbnRhaW5lcjoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGltZzoge1xyXG4gICAgd2lkdGg6ICcxNTAlJyxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxyXG4gIH0sXHJcbiAgbm90ZToge1xyXG4gICAgbWFyZ2luVG9wOiA0MCxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICB9LFxyXG4gIGljb25Db250YWluZXI6IHtcclxuICAgIHdpZHRoOiAnODAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luOiAnMjBweCAwJyxcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmFjY2VudC5ncmVlbixcclxuICB9LFxyXG59KSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBIb29rc1xyXG5pbXBvcnQgdXNlVG9nZ2xlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVRvZ2dsZSc7XHJcblxyXG4vLyBMaWJyYXJpZXNcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vc2hhcmVkL2J1dHRvbi9SZWd1bGFyJztcclxuXHJcbi8vIENvbnN0YW50c1xyXG5pbXBvcnQgeyBPTkJPQVJESU5HIH0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL3BsYWNlaG9sZGVyL29uYm9hcmRpbmcnO1xyXG5cclxuY29uc3QgVG9waWMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHRvZ2dsZVNlbGVjdGVkXSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhzZWxlY3RlZCk7XHJcblxyXG4gIC8vIFByb3BzXHJcbiAgY29uc3QgeyB0b3BpYywgYWRkU2VsZWN0ZWRUb3BpYywgcmVtb3ZlU2VsZWN0ZWRUb3BpYyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZWxlY3RlZCA/IHJlbW92ZVNlbGVjdGVkVG9waWModG9waWMpIDogYWRkU2VsZWN0ZWRUb3BpYyh0b3BpYyk7XHJcbiAgICB0b2dnbGVTZWxlY3RlZCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeSBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e2NsYXNzZXMudG9waWNOYW1lfSB2YXJpYW50PSdib2R5MSc+XHJcbiAgICAgIHt0b3BpY31cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gU2VsZWN0VG9waWNzKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAvLyBwcm9wc1xyXG4gIGNvbnN0IHsgc2VsZWN0ZWRUb3BpY3MsIGFkZFNlbGVjdGVkVG9waWMsIHJlbW92ZVNlbGVjdGVkVG9waWMsIG9uTmV4dCB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9J2gxJz5cclxuICAgICAgICB7T05CT0FSRElORy5JTlRFUkVTVEVEX1RPUElDUy5QUklNQVJZLlRJVExFfVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0gdmFyaWFudD0nYm9keTEnPlxyXG4gICAgICAgIHtPTkJPQVJESU5HLklOVEVSRVNURURfVE9QSUNTLlBSSU1BUlkuQ09OVEVOVH1cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9waWNzQ29udGFpbmVyfT5cclxuICAgICAgICB7T05CT0FSRElORy5JTlRFUkVTVEVEX1RPUElDUy5UT1BJQ1MubWFwKCh0b3BpYywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxUb3BpY1xyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICB0b3BpYz17dG9waWN9XHJcbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgYWRkU2VsZWN0ZWRUb3BpYz17YWRkU2VsZWN0ZWRUb3BpY31cclxuICAgICAgICAgICAgcmVtb3ZlU2VsZWN0ZWRUb3BpYz17cmVtb3ZlU2VsZWN0ZWRUb3BpY31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHRleHQ9J05leHQnXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgb25OZXh0KCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRm9sbG93aW5nIGFyZSB0aGUgc2VsZWN0ZWQgVG9waWNzOiAnLCBzZWxlY3RlZFRvcGljcyk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBjb250YWluZXJTdHlsZXM9e2NsYXNzZXMubmV4dEJ1dHRvbn1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFRvcGljcztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgcGFkZGluZzogNTAsXHJcbiAgICBwYWRkaW5nVG9wOiAyMCxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgbWFyZ2luOiAnMjBweCAwcHgnLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxyXG4gIH0sXHJcbiAgdG9waWNzQ29udGFpbmVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICB9LFxyXG4gIHRvcGljTmFtZToge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogKHNlbGVjdGVkKSA9PlxyXG4gICAgICBzZWxlY3RlZCA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5ibHVlNDAgOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5uZXV0cmFsMzAsXHJcbiAgICBjb2xvcjogKHNlbGVjdGVkKSA9PlxyXG4gICAgICBzZWxlY3RlZCA/IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlIDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubmV1dHJhbDgwLFxyXG4gICAgcGFkZGluZzogJzVweCAxMnB4JyxcclxuICAgIG1hcmdpbjogMTAsXHJcbiAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAyMDAsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbmV4dEJ1dHRvbjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3R0b206ICc1JScsXHJcbiAgICByaWdodDogJzUlJyxcclxuICAgIG1hcmdpbjogMTAsXHJcbiAgICBwYWRkaW5nOiA1LFxyXG4gICAgbWluV2lkdGg6IDgwLFxyXG4gICAgd2lkdGg6ICdhdXRvJyxcclxuICB9LFxyXG59KSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIExpYnJhcnlcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG4vLyBBc3NldHNcclxuaW1wb3J0IHZlcmlmeUVtYWlsSW1nIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb25ib2FyZGluZy92ZXJpZnlFbWFpbC5wbmcnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vY29uZmlnL3RoZW1lcy9saWdodCc7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vc2hhcmVkL2J1dHRvbi9SZWd1bGFyJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4uLy4uL3NoYXJlZC9pbnB1dC9SZWd1bGFyJztcclxuXHJcbi8vIENvbnN0YW50c1xyXG5pbXBvcnQgeyBPTkJPQVJESU5HIH0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL3BsYWNlaG9sZGVyL29uYm9hcmRpbmcnO1xyXG5cclxuZnVuY3Rpb24gVmVyaWZ5RW1haWwocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIC8vIHByb3BzXHJcbiAgY29uc3QgeyBlbWFpbCwgc2V0RW1haWwsIGlzRW1haWxWZXJpZmllZCwgdG9nZ2xlSXNFbWFpbFZlcmlmaWVkLCB2ZXJpZnlFbWFpbCwgb25OZXh0IH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9IGl0ZW0gc209ezEyfSBtZD17MTJ9IGxnPXs3fT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudmVyaWZ5VGl0bGV9IHZhcmlhbnQ9J2gxJz5cclxuICAgICAgICAgIHtPTkJPQVJESU5HLlZFUklGWV9FTUFJTC5QUklNQVJZLlRJVExFfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnZlcmlmeUNvbnRlbnR9IHZhcmlhbnQ9J2JvZHkxJz5cclxuICAgICAgICAgIHshaXNFbWFpbFZlcmlmaWVkXHJcbiAgICAgICAgICAgID8gT05CT0FSRElORy5WRVJJRllfRU1BSUwuUFJJTUFSWS5DT05URU5UXHJcbiAgICAgICAgICAgIDogYFdlIGhhdmUgc2VudCBhbiBlbWFpbCB0byAke2VtYWlsfWB9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICB7aXNFbWFpbFZlcmlmaWVkID8gKFxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnZlcmlmeUNvbnRlbnR9IHZhcmlhbnQ9J2JvZHkxJz5cclxuICAgICAgICAgICAge09OQk9BUkRJTkcuVkVSSUZZX0VNQUlMLlNFQ09OREFSWS5DT05URU5UfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZW1haWxUaXRsZX0gdmFyaWFudD0naDMnPlxyXG4gICAgICAgICAgICAgIHtPTkJPQVJESU5HLlZFUklGWV9FTUFJTC5TRUNPTkRBUlkuVElUTEV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmVtYWlsSW5wdXR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRFbWFpbH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17T05CT0FSRElORy5WRVJJRllfRU1BSUwuRU1BSUxfUExBQ0VIT0xERVJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjb250YWluZXJTdHlsZXM9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgdGV4dD17XHJcbiAgICAgICAgICAgIGlzRW1haWxWZXJpZmllZFxyXG4gICAgICAgICAgICAgID8gT05CT0FSRElORy5WRVJJRllfRU1BSUwuQlVUVE9OLlNFQ09OREFSWVxyXG4gICAgICAgICAgICAgIDogT05CT0FSRElORy5WRVJJRllfRU1BSUwuQlVUVE9OLlBSSU1BUllcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAhaXNFbWFpbFZlcmlmaWVkXHJcbiAgICAgICAgICAgICAgPyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHZlcmlmeUVtYWlsKCk7XHJcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZUlzRW1haWxWZXJpZmllZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDogb25OZXh0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGV9IHZhcmlhbnQ9J2JvZHkyJz5cclxuICAgICAgICAgIHtPTkJPQVJESU5HLlZFUklGWV9FTUFJTC5OT1RFfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ0NvbnRhaW5lcn0gaXRlbSBzbT17MTJ9IG1kPXsxMn0gbGc9ezV9PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gc3JjPXt2ZXJpZnlFbWFpbEltZ30gYWx0PSdWZXJpZnkgRW1haWwnIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJpZnlFbWFpbDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXHJcbiAgICBwYWRkaW5nOiAxMCxcclxuICAgIHBhZGRpbmdMZWZ0OiA0MCxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgfSxcclxuICB2ZXJpZnlUaXRsZToge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxyXG4gICAgbWFyZ2luVG9wOiAyMCxcclxuICB9LFxyXG4gIHZlcmlmeUNvbnRlbnQ6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICBmb250V2VpZ2h0OiAnNDAwJyxcclxuICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgfSxcclxuICBlbWFpbElucHV0OiB7XHJcbiAgICB3aWR0aDogJzg1JScsXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiAnODUlJyxcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gIH0sXHJcbiAgaW1nQ29udGFpbmVyOiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgaW1nOiB7XHJcbiAgICB3aWR0aDogJzE1MCUnLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBtYXJnaW5SaWdodDogMTAsXHJcbiAgfSxcclxuICBub3RlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IDQwLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxyXG4gIH0sXHJcbn0pKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIExpYnJhcmllc1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy8gQXNzZXRzXHJcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnO1xyXG5cclxuLy8gQ29uc3RhbnRzXHJcbmltcG9ydCB7IE9OQk9BUkRJTkcgfSBmcm9tICcuLi8uLi8uLi9hc3NldHMvcGxhY2Vob2xkZXIvb25ib2FyZGluZyc7XHJcblxyXG5mdW5jdGlvbiBXZWxjb21lKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAvLyBQcm9wc1xyXG4gIGNvbnN0IHsgb25OZXh0LCBvbkxvZ2luIH0gPSBwcm9wcztcclxuXHJcbiAgLy8gSGVscGVyIEZ1bmN0aW9uc1xyXG4gIGNvbnN0IG9uU2lnbnVwQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBvbkxvZ2luKCk7XHJcbiAgICBvbk5leHQoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30gc3JjPXtsb2dvfSBhbHQ9J01vbmRheSBNb3JuaW5nJyAvPlxyXG5cclxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLndlbGNvbWVUZXh0fSB2YXJpYW50PSdib2R5MSc+XHJcbiAgICAgICAge09OQk9BUkRJTkcuV0VMQ09NRS5DT05URU5UfVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpbkJ1dHRvbn0gb25DbGljaz17b25TaWdudXBDbGlja30+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtZ29vZ2xlIGZhLTJ4JyAvPlxyXG5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgY2xhc3NOYW1lPXtjbGFzc2VzLnNpZ251cFRleHR9PlxyXG4gICAgICAgICAgU2lnbiB1cCB3aXRoIEdvb2dsZVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TGluayB0bz0nLycgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc2tpcH0gdmFyaWFudD0nYm9keTEnPlxyXG4gICAgICAgICAgU2tpcFxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRlcm1zfSB2YXJpYW50PSdib2R5Mic+XHJcbiAgICAgICAge09OQk9BUkRJTkcuV0VMQ09NRS5URVJNU31cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXHJcbiAgICBwYWRkaW5nOiAxMCxcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIHdpZHRoOiAnNDUlJyxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luQm90dG9tOiA1MCxcclxuICAgIG1hcmdpblRvcDogMzAsXHJcbiAgfSxcclxuICB3ZWxjb21lVGV4dDoge1xyXG4gICAgd2lkdGg6ICc2MCUnLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubmV1dHJhbDcwLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIG1hcmdpbkJvdHRvbTogNDAsXHJcbiAgfSxcclxuICBsb2dpbkJ1dHRvbjoge1xyXG4gICAgLy8gd2lkdGg6ICcyNSUnLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBwYWRkaW5nOiAxMCxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXHJcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFja31gLFxyXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNpZ251cFRleHQ6IHtcclxuICAgIG1hcmdpbkxlZnQ6IDIwLFxyXG4gIH0sXHJcbiAgc2tpcDoge1xyXG4gICAgbWFyZ2luVG9wOiAxMCxcclxuICAgIG1hcmdpbkJvdHRvbTogNTAsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubmV1dHJhbDUwLFxyXG4gIH0sXHJcbiAgdGVybXM6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5uZXV0cmFsNjAsXHJcbiAgfSxcclxufSkpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gTGlicmFyeVxyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuZnVuY3Rpb24gUmVndWxhckJ1dHRvbihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IHRleHQsIGxvYWRpbmcsIGNvbnRhaW5lclN0eWxlcywgdGV4dFN0eWxlcywgZGlzYWJsZWQsIG9uQ2xpY2sgfSA9IHByb3BzO1xyXG5cclxuICAvLyBUT0RPOiBDaGFuZ2UgYnV0dG9uIHN0eWxpbmcgd2hlbiBjb21wb25lbnQgZGlzYWJsZWQuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmNvbnRhaW5lcn0gJHtjb250YWluZXJTdHlsZXN9YH1cclxuICAgID5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmJ1dHRvblRleHR9ICR7dGV4dFN0eWxlc31gfSB2YXJpYW50PSdib2R5MSc+XHJcbiAgICAgICAgICBMb2FkaW5nLi4uXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5idXR0b25UZXh0fSAke3RleHRTdHlsZXN9YH0gdmFyaWFudD0nYm9keTEnPlxyXG4gICAgICAgICAge3RleHR9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICApfVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVndWxhckJ1dHRvbjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBhZGRpbmc6IDcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5ibHVlNTAsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBhbGlnbm1lbnRJdGVtczogJ2NlbnRlcicsXHJcbiAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICBib3JkZXI6IDAsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnV0dG9uVGV4dDoge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgIG1hcmdpbjogMCxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgfSxcclxufSkpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gTGlicmFyeVxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmZ1bmN0aW9uIFJlZ3VsYXJJbnB1dChwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IHZhbHVlLCBvbkNoYW5nZSwgcGxhY2Vob2xkZXIsIGNsYXNzTmFtZSB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXRcclxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmlucHV0fSAke2NsYXNzTmFtZX1gfVxyXG4gICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ3VsYXJJbnB1dDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGlucHV0OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcGFkZGluZzogMTAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm5ldXRyYWwzMCxcclxuICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIG1hcmdpbjogMTAsXHJcbiAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5kaXNhYmxlZCxcclxuICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgICBib3JkZXI6ICcwcHgnLFxyXG4gIH0sXHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsU3RhdGUgPSAnJykgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCBzZXQgPSAodmFsdWUpID0+IHNldFN0YXRlKHZhbHVlKTtcclxuICBjb25zdCByZXNldCA9ICgpID0+IHNldFN0YXRlKCcnKTtcclxuICByZXR1cm4gW3N0YXRlLCBzZXQsIHJlc2V0XTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsU3RhdGUgPSBmYWxzZSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRTdGF0ZSgoc3RhdGUpID0+ICFzdGF0ZSk7XHJcbiAgcmV0dXJuIFtzdGF0ZSwgdG9nZ2xlLCBzZXRTdGF0ZV07XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIExpYnJhcmllc1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IFdlbGNvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9vbmJvYXJkaW5nL3N0YWdlcy9XZWxjb21lJztcclxuaW1wb3J0IFZlcmlmeUVtYWlsIGZyb20gJy4uL2NvbXBvbmVudHMvb25ib2FyZGluZy9zdGFnZXMvVmVyaWZ5RW1haWwnO1xyXG5pbXBvcnQgU2VsZWN0VG9waWNzIGZyb20gJy4uL2NvbXBvbmVudHMvb25ib2FyZGluZy9zdGFnZXMvU2VsZWN0VG9waWNzJztcclxuaW1wb3J0IE5ld3NsZXR0ZXJTaWdudXAgZnJvbSAnLi4vY29tcG9uZW50cy9vbmJvYXJkaW5nL3N0YWdlcy9OZXdzbGV0dGVyU2lnbnVwJztcclxuXHJcbi8vIEhvb2tzXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSAnLi4vaG9va3MvdXNlVG9nZ2xlJztcclxuXHJcbmNvbnN0IFNUQUdFUyA9IHtcclxuICBXRUxDT01FOiAnd2VsY29tZS1zdGFnZScsXHJcbiAgVkVSSUZZX0VNQUlMOiAndmVyaWZ5LWVtYWlsJyxcclxuICBJTlRFUkVTVEVEX1RPUElDUzogJ2ludGVyZXN0ZWQtdG9waWNzJyxcclxuICBORVdTTEVUVEVSOiAnbmV3c2xldHRlci1zaWdudXAnLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gT25ib2FyZGluZygpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIC8vIExvY2FsIFN0YXRlc1xyXG4gIGNvbnN0IFtzdGFnZSwgc2V0U3RhZ2VdID0gdXNlU3RhdGUoU1RBR0VTLldFTENPTUUpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtpc0VtYWlsVmVyaWZpZWQsIHRvZ2dsZUlzRW1haWxWZXJpZmllZF0gPSB1c2VUb2dnbGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRvcGljcywgc2V0U2VsZWN0ZWRUb3BpY3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdzbGV0dGVyRW1haWwsIHNldE5ld3NsZXR0ZXJFbWFpbF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIC8vIFN0YWdlIENoYW5nZSBmdW5jdGlvbnNcclxuICBjb25zdCBzZXRTdGFnZVRvV2VsY29tZSA9ICgpID0+IHNldFN0YWdlKFNUQUdFUy5XRUxDT01FKTtcclxuICBjb25zdCBzZXRTdGFnZVRvVmVyaWZ5RW1haWwgPSAoKSA9PiBzZXRTdGFnZShTVEFHRVMuVkVSSUZZX0VNQUlMKTtcclxuICBjb25zdCBzZXRTdGFnZVRvSW50ZXJlc3RlZFRvcGljcyA9ICgpID0+IHNldFN0YWdlKFNUQUdFUy5JTlRFUkVTVEVEX1RPUElDUyk7XHJcbiAgY29uc3Qgc2V0U3RhZ2VUb05ld3NsZXR0ZXIgPSAoKSA9PiBzZXRTdGFnZShTVEFHRVMuTkVXU0xFVFRFUik7XHJcblxyXG4gIC8vIExvY2FsIEhlbHBlciBGdW5jdGlvbnNcclxuICBjb25zdCBvbkxvZ2luID0gKCkgPT4gY29uc29sZS5sb2coJ0xvZ2luIEZ1bmN0aW9uIEV4ZWN1dGVkJyk7XHJcbiAgY29uc3QgdmVyaWZ5RW1haWwgPSAoKSA9PiBjb25zb2xlLmxvZygnRW1haWwgVmVyaWZ5IEZ1bmN0aW9uIEV4ZWN1dGVkJyk7XHJcbiAgY29uc3Qgc2lnbnVwTmV3c2xldHRlciA9ICgpID0+IGNvbnNvbGUubG9nKCdTaWduZWQgdXAgZm9yIE5ld3NsZXR0ZXInKTtcclxuXHJcbiAgY29uc3QgYWRkU2VsZWN0ZWRUb3BpYyA9IChuZXdUb3BpYykgPT4gc2V0U2VsZWN0ZWRUb3BpY3MoKGN1cnJlbnQpID0+IFsuLi5jdXJyZW50LCBuZXdUb3BpY10pO1xyXG5cclxuICBjb25zdCByZW1vdmVTZWxlY3RlZFRvcGljID0gKHRvcGljKSA9PlxyXG4gICAgc2V0U2VsZWN0ZWRUb3BpY3MoKHNlbGVjdGVkKSA9PiB7XHJcbiAgICAgIHJldHVybiBzZWxlY3RlZC5maWx0ZXIoKHNlbGVjdGVkVG9waWMpID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRUb3BpYyAhPT0gdG9waWMpIHJldHVybiBzZWxlY3RlZFRvcGljO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCByZW5kZXJTdGFnZXMgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHN0YWdlKSB7XHJcbiAgICAgIGNhc2UgU1RBR0VTLldFTENPTUU6XHJcbiAgICAgICAgcmV0dXJuIDxXZWxjb21lIG9uTmV4dD17c2V0U3RhZ2VUb1ZlcmlmeUVtYWlsfSBvbkxvZ2luPXtvbkxvZ2lufSAvPjtcclxuICAgICAgY2FzZSBTVEFHRVMuVkVSSUZZX0VNQUlMOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8VmVyaWZ5RW1haWxcclxuICAgICAgICAgICAgZW1haWw9e2VtYWlsfVxyXG4gICAgICAgICAgICBzZXRFbWFpbD17c2V0RW1haWx9XHJcbiAgICAgICAgICAgIGlzRW1haWxWZXJpZmllZD17aXNFbWFpbFZlcmlmaWVkfVxyXG4gICAgICAgICAgICB0b2dnbGVJc0VtYWlsVmVyaWZpZWQ9e3RvZ2dsZUlzRW1haWxWZXJpZmllZH1cclxuICAgICAgICAgICAgdmVyaWZ5RW1haWw9e3ZlcmlmeUVtYWlsfVxyXG4gICAgICAgICAgICBvbk5leHQ9e3NldFN0YWdlVG9JbnRlcmVzdGVkVG9waWNzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlIFNUQUdFUy5JTlRFUkVTVEVEX1RPUElDUzpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFNlbGVjdFRvcGljc1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvcGljcz17c2VsZWN0ZWRUb3BpY3N9XHJcbiAgICAgICAgICAgIGFkZFNlbGVjdGVkVG9waWM9e2FkZFNlbGVjdGVkVG9waWN9XHJcbiAgICAgICAgICAgIHJlbW92ZVNlbGVjdGVkVG9waWM9e3JlbW92ZVNlbGVjdGVkVG9waWN9XHJcbiAgICAgICAgICAgIG9uTmV4dD17c2V0U3RhZ2VUb05ld3NsZXR0ZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgU1RBR0VTLk5FV1NMRVRURVI6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxOZXdzbGV0dGVyU2lnbnVwXHJcbiAgICAgICAgICAgIGVtYWlsPXtuZXdzbGV0dGVyRW1haWx9XHJcbiAgICAgICAgICAgIHNldEVtYWlsPXtzZXROZXdzbGV0dGVyRW1haWx9XHJcbiAgICAgICAgICAgIHNpZ251cE5ld3NsZXR0ZXI9e3NpZ251cE5ld3NsZXR0ZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPkxvYWRpbmcuLi4uPC9UeXBvZ3JhcGh5PjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2NyZWVufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT57cmVuZGVyU3RhZ2VzKCl9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPbmJvYXJkaW5nO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgc2NyZWVuOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRTVFNUU1JyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgYm94OiB7XHJcbiAgICBtaW5XaWR0aDogMzUwLFxyXG4gICAgbWluSGVpZ2h0OiA1MDAsXHJcbiAgICB3aWR0aDogJzU1JScsXHJcbiAgICBoZWlnaHQ6ICc1NSUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcclxuICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICB9LFxyXG59KSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=