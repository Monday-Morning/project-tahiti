(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Button.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Button.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonElement = function (_React$Component) {
  _inherits(ButtonElement, _React$Component);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'input',
        this.props,
        this.props.children
      );
    }
  }]);

  return ButtonElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(ButtonElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Element.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Element.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _scrollElement = __webpack_require__(/*! ../mixins/scroll-element */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementWrapper = function (_React$Component) {
  _inherits(ElementWrapper, _React$Component);

  function ElementWrapper() {
    _classCallCheck(this, ElementWrapper);

    return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
  }

  _createClass(ElementWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Remove `parentBindings` from props
      var newProps = _extends({}, this.props);
      if (newProps.parentBindings) {
        delete newProps.parentBindings;
      }

      return _react2.default.createElement(
        'div',
        _extends({}, newProps, { ref: function ref(el) {
            _this2.props.parentBindings.domNode = el;
          } }),
        this.props.children
      );
    }
  }]);

  return ElementWrapper;
}(_react2.default.Component);

;

ElementWrapper.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string
};

exports.default = (0, _scrollElement2.default)(ElementWrapper);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Link.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Link.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkElement = function (_React$Component) {
  _inherits(LinkElement, _React$Component);

  function LinkElement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        'a',
        _this.props,
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return LinkElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(LinkElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-scroll/modules/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Helpers = exports.ScrollElement = exports.ScrollLink = exports.animateScroll = exports.scrollSpy = exports.Events = exports.scroller = exports.Element = exports.Button = exports.Link = undefined;

var _Link = __webpack_require__(/*! ./components/Link.js */ "./node_modules/react-scroll/modules/components/Link.js");

var _Link2 = _interopRequireDefault(_Link);

var _Button = __webpack_require__(/*! ./components/Button.js */ "./node_modules/react-scroll/modules/components/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Element = __webpack_require__(/*! ./components/Element.js */ "./node_modules/react-scroll/modules/components/Element.js");

var _Element2 = _interopRequireDefault(_Element);

var _scroller = __webpack_require__(/*! ./mixins/scroller.js */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _scrollEvents = __webpack_require__(/*! ./mixins/scroll-events.js */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

var _scrollSpy = __webpack_require__(/*! ./mixins/scroll-spy.js */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _animateScroll = __webpack_require__(/*! ./mixins/animate-scroll.js */ "./node_modules/react-scroll/modules/mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollLink = __webpack_require__(/*! ./mixins/scroll-link.js */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

var _scrollElement = __webpack_require__(/*! ./mixins/scroll-element.js */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _Helpers = __webpack_require__(/*! ./mixins/Helpers.js */ "./node_modules/react-scroll/modules/mixins/Helpers.js");

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Link = _Link2.default;
exports.Button = _Button2.default;
exports.Element = _Element2.default;
exports.scroller = _scroller2.default;
exports.Events = _scrollEvents2.default;
exports.scrollSpy = _scrollSpy2.default;
exports.animateScroll = _animateScroll2.default;
exports.ScrollLink = _scrollLink2.default;
exports.ScrollElement = _scrollElement2.default;
exports.Helpers = _Helpers2.default;
exports.default = { Link: _Link2.default, Button: _Button2.default, Element: _Element2.default, scroller: _scroller2.default, Events: _scrollEvents2.default, scrollSpy: _scrollSpy2.default, animateScroll: _animateScroll2.default, ScrollLink: _scrollLink2.default, ScrollElement: _scrollElement2.default, Helpers: _Helpers2.default };

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/Helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/Helpers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* DEPRECATED */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");
var scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");
var defaultScroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var protoTypes = {
  to: PropTypes.string.isRequired,
  containerId: PropTypes.string,
  container: PropTypes.object,
  activeClass: PropTypes.string,
  spy: PropTypes.bool,
  smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  offset: PropTypes.number,
  delay: PropTypes.number,
  isDynamic: PropTypes.bool,
  onClick: PropTypes.func,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  absolute: PropTypes.bool,
  onSetActive: PropTypes.func,
  onSetInactive: PropTypes.func,
  ignoreCancelEvents: PropTypes.bool,
  hashSpy: PropTypes.bool
};

var Helpers = {
  Scroll: function Scroll(Component, customScroller) {

    console.warn("Helpers.Scroll is deprecated since v1.7.0");

    var scroller = customScroller || defaultScroller;

    var Scroll = function (_React$Component) {
      _inherits(Scroll, _React$Component);

      function Scroll(props) {
        _classCallCheck(this, Scroll);

        var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
          active: false
        };
        return _this;
      }

      _createClass(Scroll, [{
        key: 'getScrollSpyContainer',
        value: function getScrollSpyContainer() {
          var containerId = this.props.containerId;
          var container = this.props.container;

          if (containerId) {
            return document.getElementById(containerId);
          }

          if (container && container.nodeType) {
            return container;
          }

          return document;
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.spy || this.props.hashSpy) {
            var scrollSpyContainer = this.getScrollSpyContainer();

            if (!scrollSpy.isMounted(scrollSpyContainer)) {
              scrollSpy.mount(scrollSpyContainer);
            }

            if (this.props.hashSpy) {
              if (!scrollHash.isMounted()) {
                scrollHash.mount(scroller);
              }
              scrollHash.mapContainer(this.props.to, scrollSpyContainer);
            }

            if (this.props.spy) {
              scrollSpy.addStateHandler(this.stateHandler);
            }

            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);

            this.setState({
              container: scrollSpyContainer
            });
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          scrollSpy.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: 'render',
        value: function render() {
          var className = "";

          if (this.state && this.state.active) {
            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
          } else {
            className = this.props.className;
          }

          var props = _extends({}, this.props);

          for (var prop in protoTypes) {
            if (props.hasOwnProperty(prop)) {
              delete props[prop];
            }
          }

          props.className = className;
          props.onClick = this.handleClick;

          return React.createElement(Component, props);
        }
      }]);

      return Scroll;
    }(React.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.scrollTo = function (to, props) {
        scroller.scrollTo(to, _extends({}, _this2.state, props));
      };

      this.handleClick = function (event) {

        /*
         * give the posibility to override onClick
         */

        if (_this2.props.onClick) {
          _this2.props.onClick(event);
        }

        /*
         * dont bubble the navigation
         */

        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();

        /*
         * do the magic!
         */
        _this2.scrollTo(_this2.props.to, _this2.props);
      };

      this.stateHandler = function () {
        if (scroller.getActiveLink() !== _this2.props.to) {
          if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
            _this2.props.onSetInactive();
          }
          _this2.setState({ active: false });
        }
      };

      this.spyHandler = function (y) {

        var scrollSpyContainer = _this2.getScrollSpyContainer();

        if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
          return;
        }

        var to = _this2.props.to;
        var element = null;
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemTopBound = cords.top - containerTop + y;
          elemBottomBound = elemTopBound + cords.height;
        }

        var offsetY = y - _this2.props.offset;
        var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
        var activeLink = scroller.getActiveLink();

        if (isOutside) {
          if (to === activeLink) {
            scroller.setActiveLink(void 0);
          }

          if (_this2.props.hashSpy && scrollHash.getHash() === to) {
            scrollHash.changeHash();
          }

          if (_this2.props.spy && _this2.state.active) {
            _this2.setState({ active: false });
            _this2.props.onSetInactive && _this2.props.onSetInactive();
          }

          return scrollSpy.updateStates();
        }

        if (isInside && activeLink !== to) {
          scroller.setActiveLink(to);

          _this2.props.hashSpy && scrollHash.changeHash(to);

          if (_this2.props.spy) {
            _this2.setState({ active: true });
            _this2.props.onSetActive && _this2.props.onSetActive(to);
          }
          return scrollSpy.updateStates();
        }
      };
    };

    ;

    Scroll.propTypes = protoTypes;

    Scroll.defaultProps = { offset: 0 };

    return Scroll;
  },
  Element: function Element(Component) {

    console.warn("Helpers.Element is deprecated since v1.7.0");

    var Element = function (_React$Component2) {
      _inherits(Element, _React$Component2);

      function Element(props) {
        _classCallCheck(this, Element);

        var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

        _this3.childBindings = {
          domNode: null
        };
        return _this3;
      }

      _createClass(Element, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (typeof window === 'undefined') {
            return false;
          }
          this.registerElems(this.props.name);
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          if (this.props.name !== prevProps.name) {
            this.registerElems(this.props.name);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (typeof window === 'undefined') {
            return false;
          }
          defaultScroller.unregister(this.props.name);
        }
      }, {
        key: 'registerElems',
        value: function registerElems(name) {
          defaultScroller.register(name, this.childBindings.domNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
        }
      }]);

      return Element;
    }(React.Component);

    ;

    Element.propTypes = {
      name: PropTypes.string,
      id: PropTypes.string
    };

    return Element;
  }
};

module.exports = Helpers;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/animate-scroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/animate-scroll.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _smooth = __webpack_require__(/*! ./smooth */ "./node_modules/react-scroll/modules/mixins/smooth.js");

var _smooth2 = _interopRequireDefault(_smooth);

var _cancelEvents = __webpack_require__(/*! ./cancel-events */ "./node_modules/react-scroll/modules/mixins/cancel-events.js");

var _cancelEvents2 = _interopRequireDefault(_cancelEvents);

var _scrollEvents = __webpack_require__(/*! ./scroll-events */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Gets the easing type from the smooth prop within options.
 */
var getAnimationType = function getAnimationType(options) {
  return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
};
/*
 * Function helper
 */
var functionWrapper = function functionWrapper(value) {
  return typeof value === 'function' ? value : function () {
    return value;
  };
};
/*
 * Wraps window properties to allow server side rendering
 */
var currentWindowProperties = function currentWindowProperties() {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }
};

/*
 * Helper function to never extend 60fps on the webpage.
 */
var requestAnimationFrameHelper = function () {
  return currentWindowProperties() || function (callback, element, delay) {
    window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
  };
}();

var makeData = function makeData() {
  return {
    currentPosition: 0,
    startPosition: 0,
    targetPosition: 0,
    progress: 0,
    duration: 0,
    cancel: false,

    target: null,
    containerElement: null,
    to: null,
    start: null,
    delta: null,
    percent: null,
    delayTimeout: null
  };
};

var currentPositionX = function currentPositionX(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollLeft;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
  }
};

var currentPositionY = function currentPositionY(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollTop;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }
};

var scrollContainerWidth = function scrollContainerWidth(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollWidth - containerElement.offsetWidth;
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
  }
};

var scrollContainerHeight = function scrollContainerHeight(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollHeight - containerElement.offsetHeight;
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }
};

var animateScroll = function animateScroll(easing, options, timestamp) {
  var data = options.data;

  // Cancel on specific events
  if (!options.ignoreCancelEvents && data.cancel) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
    }
    return;
  };

  data.delta = Math.round(data.targetPosition - data.startPosition);

  if (data.start === null) {
    data.start = timestamp;
  }

  data.progress = timestamp - data.start;

  data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);

  data.currentPosition = data.startPosition + Math.ceil(data.delta * data.percent);

  if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
    if (options.horizontal) {
      data.containerElement.scrollLeft = data.currentPosition;
    } else {
      data.containerElement.scrollTop = data.currentPosition;
    }
  } else {
    if (options.horizontal) {
      window.scrollTo(data.currentPosition, 0);
    } else {
      window.scrollTo(0, data.currentPosition);
    }
  }

  if (data.percent < 1) {
    var easedAnimate = animateScroll.bind(null, easing, options);
    requestAnimationFrameHelper.call(window, easedAnimate);
    return;
  }

  if (_scrollEvents2.default.registered['end']) {
    _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPosition);
  }
};

var setContainer = function setContainer(options) {
  options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
};

var animateTopScroll = function animateTopScroll(scrollOffset, options, to, target) {
  options.data = options.data || makeData();

  window.clearTimeout(options.data.delayTimeout);

  _cancelEvents2.default.subscribe(function () {
    options.data.cancel = true;
  });

  setContainer(options);

  options.data.start = null;
  options.data.cancel = false;
  options.data.startPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
  options.data.targetPosition = options.absolute ? scrollOffset : scrollOffset + options.data.startPosition;

  if (options.data.startPosition === options.data.targetPosition) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](options.data.to, options.data.target, options.data.currentPosition);
    }
    return;
  }

  options.data.delta = Math.round(options.data.targetPosition - options.data.startPosition);

  options.data.duration = functionWrapper(options.duration)(options.data.delta);
  options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1000 : parseFloat(options.data.duration);
  options.data.to = to;
  options.data.target = target;

  var easing = getAnimationType(options);
  var easedAnimate = animateScroll.bind(null, easing, options);

  if (options && options.delay > 0) {
    options.data.delayTimeout = window.setTimeout(function () {
      if (_scrollEvents2.default.registered['begin']) {
        _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
      }
      requestAnimationFrameHelper.call(window, easedAnimate);
    }, options.delay);
    return;
  }

  if (_scrollEvents2.default.registered['begin']) {
    _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
  }
  requestAnimationFrameHelper.call(window, easedAnimate);
};

var proceedOptions = function proceedOptions(options) {
  options = _extends({}, options);
  options.data = options.data || makeData();
  options.absolute = true;
  return options;
};

var scrollToTop = function scrollToTop(options) {
  animateTopScroll(0, proceedOptions(options));
};

var scrollTo = function scrollTo(toPosition, options) {
  animateTopScroll(toPosition, proceedOptions(options));
};

var scrollToBottom = function scrollToBottom(options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(options.horizontal ? scrollContainerWidth(options) : scrollContainerHeight(options), options);
};

var scrollMore = function scrollMore(toPosition, options) {
  options = proceedOptions(options);
  setContainer(options);
  var currentPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
  animateTopScroll(toPosition + currentPosition, options);
};

exports.default = {
  animateTopScroll: animateTopScroll,
  getAnimationType: getAnimationType,
  scrollToTop: scrollToTop,
  scrollToBottom: scrollToBottom,
  scrollTo: scrollTo,
  scrollMore: scrollMore
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/cancel-events.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/cancel-events.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

var events = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];

exports.default = {
  subscribe: function subscribe(cancelEvent) {
    return typeof document !== 'undefined' && events.forEach(function (event) {
      return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
    });
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/passive-event-listeners.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Tell the browser that the event listener won't prevent a scroll.
 * Allowing the browser to continue scrolling without having to
 * to wait for the listener to return.
 */
var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener(target, eventName, listener) {
  var supportsPassiveOption = function () {
    var supportsPassiveOption = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassiveOption;
  }();
  target.addEventListener(eventName, listener, supportsPassiveOption ? { passive: true } : false);
};

var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener(target, eventName, listener) {
  target.removeEventListener(eventName, listener);
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-element.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-element.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Component) {
  var Element = function (_React$Component) {
    _inherits(Element, _React$Component);

    function Element(props) {
      _classCallCheck(this, Element);

      var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

      _this.childBindings = {
        domNode: null
      };
      return _this;
    }

    _createClass(Element, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (typeof window === 'undefined') {
          return false;
        }
        this.registerElems(this.props.name);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {
          this.registerElems(this.props.name);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof window === 'undefined') {
          return false;
        }
        _scroller2.default.unregister(this.props.name);
      }
    }, {
      key: 'registerElems',
      value: function registerElems(name) {
        _scroller2.default.register(name, this.childBindings.domNode);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
      }
    }]);

    return Element;
  }(_react2.default.Component);

  ;

  Element.propTypes = {
    name: _propTypes2.default.string,
    id: _propTypes2.default.string
  };

  return Element;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-events.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-events.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var Events = {
	registered: {},
	scrollEvent: {
		register: function register(evtName, callback) {
			Events.registered[evtName] = callback;
		},
		remove: function remove(evtName) {
			Events.registered[evtName] = null;
		}
	}
};

exports.default = Events;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-hash.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-hash.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollHash = {
  mountFlag: false,
  initialized: false,
  scroller: null,
  containers: {},

  mount: function mount(scroller) {
    this.scroller = scroller;

    this.handleHashChange = this.handleHashChange.bind(this);
    window.addEventListener('hashchange', this.handleHashChange);

    this.initStateFromHash();
    this.mountFlag = true;
  },
  mapContainer: function mapContainer(to, container) {
    this.containers[to] = container;
  },
  isMounted: function isMounted() {
    return this.mountFlag;
  },
  isInitialized: function isInitialized() {
    return this.initialized;
  },
  initStateFromHash: function initStateFromHash() {
    var _this = this;

    var hash = this.getHash();
    if (hash) {
      window.setTimeout(function () {
        _this.scrollTo(hash, true);
        _this.initialized = true;
      }, 10);
    } else {
      this.initialized = true;
    }
  },
  scrollTo: function scrollTo(to, isInit) {
    var scroller = this.scroller;
    var element = scroller.get(to);
    if (element && (isInit || to !== scroller.getActiveLink())) {
      var container = this.containers[to] || document;
      scroller.scrollTo(to, { container: container });
    }
  },
  getHash: function getHash() {
    return _utils2.default.getHash();
  },
  changeHash: function changeHash(to, saveHashHistory) {
    if (this.isInitialized() && _utils2.default.getHash() !== to) {
      _utils2.default.updateHash(to, saveHashHistory);
    }
  },
  handleHashChange: function handleHashChange() {
    this.scrollTo(this.getHash());
  },
  unmount: function unmount() {
    this.scroller = null;
    this.containers = null;
    window.removeEventListener('hashchange', this.handleHashChange);
  }
};

exports.default = scrollHash;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-link.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-link.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var _scrollHash2 = _interopRequireDefault(_scrollHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var protoTypes = {
  to: _propTypes2.default.string.isRequired,
  containerId: _propTypes2.default.string,
  container: _propTypes2.default.object,
  activeClass: _propTypes2.default.string,
  spy: _propTypes2.default.bool,
  horizontal: _propTypes2.default.bool,
  smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  offset: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  isDynamic: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  absolute: _propTypes2.default.bool,
  onSetActive: _propTypes2.default.func,
  onSetInactive: _propTypes2.default.func,
  ignoreCancelEvents: _propTypes2.default.bool,
  hashSpy: _propTypes2.default.bool,
  saveHashHistory: _propTypes2.default.bool
};

exports.default = function (Component, customScroller) {

  var scroller = customScroller || _scroller2.default;

  var Link = function (_React$PureComponent) {
    _inherits(Link, _React$PureComponent);

    function Link(props) {
      _classCallCheck(this, Link);

      var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        active: false
      };
      return _this;
    }

    _createClass(Link, [{
      key: 'getScrollSpyContainer',
      value: function getScrollSpyContainer() {
        var containerId = this.props.containerId;
        var container = this.props.container;

        if (containerId && !container) {
          return document.getElementById(containerId);
        }

        if (container && container.nodeType) {
          return container;
        }

        return document;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.spy || this.props.hashSpy) {
          var scrollSpyContainer = this.getScrollSpyContainer();

          if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
            _scrollSpy2.default.mount(scrollSpyContainer);
          }

          if (this.props.hashSpy) {
            if (!_scrollHash2.default.isMounted()) {
              _scrollHash2.default.mount(scroller);
            }
            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
          }

          _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);

          this.setState({
            container: scrollSpyContainer
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = "";

        if (this.state && this.state.active) {
          className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
        } else {
          className = this.props.className;
        }

        var props = _extends({}, this.props);

        for (var prop in protoTypes) {
          if (props.hasOwnProperty(prop)) {
            delete props[prop];
          }
        }

        props.className = className;
        props.onClick = this.handleClick;

        return _react2.default.createElement(Component, props);
      }
    }]);

    return Link;
  }(_react2.default.PureComponent);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.scrollTo = function (to, props) {
      scroller.scrollTo(to, _extends({}, _this2.state, props));
    };

    this.handleClick = function (event) {

      /*
       * give the posibility to override onClick
       */

      if (_this2.props.onClick) {
        _this2.props.onClick(event);
      }

      /*
       * dont bubble the navigation
       */

      if (event.stopPropagation) event.stopPropagation();
      if (event.preventDefault) event.preventDefault();

      /*
       * do the magic!
       */
      _this2.scrollTo(_this2.props.to, _this2.props);
    };

    this.spyHandler = function (x, y) {
      var scrollSpyContainer = _this2.getScrollSpyContainer();

      if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
        return;
      }

      var horizontal = _this2.props.horizontal;

      var to = _this2.props.to;
      var element = null;
      var isInside = void 0;
      var isOutside = void 0;

      if (horizontal) {
        var elemLeftBound = 0;
        var elemRightBound = 0;
        var containerLeft = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerLeft = containerCords.left;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemLeftBound = cords.left - containerLeft + x;
          elemRightBound = elemLeftBound + cords.width;
        }

        var offsetX = x - _this2.props.offset;
        isInside = offsetX >= Math.floor(elemLeftBound) && offsetX < Math.floor(elemRightBound);
        isOutside = offsetX < Math.floor(elemLeftBound) || offsetX >= Math.floor(elemRightBound);
      } else {
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var _containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = _containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var _cords = element.getBoundingClientRect();
          elemTopBound = _cords.top - containerTop + y;
          elemBottomBound = elemTopBound + _cords.height;
        }

        var offsetY = y - _this2.props.offset;
        isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
      }

      var activeLink = scroller.getActiveLink();

      if (isOutside) {
        if (to === activeLink) {
          scroller.setActiveLink(void 0);
        }

        if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
          var _props$saveHashHistor = _this2.props.saveHashHistory,
              saveHashHistory = _props$saveHashHistor === undefined ? false : _props$saveHashHistor;

          _scrollHash2.default.changeHash("", saveHashHistory);
        }

        if (_this2.props.spy && _this2.state.active) {
          _this2.setState({ active: false });
          _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
        }
      }

      if (isInside && (activeLink !== to || _this2.state.active === false)) {
        scroller.setActiveLink(to);

        var _props$saveHashHistor2 = _this2.props.saveHashHistory,
            _saveHashHistory = _props$saveHashHistor2 === undefined ? false : _props$saveHashHistor2;

        _this2.props.hashSpy && _scrollHash2.default.changeHash(to, _saveHashHistory);

        if (_this2.props.spy) {
          _this2.setState({ active: true });
          _this2.props.onSetActive && _this2.props.onSetActive(to, element);
        }
      }
    };
  };

  ;

  Link.propTypes = protoTypes;

  Link.defaultProps = { offset: 0 };

  return Link;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-spy.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-spy.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The eventHandler will execute at a rate of 15fps
var eventThrottler = function eventThrottler(eventHandler) {
  return (0, _lodash2.default)(eventHandler, 66);
};

var scrollSpy = {

  spyCallbacks: [],
  spySetState: [],
  scrollSpyContainers: [],

  mount: function mount(scrollSpyContainer) {
    if (scrollSpyContainer) {
      var eventHandler = eventThrottler(function (event) {
        scrollSpy.scrollHandler(scrollSpyContainer);
      });
      scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
      (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
    }
  },
  isMounted: function isMounted(scrollSpyContainer) {
    return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
  },
  currentPositionX: function currentPositionX(scrollSpyContainer) {
    if (scrollSpyContainer === document) {
      var supportPageOffset = window.pageYOffset !== undefined;
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      return supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    } else {
      return scrollSpyContainer.scrollLeft;
    }
  },
  currentPositionY: function currentPositionY(scrollSpyContainer) {
    if (scrollSpyContainer === document) {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    } else {
      return scrollSpyContainer.scrollTop;
    }
  },
  scrollHandler: function scrollHandler(scrollSpyContainer) {
    var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
    callbacks.forEach(function (c) {
      return c(scrollSpy.currentPositionX(scrollSpyContainer), scrollSpy.currentPositionY(scrollSpyContainer));
    });
  },
  addStateHandler: function addStateHandler(handler) {
    scrollSpy.spySetState.push(handler);
  },
  addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
    var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];

    if (!container.spyCallbacks) {
      container.spyCallbacks = [];
    }

    container.spyCallbacks.push(handler);

    handler(scrollSpy.currentPositionX(scrollSpyContainer), scrollSpy.currentPositionY(scrollSpyContainer));
  },
  updateStates: function updateStates() {
    scrollSpy.spySetState.forEach(function (s) {
      return s();
    });
  },
  unmount: function unmount(stateHandler, spyHandler) {
    scrollSpy.scrollSpyContainers.forEach(function (c) {
      return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
    });

    if (scrollSpy.spySetState && scrollSpy.spySetState.length) {
      scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
    }

    document.removeEventListener('scroll', scrollSpy.scrollHandler);
  },


  update: function update() {
    return scrollSpy.scrollSpyContainers.forEach(function (c) {
      return scrollSpy.scrollHandler(c);
    });
  }
};

exports.default = scrollSpy;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroller.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroller.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _animateScroll = __webpack_require__(/*! ./animate-scroll */ "./node_modules/react-scroll/modules/mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollEvents = __webpack_require__(/*! ./scroll-events */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __mapped = {};
var __activeLink = void 0;

exports.default = {

  unmount: function unmount() {
    __mapped = {};
  },

  register: function register(name, element) {
    __mapped[name] = element;
  },

  unregister: function unregister(name) {
    delete __mapped[name];
  },

  get: function get(name) {
    return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
  },

  setActiveLink: function setActiveLink(link) {
    return __activeLink = link;
  },

  getActiveLink: function getActiveLink() {
    return __activeLink;
  },

  scrollTo: function scrollTo(to, props) {

    var target = this.get(to);

    if (!target) {
      console.warn("target Element not found");
      return;
    }

    props = _extends({}, props, { absolute: false });

    var containerId = props.containerId;
    var container = props.container;

    var containerElement = void 0;
    if (containerId) {
      containerElement = document.getElementById(containerId);
    } else if (container && container.nodeType) {
      containerElement = container;
    } else {
      containerElement = document;
    }

    props.absolute = true;

    var horizontal = props.horizontal;
    var scrollOffset = _utils2.default.scrollOffset(containerElement, target, horizontal) + (props.offset || 0);

    /*
     * if animate is not provided just scroll into the view
     */
    if (!props.smooth) {
      if (_scrollEvents2.default.registered['begin']) {
        _scrollEvents2.default.registered['begin'](to, target);
      }

      if (containerElement === document) {
        if (props.horizontal) {
          window.scrollTo(scrollOffset, 0);
        } else {
          window.scrollTo(0, scrollOffset);
        }
      } else {
        containerElement.scrollTop = scrollOffset;
      }

      if (_scrollEvents2.default.registered['end']) {
        _scrollEvents2.default.registered['end'](to, target);
      }

      return;
    }

    /*
     * Animate scrolling
     */

    _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/smooth.js":
/*!************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/smooth.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */
  defaultEasing: function defaultEasing(x) {
    if (x < 0.5) {
      return Math.pow(x * 2, 2) / 2;
    }
    return 1 - Math.pow((1 - x) * 2, 2) / 2;
  },
  /*
   * https://gist.github.com/gre/1650294
   */
  // no easing, no acceleration
  linear: function linear(x) {
    return x;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(x) {
    return x * x;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(x) {
    return x * (2 - x);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(x) {
    return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
  },
  // accelerating from zero velocity 
  easeInCubic: function easeInCubic(x) {
    return x * x * x;
  },
  // decelerating to zero velocity π
  easeOutCubic: function easeOutCubic(x) {
    return --x * x * x + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function easeInOutCubic(x) {
    return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function easeInQuart(x) {
    return x * x * x * x;
  },
  // decelerating to zero velocity 
  easeOutQuart: function easeOutQuart(x) {
    return 1 - --x * x * x * x;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(x) {
    return x < .5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(x) {
    return x * x * x * x * x;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(x) {
    return 1 + --x * x * x * x * x;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function easeInOutQuint(x) {
    return x < .5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var updateHash = function updateHash(hash, historyUpdate) {
  var hashVal = hash.indexOf("#") === 0 ? hash.substring(1) : hash;
  var hashToUpdate = hashVal ? "#" + hashVal : "";
  var curLoc = window && window.location;
  var urlToPush = hashToUpdate ? curLoc.pathname + curLoc.search + hashToUpdate : curLoc.pathname + curLoc.search;
  historyUpdate ? history.pushState(null, "", urlToPush) : history.replaceState(null, "", urlToPush);
};

var getHash = function getHash() {
  return window.location.hash.replace(/^#/, "");
};

var filterElementInContainer = function filterElementInContainer(container) {
  return function (element) {
    return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
  };
};

var scrollOffset = function scrollOffset(c, t, horizontal) {
  if (horizontal) {
    return c === document ? t.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(c).position !== "static" ? t.offsetLeft : t.offsetLeft - c.offsetLeft;
  } else {
    return c === document ? t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) : getComputedStyle(c).position !== "static" ? t.offsetTop : t.offsetTop - c.offsetTop;
  }
};
exports.default = {
  updateHash: updateHash,
  getHash: getHash,
  filterElementInContainer: filterElementInContainer,
  scrollOffset: scrollOffset
};

/***/ }),

/***/ "./node_modules/react-use-gesture/dist/reactusegesture.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-use-gesture/dist/reactusegesture.esm.js ***!
  \********************************************************************/
/*! exports provided: addV, rubberbandIfOutOfBounds, subV, useDrag, useGesture, useHover, useMove, usePinch, useScroll, useWheel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addV", function() { return addV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rubberbandIfOutOfBounds", function() { return rubberbandIfOutOfBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subV", function() { return subV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDrag", function() { return useDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGesture", function() { return useGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHover", function() { return useHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMove", function() { return useMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePinch", function() { return usePinch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScroll", function() { return useScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWheel", function() { return useWheel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// vector add
function addV(v1, v2) {
  return v1.map(function (v, i) {
    return v + v2[i];
  });
} // vector substract

function subV(v1, v2) {
  return v1.map(function (v, i) {
    return v - v2[i];
  });
}
/**
 * Calculates distance
 * @param movement the difference between current and initial vectors
 * @returns distance
 */

function calculateDistance(movement) {
  return Math.hypot.apply(Math, movement);
}
function calculateAllGeometry(movement, delta) {
  if (delta === void 0) {
    delta = movement;
  }

  var dl = calculateDistance(delta);
  var alpha = dl === 0 ? 0 : 1 / dl;
  var direction = delta.map(function (v) {
    return alpha * v;
  });
  var distance = calculateDistance(movement);
  return {
    distance: distance,
    direction: direction
  };
}
/**
 * Calculates all kinematics
 * @template T the expected vector type
 * @param movement the difference between current and initial vectors
 * @param delta the difference between current and previous vectors
 * @param delta_t the time difference between current and previous timestamps
 * @returns all kinematics
 */

function calculateAllKinematics(movement, delta, dt) {
  var dl = calculateDistance(delta);
  var alpha = dl === 0 ? 0 : 1 / dl;
  var beta = dt === 0 ? 0 : 1 / dt;
  var velocity = beta * dl;
  var velocities = delta.map(function (v) {
    return beta * v;
  });
  var direction = delta.map(function (v) {
    return alpha * v;
  });
  var distance = calculateDistance(movement);
  return {
    velocities: velocities,
    velocity: velocity,
    distance: distance,
    direction: direction
  };
}
/**
 * Because IE doesn't support `Math.sign` function, so we use the polyfill version of the function.
 * This polyfill function is suggested by Mozilla:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign#Polyfill
 * @param x target number
 */

function sign(x) {
  if (Math.sign) return Math.sign(x);
  return Number(x > 0) - Number(x < 0) || +x;
}

function minMax(value, min, max) {
  return Math.max(min, Math.min(value, max));
} // Based on @aholachek ;)
// https://twitter.com/chpwn/status/285540192096497664
// iOS constant = 0.55
// https://medium.com/@nathangitter/building-fluid-interfaces-ios-swift-9732bb934bf5


function rubberband2(distance, constant) {
  // default constant from the article is 0.7
  return Math.pow(distance, constant * 5);
}

function rubberband(distance, dimension, constant) {
  if (dimension === 0 || Math.abs(dimension) === Infinity) return rubberband2(distance, constant);
  return distance * dimension * constant / (dimension + constant * distance);
}

function rubberbandIfOutOfBounds(position, min, max, constant) {
  if (constant === void 0) {
    constant = 0.15;
  }

  if (constant === 0) return minMax(position, min, max);
  if (position < min) return -rubberband(min - position, max - min, constant) + min;
  if (position > max) return +rubberband(position - max, max - min, constant) + max;
  return position;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function noop() {}
/**
 * TODO Beware that only optimized cases are covered in tests =)
 * TODO Need to cover general case as well
 *
 * @param fns
 */

function chainFns() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) return noop;
  if (fns.length === 1) return fns[0];
  return function () {
    var result;

    for (var _iterator = _createForOfIteratorHelperLoose(fns), _step; !(_step = _iterator()).done;) {
      var fn = _step.value;
      result = fn.apply(this, arguments) || result;
    }

    return result;
  };
}
/**
 * Expects a simple value or 2D vector (an array with 2 elements) and
 * always returns 2D vector. If simple value is passed, returns a
 * vector with this value as both coordinates.
 *
 * @param value
 */

function ensureVector(value, fallback) {
  if (value === undefined) {
    if (fallback === undefined) {
      throw new Error('Must define fallback value if undefined is expected');
    }

    value = fallback;
  }

  if (Array.isArray(value)) return value;
  return [value, value];
}
/**
 * Helper for defining a default value
 *
 * @param value
 * @param fallback
 */

function assignDefault(value, fallback) {
  return Object.assign({}, fallback, value || {});
}
/**
 * Resolves getters (functions) by calling them
 * If simple value is given it just passes through
 *
 * @param v
 */

function valueFn(v) {
  if (typeof v === 'function') {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    // @ts-ignore
    return v.apply(void 0, args);
  } else {
    return v;
  }
}

function resolveWith(config, resolvers) {
  if (config === void 0) {
    config = {};
  }

  var result = {};

  for (var _i = 0, _Object$entries = Object.entries(resolvers); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _Object$entries[_i],
        key = _Object$entries$_i[0],
        resolver = _Object$entries$_i[1];

    switch (typeof resolver) {
      case 'function':
        result[key] = resolver.call(result, config[key], key, config);
        break;

      case 'object':
        result[key] = resolveWith(config[key], resolver);
        break;

      case 'boolean':
        if (resolver) result[key] = config[key];
        break;
    }
  }

  return result;
}

var WEBKIT_DISTANCE_SCALE_FACTOR = 260;
/**
 * Whether the browser supports GestureEvent (ie Safari)
 * @returns true if the browser supports gesture event
 */

function supportsGestureEvents() {
  try {
    // TODO [TS] possibly find GestureEvent definitions?
    // @ts-ignore: no type definitions for webkit GestureEvents
    return 'constructor' in GestureEvent;
  } catch (e) {
    return false;
  }
}
function supportsTouchEvents() {
  return typeof window !== 'undefined' && 'ontouchstart' in window;
}

function getEventTouches(event) {
  if ('pointerId' in event) return null;
  return event.type === 'touchend' ? event.changedTouches : event.targetTouches;
}

function getPointerIds(event) {
  if ('pointerId' in event) return [event.pointerId];
  return Array.from(getEventTouches(event)).map(function (t) {
    return t.identifier;
  });
}
function getGenericEventData(event) {
  var buttons = 'buttons' in event ? event.buttons : 0;
  var shiftKey = event.shiftKey,
      altKey = event.altKey,
      metaKey = event.metaKey,
      ctrlKey = event.ctrlKey; // TODO check if this might create some overrides?

  return {
    buttons: buttons,
    shiftKey: shiftKey,
    altKey: altKey,
    metaKey: metaKey,
    ctrlKey: ctrlKey
  };
}

var identity = function identity(xy) {
  return xy;
};
/**
 * Gets pointer event values.
 * @param event
 * @returns pointer event values
 */


function getPointerEventValues(event, transform) {
  if (transform === void 0) {
    transform = identity;
  }

  var touchEvents = getEventTouches(event);

  var _ref = touchEvents ? touchEvents[0] : event,
      clientX = _ref.clientX,
      clientY = _ref.clientY;

  return transform([clientX, clientY]);
}
/**
 * Gets two touches event data
 * @param event
 * @returns two touches event data
 */

function getTwoTouchesEventValues(event, pointerIds, transform) {
  if (transform === void 0) {
    transform = identity;
  }

  var _Array$from$filter = Array.from(event.touches).filter(function (t) {
    return pointerIds.includes(t.identifier);
  }),
      A = _Array$from$filter[0],
      B = _Array$from$filter[1];

  var dx = B.clientX - A.clientX;
  var dy = B.clientY - A.clientY;
  var cx = (B.clientX + A.clientX) / 2;
  var cy = (B.clientY + A.clientY) / 2; // const e: any = 'nativeEvent' in event ? event.nativeEvent : event

  var distance = Math.hypot(dx, dy); // FIXME rotation has inconsistant values so we're not using it atm
  // const angle = (e.rotation as number) ?? -(Math.atan2(dx, dy) * 180) / Math.PI

  var angle = -(Math.atan2(dx, dy) * 180) / Math.PI;
  var values = transform([distance, angle]);
  var origin = transform([cx, cy]);
  return {
    values: values,
    origin: origin
  };
}
/**
 * Gets scroll event values
 * @param event
 * @returns scroll event values
 */

function getScrollEventValues(event, transform) {
  if (transform === void 0) {
    transform = identity;
  }

  // If the currentTarget is the window then we return the scrollX/Y position.
  // If not (ie the currentTarget is a DOM element), then we return scrollLeft/Top
  var _event$currentTarget = event.currentTarget,
      scrollX = _event$currentTarget.scrollX,
      scrollY = _event$currentTarget.scrollY,
      scrollLeft = _event$currentTarget.scrollLeft,
      scrollTop = _event$currentTarget.scrollTop;
  return transform([scrollX || scrollLeft || 0, scrollY || scrollTop || 0]);
} // wheel delta defaults from https://github.com/facebookarchive/fixed-data-table/blob/master/src/vendor_upstream/dom/normalizeWheel.js

var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;
/**
 * Gets wheel event values.
 * @param event
 * @returns wheel event values
 */

function getWheelEventValues(event, transform) {
  if (transform === void 0) {
    transform = identity;
  }

  var deltaX = event.deltaX,
      deltaY = event.deltaY,
      deltaMode = event.deltaMode; // normalize wheel values, especially for Firefox

  if (deltaMode === 1) {
    deltaX *= LINE_HEIGHT;
    deltaY *= LINE_HEIGHT;
  } else if (deltaMode === 2) {
    deltaX *= PAGE_HEIGHT;
    deltaY *= PAGE_HEIGHT;
  }

  return transform([deltaX, deltaY]);
}
/**
 * Gets webkit gesture event values.
 * @param event
 * @returns webkit gesture event values
 */

function getWebkitGestureEventValues(event, transform) {
  if (transform === void 0) {
    transform = identity;
  }

  return transform([event.scale * WEBKIT_DISTANCE_SCALE_FACTOR, event.rotation]);
}

var DEFAULT_DRAG_DELAY = 180;
var DEFAULT_RUBBERBAND = 0.15;
var DEFAULT_SWIPE_VELOCITY = 0.5;
var DEFAULT_SWIPE_DISTANCE = 60;
var InternalGestureOptionsNormalizers = {
  threshold: function threshold(value) {
    if (value === void 0) {
      value = 0;
    }

    return ensureVector(value);
  },
  rubberband: function rubberband(value) {
    if (value === void 0) {
      value = 0;
    }

    switch (value) {
      case true:
        return ensureVector(DEFAULT_RUBBERBAND);

      case false:
        return ensureVector(0);

      default:
        return ensureVector(value);
    }
  },
  enabled: function enabled(value) {
    if (value === void 0) {
      value = true;
    }

    return value;
  },
  triggerAllEvents: function triggerAllEvents(value) {
    if (value === void 0) {
      value = false;
    }

    return value;
  },
  initial: function initial(value) {
    if (value === void 0) {
      value = 0;
    }

    if (typeof value === 'function') return value;
    return ensureVector(value);
  },
  transform: true
};

var InternalCoordinatesOptionsNormalizers = /*#__PURE__*/_extends({}, InternalGestureOptionsNormalizers, {
  axis: true,
  lockDirection: function lockDirection(value) {
    if (value === void 0) {
      value = false;
    }

    return value;
  },
  bounds: function bounds(value) {
    if (value === void 0) {
      value = {};
    }

    if (typeof value === 'function') return function (state) {
      return InternalCoordinatesOptionsNormalizers.bounds(value(state));
    };
    var _value2 = value,
        _value2$left = _value2.left,
        left = _value2$left === void 0 ? -Infinity : _value2$left,
        _value2$right = _value2.right,
        right = _value2$right === void 0 ? Infinity : _value2$right,
        _value2$top = _value2.top,
        top = _value2$top === void 0 ? -Infinity : _value2$top,
        _value2$bottom = _value2.bottom,
        bottom = _value2$bottom === void 0 ? Infinity : _value2$bottom;
    return [[left, right], [top, bottom]];
  }
});

var isBrowser = typeof window !== 'undefined' && window.document && window.document.createElement;
var InternalGenericOptionsNormalizers = {
  enabled: function enabled(value) {
    if (value === void 0) {
      value = true;
    }

    return value;
  },
  domTarget: true,
  window: /*#__PURE__*/function (_window) {
    function window(_x) {
      return _window.apply(this, arguments);
    }

    window.toString = function () {
      return _window.toString();
    };

    return window;
  }(function (value) {
    if (value === void 0) {
      value = isBrowser ? window : undefined;
    }

    return value;
  }),
  eventOptions: function eventOptions(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$passive = _ref.passive,
        passive = _ref$passive === void 0 ? true : _ref$passive,
        _ref$capture = _ref.capture,
        capture = _ref$capture === void 0 ? false : _ref$capture;

    return {
      passive: passive,
      capture: capture
    };
  },
  transform: true
};

var InternalDistanceAngleOptionsNormalizers = /*#__PURE__*/_extends({}, InternalGestureOptionsNormalizers, {
  bounds: function bounds(_value, _key, _ref2) {
    var _ref2$distanceBounds = _ref2.distanceBounds,
        distanceBounds = _ref2$distanceBounds === void 0 ? {} : _ref2$distanceBounds,
        _ref2$angleBounds = _ref2.angleBounds,
        angleBounds = _ref2$angleBounds === void 0 ? {} : _ref2$angleBounds;

    var _distanceBounds = function _distanceBounds(state) {
      var D = assignDefault(valueFn(distanceBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [D.min, D.max];
    };

    var _angleBounds = function _angleBounds(state) {
      var A = assignDefault(valueFn(angleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [A.min, A.max];
    };

    if (typeof distanceBounds !== 'function' && typeof angleBounds !== 'function') return [_distanceBounds(), _angleBounds()];
    return function (state) {
      return [_distanceBounds(state), _angleBounds(state)];
    };
  }
});

var InternalDragOptionsNormalizers = /*#__PURE__*/_extends({}, InternalCoordinatesOptionsNormalizers, {
  useTouch: function useTouch(value) {
    if (value === void 0) {
      value = false;
    }

    return value && supportsTouchEvents();
  },
  experimental_preventWindowScrollY: function experimental_preventWindowScrollY(value) {
    if (value === void 0) {
      value = false;
    }

    return value;
  },
  threshold: function threshold(v, _k, _ref3) {
    var _ref3$filterTaps = _ref3.filterTaps,
        filterTaps = _ref3$filterTaps === void 0 ? false : _ref3$filterTaps,
        _ref3$lockDirection = _ref3.lockDirection,
        lockDirection = _ref3$lockDirection === void 0 ? false : _ref3$lockDirection,
        _ref3$axis = _ref3.axis,
        axis = _ref3$axis === void 0 ? undefined : _ref3$axis;
    var A = ensureVector(v, filterTaps ? 3 : lockDirection ? 1 : axis ? 1 : 0);
    this.filterTaps = filterTaps;
    return A;
  },
  swipeVelocity: function swipeVelocity(v) {
    if (v === void 0) {
      v = DEFAULT_SWIPE_VELOCITY;
    }

    return ensureVector(v);
  },
  swipeDistance: function swipeDistance(v) {
    if (v === void 0) {
      v = DEFAULT_SWIPE_DISTANCE;
    }

    return ensureVector(v);
  },
  delay: function delay(value) {
    if (value === void 0) {
      value = 0;
    }

    switch (value) {
      case true:
        return DEFAULT_DRAG_DELAY;

      case false:
        return 0;

      default:
        return value;
    }
  }
});

function getInternalGenericOptions(config) {
  if (config === void 0) {
    config = {};
  }

  // TODO warn when passive is set to true and domTarget is undefined
  return resolveWith(config, InternalGenericOptionsNormalizers);
}
function getInternalCoordinatesOptions(config) {
  if (config === void 0) {
    config = {};
  }

  return resolveWith(config, InternalCoordinatesOptionsNormalizers);
}
function getInternalDistanceAngleOptions(config) {
  if (config === void 0) {
    config = {};
  }

  return resolveWith(config, InternalDistanceAngleOptionsNormalizers);
}
function getInternalDragOptions(config) {
  if (config === void 0) {
    config = {};
  }

  return resolveWith(config, InternalDragOptionsNormalizers);
}

function _buildMoveConfig(_ref) {
  var domTarget = _ref.domTarget,
      eventOptions = _ref.eventOptions,
      window = _ref.window,
      enabled = _ref.enabled,
      rest = _objectWithoutPropertiesLoose(_ref, ["domTarget", "eventOptions", "window", "enabled"]);

  var opts = getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window,
    enabled: enabled
  });
  opts.move = getInternalCoordinatesOptions(rest);
  return opts;
}
function _buildHoverConfig(_ref2) {
  var domTarget = _ref2.domTarget,
      eventOptions = _ref2.eventOptions,
      window = _ref2.window,
      enabled = _ref2.enabled,
      rest = _objectWithoutPropertiesLoose(_ref2, ["domTarget", "eventOptions", "window", "enabled"]);

  var opts = getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window,
    enabled: enabled
  });
  opts.hover = _extends({
    enabled: true
  }, rest);
  return opts;
}
function _buildDragConfig(_ref3) {
  var domTarget = _ref3.domTarget,
      eventOptions = _ref3.eventOptions,
      window = _ref3.window,
      enabled = _ref3.enabled,
      rest = _objectWithoutPropertiesLoose(_ref3, ["domTarget", "eventOptions", "window", "enabled"]);

  var opts = getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window,
    enabled: enabled
  });
  opts.drag = getInternalDragOptions(rest);
  return opts;
}
function _buildPinchConfig(_ref4) {
  var domTarget = _ref4.domTarget,
      eventOptions = _ref4.eventOptions,
      window = _ref4.window,
      enabled = _ref4.enabled,
      rest = _objectWithoutPropertiesLoose(_ref4, ["domTarget", "eventOptions", "window", "enabled"]);

  var opts = getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window,
    enabled: enabled
  });
  opts.pinch = getInternalDistanceAngleOptions(rest);
  return opts;
}
function _buildScrollConfig(_ref5) {
  var domTarget = _ref5.domTarget,
      eventOptions = _ref5.eventOptions,
      window = _ref5.window,
      enabled = _ref5.enabled,
      rest = _objectWithoutPropertiesLoose(_ref5, ["domTarget", "eventOptions", "window", "enabled"]);

  var opts = getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window,
    enabled: enabled
  });
  opts.scroll = getInternalCoordinatesOptions(rest);
  return opts;
}
function _buildWheelConfig(_ref6) {
  var domTarget = _ref6.domTarget,
      eventOptions = _ref6.eventOptions,
      window = _ref6.window,
      enabled = _ref6.enabled,
      rest = _objectWithoutPropertiesLoose(_ref6, ["domTarget", "eventOptions", "window", "enabled"]);

  var opts = getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window,
    enabled: enabled
  });
  opts.wheel = getInternalCoordinatesOptions(rest);
  return opts;
}
function buildComplexConfig(config, actions) {
  if (config === void 0) {
    config = {};
  }

  if (actions === void 0) {
    actions = new Set();
  }

  var _config = config,
      drag = _config.drag,
      wheel = _config.wheel,
      move = _config.move,
      scroll = _config.scroll,
      pinch = _config.pinch,
      hover = _config.hover,
      eventOptions = _config.eventOptions,
      window = _config.window,
      transform = _config.transform,
      domTarget = _config.domTarget,
      enabled = _config.enabled;
  var mergedConfig = getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    transform: transform,
    window: window,
    enabled: enabled
  });
  if (actions.has('onDrag')) mergedConfig.drag = getInternalDragOptions(drag);
  if (actions.has('onWheel')) mergedConfig.wheel = getInternalCoordinatesOptions(wheel);
  if (actions.has('onScroll')) mergedConfig.scroll = getInternalCoordinatesOptions(scroll);
  if (actions.has('onMove')) mergedConfig.move = getInternalCoordinatesOptions(move);
  if (actions.has('onPinch')) mergedConfig.pinch = getInternalDistanceAngleOptions(pinch);
  if (actions.has('onHover')) mergedConfig.hover = _extends({
    enabled: true
  }, hover);
  return mergedConfig;
}

function getInitial(mixed) {
  return _extends({
    _active: false,
    _blocked: false,
    _intentional: [false, false],
    _movement: [0, 0],
    _initial: [0, 0],
    _bounds: [[-Infinity, Infinity], [-Infinity, Infinity]],
    _lastEventType: undefined,
    _dragStarted: false,
    _dragPreventScroll: false,
    _dragIsTap: true,
    _dragDelayed: false,
    event: undefined,
    intentional: false,
    values: [0, 0],
    velocities: [0, 0],
    delta: [0, 0],
    movement: [0, 0],
    offset: [0, 0],
    lastOffset: [0, 0],
    direction: [0, 0],
    initial: [0, 0],
    previous: [0, 0],
    first: false,
    last: false,
    active: false,
    timeStamp: 0,
    startTime: 0,
    elapsedTime: 0,
    cancel: noop,
    canceled: false,
    memo: undefined,
    args: undefined
  }, mixed);
}

function getInitialState() {
  var shared = {
    hovering: false,
    scrolling: false,
    wheeling: false,
    dragging: false,
    moving: false,
    pinching: false,
    touches: 0,
    buttons: 0,
    down: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    ctrlKey: false,
    locked: false
  };
  var drag = getInitial({
    _pointerId: undefined,
    axis: undefined,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0,
    tap: false,
    swipe: [0, 0]
  });
  var pinch = getInitial({
    // @ts-expect-error when used _pointerIds we can assert its type will be [number, number]
    _pointerIds: [],
    da: [0, 0],
    vdva: [0, 0],
    // @ts-expect-error origin can never be passed as undefined in userland
    origin: undefined,
    turns: 0
  });
  var wheel = getInitial({
    axis: undefined,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  });
  var move = getInitial({
    axis: undefined,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  });
  var scroll = getInitial({
    axis: undefined,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  });
  return {
    shared: shared,
    drag: drag,
    pinch: pinch,
    wheel: wheel,
    move: move,
    scroll: scroll
  };
}

var RecognizersMap = /*#__PURE__*/new Map();

var identity$1 = function identity(xy) {
  return xy;
};
/**
 * @private
 * Recognizer abstract class.
 */


var Recognizer = /*#__PURE__*/function () {
  /**
   * Creates an instance of a gesture recognizer.
   * @param stateKey drag, move, pinch, etc.
   * @param controller the controller attached to the gesture
   * @param [args] the args that should be passed to the gesture handler
   */
  function Recognizer(controller, args) {
    var _this = this;

    if (args === void 0) {
      args = [];
    }

    this.controller = controller;
    this.args = args;
    this.debounced = true; // Convenience method to set a timeout for a given gesture

    this.setTimeout = function (callback, ms) {
      var _window;

      if (ms === void 0) {
        ms = 140;
      }

      clearTimeout(_this.controller.timeouts[_this.stateKey]);

      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      _this.controller.timeouts[_this.stateKey] = (_window = window).setTimeout.apply(_window, [callback, ms].concat(args));
    }; // Convenience method to clear a timeout for a given gesture


    this.clearTimeout = function () {
      clearTimeout(_this.controller.timeouts[_this.stateKey]);
    };
    /**
     * Fires the gesture handler
     */


    this.fireGestureHandler = function (forceFlag) {
      if (forceFlag === void 0) {
        forceFlag = false;
      }

      /**
       * If the gesture has been blocked (this can happen when the gesture has started in an unwanted direction),
       * clean everything and don't do anything.
       */
      if (_this.state._blocked) {
        // we need debounced gestures to end by themselves
        if (!_this.debounced) {
          _this.state._active = false;

          _this.clean();
        }

        return null;
      } // If the gesture has no intentional dimension, don't fire the handler.


      if (!forceFlag && !_this.state.intentional && !_this.config.triggerAllEvents) return null;

      if (_this.state.intentional) {
        var prev_active = _this.state.active;
        var next_active = _this.state._active;
        _this.state.active = next_active;
        _this.state.first = next_active && !prev_active;
        _this.state.last = prev_active && !next_active;
        _this.controller.state.shared[_this.ingKey] = next_active; // Sets dragging, pinching, etc. to the gesture active state
      }

      var touches = _this.controller.pointerIds.size || _this.controller.touchIds.size;
      var down = _this.controller.state.shared.buttons > 0 || touches > 0;

      var state = _extends({}, _this.controller.state.shared, _this.state, _this.mapStateValues(_this.state), {
        locked: !!document.pointerLockElement,
        touches: touches,
        down: down
      }); // @ts-expect-error


      var newMemo = _this.handler(state); // Sets memo to the returned value of the handler (unless it's not undefined)


      _this.state.memo = newMemo !== void 0 ? newMemo : _this.state.memo;
      return state;
    };
  } // Returns the gesture config


  var _proto = Recognizer.prototype;

  // Convenience method to update the shared state
  _proto.updateSharedState = function updateSharedState(sharedState) {
    Object.assign(this.controller.state.shared, sharedState);
  } // Convenience method to update the gesture state
  ;

  _proto.updateGestureState = function updateGestureState(gestureState) {
    Object.assign(this.state, gestureState);
  }
  /**
   * Returns state properties depending on the movement and state.
   *
   * Should be overriden for custom behavior, doesn't do anything in the implementation
   * below.
   */
  ;

  _proto.checkIntentionality = function checkIntentionality(_intentional, _movement) {
    return {
      _intentional: _intentional,
      _blocked: false
    };
  }
  /**
   * Returns basic movement properties for the gesture based on the next values and current state.
   */
  ;

  _proto.getMovement = function getMovement(values) {
    var _this$config = this.config,
        rubberband = _this$config.rubberband,
        T = _this$config.threshold;
    var _this$state = this.state,
        _bounds = _this$state._bounds,
        _initial = _this$state._initial,
        _active = _this$state._active,
        wasIntentional = _this$state._intentional,
        lastOffset = _this$state.lastOffset,
        prevMovement = _this$state.movement;
    var M = this.getInternalMovement(values, this.state);

    var _T = this.transform(T).map(Math.abs);

    var i0 = wasIntentional[0] === false ? getIntentionalDisplacement(M[0], _T[0]) : wasIntentional[0];
    var i1 = wasIntentional[1] === false ? getIntentionalDisplacement(M[1], _T[1]) : wasIntentional[1]; // Get gesture specific state properties based on intentionality and movement.

    var intentionalityCheck = this.checkIntentionality([i0, i1], M);

    if (intentionalityCheck._blocked) {
      return _extends({}, intentionalityCheck, {
        _movement: M,
        delta: [0, 0]
      });
    }

    var _intentional = intentionalityCheck._intentional;
    var _movement = M;
    /**
     * The movement sent to the handler has 0 in its dimensions when intentionality is false.
     * It is calculated from the actual movement minus the threshold.
     */

    var movement = [_intentional[0] !== false ? M[0] - _intentional[0] : 0, _intentional[1] !== false ? M[1] - _intentional[1] : 0];
    var offset = addV(movement, lastOffset);
    /**
     * Rubberband should be 0 when the gesture is no longer active, so that movement
     * and offset can return within their bounds.
     */

    var _rubberband = _active ? rubberband : [0, 0];

    movement = computeRubberband(_bounds, addV(movement, _initial), _rubberband);
    return _extends({}, intentionalityCheck, {
      intentional: _intentional[0] !== false || _intentional[1] !== false,
      _initial: _initial,
      _movement: _movement,
      movement: movement,
      values: values,
      offset: computeRubberband(_bounds, offset, _rubberband),
      delta: subV(movement, prevMovement)
    });
  } // Cleans the gesture. Can be overriden by gestures.
  ;

  _proto.clean = function clean() {
    this.clearTimeout();
  };

  _createClass(Recognizer, [{
    key: "config",
    get: function get() {
      return this.controller.config[this.stateKey];
    } // Is the gesture enabled

  }, {
    key: "enabled",
    get: function get() {
      return this.controller.config.enabled && this.config.enabled;
    } // Returns the controller state for a given gesture

  }, {
    key: "state",
    get: function get() {
      return this.controller.state[this.stateKey];
    } // Returns the gesture handler

  }, {
    key: "handler",
    get: function get() {
      return this.controller.handlers[this.stateKey];
    }
  }, {
    key: "transform",
    get: function get() {
      return this.config.transform || this.controller.config.transform || identity$1;
    }
  }]);

  return Recognizer;
}(); //--------------------------------------------

function getIntentionalDisplacement(movement, threshold) {
  if (Math.abs(movement) >= threshold) {
    return sign(movement) * threshold;
  } else {
    return false;
  }
}

function computeRubberband(bounds, _ref, _ref2) {
  var Vx = _ref[0],
      Vy = _ref[1];
  var Rx = _ref2[0],
      Ry = _ref2[1];
  var _bounds$ = bounds[0],
      X1 = _bounds$[0],
      X2 = _bounds$[1],
      _bounds$2 = bounds[1],
      Y1 = _bounds$2[0],
      Y2 = _bounds$2[1];
  return [rubberbandIfOutOfBounds(Vx, X1, X2, Rx), rubberbandIfOutOfBounds(Vy, Y1, Y2, Ry)];
}
/**
 * Returns a generic, common payload for all gestures from an event.
 */


function getGenericPayload(_ref3, event, isStartEvent) {
  var state = _ref3.state;
  var timeStamp = event.timeStamp,
      _lastEventType = event.type;
  var previous = state.values;
  var elapsedTime = isStartEvent ? 0 : timeStamp - state.startTime;
  return {
    _lastEventType: _lastEventType,
    event: event,
    timeStamp: timeStamp,
    elapsedTime: elapsedTime,
    previous: previous
  };
}
/**
 * Returns the reinitialized start state for the gesture.
 * Should be common to all gestures.
 */

function getStartGestureState(_ref4, values, event) {
  var state = _ref4.state,
      config = _ref4.config,
      stateKey = _ref4.stateKey,
      args = _ref4.args;
  var offset = state.offset;
  var startTime = event.timeStamp;
  var initial = config.initial,
      bounds = config.bounds;

  var _state = _extends({}, getInitialState()[stateKey], {
    _active: true,
    args: args,
    values: values,
    initial: values,
    offset: offset,
    lastOffset: offset,
    startTime: startTime
  });

  return _extends({}, _state, {
    _initial: valueFn(initial, _state),
    _bounds: valueFn(bounds, _state)
  });
}

function partial(func, state) {
  return function (event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    // @ts-ignore
    return func.call.apply(func, [this, _extends({}, state, {
      event: event
    })].concat(args));
  };
}
/**
 * The controller will keep track of the state for all gestures and also keep
 * track of timeouts, and window listeners.
 */


var Controller = function Controller(classes) {
  var _this = this;

  this.classes = classes;
  this.pointerIds = new Set(); // register Pointer Events pointerIds

  this.touchIds = new Set(); // register Touch Events identifiers

  this.supportsTouchEvents = supportsTouchEvents();
  this.supportsGestureEvents = supportsGestureEvents();

  this.bind = function () {
    var bindings = {};

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    for (var _iterator = _createForOfIteratorHelperLoose(_this.classes), _step; !(_step = _iterator()).done;) {
      var RecognizerClass = _step.value;
      new RecognizerClass(_this, args).addBindings(bindings);
    } // we also add event bindings for native handlers


    for (var _i = 0, _Object$entries = Object.entries(_this.nativeRefs); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _Object$entries[_i],
          event = _Object$entries$_i[0],
          handler = _Object$entries$_i[1];
      addBindings(bindings, event, partial(handler, _extends({}, _this.state.shared, {
        args: args
      })));
    }

    if (_this.config.domTarget) {
      // If config.domTarget is set we add event listeners to it and return the clean function.
      return updateDomListeners(_this, bindings);
    } else {
      // If not, we return an object that contains gesture handlers mapped to react handler event keys.
      return getPropsListener(_this, bindings);
    }
  };

  this.effect = function () {
    if (_this.config.domTarget) _this.bind();
    return _this.clean;
  };
  /**
   * Function ran on component unmount: cleans timeouts and removes dom listeners set by the bind function.
   */


  this.clean = function () {
    var domTarget = getDomTargetFromConfig(_this.config);
    var eventOptions = _this.config.eventOptions;
    if (domTarget) removeListeners(domTarget, takeAll(_this.domListeners), eventOptions);
    Object.values(_this.timeouts).forEach(clearTimeout);
    clearAllWindowListeners(_this);
  };

  this.state = getInitialState();
  this.timeouts = {};
  this.domListeners = [];
  this.windowListeners = {};
};
function addEventIds(controller, event) {
  var idList = 'pointerId' in event ? controller.pointerIds : controller.touchIds;
  getPointerIds(event).forEach(idList.add, idList);
}
function removeEventIds(controller, event) {
  var idList = 'pointerId' in event ? controller.pointerIds : controller.touchIds;
  getPointerIds(event).forEach(idList["delete"], idList);
}
function clearAllWindowListeners(controller) {
  var _controller$config = controller.config,
      el = _controller$config.window,
      eventOptions = _controller$config.eventOptions,
      windowListeners = controller.windowListeners;
  if (!el) return;

  for (var stateKey in windowListeners) {
    var handlers = windowListeners[stateKey];
    removeListeners(el, handlers, eventOptions);
  }

  controller.windowListeners = {};
}
function clearWindowListeners(_ref, stateKey, options) {
  var config = _ref.config,
      windowListeners = _ref.windowListeners;

  if (options === void 0) {
    options = config.eventOptions;
  }

  if (!config.window) return;
  removeListeners(config.window, windowListeners[stateKey], options);
  delete windowListeners[stateKey];
}
function updateWindowListeners(_ref2, stateKey, listeners, options) {
  var config = _ref2.config,
      windowListeners = _ref2.windowListeners;

  if (listeners === void 0) {
    listeners = [];
  }

  if (options === void 0) {
    options = config.eventOptions;
  }

  if (!config.window) return;
  removeListeners(config.window, windowListeners[stateKey], options);
  addListeners(config.window, windowListeners[stateKey] = listeners, options);
}

function updateDomListeners(_ref3, bindings) {
  var config = _ref3.config,
      domListeners = _ref3.domListeners;
  var domTarget = getDomTargetFromConfig(config);
  if (!domTarget) throw new Error('domTarget must be defined');
  var eventOptions = config.eventOptions;
  removeListeners(domTarget, takeAll(domListeners), eventOptions);

  for (var _i2 = 0, _Object$entries2 = Object.entries(bindings); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _Object$entries2[_i2],
        key = _Object$entries2$_i[0],
        fns = _Object$entries2$_i[1];
    var name = key.slice(2).toLowerCase();
    domListeners.push([name, chainFns.apply(void 0, fns)]);
  }

  addListeners(domTarget, domListeners, eventOptions);
}

function getPropsListener(_ref4, bindings) {
  var config = _ref4.config;
  var props = {};
  var captureString = config.eventOptions.capture ? 'Capture' : '';

  for (var _i3 = 0, _Object$entries3 = Object.entries(bindings); _i3 < _Object$entries3.length; _i3++) {
    var _Object$entries3$_i = _Object$entries3[_i3],
        event = _Object$entries3$_i[0],
        fns = _Object$entries3$_i[1];
    var fnsArray = Array.isArray(fns) ? fns : [fns];
    var key = event + captureString;
    props[key] = chainFns.apply(void 0, fnsArray);
  }

  return props;
}

function takeAll(array) {
  if (array === void 0) {
    array = [];
  }

  return array.splice(0, array.length);
}

function getDomTargetFromConfig(_ref5) {
  var domTarget = _ref5.domTarget;
  return domTarget && 'current' in domTarget ? domTarget.current : domTarget;
}
/**
 * bindings is an object which keys match ReactEventHandlerKeys.
 * Since a recognizer might want to bind a handler function to an event key already used by a previously
 * added recognizer, we need to make sure that each event key is an array of all the functions mapped for
 * that key.
 */


function addBindings(bindings, name, fn) {
  if (!bindings[name]) bindings[name] = [];
  bindings[name].push(fn);
}

function addListeners(el, listeners, options) {
  if (listeners === void 0) {
    listeners = [];
  }

  if (options === void 0) {
    options = {};
  }

  for (var _iterator2 = _createForOfIteratorHelperLoose(listeners), _step2; !(_step2 = _iterator2()).done;) {
    var _step2$value = _step2.value,
        eventName = _step2$value[0],
        eventHandler = _step2$value[1];
    el.addEventListener(eventName, eventHandler, options);
  }
}

function removeListeners(el, listeners, options) {
  if (listeners === void 0) {
    listeners = [];
  }

  if (options === void 0) {
    options = {};
  }

  for (var _iterator3 = _createForOfIteratorHelperLoose(listeners), _step3; !(_step3 = _iterator3()).done;) {
    var _step3$value = _step3.value,
        eventName = _step3$value[0],
        eventHandler = _step3$value[1];
    el.removeEventListener(eventName, eventHandler, options);
  }
}

/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Utility hook called by all gesture hooks and that will be responsible for the internals.
 *
 * @param handlers
 * @param classes
 * @param config
 * @param nativeHandlers - native handlers such as onClick, onMouseDown, etc.
 */

function useRecognizers(handlers, config, nativeHandlers) {
  if (nativeHandlers === void 0) {
    nativeHandlers = {};
  }

  var classes = resolveClasses(handlers);
  var controller = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    return new Controller(classes);
  }, []);
  controller.config = config;
  controller.handlers = handlers;
  controller.nativeRefs = nativeHandlers;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(controller.effect, []); // @ts-ignore

  if (controller.config.domTarget) return deprecationNoticeForDomTarget; // @ts-ignore

  return controller.bind;
}

function deprecationNoticeForDomTarget() {
  if (true) {
    console.warn("Deprecation notice: When the `domTarget` option is specified, you don't need to write `useEffect(bind, [bind])` anymore: event binding is now made handled internally to this lib.\n\nNext version won't return anything when `domTarget` is provided, therefore your code will break if you try to call `useEffect`.");
  }
}

function resolveClasses(internalHandlers) {
  var classes = new Set();
  if (internalHandlers.drag) classes.add(RecognizersMap.get('drag'));
  if (internalHandlers.wheel) classes.add(RecognizersMap.get('wheel'));
  if (internalHandlers.scroll) classes.add(RecognizersMap.get('scroll'));
  if (internalHandlers.move) classes.add(RecognizersMap.get('move'));
  if (internalHandlers.pinch) classes.add(RecognizersMap.get('pinch'));
  if (internalHandlers.hover) classes.add(RecognizersMap.get('hover'));
  return classes;
}

/**
 * @private
 * Abstract class for coordinates-based gesture recongizers
 */

var CoordinatesRecognizer = /*#__PURE__*/function (_Recognizer) {
  _inheritsLoose(CoordinatesRecognizer, _Recognizer);

  function CoordinatesRecognizer() {
    return _Recognizer.apply(this, arguments) || this;
  }

  var _proto = CoordinatesRecognizer.prototype;

  /**
   * Returns the real movement (without taking intentionality into account)
   */
  _proto.getInternalMovement = function getInternalMovement(values, state) {
    return subV(values, state.initial);
  }
  /**
   * In coordinates-based gesture, this function will detect the first intentional axis,
   * lock the gesture axis if lockDirection is specified in the config, block the gesture
   * if the first intentional axis doesn't match the specified axis in config.
   */
  ;

  _proto.checkIntentionality = function checkIntentionality(_intentional, _movement) {
    if (_intentional[0] === false && _intentional[1] === false) {
      return {
        _intentional: _intentional,
        axis: this.state.axis
      };
    }

    var _movement$map = _movement.map(Math.abs),
        absX = _movement$map[0],
        absY = _movement$map[1];

    var axis = this.state.axis || (absX > absY ? 'x' : absX < absY ? 'y' : undefined);
    if (!this.config.axis && !this.config.lockDirection) return {
      _intentional: _intentional,
      _blocked: false,
      axis: axis
    };
    if (!axis) return {
      _intentional: [false, false],
      _blocked: false,
      axis: axis
    };
    if (!!this.config.axis && axis !== this.config.axis) return {
      _intentional: _intentional,
      _blocked: true,
      axis: axis
    };
    _intentional[axis === 'x' ? 1 : 0] = false;
    return {
      _intentional: _intentional,
      _blocked: false,
      axis: axis
    };
  };

  _proto.getKinematics = function getKinematics(values, event) {
    var state = this.getMovement(values);

    if (!state._blocked) {
      var dt = event.timeStamp - this.state.timeStamp;
      Object.assign(state, calculateAllKinematics(state.movement, state.delta, dt));
    }

    return state;
  };

  _proto.mapStateValues = function mapStateValues(state) {
    return {
      xy: state.values,
      vxvy: state.velocities
    };
  };

  return CoordinatesRecognizer;
}(Recognizer);

var TAP_DISTANCE_THRESHOLD = 3;
var SWIPE_MAX_ELAPSED_TIME = 220;

function persistEvent(event) {
  'persist' in event && typeof event.persist === 'function' && event.persist();
}

var DragRecognizer = /*#__PURE__*/function (_CoordinatesRecognize) {
  _inheritsLoose(DragRecognizer, _CoordinatesRecognize);

  function DragRecognizer() {
    var _this;

    _this = _CoordinatesRecognize.apply(this, arguments) || this;
    _this.ingKey = 'dragging';
    _this.stateKey = 'drag'; // TODO add back when setPointerCapture is widely wupported
    // https://caniuse.com/#search=setPointerCapture

    _this.setPointerCapture = function (event) {
      // don't perform pointere capture when user wants to use touch events or
      // when a pointerLockElement exists as this would throw an error
      if (_this.config.useTouch || document.pointerLockElement) return;
      var target = event.target,
          pointerId = event.pointerId;

      if (target && 'setPointerCapture' in target) {
        // this would work in the DOM but doesn't with react three fiber
        // target.addEventListener('pointermove', this.onDragChange, this.controller.config.eventOptions)
        // @ts-expect-error
        target.setPointerCapture(pointerId);
      }

      _this.updateGestureState({
        _dragTarget: target,
        _dragPointerId: pointerId
      });
    };

    _this.releasePointerCapture = function () {
      if (_this.config.useTouch || document.pointerLockElement) return;
      var _this$state = _this.state,
          _dragTarget = _this$state._dragTarget,
          _dragPointerId = _this$state._dragPointerId;

      if (_dragPointerId && _dragTarget && 'releasePointerCapture' in _dragTarget) {
        // this would work in the DOM but doesn't with react three fiber
        // target.removeEventListener('pointermove', this.onDragChange, this.controller.config.eventOptions)
        if (!('hasPointerCapture' in _dragTarget) || _dragTarget.hasPointerCapture(_dragPointerId)) try {
          _dragTarget.releasePointerCapture(_dragPointerId);
        } catch (e) {}
      }
    };

    _this.preventScroll = function (event) {
      if (_this.state._dragPreventScroll && event.cancelable) {
        event.preventDefault();
      }
    };

    _this.getEventId = function (event) {
      if (_this.config.useTouch) return event.changedTouches[0].identifier;
      return event.pointerId;
    };

    _this.isValidEvent = function (event) {
      // if we were using pointer events only event.isPrimary === 1 would suffice
      return _this.state._pointerId === _this.getEventId(event);
    };

    _this.shouldPreventWindowScrollY = _this.config.experimental_preventWindowScrollY && _this.controller.supportsTouchEvents;

    _this.setUpWindowScrollDetection = function (event) {
      persistEvent(event); // we add window listeners that will prevent the scroll when the user has started dragging

      updateWindowListeners(_this.controller, _this.stateKey, [['touchmove', _this.preventScroll], ['touchend', _this.clean.bind(_assertThisInitialized(_this))], ['touchcancel', _this.clean.bind(_assertThisInitialized(_this))]], {
        passive: false
      });

      _this.setTimeout(_this.startDrag.bind(_assertThisInitialized(_this)), 250, event);
    };

    _this.setUpDelayedDragTrigger = function (event) {
      _this.state._dragDelayed = true;
      persistEvent(event);

      _this.setTimeout(_this.startDrag.bind(_assertThisInitialized(_this)), _this.config.delay, event);
    };

    _this.setStartState = function (event) {
      var values = getPointerEventValues(event, _this.transform);

      _this.updateSharedState(getGenericEventData(event));

      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
        _pointerId: _this.getEventId(event)
      }));

      _this.updateGestureState(_this.getMovement(values));
    };

    _this.onDragStart = function (event) {
      addEventIds(_this.controller, event);
      if (!_this.enabled || _this.state._active) return;

      _this.setStartState(event);

      _this.setPointerCapture(event);

      if (_this.shouldPreventWindowScrollY) _this.setUpWindowScrollDetection(event);else if (_this.config.delay > 0) _this.setUpDelayedDragTrigger(event);else _this.startDrag(event, true); // we pass the values to the startDrag event
    };

    _this.onDragChange = function (event) {
      if ( // if the gesture was canceled or
      _this.state.canceled || // if onDragStart wasn't fired or
      !_this.state._active || // if the event pointerId doesn't match the one that initiated the drag
      !_this.isValidEvent(event)) return;
      var values;

      if (document.pointerLockElement) {
        var movementX = event.movementX,
            movementY = event.movementY;
        values = addV(_this.transform([movementX, movementY]), _this.state.values);
      } else values = getPointerEventValues(event, _this.transform);

      var kinematics = _this.getKinematics(values, event); // if startDrag hasn't fired


      if (!_this.state._dragStarted) {
        // If the gesture isn't active then respond to the event only if
        // it's been delayed via the `delay` option, in which case start
        // the gesture immediately.
        if (_this.state._dragDelayed) {
          _this.startDrag(event);

          return;
        } // if the user wants to prevent vertical window scroll when user starts dragging


        if (_this.shouldPreventWindowScrollY) {
          if (!_this.state._dragPreventScroll && kinematics.axis) {
            // if the user is dragging horizontally then we should allow the drag
            if (kinematics.axis === 'x') {
              _this.startDrag(event);
            } else {
              _this.state._active = false;
              return;
            }
          } else return;
        } else return;
      }

      var genericEventData = getGenericEventData(event);

      _this.updateSharedState(genericEventData);

      var genericPayload = getGenericPayload(_assertThisInitialized(_this), event); // This verifies if the drag can be assimilated to a tap by checking
      // if the real distance of the drag (ie not accounting for the threshold) is
      // greater than the TAP_DISTANCE_THRESHOLD.

      var realDistance = calculateDistance(kinematics._movement);
      var _dragIsTap = _this.state._dragIsTap;
      if (_dragIsTap && realDistance >= TAP_DISTANCE_THRESHOLD) _dragIsTap = false;

      _this.updateGestureState(_extends({}, genericPayload, kinematics, {
        _dragIsTap: _dragIsTap
      }));

      _this.fireGestureHandler();
    };

    _this.onDragEnd = function (event) {
      removeEventIds(_this.controller, event); // if the event pointerId doesn't match the one that initiated the drag
      // we don't want to end the drag

      if (!_this.isValidEvent(event)) return;

      _this.clean(); // if the gesture is no longer active (ie canceled)
      // don't do anything


      if (!_this.state._active) return;
      _this.state._active = false;
      var tap = _this.state._dragIsTap;
      var _this$state$velocitie = _this.state.velocities,
          vx = _this$state$velocitie[0],
          vy = _this$state$velocitie[1];
      var _this$state$movement = _this.state.movement,
          mx = _this$state$movement[0],
          my = _this$state$movement[1];
      var _this$state$_intentio = _this.state._intentional,
          ix = _this$state$_intentio[0],
          iy = _this$state$_intentio[1];
      var _this$config$swipeVel = _this.config.swipeVelocity,
          svx = _this$config$swipeVel[0],
          svy = _this$config$swipeVel[1];
      var _this$config$swipeDis = _this.config.swipeDistance,
          sx = _this$config$swipeDis[0],
          sy = _this$config$swipeDis[1];

      var endState = _extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getMovement(_this.state.values));

      var swipe = [0, 0];

      if (endState.elapsedTime < SWIPE_MAX_ELAPSED_TIME) {
        if (ix !== false && Math.abs(vx) > svx && Math.abs(mx) > sx) swipe[0] = sign(vx);
        if (iy !== false && Math.abs(vy) > svy && Math.abs(my) > sy) swipe[1] = sign(vy);
      }

      _this.updateSharedState({
        buttons: 0
      });

      _this.updateGestureState(_extends({}, endState, {
        tap: tap,
        swipe: swipe
      }));

      _this.fireGestureHandler(_this.config.filterTaps && tap === true);
    };

    _this.clean = function () {
      _CoordinatesRecognize.prototype.clean.call(_assertThisInitialized(_this));

      _this.state._dragStarted = false;

      _this.releasePointerCapture();

      clearWindowListeners(_this.controller, _this.stateKey);
    };

    _this.onCancel = function () {
      if (_this.state.canceled) return;

      _this.updateGestureState({
        canceled: true,
        _active: false
      });

      _this.updateSharedState({
        buttons: 0
      });

      setTimeout(function () {
        return _this.fireGestureHandler();
      }, 0);
    };

    _this.onClick = function (event) {
      if (!_this.state._dragIsTap) event.stopPropagation();
    };

    return _this;
  }

  var _proto = DragRecognizer.prototype;

  _proto.startDrag = function startDrag(event, onDragIsStart) {
    if (onDragIsStart === void 0) {
      onDragIsStart = false;
    }

    // startDrag can happen after a timeout, so we need to check if the gesture is still active
    // as the user might have lift up the pointer in between.
    if ( // if the gesture isn't active (probably means)
    !this.state._active || // if the drag has already started we should ignore subsequent attempts
    this.state._dragStarted) return;
    if (!onDragIsStart) this.setStartState(event);
    this.updateGestureState({
      _dragStarted: true,
      _dragPreventScroll: true,
      cancel: this.onCancel
    });
    this.clearTimeout();
    this.fireGestureHandler();
  };

  _proto.addBindings = function addBindings$1(bindings) {
    if (this.config.useTouch) {
      addBindings(bindings, 'onTouchStart', this.onDragStart);

      addBindings(bindings, 'onTouchMove', this.onDragChange); // this is needed for react-three-fiber


      addBindings(bindings, 'onTouchEnd', this.onDragEnd);

      addBindings(bindings, 'onTouchCancel', this.onDragEnd);
    } else {
      addBindings(bindings, 'onPointerDown', this.onDragStart);

      addBindings(bindings, 'onPointerMove', this.onDragChange); // this is needed for react-three-fiber


      addBindings(bindings, 'onPointerUp', this.onDragEnd);

      addBindings(bindings, 'onPointerCancel', this.onDragEnd);
    }

    if (this.config.filterTaps) {
      var handler = this.controller.config.eventOptions.capture ? 'onClick' : 'onClickCapture';

      addBindings(bindings, handler, this.onClick);
    }
  };

  return DragRecognizer;
}(CoordinatesRecognizer);

/**
 * Inlined from https://github.com/alexreardon/memoize-one
 */
function memoizeOne(resultFn, isEqual) {
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  function memoized() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }

  return memoized;
}

/**
 * Taken from https://github.com/FormidableLabs/react-fast-compare
 *
 * Dropped comments and ArrayBuffer handling
 */
function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;

    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    var it;

    if (typeof Map === 'function' && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();

      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) return false;
      }

      it = a.entries();

      while (!(i = it.next()).done) {
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      }

      return true;
    }

    if (typeof Set === 'function' && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();

      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) return false;
      }

      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    if (typeof Element !== 'undefined' && a instanceof Element) return false;

    for (i = length; i-- !== 0;) {
      if (keys[i] === '_owner' && a.$$typeof) continue;
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }

    return true;
  } // true if both NaN, false otherwise — NaN !== NaN → true
  // eslint-disable-next-line no-self-compare


  return a !== a && b !== b;
}

function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || '').match(/stack|recursion/i)) {
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }

    throw error;
  }
}

/**
 * Drag hook.
 *
 * @param handler - the function fired every time the drag gesture updates
 * @param [config={}] - the config object including generic options and drag options
 */

function useDrag(handler, config) {
  if (config === void 0) {
    config = {};
  }

  RecognizersMap.set('drag', DragRecognizer);
  var buildDragConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  if (!buildDragConfig.current) {
    buildDragConfig.current = memoizeOne(_buildDragConfig, isEqual);
  }

  return useRecognizers({
    drag: handler
  }, buildDragConfig.current(config));
}

/**
 * @private
 * Abstract class for distance/angle-based gesture recongizers
 */

var DistanceAngleRecognizer = /*#__PURE__*/function (_Recognizer) {
  _inheritsLoose(DistanceAngleRecognizer, _Recognizer);

  function DistanceAngleRecognizer() {
    return _Recognizer.apply(this, arguments) || this;
  }

  var _proto = DistanceAngleRecognizer.prototype;

  _proto.getInternalMovement = function getInternalMovement(values, state) {
    var prev_a = state.values[1]; // not be defined if ctrl+wheel is used for zoom only

    var d = values[0],
        _values$ = values[1],
        a = _values$ === void 0 ? prev_a : _values$;
    var delta_a = a - prev_a;
    var next_turns = state.turns;
    if (Math.abs(delta_a) > 270) next_turns += sign(delta_a);
    return subV([d, a - 360 * next_turns], state.initial);
  };

  _proto.getKinematics = function getKinematics(values, event) {
    var state = this.getMovement(values);
    var turns = (values[1] - state._movement[1] - this.state.initial[1]) / 360;
    var dt = event.timeStamp - this.state.timeStamp;

    var _calculateAllKinemati = calculateAllKinematics(state.movement, state.delta, dt),
        kinematics = _objectWithoutPropertiesLoose(_calculateAllKinemati, ["distance", "velocity"]);

    return _extends({
      turns: turns
    }, state, kinematics);
  };

  _proto.mapStateValues = function mapStateValues(state) {
    return {
      da: state.values,
      vdva: state.velocities
    };
  };

  return DistanceAngleRecognizer;
}(Recognizer);

var PinchRecognizer = /*#__PURE__*/function (_DistanceAngleRecogni) {
  _inheritsLoose(PinchRecognizer, _DistanceAngleRecogni);

  function PinchRecognizer() {
    var _this;

    _this = _DistanceAngleRecogni.apply(this, arguments) || this;
    _this.ingKey = 'pinching';
    _this.stateKey = 'pinch';

    _this.onPinchStart = function (event) {
      addEventIds(_this.controller, event);
      if (!_this.enabled || _this.state._active) return; // until we reach two fingers on the target don't react

      if (_this.controller.touchIds.size < 2) return;

      var _pointerIds = Array.from(_this.controller.touchIds).slice(0, 2);

      var _getTwoTouchesEventVa = getTwoTouchesEventValues(event, _pointerIds, _this.transform),
          values = _getTwoTouchesEventVa.values,
          origin = _getTwoTouchesEventVa.origin;

      _this.updateSharedState(getGenericEventData(event));

      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
        _pointerIds: _pointerIds,
        cancel: _this.onCancel,
        origin: origin
      }));

      _this.updateGestureState(_this.getMovement(values));

      _this.fireGestureHandler();
    };

    _this.onPinchChange = function (event) {
      var _this$state = _this.state,
          canceled = _this$state.canceled,
          _active = _this$state._active;
      if (canceled || !_active) return;
      var genericEventData = getGenericEventData(event);

      _this.updateSharedState(genericEventData);

      var _getTwoTouchesEventVa2 = getTwoTouchesEventValues(event, _this.state._pointerIds, _this.transform),
          values = _getTwoTouchesEventVa2.values,
          origin = _getTwoTouchesEventVa2.origin;

      var kinematics = _this.getKinematics(values, event);

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), kinematics, {
        origin: origin
      }));

      _this.fireGestureHandler();
    };

    _this.onPinchEnd = function (event) {
      removeEventIds(_this.controller, event);
      var pointerIds = getPointerIds(event); // if none of the lifted pointerIds is in the state pointerIds don't do anything

      if (_this.state._pointerIds.every(function (id) {
        return !pointerIds.includes(id);
      })) return;

      _this.clean();

      if (!_this.state._active) return;

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getMovement(_this.state.values), {
        _active: false
      }));

      _this.fireGestureHandler();
    };

    _this.onCancel = function () {
      if (_this.state.canceled) return;

      _this.updateGestureState({
        _active: false,
        canceled: true
      });

      setTimeout(function () {
        return _this.fireGestureHandler();
      }, 0);
    };
    /**
     * PINCH WITH WEBKIT GESTURES
     */


    _this.onGestureStart = function (event) {
      if (!_this.enabled) return;
      event.preventDefault(); // useless

      var values = getWebkitGestureEventValues(event, _this.transform);

      _this.updateSharedState(getGenericEventData(event));

      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
        origin: [event.clientX, event.clientY],
        cancel: _this.onCancel
      }));

      _this.updateGestureState(_this.getMovement(values));

      _this.fireGestureHandler();
    };

    _this.onGestureChange = function (event) {
      var _this$state2 = _this.state,
          canceled = _this$state2.canceled,
          _active = _this$state2._active;
      if (canceled || !_active) return;
      event.preventDefault();
      var genericEventData = getGenericEventData(event);

      _this.updateSharedState(genericEventData);

      var values = getWebkitGestureEventValues(event, _this.transform);

      var kinematics = _this.getKinematics(values, event);

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), kinematics, {
        origin: [event.clientX, event.clientY]
      }));

      _this.fireGestureHandler();
    };

    _this.onGestureEnd = function (event) {
      _this.clean();

      if (!_this.state._active) return;

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getMovement(_this.state.values), {
        _active: false,
        origin: [event.clientX, event.clientY]
      }));

      _this.fireGestureHandler();
    };
    /**
     * PINCH WITH WHEEL
     */


    _this.wheelShouldRun = function (event) {
      return _this.enabled && event.ctrlKey;
    };

    _this.getWheelValuesFromEvent = function (event) {
      var _getWheelEventValues = getWheelEventValues(event, _this.transform),
          delta_d = _getWheelEventValues[1];

      var _this$state$values = _this.state.values,
          prev_d = _this$state$values[0],
          prev_a = _this$state$values[1];
      var d = prev_d - delta_d;
      var a = prev_a !== void 0 ? prev_a : 0;
      return {
        values: [d, a],
        origin: [event.clientX, event.clientY],
        delta: [0, delta_d]
      };
    };

    _this.onWheel = function (event) {
      if (!_this.wheelShouldRun(event)) return;

      _this.setTimeout(_this.onWheelEnd);

      if (!_this.state._active) _this.onWheelStart(event);else _this.onWheelChange(event);
    };

    _this.onWheelStart = function (event) {
      var _this$getWheelValuesF = _this.getWheelValuesFromEvent(event),
          values = _this$getWheelValuesF.values,
          delta = _this$getWheelValuesF.delta,
          origin = _this$getWheelValuesF.origin;

      if (event.cancelable) event.preventDefault();else if (true) {
        console.warn('To properly support zoom on trackpads, try using the `domTarget` option and `config.eventOptions.passive` set to `false`. This message will only appear in development mode.');
      }

      _this.updateSharedState(getGenericEventData(event));

      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
        initial: _this.state.values,
        offset: values,
        delta: delta,
        origin: origin
      }));

      _this.updateGestureState(_this.getMovement(values));

      _this.fireGestureHandler();
    };

    _this.onWheelChange = function (event) {
      if (event.cancelable) event.preventDefault();

      _this.updateSharedState(getGenericEventData(event));

      var _this$getWheelValuesF2 = _this.getWheelValuesFromEvent(event),
          values = _this$getWheelValuesF2.values,
          origin = _this$getWheelValuesF2.origin,
          delta = _this$getWheelValuesF2.delta;

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getKinematics(values, event), {
        origin: origin,
        delta: delta
      }));

      _this.fireGestureHandler();
    };

    _this.onWheelEnd = function () {
      _this.clean();

      if (!_this.state._active) return;
      _this.state._active = false;

      _this.updateGestureState(_this.getMovement(_this.state.values));

      _this.fireGestureHandler();
    };

    return _this;
  }

  var _proto = PinchRecognizer.prototype;

  _proto.addBindings = function addBindings$1(bindings) {
    // Only try to use gesture events when they are supported and domTarget is set
    // as React doesn't support gesture handlers.
    if (this.controller.config.domTarget && !this.controller.supportsTouchEvents && this.controller.supportsGestureEvents) {
      addBindings(bindings, 'onGestureStart', this.onGestureStart);

      addBindings(bindings, 'onGestureChange', this.onGestureChange);

      addBindings(bindings, 'onGestureEnd', this.onGestureEnd);
    } else {
      addBindings(bindings, 'onTouchStart', this.onPinchStart);

      addBindings(bindings, 'onTouchMove', this.onPinchChange);

      addBindings(bindings, 'onTouchEnd', this.onPinchEnd);

      addBindings(bindings, 'onTouchCancel', this.onPinchEnd);

      addBindings(bindings, 'onWheel', this.onWheel);
    }
  };

  return PinchRecognizer;
}(DistanceAngleRecognizer);

/**
 * Pinch hook.
 *
 * @param handler - the function fired every time the pinch gesture updates
 * @param [config={}] - the config object including generic options and pinch options
 */

function usePinch(handler, config) {
  if (config === void 0) {
    config = {};
  }

  RecognizersMap.set('pinch', PinchRecognizer);
  var buildPinchConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  if (!buildPinchConfig.current) {
    buildPinchConfig.current = memoizeOne(_buildPinchConfig, isEqual);
  }

  return useRecognizers({
    pinch: handler
  }, buildPinchConfig.current(config));
}

var WheelRecognizer = /*#__PURE__*/function (_CoordinatesRecognize) {
  _inheritsLoose(WheelRecognizer, _CoordinatesRecognize);

  function WheelRecognizer() {
    var _this;

    _this = _CoordinatesRecognize.apply(this, arguments) || this;
    _this.ingKey = 'wheeling';
    _this.stateKey = 'wheel';
    _this.debounced = true;

    _this.handleEvent = function (event) {
      if (event.ctrlKey && 'pinch' in _this.controller.handlers) return;
      if (!_this.enabled) return;

      _this.setTimeout(_this.onEnd);

      _this.updateSharedState(getGenericEventData(event));

      var values = addV(getWheelEventValues(event, _this.transform), _this.state.values);

      if (!_this.state._active) {
        _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
          initial: _this.state.values
        }));

        var movement = _this.getMovement(values);

        var geometry = calculateAllGeometry(movement.delta);

        _this.updateGestureState(movement);

        _this.updateGestureState(geometry);
      } else {
        _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getKinematics(values, event)));
      }

      _this.fireGestureHandler();
    };

    _this.onEnd = function () {
      _this.clean();

      if (!_this.state._active) return;

      var movement = _this.getMovement(_this.state.values);

      _this.updateGestureState(movement);

      _this.updateGestureState({
        _active: false,
        velocities: [0, 0],
        velocity: 0
      });

      _this.fireGestureHandler();
    };

    return _this;
  }

  var _proto = WheelRecognizer.prototype;

  _proto.addBindings = function addBindings$1(bindings) {
    addBindings(bindings, 'onWheel', this.handleEvent);
  };

  return WheelRecognizer;
}(CoordinatesRecognizer);

/**
 * Wheel hook.
 *
 * @param handler - the function fired every time the wheel gesture updates
 * @param the config object including generic options and wheel options
 */

function useWheel(handler, config) {
  if (config === void 0) {
    config = {};
  }

  RecognizersMap.set('wheel', WheelRecognizer);
  var buildWheelConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  if (!buildWheelConfig.current) {
    buildWheelConfig.current = memoizeOne(_buildWheelConfig, isEqual);
  }

  return useRecognizers({
    wheel: handler
  }, buildWheelConfig.current(config));
}

var MoveRecognizer = /*#__PURE__*/function (_CoordinatesRecognize) {
  _inheritsLoose(MoveRecognizer, _CoordinatesRecognize);

  function MoveRecognizer() {
    var _this;

    _this = _CoordinatesRecognize.apply(this, arguments) || this;
    _this.ingKey = 'moving';
    _this.stateKey = 'move';
    _this.debounced = true;

    _this.onMove = function (event) {
      if (!_this.enabled) return;

      _this.setTimeout(_this.onMoveEnd);

      if (!_this.state._active) _this.onMoveStart(event);else _this.onMoveChange(event);
    };

    _this.onMoveStart = function (event) {
      _this.updateSharedState(getGenericEventData(event));

      var values = getPointerEventValues(event, _this.transform);

      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true)));

      _this.updateGestureState(_this.getMovement(values));

      _this.fireGestureHandler();
    };

    _this.onMoveChange = function (event) {
      _this.updateSharedState(getGenericEventData(event));

      var values = getPointerEventValues(event, _this.transform);

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getKinematics(values, event)));

      _this.fireGestureHandler();
    };

    _this.onMoveEnd = function () {
      _this.clean();

      if (!_this.state._active) return;
      var values = _this.state.values;

      _this.updateGestureState(_this.getMovement(values));

      _this.updateGestureState({
        velocities: [0, 0],
        velocity: 0,
        _active: false
      });

      _this.fireGestureHandler();
    };

    _this.hoverTransform = function () {
      return _this.controller.config.hover.transform || _this.controller.config.transform;
    };

    _this.onPointerEnter = function (event) {
      _this.controller.state.shared.hovering = true;
      if (!_this.controller.config.enabled) return;

      if (_this.controller.config.hover.enabled) {
        var values = getPointerEventValues(event, _this.hoverTransform());

        var state = _extends({}, _this.controller.state.shared, _this.state, getGenericPayload(_assertThisInitialized(_this), event, true), {
          args: _this.args,
          values: values,
          active: true,
          hovering: true
        });

        _this.controller.handlers.hover(_extends({}, state, _this.mapStateValues(state)));
      }

      if ('move' in _this.controller.handlers) _this.onMoveStart(event);
    };

    _this.onPointerLeave = function (event) {
      _this.controller.state.shared.hovering = false;
      if ('move' in _this.controller.handlers) _this.onMoveEnd();
      if (!_this.controller.config.hover.enabled) return;
      var values = getPointerEventValues(event, _this.hoverTransform());

      var state = _extends({}, _this.controller.state.shared, _this.state, getGenericPayload(_assertThisInitialized(_this), event), {
        args: _this.args,
        values: values,
        active: false
      });

      _this.controller.handlers.hover(_extends({}, state, _this.mapStateValues(state)));
    };

    return _this;
  }

  var _proto = MoveRecognizer.prototype;

  _proto.addBindings = function addBindings$1(bindings) {
    if ('move' in this.controller.handlers) {
      addBindings(bindings, 'onPointerMove', this.onMove);
    }

    if ('hover' in this.controller.handlers) {
      addBindings(bindings, 'onPointerEnter', this.onPointerEnter);

      addBindings(bindings, 'onPointerLeave', this.onPointerLeave);
    }
  };

  return MoveRecognizer;
}(CoordinatesRecognizer);

/**
 * Move hook.
 *
 * @param handler - the function fired every time the move gesture updates
 * @param [config={}] - the config object including generic options and move options
 */

function useMove(handler, config) {
  if (config === void 0) {
    config = {};
  }

  RecognizersMap.set('move', MoveRecognizer);
  var buildMoveConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  if (!buildMoveConfig.current) {
    buildMoveConfig.current = memoizeOne(_buildMoveConfig, isEqual);
  }

  return useRecognizers({
    move: handler
  }, buildMoveConfig.current(config));
}

/**
 * Hover hook.
 *
 * @param handler - the function fired every time the hover gesture updates
 * @param [config={}] - the config object including generic options and hover options
 */

function useHover(handler, config) {
  if (config === void 0) {
    config = {};
  }

  RecognizersMap.set('hover', MoveRecognizer);
  var buildHoverConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  if (!buildHoverConfig.current) {
    buildHoverConfig.current = memoizeOne(_buildHoverConfig, isEqual);
  }

  return useRecognizers({
    hover: handler
  }, buildHoverConfig.current(config));
}

var ScrollRecognizer = /*#__PURE__*/function (_CoordinatesRecognize) {
  _inheritsLoose(ScrollRecognizer, _CoordinatesRecognize);

  function ScrollRecognizer() {
    var _this;

    _this = _CoordinatesRecognize.apply(this, arguments) || this;
    _this.ingKey = 'scrolling';
    _this.stateKey = 'scroll';
    _this.debounced = true;

    _this.handleEvent = function (event) {
      if (!_this.enabled) return;

      _this.clearTimeout();

      _this.setTimeout(_this.onEnd);

      var values = getScrollEventValues(event, _this.transform);

      _this.updateSharedState(getGenericEventData(event));

      if (!_this.state._active) {
        _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
          initial: _this.state.values
        }));

        var movementDetection = _this.getMovement(values);

        var geometry = calculateAllGeometry(movementDetection.delta);

        _this.updateGestureState(movementDetection);

        _this.updateGestureState(geometry);
      } else {
        _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getKinematics(values, event)));
      }

      _this.fireGestureHandler();
    };

    _this.onEnd = function () {
      _this.clean();

      if (!_this.state._active) return;

      _this.updateGestureState(_extends({}, _this.getMovement(_this.state.values), {
        _active: false,
        velocities: [0, 0],
        velocity: 0
      }));

      _this.fireGestureHandler();
    };

    return _this;
  }

  var _proto = ScrollRecognizer.prototype;

  _proto.addBindings = function addBindings$1(bindings) {
    addBindings(bindings, 'onScroll', this.handleEvent);
  };

  return ScrollRecognizer;
}(CoordinatesRecognizer);

/**
 * Scroll hook.
 *
 * @param handler - the function fired every time the scroll gesture updates
 * @param [config={}] - the config object including generic options and scroll options
 */

function useScroll(handler, config) {
  if (config === void 0) {
    config = {};
  }

  RecognizersMap.set('scroll', ScrollRecognizer);
  var buildScrollConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  if (!buildScrollConfig.current) {
    buildScrollConfig.current = memoizeOne(_buildScrollConfig, isEqual);
  }

  return useRecognizers({
    scroll: handler
  }, buildScrollConfig.current(config));
}

var RE_NOT_NATIVE = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

function sortHandlers(handlers) {
  var _native = {};
  var handle = {};
  var actions = new Set();

  for (var key in handlers) {
    if (RE_NOT_NATIVE.test(key)) {
      actions.add(RegExp.lastMatch);
      handle[key] = handlers[key];
    } else {
      _native[key] = handlers[key];
    }
  }

  return [handle, _native, actions];
}
/**
 * @public
 *
 * The most complete gesture hook, allowing support for multiple gestures.
 *
 * @param {Handlers} handlers - an object with on[Gesture] keys containg gesture handlers
 * @param {UseGestureConfig} [config={}] - the full config object
 * @returns {(...args: any[]) => HookReturnType<Config>}
 */


function useGesture(_handlers, config) {
  if (config === void 0) {
    config = {};
  }

  var _sortHandlers = sortHandlers(_handlers),
      handlers = _sortHandlers[0],
      nativeHandlers = _sortHandlers[1],
      actions = _sortHandlers[2];

  RecognizersMap.set('drag', DragRecognizer);
  RecognizersMap.set('hover', MoveRecognizer);
  RecognizersMap.set('move', MoveRecognizer);
  RecognizersMap.set('pinch', PinchRecognizer);
  RecognizersMap.set('scroll', ScrollRecognizer);
  RecognizersMap.set('wheel', WheelRecognizer);
  var mergedConfig = buildComplexConfig(config, actions);
  var internalHandlers = {};
  if (actions.has('onDrag')) internalHandlers.drag = includeStartEndHandlers(handlers, 'onDrag');
  if (actions.has('onWheel')) internalHandlers.wheel = includeStartEndHandlers(handlers, 'onWheel');
  if (actions.has('onScroll')) internalHandlers.scroll = includeStartEndHandlers(handlers, 'onScroll');
  if (actions.has('onMove')) internalHandlers.move = includeStartEndHandlers(handlers, 'onMove');
  if (actions.has('onPinch')) internalHandlers.pinch = includeStartEndHandlers(handlers, 'onPinch');
  if (actions.has('onHover')) internalHandlers.hover = handlers.onHover;
  return useRecognizers(internalHandlers, mergedConfig, nativeHandlers);
}

function includeStartEndHandlers(handlers, handlerKey) {
  var startKey = handlerKey + 'Start';
  var endKey = handlerKey + 'End';

  var fn = function fn(state) {
    var memo = undefined;
    if (state.first && startKey in handlers) handlers[startKey](state);
    if (handlerKey in handlers) memo = handlers[handlerKey](state);
    if (state.last && endKey in handlers) handlers[endKey](state);
    return memo;
  };

  return fn;
}


//# sourceMappingURL=reactusegesture.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLnRocm90dGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zY3JvbGwvbW9kdWxlcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsL21vZHVsZXMvY29tcG9uZW50cy9FbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zY3JvbGwvbW9kdWxlcy9jb21wb25lbnRzL0xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNjcm9sbC9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zY3JvbGwvbW9kdWxlcy9taXhpbnMvSGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsL21vZHVsZXMvbWl4aW5zL2FuaW1hdGUtc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zY3JvbGwvbW9kdWxlcy9taXhpbnMvY2FuY2VsLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsL21vZHVsZXMvbWl4aW5zL3Bhc3NpdmUtZXZlbnQtbGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zY3JvbGwvbW9kdWxlcy9taXhpbnMvc2Nyb2xsLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNjcm9sbC9tb2R1bGVzL21peGlucy9zY3JvbGwtZXZlbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zY3JvbGwvbW9kdWxlcy9taXhpbnMvc2Nyb2xsLWhhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNjcm9sbC9tb2R1bGVzL21peGlucy9zY3JvbGwtbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsL21vZHVsZXMvbWl4aW5zL3Njcm9sbC1zcHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNjcm9sbC9tb2R1bGVzL21peGlucy9zY3JvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsL21vZHVsZXMvbWl4aW5zL3Ntb290aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsL21vZHVsZXMvbWl4aW5zL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UtZ2VzdHVyZS9kaXN0L3JlYWN0dXNlZ2VzdHVyZS5lc20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIs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QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUN0RWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLHlCQUF5QjtBQUMxQjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNEZBQTRGLGFBQWE7QUFDekc7QUFDQTs7QUFFQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7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QTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsMENBQTBDO0FBQzFDO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxvRkFBb0Ysc0VBQXNFLGtDQUFrQztBQUM1TDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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OztBQUVBO0FBQ0E7QUFDQSx3REFBd0Q7O0FBRXhEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMENBQTBDO0FBQzFDO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBOztBQUVBLDBDQUEwQztBQUMxQztBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7O0FBRUE7O0FBRUEsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsMENBQTBDO0FBQzFDO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUFtRCxTQUFTLElBQXNDO0FBQ2xHO0FBQ0E7O0FBRUE7O0FBRUEsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsb0RBQU07O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixvREFBTTs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsMENBQTBDOztBQUUxQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsMENBQTBDOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxtREFBbUQ7QUFDbkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLGlEQUFpRDtBQUNqRDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixvREFBTTs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsb0RBQU07O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLE9BQU87QUFDUCw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG9EQUFNOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxpQkFBaUIsV0FBVztBQUN2QyxhQUFhO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVzSDtBQUN0SCIsImZpbGUiOiIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfc2Nyb2xsTGluayA9IHJlcXVpcmUoJy4uL21peGlucy9zY3JvbGwtbGluaycpO1xuXG52YXIgX3Njcm9sbExpbmsyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2Nyb2xsTGluayk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEJ1dHRvbkVsZW1lbnQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQnV0dG9uRWxlbWVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQnV0dG9uRWxlbWVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnV0dG9uRWxlbWVudCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEJ1dHRvbkVsZW1lbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihCdXR0b25FbGVtZW50KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQnV0dG9uRWxlbWVudCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdpbnB1dCcsXG4gICAgICAgIHRoaXMucHJvcHMsXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEJ1dHRvbkVsZW1lbnQ7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG47XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfc2Nyb2xsTGluazIuZGVmYXVsdCkoQnV0dG9uRWxlbWVudCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9zY3JvbGxFbGVtZW50ID0gcmVxdWlyZSgnLi4vbWl4aW5zL3Njcm9sbC1lbGVtZW50Jyk7XG5cbnZhciBfc2Nyb2xsRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY3JvbGxFbGVtZW50KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEVsZW1lbnRXcmFwcGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEVsZW1lbnRXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBFbGVtZW50V3JhcHBlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRWxlbWVudFdyYXBwZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChFbGVtZW50V3JhcHBlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVsZW1lbnRXcmFwcGVyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRWxlbWVudFdyYXBwZXIsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIC8vIFJlbW92ZSBgcGFyZW50QmluZGluZ3NgIGZyb20gcHJvcHNcbiAgICAgIHZhciBuZXdQcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcbiAgICAgIGlmIChuZXdQcm9wcy5wYXJlbnRCaW5kaW5ncykge1xuICAgICAgICBkZWxldGUgbmV3UHJvcHMucGFyZW50QmluZGluZ3M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHt9LCBuZXdQcm9wcywgeyByZWY6IGZ1bmN0aW9uIHJlZihlbCkge1xuICAgICAgICAgICAgX3RoaXMyLnByb3BzLnBhcmVudEJpbmRpbmdzLmRvbU5vZGUgPSBlbDtcbiAgICAgICAgICB9IH0pLFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFbGVtZW50V3JhcHBlcjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbjtcblxuRWxlbWVudFdyYXBwZXIucHJvcFR5cGVzID0ge1xuICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgaWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX3Njcm9sbEVsZW1lbnQyLmRlZmF1bHQpKEVsZW1lbnRXcmFwcGVyKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Njcm9sbExpbmsgPSByZXF1aXJlKCcuLi9taXhpbnMvc2Nyb2xsLWxpbmsnKTtcblxudmFyIF9zY3JvbGxMaW5rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Njcm9sbExpbmspO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBMaW5rRWxlbWVudCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhMaW5rRWxlbWVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGlua0VsZW1lbnQoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmtFbGVtZW50KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBMaW5rRWxlbWVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKExpbmtFbGVtZW50KSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYScsXG4gICAgICAgIF90aGlzLnByb3BzLFxuICAgICAgICBfdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIHJldHVybiBMaW5rRWxlbWVudDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbjtcblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9zY3JvbGxMaW5rMi5kZWZhdWx0KShMaW5rRWxlbWVudCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5IZWxwZXJzID0gZXhwb3J0cy5TY3JvbGxFbGVtZW50ID0gZXhwb3J0cy5TY3JvbGxMaW5rID0gZXhwb3J0cy5hbmltYXRlU2Nyb2xsID0gZXhwb3J0cy5zY3JvbGxTcHkgPSBleHBvcnRzLkV2ZW50cyA9IGV4cG9ydHMuc2Nyb2xsZXIgPSBleHBvcnRzLkVsZW1lbnQgPSBleHBvcnRzLkJ1dHRvbiA9IGV4cG9ydHMuTGluayA9IHVuZGVmaW5lZDtcblxudmFyIF9MaW5rID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0xpbmsuanMnKTtcblxudmFyIF9MaW5rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpbmspO1xuXG52YXIgX0J1dHRvbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9CdXR0b24uanMnKTtcblxudmFyIF9CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uKTtcblxudmFyIF9FbGVtZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0VsZW1lbnQuanMnKTtcblxudmFyIF9FbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VsZW1lbnQpO1xuXG52YXIgX3Njcm9sbGVyID0gcmVxdWlyZSgnLi9taXhpbnMvc2Nyb2xsZXIuanMnKTtcblxudmFyIF9zY3JvbGxlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY3JvbGxlcik7XG5cbnZhciBfc2Nyb2xsRXZlbnRzID0gcmVxdWlyZSgnLi9taXhpbnMvc2Nyb2xsLWV2ZW50cy5qcycpO1xuXG52YXIgX3Njcm9sbEV2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY3JvbGxFdmVudHMpO1xuXG52YXIgX3Njcm9sbFNweSA9IHJlcXVpcmUoJy4vbWl4aW5zL3Njcm9sbC1zcHkuanMnKTtcblxudmFyIF9zY3JvbGxTcHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2Nyb2xsU3B5KTtcblxudmFyIF9hbmltYXRlU2Nyb2xsID0gcmVxdWlyZSgnLi9taXhpbnMvYW5pbWF0ZS1zY3JvbGwuanMnKTtcblxudmFyIF9hbmltYXRlU2Nyb2xsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuaW1hdGVTY3JvbGwpO1xuXG52YXIgX3Njcm9sbExpbmsgPSByZXF1aXJlKCcuL21peGlucy9zY3JvbGwtbGluay5qcycpO1xuXG52YXIgX3Njcm9sbExpbmsyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2Nyb2xsTGluayk7XG5cbnZhciBfc2Nyb2xsRWxlbWVudCA9IHJlcXVpcmUoJy4vbWl4aW5zL3Njcm9sbC1lbGVtZW50LmpzJyk7XG5cbnZhciBfc2Nyb2xsRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY3JvbGxFbGVtZW50KTtcblxudmFyIF9IZWxwZXJzID0gcmVxdWlyZSgnLi9taXhpbnMvSGVscGVycy5qcycpO1xuXG52YXIgX0hlbHBlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSGVscGVycyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuTGluayA9IF9MaW5rMi5kZWZhdWx0O1xuZXhwb3J0cy5CdXR0b24gPSBfQnV0dG9uMi5kZWZhdWx0O1xuZXhwb3J0cy5FbGVtZW50ID0gX0VsZW1lbnQyLmRlZmF1bHQ7XG5leHBvcnRzLnNjcm9sbGVyID0gX3Njcm9sbGVyMi5kZWZhdWx0O1xuZXhwb3J0cy5FdmVudHMgPSBfc2Nyb2xsRXZlbnRzMi5kZWZhdWx0O1xuZXhwb3J0cy5zY3JvbGxTcHkgPSBfc2Nyb2xsU3B5Mi5kZWZhdWx0O1xuZXhwb3J0cy5hbmltYXRlU2Nyb2xsID0gX2FuaW1hdGVTY3JvbGwyLmRlZmF1bHQ7XG5leHBvcnRzLlNjcm9sbExpbmsgPSBfc2Nyb2xsTGluazIuZGVmYXVsdDtcbmV4cG9ydHMuU2Nyb2xsRWxlbWVudCA9IF9zY3JvbGxFbGVtZW50Mi5kZWZhdWx0O1xuZXhwb3J0cy5IZWxwZXJzID0gX0hlbHBlcnMyLmRlZmF1bHQ7XG5leHBvcnRzLmRlZmF1bHQgPSB7IExpbms6IF9MaW5rMi5kZWZhdWx0LCBCdXR0b246IF9CdXR0b24yLmRlZmF1bHQsIEVsZW1lbnQ6IF9FbGVtZW50Mi5kZWZhdWx0LCBzY3JvbGxlcjogX3Njcm9sbGVyMi5kZWZhdWx0LCBFdmVudHM6IF9zY3JvbGxFdmVudHMyLmRlZmF1bHQsIHNjcm9sbFNweTogX3Njcm9sbFNweTIuZGVmYXVsdCwgYW5pbWF0ZVNjcm9sbDogX2FuaW1hdGVTY3JvbGwyLmRlZmF1bHQsIFNjcm9sbExpbms6IF9zY3JvbGxMaW5rMi5kZWZhdWx0LCBTY3JvbGxFbGVtZW50OiBfc2Nyb2xsRWxlbWVudDIuZGVmYXVsdCwgSGVscGVyczogX0hlbHBlcnMyLmRlZmF1bHQgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogREVQUkVDQVRFRCAqL1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIHNjcm9sbFNweSA9IHJlcXVpcmUoJy4vc2Nyb2xsLXNweScpO1xudmFyIGRlZmF1bHRTY3JvbGxlciA9IHJlcXVpcmUoJy4vc2Nyb2xsZXInKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG52YXIgc2Nyb2xsSGFzaCA9IHJlcXVpcmUoJy4vc2Nyb2xsLWhhc2gnKTtcblxudmFyIHByb3RvVHlwZXMgPSB7XG4gIHRvOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvbnRhaW5lcklkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb250YWluZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gIGFjdGl2ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzcHk6IFByb3BUeXBlcy5ib29sLFxuICBzbW9vdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIG9mZnNldDogUHJvcFR5cGVzLm51bWJlcixcbiAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIGlzRHluYW1pYzogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBkdXJhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgYWJzb2x1dGU6IFByb3BUeXBlcy5ib29sLFxuICBvblNldEFjdGl2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2V0SW5hY3RpdmU6IFByb3BUeXBlcy5mdW5jLFxuICBpZ25vcmVDYW5jZWxFdmVudHM6IFByb3BUeXBlcy5ib29sLFxuICBoYXNoU3B5OiBQcm9wVHlwZXMuYm9vbFxufTtcblxudmFyIEhlbHBlcnMgPSB7XG4gIFNjcm9sbDogZnVuY3Rpb24gU2Nyb2xsKENvbXBvbmVudCwgY3VzdG9tU2Nyb2xsZXIpIHtcblxuICAgIGNvbnNvbGUud2FybihcIkhlbHBlcnMuU2Nyb2xsIGlzIGRlcHJlY2F0ZWQgc2luY2UgdjEuNy4wXCIpO1xuXG4gICAgdmFyIHNjcm9sbGVyID0gY3VzdG9tU2Nyb2xsZXIgfHwgZGVmYXVsdFNjcm9sbGVyO1xuXG4gICAgdmFyIFNjcm9sbCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoU2Nyb2xsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gU2Nyb2xsKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTY3JvbGwpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTY3JvbGwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTY3JvbGwpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKF90aGlzKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgX2NyZWF0ZUNsYXNzKFNjcm9sbCwgW3tcbiAgICAgICAga2V5OiAnZ2V0U2Nyb2xsU3B5Q29udGFpbmVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNjcm9sbFNweUNvbnRhaW5lcigpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVySWQgPSB0aGlzLnByb3BzLmNvbnRhaW5lcklkO1xuICAgICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLnByb3BzLmNvbnRhaW5lcjtcblxuICAgICAgICAgIGlmIChjb250YWluZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGFpbmVyICYmIGNvbnRhaW5lci5ub2RlVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMuc3B5IHx8IHRoaXMucHJvcHMuaGFzaFNweSkge1xuICAgICAgICAgICAgdmFyIHNjcm9sbFNweUNvbnRhaW5lciA9IHRoaXMuZ2V0U2Nyb2xsU3B5Q29udGFpbmVyKCk7XG5cbiAgICAgICAgICAgIGlmICghc2Nyb2xsU3B5LmlzTW91bnRlZChzY3JvbGxTcHlDb250YWluZXIpKSB7XG4gICAgICAgICAgICAgIHNjcm9sbFNweS5tb3VudChzY3JvbGxTcHlDb250YWluZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5oYXNoU3B5KSB7XG4gICAgICAgICAgICAgIGlmICghc2Nyb2xsSGFzaC5pc01vdW50ZWQoKSkge1xuICAgICAgICAgICAgICAgIHNjcm9sbEhhc2gubW91bnQoc2Nyb2xsZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNjcm9sbEhhc2gubWFwQ29udGFpbmVyKHRoaXMucHJvcHMudG8sIHNjcm9sbFNweUNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNweSkge1xuICAgICAgICAgICAgICBzY3JvbGxTcHkuYWRkU3RhdGVIYW5kbGVyKHRoaXMuc3RhdGVIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2Nyb2xsU3B5LmFkZFNweUhhbmRsZXIodGhpcy5zcHlIYW5kbGVyLCBzY3JvbGxTcHlDb250YWluZXIpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgY29udGFpbmVyOiBzY3JvbGxTcHlDb250YWluZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICBzY3JvbGxTcHkudW5tb3VudCh0aGlzLnN0YXRlSGFuZGxlciwgdGhpcy5zcHlIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUgJiYgdGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9ICgodGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgXCJcIikgKyBcIiBcIiArICh0aGlzLnByb3BzLmFjdGl2ZUNsYXNzIHx8IFwiYWN0aXZlXCIpKS50cmltKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcblxuICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gcHJvdG9UeXBlcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBwcm9wc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgICAgcHJvcHMub25DbGljayA9IHRoaXMuaGFuZGxlQ2xpY2s7XG5cbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gU2Nyb2xsO1xuICAgIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICAgIHZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLnNjcm9sbFRvID0gZnVuY3Rpb24gKHRvLCBwcm9wcykge1xuICAgICAgICBzY3JvbGxlci5zY3JvbGxUbyh0bywgX2V4dGVuZHMoe30sIF90aGlzMi5zdGF0ZSwgcHJvcHMpKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICAvKlxyXG4gICAgICAgICAqIGdpdmUgdGhlIHBvc2liaWxpdHkgdG8gb3ZlcnJpZGUgb25DbGlja1xyXG4gICAgICAgICAqL1xuXG4gICAgICAgIGlmIChfdGhpczIucHJvcHMub25DbGljaykge1xuICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogZG9udCBidWJibGUgdGhlIG5hdmlnYXRpb25cclxuICAgICAgICAgKi9cblxuICAgICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogZG8gdGhlIG1hZ2ljIVxyXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpczIuc2Nyb2xsVG8oX3RoaXMyLnByb3BzLnRvLCBfdGhpczIucHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5zdGF0ZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzY3JvbGxlci5nZXRBY3RpdmVMaW5rKCkgIT09IF90aGlzMi5wcm9wcy50bykge1xuICAgICAgICAgIGlmIChfdGhpczIuc3RhdGUgIT09IG51bGwgJiYgX3RoaXMyLnN0YXRlLmFjdGl2ZSAmJiBfdGhpczIucHJvcHMub25TZXRJbmFjdGl2ZSkge1xuICAgICAgICAgICAgX3RoaXMyLnByb3BzLm9uU2V0SW5hY3RpdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgYWN0aXZlOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5zcHlIYW5kbGVyID0gZnVuY3Rpb24gKHkpIHtcblxuICAgICAgICB2YXIgc2Nyb2xsU3B5Q29udGFpbmVyID0gX3RoaXMyLmdldFNjcm9sbFNweUNvbnRhaW5lcigpO1xuXG4gICAgICAgIGlmIChzY3JvbGxIYXNoLmlzTW91bnRlZCgpICYmICFzY3JvbGxIYXNoLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0byA9IF90aGlzMi5wcm9wcy50bztcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBudWxsO1xuICAgICAgICB2YXIgZWxlbVRvcEJvdW5kID0gMDtcbiAgICAgICAgdmFyIGVsZW1Cb3R0b21Cb3VuZCA9IDA7XG4gICAgICAgIHZhciBjb250YWluZXJUb3AgPSAwO1xuXG4gICAgICAgIGlmIChzY3JvbGxTcHlDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckNvcmRzID0gc2Nyb2xsU3B5Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnRhaW5lclRvcCA9IGNvbnRhaW5lckNvcmRzLnRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZWxlbWVudCB8fCBfdGhpczIucHJvcHMuaXNEeW5hbWljKSB7XG4gICAgICAgICAgZWxlbWVudCA9IHNjcm9sbGVyLmdldCh0byk7XG4gICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGNvcmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBlbGVtVG9wQm91bmQgPSBjb3Jkcy50b3AgLSBjb250YWluZXJUb3AgKyB5O1xuICAgICAgICAgIGVsZW1Cb3R0b21Cb3VuZCA9IGVsZW1Ub3BCb3VuZCArIGNvcmRzLmhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXRZID0geSAtIF90aGlzMi5wcm9wcy5vZmZzZXQ7XG4gICAgICAgIHZhciBpc0luc2lkZSA9IG9mZnNldFkgPj0gTWF0aC5mbG9vcihlbGVtVG9wQm91bmQpICYmIG9mZnNldFkgPCBNYXRoLmZsb29yKGVsZW1Cb3R0b21Cb3VuZCk7XG4gICAgICAgIHZhciBpc091dHNpZGUgPSBvZmZzZXRZIDwgTWF0aC5mbG9vcihlbGVtVG9wQm91bmQpIHx8IG9mZnNldFkgPj0gTWF0aC5mbG9vcihlbGVtQm90dG9tQm91bmQpO1xuICAgICAgICB2YXIgYWN0aXZlTGluayA9IHNjcm9sbGVyLmdldEFjdGl2ZUxpbmsoKTtcblxuICAgICAgICBpZiAoaXNPdXRzaWRlKSB7XG4gICAgICAgICAgaWYgKHRvID09PSBhY3RpdmVMaW5rKSB7XG4gICAgICAgICAgICBzY3JvbGxlci5zZXRBY3RpdmVMaW5rKHZvaWQgMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF90aGlzMi5wcm9wcy5oYXNoU3B5ICYmIHNjcm9sbEhhc2guZ2V0SGFzaCgpID09PSB0bykge1xuICAgICAgICAgICAgc2Nyb2xsSGFzaC5jaGFuZ2VIYXNoKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF90aGlzMi5wcm9wcy5zcHkgJiYgX3RoaXMyLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgYWN0aXZlOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIF90aGlzMi5wcm9wcy5vblNldEluYWN0aXZlICYmIF90aGlzMi5wcm9wcy5vblNldEluYWN0aXZlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHNjcm9sbFNweS51cGRhdGVTdGF0ZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0luc2lkZSAmJiBhY3RpdmVMaW5rICE9PSB0bykge1xuICAgICAgICAgIHNjcm9sbGVyLnNldEFjdGl2ZUxpbmsodG8pO1xuXG4gICAgICAgICAgX3RoaXMyLnByb3BzLmhhc2hTcHkgJiYgc2Nyb2xsSGFzaC5jaGFuZ2VIYXNoKHRvKTtcblxuICAgICAgICAgIGlmIChfdGhpczIucHJvcHMuc3B5KSB7XG4gICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyBhY3RpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICBfdGhpczIucHJvcHMub25TZXRBY3RpdmUgJiYgX3RoaXMyLnByb3BzLm9uU2V0QWN0aXZlKHRvKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNjcm9sbFNweS51cGRhdGVTdGF0ZXMoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgO1xuXG4gICAgU2Nyb2xsLnByb3BUeXBlcyA9IHByb3RvVHlwZXM7XG5cbiAgICBTY3JvbGwuZGVmYXVsdFByb3BzID0geyBvZmZzZXQ6IDAgfTtcblxuICAgIHJldHVybiBTY3JvbGw7XG4gIH0sXG4gIEVsZW1lbnQ6IGZ1bmN0aW9uIEVsZW1lbnQoQ29tcG9uZW50KSB7XG5cbiAgICBjb25zb2xlLndhcm4oXCJIZWxwZXJzLkVsZW1lbnQgaXMgZGVwcmVjYXRlZCBzaW5jZSB2MS43LjBcIik7XG5cbiAgICB2YXIgRWxlbWVudCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50Mikge1xuICAgICAgX2luaGVyaXRzKEVsZW1lbnQsIF9SZWFjdCRDb21wb25lbnQyKTtcblxuICAgICAgZnVuY3Rpb24gRWxlbWVudChwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRWxlbWVudCk7XG5cbiAgICAgICAgdmFyIF90aGlzMyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChFbGVtZW50Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRWxlbWVudCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpczMuY2hpbGRCaW5kaW5ncyA9IHtcbiAgICAgICAgICBkb21Ob2RlOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpczM7XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhFbGVtZW50LCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZWdpc3RlckVsZW1zKHRoaXMucHJvcHMubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5uYW1lICE9PSBwcmV2UHJvcHMubmFtZSkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckVsZW1zKHRoaXMucHJvcHMubmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWZhdWx0U2Nyb2xsZXIudW5yZWdpc3Rlcih0aGlzLnByb3BzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyRWxlbXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJFbGVtcyhuYW1lKSB7XG4gICAgICAgICAgZGVmYXVsdFNjcm9sbGVyLnJlZ2lzdGVyKG5hbWUsIHRoaXMuY2hpbGRCaW5kaW5ncy5kb21Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgcGFyZW50QmluZGluZ3M6IHRoaXMuY2hpbGRCaW5kaW5ncyB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEVsZW1lbnQ7XG4gICAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gICAgO1xuXG4gICAgRWxlbWVudC5wcm9wVHlwZXMgPSB7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9O1xuXG4gICAgcmV0dXJuIEVsZW1lbnQ7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGVscGVyczsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG52YXIgX3Ntb290aCA9IHJlcXVpcmUoJy4vc21vb3RoJyk7XG5cbnZhciBfc21vb3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Ntb290aCk7XG5cbnZhciBfY2FuY2VsRXZlbnRzID0gcmVxdWlyZSgnLi9jYW5jZWwtZXZlbnRzJyk7XG5cbnZhciBfY2FuY2VsRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbmNlbEV2ZW50cyk7XG5cbnZhciBfc2Nyb2xsRXZlbnRzID0gcmVxdWlyZSgnLi9zY3JvbGwtZXZlbnRzJyk7XG5cbnZhciBfc2Nyb2xsRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Njcm9sbEV2ZW50cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qXHJcbiAqIEdldHMgdGhlIGVhc2luZyB0eXBlIGZyb20gdGhlIHNtb290aCBwcm9wIHdpdGhpbiBvcHRpb25zLlxyXG4gKi9cbnZhciBnZXRBbmltYXRpb25UeXBlID0gZnVuY3Rpb24gZ2V0QW5pbWF0aW9uVHlwZShvcHRpb25zKSB7XG4gIHJldHVybiBfc21vb3RoMi5kZWZhdWx0W29wdGlvbnMuc21vb3RoXSB8fCBfc21vb3RoMi5kZWZhdWx0LmRlZmF1bHRFYXNpbmc7XG59O1xuLypcclxuICogRnVuY3Rpb24gaGVscGVyXHJcbiAqL1xudmFyIGZ1bmN0aW9uV3JhcHBlciA9IGZ1bmN0aW9uIGZ1bmN0aW9uV3JhcHBlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUgOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufTtcbi8qXHJcbiAqIFdyYXBzIHdpbmRvdyBwcm9wZXJ0aWVzIHRvIGFsbG93IHNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gKi9cbnZhciBjdXJyZW50V2luZG93UHJvcGVydGllcyA9IGZ1bmN0aW9uIGN1cnJlbnRXaW5kb3dQcm9wZXJ0aWVzKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICB9XG59O1xuXG4vKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gbmV2ZXIgZXh0ZW5kIDYwZnBzIG9uIHRoZSB3ZWJwYWdlLlxyXG4gKi9cbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWVIZWxwZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjdXJyZW50V2luZG93UHJvcGVydGllcygpIHx8IGZ1bmN0aW9uIChjYWxsYmFjaywgZWxlbWVudCwgZGVsYXkpIHtcbiAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgZGVsYXkgfHwgMTAwMCAvIDYwLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gIH07XG59KCk7XG5cbnZhciBtYWtlRGF0YSA9IGZ1bmN0aW9uIG1ha2VEYXRhKCkge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRQb3NpdGlvbjogMCxcbiAgICBzdGFydFBvc2l0aW9uOiAwLFxuICAgIHRhcmdldFBvc2l0aW9uOiAwLFxuICAgIHByb2dyZXNzOiAwLFxuICAgIGR1cmF0aW9uOiAwLFxuICAgIGNhbmNlbDogZmFsc2UsXG5cbiAgICB0YXJnZXQ6IG51bGwsXG4gICAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcbiAgICB0bzogbnVsbCxcbiAgICBzdGFydDogbnVsbCxcbiAgICBkZWx0YTogbnVsbCxcbiAgICBwZXJjZW50OiBudWxsLFxuICAgIGRlbGF5VGltZW91dDogbnVsbFxuICB9O1xufTtcblxudmFyIGN1cnJlbnRQb3NpdGlvblggPSBmdW5jdGlvbiBjdXJyZW50UG9zaXRpb25YKG9wdGlvbnMpIHtcbiAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBvcHRpb25zLmRhdGEuY29udGFpbmVyRWxlbWVudDtcbiAgaWYgKGNvbnRhaW5lckVsZW1lbnQgJiYgY29udGFpbmVyRWxlbWVudCAhPT0gZG9jdW1lbnQgJiYgY29udGFpbmVyRWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgIHJldHVybiBjb250YWluZXJFbGVtZW50LnNjcm9sbExlZnQ7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHN1cHBvcnRQYWdlT2Zmc2V0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGlzQ1NTMUNvbXBhdCA9IChkb2N1bWVudC5jb21wYXRNb2RlIHx8IFwiXCIpID09PSBcIkNTUzFDb21wYXRcIjtcbiAgICByZXR1cm4gc3VwcG9ydFBhZ2VPZmZzZXQgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiBpc0NTUzFDb21wYXQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcbiAgfVxufTtcblxudmFyIGN1cnJlbnRQb3NpdGlvblkgPSBmdW5jdGlvbiBjdXJyZW50UG9zaXRpb25ZKG9wdGlvbnMpIHtcbiAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBvcHRpb25zLmRhdGEuY29udGFpbmVyRWxlbWVudDtcbiAgaWYgKGNvbnRhaW5lckVsZW1lbnQgJiYgY29udGFpbmVyRWxlbWVudCAhPT0gZG9jdW1lbnQgJiYgY29udGFpbmVyRWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgIHJldHVybiBjb250YWluZXJFbGVtZW50LnNjcm9sbFRvcDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaXNDU1MxQ29tcGF0ID0gKGRvY3VtZW50LmNvbXBhdE1vZGUgfHwgXCJcIikgPT09IFwiQ1NTMUNvbXBhdFwiO1xuICAgIHJldHVybiBzdXBwb3J0UGFnZU9mZnNldCA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IGlzQ1NTMUNvbXBhdCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgOiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgfVxufTtcblxudmFyIHNjcm9sbENvbnRhaW5lcldpZHRoID0gZnVuY3Rpb24gc2Nyb2xsQ29udGFpbmVyV2lkdGgob3B0aW9ucykge1xuICB2YXIgY29udGFpbmVyRWxlbWVudCA9IG9wdGlvbnMuZGF0YS5jb250YWluZXJFbGVtZW50O1xuICBpZiAoY29udGFpbmVyRWxlbWVudCAmJiBjb250YWluZXJFbGVtZW50ICE9PSBkb2N1bWVudCAmJiBjb250YWluZXJFbGVtZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQuc2Nyb2xsV2lkdGggLSBjb250YWluZXJFbGVtZW50Lm9mZnNldFdpZHRoO1xuICB9IGVsc2Uge1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIHJldHVybiBNYXRoLm1heChib2R5LnNjcm9sbFdpZHRoLCBib2R5Lm9mZnNldFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBodG1sLnNjcm9sbFdpZHRoLCBodG1sLm9mZnNldFdpZHRoKTtcbiAgfVxufTtcblxudmFyIHNjcm9sbENvbnRhaW5lckhlaWdodCA9IGZ1bmN0aW9uIHNjcm9sbENvbnRhaW5lckhlaWdodChvcHRpb25zKSB7XG4gIHZhciBjb250YWluZXJFbGVtZW50ID0gb3B0aW9ucy5kYXRhLmNvbnRhaW5lckVsZW1lbnQ7XG4gIGlmIChjb250YWluZXJFbGVtZW50ICYmIGNvbnRhaW5lckVsZW1lbnQgIT09IGRvY3VtZW50ICYmIGNvbnRhaW5lckVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudC5zY3JvbGxIZWlnaHQgLSBjb250YWluZXJFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICByZXR1cm4gTWF0aC5tYXgoYm9keS5zY3JvbGxIZWlnaHQsIGJvZHkub2Zmc2V0SGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwub2Zmc2V0SGVpZ2h0KTtcbiAgfVxufTtcblxudmFyIGFuaW1hdGVTY3JvbGwgPSBmdW5jdGlvbiBhbmltYXRlU2Nyb2xsKGVhc2luZywgb3B0aW9ucywgdGltZXN0YW1wKSB7XG4gIHZhciBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gIC8vIENhbmNlbCBvbiBzcGVjaWZpYyBldmVudHNcbiAgaWYgKCFvcHRpb25zLmlnbm9yZUNhbmNlbEV2ZW50cyAmJiBkYXRhLmNhbmNlbCkge1xuICAgIGlmIChfc2Nyb2xsRXZlbnRzMi5kZWZhdWx0LnJlZ2lzdGVyZWRbJ2VuZCddKSB7XG4gICAgICBfc2Nyb2xsRXZlbnRzMi5kZWZhdWx0LnJlZ2lzdGVyZWRbJ2VuZCddKGRhdGEudG8sIGRhdGEudGFyZ2V0LCBkYXRhLmN1cnJlbnRQb3NpdGlvblkpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH07XG5cbiAgZGF0YS5kZWx0YSA9IE1hdGgucm91bmQoZGF0YS50YXJnZXRQb3NpdGlvbiAtIGRhdGEuc3RhcnRQb3NpdGlvbik7XG5cbiAgaWYgKGRhdGEuc3RhcnQgPT09IG51bGwpIHtcbiAgICBkYXRhLnN0YXJ0ID0gdGltZXN0YW1wO1xuICB9XG5cbiAgZGF0YS5wcm9ncmVzcyA9IHRpbWVzdGFtcCAtIGRhdGEuc3RhcnQ7XG5cbiAgZGF0YS5wZXJjZW50ID0gZGF0YS5wcm9ncmVzcyA+PSBkYXRhLmR1cmF0aW9uID8gMSA6IGVhc2luZyhkYXRhLnByb2dyZXNzIC8gZGF0YS5kdXJhdGlvbik7XG5cbiAgZGF0YS5jdXJyZW50UG9zaXRpb24gPSBkYXRhLnN0YXJ0UG9zaXRpb24gKyBNYXRoLmNlaWwoZGF0YS5kZWx0YSAqIGRhdGEucGVyY2VudCk7XG5cbiAgaWYgKGRhdGEuY29udGFpbmVyRWxlbWVudCAmJiBkYXRhLmNvbnRhaW5lckVsZW1lbnQgIT09IGRvY3VtZW50ICYmIGRhdGEuY29udGFpbmVyRWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgIGRhdGEuY29udGFpbmVyRWxlbWVudC5zY3JvbGxMZWZ0ID0gZGF0YS5jdXJyZW50UG9zaXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuY29udGFpbmVyRWxlbWVudC5zY3JvbGxUb3AgPSBkYXRhLmN1cnJlbnRQb3NpdGlvbjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgd2luZG93LnNjcm9sbFRvKGRhdGEuY3VycmVudFBvc2l0aW9uLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGRhdGEuY3VycmVudFBvc2l0aW9uKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0YS5wZXJjZW50IDwgMSkge1xuICAgIHZhciBlYXNlZEFuaW1hdGUgPSBhbmltYXRlU2Nyb2xsLmJpbmQobnVsbCwgZWFzaW5nLCBvcHRpb25zKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVIZWxwZXIuY2FsbCh3aW5kb3csIGVhc2VkQW5pbWF0ZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKF9zY3JvbGxFdmVudHMyLmRlZmF1bHQucmVnaXN0ZXJlZFsnZW5kJ10pIHtcbiAgICBfc2Nyb2xsRXZlbnRzMi5kZWZhdWx0LnJlZ2lzdGVyZWRbJ2VuZCddKGRhdGEudG8sIGRhdGEudGFyZ2V0LCBkYXRhLmN1cnJlbnRQb3NpdGlvbik7XG4gIH1cbn07XG5cbnZhciBzZXRDb250YWluZXIgPSBmdW5jdGlvbiBzZXRDb250YWluZXIob3B0aW9ucykge1xuICBvcHRpb25zLmRhdGEuY29udGFpbmVyRWxlbWVudCA9ICFvcHRpb25zID8gbnVsbCA6IG9wdGlvbnMuY29udGFpbmVySWQgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLmNvbnRhaW5lcklkKSA6IG9wdGlvbnMuY29udGFpbmVyICYmIG9wdGlvbnMuY29udGFpbmVyLm5vZGVUeXBlID8gb3B0aW9ucy5jb250YWluZXIgOiBkb2N1bWVudDtcbn07XG5cbnZhciBhbmltYXRlVG9wU2Nyb2xsID0gZnVuY3Rpb24gYW5pbWF0ZVRvcFNjcm9sbChzY3JvbGxPZmZzZXQsIG9wdGlvbnMsIHRvLCB0YXJnZXQpIHtcbiAgb3B0aW9ucy5kYXRhID0gb3B0aW9ucy5kYXRhIHx8IG1ha2VEYXRhKCk7XG5cbiAgd2luZG93LmNsZWFyVGltZW91dChvcHRpb25zLmRhdGEuZGVsYXlUaW1lb3V0KTtcblxuICBfY2FuY2VsRXZlbnRzMi5kZWZhdWx0LnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNhbmNlbCA9IHRydWU7XG4gIH0pO1xuXG4gIHNldENvbnRhaW5lcihvcHRpb25zKTtcblxuICBvcHRpb25zLmRhdGEuc3RhcnQgPSBudWxsO1xuICBvcHRpb25zLmRhdGEuY2FuY2VsID0gZmFsc2U7XG4gIG9wdGlvbnMuZGF0YS5zdGFydFBvc2l0aW9uID0gb3B0aW9ucy5ob3Jpem9udGFsID8gY3VycmVudFBvc2l0aW9uWChvcHRpb25zKSA6IGN1cnJlbnRQb3NpdGlvblkob3B0aW9ucyk7XG4gIG9wdGlvbnMuZGF0YS50YXJnZXRQb3NpdGlvbiA9IG9wdGlvbnMuYWJzb2x1dGUgPyBzY3JvbGxPZmZzZXQgOiBzY3JvbGxPZmZzZXQgKyBvcHRpb25zLmRhdGEuc3RhcnRQb3NpdGlvbjtcblxuICBpZiAob3B0aW9ucy5kYXRhLnN0YXJ0UG9zaXRpb24gPT09IG9wdGlvbnMuZGF0YS50YXJnZXRQb3NpdGlvbikge1xuICAgIGlmIChfc2Nyb2xsRXZlbnRzMi5kZWZhdWx0LnJlZ2lzdGVyZWRbJ2VuZCddKSB7XG4gICAgICBfc2Nyb2xsRXZlbnRzMi5kZWZhdWx0LnJlZ2lzdGVyZWRbJ2VuZCddKG9wdGlvbnMuZGF0YS50bywgb3B0aW9ucy5kYXRhLnRhcmdldCwgb3B0aW9ucy5kYXRhLmN1cnJlbnRQb3NpdGlvbik7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIG9wdGlvbnMuZGF0YS5kZWx0YSA9IE1hdGgucm91bmQob3B0aW9ucy5kYXRhLnRhcmdldFBvc2l0aW9uIC0gb3B0aW9ucy5kYXRhLnN0YXJ0UG9zaXRpb24pO1xuXG4gIG9wdGlvbnMuZGF0YS5kdXJhdGlvbiA9IGZ1bmN0aW9uV3JhcHBlcihvcHRpb25zLmR1cmF0aW9uKShvcHRpb25zLmRhdGEuZGVsdGEpO1xuICBvcHRpb25zLmRhdGEuZHVyYXRpb24gPSBpc05hTihwYXJzZUZsb2F0KG9wdGlvbnMuZGF0YS5kdXJhdGlvbikpID8gMTAwMCA6IHBhcnNlRmxvYXQob3B0aW9ucy5kYXRhLmR1cmF0aW9uKTtcbiAgb3B0aW9ucy5kYXRhLnRvID0gdG87XG4gIG9wdGlvbnMuZGF0YS50YXJnZXQgPSB0YXJnZXQ7XG5cbiAgdmFyIGVhc2luZyA9IGdldEFuaW1hdGlvblR5cGUob3B0aW9ucyk7XG4gIHZhciBlYXNlZEFuaW1hdGUgPSBhbmltYXRlU2Nyb2xsLmJpbmQobnVsbCwgZWFzaW5nLCBvcHRpb25zKTtcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmRlbGF5ID4gMCkge1xuICAgIG9wdGlvbnMuZGF0YS5kZWxheVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3Njcm9sbEV2ZW50czIuZGVmYXVsdC5yZWdpc3RlcmVkWydiZWdpbiddKSB7XG4gICAgICAgIF9zY3JvbGxFdmVudHMyLmRlZmF1bHQucmVnaXN0ZXJlZFsnYmVnaW4nXShvcHRpb25zLmRhdGEudG8sIG9wdGlvbnMuZGF0YS50YXJnZXQpO1xuICAgICAgfVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSGVscGVyLmNhbGwod2luZG93LCBlYXNlZEFuaW1hdGUpO1xuICAgIH0sIG9wdGlvbnMuZGVsYXkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChfc2Nyb2xsRXZlbnRzMi5kZWZhdWx0LnJlZ2lzdGVyZWRbJ2JlZ2luJ10pIHtcbiAgICBfc2Nyb2xsRXZlbnRzMi5kZWZhdWx0LnJlZ2lzdGVyZWRbJ2JlZ2luJ10ob3B0aW9ucy5kYXRhLnRvLCBvcHRpb25zLmRhdGEudGFyZ2V0KTtcbiAgfVxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVIZWxwZXIuY2FsbCh3aW5kb3csIGVhc2VkQW5pbWF0ZSk7XG59O1xuXG52YXIgcHJvY2VlZE9wdGlvbnMgPSBmdW5jdGlvbiBwcm9jZWVkT3B0aW9ucyhvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9ucyk7XG4gIG9wdGlvbnMuZGF0YSA9IG9wdGlvbnMuZGF0YSB8fCBtYWtlRGF0YSgpO1xuICBvcHRpb25zLmFic29sdXRlID0gdHJ1ZTtcbiAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG52YXIgc2Nyb2xsVG9Ub3AgPSBmdW5jdGlvbiBzY3JvbGxUb1RvcChvcHRpb25zKSB7XG4gIGFuaW1hdGVUb3BTY3JvbGwoMCwgcHJvY2VlZE9wdGlvbnMob3B0aW9ucykpO1xufTtcblxudmFyIHNjcm9sbFRvID0gZnVuY3Rpb24gc2Nyb2xsVG8odG9Qb3NpdGlvbiwgb3B0aW9ucykge1xuICBhbmltYXRlVG9wU2Nyb2xsKHRvUG9zaXRpb24sIHByb2NlZWRPcHRpb25zKG9wdGlvbnMpKTtcbn07XG5cbnZhciBzY3JvbGxUb0JvdHRvbSA9IGZ1bmN0aW9uIHNjcm9sbFRvQm90dG9tKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IHByb2NlZWRPcHRpb25zKG9wdGlvbnMpO1xuICBzZXRDb250YWluZXIob3B0aW9ucyk7XG4gIGFuaW1hdGVUb3BTY3JvbGwob3B0aW9ucy5ob3Jpem9udGFsID8gc2Nyb2xsQ29udGFpbmVyV2lkdGgob3B0aW9ucykgOiBzY3JvbGxDb250YWluZXJIZWlnaHQob3B0aW9ucyksIG9wdGlvbnMpO1xufTtcblxudmFyIHNjcm9sbE1vcmUgPSBmdW5jdGlvbiBzY3JvbGxNb3JlKHRvUG9zaXRpb24sIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IHByb2NlZWRPcHRpb25zKG9wdGlvbnMpO1xuICBzZXRDb250YWluZXIob3B0aW9ucyk7XG4gIHZhciBjdXJyZW50UG9zaXRpb24gPSBvcHRpb25zLmhvcml6b250YWwgPyBjdXJyZW50UG9zaXRpb25YKG9wdGlvbnMpIDogY3VycmVudFBvc2l0aW9uWShvcHRpb25zKTtcbiAgYW5pbWF0ZVRvcFNjcm9sbCh0b1Bvc2l0aW9uICsgY3VycmVudFBvc2l0aW9uLCBvcHRpb25zKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgYW5pbWF0ZVRvcFNjcm9sbDogYW5pbWF0ZVRvcFNjcm9sbCxcbiAgZ2V0QW5pbWF0aW9uVHlwZTogZ2V0QW5pbWF0aW9uVHlwZSxcbiAgc2Nyb2xsVG9Ub3A6IHNjcm9sbFRvVG9wLFxuICBzY3JvbGxUb0JvdHRvbTogc2Nyb2xsVG9Cb3R0b20sXG4gIHNjcm9sbFRvOiBzY3JvbGxUbyxcbiAgc2Nyb2xsTW9yZTogc2Nyb2xsTW9yZVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcGFzc2l2ZUV2ZW50TGlzdGVuZXJzID0gcmVxdWlyZSgnLi9wYXNzaXZlLWV2ZW50LWxpc3RlbmVycycpO1xuXG52YXIgZXZlbnRzID0gWydtb3VzZWRvd24nLCAnbW91c2V3aGVlbCcsICd0b3VjaG1vdmUnLCAna2V5ZG93biddO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKGNhbmNlbEV2ZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gKDAsIF9wYXNzaXZlRXZlbnRMaXN0ZW5lcnMuYWRkUGFzc2l2ZUV2ZW50TGlzdGVuZXIpKGRvY3VtZW50LCBldmVudCwgY2FuY2VsRXZlbnQpO1xuICAgIH0pO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8qXHJcbiAqIFRlbGwgdGhlIGJyb3dzZXIgdGhhdCB0aGUgZXZlbnQgbGlzdGVuZXIgd29uJ3QgcHJldmVudCBhIHNjcm9sbC5cclxuICogQWxsb3dpbmcgdGhlIGJyb3dzZXIgdG8gY29udGludWUgc2Nyb2xsaW5nIHdpdGhvdXQgaGF2aW5nIHRvXHJcbiAqIHRvIHdhaXQgZm9yIHRoZSBsaXN0ZW5lciB0byByZXR1cm4uXHJcbiAqL1xudmFyIGFkZFBhc3NpdmVFdmVudExpc3RlbmVyID0gZXhwb3J0cy5hZGRQYXNzaXZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZFBhc3NpdmVFdmVudExpc3RlbmVyKHRhcmdldCwgZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICB2YXIgc3VwcG9ydHNQYXNzaXZlT3B0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdXBwb3J0c1Bhc3NpdmVPcHRpb24gPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmVPcHRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgb3B0cyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlT3B0aW9uO1xuICB9KCk7XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbiA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xufTtcblxudmFyIHJlbW92ZVBhc3NpdmVFdmVudExpc3RlbmVyID0gZXhwb3J0cy5yZW1vdmVQYXNzaXZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZVBhc3NpdmVFdmVudExpc3RlbmVyKHRhcmdldCwgZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfc2Nyb2xsZXIgPSByZXF1aXJlKCcuL3Njcm9sbGVyJyk7XG5cbnZhciBfc2Nyb2xsZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2Nyb2xsZXIpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gIHZhciBFbGVtZW50ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoRWxlbWVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBFbGVtZW50KHByb3BzKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRWxlbWVudCk7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChFbGVtZW50Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRWxlbWVudCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgX3RoaXMuY2hpbGRCaW5kaW5ncyA9IHtcbiAgICAgICAgZG9tTm9kZTogbnVsbFxuICAgICAgfTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRWxlbWVudCwgW3tcbiAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFbGVtcyh0aGlzLnByb3BzLm5hbWUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5uYW1lICE9PSBwcmV2UHJvcHMubmFtZSkge1xuICAgICAgICAgIHRoaXMucmVnaXN0ZXJFbGVtcyh0aGlzLnByb3BzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3Njcm9sbGVyMi5kZWZhdWx0LnVucmVnaXN0ZXIodGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZWdpc3RlckVsZW1zJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlckVsZW1zKG5hbWUpIHtcbiAgICAgICAgX3Njcm9sbGVyMi5kZWZhdWx0LnJlZ2lzdGVyKG5hbWUsIHRoaXMuY2hpbGRCaW5kaW5ncy5kb21Ob2RlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgcGFyZW50QmluZGluZ3M6IHRoaXMuY2hpbGRCaW5kaW5ncyB9KSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEVsZW1lbnQ7XG4gIH0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbiAgO1xuXG4gIEVsZW1lbnQucHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIGlkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xuICB9O1xuXG4gIHJldHVybiBFbGVtZW50O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIEV2ZW50cyA9IHtcblx0cmVnaXN0ZXJlZDoge30sXG5cdHNjcm9sbEV2ZW50OiB7XG5cdFx0cmVnaXN0ZXI6IGZ1bmN0aW9uIHJlZ2lzdGVyKGV2dE5hbWUsIGNhbGxiYWNrKSB7XG5cdFx0XHRFdmVudHMucmVnaXN0ZXJlZFtldnROYW1lXSA9IGNhbGxiYWNrO1xuXHRcdH0sXG5cdFx0cmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoZXZ0TmFtZSkge1xuXHRcdFx0RXZlbnRzLnJlZ2lzdGVyZWRbZXZ0TmFtZV0gPSBudWxsO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRXZlbnRzOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9wYXNzaXZlRXZlbnRMaXN0ZW5lcnMgPSByZXF1aXJlKCcuL3Bhc3NpdmUtZXZlbnQtbGlzdGVuZXJzJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc2Nyb2xsSGFzaCA9IHtcbiAgbW91bnRGbGFnOiBmYWxzZSxcbiAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICBzY3JvbGxlcjogbnVsbCxcbiAgY29udGFpbmVyczoge30sXG5cbiAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KHNjcm9sbGVyKSB7XG4gICAgdGhpcy5zY3JvbGxlciA9IHNjcm9sbGVyO1xuXG4gICAgdGhpcy5oYW5kbGVIYXNoQ2hhbmdlID0gdGhpcy5oYW5kbGVIYXNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLmhhbmRsZUhhc2hDaGFuZ2UpO1xuXG4gICAgdGhpcy5pbml0U3RhdGVGcm9tSGFzaCgpO1xuICAgIHRoaXMubW91bnRGbGFnID0gdHJ1ZTtcbiAgfSxcbiAgbWFwQ29udGFpbmVyOiBmdW5jdGlvbiBtYXBDb250YWluZXIodG8sIGNvbnRhaW5lcikge1xuICAgIHRoaXMuY29udGFpbmVyc1t0b10gPSBjb250YWluZXI7XG4gIH0sXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gaXNNb3VudGVkKCkge1xuICAgIHJldHVybiB0aGlzLm1vdW50RmxhZztcbiAgfSxcbiAgaXNJbml0aWFsaXplZDogZnVuY3Rpb24gaXNJbml0aWFsaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXplZDtcbiAgfSxcbiAgaW5pdFN0YXRlRnJvbUhhc2g6IGZ1bmN0aW9uIGluaXRTdGF0ZUZyb21IYXNoKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgaGFzaCA9IHRoaXMuZ2V0SGFzaCgpO1xuICAgIGlmIChoYXNoKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnNjcm9sbFRvKGhhc2gsIHRydWUpO1xuICAgICAgICBfdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB9LCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgc2Nyb2xsVG86IGZ1bmN0aW9uIHNjcm9sbFRvKHRvLCBpc0luaXQpIHtcbiAgICB2YXIgc2Nyb2xsZXIgPSB0aGlzLnNjcm9sbGVyO1xuICAgIHZhciBlbGVtZW50ID0gc2Nyb2xsZXIuZ2V0KHRvKTtcbiAgICBpZiAoZWxlbWVudCAmJiAoaXNJbml0IHx8IHRvICE9PSBzY3JvbGxlci5nZXRBY3RpdmVMaW5rKCkpKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5jb250YWluZXJzW3RvXSB8fCBkb2N1bWVudDtcbiAgICAgIHNjcm9sbGVyLnNjcm9sbFRvKHRvLCB7IGNvbnRhaW5lcjogY29udGFpbmVyIH0pO1xuICAgIH1cbiAgfSxcbiAgZ2V0SGFzaDogZnVuY3Rpb24gZ2V0SGFzaCgpIHtcbiAgICByZXR1cm4gX3V0aWxzMi5kZWZhdWx0LmdldEhhc2goKTtcbiAgfSxcbiAgY2hhbmdlSGFzaDogZnVuY3Rpb24gY2hhbmdlSGFzaCh0bywgc2F2ZUhhc2hIaXN0b3J5KSB7XG4gICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZCgpICYmIF91dGlsczIuZGVmYXVsdC5nZXRIYXNoKCkgIT09IHRvKSB7XG4gICAgICBfdXRpbHMyLmRlZmF1bHQudXBkYXRlSGFzaCh0bywgc2F2ZUhhc2hIaXN0b3J5KTtcbiAgICB9XG4gIH0sXG4gIGhhbmRsZUhhc2hDaGFuZ2U6IGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gICAgdGhpcy5zY3JvbGxUbyh0aGlzLmdldEhhc2goKSk7XG4gIH0sXG4gIHVubW91bnQ6IGZ1bmN0aW9uIHVubW91bnQoKSB7XG4gICAgdGhpcy5zY3JvbGxlciA9IG51bGw7XG4gICAgdGhpcy5jb250YWluZXJzID0gbnVsbDtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMuaGFuZGxlSGFzaENoYW5nZSk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNjcm9sbEhhc2g7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfc2Nyb2xsU3B5ID0gcmVxdWlyZSgnLi9zY3JvbGwtc3B5Jyk7XG5cbnZhciBfc2Nyb2xsU3B5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Njcm9sbFNweSk7XG5cbnZhciBfc2Nyb2xsZXIgPSByZXF1aXJlKCcuL3Njcm9sbGVyJyk7XG5cbnZhciBfc2Nyb2xsZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2Nyb2xsZXIpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9zY3JvbGxIYXNoID0gcmVxdWlyZSgnLi9zY3JvbGwtaGFzaCcpO1xuXG52YXIgX3Njcm9sbEhhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2Nyb2xsSGFzaCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHByb3RvVHlwZXMgPSB7XG4gIHRvOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICBjb250YWluZXJJZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNvbnRhaW5lcjogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGFjdGl2ZUNsYXNzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgc3B5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGhvcml6b250YWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc21vb3RoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLFxuICBvZmZzZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBkZWxheTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGlzRHluYW1pYzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBvbkNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGR1cmF0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY10pLFxuICBhYnNvbHV0ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBvblNldEFjdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblNldEluYWN0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGlnbm9yZUNhbmNlbEV2ZW50czogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBoYXNoU3B5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNhdmVIYXNoSGlzdG9yeTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoQ29tcG9uZW50LCBjdXN0b21TY3JvbGxlcikge1xuXG4gIHZhciBzY3JvbGxlciA9IGN1c3RvbVNjcm9sbGVyIHx8IF9zY3JvbGxlcjIuZGVmYXVsdDtcblxuICB2YXIgTGluayA9IGZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhMaW5rLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGluayk7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChMaW5rLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTGluaykpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKF90aGlzKTtcblxuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgIH07XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKExpbmssIFt7XG4gICAgICBrZXk6ICdnZXRTY3JvbGxTcHlDb250YWluZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNjcm9sbFNweUNvbnRhaW5lcigpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lcklkID0gdGhpcy5wcm9wcy5jb250YWluZXJJZDtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMucHJvcHMuY29udGFpbmVyO1xuXG4gICAgICAgIGlmIChjb250YWluZXJJZCAmJiAhY29udGFpbmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250YWluZXIgJiYgY29udGFpbmVyLm5vZGVUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNweSB8fCB0aGlzLnByb3BzLmhhc2hTcHkpIHtcbiAgICAgICAgICB2YXIgc2Nyb2xsU3B5Q29udGFpbmVyID0gdGhpcy5nZXRTY3JvbGxTcHlDb250YWluZXIoKTtcblxuICAgICAgICAgIGlmICghX3Njcm9sbFNweTIuZGVmYXVsdC5pc01vdW50ZWQoc2Nyb2xsU3B5Q29udGFpbmVyKSkge1xuICAgICAgICAgICAgX3Njcm9sbFNweTIuZGVmYXVsdC5tb3VudChzY3JvbGxTcHlDb250YWluZXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLnByb3BzLmhhc2hTcHkpIHtcbiAgICAgICAgICAgIGlmICghX3Njcm9sbEhhc2gyLmRlZmF1bHQuaXNNb3VudGVkKCkpIHtcbiAgICAgICAgICAgICAgX3Njcm9sbEhhc2gyLmRlZmF1bHQubW91bnQoc2Nyb2xsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3Njcm9sbEhhc2gyLmRlZmF1bHQubWFwQ29udGFpbmVyKHRoaXMucHJvcHMudG8sIHNjcm9sbFNweUNvbnRhaW5lcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3Njcm9sbFNweTIuZGVmYXVsdC5hZGRTcHlIYW5kbGVyKHRoaXMuc3B5SGFuZGxlciwgc2Nyb2xsU3B5Q29udGFpbmVyKTtcblxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29udGFpbmVyOiBzY3JvbGxTcHlDb250YWluZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgX3Njcm9sbFNweTIuZGVmYXVsdC51bm1vdW50KHRoaXMuc3RhdGVIYW5kbGVyLCB0aGlzLnNweUhhbmRsZXIpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gXCJcIjtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAmJiB0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICAgIGNsYXNzTmFtZSA9ICgodGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgXCJcIikgKyBcIiBcIiArICh0aGlzLnByb3BzLmFjdGl2ZUNsYXNzIHx8IFwiYWN0aXZlXCIpKS50cmltKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG5cbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBwcm90b1R5cGVzKSB7XG4gICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICBkZWxldGUgcHJvcHNbcHJvcF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICBwcm9wcy5vbkNsaWNrID0gdGhpcy5oYW5kbGVDbGljaztcblxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcyk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIExpbms7XG4gIH0oX3JlYWN0Mi5kZWZhdWx0LlB1cmVDb21wb25lbnQpO1xuXG4gIHZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuc2Nyb2xsVG8gPSBmdW5jdGlvbiAodG8sIHByb3BzKSB7XG4gICAgICBzY3JvbGxlci5zY3JvbGxUbyh0bywgX2V4dGVuZHMoe30sIF90aGlzMi5zdGF0ZSwgcHJvcHMpKTtcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAvKlxyXG4gICAgICAgKiBnaXZlIHRoZSBwb3NpYmlsaXR5IHRvIG92ZXJyaWRlIG9uQ2xpY2tcclxuICAgICAgICovXG5cbiAgICAgIGlmIChfdGhpczIucHJvcHMub25DbGljaykge1xuICAgICAgICBfdGhpczIucHJvcHMub25DbGljayhldmVudCk7XG4gICAgICB9XG5cbiAgICAgIC8qXHJcbiAgICAgICAqIGRvbnQgYnViYmxlIHRoZSBuYXZpZ2F0aW9uXHJcbiAgICAgICAqL1xuXG4gICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLypcclxuICAgICAgICogZG8gdGhlIG1hZ2ljIVxyXG4gICAgICAgKi9cbiAgICAgIF90aGlzMi5zY3JvbGxUbyhfdGhpczIucHJvcHMudG8sIF90aGlzMi5wcm9wcyk7XG4gICAgfTtcblxuICAgIHRoaXMuc3B5SGFuZGxlciA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICB2YXIgc2Nyb2xsU3B5Q29udGFpbmVyID0gX3RoaXMyLmdldFNjcm9sbFNweUNvbnRhaW5lcigpO1xuXG4gICAgICBpZiAoX3Njcm9sbEhhc2gyLmRlZmF1bHQuaXNNb3VudGVkKCkgJiYgIV9zY3JvbGxIYXNoMi5kZWZhdWx0LmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBob3Jpem9udGFsID0gX3RoaXMyLnByb3BzLmhvcml6b250YWw7XG5cbiAgICAgIHZhciB0byA9IF90aGlzMi5wcm9wcy50bztcbiAgICAgIHZhciBlbGVtZW50ID0gbnVsbDtcbiAgICAgIHZhciBpc0luc2lkZSA9IHZvaWQgMDtcbiAgICAgIHZhciBpc091dHNpZGUgPSB2b2lkIDA7XG5cbiAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgIHZhciBlbGVtTGVmdEJvdW5kID0gMDtcbiAgICAgICAgdmFyIGVsZW1SaWdodEJvdW5kID0gMDtcbiAgICAgICAgdmFyIGNvbnRhaW5lckxlZnQgPSAwO1xuXG4gICAgICAgIGlmIChzY3JvbGxTcHlDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckNvcmRzID0gc2Nyb2xsU3B5Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnRhaW5lckxlZnQgPSBjb250YWluZXJDb3Jkcy5sZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlbGVtZW50IHx8IF90aGlzMi5wcm9wcy5pc0R5bmFtaWMpIHtcbiAgICAgICAgICBlbGVtZW50ID0gc2Nyb2xsZXIuZ2V0KHRvKTtcbiAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgY29yZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGVsZW1MZWZ0Qm91bmQgPSBjb3Jkcy5sZWZ0IC0gY29udGFpbmVyTGVmdCArIHg7XG4gICAgICAgICAgZWxlbVJpZ2h0Qm91bmQgPSBlbGVtTGVmdEJvdW5kICsgY29yZHMud2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2Zmc2V0WCA9IHggLSBfdGhpczIucHJvcHMub2Zmc2V0O1xuICAgICAgICBpc0luc2lkZSA9IG9mZnNldFggPj0gTWF0aC5mbG9vcihlbGVtTGVmdEJvdW5kKSAmJiBvZmZzZXRYIDwgTWF0aC5mbG9vcihlbGVtUmlnaHRCb3VuZCk7XG4gICAgICAgIGlzT3V0c2lkZSA9IG9mZnNldFggPCBNYXRoLmZsb29yKGVsZW1MZWZ0Qm91bmQpIHx8IG9mZnNldFggPj0gTWF0aC5mbG9vcihlbGVtUmlnaHRCb3VuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZWxlbVRvcEJvdW5kID0gMDtcbiAgICAgICAgdmFyIGVsZW1Cb3R0b21Cb3VuZCA9IDA7XG4gICAgICAgIHZhciBjb250YWluZXJUb3AgPSAwO1xuXG4gICAgICAgIGlmIChzY3JvbGxTcHlDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgdmFyIF9jb250YWluZXJDb3JkcyA9IHNjcm9sbFNweUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb250YWluZXJUb3AgPSBfY29udGFpbmVyQ29yZHMudG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlbGVtZW50IHx8IF90aGlzMi5wcm9wcy5pc0R5bmFtaWMpIHtcbiAgICAgICAgICBlbGVtZW50ID0gc2Nyb2xsZXIuZ2V0KHRvKTtcbiAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX2NvcmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBlbGVtVG9wQm91bmQgPSBfY29yZHMudG9wIC0gY29udGFpbmVyVG9wICsgeTtcbiAgICAgICAgICBlbGVtQm90dG9tQm91bmQgPSBlbGVtVG9wQm91bmQgKyBfY29yZHMuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldFkgPSB5IC0gX3RoaXMyLnByb3BzLm9mZnNldDtcbiAgICAgICAgaXNJbnNpZGUgPSBvZmZzZXRZID49IE1hdGguZmxvb3IoZWxlbVRvcEJvdW5kKSAmJiBvZmZzZXRZIDwgTWF0aC5mbG9vcihlbGVtQm90dG9tQm91bmQpO1xuICAgICAgICBpc091dHNpZGUgPSBvZmZzZXRZIDwgTWF0aC5mbG9vcihlbGVtVG9wQm91bmQpIHx8IG9mZnNldFkgPj0gTWF0aC5mbG9vcihlbGVtQm90dG9tQm91bmQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWN0aXZlTGluayA9IHNjcm9sbGVyLmdldEFjdGl2ZUxpbmsoKTtcblxuICAgICAgaWYgKGlzT3V0c2lkZSkge1xuICAgICAgICBpZiAodG8gPT09IGFjdGl2ZUxpbmspIHtcbiAgICAgICAgICBzY3JvbGxlci5zZXRBY3RpdmVMaW5rKHZvaWQgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMyLnByb3BzLmhhc2hTcHkgJiYgX3Njcm9sbEhhc2gyLmRlZmF1bHQuZ2V0SGFzaCgpID09PSB0bykge1xuICAgICAgICAgIHZhciBfcHJvcHMkc2F2ZUhhc2hIaXN0b3IgPSBfdGhpczIucHJvcHMuc2F2ZUhhc2hIaXN0b3J5LFxuICAgICAgICAgICAgICBzYXZlSGFzaEhpc3RvcnkgPSBfcHJvcHMkc2F2ZUhhc2hIaXN0b3IgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3Byb3BzJHNhdmVIYXNoSGlzdG9yO1xuXG4gICAgICAgICAgX3Njcm9sbEhhc2gyLmRlZmF1bHQuY2hhbmdlSGFzaChcIlwiLCBzYXZlSGFzaEhpc3RvcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzMi5wcm9wcy5zcHkgJiYgX3RoaXMyLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IGFjdGl2ZTogZmFsc2UgfSk7XG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uU2V0SW5hY3RpdmUgJiYgX3RoaXMyLnByb3BzLm9uU2V0SW5hY3RpdmUodG8sIGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0luc2lkZSAmJiAoYWN0aXZlTGluayAhPT0gdG8gfHwgX3RoaXMyLnN0YXRlLmFjdGl2ZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgIHNjcm9sbGVyLnNldEFjdGl2ZUxpbmsodG8pO1xuXG4gICAgICAgIHZhciBfcHJvcHMkc2F2ZUhhc2hIaXN0b3IyID0gX3RoaXMyLnByb3BzLnNhdmVIYXNoSGlzdG9yeSxcbiAgICAgICAgICAgIF9zYXZlSGFzaEhpc3RvcnkgPSBfcHJvcHMkc2F2ZUhhc2hIaXN0b3IyID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9wcm9wcyRzYXZlSGFzaEhpc3RvcjI7XG5cbiAgICAgICAgX3RoaXMyLnByb3BzLmhhc2hTcHkgJiYgX3Njcm9sbEhhc2gyLmRlZmF1bHQuY2hhbmdlSGFzaCh0bywgX3NhdmVIYXNoSGlzdG9yeSk7XG5cbiAgICAgICAgaWYgKF90aGlzMi5wcm9wcy5zcHkpIHtcbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyBhY3RpdmU6IHRydWUgfSk7XG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uU2V0QWN0aXZlICYmIF90aGlzMi5wcm9wcy5vblNldEFjdGl2ZSh0bywgZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIDtcblxuICBMaW5rLnByb3BUeXBlcyA9IHByb3RvVHlwZXM7XG5cbiAgTGluay5kZWZhdWx0UHJvcHMgPSB7IG9mZnNldDogMCB9O1xuXG4gIHJldHVybiBMaW5rO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfbG9kYXNoID0gcmVxdWlyZSgnbG9kYXNoLnRocm90dGxlJyk7XG5cbnZhciBfbG9kYXNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaCk7XG5cbnZhciBfcGFzc2l2ZUV2ZW50TGlzdGVuZXJzID0gcmVxdWlyZSgnLi9wYXNzaXZlLWV2ZW50LWxpc3RlbmVycycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBUaGUgZXZlbnRIYW5kbGVyIHdpbGwgZXhlY3V0ZSBhdCBhIHJhdGUgb2YgMTVmcHNcbnZhciBldmVudFRocm90dGxlciA9IGZ1bmN0aW9uIGV2ZW50VGhyb3R0bGVyKGV2ZW50SGFuZGxlcikge1xuICByZXR1cm4gKDAsIF9sb2Rhc2gyLmRlZmF1bHQpKGV2ZW50SGFuZGxlciwgNjYpO1xufTtcblxudmFyIHNjcm9sbFNweSA9IHtcblxuICBzcHlDYWxsYmFja3M6IFtdLFxuICBzcHlTZXRTdGF0ZTogW10sXG4gIHNjcm9sbFNweUNvbnRhaW5lcnM6IFtdLFxuXG4gIG1vdW50OiBmdW5jdGlvbiBtb3VudChzY3JvbGxTcHlDb250YWluZXIpIHtcbiAgICBpZiAoc2Nyb2xsU3B5Q29udGFpbmVyKSB7XG4gICAgICB2YXIgZXZlbnRIYW5kbGVyID0gZXZlbnRUaHJvdHRsZXIoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHNjcm9sbFNweS5zY3JvbGxIYW5kbGVyKHNjcm9sbFNweUNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICAgIHNjcm9sbFNweS5zY3JvbGxTcHlDb250YWluZXJzLnB1c2goc2Nyb2xsU3B5Q29udGFpbmVyKTtcbiAgICAgICgwLCBfcGFzc2l2ZUV2ZW50TGlzdGVuZXJzLmFkZFBhc3NpdmVFdmVudExpc3RlbmVyKShzY3JvbGxTcHlDb250YWluZXIsICdzY3JvbGwnLCBldmVudEhhbmRsZXIpO1xuICAgIH1cbiAgfSxcbiAgaXNNb3VudGVkOiBmdW5jdGlvbiBpc01vdW50ZWQoc2Nyb2xsU3B5Q29udGFpbmVyKSB7XG4gICAgcmV0dXJuIHNjcm9sbFNweS5zY3JvbGxTcHlDb250YWluZXJzLmluZGV4T2Yoc2Nyb2xsU3B5Q29udGFpbmVyKSAhPT0gLTE7XG4gIH0sXG4gIGN1cnJlbnRQb3NpdGlvblg6IGZ1bmN0aW9uIGN1cnJlbnRQb3NpdGlvblgoc2Nyb2xsU3B5Q29udGFpbmVyKSB7XG4gICAgaWYgKHNjcm9sbFNweUNvbnRhaW5lciA9PT0gZG9jdW1lbnQpIHtcbiAgICAgIHZhciBzdXBwb3J0UGFnZU9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgICAgdmFyIGlzQ1NTMUNvbXBhdCA9IChkb2N1bWVudC5jb21wYXRNb2RlIHx8IFwiXCIpID09PSBcIkNTUzFDb21wYXRcIjtcbiAgICAgIHJldHVybiBzdXBwb3J0UGFnZU9mZnNldCA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IGlzQ1NTMUNvbXBhdCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2Nyb2xsU3B5Q29udGFpbmVyLnNjcm9sbExlZnQ7XG4gICAgfVxuICB9LFxuICBjdXJyZW50UG9zaXRpb25ZOiBmdW5jdGlvbiBjdXJyZW50UG9zaXRpb25ZKHNjcm9sbFNweUNvbnRhaW5lcikge1xuICAgIGlmIChzY3JvbGxTcHlDb250YWluZXIgPT09IGRvY3VtZW50KSB7XG4gICAgICB2YXIgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcbiAgICAgIHZhciBpc0NTUzFDb21wYXQgPSAoZG9jdW1lbnQuY29tcGF0TW9kZSB8fCBcIlwiKSA9PT0gXCJDU1MxQ29tcGF0XCI7XG4gICAgICByZXR1cm4gc3VwcG9ydFBhZ2VPZmZzZXQgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiBpc0NTUzFDb21wYXQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzY3JvbGxTcHlDb250YWluZXIuc2Nyb2xsVG9wO1xuICAgIH1cbiAgfSxcbiAgc2Nyb2xsSGFuZGxlcjogZnVuY3Rpb24gc2Nyb2xsSGFuZGxlcihzY3JvbGxTcHlDb250YWluZXIpIHtcbiAgICB2YXIgY2FsbGJhY2tzID0gc2Nyb2xsU3B5LnNjcm9sbFNweUNvbnRhaW5lcnNbc2Nyb2xsU3B5LnNjcm9sbFNweUNvbnRhaW5lcnMuaW5kZXhPZihzY3JvbGxTcHlDb250YWluZXIpXS5zcHlDYWxsYmFja3MgfHwgW107XG4gICAgY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjKHNjcm9sbFNweS5jdXJyZW50UG9zaXRpb25YKHNjcm9sbFNweUNvbnRhaW5lciksIHNjcm9sbFNweS5jdXJyZW50UG9zaXRpb25ZKHNjcm9sbFNweUNvbnRhaW5lcikpO1xuICAgIH0pO1xuICB9LFxuICBhZGRTdGF0ZUhhbmRsZXI6IGZ1bmN0aW9uIGFkZFN0YXRlSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgc2Nyb2xsU3B5LnNweVNldFN0YXRlLnB1c2goaGFuZGxlcik7XG4gIH0sXG4gIGFkZFNweUhhbmRsZXI6IGZ1bmN0aW9uIGFkZFNweUhhbmRsZXIoaGFuZGxlciwgc2Nyb2xsU3B5Q29udGFpbmVyKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IHNjcm9sbFNweS5zY3JvbGxTcHlDb250YWluZXJzW3Njcm9sbFNweS5zY3JvbGxTcHlDb250YWluZXJzLmluZGV4T2Yoc2Nyb2xsU3B5Q29udGFpbmVyKV07XG5cbiAgICBpZiAoIWNvbnRhaW5lci5zcHlDYWxsYmFja3MpIHtcbiAgICAgIGNvbnRhaW5lci5zcHlDYWxsYmFja3MgPSBbXTtcbiAgICB9XG5cbiAgICBjb250YWluZXIuc3B5Q2FsbGJhY2tzLnB1c2goaGFuZGxlcik7XG5cbiAgICBoYW5kbGVyKHNjcm9sbFNweS5jdXJyZW50UG9zaXRpb25YKHNjcm9sbFNweUNvbnRhaW5lciksIHNjcm9sbFNweS5jdXJyZW50UG9zaXRpb25ZKHNjcm9sbFNweUNvbnRhaW5lcikpO1xuICB9LFxuICB1cGRhdGVTdGF0ZXM6IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlcygpIHtcbiAgICBzY3JvbGxTcHkuc3B5U2V0U3RhdGUuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIHMoKTtcbiAgICB9KTtcbiAgfSxcbiAgdW5tb3VudDogZnVuY3Rpb24gdW5tb3VudChzdGF0ZUhhbmRsZXIsIHNweUhhbmRsZXIpIHtcbiAgICBzY3JvbGxTcHkuc2Nyb2xsU3B5Q29udGFpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYy5zcHlDYWxsYmFja3MgJiYgYy5zcHlDYWxsYmFja3MubGVuZ3RoICYmIGMuc3B5Q2FsbGJhY2tzLnNwbGljZShjLnNweUNhbGxiYWNrcy5pbmRleE9mKHNweUhhbmRsZXIpLCAxKTtcbiAgICB9KTtcblxuICAgIGlmIChzY3JvbGxTcHkuc3B5U2V0U3RhdGUgJiYgc2Nyb2xsU3B5LnNweVNldFN0YXRlLmxlbmd0aCkge1xuICAgICAgc2Nyb2xsU3B5LnNweVNldFN0YXRlLnNwbGljZShzY3JvbGxTcHkuc3B5U2V0U3RhdGUuaW5kZXhPZihzdGF0ZUhhbmRsZXIpLCAxKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxTcHkuc2Nyb2xsSGFuZGxlcik7XG4gIH0sXG5cblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gc2Nyb2xsU3B5LnNjcm9sbFNweUNvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIHNjcm9sbFNweS5zY3JvbGxIYW5kbGVyKGMpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzY3JvbGxTcHk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzKTtcblxudmFyIF9hbmltYXRlU2Nyb2xsID0gcmVxdWlyZSgnLi9hbmltYXRlLXNjcm9sbCcpO1xuXG52YXIgX2FuaW1hdGVTY3JvbGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5pbWF0ZVNjcm9sbCk7XG5cbnZhciBfc2Nyb2xsRXZlbnRzID0gcmVxdWlyZSgnLi9zY3JvbGwtZXZlbnRzJyk7XG5cbnZhciBfc2Nyb2xsRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Njcm9sbEV2ZW50cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfX21hcHBlZCA9IHt9O1xudmFyIF9fYWN0aXZlTGluayA9IHZvaWQgMDtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuXG4gIHVubW91bnQ6IGZ1bmN0aW9uIHVubW91bnQoKSB7XG4gICAgX19tYXBwZWQgPSB7fTtcbiAgfSxcblxuICByZWdpc3RlcjogZnVuY3Rpb24gcmVnaXN0ZXIobmFtZSwgZWxlbWVudCkge1xuICAgIF9fbWFwcGVkW25hbWVdID0gZWxlbWVudDtcbiAgfSxcblxuICB1bnJlZ2lzdGVyOiBmdW5jdGlvbiB1bnJlZ2lzdGVyKG5hbWUpIHtcbiAgICBkZWxldGUgX19tYXBwZWRbbmFtZV07XG4gIH0sXG5cbiAgZ2V0OiBmdW5jdGlvbiBnZXQobmFtZSkge1xuICAgIHJldHVybiBfX21hcHBlZFtuYW1lXSB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShuYW1lKVswXSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG5hbWUpWzBdO1xuICB9LFxuXG4gIHNldEFjdGl2ZUxpbms6IGZ1bmN0aW9uIHNldEFjdGl2ZUxpbmsobGluaykge1xuICAgIHJldHVybiBfX2FjdGl2ZUxpbmsgPSBsaW5rO1xuICB9LFxuXG4gIGdldEFjdGl2ZUxpbms6IGZ1bmN0aW9uIGdldEFjdGl2ZUxpbmsoKSB7XG4gICAgcmV0dXJuIF9fYWN0aXZlTGluaztcbiAgfSxcblxuICBzY3JvbGxUbzogZnVuY3Rpb24gc2Nyb2xsVG8odG8sIHByb3BzKSB7XG5cbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5nZXQodG8pO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIGNvbnNvbGUud2FybihcInRhcmdldCBFbGVtZW50IG5vdCBmb3VuZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm9wcyA9IF9leHRlbmRzKHt9LCBwcm9wcywgeyBhYnNvbHV0ZTogZmFsc2UgfSk7XG5cbiAgICB2YXIgY29udGFpbmVySWQgPSBwcm9wcy5jb250YWluZXJJZDtcbiAgICB2YXIgY29udGFpbmVyID0gcHJvcHMuY29udGFpbmVyO1xuXG4gICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSB2b2lkIDA7XG4gICAgaWYgKGNvbnRhaW5lcklkKSB7XG4gICAgICBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyICYmIGNvbnRhaW5lci5ub2RlVHlwZSkge1xuICAgICAgY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lcjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIHByb3BzLmFic29sdXRlID0gdHJ1ZTtcblxuICAgIHZhciBob3Jpem9udGFsID0gcHJvcHMuaG9yaXpvbnRhbDtcbiAgICB2YXIgc2Nyb2xsT2Zmc2V0ID0gX3V0aWxzMi5kZWZhdWx0LnNjcm9sbE9mZnNldChjb250YWluZXJFbGVtZW50LCB0YXJnZXQsIGhvcml6b250YWwpICsgKHByb3BzLm9mZnNldCB8fCAwKTtcblxuICAgIC8qXHJcbiAgICAgKiBpZiBhbmltYXRlIGlzIG5vdCBwcm92aWRlZCBqdXN0IHNjcm9sbCBpbnRvIHRoZSB2aWV3XHJcbiAgICAgKi9cbiAgICBpZiAoIXByb3BzLnNtb290aCkge1xuICAgICAgaWYgKF9zY3JvbGxFdmVudHMyLmRlZmF1bHQucmVnaXN0ZXJlZFsnYmVnaW4nXSkge1xuICAgICAgICBfc2Nyb2xsRXZlbnRzMi5kZWZhdWx0LnJlZ2lzdGVyZWRbJ2JlZ2luJ10odG8sIHRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250YWluZXJFbGVtZW50ID09PSBkb2N1bWVudCkge1xuICAgICAgICBpZiAocHJvcHMuaG9yaXpvbnRhbCkge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyhzY3JvbGxPZmZzZXQsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxPZmZzZXQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWluZXJFbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbE9mZnNldDtcbiAgICAgIH1cblxuICAgICAgaWYgKF9zY3JvbGxFdmVudHMyLmRlZmF1bHQucmVnaXN0ZXJlZFsnZW5kJ10pIHtcbiAgICAgICAgX3Njcm9sbEV2ZW50czIuZGVmYXVsdC5yZWdpc3RlcmVkWydlbmQnXSh0bywgdGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qXHJcbiAgICAgKiBBbmltYXRlIHNjcm9sbGluZ1xyXG4gICAgICovXG5cbiAgICBfYW5pbWF0ZVNjcm9sbDIuZGVmYXVsdC5hbmltYXRlVG9wU2Nyb2xsKHNjcm9sbE9mZnNldCwgcHJvcHMsIHRvLCB0YXJnZXQpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAvKlxyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9vYmxhZG9yL2FuZ3VsYXItc2Nyb2xsIChkdVNjcm9sbERlZmF1bHRFYXNpbmcpXHJcbiAgICovXG4gIGRlZmF1bHRFYXNpbmc6IGZ1bmN0aW9uIGRlZmF1bHRFYXNpbmcoeCkge1xuICAgIGlmICh4IDwgMC41KSB7XG4gICAgICByZXR1cm4gTWF0aC5wb3coeCAqIDIsIDIpIC8gMjtcbiAgICB9XG4gICAgcmV0dXJuIDEgLSBNYXRoLnBvdygoMSAtIHgpICogMiwgMikgLyAyO1xuICB9LFxuICAvKlxyXG4gICAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2dyZS8xNjUwMjk0XHJcbiAgICovXG4gIC8vIG5vIGVhc2luZywgbm8gYWNjZWxlcmF0aW9uXG4gIGxpbmVhcjogZnVuY3Rpb24gbGluZWFyKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfSxcbiAgLy8gYWNjZWxlcmF0aW5nIGZyb20gemVybyB2ZWxvY2l0eVxuICBlYXNlSW5RdWFkOiBmdW5jdGlvbiBlYXNlSW5RdWFkKHgpIHtcbiAgICByZXR1cm4geCAqIHg7XG4gIH0sXG4gIC8vIGRlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5XG4gIGVhc2VPdXRRdWFkOiBmdW5jdGlvbiBlYXNlT3V0UXVhZCh4KSB7XG4gICAgcmV0dXJuIHggKiAoMiAtIHgpO1xuICB9LFxuICAvLyBhY2NlbGVyYXRpb24gdW50aWwgaGFsZndheSwgdGhlbiBkZWNlbGVyYXRpb25cbiAgZWFzZUluT3V0UXVhZDogZnVuY3Rpb24gZWFzZUluT3V0UXVhZCh4KSB7XG4gICAgcmV0dXJuIHggPCAuNSA/IDIgKiB4ICogeCA6IC0xICsgKDQgLSAyICogeCkgKiB4O1xuICB9LFxuICAvLyBhY2NlbGVyYXRpbmcgZnJvbSB6ZXJvIHZlbG9jaXR5IFxuICBlYXNlSW5DdWJpYzogZnVuY3Rpb24gZWFzZUluQ3ViaWMoeCkge1xuICAgIHJldHVybiB4ICogeCAqIHg7XG4gIH0sXG4gIC8vIGRlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5IM+AXG4gIGVhc2VPdXRDdWJpYzogZnVuY3Rpb24gZWFzZU91dEN1YmljKHgpIHtcbiAgICByZXR1cm4gLS14ICogeCAqIHggKyAxO1xuICB9LFxuICAvLyBhY2NlbGVyYXRpb24gdW50aWwgaGFsZndheSwgdGhlbiBkZWNlbGVyYXRpb24gXG4gIGVhc2VJbk91dEN1YmljOiBmdW5jdGlvbiBlYXNlSW5PdXRDdWJpYyh4KSB7XG4gICAgcmV0dXJuIHggPCAuNSA/IDQgKiB4ICogeCAqIHggOiAoeCAtIDEpICogKDIgKiB4IC0gMikgKiAoMiAqIHggLSAyKSArIDE7XG4gIH0sXG4gIC8vIGFjY2VsZXJhdGluZyBmcm9tIHplcm8gdmVsb2NpdHkgXG4gIGVhc2VJblF1YXJ0OiBmdW5jdGlvbiBlYXNlSW5RdWFydCh4KSB7XG4gICAgcmV0dXJuIHggKiB4ICogeCAqIHg7XG4gIH0sXG4gIC8vIGRlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5IFxuICBlYXNlT3V0UXVhcnQ6IGZ1bmN0aW9uIGVhc2VPdXRRdWFydCh4KSB7XG4gICAgcmV0dXJuIDEgLSAtLXggKiB4ICogeCAqIHg7XG4gIH0sXG4gIC8vIGFjY2VsZXJhdGlvbiB1bnRpbCBoYWxmd2F5LCB0aGVuIGRlY2VsZXJhdGlvblxuICBlYXNlSW5PdXRRdWFydDogZnVuY3Rpb24gZWFzZUluT3V0UXVhcnQoeCkge1xuICAgIHJldHVybiB4IDwgLjUgPyA4ICogeCAqIHggKiB4ICogeCA6IDEgLSA4ICogLS14ICogeCAqIHggKiB4O1xuICB9LFxuICAvLyBhY2NlbGVyYXRpbmcgZnJvbSB6ZXJvIHZlbG9jaXR5XG4gIGVhc2VJblF1aW50OiBmdW5jdGlvbiBlYXNlSW5RdWludCh4KSB7XG4gICAgcmV0dXJuIHggKiB4ICogeCAqIHggKiB4O1xuICB9LFxuICAvLyBkZWNlbGVyYXRpbmcgdG8gemVybyB2ZWxvY2l0eVxuICBlYXNlT3V0UXVpbnQ6IGZ1bmN0aW9uIGVhc2VPdXRRdWludCh4KSB7XG4gICAgcmV0dXJuIDEgKyAtLXggKiB4ICogeCAqIHggKiB4O1xuICB9LFxuICAvLyBhY2NlbGVyYXRpb24gdW50aWwgaGFsZndheSwgdGhlbiBkZWNlbGVyYXRpb24gXG4gIGVhc2VJbk91dFF1aW50OiBmdW5jdGlvbiBlYXNlSW5PdXRRdWludCh4KSB7XG4gICAgcmV0dXJuIHggPCAuNSA/IDE2ICogeCAqIHggKiB4ICogeCAqIHggOiAxICsgMTYgKiAtLXggKiB4ICogeCAqIHggKiB4O1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHVwZGF0ZUhhc2ggPSBmdW5jdGlvbiB1cGRhdGVIYXNoKGhhc2gsIGhpc3RvcnlVcGRhdGUpIHtcbiAgdmFyIGhhc2hWYWwgPSBoYXNoLmluZGV4T2YoXCIjXCIpID09PSAwID8gaGFzaC5zdWJzdHJpbmcoMSkgOiBoYXNoO1xuICB2YXIgaGFzaFRvVXBkYXRlID0gaGFzaFZhbCA/IFwiI1wiICsgaGFzaFZhbCA6IFwiXCI7XG4gIHZhciBjdXJMb2MgPSB3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uO1xuICB2YXIgdXJsVG9QdXNoID0gaGFzaFRvVXBkYXRlID8gY3VyTG9jLnBhdGhuYW1lICsgY3VyTG9jLnNlYXJjaCArIGhhc2hUb1VwZGF0ZSA6IGN1ckxvYy5wYXRobmFtZSArIGN1ckxvYy5zZWFyY2g7XG4gIGhpc3RvcnlVcGRhdGUgPyBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBcIlwiLCB1cmxUb1B1c2gpIDogaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgdXJsVG9QdXNoKTtcbn07XG5cbnZhciBnZXRIYXNoID0gZnVuY3Rpb24gZ2V0SGFzaCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgXCJcIik7XG59O1xuXG52YXIgZmlsdGVyRWxlbWVudEluQ29udGFpbmVyID0gZnVuY3Rpb24gZmlsdGVyRWxlbWVudEluQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gY29udGFpbmVyLmNvbnRhaW5zID8gY29udGFpbmVyICE9IGVsZW1lbnQgJiYgY29udGFpbmVyLmNvbnRhaW5zKGVsZW1lbnQpIDogISEoY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQpICYgMTYpO1xuICB9O1xufTtcblxudmFyIHNjcm9sbE9mZnNldCA9IGZ1bmN0aW9uIHNjcm9sbE9mZnNldChjLCB0LCBob3Jpem9udGFsKSB7XG4gIGlmIChob3Jpem9udGFsKSB7XG4gICAgcmV0dXJuIGMgPT09IGRvY3VtZW50ID8gdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgKHdpbmRvdy5zY3JvbGxYIHx8IHdpbmRvdy5wYWdlWE9mZnNldCkgOiBnZXRDb21wdXRlZFN0eWxlKGMpLnBvc2l0aW9uICE9PSBcInN0YXRpY1wiID8gdC5vZmZzZXRMZWZ0IDogdC5vZmZzZXRMZWZ0IC0gYy5vZmZzZXRMZWZ0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjID09PSBkb2N1bWVudCA/IHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgKHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldCkgOiBnZXRDb21wdXRlZFN0eWxlKGMpLnBvc2l0aW9uICE9PSBcInN0YXRpY1wiID8gdC5vZmZzZXRUb3AgOiB0Lm9mZnNldFRvcCAtIGMub2Zmc2V0VG9wO1xuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICB1cGRhdGVIYXNoOiB1cGRhdGVIYXNoLFxuICBnZXRIYXNoOiBnZXRIYXNoLFxuICBmaWx0ZXJFbGVtZW50SW5Db250YWluZXI6IGZpbHRlckVsZW1lbnRJbkNvbnRhaW5lcixcbiAgc2Nyb2xsT2Zmc2V0OiBzY3JvbGxPZmZzZXRcbn07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuLy8gdmVjdG9yIGFkZFxuZnVuY3Rpb24gYWRkVih2MSwgdjIpIHtcbiAgcmV0dXJuIHYxLm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgIHJldHVybiB2ICsgdjJbaV07XG4gIH0pO1xufSAvLyB2ZWN0b3Igc3Vic3RyYWN0XG5cbmZ1bmN0aW9uIHN1YlYodjEsIHYyKSB7XG4gIHJldHVybiB2MS5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICByZXR1cm4gdiAtIHYyW2ldO1xuICB9KTtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGRpc3RhbmNlXHJcbiAqIEBwYXJhbSBtb3ZlbWVudCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGN1cnJlbnQgYW5kIGluaXRpYWwgdmVjdG9yc1xyXG4gKiBAcmV0dXJucyBkaXN0YW5jZVxyXG4gKi9cblxuZnVuY3Rpb24gY2FsY3VsYXRlRGlzdGFuY2UobW92ZW1lbnQpIHtcbiAgcmV0dXJuIE1hdGguaHlwb3QuYXBwbHkoTWF0aCwgbW92ZW1lbnQpO1xufVxuZnVuY3Rpb24gY2FsY3VsYXRlQWxsR2VvbWV0cnkobW92ZW1lbnQsIGRlbHRhKSB7XG4gIGlmIChkZWx0YSA9PT0gdm9pZCAwKSB7XG4gICAgZGVsdGEgPSBtb3ZlbWVudDtcbiAgfVxuXG4gIHZhciBkbCA9IGNhbGN1bGF0ZURpc3RhbmNlKGRlbHRhKTtcbiAgdmFyIGFscGhhID0gZGwgPT09IDAgPyAwIDogMSAvIGRsO1xuICB2YXIgZGlyZWN0aW9uID0gZGVsdGEubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGFscGhhICogdjtcbiAgfSk7XG4gIHZhciBkaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKG1vdmVtZW50KTtcbiAgcmV0dXJuIHtcbiAgICBkaXN0YW5jZTogZGlzdGFuY2UsXG4gICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgfTtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGFsbCBraW5lbWF0aWNzXHJcbiAqIEB0ZW1wbGF0ZSBUIHRoZSBleHBlY3RlZCB2ZWN0b3IgdHlwZVxyXG4gKiBAcGFyYW0gbW92ZW1lbnQgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBjdXJyZW50IGFuZCBpbml0aWFsIHZlY3RvcnNcclxuICogQHBhcmFtIGRlbHRhIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gY3VycmVudCBhbmQgcHJldmlvdXMgdmVjdG9yc1xyXG4gKiBAcGFyYW0gZGVsdGFfdCB0aGUgdGltZSBkaWZmZXJlbmNlIGJldHdlZW4gY3VycmVudCBhbmQgcHJldmlvdXMgdGltZXN0YW1wc1xyXG4gKiBAcmV0dXJucyBhbGwga2luZW1hdGljc1xyXG4gKi9cblxuZnVuY3Rpb24gY2FsY3VsYXRlQWxsS2luZW1hdGljcyhtb3ZlbWVudCwgZGVsdGEsIGR0KSB7XG4gIHZhciBkbCA9IGNhbGN1bGF0ZURpc3RhbmNlKGRlbHRhKTtcbiAgdmFyIGFscGhhID0gZGwgPT09IDAgPyAwIDogMSAvIGRsO1xuICB2YXIgYmV0YSA9IGR0ID09PSAwID8gMCA6IDEgLyBkdDtcbiAgdmFyIHZlbG9jaXR5ID0gYmV0YSAqIGRsO1xuICB2YXIgdmVsb2NpdGllcyA9IGRlbHRhLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBiZXRhICogdjtcbiAgfSk7XG4gIHZhciBkaXJlY3Rpb24gPSBkZWx0YS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gYWxwaGEgKiB2O1xuICB9KTtcbiAgdmFyIGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UobW92ZW1lbnQpO1xuICByZXR1cm4ge1xuICAgIHZlbG9jaXRpZXM6IHZlbG9jaXRpZXMsXG4gICAgdmVsb2NpdHk6IHZlbG9jaXR5LFxuICAgIGRpc3RhbmNlOiBkaXN0YW5jZSxcbiAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICB9O1xufVxuLyoqXHJcbiAqIEJlY2F1c2UgSUUgZG9lc24ndCBzdXBwb3J0IGBNYXRoLnNpZ25gIGZ1bmN0aW9uLCBzbyB3ZSB1c2UgdGhlIHBvbHlmaWxsIHZlcnNpb24gb2YgdGhlIGZ1bmN0aW9uLlxyXG4gKiBUaGlzIHBvbHlmaWxsIGZ1bmN0aW9uIGlzIHN1Z2dlc3RlZCBieSBNb3ppbGxhOlxyXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL3NpZ24jUG9seWZpbGxcclxuICogQHBhcmFtIHggdGFyZ2V0IG51bWJlclxyXG4gKi9cblxuZnVuY3Rpb24gc2lnbih4KSB7XG4gIGlmIChNYXRoLnNpZ24pIHJldHVybiBNYXRoLnNpZ24oeCk7XG4gIHJldHVybiBOdW1iZXIoeCA+IDApIC0gTnVtYmVyKHggPCAwKSB8fCAreDtcbn1cblxuZnVuY3Rpb24gbWluTWF4KHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbih2YWx1ZSwgbWF4KSk7XG59IC8vIEJhc2VkIG9uIEBhaG9sYWNoZWsgOylcbi8vIGh0dHBzOi8vdHdpdHRlci5jb20vY2hwd24vc3RhdHVzLzI4NTU0MDE5MjA5NjQ5NzY2NFxuLy8gaU9TIGNvbnN0YW50ID0gMC41NVxuLy8gaHR0cHM6Ly9tZWRpdW0uY29tL0BuYXRoYW5naXR0ZXIvYnVpbGRpbmctZmx1aWQtaW50ZXJmYWNlcy1pb3Mtc3dpZnQtOTczMmJiOTM0YmY1XG5cblxuZnVuY3Rpb24gcnViYmVyYmFuZDIoZGlzdGFuY2UsIGNvbnN0YW50KSB7XG4gIC8vIGRlZmF1bHQgY29uc3RhbnQgZnJvbSB0aGUgYXJ0aWNsZSBpcyAwLjdcbiAgcmV0dXJuIE1hdGgucG93KGRpc3RhbmNlLCBjb25zdGFudCAqIDUpO1xufVxuXG5mdW5jdGlvbiBydWJiZXJiYW5kKGRpc3RhbmNlLCBkaW1lbnNpb24sIGNvbnN0YW50KSB7XG4gIGlmIChkaW1lbnNpb24gPT09IDAgfHwgTWF0aC5hYnMoZGltZW5zaW9uKSA9PT0gSW5maW5pdHkpIHJldHVybiBydWJiZXJiYW5kMihkaXN0YW5jZSwgY29uc3RhbnQpO1xuICByZXR1cm4gZGlzdGFuY2UgKiBkaW1lbnNpb24gKiBjb25zdGFudCAvIChkaW1lbnNpb24gKyBjb25zdGFudCAqIGRpc3RhbmNlKTtcbn1cblxuZnVuY3Rpb24gcnViYmVyYmFuZElmT3V0T2ZCb3VuZHMocG9zaXRpb24sIG1pbiwgbWF4LCBjb25zdGFudCkge1xuICBpZiAoY29uc3RhbnQgPT09IHZvaWQgMCkge1xuICAgIGNvbnN0YW50ID0gMC4xNTtcbiAgfVxuXG4gIGlmIChjb25zdGFudCA9PT0gMCkgcmV0dXJuIG1pbk1heChwb3NpdGlvbiwgbWluLCBtYXgpO1xuICBpZiAocG9zaXRpb24gPCBtaW4pIHJldHVybiAtcnViYmVyYmFuZChtaW4gLSBwb3NpdGlvbiwgbWF4IC0gbWluLCBjb25zdGFudCkgKyBtaW47XG4gIGlmIChwb3NpdGlvbiA+IG1heCkgcmV0dXJuICtydWJiZXJiYW5kKHBvc2l0aW9uIC0gbWF4LCBtYXggLSBtaW4sIGNvbnN0YW50KSArIG1heDtcbiAgcmV0dXJuIHBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG8sIGFsbG93QXJyYXlMaWtlKSB7XG4gIHZhciBpdDtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGlmIChpdCkgbyA9IGl0O1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7XG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBvW2krK11cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICB9XG5cbiAgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgcmV0dXJuIGl0Lm5leHQuYmluZChpdCk7XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuLyoqXHJcbiAqIFRPRE8gQmV3YXJlIHRoYXQgb25seSBvcHRpbWl6ZWQgY2FzZXMgYXJlIGNvdmVyZWQgaW4gdGVzdHMgPSlcclxuICogVE9ETyBOZWVkIHRvIGNvdmVyIGdlbmVyYWwgY2FzZSBhcyB3ZWxsXHJcbiAqXHJcbiAqIEBwYXJhbSBmbnNcclxuICovXG5cbmZ1bmN0aW9uIGNoYWluRm5zKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZm5zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZuc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmbnMubGVuZ3RoID09PSAwKSByZXR1cm4gbm9vcDtcbiAgaWYgKGZucy5sZW5ndGggPT09IDEpIHJldHVybiBmbnNbMF07XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdDtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoZm5zKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgIHZhciBmbiA9IF9zdGVwLnZhbHVlO1xuICAgICAgcmVzdWx0ID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cbi8qKlxyXG4gKiBFeHBlY3RzIGEgc2ltcGxlIHZhbHVlIG9yIDJEIHZlY3RvciAoYW4gYXJyYXkgd2l0aCAyIGVsZW1lbnRzKSBhbmRcclxuICogYWx3YXlzIHJldHVybnMgMkQgdmVjdG9yLiBJZiBzaW1wbGUgdmFsdWUgaXMgcGFzc2VkLCByZXR1cm5zIGFcclxuICogdmVjdG9yIHdpdGggdGhpcyB2YWx1ZSBhcyBib3RoIGNvb3JkaW5hdGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICovXG5cbmZ1bmN0aW9uIGVuc3VyZVZlY3Rvcih2YWx1ZSwgZmFsbGJhY2spIHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoZmFsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGRlZmluZSBmYWxsYmFjayB2YWx1ZSBpZiB1bmRlZmluZWQgaXMgZXhwZWN0ZWQnKTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IGZhbGxiYWNrO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gIHJldHVybiBbdmFsdWUsIHZhbHVlXTtcbn1cbi8qKlxyXG4gKiBIZWxwZXIgZm9yIGRlZmluaW5nIGEgZGVmYXVsdCB2YWx1ZVxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICogQHBhcmFtIGZhbGxiYWNrXHJcbiAqL1xuXG5mdW5jdGlvbiBhc3NpZ25EZWZhdWx0KHZhbHVlLCBmYWxsYmFjaykge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZmFsbGJhY2ssIHZhbHVlIHx8IHt9KTtcbn1cbi8qKlxyXG4gKiBSZXNvbHZlcyBnZXR0ZXJzIChmdW5jdGlvbnMpIGJ5IGNhbGxpbmcgdGhlbVxyXG4gKiBJZiBzaW1wbGUgdmFsdWUgaXMgZ2l2ZW4gaXQganVzdCBwYXNzZXMgdGhyb3VnaFxyXG4gKlxyXG4gKiBAcGFyYW0gdlxyXG4gKi9cblxuZnVuY3Rpb24gdmFsdWVGbih2KSB7XG4gIGlmICh0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gdi5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVXaXRoKGNvbmZpZywgcmVzb2x2ZXJzKSB7XG4gIGlmIChjb25maWcgPT09IHZvaWQgMCkge1xuICAgIGNvbmZpZyA9IHt9O1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMocmVzb2x2ZXJzKTsgX2kgPCBfT2JqZWN0JGVudHJpZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIF9PYmplY3QkZW50cmllcyRfaSA9IF9PYmplY3QkZW50cmllc1tfaV0sXG4gICAgICAgIGtleSA9IF9PYmplY3QkZW50cmllcyRfaVswXSxcbiAgICAgICAgcmVzb2x2ZXIgPSBfT2JqZWN0JGVudHJpZXMkX2lbMV07XG5cbiAgICBzd2l0Y2ggKHR5cGVvZiByZXNvbHZlcikge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICByZXN1bHRba2V5XSA9IHJlc29sdmVyLmNhbGwocmVzdWx0LCBjb25maWdba2V5XSwga2V5LCBjb25maWcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmVzdWx0W2tleV0gPSByZXNvbHZlV2l0aChjb25maWdba2V5XSwgcmVzb2x2ZXIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGlmIChyZXNvbHZlcikgcmVzdWx0W2tleV0gPSBjb25maWdba2V5XTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIFdFQktJVF9ESVNUQU5DRV9TQ0FMRV9GQUNUT1IgPSAyNjA7XG4vKipcclxuICogV2hldGhlciB0aGUgYnJvd3NlciBzdXBwb3J0cyBHZXN0dXJlRXZlbnQgKGllIFNhZmFyaSlcclxuICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBnZXN0dXJlIGV2ZW50XHJcbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0dlc3R1cmVFdmVudHMoKSB7XG4gIHRyeSB7XG4gICAgLy8gVE9ETyBbVFNdIHBvc3NpYmx5IGZpbmQgR2VzdHVyZUV2ZW50IGRlZmluaXRpb25zP1xuICAgIC8vIEB0cy1pZ25vcmU6IG5vIHR5cGUgZGVmaW5pdGlvbnMgZm9yIHdlYmtpdCBHZXN0dXJlRXZlbnRzXG4gICAgcmV0dXJuICdjb25zdHJ1Y3RvcicgaW4gR2VzdHVyZUV2ZW50O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiBzdXBwb3J0c1RvdWNoRXZlbnRzKCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudFRvdWNoZXMoZXZlbnQpIHtcbiAgaWYgKCdwb2ludGVySWQnIGluIGV2ZW50KSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGV2ZW50LnR5cGUgPT09ICd0b3VjaGVuZCcgPyBldmVudC5jaGFuZ2VkVG91Y2hlcyA6IGV2ZW50LnRhcmdldFRvdWNoZXM7XG59XG5cbmZ1bmN0aW9uIGdldFBvaW50ZXJJZHMoZXZlbnQpIHtcbiAgaWYgKCdwb2ludGVySWQnIGluIGV2ZW50KSByZXR1cm4gW2V2ZW50LnBvaW50ZXJJZF07XG4gIHJldHVybiBBcnJheS5mcm9tKGdldEV2ZW50VG91Y2hlcyhldmVudCkpLm1hcChmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB0LmlkZW50aWZpZXI7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0R2VuZXJpY0V2ZW50RGF0YShldmVudCkge1xuICB2YXIgYnV0dG9ucyA9ICdidXR0b25zJyBpbiBldmVudCA/IGV2ZW50LmJ1dHRvbnMgOiAwO1xuICB2YXIgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleSxcbiAgICAgIGFsdEtleSA9IGV2ZW50LmFsdEtleSxcbiAgICAgIG1ldGFLZXkgPSBldmVudC5tZXRhS2V5LFxuICAgICAgY3RybEtleSA9IGV2ZW50LmN0cmxLZXk7IC8vIFRPRE8gY2hlY2sgaWYgdGhpcyBtaWdodCBjcmVhdGUgc29tZSBvdmVycmlkZXM/XG5cbiAgcmV0dXJuIHtcbiAgICBidXR0b25zOiBidXR0b25zLFxuICAgIHNoaWZ0S2V5OiBzaGlmdEtleSxcbiAgICBhbHRLZXk6IGFsdEtleSxcbiAgICBtZXRhS2V5OiBtZXRhS2V5LFxuICAgIGN0cmxLZXk6IGN0cmxLZXlcbiAgfTtcbn1cblxudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gaWRlbnRpdHkoeHkpIHtcbiAgcmV0dXJuIHh5O1xufTtcbi8qKlxyXG4gKiBHZXRzIHBvaW50ZXIgZXZlbnQgdmFsdWVzLlxyXG4gKiBAcGFyYW0gZXZlbnRcclxuICogQHJldHVybnMgcG9pbnRlciBldmVudCB2YWx1ZXNcclxuICovXG5cblxuZnVuY3Rpb24gZ2V0UG9pbnRlckV2ZW50VmFsdWVzKGV2ZW50LCB0cmFuc2Zvcm0pIHtcbiAgaWYgKHRyYW5zZm9ybSA9PT0gdm9pZCAwKSB7XG4gICAgdHJhbnNmb3JtID0gaWRlbnRpdHk7XG4gIH1cblxuICB2YXIgdG91Y2hFdmVudHMgPSBnZXRFdmVudFRvdWNoZXMoZXZlbnQpO1xuXG4gIHZhciBfcmVmID0gdG91Y2hFdmVudHMgPyB0b3VjaEV2ZW50c1swXSA6IGV2ZW50LFxuICAgICAgY2xpZW50WCA9IF9yZWYuY2xpZW50WCxcbiAgICAgIGNsaWVudFkgPSBfcmVmLmNsaWVudFk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybShbY2xpZW50WCwgY2xpZW50WV0pO1xufVxuLyoqXHJcbiAqIEdldHMgdHdvIHRvdWNoZXMgZXZlbnQgZGF0YVxyXG4gKiBAcGFyYW0gZXZlbnRcclxuICogQHJldHVybnMgdHdvIHRvdWNoZXMgZXZlbnQgZGF0YVxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0VHdvVG91Y2hlc0V2ZW50VmFsdWVzKGV2ZW50LCBwb2ludGVySWRzLCB0cmFuc2Zvcm0pIHtcbiAgaWYgKHRyYW5zZm9ybSA9PT0gdm9pZCAwKSB7XG4gICAgdHJhbnNmb3JtID0gaWRlbnRpdHk7XG4gIH1cblxuICB2YXIgX0FycmF5JGZyb20kZmlsdGVyID0gQXJyYXkuZnJvbShldmVudC50b3VjaGVzKS5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gcG9pbnRlcklkcy5pbmNsdWRlcyh0LmlkZW50aWZpZXIpO1xuICB9KSxcbiAgICAgIEEgPSBfQXJyYXkkZnJvbSRmaWx0ZXJbMF0sXG4gICAgICBCID0gX0FycmF5JGZyb20kZmlsdGVyWzFdO1xuXG4gIHZhciBkeCA9IEIuY2xpZW50WCAtIEEuY2xpZW50WDtcbiAgdmFyIGR5ID0gQi5jbGllbnRZIC0gQS5jbGllbnRZO1xuICB2YXIgY3ggPSAoQi5jbGllbnRYICsgQS5jbGllbnRYKSAvIDI7XG4gIHZhciBjeSA9IChCLmNsaWVudFkgKyBBLmNsaWVudFkpIC8gMjsgLy8gY29uc3QgZTogYW55ID0gJ25hdGl2ZUV2ZW50JyBpbiBldmVudCA/IGV2ZW50Lm5hdGl2ZUV2ZW50IDogZXZlbnRcblxuICB2YXIgZGlzdGFuY2UgPSBNYXRoLmh5cG90KGR4LCBkeSk7IC8vIEZJWE1FIHJvdGF0aW9uIGhhcyBpbmNvbnNpc3RhbnQgdmFsdWVzIHNvIHdlJ3JlIG5vdCB1c2luZyBpdCBhdG1cbiAgLy8gY29uc3QgYW5nbGUgPSAoZS5yb3RhdGlvbiBhcyBudW1iZXIpID8/IC0oTWF0aC5hdGFuMihkeCwgZHkpICogMTgwKSAvIE1hdGguUElcblxuICB2YXIgYW5nbGUgPSAtKE1hdGguYXRhbjIoZHgsIGR5KSAqIDE4MCkgLyBNYXRoLlBJO1xuICB2YXIgdmFsdWVzID0gdHJhbnNmb3JtKFtkaXN0YW5jZSwgYW5nbGVdKTtcbiAgdmFyIG9yaWdpbiA9IHRyYW5zZm9ybShbY3gsIGN5XSk7XG4gIHJldHVybiB7XG4gICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgb3JpZ2luOiBvcmlnaW5cbiAgfTtcbn1cbi8qKlxyXG4gKiBHZXRzIHNjcm9sbCBldmVudCB2YWx1ZXNcclxuICogQHBhcmFtIGV2ZW50XHJcbiAqIEByZXR1cm5zIHNjcm9sbCBldmVudCB2YWx1ZXNcclxuICovXG5cbmZ1bmN0aW9uIGdldFNjcm9sbEV2ZW50VmFsdWVzKGV2ZW50LCB0cmFuc2Zvcm0pIHtcbiAgaWYgKHRyYW5zZm9ybSA9PT0gdm9pZCAwKSB7XG4gICAgdHJhbnNmb3JtID0gaWRlbnRpdHk7XG4gIH1cblxuICAvLyBJZiB0aGUgY3VycmVudFRhcmdldCBpcyB0aGUgd2luZG93IHRoZW4gd2UgcmV0dXJuIHRoZSBzY3JvbGxYL1kgcG9zaXRpb24uXG4gIC8vIElmIG5vdCAoaWUgdGhlIGN1cnJlbnRUYXJnZXQgaXMgYSBET00gZWxlbWVudCksIHRoZW4gd2UgcmV0dXJuIHNjcm9sbExlZnQvVG9wXG4gIHZhciBfZXZlbnQkY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICBzY3JvbGxYID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuc2Nyb2xsWCxcbiAgICAgIHNjcm9sbFkgPSBfZXZlbnQkY3VycmVudFRhcmdldC5zY3JvbGxZLFxuICAgICAgc2Nyb2xsTGVmdCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LnNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxUb3AgPSBfZXZlbnQkY3VycmVudFRhcmdldC5zY3JvbGxUb3A7XG4gIHJldHVybiB0cmFuc2Zvcm0oW3Njcm9sbFggfHwgc2Nyb2xsTGVmdCB8fCAwLCBzY3JvbGxZIHx8IHNjcm9sbFRvcCB8fCAwXSk7XG59IC8vIHdoZWVsIGRlbHRhIGRlZmF1bHRzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rYXJjaGl2ZS9maXhlZC1kYXRhLXRhYmxlL2Jsb2IvbWFzdGVyL3NyYy92ZW5kb3JfdXBzdHJlYW0vZG9tL25vcm1hbGl6ZVdoZWVsLmpzXG5cbnZhciBMSU5FX0hFSUdIVCA9IDQwO1xudmFyIFBBR0VfSEVJR0hUID0gODAwO1xuLyoqXHJcbiAqIEdldHMgd2hlZWwgZXZlbnQgdmFsdWVzLlxyXG4gKiBAcGFyYW0gZXZlbnRcclxuICogQHJldHVybnMgd2hlZWwgZXZlbnQgdmFsdWVzXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRXaGVlbEV2ZW50VmFsdWVzKGV2ZW50LCB0cmFuc2Zvcm0pIHtcbiAgaWYgKHRyYW5zZm9ybSA9PT0gdm9pZCAwKSB7XG4gICAgdHJhbnNmb3JtID0gaWRlbnRpdHk7XG4gIH1cblxuICB2YXIgZGVsdGFYID0gZXZlbnQuZGVsdGFYLFxuICAgICAgZGVsdGFZID0gZXZlbnQuZGVsdGFZLFxuICAgICAgZGVsdGFNb2RlID0gZXZlbnQuZGVsdGFNb2RlOyAvLyBub3JtYWxpemUgd2hlZWwgdmFsdWVzLCBlc3BlY2lhbGx5IGZvciBGaXJlZm94XG5cbiAgaWYgKGRlbHRhTW9kZSA9PT0gMSkge1xuICAgIGRlbHRhWCAqPSBMSU5FX0hFSUdIVDtcbiAgICBkZWx0YVkgKj0gTElORV9IRUlHSFQ7XG4gIH0gZWxzZSBpZiAoZGVsdGFNb2RlID09PSAyKSB7XG4gICAgZGVsdGFYICo9IFBBR0VfSEVJR0hUO1xuICAgIGRlbHRhWSAqPSBQQUdFX0hFSUdIVDtcbiAgfVxuXG4gIHJldHVybiB0cmFuc2Zvcm0oW2RlbHRhWCwgZGVsdGFZXSk7XG59XG4vKipcclxuICogR2V0cyB3ZWJraXQgZ2VzdHVyZSBldmVudCB2YWx1ZXMuXHJcbiAqIEBwYXJhbSBldmVudFxyXG4gKiBAcmV0dXJucyB3ZWJraXQgZ2VzdHVyZSBldmVudCB2YWx1ZXNcclxuICovXG5cbmZ1bmN0aW9uIGdldFdlYmtpdEdlc3R1cmVFdmVudFZhbHVlcyhldmVudCwgdHJhbnNmb3JtKSB7XG4gIGlmICh0cmFuc2Zvcm0gPT09IHZvaWQgMCkge1xuICAgIHRyYW5zZm9ybSA9IGlkZW50aXR5O1xuICB9XG5cbiAgcmV0dXJuIHRyYW5zZm9ybShbZXZlbnQuc2NhbGUgKiBXRUJLSVRfRElTVEFOQ0VfU0NBTEVfRkFDVE9SLCBldmVudC5yb3RhdGlvbl0pO1xufVxuXG52YXIgREVGQVVMVF9EUkFHX0RFTEFZID0gMTgwO1xudmFyIERFRkFVTFRfUlVCQkVSQkFORCA9IDAuMTU7XG52YXIgREVGQVVMVF9TV0lQRV9WRUxPQ0lUWSA9IDAuNTtcbnZhciBERUZBVUxUX1NXSVBFX0RJU1RBTkNFID0gNjA7XG52YXIgSW50ZXJuYWxHZXN0dXJlT3B0aW9uc05vcm1hbGl6ZXJzID0ge1xuICB0aHJlc2hvbGQ6IGZ1bmN0aW9uIHRocmVzaG9sZCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuc3VyZVZlY3Rvcih2YWx1ZSk7XG4gIH0sXG4gIHJ1YmJlcmJhbmQ6IGZ1bmN0aW9uIHJ1YmJlcmJhbmQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgdmFsdWUgPSAwO1xuICAgIH1cblxuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgcmV0dXJuIGVuc3VyZVZlY3RvcihERUZBVUxUX1JVQkJFUkJBTkQpO1xuXG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICByZXR1cm4gZW5zdXJlVmVjdG9yKDApO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZW5zdXJlVmVjdG9yKHZhbHVlKTtcbiAgICB9XG4gIH0sXG4gIGVuYWJsZWQ6IGZ1bmN0aW9uIGVuYWJsZWQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgdmFsdWUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgdHJpZ2dlckFsbEV2ZW50czogZnVuY3Rpb24gdHJpZ2dlckFsbEV2ZW50cyh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgaW5pdGlhbDogZnVuY3Rpb24gaW5pdGlhbCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuICAgIHJldHVybiBlbnN1cmVWZWN0b3IodmFsdWUpO1xuICB9LFxuICB0cmFuc2Zvcm06IHRydWVcbn07XG5cbnZhciBJbnRlcm5hbENvb3JkaW5hdGVzT3B0aW9uc05vcm1hbGl6ZXJzID0gLyojX19QVVJFX18qL19leHRlbmRzKHt9LCBJbnRlcm5hbEdlc3R1cmVPcHRpb25zTm9ybWFsaXplcnMsIHtcbiAgYXhpczogdHJ1ZSxcbiAgbG9ja0RpcmVjdGlvbjogZnVuY3Rpb24gbG9ja0RpcmVjdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgYm91bmRzOiBmdW5jdGlvbiBib3VuZHModmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgdmFsdWUgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSByZXR1cm4gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gSW50ZXJuYWxDb29yZGluYXRlc09wdGlvbnNOb3JtYWxpemVycy5ib3VuZHModmFsdWUoc3RhdGUpKTtcbiAgICB9O1xuICAgIHZhciBfdmFsdWUyID0gdmFsdWUsXG4gICAgICAgIF92YWx1ZTIkbGVmdCA9IF92YWx1ZTIubGVmdCxcbiAgICAgICAgbGVmdCA9IF92YWx1ZTIkbGVmdCA9PT0gdm9pZCAwID8gLUluZmluaXR5IDogX3ZhbHVlMiRsZWZ0LFxuICAgICAgICBfdmFsdWUyJHJpZ2h0ID0gX3ZhbHVlMi5yaWdodCxcbiAgICAgICAgcmlnaHQgPSBfdmFsdWUyJHJpZ2h0ID09PSB2b2lkIDAgPyBJbmZpbml0eSA6IF92YWx1ZTIkcmlnaHQsXG4gICAgICAgIF92YWx1ZTIkdG9wID0gX3ZhbHVlMi50b3AsXG4gICAgICAgIHRvcCA9IF92YWx1ZTIkdG9wID09PSB2b2lkIDAgPyAtSW5maW5pdHkgOiBfdmFsdWUyJHRvcCxcbiAgICAgICAgX3ZhbHVlMiRib3R0b20gPSBfdmFsdWUyLmJvdHRvbSxcbiAgICAgICAgYm90dG9tID0gX3ZhbHVlMiRib3R0b20gPT09IHZvaWQgMCA/IEluZmluaXR5IDogX3ZhbHVlMiRib3R0b207XG4gICAgcmV0dXJuIFtbbGVmdCwgcmlnaHRdLCBbdG9wLCBib3R0b21dXTtcbiAgfVxufSk7XG5cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQ7XG52YXIgSW50ZXJuYWxHZW5lcmljT3B0aW9uc05vcm1hbGl6ZXJzID0ge1xuICBlbmFibGVkOiBmdW5jdGlvbiBlbmFibGVkKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIGRvbVRhcmdldDogdHJ1ZSxcbiAgd2luZG93OiAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF93aW5kb3cpIHtcbiAgICBmdW5jdGlvbiB3aW5kb3coX3gpIHtcbiAgICAgIHJldHVybiBfd2luZG93LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgd2luZG93LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF93aW5kb3cudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfShmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgdmFsdWUgPSBpc0Jyb3dzZXIgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9KSxcbiAgZXZlbnRPcHRpb25zOiBmdW5jdGlvbiBldmVudE9wdGlvbnMoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBfcmVmJHBhc3NpdmUgPSBfcmVmLnBhc3NpdmUsXG4gICAgICAgIHBhc3NpdmUgPSBfcmVmJHBhc3NpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJHBhc3NpdmUsXG4gICAgICAgIF9yZWYkY2FwdHVyZSA9IF9yZWYuY2FwdHVyZSxcbiAgICAgICAgY2FwdHVyZSA9IF9yZWYkY2FwdHVyZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGNhcHR1cmU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGFzc2l2ZTogcGFzc2l2ZSxcbiAgICAgIGNhcHR1cmU6IGNhcHR1cmVcbiAgICB9O1xuICB9LFxuICB0cmFuc2Zvcm06IHRydWVcbn07XG5cbnZhciBJbnRlcm5hbERpc3RhbmNlQW5nbGVPcHRpb25zTm9ybWFsaXplcnMgPSAvKiNfX1BVUkVfXyovX2V4dGVuZHMoe30sIEludGVybmFsR2VzdHVyZU9wdGlvbnNOb3JtYWxpemVycywge1xuICBib3VuZHM6IGZ1bmN0aW9uIGJvdW5kcyhfdmFsdWUsIF9rZXksIF9yZWYyKSB7XG4gICAgdmFyIF9yZWYyJGRpc3RhbmNlQm91bmRzID0gX3JlZjIuZGlzdGFuY2VCb3VuZHMsXG4gICAgICAgIGRpc3RhbmNlQm91bmRzID0gX3JlZjIkZGlzdGFuY2VCb3VuZHMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjIkZGlzdGFuY2VCb3VuZHMsXG4gICAgICAgIF9yZWYyJGFuZ2xlQm91bmRzID0gX3JlZjIuYW5nbGVCb3VuZHMsXG4gICAgICAgIGFuZ2xlQm91bmRzID0gX3JlZjIkYW5nbGVCb3VuZHMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjIkYW5nbGVCb3VuZHM7XG5cbiAgICB2YXIgX2Rpc3RhbmNlQm91bmRzID0gZnVuY3Rpb24gX2Rpc3RhbmNlQm91bmRzKHN0YXRlKSB7XG4gICAgICB2YXIgRCA9IGFzc2lnbkRlZmF1bHQodmFsdWVGbihkaXN0YW5jZUJvdW5kcywgc3RhdGUpLCB7XG4gICAgICAgIG1pbjogLUluZmluaXR5LFxuICAgICAgICBtYXg6IEluZmluaXR5XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbRC5taW4sIEQubWF4XTtcbiAgICB9O1xuXG4gICAgdmFyIF9hbmdsZUJvdW5kcyA9IGZ1bmN0aW9uIF9hbmdsZUJvdW5kcyhzdGF0ZSkge1xuICAgICAgdmFyIEEgPSBhc3NpZ25EZWZhdWx0KHZhbHVlRm4oYW5nbGVCb3VuZHMsIHN0YXRlKSwge1xuICAgICAgICBtaW46IC1JbmZpbml0eSxcbiAgICAgICAgbWF4OiBJbmZpbml0eVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gW0EubWluLCBBLm1heF07XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgZGlzdGFuY2VCb3VuZHMgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGFuZ2xlQm91bmRzICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gW19kaXN0YW5jZUJvdW5kcygpLCBfYW5nbGVCb3VuZHMoKV07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIFtfZGlzdGFuY2VCb3VuZHMoc3RhdGUpLCBfYW5nbGVCb3VuZHMoc3RhdGUpXTtcbiAgICB9O1xuICB9XG59KTtcblxudmFyIEludGVybmFsRHJhZ09wdGlvbnNOb3JtYWxpemVycyA9IC8qI19fUFVSRV9fKi9fZXh0ZW5kcyh7fSwgSW50ZXJuYWxDb29yZGluYXRlc09wdGlvbnNOb3JtYWxpemVycywge1xuICB1c2VUb3VjaDogZnVuY3Rpb24gdXNlVG91Y2godmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUgJiYgc3VwcG9ydHNUb3VjaEV2ZW50cygpO1xuICB9LFxuICBleHBlcmltZW50YWxfcHJldmVudFdpbmRvd1Njcm9sbFk6IGZ1bmN0aW9uIGV4cGVyaW1lbnRhbF9wcmV2ZW50V2luZG93U2Nyb2xsWSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgdGhyZXNob2xkOiBmdW5jdGlvbiB0aHJlc2hvbGQodiwgX2ssIF9yZWYzKSB7XG4gICAgdmFyIF9yZWYzJGZpbHRlclRhcHMgPSBfcmVmMy5maWx0ZXJUYXBzLFxuICAgICAgICBmaWx0ZXJUYXBzID0gX3JlZjMkZmlsdGVyVGFwcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMyRmaWx0ZXJUYXBzLFxuICAgICAgICBfcmVmMyRsb2NrRGlyZWN0aW9uID0gX3JlZjMubG9ja0RpcmVjdGlvbixcbiAgICAgICAgbG9ja0RpcmVjdGlvbiA9IF9yZWYzJGxvY2tEaXJlY3Rpb24gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjMkbG9ja0RpcmVjdGlvbixcbiAgICAgICAgX3JlZjMkYXhpcyA9IF9yZWYzLmF4aXMsXG4gICAgICAgIGF4aXMgPSBfcmVmMyRheGlzID09PSB2b2lkIDAgPyB1bmRlZmluZWQgOiBfcmVmMyRheGlzO1xuICAgIHZhciBBID0gZW5zdXJlVmVjdG9yKHYsIGZpbHRlclRhcHMgPyAzIDogbG9ja0RpcmVjdGlvbiA/IDEgOiBheGlzID8gMSA6IDApO1xuICAgIHRoaXMuZmlsdGVyVGFwcyA9IGZpbHRlclRhcHM7XG4gICAgcmV0dXJuIEE7XG4gIH0sXG4gIHN3aXBlVmVsb2NpdHk6IGZ1bmN0aW9uIHN3aXBlVmVsb2NpdHkodikge1xuICAgIGlmICh2ID09PSB2b2lkIDApIHtcbiAgICAgIHYgPSBERUZBVUxUX1NXSVBFX1ZFTE9DSVRZO1xuICAgIH1cblxuICAgIHJldHVybiBlbnN1cmVWZWN0b3Iodik7XG4gIH0sXG4gIHN3aXBlRGlzdGFuY2U6IGZ1bmN0aW9uIHN3aXBlRGlzdGFuY2Uodikge1xuICAgIGlmICh2ID09PSB2b2lkIDApIHtcbiAgICAgIHYgPSBERUZBVUxUX1NXSVBFX0RJU1RBTkNFO1xuICAgIH1cblxuICAgIHJldHVybiBlbnN1cmVWZWN0b3Iodik7XG4gIH0sXG4gIGRlbGF5OiBmdW5jdGlvbiBkZWxheSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZSA9IDA7XG4gICAgfVxuXG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICByZXR1cm4gREVGQVVMVF9EUkFHX0RFTEFZO1xuXG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICByZXR1cm4gMDtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGdldEludGVybmFsR2VuZXJpY09wdGlvbnMoY29uZmlnKSB7XG4gIGlmIChjb25maWcgPT09IHZvaWQgMCkge1xuICAgIGNvbmZpZyA9IHt9O1xuICB9XG5cbiAgLy8gVE9ETyB3YXJuIHdoZW4gcGFzc2l2ZSBpcyBzZXQgdG8gdHJ1ZSBhbmQgZG9tVGFyZ2V0IGlzIHVuZGVmaW5lZFxuICByZXR1cm4gcmVzb2x2ZVdpdGgoY29uZmlnLCBJbnRlcm5hbEdlbmVyaWNPcHRpb25zTm9ybWFsaXplcnMpO1xufVxuZnVuY3Rpb24gZ2V0SW50ZXJuYWxDb29yZGluYXRlc09wdGlvbnMoY29uZmlnKSB7XG4gIGlmIChjb25maWcgPT09IHZvaWQgMCkge1xuICAgIGNvbmZpZyA9IHt9O1xuICB9XG5cbiAgcmV0dXJuIHJlc29sdmVXaXRoKGNvbmZpZywgSW50ZXJuYWxDb29yZGluYXRlc09wdGlvbnNOb3JtYWxpemVycyk7XG59XG5mdW5jdGlvbiBnZXRJbnRlcm5hbERpc3RhbmNlQW5nbGVPcHRpb25zKGNvbmZpZykge1xuICBpZiAoY29uZmlnID09PSB2b2lkIDApIHtcbiAgICBjb25maWcgPSB7fTtcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlV2l0aChjb25maWcsIEludGVybmFsRGlzdGFuY2VBbmdsZU9wdGlvbnNOb3JtYWxpemVycyk7XG59XG5mdW5jdGlvbiBnZXRJbnRlcm5hbERyYWdPcHRpb25zKGNvbmZpZykge1xuICBpZiAoY29uZmlnID09PSB2b2lkIDApIHtcbiAgICBjb25maWcgPSB7fTtcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlV2l0aChjb25maWcsIEludGVybmFsRHJhZ09wdGlvbnNOb3JtYWxpemVycyk7XG59XG5cbmZ1bmN0aW9uIF9idWlsZE1vdmVDb25maWcoX3JlZikge1xuICB2YXIgZG9tVGFyZ2V0ID0gX3JlZi5kb21UYXJnZXQsXG4gICAgICBldmVudE9wdGlvbnMgPSBfcmVmLmV2ZW50T3B0aW9ucyxcbiAgICAgIHdpbmRvdyA9IF9yZWYud2luZG93LFxuICAgICAgZW5hYmxlZCA9IF9yZWYuZW5hYmxlZCxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJkb21UYXJnZXRcIiwgXCJldmVudE9wdGlvbnNcIiwgXCJ3aW5kb3dcIiwgXCJlbmFibGVkXCJdKTtcblxuICB2YXIgb3B0cyA9IGdldEludGVybmFsR2VuZXJpY09wdGlvbnMoe1xuICAgIGRvbVRhcmdldDogZG9tVGFyZ2V0LFxuICAgIGV2ZW50T3B0aW9uczogZXZlbnRPcHRpb25zLFxuICAgIHdpbmRvdzogd2luZG93LFxuICAgIGVuYWJsZWQ6IGVuYWJsZWRcbiAgfSk7XG4gIG9wdHMubW92ZSA9IGdldEludGVybmFsQ29vcmRpbmF0ZXNPcHRpb25zKHJlc3QpO1xuICByZXR1cm4gb3B0cztcbn1cbmZ1bmN0aW9uIF9idWlsZEhvdmVyQ29uZmlnKF9yZWYyKSB7XG4gIHZhciBkb21UYXJnZXQgPSBfcmVmMi5kb21UYXJnZXQsXG4gICAgICBldmVudE9wdGlvbnMgPSBfcmVmMi5ldmVudE9wdGlvbnMsXG4gICAgICB3aW5kb3cgPSBfcmVmMi53aW5kb3csXG4gICAgICBlbmFibGVkID0gX3JlZjIuZW5hYmxlZCxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgW1wiZG9tVGFyZ2V0XCIsIFwiZXZlbnRPcHRpb25zXCIsIFwid2luZG93XCIsIFwiZW5hYmxlZFwiXSk7XG5cbiAgdmFyIG9wdHMgPSBnZXRJbnRlcm5hbEdlbmVyaWNPcHRpb25zKHtcbiAgICBkb21UYXJnZXQ6IGRvbVRhcmdldCxcbiAgICBldmVudE9wdGlvbnM6IGV2ZW50T3B0aW9ucyxcbiAgICB3aW5kb3c6IHdpbmRvdyxcbiAgICBlbmFibGVkOiBlbmFibGVkXG4gIH0pO1xuICBvcHRzLmhvdmVyID0gX2V4dGVuZHMoe1xuICAgIGVuYWJsZWQ6IHRydWVcbiAgfSwgcmVzdCk7XG4gIHJldHVybiBvcHRzO1xufVxuZnVuY3Rpb24gX2J1aWxkRHJhZ0NvbmZpZyhfcmVmMykge1xuICB2YXIgZG9tVGFyZ2V0ID0gX3JlZjMuZG9tVGFyZ2V0LFxuICAgICAgZXZlbnRPcHRpb25zID0gX3JlZjMuZXZlbnRPcHRpb25zLFxuICAgICAgd2luZG93ID0gX3JlZjMud2luZG93LFxuICAgICAgZW5hYmxlZCA9IF9yZWYzLmVuYWJsZWQsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjMsIFtcImRvbVRhcmdldFwiLCBcImV2ZW50T3B0aW9uc1wiLCBcIndpbmRvd1wiLCBcImVuYWJsZWRcIl0pO1xuXG4gIHZhciBvcHRzID0gZ2V0SW50ZXJuYWxHZW5lcmljT3B0aW9ucyh7XG4gICAgZG9tVGFyZ2V0OiBkb21UYXJnZXQsXG4gICAgZXZlbnRPcHRpb25zOiBldmVudE9wdGlvbnMsXG4gICAgd2luZG93OiB3aW5kb3csXG4gICAgZW5hYmxlZDogZW5hYmxlZFxuICB9KTtcbiAgb3B0cy5kcmFnID0gZ2V0SW50ZXJuYWxEcmFnT3B0aW9ucyhyZXN0KTtcbiAgcmV0dXJuIG9wdHM7XG59XG5mdW5jdGlvbiBfYnVpbGRQaW5jaENvbmZpZyhfcmVmNCkge1xuICB2YXIgZG9tVGFyZ2V0ID0gX3JlZjQuZG9tVGFyZ2V0LFxuICAgICAgZXZlbnRPcHRpb25zID0gX3JlZjQuZXZlbnRPcHRpb25zLFxuICAgICAgd2luZG93ID0gX3JlZjQud2luZG93LFxuICAgICAgZW5hYmxlZCA9IF9yZWY0LmVuYWJsZWQsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjQsIFtcImRvbVRhcmdldFwiLCBcImV2ZW50T3B0aW9uc1wiLCBcIndpbmRvd1wiLCBcImVuYWJsZWRcIl0pO1xuXG4gIHZhciBvcHRzID0gZ2V0SW50ZXJuYWxHZW5lcmljT3B0aW9ucyh7XG4gICAgZG9tVGFyZ2V0OiBkb21UYXJnZXQsXG4gICAgZXZlbnRPcHRpb25zOiBldmVudE9wdGlvbnMsXG4gICAgd2luZG93OiB3aW5kb3csXG4gICAgZW5hYmxlZDogZW5hYmxlZFxuICB9KTtcbiAgb3B0cy5waW5jaCA9IGdldEludGVybmFsRGlzdGFuY2VBbmdsZU9wdGlvbnMocmVzdCk7XG4gIHJldHVybiBvcHRzO1xufVxuZnVuY3Rpb24gX2J1aWxkU2Nyb2xsQ29uZmlnKF9yZWY1KSB7XG4gIHZhciBkb21UYXJnZXQgPSBfcmVmNS5kb21UYXJnZXQsXG4gICAgICBldmVudE9wdGlvbnMgPSBfcmVmNS5ldmVudE9wdGlvbnMsXG4gICAgICB3aW5kb3cgPSBfcmVmNS53aW5kb3csXG4gICAgICBlbmFibGVkID0gX3JlZjUuZW5hYmxlZCxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNSwgW1wiZG9tVGFyZ2V0XCIsIFwiZXZlbnRPcHRpb25zXCIsIFwid2luZG93XCIsIFwiZW5hYmxlZFwiXSk7XG5cbiAgdmFyIG9wdHMgPSBnZXRJbnRlcm5hbEdlbmVyaWNPcHRpb25zKHtcbiAgICBkb21UYXJnZXQ6IGRvbVRhcmdldCxcbiAgICBldmVudE9wdGlvbnM6IGV2ZW50T3B0aW9ucyxcbiAgICB3aW5kb3c6IHdpbmRvdyxcbiAgICBlbmFibGVkOiBlbmFibGVkXG4gIH0pO1xuICBvcHRzLnNjcm9sbCA9IGdldEludGVybmFsQ29vcmRpbmF0ZXNPcHRpb25zKHJlc3QpO1xuICByZXR1cm4gb3B0cztcbn1cbmZ1bmN0aW9uIF9idWlsZFdoZWVsQ29uZmlnKF9yZWY2KSB7XG4gIHZhciBkb21UYXJnZXQgPSBfcmVmNi5kb21UYXJnZXQsXG4gICAgICBldmVudE9wdGlvbnMgPSBfcmVmNi5ldmVudE9wdGlvbnMsXG4gICAgICB3aW5kb3cgPSBfcmVmNi53aW5kb3csXG4gICAgICBlbmFibGVkID0gX3JlZjYuZW5hYmxlZCxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNiwgW1wiZG9tVGFyZ2V0XCIsIFwiZXZlbnRPcHRpb25zXCIsIFwid2luZG93XCIsIFwiZW5hYmxlZFwiXSk7XG5cbiAgdmFyIG9wdHMgPSBnZXRJbnRlcm5hbEdlbmVyaWNPcHRpb25zKHtcbiAgICBkb21UYXJnZXQ6IGRvbVRhcmdldCxcbiAgICBldmVudE9wdGlvbnM6IGV2ZW50T3B0aW9ucyxcbiAgICB3aW5kb3c6IHdpbmRvdyxcbiAgICBlbmFibGVkOiBlbmFibGVkXG4gIH0pO1xuICBvcHRzLndoZWVsID0gZ2V0SW50ZXJuYWxDb29yZGluYXRlc09wdGlvbnMocmVzdCk7XG4gIHJldHVybiBvcHRzO1xufVxuZnVuY3Rpb24gYnVpbGRDb21wbGV4Q29uZmlnKGNvbmZpZywgYWN0aW9ucykge1xuICBpZiAoY29uZmlnID09PSB2b2lkIDApIHtcbiAgICBjb25maWcgPSB7fTtcbiAgfVxuXG4gIGlmIChhY3Rpb25zID09PSB2b2lkIDApIHtcbiAgICBhY3Rpb25zID0gbmV3IFNldCgpO1xuICB9XG5cbiAgdmFyIF9jb25maWcgPSBjb25maWcsXG4gICAgICBkcmFnID0gX2NvbmZpZy5kcmFnLFxuICAgICAgd2hlZWwgPSBfY29uZmlnLndoZWVsLFxuICAgICAgbW92ZSA9IF9jb25maWcubW92ZSxcbiAgICAgIHNjcm9sbCA9IF9jb25maWcuc2Nyb2xsLFxuICAgICAgcGluY2ggPSBfY29uZmlnLnBpbmNoLFxuICAgICAgaG92ZXIgPSBfY29uZmlnLmhvdmVyLFxuICAgICAgZXZlbnRPcHRpb25zID0gX2NvbmZpZy5ldmVudE9wdGlvbnMsXG4gICAgICB3aW5kb3cgPSBfY29uZmlnLndpbmRvdyxcbiAgICAgIHRyYW5zZm9ybSA9IF9jb25maWcudHJhbnNmb3JtLFxuICAgICAgZG9tVGFyZ2V0ID0gX2NvbmZpZy5kb21UYXJnZXQsXG4gICAgICBlbmFibGVkID0gX2NvbmZpZy5lbmFibGVkO1xuICB2YXIgbWVyZ2VkQ29uZmlnID0gZ2V0SW50ZXJuYWxHZW5lcmljT3B0aW9ucyh7XG4gICAgZG9tVGFyZ2V0OiBkb21UYXJnZXQsXG4gICAgZXZlbnRPcHRpb25zOiBldmVudE9wdGlvbnMsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgd2luZG93OiB3aW5kb3csXG4gICAgZW5hYmxlZDogZW5hYmxlZFxuICB9KTtcbiAgaWYgKGFjdGlvbnMuaGFzKCdvbkRyYWcnKSkgbWVyZ2VkQ29uZmlnLmRyYWcgPSBnZXRJbnRlcm5hbERyYWdPcHRpb25zKGRyYWcpO1xuICBpZiAoYWN0aW9ucy5oYXMoJ29uV2hlZWwnKSkgbWVyZ2VkQ29uZmlnLndoZWVsID0gZ2V0SW50ZXJuYWxDb29yZGluYXRlc09wdGlvbnMod2hlZWwpO1xuICBpZiAoYWN0aW9ucy5oYXMoJ29uU2Nyb2xsJykpIG1lcmdlZENvbmZpZy5zY3JvbGwgPSBnZXRJbnRlcm5hbENvb3JkaW5hdGVzT3B0aW9ucyhzY3JvbGwpO1xuICBpZiAoYWN0aW9ucy5oYXMoJ29uTW92ZScpKSBtZXJnZWRDb25maWcubW92ZSA9IGdldEludGVybmFsQ29vcmRpbmF0ZXNPcHRpb25zKG1vdmUpO1xuICBpZiAoYWN0aW9ucy5oYXMoJ29uUGluY2gnKSkgbWVyZ2VkQ29uZmlnLnBpbmNoID0gZ2V0SW50ZXJuYWxEaXN0YW5jZUFuZ2xlT3B0aW9ucyhwaW5jaCk7XG4gIGlmIChhY3Rpb25zLmhhcygnb25Ib3ZlcicpKSBtZXJnZWRDb25maWcuaG92ZXIgPSBfZXh0ZW5kcyh7XG4gICAgZW5hYmxlZDogdHJ1ZVxuICB9LCBob3Zlcik7XG4gIHJldHVybiBtZXJnZWRDb25maWc7XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWwobWl4ZWQpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBfYWN0aXZlOiBmYWxzZSxcbiAgICBfYmxvY2tlZDogZmFsc2UsXG4gICAgX2ludGVudGlvbmFsOiBbZmFsc2UsIGZhbHNlXSxcbiAgICBfbW92ZW1lbnQ6IFswLCAwXSxcbiAgICBfaW5pdGlhbDogWzAsIDBdLFxuICAgIF9ib3VuZHM6IFtbLUluZmluaXR5LCBJbmZpbml0eV0sIFstSW5maW5pdHksIEluZmluaXR5XV0sXG4gICAgX2xhc3RFdmVudFR5cGU6IHVuZGVmaW5lZCxcbiAgICBfZHJhZ1N0YXJ0ZWQ6IGZhbHNlLFxuICAgIF9kcmFnUHJldmVudFNjcm9sbDogZmFsc2UsXG4gICAgX2RyYWdJc1RhcDogdHJ1ZSxcbiAgICBfZHJhZ0RlbGF5ZWQ6IGZhbHNlLFxuICAgIGV2ZW50OiB1bmRlZmluZWQsXG4gICAgaW50ZW50aW9uYWw6IGZhbHNlLFxuICAgIHZhbHVlczogWzAsIDBdLFxuICAgIHZlbG9jaXRpZXM6IFswLCAwXSxcbiAgICBkZWx0YTogWzAsIDBdLFxuICAgIG1vdmVtZW50OiBbMCwgMF0sXG4gICAgb2Zmc2V0OiBbMCwgMF0sXG4gICAgbGFzdE9mZnNldDogWzAsIDBdLFxuICAgIGRpcmVjdGlvbjogWzAsIDBdLFxuICAgIGluaXRpYWw6IFswLCAwXSxcbiAgICBwcmV2aW91czogWzAsIDBdLFxuICAgIGZpcnN0OiBmYWxzZSxcbiAgICBsYXN0OiBmYWxzZSxcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHRpbWVTdGFtcDogMCxcbiAgICBzdGFydFRpbWU6IDAsXG4gICAgZWxhcHNlZFRpbWU6IDAsXG4gICAgY2FuY2VsOiBub29wLFxuICAgIGNhbmNlbGVkOiBmYWxzZSxcbiAgICBtZW1vOiB1bmRlZmluZWQsXG4gICAgYXJnczogdW5kZWZpbmVkXG4gIH0sIG1peGVkKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICB2YXIgc2hhcmVkID0ge1xuICAgIGhvdmVyaW5nOiBmYWxzZSxcbiAgICBzY3JvbGxpbmc6IGZhbHNlLFxuICAgIHdoZWVsaW5nOiBmYWxzZSxcbiAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgbW92aW5nOiBmYWxzZSxcbiAgICBwaW5jaGluZzogZmFsc2UsXG4gICAgdG91Y2hlczogMCxcbiAgICBidXR0b25zOiAwLFxuICAgIGRvd246IGZhbHNlLFxuICAgIHNoaWZ0S2V5OiBmYWxzZSxcbiAgICBhbHRLZXk6IGZhbHNlLFxuICAgIG1ldGFLZXk6IGZhbHNlLFxuICAgIGN0cmxLZXk6IGZhbHNlLFxuICAgIGxvY2tlZDogZmFsc2VcbiAgfTtcbiAgdmFyIGRyYWcgPSBnZXRJbml0aWFsKHtcbiAgICBfcG9pbnRlcklkOiB1bmRlZmluZWQsXG4gICAgYXhpczogdW5kZWZpbmVkLFxuICAgIHh5OiBbMCwgMF0sXG4gICAgdnh2eTogWzAsIDBdLFxuICAgIHZlbG9jaXR5OiAwLFxuICAgIGRpc3RhbmNlOiAwLFxuICAgIHRhcDogZmFsc2UsXG4gICAgc3dpcGU6IFswLCAwXVxuICB9KTtcbiAgdmFyIHBpbmNoID0gZ2V0SW5pdGlhbCh7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciB3aGVuIHVzZWQgX3BvaW50ZXJJZHMgd2UgY2FuIGFzc2VydCBpdHMgdHlwZSB3aWxsIGJlIFtudW1iZXIsIG51bWJlcl1cbiAgICBfcG9pbnRlcklkczogW10sXG4gICAgZGE6IFswLCAwXSxcbiAgICB2ZHZhOiBbMCwgMF0sXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBvcmlnaW4gY2FuIG5ldmVyIGJlIHBhc3NlZCBhcyB1bmRlZmluZWQgaW4gdXNlcmxhbmRcbiAgICBvcmlnaW46IHVuZGVmaW5lZCxcbiAgICB0dXJuczogMFxuICB9KTtcbiAgdmFyIHdoZWVsID0gZ2V0SW5pdGlhbCh7XG4gICAgYXhpczogdW5kZWZpbmVkLFxuICAgIHh5OiBbMCwgMF0sXG4gICAgdnh2eTogWzAsIDBdLFxuICAgIHZlbG9jaXR5OiAwLFxuICAgIGRpc3RhbmNlOiAwXG4gIH0pO1xuICB2YXIgbW92ZSA9IGdldEluaXRpYWwoe1xuICAgIGF4aXM6IHVuZGVmaW5lZCxcbiAgICB4eTogWzAsIDBdLFxuICAgIHZ4dnk6IFswLCAwXSxcbiAgICB2ZWxvY2l0eTogMCxcbiAgICBkaXN0YW5jZTogMFxuICB9KTtcbiAgdmFyIHNjcm9sbCA9IGdldEluaXRpYWwoe1xuICAgIGF4aXM6IHVuZGVmaW5lZCxcbiAgICB4eTogWzAsIDBdLFxuICAgIHZ4dnk6IFswLCAwXSxcbiAgICB2ZWxvY2l0eTogMCxcbiAgICBkaXN0YW5jZTogMFxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBzaGFyZWQ6IHNoYXJlZCxcbiAgICBkcmFnOiBkcmFnLFxuICAgIHBpbmNoOiBwaW5jaCxcbiAgICB3aGVlbDogd2hlZWwsXG4gICAgbW92ZTogbW92ZSxcbiAgICBzY3JvbGw6IHNjcm9sbFxuICB9O1xufVxuXG52YXIgUmVjb2duaXplcnNNYXAgPSAvKiNfX1BVUkVfXyovbmV3IE1hcCgpO1xuXG52YXIgaWRlbnRpdHkkMSA9IGZ1bmN0aW9uIGlkZW50aXR5KHh5KSB7XG4gIHJldHVybiB4eTtcbn07XG4vKipcclxuICogQHByaXZhdGVcclxuICogUmVjb2duaXplciBhYnN0cmFjdCBjbGFzcy5cclxuICovXG5cblxudmFyIFJlY29nbml6ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGEgZ2VzdHVyZSByZWNvZ25pemVyLlxyXG4gICAqIEBwYXJhbSBzdGF0ZUtleSBkcmFnLCBtb3ZlLCBwaW5jaCwgZXRjLlxyXG4gICAqIEBwYXJhbSBjb250cm9sbGVyIHRoZSBjb250cm9sbGVyIGF0dGFjaGVkIHRvIHRoZSBnZXN0dXJlXHJcbiAgICogQHBhcmFtIFthcmdzXSB0aGUgYXJncyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGdlc3R1cmUgaGFuZGxlclxyXG4gICAqL1xuICBmdW5jdGlvbiBSZWNvZ25pemVyKGNvbnRyb2xsZXIsIGFyZ3MpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKGFyZ3MgPT09IHZvaWQgMCkge1xuICAgICAgYXJncyA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgdGhpcy5hcmdzID0gYXJncztcbiAgICB0aGlzLmRlYm91bmNlZCA9IHRydWU7IC8vIENvbnZlbmllbmNlIG1ldGhvZCB0byBzZXQgYSB0aW1lb3V0IGZvciBhIGdpdmVuIGdlc3R1cmVcblxuICAgIHRoaXMuc2V0VGltZW91dCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMpIHtcbiAgICAgIHZhciBfd2luZG93O1xuXG4gICAgICBpZiAobXMgPT09IHZvaWQgMCkge1xuICAgICAgICBtcyA9IDE0MDtcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmNvbnRyb2xsZXIudGltZW91dHNbX3RoaXMuc3RhdGVLZXldKTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY29udHJvbGxlci50aW1lb3V0c1tfdGhpcy5zdGF0ZUtleV0gPSAoX3dpbmRvdyA9IHdpbmRvdykuc2V0VGltZW91dC5hcHBseShfd2luZG93LCBbY2FsbGJhY2ssIG1zXS5jb25jYXQoYXJncykpO1xuICAgIH07IC8vIENvbnZlbmllbmNlIG1ldGhvZCB0byBjbGVhciBhIHRpbWVvdXQgZm9yIGEgZ2l2ZW4gZ2VzdHVyZVxuXG5cbiAgICB0aGlzLmNsZWFyVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFyVGltZW91dChfdGhpcy5jb250cm9sbGVyLnRpbWVvdXRzW190aGlzLnN0YXRlS2V5XSk7XG4gICAgfTtcbiAgICAvKipcclxuICAgICAqIEZpcmVzIHRoZSBnZXN0dXJlIGhhbmRsZXJcclxuICAgICAqL1xuXG5cbiAgICB0aGlzLmZpcmVHZXN0dXJlSGFuZGxlciA9IGZ1bmN0aW9uIChmb3JjZUZsYWcpIHtcbiAgICAgIGlmIChmb3JjZUZsYWcgPT09IHZvaWQgMCkge1xuICAgICAgICBmb3JjZUZsYWcgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLyoqXHJcbiAgICAgICAqIElmIHRoZSBnZXN0dXJlIGhhcyBiZWVuIGJsb2NrZWQgKHRoaXMgY2FuIGhhcHBlbiB3aGVuIHRoZSBnZXN0dXJlIGhhcyBzdGFydGVkIGluIGFuIHVud2FudGVkIGRpcmVjdGlvbiksXHJcbiAgICAgICAqIGNsZWFuIGV2ZXJ5dGhpbmcgYW5kIGRvbid0IGRvIGFueXRoaW5nLlxyXG4gICAgICAgKi9cbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5fYmxvY2tlZCkge1xuICAgICAgICAvLyB3ZSBuZWVkIGRlYm91bmNlZCBnZXN0dXJlcyB0byBlbmQgYnkgdGhlbXNlbHZlc1xuICAgICAgICBpZiAoIV90aGlzLmRlYm91bmNlZCkge1xuICAgICAgICAgIF90aGlzLnN0YXRlLl9hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgIF90aGlzLmNsZWFuKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gLy8gSWYgdGhlIGdlc3R1cmUgaGFzIG5vIGludGVudGlvbmFsIGRpbWVuc2lvbiwgZG9uJ3QgZmlyZSB0aGUgaGFuZGxlci5cblxuXG4gICAgICBpZiAoIWZvcmNlRmxhZyAmJiAhX3RoaXMuc3RhdGUuaW50ZW50aW9uYWwgJiYgIV90aGlzLmNvbmZpZy50cmlnZ2VyQWxsRXZlbnRzKSByZXR1cm4gbnVsbDtcblxuICAgICAgaWYgKF90aGlzLnN0YXRlLmludGVudGlvbmFsKSB7XG4gICAgICAgIHZhciBwcmV2X2FjdGl2ZSA9IF90aGlzLnN0YXRlLmFjdGl2ZTtcbiAgICAgICAgdmFyIG5leHRfYWN0aXZlID0gX3RoaXMuc3RhdGUuX2FjdGl2ZTtcbiAgICAgICAgX3RoaXMuc3RhdGUuYWN0aXZlID0gbmV4dF9hY3RpdmU7XG4gICAgICAgIF90aGlzLnN0YXRlLmZpcnN0ID0gbmV4dF9hY3RpdmUgJiYgIXByZXZfYWN0aXZlO1xuICAgICAgICBfdGhpcy5zdGF0ZS5sYXN0ID0gcHJldl9hY3RpdmUgJiYgIW5leHRfYWN0aXZlO1xuICAgICAgICBfdGhpcy5jb250cm9sbGVyLnN0YXRlLnNoYXJlZFtfdGhpcy5pbmdLZXldID0gbmV4dF9hY3RpdmU7IC8vIFNldHMgZHJhZ2dpbmcsIHBpbmNoaW5nLCBldGMuIHRvIHRoZSBnZXN0dXJlIGFjdGl2ZSBzdGF0ZVxuICAgICAgfVxuXG4gICAgICB2YXIgdG91Y2hlcyA9IF90aGlzLmNvbnRyb2xsZXIucG9pbnRlcklkcy5zaXplIHx8IF90aGlzLmNvbnRyb2xsZXIudG91Y2hJZHMuc2l6ZTtcbiAgICAgIHZhciBkb3duID0gX3RoaXMuY29udHJvbGxlci5zdGF0ZS5zaGFyZWQuYnV0dG9ucyA+IDAgfHwgdG91Y2hlcyA+IDA7XG5cbiAgICAgIHZhciBzdGF0ZSA9IF9leHRlbmRzKHt9LCBfdGhpcy5jb250cm9sbGVyLnN0YXRlLnNoYXJlZCwgX3RoaXMuc3RhdGUsIF90aGlzLm1hcFN0YXRlVmFsdWVzKF90aGlzLnN0YXRlKSwge1xuICAgICAgICBsb2NrZWQ6ICEhZG9jdW1lbnQucG9pbnRlckxvY2tFbGVtZW50LFxuICAgICAgICB0b3VjaGVzOiB0b3VjaGVzLFxuICAgICAgICBkb3duOiBkb3duXG4gICAgICB9KTsgLy8gQHRzLWV4cGVjdC1lcnJvclxuXG5cbiAgICAgIHZhciBuZXdNZW1vID0gX3RoaXMuaGFuZGxlcihzdGF0ZSk7IC8vIFNldHMgbWVtbyB0byB0aGUgcmV0dXJuZWQgdmFsdWUgb2YgdGhlIGhhbmRsZXIgKHVubGVzcyBpdCdzIG5vdCB1bmRlZmluZWQpXG5cblxuICAgICAgX3RoaXMuc3RhdGUubWVtbyA9IG5ld01lbW8gIT09IHZvaWQgMCA/IG5ld01lbW8gOiBfdGhpcy5zdGF0ZS5tZW1vO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH07XG4gIH0gLy8gUmV0dXJucyB0aGUgZ2VzdHVyZSBjb25maWdcblxuXG4gIHZhciBfcHJvdG8gPSBSZWNvZ25pemVyLnByb3RvdHlwZTtcblxuICAvLyBDb252ZW5pZW5jZSBtZXRob2QgdG8gdXBkYXRlIHRoZSBzaGFyZWQgc3RhdGVcbiAgX3Byb3RvLnVwZGF0ZVNoYXJlZFN0YXRlID0gZnVuY3Rpb24gdXBkYXRlU2hhcmVkU3RhdGUoc2hhcmVkU3RhdGUpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuY29udHJvbGxlci5zdGF0ZS5zaGFyZWQsIHNoYXJlZFN0YXRlKTtcbiAgfSAvLyBDb252ZW5pZW5jZSBtZXRob2QgdG8gdXBkYXRlIHRoZSBnZXN0dXJlIHN0YXRlXG4gIDtcblxuICBfcHJvdG8udXBkYXRlR2VzdHVyZVN0YXRlID0gZnVuY3Rpb24gdXBkYXRlR2VzdHVyZVN0YXRlKGdlc3R1cmVTdGF0ZSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgZ2VzdHVyZVN0YXRlKTtcbiAgfVxuICAvKipcclxuICAgKiBSZXR1cm5zIHN0YXRlIHByb3BlcnRpZXMgZGVwZW5kaW5nIG9uIHRoZSBtb3ZlbWVudCBhbmQgc3RhdGUuXHJcbiAgICpcclxuICAgKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGZvciBjdXN0b20gYmVoYXZpb3IsIGRvZXNuJ3QgZG8gYW55dGhpbmcgaW4gdGhlIGltcGxlbWVudGF0aW9uXHJcbiAgICogYmVsb3cuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uY2hlY2tJbnRlbnRpb25hbGl0eSA9IGZ1bmN0aW9uIGNoZWNrSW50ZW50aW9uYWxpdHkoX2ludGVudGlvbmFsLCBfbW92ZW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX2ludGVudGlvbmFsOiBfaW50ZW50aW9uYWwsXG4gICAgICBfYmxvY2tlZDogZmFsc2VcbiAgICB9O1xuICB9XG4gIC8qKlxyXG4gICAqIFJldHVybnMgYmFzaWMgbW92ZW1lbnQgcHJvcGVydGllcyBmb3IgdGhlIGdlc3R1cmUgYmFzZWQgb24gdGhlIG5leHQgdmFsdWVzIGFuZCBjdXJyZW50IHN0YXRlLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldE1vdmVtZW50ID0gZnVuY3Rpb24gZ2V0TW92ZW1lbnQodmFsdWVzKSB7XG4gICAgdmFyIF90aGlzJGNvbmZpZyA9IHRoaXMuY29uZmlnLFxuICAgICAgICBydWJiZXJiYW5kID0gX3RoaXMkY29uZmlnLnJ1YmJlcmJhbmQsXG4gICAgICAgIFQgPSBfdGhpcyRjb25maWcudGhyZXNob2xkO1xuICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIF9ib3VuZHMgPSBfdGhpcyRzdGF0ZS5fYm91bmRzLFxuICAgICAgICBfaW5pdGlhbCA9IF90aGlzJHN0YXRlLl9pbml0aWFsLFxuICAgICAgICBfYWN0aXZlID0gX3RoaXMkc3RhdGUuX2FjdGl2ZSxcbiAgICAgICAgd2FzSW50ZW50aW9uYWwgPSBfdGhpcyRzdGF0ZS5faW50ZW50aW9uYWwsXG4gICAgICAgIGxhc3RPZmZzZXQgPSBfdGhpcyRzdGF0ZS5sYXN0T2Zmc2V0LFxuICAgICAgICBwcmV2TW92ZW1lbnQgPSBfdGhpcyRzdGF0ZS5tb3ZlbWVudDtcbiAgICB2YXIgTSA9IHRoaXMuZ2V0SW50ZXJuYWxNb3ZlbWVudCh2YWx1ZXMsIHRoaXMuc3RhdGUpO1xuXG4gICAgdmFyIF9UID0gdGhpcy50cmFuc2Zvcm0oVCkubWFwKE1hdGguYWJzKTtcblxuICAgIHZhciBpMCA9IHdhc0ludGVudGlvbmFsWzBdID09PSBmYWxzZSA/IGdldEludGVudGlvbmFsRGlzcGxhY2VtZW50KE1bMF0sIF9UWzBdKSA6IHdhc0ludGVudGlvbmFsWzBdO1xuICAgIHZhciBpMSA9IHdhc0ludGVudGlvbmFsWzFdID09PSBmYWxzZSA/IGdldEludGVudGlvbmFsRGlzcGxhY2VtZW50KE1bMV0sIF9UWzFdKSA6IHdhc0ludGVudGlvbmFsWzFdOyAvLyBHZXQgZ2VzdHVyZSBzcGVjaWZpYyBzdGF0ZSBwcm9wZXJ0aWVzIGJhc2VkIG9uIGludGVudGlvbmFsaXR5IGFuZCBtb3ZlbWVudC5cblxuICAgIHZhciBpbnRlbnRpb25hbGl0eUNoZWNrID0gdGhpcy5jaGVja0ludGVudGlvbmFsaXR5KFtpMCwgaTFdLCBNKTtcblxuICAgIGlmIChpbnRlbnRpb25hbGl0eUNoZWNrLl9ibG9ja2VkKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGludGVudGlvbmFsaXR5Q2hlY2ssIHtcbiAgICAgICAgX21vdmVtZW50OiBNLFxuICAgICAgICBkZWx0YTogWzAsIDBdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgX2ludGVudGlvbmFsID0gaW50ZW50aW9uYWxpdHlDaGVjay5faW50ZW50aW9uYWw7XG4gICAgdmFyIF9tb3ZlbWVudCA9IE07XG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbW92ZW1lbnQgc2VudCB0byB0aGUgaGFuZGxlciBoYXMgMCBpbiBpdHMgZGltZW5zaW9ucyB3aGVuIGludGVudGlvbmFsaXR5IGlzIGZhbHNlLlxyXG4gICAgICogSXQgaXMgY2FsY3VsYXRlZCBmcm9tIHRoZSBhY3R1YWwgbW92ZW1lbnQgbWludXMgdGhlIHRocmVzaG9sZC5cclxuICAgICAqL1xuXG4gICAgdmFyIG1vdmVtZW50ID0gW19pbnRlbnRpb25hbFswXSAhPT0gZmFsc2UgPyBNWzBdIC0gX2ludGVudGlvbmFsWzBdIDogMCwgX2ludGVudGlvbmFsWzFdICE9PSBmYWxzZSA/IE1bMV0gLSBfaW50ZW50aW9uYWxbMV0gOiAwXTtcbiAgICB2YXIgb2Zmc2V0ID0gYWRkVihtb3ZlbWVudCwgbGFzdE9mZnNldCk7XG4gICAgLyoqXHJcbiAgICAgKiBSdWJiZXJiYW5kIHNob3VsZCBiZSAwIHdoZW4gdGhlIGdlc3R1cmUgaXMgbm8gbG9uZ2VyIGFjdGl2ZSwgc28gdGhhdCBtb3ZlbWVudFxyXG4gICAgICogYW5kIG9mZnNldCBjYW4gcmV0dXJuIHdpdGhpbiB0aGVpciBib3VuZHMuXHJcbiAgICAgKi9cblxuICAgIHZhciBfcnViYmVyYmFuZCA9IF9hY3RpdmUgPyBydWJiZXJiYW5kIDogWzAsIDBdO1xuXG4gICAgbW92ZW1lbnQgPSBjb21wdXRlUnViYmVyYmFuZChfYm91bmRzLCBhZGRWKG1vdmVtZW50LCBfaW5pdGlhbCksIF9ydWJiZXJiYW5kKTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGludGVudGlvbmFsaXR5Q2hlY2ssIHtcbiAgICAgIGludGVudGlvbmFsOiBfaW50ZW50aW9uYWxbMF0gIT09IGZhbHNlIHx8IF9pbnRlbnRpb25hbFsxXSAhPT0gZmFsc2UsXG4gICAgICBfaW5pdGlhbDogX2luaXRpYWwsXG4gICAgICBfbW92ZW1lbnQ6IF9tb3ZlbWVudCxcbiAgICAgIG1vdmVtZW50OiBtb3ZlbWVudCxcbiAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgb2Zmc2V0OiBjb21wdXRlUnViYmVyYmFuZChfYm91bmRzLCBvZmZzZXQsIF9ydWJiZXJiYW5kKSxcbiAgICAgIGRlbHRhOiBzdWJWKG1vdmVtZW50LCBwcmV2TW92ZW1lbnQpXG4gICAgfSk7XG4gIH0gLy8gQ2xlYW5zIHRoZSBnZXN0dXJlLiBDYW4gYmUgb3ZlcnJpZGVuIGJ5IGdlc3R1cmVzLlxuICA7XG5cbiAgX3Byb3RvLmNsZWFuID0gZnVuY3Rpb24gY2xlYW4oKSB7XG4gICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoUmVjb2duaXplciwgW3tcbiAgICBrZXk6IFwiY29uZmlnXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyLmNvbmZpZ1t0aGlzLnN0YXRlS2V5XTtcbiAgICB9IC8vIElzIHRoZSBnZXN0dXJlIGVuYWJsZWRcblxuICB9LCB7XG4gICAga2V5OiBcImVuYWJsZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIuY29uZmlnLmVuYWJsZWQgJiYgdGhpcy5jb25maWcuZW5hYmxlZDtcbiAgICB9IC8vIFJldHVybnMgdGhlIGNvbnRyb2xsZXIgc3RhdGUgZm9yIGEgZ2l2ZW4gZ2VzdHVyZVxuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIuc3RhdGVbdGhpcy5zdGF0ZUtleV07XG4gICAgfSAvLyBSZXR1cm5zIHRoZSBnZXN0dXJlIGhhbmRsZXJcblxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIuaGFuZGxlcnNbdGhpcy5zdGF0ZUtleV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRyYW5zZm9ybVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnRyYW5zZm9ybSB8fCB0aGlzLmNvbnRyb2xsZXIuY29uZmlnLnRyYW5zZm9ybSB8fCBpZGVudGl0eSQxO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZWNvZ25pemVyO1xufSgpOyAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGdldEludGVudGlvbmFsRGlzcGxhY2VtZW50KG1vdmVtZW50LCB0aHJlc2hvbGQpIHtcbiAgaWYgKE1hdGguYWJzKG1vdmVtZW50KSA+PSB0aHJlc2hvbGQpIHtcbiAgICByZXR1cm4gc2lnbihtb3ZlbWVudCkgKiB0aHJlc2hvbGQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVSdWJiZXJiYW5kKGJvdW5kcywgX3JlZiwgX3JlZjIpIHtcbiAgdmFyIFZ4ID0gX3JlZlswXSxcbiAgICAgIFZ5ID0gX3JlZlsxXTtcbiAgdmFyIFJ4ID0gX3JlZjJbMF0sXG4gICAgICBSeSA9IF9yZWYyWzFdO1xuICB2YXIgX2JvdW5kcyQgPSBib3VuZHNbMF0sXG4gICAgICBYMSA9IF9ib3VuZHMkWzBdLFxuICAgICAgWDIgPSBfYm91bmRzJFsxXSxcbiAgICAgIF9ib3VuZHMkMiA9IGJvdW5kc1sxXSxcbiAgICAgIFkxID0gX2JvdW5kcyQyWzBdLFxuICAgICAgWTIgPSBfYm91bmRzJDJbMV07XG4gIHJldHVybiBbcnViYmVyYmFuZElmT3V0T2ZCb3VuZHMoVngsIFgxLCBYMiwgUngpLCBydWJiZXJiYW5kSWZPdXRPZkJvdW5kcyhWeSwgWTEsIFkyLCBSeSldO1xufVxuLyoqXHJcbiAqIFJldHVybnMgYSBnZW5lcmljLCBjb21tb24gcGF5bG9hZCBmb3IgYWxsIGdlc3R1cmVzIGZyb20gYW4gZXZlbnQuXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEdlbmVyaWNQYXlsb2FkKF9yZWYzLCBldmVudCwgaXNTdGFydEV2ZW50KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYzLnN0YXRlO1xuICB2YXIgdGltZVN0YW1wID0gZXZlbnQudGltZVN0YW1wLFxuICAgICAgX2xhc3RFdmVudFR5cGUgPSBldmVudC50eXBlO1xuICB2YXIgcHJldmlvdXMgPSBzdGF0ZS52YWx1ZXM7XG4gIHZhciBlbGFwc2VkVGltZSA9IGlzU3RhcnRFdmVudCA/IDAgOiB0aW1lU3RhbXAgLSBzdGF0ZS5zdGFydFRpbWU7XG4gIHJldHVybiB7XG4gICAgX2xhc3RFdmVudFR5cGU6IF9sYXN0RXZlbnRUeXBlLFxuICAgIGV2ZW50OiBldmVudCxcbiAgICB0aW1lU3RhbXA6IHRpbWVTdGFtcCxcbiAgICBlbGFwc2VkVGltZTogZWxhcHNlZFRpbWUsXG4gICAgcHJldmlvdXM6IHByZXZpb3VzXG4gIH07XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgcmVpbml0aWFsaXplZCBzdGFydCBzdGF0ZSBmb3IgdGhlIGdlc3R1cmUuXHJcbiAqIFNob3VsZCBiZSBjb21tb24gdG8gYWxsIGdlc3R1cmVzLlxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0U3RhcnRHZXN0dXJlU3RhdGUoX3JlZjQsIHZhbHVlcywgZXZlbnQpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjQuc3RhdGUsXG4gICAgICBjb25maWcgPSBfcmVmNC5jb25maWcsXG4gICAgICBzdGF0ZUtleSA9IF9yZWY0LnN0YXRlS2V5LFxuICAgICAgYXJncyA9IF9yZWY0LmFyZ3M7XG4gIHZhciBvZmZzZXQgPSBzdGF0ZS5vZmZzZXQ7XG4gIHZhciBzdGFydFRpbWUgPSBldmVudC50aW1lU3RhbXA7XG4gIHZhciBpbml0aWFsID0gY29uZmlnLmluaXRpYWwsXG4gICAgICBib3VuZHMgPSBjb25maWcuYm91bmRzO1xuXG4gIHZhciBfc3RhdGUgPSBfZXh0ZW5kcyh7fSwgZ2V0SW5pdGlhbFN0YXRlKClbc3RhdGVLZXldLCB7XG4gICAgX2FjdGl2ZTogdHJ1ZSxcbiAgICBhcmdzOiBhcmdzLFxuICAgIHZhbHVlczogdmFsdWVzLFxuICAgIGluaXRpYWw6IHZhbHVlcyxcbiAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICBsYXN0T2Zmc2V0OiBvZmZzZXQsXG4gICAgc3RhcnRUaW1lOiBzdGFydFRpbWVcbiAgfSk7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBfc3RhdGUsIHtcbiAgICBfaW5pdGlhbDogdmFsdWVGbihpbml0aWFsLCBfc3RhdGUpLFxuICAgIF9ib3VuZHM6IHZhbHVlRm4oYm91bmRzLCBfc3RhdGUpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJ0aWFsKGZ1bmMsIHN0YXRlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIGZ1bmMuY2FsbC5hcHBseShmdW5jLCBbdGhpcywgX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICBldmVudDogZXZlbnRcbiAgICB9KV0uY29uY2F0KGFyZ3MpKTtcbiAgfTtcbn1cbi8qKlxyXG4gKiBUaGUgY29udHJvbGxlciB3aWxsIGtlZXAgdHJhY2sgb2YgdGhlIHN0YXRlIGZvciBhbGwgZ2VzdHVyZXMgYW5kIGFsc28ga2VlcFxyXG4gKiB0cmFjayBvZiB0aW1lb3V0cywgYW5kIHdpbmRvdyBsaXN0ZW5lcnMuXHJcbiAqL1xuXG5cbnZhciBDb250cm9sbGVyID0gZnVuY3Rpb24gQ29udHJvbGxlcihjbGFzc2VzKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcztcbiAgdGhpcy5wb2ludGVySWRzID0gbmV3IFNldCgpOyAvLyByZWdpc3RlciBQb2ludGVyIEV2ZW50cyBwb2ludGVySWRzXG5cbiAgdGhpcy50b3VjaElkcyA9IG5ldyBTZXQoKTsgLy8gcmVnaXN0ZXIgVG91Y2ggRXZlbnRzIGlkZW50aWZpZXJzXG5cbiAgdGhpcy5zdXBwb3J0c1RvdWNoRXZlbnRzID0gc3VwcG9ydHNUb3VjaEV2ZW50cygpO1xuICB0aGlzLnN1cHBvcnRzR2VzdHVyZUV2ZW50cyA9IHN1cHBvcnRzR2VzdHVyZUV2ZW50cygpO1xuXG4gIHRoaXMuYmluZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYmluZGluZ3MgPSB7fTtcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoX3RoaXMuY2xhc3NlcyksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgUmVjb2duaXplckNsYXNzID0gX3N0ZXAudmFsdWU7XG4gICAgICBuZXcgUmVjb2duaXplckNsYXNzKF90aGlzLCBhcmdzKS5hZGRCaW5kaW5ncyhiaW5kaW5ncyk7XG4gICAgfSAvLyB3ZSBhbHNvIGFkZCBldmVudCBiaW5kaW5ncyBmb3IgbmF0aXZlIGhhbmRsZXJzXG5cblxuICAgIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoX3RoaXMubmF0aXZlUmVmcyk7IF9pIDwgX09iamVjdCRlbnRyaWVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9PYmplY3QkZW50cmllcyRfaSA9IF9PYmplY3QkZW50cmllc1tfaV0sXG4gICAgICAgICAgZXZlbnQgPSBfT2JqZWN0JGVudHJpZXMkX2lbMF0sXG4gICAgICAgICAgaGFuZGxlciA9IF9PYmplY3QkZW50cmllcyRfaVsxXTtcbiAgICAgIGFkZEJpbmRpbmdzKGJpbmRpbmdzLCBldmVudCwgcGFydGlhbChoYW5kbGVyLCBfZXh0ZW5kcyh7fSwgX3RoaXMuc3RhdGUuc2hhcmVkLCB7XG4gICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgaWYgKF90aGlzLmNvbmZpZy5kb21UYXJnZXQpIHtcbiAgICAgIC8vIElmIGNvbmZpZy5kb21UYXJnZXQgaXMgc2V0IHdlIGFkZCBldmVudCBsaXN0ZW5lcnMgdG8gaXQgYW5kIHJldHVybiB0aGUgY2xlYW4gZnVuY3Rpb24uXG4gICAgICByZXR1cm4gdXBkYXRlRG9tTGlzdGVuZXJzKF90aGlzLCBiaW5kaW5ncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIG5vdCwgd2UgcmV0dXJuIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGdlc3R1cmUgaGFuZGxlcnMgbWFwcGVkIHRvIHJlYWN0IGhhbmRsZXIgZXZlbnQga2V5cy5cbiAgICAgIHJldHVybiBnZXRQcm9wc0xpc3RlbmVyKF90aGlzLCBiaW5kaW5ncyk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuZWZmZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChfdGhpcy5jb25maWcuZG9tVGFyZ2V0KSBfdGhpcy5iaW5kKCk7XG4gICAgcmV0dXJuIF90aGlzLmNsZWFuO1xuICB9O1xuICAvKipcclxuICAgKiBGdW5jdGlvbiByYW4gb24gY29tcG9uZW50IHVubW91bnQ6IGNsZWFucyB0aW1lb3V0cyBhbmQgcmVtb3ZlcyBkb20gbGlzdGVuZXJzIHNldCBieSB0aGUgYmluZCBmdW5jdGlvbi5cclxuICAgKi9cblxuXG4gIHRoaXMuY2xlYW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRvbVRhcmdldCA9IGdldERvbVRhcmdldEZyb21Db25maWcoX3RoaXMuY29uZmlnKTtcbiAgICB2YXIgZXZlbnRPcHRpb25zID0gX3RoaXMuY29uZmlnLmV2ZW50T3B0aW9ucztcbiAgICBpZiAoZG9tVGFyZ2V0KSByZW1vdmVMaXN0ZW5lcnMoZG9tVGFyZ2V0LCB0YWtlQWxsKF90aGlzLmRvbUxpc3RlbmVycyksIGV2ZW50T3B0aW9ucyk7XG4gICAgT2JqZWN0LnZhbHVlcyhfdGhpcy50aW1lb3V0cykuZm9yRWFjaChjbGVhclRpbWVvdXQpO1xuICAgIGNsZWFyQWxsV2luZG93TGlzdGVuZXJzKF90aGlzKTtcbiAgfTtcblxuICB0aGlzLnN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCk7XG4gIHRoaXMudGltZW91dHMgPSB7fTtcbiAgdGhpcy5kb21MaXN0ZW5lcnMgPSBbXTtcbiAgdGhpcy53aW5kb3dMaXN0ZW5lcnMgPSB7fTtcbn07XG5mdW5jdGlvbiBhZGRFdmVudElkcyhjb250cm9sbGVyLCBldmVudCkge1xuICB2YXIgaWRMaXN0ID0gJ3BvaW50ZXJJZCcgaW4gZXZlbnQgPyBjb250cm9sbGVyLnBvaW50ZXJJZHMgOiBjb250cm9sbGVyLnRvdWNoSWRzO1xuICBnZXRQb2ludGVySWRzKGV2ZW50KS5mb3JFYWNoKGlkTGlzdC5hZGQsIGlkTGlzdCk7XG59XG5mdW5jdGlvbiByZW1vdmVFdmVudElkcyhjb250cm9sbGVyLCBldmVudCkge1xuICB2YXIgaWRMaXN0ID0gJ3BvaW50ZXJJZCcgaW4gZXZlbnQgPyBjb250cm9sbGVyLnBvaW50ZXJJZHMgOiBjb250cm9sbGVyLnRvdWNoSWRzO1xuICBnZXRQb2ludGVySWRzKGV2ZW50KS5mb3JFYWNoKGlkTGlzdFtcImRlbGV0ZVwiXSwgaWRMaXN0KTtcbn1cbmZ1bmN0aW9uIGNsZWFyQWxsV2luZG93TGlzdGVuZXJzKGNvbnRyb2xsZXIpIHtcbiAgdmFyIF9jb250cm9sbGVyJGNvbmZpZyA9IGNvbnRyb2xsZXIuY29uZmlnLFxuICAgICAgZWwgPSBfY29udHJvbGxlciRjb25maWcud2luZG93LFxuICAgICAgZXZlbnRPcHRpb25zID0gX2NvbnRyb2xsZXIkY29uZmlnLmV2ZW50T3B0aW9ucyxcbiAgICAgIHdpbmRvd0xpc3RlbmVycyA9IGNvbnRyb2xsZXIud2luZG93TGlzdGVuZXJzO1xuICBpZiAoIWVsKSByZXR1cm47XG5cbiAgZm9yICh2YXIgc3RhdGVLZXkgaW4gd2luZG93TGlzdGVuZXJzKSB7XG4gICAgdmFyIGhhbmRsZXJzID0gd2luZG93TGlzdGVuZXJzW3N0YXRlS2V5XTtcbiAgICByZW1vdmVMaXN0ZW5lcnMoZWwsIGhhbmRsZXJzLCBldmVudE9wdGlvbnMpO1xuICB9XG5cbiAgY29udHJvbGxlci53aW5kb3dMaXN0ZW5lcnMgPSB7fTtcbn1cbmZ1bmN0aW9uIGNsZWFyV2luZG93TGlzdGVuZXJzKF9yZWYsIHN0YXRlS2V5LCBvcHRpb25zKSB7XG4gIHZhciBjb25maWcgPSBfcmVmLmNvbmZpZyxcbiAgICAgIHdpbmRvd0xpc3RlbmVycyA9IF9yZWYud2luZG93TGlzdGVuZXJzO1xuXG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0gY29uZmlnLmV2ZW50T3B0aW9ucztcbiAgfVxuXG4gIGlmICghY29uZmlnLndpbmRvdykgcmV0dXJuO1xuICByZW1vdmVMaXN0ZW5lcnMoY29uZmlnLndpbmRvdywgd2luZG93TGlzdGVuZXJzW3N0YXRlS2V5XSwgb3B0aW9ucyk7XG4gIGRlbGV0ZSB3aW5kb3dMaXN0ZW5lcnNbc3RhdGVLZXldO1xufVxuZnVuY3Rpb24gdXBkYXRlV2luZG93TGlzdGVuZXJzKF9yZWYyLCBzdGF0ZUtleSwgbGlzdGVuZXJzLCBvcHRpb25zKSB7XG4gIHZhciBjb25maWcgPSBfcmVmMi5jb25maWcsXG4gICAgICB3aW5kb3dMaXN0ZW5lcnMgPSBfcmVmMi53aW5kb3dMaXN0ZW5lcnM7XG5cbiAgaWYgKGxpc3RlbmVycyA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdGVuZXJzID0gW107XG4gIH1cblxuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IGNvbmZpZy5ldmVudE9wdGlvbnM7XG4gIH1cblxuICBpZiAoIWNvbmZpZy53aW5kb3cpIHJldHVybjtcbiAgcmVtb3ZlTGlzdGVuZXJzKGNvbmZpZy53aW5kb3csIHdpbmRvd0xpc3RlbmVyc1tzdGF0ZUtleV0sIG9wdGlvbnMpO1xuICBhZGRMaXN0ZW5lcnMoY29uZmlnLndpbmRvdywgd2luZG93TGlzdGVuZXJzW3N0YXRlS2V5XSA9IGxpc3RlbmVycywgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURvbUxpc3RlbmVycyhfcmVmMywgYmluZGluZ3MpIHtcbiAgdmFyIGNvbmZpZyA9IF9yZWYzLmNvbmZpZyxcbiAgICAgIGRvbUxpc3RlbmVycyA9IF9yZWYzLmRvbUxpc3RlbmVycztcbiAgdmFyIGRvbVRhcmdldCA9IGdldERvbVRhcmdldEZyb21Db25maWcoY29uZmlnKTtcbiAgaWYgKCFkb21UYXJnZXQpIHRocm93IG5ldyBFcnJvcignZG9tVGFyZ2V0IG11c3QgYmUgZGVmaW5lZCcpO1xuICB2YXIgZXZlbnRPcHRpb25zID0gY29uZmlnLmV2ZW50T3B0aW9ucztcbiAgcmVtb3ZlTGlzdGVuZXJzKGRvbVRhcmdldCwgdGFrZUFsbChkb21MaXN0ZW5lcnMpLCBldmVudE9wdGlvbnMpO1xuXG4gIGZvciAodmFyIF9pMiA9IDAsIF9PYmplY3QkZW50cmllczIgPSBPYmplY3QuZW50cmllcyhiaW5kaW5ncyk7IF9pMiA8IF9PYmplY3QkZW50cmllczIubGVuZ3RoOyBfaTIrKykge1xuICAgIHZhciBfT2JqZWN0JGVudHJpZXMyJF9pID0gX09iamVjdCRlbnRyaWVzMltfaTJdLFxuICAgICAgICBrZXkgPSBfT2JqZWN0JGVudHJpZXMyJF9pWzBdLFxuICAgICAgICBmbnMgPSBfT2JqZWN0JGVudHJpZXMyJF9pWzFdO1xuICAgIHZhciBuYW1lID0ga2V5LnNsaWNlKDIpLnRvTG93ZXJDYXNlKCk7XG4gICAgZG9tTGlzdGVuZXJzLnB1c2goW25hbWUsIGNoYWluRm5zLmFwcGx5KHZvaWQgMCwgZm5zKV0pO1xuICB9XG5cbiAgYWRkTGlzdGVuZXJzKGRvbVRhcmdldCwgZG9tTGlzdGVuZXJzLCBldmVudE9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wc0xpc3RlbmVyKF9yZWY0LCBiaW5kaW5ncykge1xuICB2YXIgY29uZmlnID0gX3JlZjQuY29uZmlnO1xuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGNhcHR1cmVTdHJpbmcgPSBjb25maWcuZXZlbnRPcHRpb25zLmNhcHR1cmUgPyAnQ2FwdHVyZScgOiAnJztcblxuICBmb3IgKHZhciBfaTMgPSAwLCBfT2JqZWN0JGVudHJpZXMzID0gT2JqZWN0LmVudHJpZXMoYmluZGluZ3MpOyBfaTMgPCBfT2JqZWN0JGVudHJpZXMzLmxlbmd0aDsgX2kzKyspIHtcbiAgICB2YXIgX09iamVjdCRlbnRyaWVzMyRfaSA9IF9PYmplY3QkZW50cmllczNbX2kzXSxcbiAgICAgICAgZXZlbnQgPSBfT2JqZWN0JGVudHJpZXMzJF9pWzBdLFxuICAgICAgICBmbnMgPSBfT2JqZWN0JGVudHJpZXMzJF9pWzFdO1xuICAgIHZhciBmbnNBcnJheSA9IEFycmF5LmlzQXJyYXkoZm5zKSA/IGZucyA6IFtmbnNdO1xuICAgIHZhciBrZXkgPSBldmVudCArIGNhcHR1cmVTdHJpbmc7XG4gICAgcHJvcHNba2V5XSA9IGNoYWluRm5zLmFwcGx5KHZvaWQgMCwgZm5zQXJyYXkpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuXG5mdW5jdGlvbiB0YWtlQWxsKGFycmF5KSB7XG4gIGlmIChhcnJheSA9PT0gdm9pZCAwKSB7XG4gICAgYXJyYXkgPSBbXTtcbiAgfVxuXG4gIHJldHVybiBhcnJheS5zcGxpY2UoMCwgYXJyYXkubGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gZ2V0RG9tVGFyZ2V0RnJvbUNvbmZpZyhfcmVmNSkge1xuICB2YXIgZG9tVGFyZ2V0ID0gX3JlZjUuZG9tVGFyZ2V0O1xuICByZXR1cm4gZG9tVGFyZ2V0ICYmICdjdXJyZW50JyBpbiBkb21UYXJnZXQgPyBkb21UYXJnZXQuY3VycmVudCA6IGRvbVRhcmdldDtcbn1cbi8qKlxyXG4gKiBiaW5kaW5ncyBpcyBhbiBvYmplY3Qgd2hpY2gga2V5cyBtYXRjaCBSZWFjdEV2ZW50SGFuZGxlcktleXMuXHJcbiAqIFNpbmNlIGEgcmVjb2duaXplciBtaWdodCB3YW50IHRvIGJpbmQgYSBoYW5kbGVyIGZ1bmN0aW9uIHRvIGFuIGV2ZW50IGtleSBhbHJlYWR5IHVzZWQgYnkgYSBwcmV2aW91c2x5XHJcbiAqIGFkZGVkIHJlY29nbml6ZXIsIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgZWFjaCBldmVudCBrZXkgaXMgYW4gYXJyYXkgb2YgYWxsIHRoZSBmdW5jdGlvbnMgbWFwcGVkIGZvclxyXG4gKiB0aGF0IGtleS5cclxuICovXG5cblxuZnVuY3Rpb24gYWRkQmluZGluZ3MoYmluZGluZ3MsIG5hbWUsIGZuKSB7XG4gIGlmICghYmluZGluZ3NbbmFtZV0pIGJpbmRpbmdzW25hbWVdID0gW107XG4gIGJpbmRpbmdzW25hbWVdLnB1c2goZm4pO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcnMoZWwsIGxpc3RlbmVycywgb3B0aW9ucykge1xuICBpZiAobGlzdGVuZXJzID09PSB2b2lkIDApIHtcbiAgICBsaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShsaXN0ZW5lcnMpLCBfc3RlcDI7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMigpKS5kb25lOykge1xuICAgIHZhciBfc3RlcDIkdmFsdWUgPSBfc3RlcDIudmFsdWUsXG4gICAgICAgIGV2ZW50TmFtZSA9IF9zdGVwMiR2YWx1ZVswXSxcbiAgICAgICAgZXZlbnRIYW5kbGVyID0gX3N0ZXAyJHZhbHVlWzFdO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIsIG9wdGlvbnMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycyhlbCwgbGlzdGVuZXJzLCBvcHRpb25zKSB7XG4gIGlmIChsaXN0ZW5lcnMgPT09IHZvaWQgMCkge1xuICAgIGxpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGZvciAodmFyIF9pdGVyYXRvcjMgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGxpc3RlbmVycyksIF9zdGVwMzsgIShfc3RlcDMgPSBfaXRlcmF0b3IzKCkpLmRvbmU7KSB7XG4gICAgdmFyIF9zdGVwMyR2YWx1ZSA9IF9zdGVwMy52YWx1ZSxcbiAgICAgICAgZXZlbnROYW1lID0gX3N0ZXAzJHZhbHVlWzBdLFxuICAgICAgICBldmVudEhhbmRsZXIgPSBfc3RlcDMkdmFsdWVbMV07XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlciwgb3B0aW9ucyk7XG4gIH1cbn1cblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG4vKipcclxuICogVXRpbGl0eSBob29rIGNhbGxlZCBieSBhbGwgZ2VzdHVyZSBob29rcyBhbmQgdGhhdCB3aWxsIGJlIHJlc3BvbnNpYmxlIGZvciB0aGUgaW50ZXJuYWxzLlxyXG4gKlxyXG4gKiBAcGFyYW0gaGFuZGxlcnNcclxuICogQHBhcmFtIGNsYXNzZXNcclxuICogQHBhcmFtIGNvbmZpZ1xyXG4gKiBAcGFyYW0gbmF0aXZlSGFuZGxlcnMgLSBuYXRpdmUgaGFuZGxlcnMgc3VjaCBhcyBvbkNsaWNrLCBvbk1vdXNlRG93biwgZXRjLlxyXG4gKi9cblxuZnVuY3Rpb24gdXNlUmVjb2duaXplcnMoaGFuZGxlcnMsIGNvbmZpZywgbmF0aXZlSGFuZGxlcnMpIHtcbiAgaWYgKG5hdGl2ZUhhbmRsZXJzID09PSB2b2lkIDApIHtcbiAgICBuYXRpdmVIYW5kbGVycyA9IHt9O1xuICB9XG5cbiAgdmFyIGNsYXNzZXMgPSByZXNvbHZlQ2xhc3NlcyhoYW5kbGVycyk7XG4gIHZhciBjb250cm9sbGVyID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBDb250cm9sbGVyKGNsYXNzZXMpO1xuICB9LCBbXSk7XG4gIGNvbnRyb2xsZXIuY29uZmlnID0gY29uZmlnO1xuICBjb250cm9sbGVyLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gIGNvbnRyb2xsZXIubmF0aXZlUmVmcyA9IG5hdGl2ZUhhbmRsZXJzO1xuICBSZWFjdC51c2VFZmZlY3QoY29udHJvbGxlci5lZmZlY3QsIFtdKTsgLy8gQHRzLWlnbm9yZVxuXG4gIGlmIChjb250cm9sbGVyLmNvbmZpZy5kb21UYXJnZXQpIHJldHVybiBkZXByZWNhdGlvbk5vdGljZUZvckRvbVRhcmdldDsgLy8gQHRzLWlnbm9yZVxuXG4gIHJldHVybiBjb250cm9sbGVyLmJpbmQ7XG59XG5cbmZ1bmN0aW9uIGRlcHJlY2F0aW9uTm90aWNlRm9yRG9tVGFyZ2V0KCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBjb25zb2xlLndhcm4oXCJEZXByZWNhdGlvbiBub3RpY2U6IFdoZW4gdGhlIGBkb21UYXJnZXRgIG9wdGlvbiBpcyBzcGVjaWZpZWQsIHlvdSBkb24ndCBuZWVkIHRvIHdyaXRlIGB1c2VFZmZlY3QoYmluZCwgW2JpbmRdKWAgYW55bW9yZTogZXZlbnQgYmluZGluZyBpcyBub3cgbWFkZSBoYW5kbGVkIGludGVybmFsbHkgdG8gdGhpcyBsaWIuXFxuXFxuTmV4dCB2ZXJzaW9uIHdvbid0IHJldHVybiBhbnl0aGluZyB3aGVuIGBkb21UYXJnZXRgIGlzIHByb3ZpZGVkLCB0aGVyZWZvcmUgeW91ciBjb2RlIHdpbGwgYnJlYWsgaWYgeW91IHRyeSB0byBjYWxsIGB1c2VFZmZlY3RgLlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQ2xhc3NlcyhpbnRlcm5hbEhhbmRsZXJzKSB7XG4gIHZhciBjbGFzc2VzID0gbmV3IFNldCgpO1xuICBpZiAoaW50ZXJuYWxIYW5kbGVycy5kcmFnKSBjbGFzc2VzLmFkZChSZWNvZ25pemVyc01hcC5nZXQoJ2RyYWcnKSk7XG4gIGlmIChpbnRlcm5hbEhhbmRsZXJzLndoZWVsKSBjbGFzc2VzLmFkZChSZWNvZ25pemVyc01hcC5nZXQoJ3doZWVsJykpO1xuICBpZiAoaW50ZXJuYWxIYW5kbGVycy5zY3JvbGwpIGNsYXNzZXMuYWRkKFJlY29nbml6ZXJzTWFwLmdldCgnc2Nyb2xsJykpO1xuICBpZiAoaW50ZXJuYWxIYW5kbGVycy5tb3ZlKSBjbGFzc2VzLmFkZChSZWNvZ25pemVyc01hcC5nZXQoJ21vdmUnKSk7XG4gIGlmIChpbnRlcm5hbEhhbmRsZXJzLnBpbmNoKSBjbGFzc2VzLmFkZChSZWNvZ25pemVyc01hcC5nZXQoJ3BpbmNoJykpO1xuICBpZiAoaW50ZXJuYWxIYW5kbGVycy5ob3ZlcikgY2xhc3Nlcy5hZGQoUmVjb2duaXplcnNNYXAuZ2V0KCdob3ZlcicpKTtcbiAgcmV0dXJuIGNsYXNzZXM7XG59XG5cbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBBYnN0cmFjdCBjbGFzcyBmb3IgY29vcmRpbmF0ZXMtYmFzZWQgZ2VzdHVyZSByZWNvbmdpemVyc1xyXG4gKi9cblxudmFyIENvb3JkaW5hdGVzUmVjb2duaXplciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlY29nbml6ZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ29vcmRpbmF0ZXNSZWNvZ25pemVyLCBfUmVjb2duaXplcik7XG5cbiAgZnVuY3Rpb24gQ29vcmRpbmF0ZXNSZWNvZ25pemVyKCkge1xuICAgIHJldHVybiBfUmVjb2duaXplci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ29vcmRpbmF0ZXNSZWNvZ25pemVyLnByb3RvdHlwZTtcblxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSByZWFsIG1vdmVtZW50ICh3aXRob3V0IHRha2luZyBpbnRlbnRpb25hbGl0eSBpbnRvIGFjY291bnQpXHJcbiAgICovXG4gIF9wcm90by5nZXRJbnRlcm5hbE1vdmVtZW50ID0gZnVuY3Rpb24gZ2V0SW50ZXJuYWxNb3ZlbWVudCh2YWx1ZXMsIHN0YXRlKSB7XG4gICAgcmV0dXJuIHN1YlYodmFsdWVzLCBzdGF0ZS5pbml0aWFsKTtcbiAgfVxuICAvKipcclxuICAgKiBJbiBjb29yZGluYXRlcy1iYXNlZCBnZXN0dXJlLCB0aGlzIGZ1bmN0aW9uIHdpbGwgZGV0ZWN0IHRoZSBmaXJzdCBpbnRlbnRpb25hbCBheGlzLFxyXG4gICAqIGxvY2sgdGhlIGdlc3R1cmUgYXhpcyBpZiBsb2NrRGlyZWN0aW9uIGlzIHNwZWNpZmllZCBpbiB0aGUgY29uZmlnLCBibG9jayB0aGUgZ2VzdHVyZVxyXG4gICAqIGlmIHRoZSBmaXJzdCBpbnRlbnRpb25hbCBheGlzIGRvZXNuJ3QgbWF0Y2ggdGhlIHNwZWNpZmllZCBheGlzIGluIGNvbmZpZy5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5jaGVja0ludGVudGlvbmFsaXR5ID0gZnVuY3Rpb24gY2hlY2tJbnRlbnRpb25hbGl0eShfaW50ZW50aW9uYWwsIF9tb3ZlbWVudCkge1xuICAgIGlmIChfaW50ZW50aW9uYWxbMF0gPT09IGZhbHNlICYmIF9pbnRlbnRpb25hbFsxXSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIF9pbnRlbnRpb25hbDogX2ludGVudGlvbmFsLFxuICAgICAgICBheGlzOiB0aGlzLnN0YXRlLmF4aXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIF9tb3ZlbWVudCRtYXAgPSBfbW92ZW1lbnQubWFwKE1hdGguYWJzKSxcbiAgICAgICAgYWJzWCA9IF9tb3ZlbWVudCRtYXBbMF0sXG4gICAgICAgIGFic1kgPSBfbW92ZW1lbnQkbWFwWzFdO1xuXG4gICAgdmFyIGF4aXMgPSB0aGlzLnN0YXRlLmF4aXMgfHwgKGFic1ggPiBhYnNZID8gJ3gnIDogYWJzWCA8IGFic1kgPyAneScgOiB1bmRlZmluZWQpO1xuICAgIGlmICghdGhpcy5jb25maWcuYXhpcyAmJiAhdGhpcy5jb25maWcubG9ja0RpcmVjdGlvbikgcmV0dXJuIHtcbiAgICAgIF9pbnRlbnRpb25hbDogX2ludGVudGlvbmFsLFxuICAgICAgX2Jsb2NrZWQ6IGZhbHNlLFxuICAgICAgYXhpczogYXhpc1xuICAgIH07XG4gICAgaWYgKCFheGlzKSByZXR1cm4ge1xuICAgICAgX2ludGVudGlvbmFsOiBbZmFsc2UsIGZhbHNlXSxcbiAgICAgIF9ibG9ja2VkOiBmYWxzZSxcbiAgICAgIGF4aXM6IGF4aXNcbiAgICB9O1xuICAgIGlmICghIXRoaXMuY29uZmlnLmF4aXMgJiYgYXhpcyAhPT0gdGhpcy5jb25maWcuYXhpcykgcmV0dXJuIHtcbiAgICAgIF9pbnRlbnRpb25hbDogX2ludGVudGlvbmFsLFxuICAgICAgX2Jsb2NrZWQ6IHRydWUsXG4gICAgICBheGlzOiBheGlzXG4gICAgfTtcbiAgICBfaW50ZW50aW9uYWxbYXhpcyA9PT0gJ3gnID8gMSA6IDBdID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9pbnRlbnRpb25hbDogX2ludGVudGlvbmFsLFxuICAgICAgX2Jsb2NrZWQ6IGZhbHNlLFxuICAgICAgYXhpczogYXhpc1xuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmdldEtpbmVtYXRpY3MgPSBmdW5jdGlvbiBnZXRLaW5lbWF0aWNzKHZhbHVlcywgZXZlbnQpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLmdldE1vdmVtZW50KHZhbHVlcyk7XG5cbiAgICBpZiAoIXN0YXRlLl9ibG9ja2VkKSB7XG4gICAgICB2YXIgZHQgPSBldmVudC50aW1lU3RhbXAgLSB0aGlzLnN0YXRlLnRpbWVTdGFtcDtcbiAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIGNhbGN1bGF0ZUFsbEtpbmVtYXRpY3Moc3RhdGUubW92ZW1lbnQsIHN0YXRlLmRlbHRhLCBkdCkpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBfcHJvdG8ubWFwU3RhdGVWYWx1ZXMgPSBmdW5jdGlvbiBtYXBTdGF0ZVZhbHVlcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICB4eTogc3RhdGUudmFsdWVzLFxuICAgICAgdnh2eTogc3RhdGUudmVsb2NpdGllc1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIENvb3JkaW5hdGVzUmVjb2duaXplcjtcbn0oUmVjb2duaXplcik7XG5cbnZhciBUQVBfRElTVEFOQ0VfVEhSRVNIT0xEID0gMztcbnZhciBTV0lQRV9NQVhfRUxBUFNFRF9USU1FID0gMjIwO1xuXG5mdW5jdGlvbiBwZXJzaXN0RXZlbnQoZXZlbnQpIHtcbiAgJ3BlcnNpc3QnIGluIGV2ZW50ICYmIHR5cGVvZiBldmVudC5wZXJzaXN0ID09PSAnZnVuY3Rpb24nICYmIGV2ZW50LnBlcnNpc3QoKTtcbn1cblxudmFyIERyYWdSZWNvZ25pemVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29vcmRpbmF0ZXNSZWNvZ25pemUpIHtcbiAgX2luaGVyaXRzTG9vc2UoRHJhZ1JlY29nbml6ZXIsIF9Db29yZGluYXRlc1JlY29nbml6ZSk7XG5cbiAgZnVuY3Rpb24gRHJhZ1JlY29nbml6ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29vcmRpbmF0ZXNSZWNvZ25pemUuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIF90aGlzLmluZ0tleSA9ICdkcmFnZ2luZyc7XG4gICAgX3RoaXMuc3RhdGVLZXkgPSAnZHJhZyc7IC8vIFRPRE8gYWRkIGJhY2sgd2hlbiBzZXRQb2ludGVyQ2FwdHVyZSBpcyB3aWRlbHkgd3VwcG9ydGVkXG4gICAgLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXNldFBvaW50ZXJDYXB0dXJlXG5cbiAgICBfdGhpcy5zZXRQb2ludGVyQ2FwdHVyZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gZG9uJ3QgcGVyZm9ybSBwb2ludGVyZSBjYXB0dXJlIHdoZW4gdXNlciB3YW50cyB0byB1c2UgdG91Y2ggZXZlbnRzIG9yXG4gICAgICAvLyB3aGVuIGEgcG9pbnRlckxvY2tFbGVtZW50IGV4aXN0cyBhcyB0aGlzIHdvdWxkIHRocm93IGFuIGVycm9yXG4gICAgICBpZiAoX3RoaXMuY29uZmlnLnVzZVRvdWNoIHx8IGRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCkgcmV0dXJuO1xuICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICBwb2ludGVySWQgPSBldmVudC5wb2ludGVySWQ7XG5cbiAgICAgIGlmICh0YXJnZXQgJiYgJ3NldFBvaW50ZXJDYXB0dXJlJyBpbiB0YXJnZXQpIHtcbiAgICAgICAgLy8gdGhpcyB3b3VsZCB3b3JrIGluIHRoZSBET00gYnV0IGRvZXNuJ3Qgd2l0aCByZWFjdCB0aHJlZSBmaWJlclxuICAgICAgICAvLyB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLm9uRHJhZ0NoYW5nZSwgdGhpcy5jb250cm9sbGVyLmNvbmZpZy5ldmVudE9wdGlvbnMpXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgdGFyZ2V0LnNldFBvaW50ZXJDYXB0dXJlKHBvaW50ZXJJZCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnVwZGF0ZUdlc3R1cmVTdGF0ZSh7XG4gICAgICAgIF9kcmFnVGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIF9kcmFnUG9pbnRlcklkOiBwb2ludGVySWRcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZWxlYXNlUG9pbnRlckNhcHR1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuY29uZmlnLnVzZVRvdWNoIHx8IGRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCkgcmV0dXJuO1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgX2RyYWdUYXJnZXQgPSBfdGhpcyRzdGF0ZS5fZHJhZ1RhcmdldCxcbiAgICAgICAgICBfZHJhZ1BvaW50ZXJJZCA9IF90aGlzJHN0YXRlLl9kcmFnUG9pbnRlcklkO1xuXG4gICAgICBpZiAoX2RyYWdQb2ludGVySWQgJiYgX2RyYWdUYXJnZXQgJiYgJ3JlbGVhc2VQb2ludGVyQ2FwdHVyZScgaW4gX2RyYWdUYXJnZXQpIHtcbiAgICAgICAgLy8gdGhpcyB3b3VsZCB3b3JrIGluIHRoZSBET00gYnV0IGRvZXNuJ3Qgd2l0aCByZWFjdCB0aHJlZSBmaWJlclxuICAgICAgICAvLyB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLm9uRHJhZ0NoYW5nZSwgdGhpcy5jb250cm9sbGVyLmNvbmZpZy5ldmVudE9wdGlvbnMpXG4gICAgICAgIGlmICghKCdoYXNQb2ludGVyQ2FwdHVyZScgaW4gX2RyYWdUYXJnZXQpIHx8IF9kcmFnVGFyZ2V0Lmhhc1BvaW50ZXJDYXB0dXJlKF9kcmFnUG9pbnRlcklkKSkgdHJ5IHtcbiAgICAgICAgICBfZHJhZ1RhcmdldC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoX2RyYWdQb2ludGVySWQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5wcmV2ZW50U2Nyb2xsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuX2RyYWdQcmV2ZW50U2Nyb2xsICYmIGV2ZW50LmNhbmNlbGFibGUpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0RXZlbnRJZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLmNvbmZpZy51c2VUb3VjaCkgcmV0dXJuIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXI7XG4gICAgICByZXR1cm4gZXZlbnQucG9pbnRlcklkO1xuICAgIH07XG5cbiAgICBfdGhpcy5pc1ZhbGlkRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIGlmIHdlIHdlcmUgdXNpbmcgcG9pbnRlciBldmVudHMgb25seSBldmVudC5pc1ByaW1hcnkgPT09IDEgd291bGQgc3VmZmljZVxuICAgICAgcmV0dXJuIF90aGlzLnN0YXRlLl9wb2ludGVySWQgPT09IF90aGlzLmdldEV2ZW50SWQoZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zaG91bGRQcmV2ZW50V2luZG93U2Nyb2xsWSA9IF90aGlzLmNvbmZpZy5leHBlcmltZW50YWxfcHJldmVudFdpbmRvd1Njcm9sbFkgJiYgX3RoaXMuY29udHJvbGxlci5zdXBwb3J0c1RvdWNoRXZlbnRzO1xuXG4gICAgX3RoaXMuc2V0VXBXaW5kb3dTY3JvbGxEZXRlY3Rpb24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHBlcnNpc3RFdmVudChldmVudCk7IC8vIHdlIGFkZCB3aW5kb3cgbGlzdGVuZXJzIHRoYXQgd2lsbCBwcmV2ZW50IHRoZSBzY3JvbGwgd2hlbiB0aGUgdXNlciBoYXMgc3RhcnRlZCBkcmFnZ2luZ1xuXG4gICAgICB1cGRhdGVXaW5kb3dMaXN0ZW5lcnMoX3RoaXMuY29udHJvbGxlciwgX3RoaXMuc3RhdGVLZXksIFtbJ3RvdWNobW92ZScsIF90aGlzLnByZXZlbnRTY3JvbGxdLCBbJ3RvdWNoZW5kJywgX3RoaXMuY2xlYW4uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSldLCBbJ3RvdWNoY2FuY2VsJywgX3RoaXMuY2xlYW4uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSldXSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLnNldFRpbWVvdXQoX3RoaXMuc3RhcnREcmFnLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCAyNTAsIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0VXBEZWxheWVkRHJhZ1RyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnN0YXRlLl9kcmFnRGVsYXllZCA9IHRydWU7XG4gICAgICBwZXJzaXN0RXZlbnQoZXZlbnQpO1xuXG4gICAgICBfdGhpcy5zZXRUaW1lb3V0KF90aGlzLnN0YXJ0RHJhZy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgX3RoaXMuY29uZmlnLmRlbGF5LCBldmVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLnNldFN0YXJ0U3RhdGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBnZXRQb2ludGVyRXZlbnRWYWx1ZXMoZXZlbnQsIF90aGlzLnRyYW5zZm9ybSk7XG5cbiAgICAgIF90aGlzLnVwZGF0ZVNoYXJlZFN0YXRlKGdldEdlbmVyaWNFdmVudERhdGEoZXZlbnQpKTtcblxuICAgICAgX3RoaXMudXBkYXRlR2VzdHVyZVN0YXRlKF9leHRlbmRzKHt9LCBnZXRTdGFydEdlc3R1cmVTdGF0ZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgdmFsdWVzLCBldmVudCksIGdldEdlbmVyaWNQYXlsb2FkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBldmVudCwgdHJ1ZSksIHtcbiAgICAgICAgX3BvaW50ZXJJZDogX3RoaXMuZ2V0RXZlbnRJZChldmVudClcbiAgICAgIH0pKTtcblxuICAgICAgX3RoaXMudXBkYXRlR2VzdHVyZVN0YXRlKF90aGlzLmdldE1vdmVtZW50KHZhbHVlcykpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkRyYWdTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgYWRkRXZlbnRJZHMoX3RoaXMuY29udHJvbGxlciwgZXZlbnQpO1xuICAgICAgaWYgKCFfdGhpcy5lbmFibGVkIHx8IF90aGlzLnN0YXRlLl9hY3RpdmUpIHJldHVybjtcblxuICAgICAgX3RoaXMuc2V0U3RhcnRTdGF0ZShldmVudCk7XG5cbiAgICAgIF90aGlzLnNldFBvaW50ZXJDYXB0dXJlKGV2ZW50KTtcblxuICAgICAgaWYgKF90aGlzLnNob3VsZFByZXZlbnRXaW5kb3dTY3JvbGxZKSBfdGhpcy5zZXRVcFdpbmRvd1Njcm9sbERldGVjdGlvbihldmVudCk7ZWxzZSBpZiAoX3RoaXMuY29uZmlnLmRlbGF5ID4gMCkgX3RoaXMuc2V0VXBEZWxheWVkRHJhZ1RyaWdnZXIoZXZlbnQpO2Vsc2UgX3RoaXMuc3RhcnREcmFnKGV2ZW50LCB0cnVlKTsgLy8gd2UgcGFzcyB0aGUgdmFsdWVzIHRvIHRoZSBzdGFydERyYWcgZXZlbnRcbiAgICB9O1xuXG4gICAgX3RoaXMub25EcmFnQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIC8vIGlmIHRoZSBnZXN0dXJlIHdhcyBjYW5jZWxlZCBvclxuICAgICAgX3RoaXMuc3RhdGUuY2FuY2VsZWQgfHwgLy8gaWYgb25EcmFnU3RhcnQgd2Fzbid0IGZpcmVkIG9yXG4gICAgICAhX3RoaXMuc3RhdGUuX2FjdGl2ZSB8fCAvLyBpZiB0aGUgZXZlbnQgcG9pbnRlcklkIGRvZXNuJ3QgbWF0Y2ggdGhlIG9uZSB0aGF0IGluaXRpYXRlZCB0aGUgZHJhZ1xuICAgICAgIV90aGlzLmlzVmFsaWRFdmVudChldmVudCkpIHJldHVybjtcbiAgICAgIHZhciB2YWx1ZXM7XG5cbiAgICAgIGlmIChkb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQpIHtcbiAgICAgICAgdmFyIG1vdmVtZW50WCA9IGV2ZW50Lm1vdmVtZW50WCxcbiAgICAgICAgICAgIG1vdmVtZW50WSA9IGV2ZW50Lm1vdmVtZW50WTtcbiAgICAgICAgdmFsdWVzID0gYWRkVihfdGhpcy50cmFuc2Zvcm0oW21vdmVtZW50WCwgbW92ZW1lbnRZXSksIF90aGlzLnN0YXRlLnZhbHVlcyk7XG4gICAgICB9IGVsc2UgdmFsdWVzID0gZ2V0UG9pbnRlckV2ZW50VmFsdWVzKGV2ZW50LCBfdGhpcy50cmFuc2Zvcm0pO1xuXG4gICAgICB2YXIga2luZW1hdGljcyA9IF90aGlzLmdldEtpbmVtYXRpY3ModmFsdWVzLCBldmVudCk7IC8vIGlmIHN0YXJ0RHJhZyBoYXNuJ3QgZmlyZWRcblxuXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLl9kcmFnU3RhcnRlZCkge1xuICAgICAgICAvLyBJZiB0aGUgZ2VzdHVyZSBpc24ndCBhY3RpdmUgdGhlbiByZXNwb25kIHRvIHRoZSBldmVudCBvbmx5IGlmXG4gICAgICAgIC8vIGl0J3MgYmVlbiBkZWxheWVkIHZpYSB0aGUgYGRlbGF5YCBvcHRpb24sIGluIHdoaWNoIGNhc2Ugc3RhcnRcbiAgICAgICAgLy8gdGhlIGdlc3R1cmUgaW1tZWRpYXRlbHkuXG4gICAgICAgIGlmIChfdGhpcy5zdGF0ZS5fZHJhZ0RlbGF5ZWQpIHtcbiAgICAgICAgICBfdGhpcy5zdGFydERyYWcoZXZlbnQpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIGlmIHRoZSB1c2VyIHdhbnRzIHRvIHByZXZlbnQgdmVydGljYWwgd2luZG93IHNjcm9sbCB3aGVuIHVzZXIgc3RhcnRzIGRyYWdnaW5nXG5cblxuICAgICAgICBpZiAoX3RoaXMuc2hvdWxkUHJldmVudFdpbmRvd1Njcm9sbFkpIHtcbiAgICAgICAgICBpZiAoIV90aGlzLnN0YXRlLl9kcmFnUHJldmVudFNjcm9sbCAmJiBraW5lbWF0aWNzLmF4aXMpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSB1c2VyIGlzIGRyYWdnaW5nIGhvcml6b250YWxseSB0aGVuIHdlIHNob3VsZCBhbGxvdyB0aGUgZHJhZ1xuICAgICAgICAgICAgaWYgKGtpbmVtYXRpY3MuYXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgIF90aGlzLnN0YXJ0RHJhZyhldmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfdGhpcy5zdGF0ZS5fYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZ2VuZXJpY0V2ZW50RGF0YSA9IGdldEdlbmVyaWNFdmVudERhdGEoZXZlbnQpO1xuXG4gICAgICBfdGhpcy51cGRhdGVTaGFyZWRTdGF0ZShnZW5lcmljRXZlbnREYXRhKTtcblxuICAgICAgdmFyIGdlbmVyaWNQYXlsb2FkID0gZ2V0R2VuZXJpY1BheWxvYWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIGV2ZW50KTsgLy8gVGhpcyB2ZXJpZmllcyBpZiB0aGUgZHJhZyBjYW4gYmUgYXNzaW1pbGF0ZWQgdG8gYSB0YXAgYnkgY2hlY2tpbmdcbiAgICAgIC8vIGlmIHRoZSByZWFsIGRpc3RhbmNlIG9mIHRoZSBkcmFnIChpZSBub3QgYWNjb3VudGluZyBmb3IgdGhlIHRocmVzaG9sZCkgaXNcbiAgICAgIC8vIGdyZWF0ZXIgdGhhbiB0aGUgVEFQX0RJU1RBTkNFX1RIUkVTSE9MRC5cblxuICAgICAgdmFyIHJlYWxEaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKGtpbmVtYXRpY3MuX21vdmVtZW50KTtcbiAgICAgIHZhciBfZHJhZ0lzVGFwID0gX3RoaXMuc3RhdGUuX2RyYWdJc1RhcDtcbiAgICAgIGlmIChfZHJhZ0lzVGFwICYmIHJlYWxEaXN0YW5jZSA+PSBUQVBfRElTVEFOQ0VfVEhSRVNIT0xEKSBfZHJhZ0lzVGFwID0gZmFsc2U7XG5cbiAgICAgIF90aGlzLnVwZGF0ZUdlc3R1cmVTdGF0ZShfZXh0ZW5kcyh7fSwgZ2VuZXJpY1BheWxvYWQsIGtpbmVtYXRpY3MsIHtcbiAgICAgICAgX2RyYWdJc1RhcDogX2RyYWdJc1RhcFxuICAgICAgfSkpO1xuXG4gICAgICBfdGhpcy5maXJlR2VzdHVyZUhhbmRsZXIoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25EcmFnRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZW1vdmVFdmVudElkcyhfdGhpcy5jb250cm9sbGVyLCBldmVudCk7IC8vIGlmIHRoZSBldmVudCBwb2ludGVySWQgZG9lc24ndCBtYXRjaCB0aGUgb25lIHRoYXQgaW5pdGlhdGVkIHRoZSBkcmFnXG4gICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGVuZCB0aGUgZHJhZ1xuXG4gICAgICBpZiAoIV90aGlzLmlzVmFsaWRFdmVudChldmVudCkpIHJldHVybjtcblxuICAgICAgX3RoaXMuY2xlYW4oKTsgLy8gaWYgdGhlIGdlc3R1cmUgaXMgbm8gbG9uZ2VyIGFjdGl2ZSAoaWUgY2FuY2VsZWQpXG4gICAgICAvLyBkb24ndCBkbyBhbnl0aGluZ1xuXG5cbiAgICAgIGlmICghX3RoaXMuc3RhdGUuX2FjdGl2ZSkgcmV0dXJuO1xuICAgICAgX3RoaXMuc3RhdGUuX2FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdmFyIHRhcCA9IF90aGlzLnN0YXRlLl9kcmFnSXNUYXA7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUkdmVsb2NpdGllID0gX3RoaXMuc3RhdGUudmVsb2NpdGllcyxcbiAgICAgICAgICB2eCA9IF90aGlzJHN0YXRlJHZlbG9jaXRpZVswXSxcbiAgICAgICAgICB2eSA9IF90aGlzJHN0YXRlJHZlbG9jaXRpZVsxXTtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSRtb3ZlbWVudCA9IF90aGlzLnN0YXRlLm1vdmVtZW50LFxuICAgICAgICAgIG14ID0gX3RoaXMkc3RhdGUkbW92ZW1lbnRbMF0sXG4gICAgICAgICAgbXkgPSBfdGhpcyRzdGF0ZSRtb3ZlbWVudFsxXTtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSRfaW50ZW50aW8gPSBfdGhpcy5zdGF0ZS5faW50ZW50aW9uYWwsXG4gICAgICAgICAgaXggPSBfdGhpcyRzdGF0ZSRfaW50ZW50aW9bMF0sXG4gICAgICAgICAgaXkgPSBfdGhpcyRzdGF0ZSRfaW50ZW50aW9bMV07XG4gICAgICB2YXIgX3RoaXMkY29uZmlnJHN3aXBlVmVsID0gX3RoaXMuY29uZmlnLnN3aXBlVmVsb2NpdHksXG4gICAgICAgICAgc3Z4ID0gX3RoaXMkY29uZmlnJHN3aXBlVmVsWzBdLFxuICAgICAgICAgIHN2eSA9IF90aGlzJGNvbmZpZyRzd2lwZVZlbFsxXTtcbiAgICAgIHZhciBfdGhpcyRjb25maWckc3dpcGVEaXMgPSBfdGhpcy5jb25maWcuc3dpcGVEaXN0YW5jZSxcbiAgICAgICAgICBzeCA9IF90aGlzJGNvbmZpZyRzd2lwZURpc1swXSxcbiAgICAgICAgICBzeSA9IF90aGlzJGNvbmZpZyRzd2lwZURpc1sxXTtcblxuICAgICAgdmFyIGVuZFN0YXRlID0gX2V4dGVuZHMoe30sIGdldEdlbmVyaWNQYXlsb2FkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBldmVudCksIF90aGlzLmdldE1vdmVtZW50KF90aGlzLnN0YXRlLnZhbHVlcykpO1xuXG4gICAgICB2YXIgc3dpcGUgPSBbMCwgMF07XG5cbiAgICAgIGlmIChlbmRTdGF0ZS5lbGFwc2VkVGltZSA8IFNXSVBFX01BWF9FTEFQU0VEX1RJTUUpIHtcbiAgICAgICAgaWYgKGl4ICE9PSBmYWxzZSAmJiBNYXRoLmFicyh2eCkgPiBzdnggJiYgTWF0aC5hYnMobXgpID4gc3gpIHN3aXBlWzBdID0gc2lnbih2eCk7XG4gICAgICAgIGlmIChpeSAhPT0gZmFsc2UgJiYgTWF0aC5hYnModnkpID4gc3Z5ICYmIE1hdGguYWJzKG15KSA+IHN5KSBzd2lwZVsxXSA9IHNpZ24odnkpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy51cGRhdGVTaGFyZWRTdGF0ZSh7XG4gICAgICAgIGJ1dHRvbnM6IDBcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy51cGRhdGVHZXN0dXJlU3RhdGUoX2V4dGVuZHMoe30sIGVuZFN0YXRlLCB7XG4gICAgICAgIHRhcDogdGFwLFxuICAgICAgICBzd2lwZTogc3dpcGVcbiAgICAgIH0pKTtcblxuICAgICAgX3RoaXMuZmlyZUdlc3R1cmVIYW5kbGVyKF90aGlzLmNvbmZpZy5maWx0ZXJUYXBzICYmIHRhcCA9PT0gdHJ1ZSk7XG4gICAgfTtcblxuICAgIF90aGlzLmNsZWFuID0gZnVuY3Rpb24gKCkge1xuICAgICAgX0Nvb3JkaW5hdGVzUmVjb2duaXplLnByb3RvdHlwZS5jbGVhbi5jYWxsKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcblxuICAgICAgX3RoaXMuc3RhdGUuX2RyYWdTdGFydGVkID0gZmFsc2U7XG5cbiAgICAgIF90aGlzLnJlbGVhc2VQb2ludGVyQ2FwdHVyZSgpO1xuXG4gICAgICBjbGVhcldpbmRvd0xpc3RlbmVycyhfdGhpcy5jb250cm9sbGVyLCBfdGhpcy5zdGF0ZUtleSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uQ2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnN0YXRlLmNhbmNlbGVkKSByZXR1cm47XG5cbiAgICAgIF90aGlzLnVwZGF0ZUdlc3R1cmVTdGF0ZSh7XG4gICAgICAgIGNhbmNlbGVkOiB0cnVlLFxuICAgICAgICBfYWN0aXZlOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLnVwZGF0ZVNoYXJlZFN0YXRlKHtcbiAgICAgICAgYnV0dG9uczogMFxuICAgICAgfSk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZmlyZUdlc3R1cmVIYW5kbGVyKCk7XG4gICAgICB9LCAwKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5fZHJhZ0lzVGFwKSBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERyYWdSZWNvZ25pemVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc3RhcnREcmFnID0gZnVuY3Rpb24gc3RhcnREcmFnKGV2ZW50LCBvbkRyYWdJc1N0YXJ0KSB7XG4gICAgaWYgKG9uRHJhZ0lzU3RhcnQgPT09IHZvaWQgMCkge1xuICAgICAgb25EcmFnSXNTdGFydCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHN0YXJ0RHJhZyBjYW4gaGFwcGVuIGFmdGVyIGEgdGltZW91dCwgc28gd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgZ2VzdHVyZSBpcyBzdGlsbCBhY3RpdmVcbiAgICAvLyBhcyB0aGUgdXNlciBtaWdodCBoYXZlIGxpZnQgdXAgdGhlIHBvaW50ZXIgaW4gYmV0d2Vlbi5cbiAgICBpZiAoIC8vIGlmIHRoZSBnZXN0dXJlIGlzbid0IGFjdGl2ZSAocHJvYmFibHkgbWVhbnMpXG4gICAgIXRoaXMuc3RhdGUuX2FjdGl2ZSB8fCAvLyBpZiB0aGUgZHJhZyBoYXMgYWxyZWFkeSBzdGFydGVkIHdlIHNob3VsZCBpZ25vcmUgc3Vic2VxdWVudCBhdHRlbXB0c1xuICAgIHRoaXMuc3RhdGUuX2RyYWdTdGFydGVkKSByZXR1cm47XG4gICAgaWYgKCFvbkRyYWdJc1N0YXJ0KSB0aGlzLnNldFN0YXJ0U3RhdGUoZXZlbnQpO1xuICAgIHRoaXMudXBkYXRlR2VzdHVyZVN0YXRlKHtcbiAgICAgIF9kcmFnU3RhcnRlZDogdHJ1ZSxcbiAgICAgIF9kcmFnUHJldmVudFNjcm9sbDogdHJ1ZSxcbiAgICAgIGNhbmNlbDogdGhpcy5vbkNhbmNlbFxuICAgIH0pO1xuICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gICAgdGhpcy5maXJlR2VzdHVyZUhhbmRsZXIoKTtcbiAgfTtcblxuICBfcHJvdG8uYWRkQmluZGluZ3MgPSBmdW5jdGlvbiBhZGRCaW5kaW5ncyQxKGJpbmRpbmdzKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnVzZVRvdWNoKSB7XG4gICAgICBhZGRCaW5kaW5ncyhiaW5kaW5ncywgJ29uVG91Y2hTdGFydCcsIHRoaXMub25EcmFnU3RhcnQpO1xuXG4gICAgICBhZGRCaW5kaW5ncyhiaW5kaW5ncywgJ29uVG91Y2hNb3ZlJywgdGhpcy5vbkRyYWdDaGFuZ2UpOyAvLyB0aGlzIGlzIG5lZWRlZCBmb3IgcmVhY3QtdGhyZWUtZmliZXJcblxuXG4gICAgICBhZGRCaW5kaW5ncyhiaW5kaW5ncywgJ29uVG91Y2hFbmQnLCB0aGlzLm9uRHJhZ0VuZCk7XG5cbiAgICAgIGFkZEJpbmRpbmdzKGJpbmRpbmdzLCAnb25Ub3VjaENhbmNlbCcsIHRoaXMub25EcmFnRW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQmluZGluZ3MoYmluZGluZ3MsICdvblBvaW50ZXJEb3duJywgdGhpcy5vbkRyYWdTdGFydCk7XG5cbiAgICAgIGFkZEJpbmRpbmdzKGJpbmRpbmdzLCAnb25Qb2ludGVyTW92ZScsIHRoaXMub25EcmFnQ2hhbmdlKTsgLy8gdGhpcyBpcyBuZWVkZWQgZm9yIHJlYWN0LXRocmVlLWZpYmVyXG5cblxuICAgICAgYWRkQmluZGluZ3MoYmluZGluZ3MsICdvblBvaW50ZXJVcCcsIHRoaXMub25EcmFnRW5kKTtcblxuICAgICAgYWRkQmluZGluZ3MoYmluZGluZ3MsICdvblBvaW50ZXJDYW5jZWwnLCB0aGlzLm9uRHJhZ0VuZCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlclRhcHMpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gdGhpcy5jb250cm9sbGVyLmNvbmZpZy5ldmVudE9wdGlvbnMuY2FwdHVyZSA/ICdvbkNsaWNrJyA6ICdvbkNsaWNrQ2FwdHVyZSc7XG5cbiAgICAgIGFkZEJpbmRpbmdzKGJpbmRpbmdzLCBoYW5kbGVyLCB0aGlzLm9uQ2xpY2spO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gRHJhZ1JlY29nbml6ZXI7XG59KENvb3JkaW5hdGVzUmVjb2duaXplcik7XG5cbi8qKlxyXG4gKiBJbmxpbmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FsZXhyZWFyZG9uL21lbW9pemUtb25lXHJcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZU9uZShyZXN1bHRGbiwgaXNFcXVhbCkge1xuICB2YXIgbGFzdFRoaXM7XG4gIHZhciBsYXN0QXJncyA9IFtdO1xuICB2YXIgbGFzdFJlc3VsdDtcbiAgdmFyIGNhbGxlZE9uY2UgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBtZW1vaXplZCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbmV3QXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIG5ld0FyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGNhbGxlZE9uY2UgJiYgbGFzdFRoaXMgPT09IHRoaXMgJiYgaXNFcXVhbChuZXdBcmdzLCBsYXN0QXJncykpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgIH1cblxuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRGbi5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICBjYWxsZWRPbmNlID0gdHJ1ZTtcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdEFyZ3MgPSBuZXdBcmdzO1xuICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vKipcclxuICogVGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vRm9ybWlkYWJsZUxhYnMvcmVhY3QtZmFzdC1jb21wYXJlXHJcbiAqXHJcbiAqIERyb3BwZWQgY29tbWVudHMgYW5kIEFycmF5QnVmZmVyIGhhbmRsaW5nXHJcbiAqL1xuZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBiLmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGxlbmd0aCwgaSwga2V5cztcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgICBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBpdDtcblxuICAgIGlmICh0eXBlb2YgTWFwID09PSAnZnVuY3Rpb24nICYmIGEgaW5zdGFuY2VvZiBNYXAgJiYgYiBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgaWYgKGEuc2l6ZSAhPT0gYi5zaXplKSByZXR1cm4gZmFsc2U7XG4gICAgICBpdCA9IGEuZW50cmllcygpO1xuXG4gICAgICB3aGlsZSAoIShpID0gaXQubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGlmICghYi5oYXMoaS52YWx1ZVswXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaXQgPSBhLmVudHJpZXMoKTtcblxuICAgICAgd2hpbGUgKCEoaSA9IGl0Lm5leHQoKSkuZG9uZSkge1xuICAgICAgICBpZiAoIWVxdWFsKGkudmFsdWVbMV0sIGIuZ2V0KGkudmFsdWVbMF0pKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIFNldCA9PT0gJ2Z1bmN0aW9uJyAmJiBhIGluc3RhbmNlb2YgU2V0ICYmIGIgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICAgIGlmIChhLnNpemUgIT09IGIuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaXQgPSBhLmVudHJpZXMoKTtcblxuICAgICAgd2hpbGUgKCEoaSA9IGl0Lm5leHQoKSkuZG9uZSkge1xuICAgICAgICBpZiAoIWIuaGFzKGkudmFsdWVbMF0pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhLmNvbnN0cnVjdG9yID09PSBSZWdFeHApIHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgYS5mbGFncyA9PT0gYi5mbGFncztcbiAgICBpZiAoYS52YWx1ZU9mICE9PSBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YpIHJldHVybiBhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCk7XG4gICAgaWYgKGEudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgICBrZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBhIGluc3RhbmNlb2YgRWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICBpZiAoa2V5c1tpXSA9PT0gJ19vd25lcicgJiYgYS4kJHR5cGVvZikgY29udGludWU7XG4gICAgICBpZiAoIWVxdWFsKGFba2V5c1tpXV0sIGJba2V5c1tpXV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gdHJ1ZSBpZiBib3RoIE5hTiwgZmFsc2Ugb3RoZXJ3aXNlIOKAlCBOYU4gIT09IE5hTiDihpIgdHJ1ZVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG5cblxuICByZXR1cm4gYSAhPT0gYSAmJiBiICE9PSBiO1xufVxuXG5mdW5jdGlvbiBpc0VxdWFsKGEsIGIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZXF1YWwoYSwgYik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKChlcnJvci5tZXNzYWdlIHx8ICcnKS5tYXRjaCgvc3RhY2t8cmVjdXJzaW9uL2kpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3JlYWN0LWZhc3QtY29tcGFyZSBjYW5ub3QgaGFuZGxlIGNpcmN1bGFyIHJlZnMnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vKipcclxuICogRHJhZyBob29rLlxyXG4gKlxyXG4gKiBAcGFyYW0gaGFuZGxlciAtIHRoZSBmdW5jdGlvbiBmaXJlZCBldmVyeSB0aW1lIHRoZSBkcmFnIGdlc3R1cmUgdXBkYXRlc1xyXG4gKiBAcGFyYW0gW2NvbmZpZz17fV0gLSB0aGUgY29uZmlnIG9iamVjdCBpbmNsdWRpbmcgZ2VuZXJpYyBvcHRpb25zIGFuZCBkcmFnIG9wdGlvbnNcclxuICovXG5cbmZ1bmN0aW9uIHVzZURyYWcoaGFuZGxlciwgY29uZmlnKSB7XG4gIGlmIChjb25maWcgPT09IHZvaWQgMCkge1xuICAgIGNvbmZpZyA9IHt9O1xuICB9XG5cbiAgUmVjb2duaXplcnNNYXAuc2V0KCdkcmFnJywgRHJhZ1JlY29nbml6ZXIpO1xuICB2YXIgYnVpbGREcmFnQ29uZmlnID0gdXNlUmVmKCk7XG5cbiAgaWYgKCFidWlsZERyYWdDb25maWcuY3VycmVudCkge1xuICAgIGJ1aWxkRHJhZ0NvbmZpZy5jdXJyZW50ID0gbWVtb2l6ZU9uZShfYnVpbGREcmFnQ29uZmlnLCBpc0VxdWFsKTtcbiAgfVxuXG4gIHJldHVybiB1c2VSZWNvZ25pemVycyh7XG4gICAgZHJhZzogaGFuZGxlclxuICB9LCBidWlsZERyYWdDb25maWcuY3VycmVudChjb25maWcpKTtcbn1cblxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEFic3RyYWN0IGNsYXNzIGZvciBkaXN0YW5jZS9hbmdsZS1iYXNlZCBnZXN0dXJlIHJlY29uZ2l6ZXJzXHJcbiAqL1xuXG52YXIgRGlzdGFuY2VBbmdsZVJlY29nbml6ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWNvZ25pemVyKSB7XG4gIF9pbmhlcml0c0xvb3NlKERpc3RhbmNlQW5nbGVSZWNvZ25pemVyLCBfUmVjb2duaXplcik7XG5cbiAgZnVuY3Rpb24gRGlzdGFuY2VBbmdsZVJlY29nbml6ZXIoKSB7XG4gICAgcmV0dXJuIF9SZWNvZ25pemVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBEaXN0YW5jZUFuZ2xlUmVjb2duaXplci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldEludGVybmFsTW92ZW1lbnQgPSBmdW5jdGlvbiBnZXRJbnRlcm5hbE1vdmVtZW50KHZhbHVlcywgc3RhdGUpIHtcbiAgICB2YXIgcHJldl9hID0gc3RhdGUudmFsdWVzWzFdOyAvLyBub3QgYmUgZGVmaW5lZCBpZiBjdHJsK3doZWVsIGlzIHVzZWQgZm9yIHpvb20gb25seVxuXG4gICAgdmFyIGQgPSB2YWx1ZXNbMF0sXG4gICAgICAgIF92YWx1ZXMkID0gdmFsdWVzWzFdLFxuICAgICAgICBhID0gX3ZhbHVlcyQgPT09IHZvaWQgMCA/IHByZXZfYSA6IF92YWx1ZXMkO1xuICAgIHZhciBkZWx0YV9hID0gYSAtIHByZXZfYTtcbiAgICB2YXIgbmV4dF90dXJucyA9IHN0YXRlLnR1cm5zO1xuICAgIGlmIChNYXRoLmFicyhkZWx0YV9hKSA+IDI3MCkgbmV4dF90dXJucyArPSBzaWduKGRlbHRhX2EpO1xuICAgIHJldHVybiBzdWJWKFtkLCBhIC0gMzYwICogbmV4dF90dXJuc10sIHN0YXRlLmluaXRpYWwpO1xuICB9O1xuXG4gIF9wcm90by5nZXRLaW5lbWF0aWNzID0gZnVuY3Rpb24gZ2V0S2luZW1hdGljcyh2YWx1ZXMsIGV2ZW50KSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5nZXRNb3ZlbWVudCh2YWx1ZXMpO1xuICAgIHZhciB0dXJucyA9ICh2YWx1ZXNbMV0gLSBzdGF0ZS5fbW92ZW1lbnRbMV0gLSB0aGlzLnN0YXRlLmluaXRpYWxbMV0pIC8gMzYwO1xuICAgIHZhciBkdCA9IGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMuc3RhdGUudGltZVN0YW1wO1xuXG4gICAgdmFyIF9jYWxjdWxhdGVBbGxLaW5lbWF0aSA9IGNhbGN1bGF0ZUFsbEtpbmVtYXRpY3Moc3RhdGUubW92ZW1lbnQsIHN0YXRlLmRlbHRhLCBkdCksXG4gICAgICAgIGtpbmVtYXRpY3MgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfY2FsY3VsYXRlQWxsS2luZW1hdGksIFtcImRpc3RhbmNlXCIsIFwidmVsb2NpdHlcIl0pO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIHR1cm5zOiB0dXJuc1xuICAgIH0sIHN0YXRlLCBraW5lbWF0aWNzKTtcbiAgfTtcblxuICBfcHJvdG8ubWFwU3RhdGVWYWx1ZXMgPSBmdW5jdGlvbiBtYXBTdGF0ZVZhbHVlcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBkYTogc3RhdGUudmFsdWVzLFxuICAgICAgdmR2YTogc3RhdGUudmVsb2NpdGllc1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIERpc3RhbmNlQW5nbGVSZWNvZ25pemVyO1xufShSZWNvZ25pemVyKTtcblxudmFyIFBpbmNoUmVjb2duaXplciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Rpc3RhbmNlQW5nbGVSZWNvZ25pKSB7XG4gIF9pbmhlcml0c0xvb3NlKFBpbmNoUmVjb2duaXplciwgX0Rpc3RhbmNlQW5nbGVSZWNvZ25pKTtcblxuICBmdW5jdGlvbiBQaW5jaFJlY29nbml6ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfRGlzdGFuY2VBbmdsZVJlY29nbmkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIF90aGlzLmluZ0tleSA9ICdwaW5jaGluZyc7XG4gICAgX3RoaXMuc3RhdGVLZXkgPSAncGluY2gnO1xuXG4gICAgX3RoaXMub25QaW5jaFN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBhZGRFdmVudElkcyhfdGhpcy5jb250cm9sbGVyLCBldmVudCk7XG4gICAgICBpZiAoIV90aGlzLmVuYWJsZWQgfHwgX3RoaXMuc3RhdGUuX2FjdGl2ZSkgcmV0dXJuOyAvLyB1bnRpbCB3ZSByZWFjaCB0d28gZmluZ2VycyBvbiB0aGUgdGFyZ2V0IGRvbid0IHJlYWN0XG5cbiAgICAgIGlmIChfdGhpcy5jb250cm9sbGVyLnRvdWNoSWRzLnNpemUgPCAyKSByZXR1cm47XG5cbiAgICAgIHZhciBfcG9pbnRlcklkcyA9IEFycmF5LmZyb20oX3RoaXMuY29udHJvbGxlci50b3VjaElkcykuc2xpY2UoMCwgMik7XG5cbiAgICAgIHZhciBfZ2V0VHdvVG91Y2hlc0V2ZW50VmEgPSBnZXRUd29Ub3VjaGVzRXZlbnRWYWx1ZXMoZXZlbnQsIF9wb2ludGVySWRzLCBfdGhpcy50cmFuc2Zvcm0pLFxuICAgICAgICAgIHZhbHVlcyA9IF9nZXRUd29Ub3VjaGVzRXZlbnRWYS52YWx1ZXMsXG4gICAgICAgICAgb3JpZ2luID0gX2dldFR3b1RvdWNoZXNFdmVudFZhLm9yaWdpbjtcblxuICAgICAgX3RoaXMudXBkYXRlU2hhcmVkU3RhdGUoZ2V0R2VuZXJpY0V2ZW50RGF0YShldmVudCkpO1xuXG4gICAgICBfdGhpcy51cGRhdGVHZXN0dXJlU3RhdGUoX2V4dGVuZHMoe30sIGdldFN0YXJ0R2VzdHVyZVN0YXRlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCB2YWx1ZXMsIGV2ZW50KSwgZ2V0R2VuZXJpY1BheWxvYWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIGV2ZW50LCB0cnVlKSwge1xuICAgICAgICBfcG9pbnRlcklkczogX3BvaW50ZXJJZHMsXG4gICAgICAgIGNhbmNlbDogX3RoaXMub25DYW5jZWwsXG4gICAgICAgIG9yaWdpbjogb3JpZ2luXG4gICAgICB9KSk7XG5cbiAgICAgIF90aGlzLnVwZGF0ZUdlc3R1cmVTdGF0ZShfdGhpcy5nZXRNb3ZlbWVudCh2YWx1ZXMpKTtcblxuICAgICAgX3RoaXMuZmlyZUdlc3R1cmVIYW5kbGVyKCk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uUGluY2hDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIGNhbmNlbGVkID0gX3RoaXMkc3RhdGUuY2FuY2VsZWQsXG4gICAgICAgICAgX2FjdGl2ZSA9IF90aGlzJHN0YXRlLl9hY3RpdmU7XG4gICAgICBpZiAoY2FuY2VsZWQgfHwgIV9hY3RpdmUpIHJldHVybjtcbiAgICAgIHZhciBnZW5lcmljRXZlbnREYXRhID0gZ2V0R2VuZXJpY0V2ZW50RGF0YShldmVudCk7XG5cbiAgICAgIF90aGlzLnVwZGF0ZVNoYXJlZFN0YXRlKGdlbmVyaWNFdmVudERhdGEpO1xuXG4gICAgICB2YXIgX2dldFR3b1RvdWNoZXNFdmVudFZhMiA9IGdldFR3b1RvdWNoZXNFdmVudFZhbHVlcyhldmVudCwgX3RoaXMuc3RhdGUuX3BvaW50ZXJJZHMsIF90aGlzLnRyYW5zZm9ybSksXG4gICAgICAgICAgdmFsdWVzID0gX2dldFR3b1RvdWNoZXNFdmVudFZhMi52YWx1ZXMsXG4gICAgICAgICAgb3JpZ2luID0gX2dldFR3b1RvdWNoZXNFdmVudFZhMi5vcmlnaW47XG5cbiAgICAgIHZhciBraW5lbWF0aWNzID0gX3RoaXMuZ2V0S2luZW1hdGljcyh2YWx1ZXMsIGV2ZW50KTtcblxuICAgICAgX3RoaXMudXBkYXRlR2VzdHVyZVN0YXRlKF9leHRlbmRzKHt9LCBnZXRHZW5lcmljUGF5bG9hZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgZXZlbnQpLCBraW5lbWF0aWNzLCB7XG4gICAgICAgIG9yaWdpbjogb3JpZ2luXG4gICAgICB9KSk7XG5cbiAgICAgIF90aGlzLmZpcmVHZXN0dXJlSGFuZGxlcigpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblBpbmNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZW1vdmVFdmVudElkcyhfdGhpcy5jb250cm9sbGVyLCBldmVudCk7XG4gICAgICB2YXIgcG9pbnRlcklkcyA9IGdldFBvaW50ZXJJZHMoZXZlbnQpOyAvLyBpZiBub25lIG9mIHRoZSBsaWZ0ZWQgcG9pbnRlcklkcyBpcyBpbiB0aGUgc3RhdGUgcG9pbnRlcklkcyBkb24ndCBkbyBhbnl0aGluZ1xuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUuX3BvaW50ZXJJZHMuZXZlcnkoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiAhcG9pbnRlcklkcy5pbmNsdWRlcyhpZCk7XG4gICAgICB9KSkgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5jbGVhbigpO1xuXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLl9hY3RpdmUpIHJldHVybjtcblxuICAgICAgX3RoaXMudXBkYXRlR2VzdHVyZVN0YXRlKF9leHRlbmRzKHt9LCBnZXRHZW5lcmljUGF5bG9hZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgZXZlbnQpLCBfdGhpcy5nZXRNb3ZlbWVudChfdGhpcy5zdGF0ZS52YWx1ZXMpLCB7XG4gICAgICAgIF9hY3RpdmU6IGZhbHNlXG4gICAgICB9KSk7XG5cbiAgICAgIF90aGlzLmZpcmVHZXN0dXJlSGFuZGxlcigpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5jYW5jZWxlZCkgcmV0dXJuO1xuXG4gICAgICBfdGhpcy51cGRhdGVHZXN0dXJlU3RhdGUoe1xuICAgICAgICBfYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgY2FuY2VsZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmZpcmVHZXN0dXJlSGFuZGxlcigpO1xuICAgICAgfSwgMCk7XG4gICAgfTtcbiAgICAvKipcclxuICAgICAqIFBJTkNIIFdJVEggV0VCS0lUIEdFU1RVUkVTXHJcbiAgICAgKi9cblxuXG4gICAgX3RoaXMub25HZXN0dXJlU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMuZW5hYmxlZCkgcmV0dXJuO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gdXNlbGVzc1xuXG4gICAgICB2YXIgdmFsdWVzID0gZ2V0V2Via2l0R2VzdHVyZUV2ZW50VmFsdWVzKGV2ZW50LCBfdGhpcy50cmFuc2Zvcm0pO1xuXG4gICAgICBfdGhpcy51cGRhdGVTaGFyZWRTdGF0ZShnZXRHZW5lcmljRXZlbnREYXRhKGV2ZW50KSk7XG5cbiAgICAgIF90aGlzLnVwZGF0ZUdlc3R1cmVTdGF0ZShfZXh0ZW5kcyh7fSwgZ2V0U3RhcnRHZXN0dXJlU3RhdGUoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHZhbHVlcywgZXZlbnQpLCBnZXRHZW5lcmljUGF5bG9hZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgZXZlbnQsIHRydWUpLCB7XG4gICAgICAgIG9yaWdpbjogW2V2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFldLFxuICAgICAgICBjYW5jZWw6IF90aGlzLm9uQ2FuY2VsXG4gICAgICB9KSk7XG5cbiAgICAgIF90aGlzLnVwZGF0ZUdlc3R1cmVTdGF0ZShfdGhpcy5nZXRNb3ZlbWVudCh2YWx1ZXMpKTtcblxuICAgICAgX3RoaXMuZmlyZUdlc3R1cmVIYW5kbGVyKCk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uR2VzdHVyZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlMiA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIGNhbmNlbGVkID0gX3RoaXMkc3RhdGUyLmNhbmNlbGVkLFxuICAgICAgICAgIF9hY3RpdmUgPSBfdGhpcyRzdGF0ZTIuX2FjdGl2ZTtcbiAgICAgIGlmIChjYW5jZWxlZCB8fCAhX2FjdGl2ZSkgcmV0dXJuO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBnZW5lcmljRXZlbnREYXRhID0gZ2V0R2VuZXJpY0V2ZW50RGF0YShldmVudCk7XG5cbiAgICAgIF90aGlzLnVwZGF0ZVNoYXJlZFN0YXRlKGdlbmVyaWNFdmVudERhdGEpO1xuXG4gICAgICB2YXIgdmFsdWVzID0gZ2V0V2Via2l0R2VzdHVyZUV2ZW50VmFsdWVzKGV2ZW50LCBfdGhpcy50cmFuc2Zvcm0pO1xuXG4gICAgICB2YXIga2luZW1hdGljcyA9IF90aGlzLmdldEtpbmVtYXRpY3ModmFsdWVzLCBldmVudCk7XG5cbiAgICAgIF90aGlzLnVwZGF0ZUdlc3R1cmVTdGF0ZShfZXh0ZW5kcyh7fSwgZ2V0R2VuZXJpY1BheWxvYWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIGV2ZW50KSwga2luZW1hdGljcywge1xuICAgICAgICBvcmlnaW46IFtldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZXVxuICAgICAgfSkpO1xuXG4gICAgICBfdGhpcy5maXJlR2VzdHVyZUhhbmRsZXIoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25HZXN0dXJlRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5jbGVhbigpO1xuXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLl9hY3RpdmUpIHJldHVybjtcblxuICAgICAgX3RoaXMudXBkYXRlR2VzdHVyZVN0YXRlKF9leHRlbmRzKHt9LCBnZXRHZW5lcmljUGF5bG9hZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgZXZlbnQpLCBfdGhpcy5nZXRNb3ZlbWVudChfdGhpcy5zdGF0ZS52YWx1ZXMpLCB7XG4gICAgICAgIF9hY3RpdmU6IGZhbHNlLFxuICAgICAgICBvcmlnaW46IFtldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZXVxuICAgICAgfSkpO1xuXG4gICAgICBfdGhpcy5maXJlR2VzdHVyZUhhbmRsZXIoKTtcbiAgICB9O1xuICAgIC8qKlxyXG4gICAgICogUElOQ0ggV0lUSCBXSEVFTFxyXG4gICAgICovXG5cblxuICAgIF90aGlzLndoZWVsU2hvdWxkUnVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gX3RoaXMuZW5hYmxlZCAmJiBldmVudC5jdHJsS2V5O1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRXaGVlbFZhbHVlc0Zyb21FdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF9nZXRXaGVlbEV2ZW50VmFsdWVzID0gZ2V0V2hlZWxFdmVudFZhbHVlcyhldmVudCwgX3RoaXMudHJhbnNmb3JtKSxcbiAgICAgICAgICBkZWx0YV9kID0gX2dldFdoZWVsRXZlbnRWYWx1ZXNbMV07XG5cbiAgICAgIHZhciBfdGhpcyRzdGF0ZSR2YWx1ZXMgPSBfdGhpcy5zdGF0ZS52YWx1ZXMsXG4gICAgICAgICAgcHJldl9kID0gX3RoaXMkc3RhdGUkdmFsdWVzWzBdLFxuICAgICAgICAgIHByZXZfYSA9IF90aGlzJHN0YXRlJHZhbHVlc1sxXTtcbiAgICAgIHZhciBkID0gcHJldl9kIC0gZGVsdGFfZDtcbiAgICAgIHZhciBhID0gcHJldl9hICE9PSB2b2lkIDAgPyBwcmV2X2EgOiAwO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWVzOiBbZCwgYV0sXG4gICAgICAgIG9yaWdpbjogW2V2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFldLFxuICAgICAgICBkZWx0YTogWzAsIGRlbHRhX2RdXG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy5vbldoZWVsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLndoZWVsU2hvdWxkUnVuKGV2ZW50KSkgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5zZXRUaW1lb3V0KF90aGlzLm9uV2hlZWxFbmQpO1xuXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLl9hY3RpdmUpIF90aGlzLm9uV2hlZWxTdGFydChldmVudCk7ZWxzZSBfdGhpcy5vbldoZWVsQ2hhbmdlKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25XaGVlbFN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0V2hlZWxWYWx1ZXNGID0gX3RoaXMuZ2V0V2hlZWxWYWx1ZXNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICAgIHZhbHVlcyA9IF90aGlzJGdldFdoZWVsVmFsdWVzRi52YWx1ZXMsXG4gICAgICAgICAgZGVsdGEgPSBfdGhpcyRnZXRXaGVlbFZhbHVlc0YuZGVsdGEsXG4gICAgICAgICAgb3JpZ2luID0gX3RoaXMkZ2V0V2hlZWxWYWx1ZXNGLm9yaWdpbjtcblxuICAgICAgaWYgKGV2ZW50LmNhbmNlbGFibGUpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7ZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdUbyBwcm9wZXJseSBzdXBwb3J0IHpvb20gb24gdHJhY2twYWRzLCB0cnkgdXNpbmcgdGhlIGBkb21UYXJnZXRgIG9wdGlvbiBhbmQgYGNvbmZpZy5ldmVudE9wdGlvbnMucGFzc2l2ZWAgc2V0IHRvIGBmYWxzZWAuIFRoaXMgbWVzc2FnZSB3aWxsIG9ubHkgYXBwZWFyIGluIGRldmVsb3BtZW50IG1vZGUuJyk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnVwZGF0ZVNoYXJlZFN0YXRlKGdldEdlbmVyaWNFdmVudERhdGEoZXZlbnQpKTtcblxuICAgICAgX3RoaXMudXBkYXRlR2VzdHVyZVN0YXRlKF9leHRlbmRzKHt9LCBnZXRTdGFydEdlc3R1cmVTdGF0ZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgdmFsdWVzLCBldmVudCksIGdldEdlbmVyaWNQYXlsb2FkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBldmVudCwgdHJ1ZSksIHtcbiAgICAgICAgaW5pdGlhbDogX3RoaXMuc3RhdGUudmFsdWVzLFxuICAgICAgICBvZmZzZXQ6IHZhbHVlcyxcbiAgICAgICAgZGVsdGE6IGRlbHRhLFxuICAgICAgICBvcmlnaW46IG9yaWdpblxuICAgICAgfSkpO1xuXG4gICAgICBfdGhpcy51cGRhdGVHZXN0dXJlU3RhdGUoX3RoaXMuZ2V0TW92ZW1lbnQodmFsdWVzKSk7XG5cbiAgICAgIF90aGlzLmZpcmVHZXN0dXJlSGFuZGxlcigpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbldoZWVsQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuY2FuY2VsYWJsZSkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgX3RoaXMudXBkYXRlU2hhcmVkU3RhdGUoZ2V0R2VuZXJpY0V2ZW50RGF0YShldmVudCkpO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0V2hlZWxWYWx1ZXNGMiA9IF90aGlzLmdldFdoZWVsVmFsdWVzRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgICB2YWx1ZXMgPSBfdGhpcyRnZXRXaGVlbFZhbHVlc0YyLnZhbHVlcyxcbiAgICAgICAgICBvcmlnaW4gPSBfdGhpcyRnZXRXaGVlbFZhbHVlc0YyLm9yaWdpbixcbiAgICAgICAgICBkZWx0YSA9IF90aGlzJGdldFdoZWVsVmFsdWVzRjIuZGVsdGE7XG5cbiAgICAgIF90aGlzLnVwZGF0ZUdlc3R1cmVTdGF0ZShfZXh0ZW5kcyh7fSwgZ2V0R2VuZXJpY1BheWxvYWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIGV2ZW50KSwgX3RoaXMuZ2V0S2luZW1hdGljcyh2YWx1ZXMsIGV2ZW50KSwge1xuICAgICAgICBvcmlnaW46IG9yaWdpbixcbiAgICAgICAgZGVsdGE6IGRlbHRhXG4gICAgICB9KSk7XG5cbiAgICAgIF90aGlzLmZpcmVHZXN0dXJlSGFuZGxlcigpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbldoZWVsRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2xlYW4oKTtcblxuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5fYWN0aXZlKSByZXR1cm47XG4gICAgICBfdGhpcy5zdGF0ZS5fYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgIF90aGlzLnVwZGF0ZUdlc3R1cmVTdGF0ZShfdGhpcy5nZXRNb3ZlbWVudChfdGhpcy5zdGF0ZS52YWx1ZXMpKTtcblxuICAgICAgX3RoaXMuZmlyZUdlc3R1cmVIYW5kbGVyKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBQaW5jaFJlY29nbml6ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZGRCaW5kaW5ncyA9IGZ1bmN0aW9uIGFkZEJpbmRpbmdzJDEoYmluZGluZ3MpIHtcbiAgICAvLyBPbmx5IHRyeSB0byB1c2UgZ2VzdHVyZSBldmVudHMgd2hlbiB0aGV5IGFyZSBzdXBwb3J0ZWQgYW5kIGRvbVRhcmdldCBpcyBzZXRcbiAgICAvLyBhcyBSZWFjdCBkb2Vzbid0IHN1cHBvcnQgZ2VzdHVyZSBoYW5kbGVycy5cbiAgICBpZiAodGhpcy5jb250cm9sbGVyLmNvbmZpZy5kb21UYXJnZXQgJiYgIXRoaXMuY29udHJvbGxlci5zdXBwb3J0c1RvdWNoRXZlbnRzICYmIHRoaXMuY29udHJvbGxlci5zdXBwb3J0c0dlc3R1cmVFdmVudHMpIHtcbiAgICAgIGFkZEJpbmRpbmdzKGJpbmRpbmdzLCAnb25HZXN0dXJlU3RhcnQnLCB0aGlzLm9uR2VzdHVyZVN0YXJ0KTtcblxuICAgICAgYWRkQmluZGluZ3MoYmluZGluZ3MsICdvbkdlc3R1cmVDaGFuZ2UnLCB0aGlzLm9uR2VzdHVyZUNoYW5nZSk7XG5cbiAgICAgIGFkZEJpbmRpbmdzKGJpbmRpbmdzLCAnb25HZXN0dXJlRW5kJywgdGhpcy5vbkdlc3R1cmVFbmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRCaW5kaW5ncyhiaW5kaW5ncywgJ29uVG91Y2hTdGFydCcsIHRoaXMub25QaW5jaFN0YXJ0KTtcblxuICAgICAgYWRkQmluZGluZ3MoYmluZGluZ3MsICdvblRvdWNoTW92ZScsIHRoaXMub25QaW5jaENoYW5nZSk7XG5cbiAgICAgIGFkZEJpbmRpbmdzKGJpbmRpbmdzLCAnb25Ub3VjaEVuZCcsIHRoaXMub25QaW5jaEVuZCk7XG5cbiAgICAgIGFkZEJpbmRpbmdzKGJpbmRpbmdzLCAnb25Ub3VjaENhbmNlbCcsIHRoaXMub25QaW5jaEVuZCk7XG5cbiAgICAgIGFkZEJpbmRpbmdzKGJpbmRpbmdzLCAnb25XaGVlbCcsIHRoaXMub25XaGVlbCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBQaW5jaFJlY29nbml6ZXI7XG59KERpc3RhbmNlQW5nbGVSZWNvZ25pemVyKTtcblxuLyoqXHJcbiAqIFBpbmNoIGhvb2suXHJcbiAqXHJcbiAqIEBwYXJhbSBoYW5kbGVyIC0gdGhlIGZ1bmN0aW9uIGZpcmVkIGV2ZXJ5IHRpbWUgdGhlIHBpbmNoIGdlc3R1cmUgdXBkYXRlc1xyXG4gKiBAcGFyYW0gW2NvbmZpZz17fV0gLSB0aGUgY29uZmlnIG9iamVjdCBpbmNsdWRpbmcgZ2VuZXJpYyBvcHRpb25zIGFuZCBwaW5jaCBvcHRpb25zXHJcbiAqL1xuXG5mdW5jdGlvbiB1c2VQaW5jaChoYW5kbGVyLCBjb25maWcpIHtcbiAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7XG4gICAgY29uZmlnID0ge307XG4gIH1cblxuICBSZWNvZ25pemVyc01hcC5zZXQoJ3BpbmNoJywgUGluY2hSZWNvZ25pemVyKTtcbiAgdmFyIGJ1aWxkUGluY2hDb25maWcgPSB1c2VSZWYoKTtcblxuICBpZiAoIWJ1aWxkUGluY2hDb25maWcuY3VycmVudCkge1xuICAgIGJ1aWxkUGluY2hDb25maWcuY3VycmVudCA9IG1lbW9pemVPbmUoX2J1aWxkUGluY2hDb25maWcsIGlzRXF1YWwpO1xuICB9XG5cbiAgcmV0dXJuIHVzZVJlY29nbml6ZXJzKHtcbiAgICBwaW5jaDogaGFuZGxlclxuICB9LCBidWlsZFBpbmNoQ29uZmlnLmN1cnJlbnQoY29uZmlnKSk7XG59XG5cbnZhciBXaGVlbFJlY29nbml6ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db29yZGluYXRlc1JlY29nbml6ZSkge1xuICBfaW5oZXJpdHNMb29zZShXaGVlbFJlY29nbml6ZXIsIF9Db29yZGluYXRlc1JlY29nbml6ZSk7XG5cbiAgZnVuY3Rpb24gV2hlZWxSZWNvZ25pemVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0Nvb3JkaW5hdGVzUmVjb2duaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBfdGhpcy5pbmdLZXkgPSAnd2hlZWxpbmcnO1xuICAgIF90aGlzLnN0YXRlS2V5ID0gJ3doZWVsJztcbiAgICBfdGhpcy5kZWJvdW5jZWQgPSB0cnVlO1xuXG4gICAgX3RoaXMuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5jdHJsS2V5ICYmICdwaW5jaCcgaW4gX3RoaXMuY29udHJvbGxlci5oYW5kbGVycykgcmV0dXJuO1xuICAgICAgaWYgKCFfdGhpcy5lbmFibGVkKSByZXR1cm47XG5cbiAgICAgIF90aGlzLnNldFRpbWVvdXQoX3RoaXMub25FbmQpO1xuXG4gICAgICBfdGhpcy51cGRhdGVTaGFyZWRTdGF0ZShnZXRHZW5lcmljRXZlbnREYXRhKGV2ZW50KSk7XG5cbiAgICAgIHZhciB2YWx1ZXMgPSBhZGRWKGdldFdoZWVsRXZlbnRWYWx1ZXMoZXZlbnQsIF90aGlzLnRyYW5zZm9ybSksIF90aGlzLnN0YXRlLnZhbHVlcyk7XG5cbiAgICAgIGlmICghX3RoaXMuc3RhdGUuX2FjdGl2ZSkge1xuICAgICAgICBfdGhpcy51cGRhdGVHZXN0dXJlU3RhdGUoX2V4dGVuZHMoe30sIGdldFN0YXJ0R2VzdHVyZVN0YXRlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCB2YWx1ZXMsIGV2ZW50KSwgZ2V0R2VuZXJpY1BheWxvYWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIGV2ZW50LCB0cnVlKSwge1xuICAgICAgICAgIGluaXRpYWw6IF90aGlzLnN0YXRlLnZhbHVlc1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgdmFyIG1vdmVtZW50ID0gX3RoaXMuZ2V0TW92ZW1lbnQodmFsdWVzKTtcblxuICAgICAgICB2YXIgZ2VvbWV0cnkgPSBjYWxjdWxhdGVBbGxHZW9tZXRyeShtb3ZlbWVudC5kZWx0YSk7XG5cbiAgICAgICAgX3RoaXMudXBkYXRlR2VzdHVyZVN0YXRlKG1vdmVtZW50KTtcblxuICAgICAgICBfdGhpcy51cGRhdGVHZXN0dXJlU3RhdGUoZ2VvbWV0cnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMudXBkYXRlR2VzdHVyZVN0YXRlKF9leHRlbmRzKHt9LCBnZXRHZW5lcmljUGF5bG9hZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgZXZlbnQpLCBfdGhpcy5nZXRLaW5lbWF0aWNzKHZhbHVlcywgZXZlbnQpKSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmZpcmVHZXN0dXJlSGFuZGxlcigpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNsZWFuKCk7XG5cbiAgICAgIGlmICghX3RoaXMuc3RhdGUuX2FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgICB2YXIgbW92ZW1lbnQgPSBfdGhpcy5nZXRNb3ZlbWVudChfdGhpcy5zdGF0ZS52YWx1ZXMpO1xuXG4gICAgICBfdGhpcy51cGRhdGVHZXN0dXJlU3RhdGUobW92ZW1lbnQpO1xuXG4gICAgICBfdGhpcy51cGRhdGVHZXN0dXJlU3RhdGUoe1xuICAgICAgICBfYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgdmVsb2NpdGllczogWzAsIDBdLFxuICAgICAgICB2ZWxvY2l0eTogMFxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLmZpcmVHZXN0dXJlSGFuZGxlcigpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gV2hlZWxSZWNvZ25pemVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkQmluZGluZ3MgPSBmdW5jdGlvbiBhZGRCaW5kaW5ncyQxKGJpbmRpbmdzKSB7XG4gICAgYWRkQmluZGluZ3MoYmluZGluZ3MsICdvbldoZWVsJywgdGhpcy5oYW5kbGVFdmVudCk7XG4gIH07XG5cbiAgcmV0dXJuIFdoZWVsUmVjb2duaXplcjtcbn0oQ29vcmRpbmF0ZXNSZWNvZ25pemVyKTtcblxuLyoqXHJcbiAqIFdoZWVsIGhvb2suXHJcbiAqXHJcbiAqIEBwYXJhbSBoYW5kbGVyIC0gdGhlIGZ1bmN0aW9uIGZpcmVkIGV2ZXJ5IHRpbWUgdGhlIHdoZWVsIGdlc3R1cmUgdXBkYXRlc1xyXG4gKiBAcGFyYW0gdGhlIGNvbmZpZyBvYmplY3QgaW5jbHVkaW5nIGdlbmVyaWMgb3B0aW9ucyBhbmQgd2hlZWwgb3B0aW9uc1xyXG4gKi9cblxuZnVuY3Rpb24gdXNlV2hlZWwoaGFuZGxlciwgY29uZmlnKSB7XG4gIGlmIChjb25maWcgPT09IHZvaWQgMCkge1xuICAgIGNvbmZpZyA9IHt9O1xuICB9XG5cbiAgUmVjb2duaXplcnNNYXAuc2V0KCd3aGVlbCcsIFdoZWVsUmVjb2duaXplcik7XG4gIHZhciBidWlsZFdoZWVsQ29uZmlnID0gdXNlUmVmKCk7XG5cbiAgaWYgKCFidWlsZFdoZWVsQ29uZmlnLmN1cnJlbnQpIHtcbiAgICBidWlsZFdoZWVsQ29uZmlnLmN1cnJlbnQgPSBtZW1vaXplT25lKF9idWlsZFdoZWVsQ29uZmlnLCBpc0VxdWFsKTtcbiAgfVxuXG4gIHJldHVybiB1c2VSZWNvZ25pemVycyh7XG4gICAgd2hlZWw6IGhhbmRsZXJcbiAgfSwgYnVpbGRXaGVlbENvbmZpZy5jdXJyZW50KGNvbmZpZykpO1xufVxuXG52YXIgTW92ZVJlY29nbml6ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db29yZGluYXRlc1JlY29nbml6ZSkge1xuICBfaW5oZXJpdHNMb29zZShNb3ZlUmVjb2duaXplciwgX0Nvb3JkaW5hdGVzUmVjb2duaXplKTtcblxuICBmdW5jdGlvbiBNb3ZlUmVjb2duaXplcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db29yZGluYXRlc1JlY29nbml6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuaW5nS2V5ID0gJ21vdmluZyc7XG4gICAgX3RoaXMuc3RhdGVLZXkgPSAnbW92ZSc7XG4gICAgX3RoaXMuZGVib3VuY2VkID0gdHJ1ZTtcblxuICAgIF90aGlzLm9uTW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5lbmFibGVkKSByZXR1cm47XG5cbiAgICAgIF90aGlzLnNldFRpbWVvdXQoX3RoaXMub25Nb3ZlRW5kKTtcblxuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5fYWN0aXZlKSBfdGhpcy5vbk1vdmVTdGFydChldmVudCk7ZWxzZSBfdGhpcy5vbk1vdmVDaGFuZ2UoZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbk1vdmVTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMudXBkYXRlU2hhcmVkU3RhdGUoZ2V0R2VuZXJpY0V2ZW50RGF0YShldmVudCkpO1xuXG4gICAgICB2YXIgdmFsdWVzID0gZ2V0UG9pbnRlckV2ZW50VmFsdWVzKGV2ZW50LCBfdGhpcy50cmFuc2Zvcm0pO1xuXG4gICAgICBfdGhpcy51cGRhdGVHZXN0dXJlU3RhdGUoX2V4dGVuZHMoe30sIGdldFN0YXJ0R2VzdHVyZVN0YXRlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCB2YWx1ZXMsIGV2ZW50KSwgZ2V0R2VuZXJpY1BheWxvYWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIGV2ZW50LCB0cnVlKSkpO1xuXG4gICAgICBfdGhpcy51cGRhdGVHZXN0dXJlU3RhdGUoX3RoaXMuZ2V0TW92ZW1lbnQodmFsdWVzKSk7XG5cbiAgICAgIF90aGlzLmZpcmVHZXN0dXJlSGFuZGxlcigpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbk1vdmVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnVwZGF0ZVNoYXJlZFN0YXRlKGdldEdlbmVyaWNFdmVudERhdGEoZXZlbnQpKTtcblxuICAgICAgdmFyIHZhbHVlcyA9IGdldFBvaW50ZXJFdmVudFZhbHVlcyhldmVudCwgX3RoaXMudHJhbnNmb3JtKTtcblxuICAgICAgX3RoaXMudXBkYXRlR2VzdHVyZVN0YXRlKF9leHRlbmRzKHt9LCBnZXRHZW5lcmljUGF5bG9hZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgZXZlbnQpLCBfdGhpcy5nZXRLaW5lbWF0aWNzKHZhbHVlcywgZXZlbnQpKSk7XG5cbiAgICAgIF90aGlzLmZpcmVHZXN0dXJlSGFuZGxlcigpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbk1vdmVFbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jbGVhbigpO1xuXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLl9hY3RpdmUpIHJldHVybjtcbiAgICAgIHZhciB2YWx1ZXMgPSBfdGhpcy5zdGF0ZS52YWx1ZXM7XG5cbiAgICAgIF90aGlzLnVwZGF0ZUdlc3R1cmVTdGF0ZShfdGhpcy5nZXRNb3ZlbWVudCh2YWx1ZXMpKTtcblxuICAgICAgX3RoaXMudXBkYXRlR2VzdHVyZVN0YXRlKHtcbiAgICAgICAgdmVsb2NpdGllczogWzAsIDBdLFxuICAgICAgICB2ZWxvY2l0eTogMCxcbiAgICAgICAgX2FjdGl2ZTogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5maXJlR2VzdHVyZUhhbmRsZXIoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaG92ZXJUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuY29udHJvbGxlci5jb25maWcuaG92ZXIudHJhbnNmb3JtIHx8IF90aGlzLmNvbnRyb2xsZXIuY29uZmlnLnRyYW5zZm9ybTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Qb2ludGVyRW50ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmNvbnRyb2xsZXIuc3RhdGUuc2hhcmVkLmhvdmVyaW5nID0gdHJ1ZTtcbiAgICAgIGlmICghX3RoaXMuY29udHJvbGxlci5jb25maWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgICBpZiAoX3RoaXMuY29udHJvbGxlci5jb25maWcuaG92ZXIuZW5hYmxlZCkge1xuICAgICAgICB2YXIgdmFsdWVzID0gZ2V0UG9pbnRlckV2ZW50VmFsdWVzKGV2ZW50LCBfdGhpcy5ob3ZlclRyYW5zZm9ybSgpKTtcblxuICAgICAgICB2YXIgc3RhdGUgPSBfZXh0ZW5kcyh7fSwgX3RoaXMuY29udHJvbGxlci5zdGF0ZS5zaGFyZWQsIF90aGlzLnN0YXRlLCBnZXRHZW5lcmljUGF5bG9hZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgZXZlbnQsIHRydWUpLCB7XG4gICAgICAgICAgYXJnczogX3RoaXMuYXJncyxcbiAgICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgaG92ZXJpbmc6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuY29udHJvbGxlci5oYW5kbGVycy5ob3ZlcihfZXh0ZW5kcyh7fSwgc3RhdGUsIF90aGlzLm1hcFN0YXRlVmFsdWVzKHN0YXRlKSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ21vdmUnIGluIF90aGlzLmNvbnRyb2xsZXIuaGFuZGxlcnMpIF90aGlzLm9uTW92ZVN0YXJ0KGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Qb2ludGVyTGVhdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmNvbnRyb2xsZXIuc3RhdGUuc2hhcmVkLmhvdmVyaW5nID0gZmFsc2U7XG4gICAgICBpZiAoJ21vdmUnIGluIF90aGlzLmNvbnRyb2xsZXIuaGFuZGxlcnMpIF90aGlzLm9uTW92ZUVuZCgpO1xuICAgICAgaWYgKCFfdGhpcy5jb250cm9sbGVyLmNvbmZpZy5ob3Zlci5lbmFibGVkKSByZXR1cm47XG4gICAgICB2YXIgdmFsdWVzID0gZ2V0UG9pbnRlckV2ZW50VmFsdWVzKGV2ZW50LCBfdGhpcy5ob3ZlclRyYW5zZm9ybSgpKTtcblxuICAgICAgdmFyIHN0YXRlID0gX2V4dGVuZHMoe30sIF90aGlzLmNvbnRyb2xsZXIuc3RhdGUuc2hhcmVkLCBfdGhpcy5zdGF0ZSwgZ2V0R2VuZXJpY1BheWxvYWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIGV2ZW50KSwge1xuICAgICAgICBhcmdzOiBfdGhpcy5hcmdzLFxuICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLmNvbnRyb2xsZXIuaGFuZGxlcnMuaG92ZXIoX2V4dGVuZHMoe30sIHN0YXRlLCBfdGhpcy5tYXBTdGF0ZVZhbHVlcyhzdGF0ZSkpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1vdmVSZWNvZ25pemVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkQmluZGluZ3MgPSBmdW5jdGlvbiBhZGRCaW5kaW5ncyQxKGJpbmRpbmdzKSB7XG4gICAgaWYgKCdtb3ZlJyBpbiB0aGlzLmNvbnRyb2xsZXIuaGFuZGxlcnMpIHtcbiAgICAgIGFkZEJpbmRpbmdzKGJpbmRpbmdzLCAnb25Qb2ludGVyTW92ZScsIHRoaXMub25Nb3ZlKTtcbiAgICB9XG5cbiAgICBpZiAoJ2hvdmVyJyBpbiB0aGlzLmNvbnRyb2xsZXIuaGFuZGxlcnMpIHtcbiAgICAgIGFkZEJpbmRpbmdzKGJpbmRpbmdzLCAnb25Qb2ludGVyRW50ZXInLCB0aGlzLm9uUG9pbnRlckVudGVyKTtcblxuICAgICAgYWRkQmluZGluZ3MoYmluZGluZ3MsICdvblBvaW50ZXJMZWF2ZScsIHRoaXMub25Qb2ludGVyTGVhdmUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gTW92ZVJlY29nbml6ZXI7XG59KENvb3JkaW5hdGVzUmVjb2duaXplcik7XG5cbi8qKlxyXG4gKiBNb3ZlIGhvb2suXHJcbiAqXHJcbiAqIEBwYXJhbSBoYW5kbGVyIC0gdGhlIGZ1bmN0aW9uIGZpcmVkIGV2ZXJ5IHRpbWUgdGhlIG1vdmUgZ2VzdHVyZSB1cGRhdGVzXHJcbiAqIEBwYXJhbSBbY29uZmlnPXt9XSAtIHRoZSBjb25maWcgb2JqZWN0IGluY2x1ZGluZyBnZW5lcmljIG9wdGlvbnMgYW5kIG1vdmUgb3B0aW9uc1xyXG4gKi9cblxuZnVuY3Rpb24gdXNlTW92ZShoYW5kbGVyLCBjb25maWcpIHtcbiAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7XG4gICAgY29uZmlnID0ge307XG4gIH1cblxuICBSZWNvZ25pemVyc01hcC5zZXQoJ21vdmUnLCBNb3ZlUmVjb2duaXplcik7XG4gIHZhciBidWlsZE1vdmVDb25maWcgPSB1c2VSZWYoKTtcblxuICBpZiAoIWJ1aWxkTW92ZUNvbmZpZy5jdXJyZW50KSB7XG4gICAgYnVpbGRNb3ZlQ29uZmlnLmN1cnJlbnQgPSBtZW1vaXplT25lKF9idWlsZE1vdmVDb25maWcsIGlzRXF1YWwpO1xuICB9XG5cbiAgcmV0dXJuIHVzZVJlY29nbml6ZXJzKHtcbiAgICBtb3ZlOiBoYW5kbGVyXG4gIH0sIGJ1aWxkTW92ZUNvbmZpZy5jdXJyZW50KGNvbmZpZykpO1xufVxuXG4vKipcclxuICogSG92ZXIgaG9vay5cclxuICpcclxuICogQHBhcmFtIGhhbmRsZXIgLSB0aGUgZnVuY3Rpb24gZmlyZWQgZXZlcnkgdGltZSB0aGUgaG92ZXIgZ2VzdHVyZSB1cGRhdGVzXHJcbiAqIEBwYXJhbSBbY29uZmlnPXt9XSAtIHRoZSBjb25maWcgb2JqZWN0IGluY2x1ZGluZyBnZW5lcmljIG9wdGlvbnMgYW5kIGhvdmVyIG9wdGlvbnNcclxuICovXG5cbmZ1bmN0aW9uIHVzZUhvdmVyKGhhbmRsZXIsIGNvbmZpZykge1xuICBpZiAoY29uZmlnID09PSB2b2lkIDApIHtcbiAgICBjb25maWcgPSB7fTtcbiAgfVxuXG4gIFJlY29nbml6ZXJzTWFwLnNldCgnaG92ZXInLCBNb3ZlUmVjb2duaXplcik7XG4gIHZhciBidWlsZEhvdmVyQ29uZmlnID0gdXNlUmVmKCk7XG5cbiAgaWYgKCFidWlsZEhvdmVyQ29uZmlnLmN1cnJlbnQpIHtcbiAgICBidWlsZEhvdmVyQ29uZmlnLmN1cnJlbnQgPSBtZW1vaXplT25lKF9idWlsZEhvdmVyQ29uZmlnLCBpc0VxdWFsKTtcbiAgfVxuXG4gIHJldHVybiB1c2VSZWNvZ25pemVycyh7XG4gICAgaG92ZXI6IGhhbmRsZXJcbiAgfSwgYnVpbGRIb3ZlckNvbmZpZy5jdXJyZW50KGNvbmZpZykpO1xufVxuXG52YXIgU2Nyb2xsUmVjb2duaXplciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Nvb3JkaW5hdGVzUmVjb2duaXplKSB7XG4gIF9pbmhlcml0c0xvb3NlKFNjcm9sbFJlY29nbml6ZXIsIF9Db29yZGluYXRlc1JlY29nbml6ZSk7XG5cbiAgZnVuY3Rpb24gU2Nyb2xsUmVjb2duaXplcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db29yZGluYXRlc1JlY29nbml6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuaW5nS2V5ID0gJ3Njcm9sbGluZyc7XG4gICAgX3RoaXMuc3RhdGVLZXkgPSAnc2Nyb2xsJztcbiAgICBfdGhpcy5kZWJvdW5jZWQgPSB0cnVlO1xuXG4gICAgX3RoaXMuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5jbGVhclRpbWVvdXQoKTtcblxuICAgICAgX3RoaXMuc2V0VGltZW91dChfdGhpcy5vbkVuZCk7XG5cbiAgICAgIHZhciB2YWx1ZXMgPSBnZXRTY3JvbGxFdmVudFZhbHVlcyhldmVudCwgX3RoaXMudHJhbnNmb3JtKTtcblxuICAgICAgX3RoaXMudXBkYXRlU2hhcmVkU3RhdGUoZ2V0R2VuZXJpY0V2ZW50RGF0YShldmVudCkpO1xuXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLl9hY3RpdmUpIHtcbiAgICAgICAgX3RoaXMudXBkYXRlR2VzdHVyZVN0YXRlKF9leHRlbmRzKHt9LCBnZXRTdGFydEdlc3R1cmVTdGF0ZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgdmFsdWVzLCBldmVudCksIGdldEdlbmVyaWNQYXlsb2FkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBldmVudCwgdHJ1ZSksIHtcbiAgICAgICAgICBpbml0aWFsOiBfdGhpcy5zdGF0ZS52YWx1ZXNcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHZhciBtb3ZlbWVudERldGVjdGlvbiA9IF90aGlzLmdldE1vdmVtZW50KHZhbHVlcyk7XG5cbiAgICAgICAgdmFyIGdlb21ldHJ5ID0gY2FsY3VsYXRlQWxsR2VvbWV0cnkobW92ZW1lbnREZXRlY3Rpb24uZGVsdGEpO1xuXG4gICAgICAgIF90aGlzLnVwZGF0ZUdlc3R1cmVTdGF0ZShtb3ZlbWVudERldGVjdGlvbik7XG5cbiAgICAgICAgX3RoaXMudXBkYXRlR2VzdHVyZVN0YXRlKGdlb21ldHJ5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnVwZGF0ZUdlc3R1cmVTdGF0ZShfZXh0ZW5kcyh7fSwgZ2V0R2VuZXJpY1BheWxvYWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIGV2ZW50KSwgX3RoaXMuZ2V0S2luZW1hdGljcyh2YWx1ZXMsIGV2ZW50KSkpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5maXJlR2VzdHVyZUhhbmRsZXIoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jbGVhbigpO1xuXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLl9hY3RpdmUpIHJldHVybjtcblxuICAgICAgX3RoaXMudXBkYXRlR2VzdHVyZVN0YXRlKF9leHRlbmRzKHt9LCBfdGhpcy5nZXRNb3ZlbWVudChfdGhpcy5zdGF0ZS52YWx1ZXMpLCB7XG4gICAgICAgIF9hY3RpdmU6IGZhbHNlLFxuICAgICAgICB2ZWxvY2l0aWVzOiBbMCwgMF0sXG4gICAgICAgIHZlbG9jaXR5OiAwXG4gICAgICB9KSk7XG5cbiAgICAgIF90aGlzLmZpcmVHZXN0dXJlSGFuZGxlcigpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU2Nyb2xsUmVjb2duaXplci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZEJpbmRpbmdzID0gZnVuY3Rpb24gYWRkQmluZGluZ3MkMShiaW5kaW5ncykge1xuICAgIGFkZEJpbmRpbmdzKGJpbmRpbmdzLCAnb25TY3JvbGwnLCB0aGlzLmhhbmRsZUV2ZW50KTtcbiAgfTtcblxuICByZXR1cm4gU2Nyb2xsUmVjb2duaXplcjtcbn0oQ29vcmRpbmF0ZXNSZWNvZ25pemVyKTtcblxuLyoqXHJcbiAqIFNjcm9sbCBob29rLlxyXG4gKlxyXG4gKiBAcGFyYW0gaGFuZGxlciAtIHRoZSBmdW5jdGlvbiBmaXJlZCBldmVyeSB0aW1lIHRoZSBzY3JvbGwgZ2VzdHVyZSB1cGRhdGVzXHJcbiAqIEBwYXJhbSBbY29uZmlnPXt9XSAtIHRoZSBjb25maWcgb2JqZWN0IGluY2x1ZGluZyBnZW5lcmljIG9wdGlvbnMgYW5kIHNjcm9sbCBvcHRpb25zXHJcbiAqL1xuXG5mdW5jdGlvbiB1c2VTY3JvbGwoaGFuZGxlciwgY29uZmlnKSB7XG4gIGlmIChjb25maWcgPT09IHZvaWQgMCkge1xuICAgIGNvbmZpZyA9IHt9O1xuICB9XG5cbiAgUmVjb2duaXplcnNNYXAuc2V0KCdzY3JvbGwnLCBTY3JvbGxSZWNvZ25pemVyKTtcbiAgdmFyIGJ1aWxkU2Nyb2xsQ29uZmlnID0gdXNlUmVmKCk7XG5cbiAgaWYgKCFidWlsZFNjcm9sbENvbmZpZy5jdXJyZW50KSB7XG4gICAgYnVpbGRTY3JvbGxDb25maWcuY3VycmVudCA9IG1lbW9pemVPbmUoX2J1aWxkU2Nyb2xsQ29uZmlnLCBpc0VxdWFsKTtcbiAgfVxuXG4gIHJldHVybiB1c2VSZWNvZ25pemVycyh7XG4gICAgc2Nyb2xsOiBoYW5kbGVyXG4gIH0sIGJ1aWxkU2Nyb2xsQ29uZmlnLmN1cnJlbnQoY29uZmlnKSk7XG59XG5cbnZhciBSRV9OT1RfTkFUSVZFID0gL15vbihEcmFnfFdoZWVsfFNjcm9sbHxNb3ZlfFBpbmNofEhvdmVyKS87XG5cbmZ1bmN0aW9uIHNvcnRIYW5kbGVycyhoYW5kbGVycykge1xuICB2YXIgX25hdGl2ZSA9IHt9O1xuICB2YXIgaGFuZGxlID0ge307XG4gIHZhciBhY3Rpb25zID0gbmV3IFNldCgpO1xuXG4gIGZvciAodmFyIGtleSBpbiBoYW5kbGVycykge1xuICAgIGlmIChSRV9OT1RfTkFUSVZFLnRlc3Qoa2V5KSkge1xuICAgICAgYWN0aW9ucy5hZGQoUmVnRXhwLmxhc3RNYXRjaCk7XG4gICAgICBoYW5kbGVba2V5XSA9IGhhbmRsZXJzW2tleV07XG4gICAgfSBlbHNlIHtcbiAgICAgIF9uYXRpdmVba2V5XSA9IGhhbmRsZXJzW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFtoYW5kbGUsIF9uYXRpdmUsIGFjdGlvbnNdO1xufVxuLyoqXHJcbiAqIEBwdWJsaWNcclxuICpcclxuICogVGhlIG1vc3QgY29tcGxldGUgZ2VzdHVyZSBob29rLCBhbGxvd2luZyBzdXBwb3J0IGZvciBtdWx0aXBsZSBnZXN0dXJlcy5cclxuICpcclxuICogQHBhcmFtIHtIYW5kbGVyc30gaGFuZGxlcnMgLSBhbiBvYmplY3Qgd2l0aCBvbltHZXN0dXJlXSBrZXlzIGNvbnRhaW5nIGdlc3R1cmUgaGFuZGxlcnNcclxuICogQHBhcmFtIHtVc2VHZXN0dXJlQ29uZmlnfSBbY29uZmlnPXt9XSAtIHRoZSBmdWxsIGNvbmZpZyBvYmplY3RcclxuICogQHJldHVybnMgeyguLi5hcmdzOiBhbnlbXSkgPT4gSG9va1JldHVyblR5cGU8Q29uZmlnPn1cclxuICovXG5cblxuZnVuY3Rpb24gdXNlR2VzdHVyZShfaGFuZGxlcnMsIGNvbmZpZykge1xuICBpZiAoY29uZmlnID09PSB2b2lkIDApIHtcbiAgICBjb25maWcgPSB7fTtcbiAgfVxuXG4gIHZhciBfc29ydEhhbmRsZXJzID0gc29ydEhhbmRsZXJzKF9oYW5kbGVycyksXG4gICAgICBoYW5kbGVycyA9IF9zb3J0SGFuZGxlcnNbMF0sXG4gICAgICBuYXRpdmVIYW5kbGVycyA9IF9zb3J0SGFuZGxlcnNbMV0sXG4gICAgICBhY3Rpb25zID0gX3NvcnRIYW5kbGVyc1syXTtcblxuICBSZWNvZ25pemVyc01hcC5zZXQoJ2RyYWcnLCBEcmFnUmVjb2duaXplcik7XG4gIFJlY29nbml6ZXJzTWFwLnNldCgnaG92ZXInLCBNb3ZlUmVjb2duaXplcik7XG4gIFJlY29nbml6ZXJzTWFwLnNldCgnbW92ZScsIE1vdmVSZWNvZ25pemVyKTtcbiAgUmVjb2duaXplcnNNYXAuc2V0KCdwaW5jaCcsIFBpbmNoUmVjb2duaXplcik7XG4gIFJlY29nbml6ZXJzTWFwLnNldCgnc2Nyb2xsJywgU2Nyb2xsUmVjb2duaXplcik7XG4gIFJlY29nbml6ZXJzTWFwLnNldCgnd2hlZWwnLCBXaGVlbFJlY29nbml6ZXIpO1xuICB2YXIgbWVyZ2VkQ29uZmlnID0gYnVpbGRDb21wbGV4Q29uZmlnKGNvbmZpZywgYWN0aW9ucyk7XG4gIHZhciBpbnRlcm5hbEhhbmRsZXJzID0ge307XG4gIGlmIChhY3Rpb25zLmhhcygnb25EcmFnJykpIGludGVybmFsSGFuZGxlcnMuZHJhZyA9IGluY2x1ZGVTdGFydEVuZEhhbmRsZXJzKGhhbmRsZXJzLCAnb25EcmFnJyk7XG4gIGlmIChhY3Rpb25zLmhhcygnb25XaGVlbCcpKSBpbnRlcm5hbEhhbmRsZXJzLndoZWVsID0gaW5jbHVkZVN0YXJ0RW5kSGFuZGxlcnMoaGFuZGxlcnMsICdvbldoZWVsJyk7XG4gIGlmIChhY3Rpb25zLmhhcygnb25TY3JvbGwnKSkgaW50ZXJuYWxIYW5kbGVycy5zY3JvbGwgPSBpbmNsdWRlU3RhcnRFbmRIYW5kbGVycyhoYW5kbGVycywgJ29uU2Nyb2xsJyk7XG4gIGlmIChhY3Rpb25zLmhhcygnb25Nb3ZlJykpIGludGVybmFsSGFuZGxlcnMubW92ZSA9IGluY2x1ZGVTdGFydEVuZEhhbmRsZXJzKGhhbmRsZXJzLCAnb25Nb3ZlJyk7XG4gIGlmIChhY3Rpb25zLmhhcygnb25QaW5jaCcpKSBpbnRlcm5hbEhhbmRsZXJzLnBpbmNoID0gaW5jbHVkZVN0YXJ0RW5kSGFuZGxlcnMoaGFuZGxlcnMsICdvblBpbmNoJyk7XG4gIGlmIChhY3Rpb25zLmhhcygnb25Ib3ZlcicpKSBpbnRlcm5hbEhhbmRsZXJzLmhvdmVyID0gaGFuZGxlcnMub25Ib3ZlcjtcbiAgcmV0dXJuIHVzZVJlY29nbml6ZXJzKGludGVybmFsSGFuZGxlcnMsIG1lcmdlZENvbmZpZywgbmF0aXZlSGFuZGxlcnMpO1xufVxuXG5mdW5jdGlvbiBpbmNsdWRlU3RhcnRFbmRIYW5kbGVycyhoYW5kbGVycywgaGFuZGxlcktleSkge1xuICB2YXIgc3RhcnRLZXkgPSBoYW5kbGVyS2V5ICsgJ1N0YXJ0JztcbiAgdmFyIGVuZEtleSA9IGhhbmRsZXJLZXkgKyAnRW5kJztcblxuICB2YXIgZm4gPSBmdW5jdGlvbiBmbihzdGF0ZSkge1xuICAgIHZhciBtZW1vID0gdW5kZWZpbmVkO1xuICAgIGlmIChzdGF0ZS5maXJzdCAmJiBzdGFydEtleSBpbiBoYW5kbGVycykgaGFuZGxlcnNbc3RhcnRLZXldKHN0YXRlKTtcbiAgICBpZiAoaGFuZGxlcktleSBpbiBoYW5kbGVycykgbWVtbyA9IGhhbmRsZXJzW2hhbmRsZXJLZXldKHN0YXRlKTtcbiAgICBpZiAoc3RhdGUubGFzdCAmJiBlbmRLZXkgaW4gaGFuZGxlcnMpIGhhbmRsZXJzW2VuZEtleV0oc3RhdGUpO1xuICAgIHJldHVybiBtZW1vO1xuICB9O1xuXG4gIHJldHVybiBmbjtcbn1cblxuZXhwb3J0IHsgYWRkViwgcnViYmVyYmFuZElmT3V0T2ZCb3VuZHMsIHN1YlYsIHVzZURyYWcsIHVzZUdlc3R1cmUsIHVzZUhvdmVyLCB1c2VNb3ZlLCB1c2VQaW5jaCwgdXNlU2Nyb2xsLCB1c2VXaGVlbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3R1c2VnZXN0dXJlLmVzbS5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=