(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-profile-profile-module"],{

/***/ "./node_modules/ngx-mask/fesm5/ngx-mask.js":
/*!*************************************************!*\
  !*** ./node_modules/ngx-mask/fesm5/ngx-mask.js ***!
  \*************************************************/
/*! exports provided: INITIAL_CONFIG, MaskApplierService, MaskDirective, MaskPipe, MaskService, NEW_CONFIG, NgxMaskModule, _configFactory, config, initialConfig, timeMasks, withoutValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CONFIG", function() { return INITIAL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskApplierService", function() { return MaskApplierService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskDirective", function() { return MaskDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskPipe", function() { return MaskPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskService", function() { return MaskService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_CONFIG", function() { return NEW_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaskModule", function() { return NgxMaskModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_configFactory", function() { return _configFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialConfig", function() { return initialConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeMasks", function() { return timeMasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withoutValidation", function() { return withoutValidation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IConfig() { }
if (false) {}
/** @type {?} */
var config = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('config');
/** @type {?} */
var NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NEW_CONFIG');
/** @type {?} */
var INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('INITIAL_CONFIG');
/** @type {?} */
var initialConfig = {
    suffix: '',
    prefix: '',
    thousandSeparator: ' ',
    decimalMarker: '.',
    clearIfNotMatch: false,
    showTemplate: false,
    showMaskTyped: false,
    placeHolderCharacter: '_',
    dropSpecialCharacters: true,
    hiddenInput: undefined,
    shownMaskExpression: '',
    separatorLimit: '',
    validation: true,
    // tslint:disable-next-line: quotemark
    specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"', "'"],
    patterns: {
        '0': {
            pattern: new RegExp('\\d'),
        },
        '9': {
            pattern: new RegExp('\\d'),
            optional: true,
        },
        X: {
            pattern: new RegExp('\\d'),
            symbol: '*',
        },
        A: {
            pattern: new RegExp('[a-zA-Z0-9]'),
        },
        S: {
            pattern: new RegExp('[a-zA-Z]'),
        },
        d: {
            pattern: new RegExp('\\d'),
        },
        m: {
            pattern: new RegExp('\\d'),
        },
        M: {
            pattern: new RegExp('\\d'),
        },
        H: {
            pattern: new RegExp('\\d'),
        },
        h: {
            pattern: new RegExp('\\d'),
        },
        s: {
            pattern: new RegExp('\\d'),
        },
    },
};
/** @type {?} */
var timeMasks = ['Hh:m0:s0', 'Hh:m0', 'm0:s0'];
/** @type {?} */
var withoutValidation = [
    'percent',
    'Hh',
    's0',
    'm0',
    'separator',
    'd0/M0/0000',
    'd0/M0',
    'd0',
    'M0',
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaskApplierService = /** @class */ (function () {
    function MaskApplierService(_config) {
        var _this = this;
        this._config = _config;
        this.maskExpression = '';
        this.actualValue = '';
        this.shownMaskExpression = '';
        this._formatWithSeparators = (/**
         * @param {?} str
         * @param {?} thousandSeparatorChar
         * @param {?} decimalChar
         * @param {?} precision
         * @return {?}
         */
        function (str, thousandSeparatorChar, decimalChar, precision) {
            /** @type {?} */
            var x = str.split(decimalChar);
            /** @type {?} */
            var decimals = x.length > 1 ? "" + decimalChar + x[1] : '';
            /** @type {?} */
            var res = x[0];
            /** @type {?} */
            var separatorLimit = _this.separatorLimit.replace(/\s/g, '');
            if (separatorLimit && +separatorLimit) {
                res = res.slice(0, separatorLimit.length);
            }
            /** @type {?} */
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(res)) {
                res = res.replace(rgx, '$1' + thousandSeparatorChar + '$2');
            }
            if (precision === undefined) {
                return res + decimals;
            }
            else if (precision === 0) {
                return res;
            }
            return res + decimals.substr(0, precision + 1);
        });
        this.percentage = (/**
         * @param {?} str
         * @return {?}
         */
        function (str) {
            return Number(str) >= 0 && Number(str) <= 100;
        });
        this.getPrecision = (/**
         * @param {?} maskExpression
         * @return {?}
         */
        function (maskExpression) {
            /** @type {?} */
            var x = maskExpression.split('.');
            if (x.length > 1) {
                return Number(x[x.length - 1]);
            }
            return Infinity;
        });
        this.checkInputPrecision = (/**
         * @param {?} inputValue
         * @param {?} precision
         * @param {?} decimalMarker
         * @return {?}
         */
        function (inputValue, precision, decimalMarker) {
            if (precision < Infinity) {
                /** @type {?} */
                var precisionRegEx = new RegExp(_this._charToRegExpExpression(decimalMarker) + ("\\d{" + precision + "}.*$"));
                /** @type {?} */
                var precisionMatch = inputValue.match(precisionRegEx);
                if (precisionMatch && precisionMatch[0].length - 1 > precision) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
                else if (precision === 0 && inputValue.endsWith(decimalMarker)) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
            }
            return inputValue;
        });
        this._shift = new Set();
        this.clearIfNotMatch = this._config.clearIfNotMatch;
        this.dropSpecialCharacters = this._config.dropSpecialCharacters;
        this.maskSpecialCharacters = this._config.specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.prefix = this._config.prefix;
        this.suffix = this._config.suffix;
        this.thousandSeparator = this._config.thousandSeparator;
        this.decimalMarker = this._config.decimalMarker;
        this.hiddenInput = this._config.hiddenInput;
        this.showMaskTyped = this._config.showMaskTyped;
        this.placeHolderCharacter = this._config.placeHolderCharacter;
        this.validation = this._config.validation;
        this.separatorLimit = this._config.separatorLimit;
    }
    /**
     * @param {?} inputValue
     * @param {?} maskAndPattern
     * @return {?}
     */
    MaskApplierService.prototype.applyMaskWithPattern = /**
     * @param {?} inputValue
     * @param {?} maskAndPattern
     * @return {?}
     */
    function (inputValue, maskAndPattern) {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(maskAndPattern, 2), mask = _a[0], customPattern = _a[1];
        this.customPattern = customPattern;
        return this.applyMask(inputValue, mask);
    };
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskApplierService.prototype.applyMask = /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = (/**
         * @return {?}
         */
        function () { }); }
        if (inputValue === undefined || inputValue === null || maskExpression === undefined) {
            return '';
        }
        /** @type {?} */
        var cursor = 0;
        /** @type {?} */
        var result = '';
        /** @type {?} */
        var multi = false;
        /** @type {?} */
        var backspaceShift = false;
        /** @type {?} */
        var shift = 1;
        /** @type {?} */
        var stepBack = false;
        if (inputValue.slice(0, this.prefix.length) === this.prefix) {
            inputValue = inputValue.slice(this.prefix.length, inputValue.length);
        }
        if (!!this.suffix && inputValue.endsWith(this.suffix)) {
            inputValue = inputValue.slice(0, inputValue.length - this.suffix.length);
        }
        /** @type {?} */
        var inputArray = inputValue.toString().split('');
        if (maskExpression === 'IP') {
            this.ipError = !!(inputArray.filter((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i === '.'; })).length < 3 && inputArray.length < 7);
            maskExpression = '099.099.099.099';
        }
        if (maskExpression.startsWith('percent')) {
            if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/)) {
                inputValue = this._stripToDecimal(inputValue);
                /** @type {?} */
                var precision = this.getPrecision(maskExpression);
                inputValue = this.checkInputPrecision(inputValue, precision, '.');
            }
            if (inputValue.indexOf('.') > 0 && !this.percentage(inputValue.substring(0, inputValue.indexOf('.')))) {
                /** @type {?} */
                var base = inputValue.substring(0, inputValue.indexOf('.') - 1);
                inputValue = "" + base + inputValue.substring(inputValue.indexOf('.'), inputValue.length);
            }
            if (this.percentage(inputValue)) {
                result = inputValue;
            }
            else {
                result = inputValue.substring(0, inputValue.length - 1);
            }
        }
        else if (maskExpression.startsWith('separator')) {
            if (inputValue.match('[wа-яА-Я]') ||
                inputValue.match('[ЁёА-я]') ||
                inputValue.match('[a-z]|[A-Z]') ||
                inputValue.match(/[-@#!$%\\^&*()_£¬'+|~=`{}\[\]:";<>.?\/]/) ||
                inputValue.match('[^A-Za-z0-9,]')) {
                inputValue = this._stripToDecimal(inputValue);
            }
            inputValue =
                inputValue.length > 1 && inputValue[0] === '0' && inputValue[1] !== this.decimalMarker
                    ? inputValue.slice(1, inputValue.length)
                    : inputValue;
            // TODO: we had different rexexps here for the different cases... but tests dont seam to bother - check this
            //  separator: no COMMA, dot-sep: no SPACE, COMMA OK, comma-sep: no SPACE, COMMA OK
            /** @type {?} */
            var thousandSeperatorCharEscaped = this._charToRegExpExpression(this.thousandSeparator);
            /** @type {?} */
            var decimalMarkerEscaped = this._charToRegExpExpression(this.decimalMarker);
            /** @type {?} */
            var invalidChars = '@#!$%^&*()_+|~=`{}\\[\\]:\\s,";<>?\\/'
                .replace(thousandSeperatorCharEscaped, '')
                .replace(decimalMarkerEscaped, '');
            /** @type {?} */
            var invalidCharRegexp = new RegExp('[' + invalidChars + ']');
            if (inputValue.match(invalidCharRegexp)) {
                inputValue = inputValue.substring(0, inputValue.length - 1);
            }
            /** @type {?} */
            var precision = this.getPrecision(maskExpression);
            inputValue = this.checkInputPrecision(inputValue, precision, this.decimalMarker);
            /** @type {?} */
            var strForSep = inputValue.replace(new RegExp(thousandSeperatorCharEscaped, 'g'), '');
            result = this._formatWithSeparators(strForSep, this.thousandSeparator, this.decimalMarker, precision);
            /** @type {?} */
            var commaShift = result.indexOf(',') - inputValue.indexOf(',');
            /** @type {?} */
            var shiftStep = result.length - inputValue.length;
            if (shiftStep > 0 && result[position] !== ',') {
                backspaceShift = true;
                /** @type {?} */
                var _shift = 0;
                do {
                    this._shift.add(position + _shift);
                    _shift++;
                } while (_shift < shiftStep);
            }
            else if ((commaShift !== 0 && position > 0 && !(result.indexOf(',') >= position && position > 3)) ||
                (!(result.indexOf('.') >= position && position > 3) && shiftStep <= 0)) {
                this._shift.clear();
                backspaceShift = true;
                shift = shiftStep;
                position += shiftStep;
                this._shift.add(position);
            }
            else {
                this._shift.clear();
            }
        }
        else {
            for (
            // tslint:disable-next-line
            var i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = inputArray[i]) {
                if (cursor === maskExpression.length) {
                    break;
                }
                if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '?') {
                    result += inputSymbol;
                    cursor += 2;
                }
                else if (maskExpression[cursor + 1] === '*' &&
                    multi &&
                    this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                    result += inputSymbol;
                    cursor += 3;
                    multi = false;
                }
                else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '*') {
                    result += inputSymbol;
                    multi = true;
                }
                else if (maskExpression[cursor + 1] === '?' &&
                    this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                    result += inputSymbol;
                    cursor += 3;
                }
                else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) ||
                    (this.hiddenInput &&
                        this.maskAvailablePatterns[maskExpression[cursor]] &&
                        this.maskAvailablePatterns[maskExpression[cursor]].symbol === inputSymbol)) {
                    if (maskExpression[cursor] === 'H') {
                        if (Number(inputSymbol) > 2) {
                            cursor += 1;
                            /** @type {?} */
                            var shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'h') {
                        if (result === '2' && Number(inputSymbol) > 3) {
                            cursor += 1;
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'm') {
                        if (Number(inputSymbol) > 5) {
                            cursor += 1;
                            /** @type {?} */
                            var shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 's') {
                        if (Number(inputSymbol) > 5) {
                            cursor += 1;
                            /** @type {?} */
                            var shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    /** @type {?} */
                    var daysCount = 31;
                    if (maskExpression[cursor] === 'd') {
                        if (Number(inputValue.slice(cursor, cursor + 2)) > daysCount || inputValue[cursor + 1] === '/') {
                            cursor += 1;
                            /** @type {?} */
                            var shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'M') {
                        /** @type {?} */
                        var monthsCount = 12;
                        // mask without day
                        /** @type {?} */
                        var withoutDays = cursor === 0 &&
                            (Number(inputSymbol) > 2 ||
                                Number(inputValue.slice(cursor, cursor + 2)) > monthsCount ||
                                inputValue[cursor + 1] === '/');
                        // day<10 && month<12 for input
                        /** @type {?} */
                        var day1monthInput = inputValue.slice(cursor - 3, cursor - 1).includes('/') &&
                            ((inputValue[cursor - 2] === '/' &&
                                (Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount && inputValue[cursor] !== '/')) ||
                                inputValue[cursor] === '/' ||
                                ((inputValue[cursor - 3] === '/' &&
                                    (Number(inputValue.slice(cursor - 2, cursor)) > monthsCount && inputValue[cursor - 1] !== '/')) ||
                                    inputValue[cursor - 1] === '/'));
                        // 10<day<31 && month<12 for input
                        /** @type {?} */
                        var day2monthInput = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount &&
                            !inputValue.slice(cursor - 3, cursor - 1).includes('/') &&
                            inputValue[cursor - 1] === '/' &&
                            (Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/');
                        // day<10 && month<12 for paste whole data
                        /** @type {?} */
                        var day1monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) > daysCount &&
                            !inputValue.slice(cursor - 3, cursor - 1).includes('/') &&
                            (!inputValue.slice(cursor - 2, cursor).includes('/') &&
                                Number(inputValue.slice(cursor - 2, cursor)) > monthsCount);
                        // 10<day<31 && month<12 for paste whole data
                        /** @type {?} */
                        var day2monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount &&
                            !inputValue.slice(cursor - 3, cursor - 1).includes('/') &&
                            inputValue[cursor - 1] !== '/' &&
                            Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount;
                        if (withoutDays || day1monthInput || day2monthInput || day1monthPaste || day2monthPaste) {
                            cursor += 1;
                            /** @type {?} */
                            var shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    result += inputSymbol;
                    cursor++;
                }
                else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                    result += maskExpression[cursor];
                    cursor++;
                    /** @type {?} */
                    var shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                    this._shift.add(shiftStep + this.prefix.length || 0);
                    i--;
                }
                else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1 &&
                    this.maskAvailablePatterns[maskExpression[cursor]] &&
                    this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                    if (!!inputArray[cursor] && maskExpression !== '099.099.099.099') {
                        result += inputArray[cursor];
                    }
                    cursor++;
                    i--;
                }
                else if (this.maskExpression[cursor + 1] === '*' &&
                    this._findSpecialChar(this.maskExpression[cursor + 2]) &&
                    this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] &&
                    multi) {
                    cursor += 3;
                    result += inputSymbol;
                }
                else if (this.maskExpression[cursor + 1] === '?' &&
                    this._findSpecialChar(this.maskExpression[cursor + 2]) &&
                    this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] &&
                    multi) {
                    cursor += 3;
                    result += inputSymbol;
                }
                else if (this.showMaskTyped && this.maskSpecialCharacters.indexOf(inputSymbol) < 0 && inputSymbol !== this.placeHolderCharacter) {
                    stepBack = true;
                }
            }
        }
        if (result.length + 1 === maskExpression.length &&
            this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
            result += maskExpression[maskExpression.length - 1];
        }
        /** @type {?} */
        var newPosition = position + 1;
        while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
        }
        /** @type {?} */
        var actualShift = this._shift.has(position) ? shift : 0;
        if (stepBack) {
            actualShift--;
        }
        cb(actualShift, backspaceShift);
        if (shift < 0) {
            this._shift.clear();
        }
        /** @type {?} */
        var res = "" + this.prefix + result + this.suffix;
        if (result.length === 0) {
            res = "" + this.prefix + result;
        }
        return res;
    };
    /**
     * @param {?} inputSymbol
     * @return {?}
     */
    MaskApplierService.prototype._findSpecialChar = /**
     * @param {?} inputSymbol
     * @return {?}
     */
    function (inputSymbol) {
        return this.maskSpecialCharacters.find((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return val === inputSymbol; }));
    };
    /**
     * @protected
     * @param {?} inputSymbol
     * @param {?} maskSymbol
     * @return {?}
     */
    MaskApplierService.prototype._checkSymbolMask = /**
     * @protected
     * @param {?} inputSymbol
     * @param {?} maskSymbol
     * @return {?}
     */
    function (inputSymbol, maskSymbol) {
        this.maskAvailablePatterns = this.customPattern ? this.customPattern : this.maskAvailablePatterns;
        return (this.maskAvailablePatterns[maskSymbol] &&
            this.maskAvailablePatterns[maskSymbol].pattern &&
            this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol));
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    MaskApplierService.prototype._stripToDecimal = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str
            .split('')
            .filter((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.match('\\d') || i === '.' || i === ','; }))
            .join('');
    };
    /**
     * @private
     * @param {?} char
     * @return {?}
     */
    MaskApplierService.prototype._charToRegExpExpression = /**
     * @private
     * @param {?} char
     * @return {?}
     */
    function (char) {
        /** @type {?} */
        var charsToEscape = '[\\^$.|?*+()';
        return char === ' ' ? '\\s' : charsToEscape.indexOf(char) >= 0 ? '\\' + char : char;
    };
    MaskApplierService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    MaskApplierService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [config,] }] }
    ]; };
    return MaskApplierService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaskService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MaskService, _super);
    function MaskService(document, _config, _elementRef, _renderer) {
        var _this = _super.call(this, _config) || this;
        _this.document = document;
        _this._config = _config;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this.maskExpression = '';
        _this.isNumberValue = false;
        _this.showMaskTyped = false;
        _this.placeHolderCharacter = '_';
        _this.maskIsShown = '';
        _this.selStart = null;
        _this.selEnd = null;
        _this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        _this._formElement = _this._elementRef.nativeElement;
        return _this;
    }
    // tslint:disable-next-line:cyclomatic-complexity
    // tslint:disable-next-line:cyclomatic-complexity
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskService.prototype.applyMask = 
    // tslint:disable-next-line:cyclomatic-complexity
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (inputValue, maskExpression, position, cb) {
        var _this = this;
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = (/**
         * @return {?}
         */
        function () { }); }
        if (!maskExpression) {
            return inputValue;
        }
        this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';
        if (this.maskExpression === 'IP' && this.showMaskTyped) {
            this.maskIsShown = this.showMaskInInput(inputValue || '#');
        }
        if (!inputValue && this.showMaskTyped) {
            this.formControlResult(this.prefix);
            return this.prefix + this.maskIsShown;
        }
        /** @type {?} */
        var getSymbol = !!inputValue && typeof this.selStart === 'number' ? inputValue[this.selStart] : '';
        /** @type {?} */
        var newInputValue = '';
        if (this.hiddenInput !== undefined) {
            /** @type {?} */
            var actualResult = this.actualValue.split('');
            // tslint:disable no-unused-expression
            inputValue !== '' && actualResult.length
                ? typeof this.selStart === 'number' && typeof this.selEnd === 'number'
                    ? inputValue.length > actualResult.length
                        ? actualResult.splice(this.selStart, 0, getSymbol)
                        : inputValue.length < actualResult.length
                            ? actualResult.length - inputValue.length === 1
                                ? actualResult.splice(this.selStart - 1, 1)
                                : actualResult.splice(this.selStart, this.selEnd - this.selStart)
                            : null
                    : null
                : (actualResult = []);
            // tslint:enable no-unused-expression
            newInputValue = this.actualValue.length ? this.shiftTypedSymbols(actualResult.join('')) : inputValue;
        }
        newInputValue = Boolean(newInputValue) && newInputValue.length ? newInputValue : inputValue;
        /** @type {?} */
        var result = _super.prototype.applyMask.call(this, newInputValue, maskExpression, position, cb);
        this.actualValue = this.getActualValue(result);
        // handle some separator implications:
        // a.) adjust decimalMarker default (. -> ,) if thousandSeparator is a dot
        if (this.thousandSeparator === '.' && this.decimalMarker === '.') {
            this.decimalMarker = ',';
        }
        // b) remove decimal marker from list of special characters to mask
        if (this.maskExpression.startsWith('separator') && this.dropSpecialCharacters === true) {
            this.maskSpecialCharacters = this.maskSpecialCharacters.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item !== _this.decimalMarker; }));
        }
        this.formControlResult(result);
        if (!this.showMaskTyped) {
            if (this.hiddenInput) {
                return result && result.length ? this.hideInput(result, this.maskExpression) : result;
            }
            return result;
        }
        /** @type {?} */
        var resLen = result.length;
        /** @type {?} */
        var prefNmask = this.prefix + this.maskIsShown;
        return result + (this.maskExpression === 'IP' ? prefNmask : prefNmask.slice(resLen));
    };
    /**
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskService.prototype.applyValueChanges = /**
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = (/**
         * @return {?}
         */
        function () { }); }
        this._formElement.value = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
        if (this._formElement === this.document.activeElement) {
            return;
        }
        this.clearIfNotMatchFn();
    };
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @return {?}
     */
    MaskService.prototype.hideInput = /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @return {?}
     */
    function (inputValue, maskExpression) {
        var _this = this;
        return inputValue
            .split('')
            .map((/**
         * @param {?} curr
         * @param {?} index
         * @return {?}
         */
        function (curr, index) {
            if (_this.maskAvailablePatterns &&
                _this.maskAvailablePatterns[maskExpression[index]] &&
                _this.maskAvailablePatterns[maskExpression[index]].symbol) {
                return _this.maskAvailablePatterns[maskExpression[index]].symbol;
            }
            return curr;
        }))
            .join('');
    };
    // this function is not necessary, it checks result against maskExpression
    // this function is not necessary, it checks result against maskExpression
    /**
     * @param {?} res
     * @return {?}
     */
    MaskService.prototype.getActualValue = 
    // this function is not necessary, it checks result against maskExpression
    /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        var _this = this;
        /** @type {?} */
        var compare = res
            .split('')
            .filter((/**
         * @param {?} symbol
         * @param {?} i
         * @return {?}
         */
        function (symbol, i) {
            return _this._checkSymbolMask(symbol, _this.maskExpression[i]) ||
                (_this.maskSpecialCharacters.includes(_this.maskExpression[i]) && symbol === _this.maskExpression[i]);
        }));
        if (compare.join('') === res) {
            return compare.join('');
        }
        return res;
    };
    /**
     * @param {?} inputValue
     * @return {?}
     */
    MaskService.prototype.shiftTypedSymbols = /**
     * @param {?} inputValue
     * @return {?}
     */
    function (inputValue) {
        var _this = this;
        /** @type {?} */
        var symbolToReplace = '';
        /** @type {?} */
        var newInputValue = (inputValue &&
            inputValue.split('').map((/**
             * @param {?} currSymbol
             * @param {?} index
             * @return {?}
             */
            function (currSymbol, index) {
                if (_this.maskSpecialCharacters.includes(inputValue[index + 1]) &&
                    inputValue[index + 1] !== _this.maskExpression[index + 1]) {
                    symbolToReplace = currSymbol;
                    return inputValue[index + 1];
                }
                if (symbolToReplace.length) {
                    /** @type {?} */
                    var replaceSymbol = symbolToReplace;
                    symbolToReplace = '';
                    return replaceSymbol;
                }
                return currSymbol;
            }))) ||
            [];
        return newInputValue.join('');
    };
    /**
     * @param {?=} inputVal
     * @return {?}
     */
    MaskService.prototype.showMaskInInput = /**
     * @param {?=} inputVal
     * @return {?}
     */
    function (inputVal) {
        if (this.showMaskTyped && !!this.shownMaskExpression) {
            if (this.maskExpression.length !== this.shownMaskExpression.length) {
                throw new Error('Mask expression must match mask placeholder length');
            }
            else {
                return this.shownMaskExpression;
            }
        }
        else if (this.showMaskTyped) {
            if (inputVal) {
                return this._checkForIp(inputVal);
            }
            return this.maskExpression.replace(/\w/g, this.placeHolderCharacter);
        }
        return '';
    };
    /**
     * @return {?}
     */
    MaskService.prototype.clearIfNotMatchFn = /**
     * @return {?}
     */
    function () {
        if (this.clearIfNotMatch &&
            this.prefix.length + this.maskExpression.length + this.suffix.length !==
                this._formElement.value.replace(/_/g, '').length) {
            this.formElementProperty = ['value', ''];
            this.applyMask(this._formElement.value, this.maskExpression);
        }
    };
    Object.defineProperty(MaskService.prototype, "formElementProperty", {
        set: /**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), name = _b[0], value = _b[1];
            this._renderer.setProperty(this._formElement, name, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} mask
     * @return {?}
     */
    MaskService.prototype.checkSpecialCharAmount = /**
     * @param {?} mask
     * @return {?}
     */
    function (mask) {
        var _this = this;
        /** @type {?} */
        var chars = mask.split('').filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this._findSpecialChar(item); }));
        return chars.length;
    };
    /**
     * @private
     * @param {?} inputVal
     * @return {?}
     */
    MaskService.prototype._checkForIp = /**
     * @private
     * @param {?} inputVal
     * @return {?}
     */
    function (inputVal) {
        if (inputVal === '#') {
            return this.placeHolderCharacter + "." + this.placeHolderCharacter + "." + this.placeHolderCharacter + "." + this.placeHolderCharacter;
        }
        /** @type {?} */
        var arr = [];
        for (var i = 0; i < inputVal.length; i++) {
            if (inputVal[i].match('\\d')) {
                arr.push(inputVal[i]);
            }
        }
        if (arr.length <= 3) {
            return this.placeHolderCharacter + "." + this.placeHolderCharacter + "." + this.placeHolderCharacter;
        }
        if (arr.length > 3 && arr.length <= 6) {
            return this.placeHolderCharacter + "." + this.placeHolderCharacter;
        }
        if (arr.length > 6 && arr.length <= 9) {
            return this.placeHolderCharacter;
        }
        if (arr.length > 9 && arr.length <= 12) {
            return '';
        }
        return '';
    };
    /**
     * @private
     * @param {?} inputValue
     * @return {?}
     */
    MaskService.prototype.formControlResult = /**
     * @private
     * @param {?} inputValue
     * @return {?}
     */
    function (inputValue) {
        if (Array.isArray(this.dropSpecialCharacters)) {
            this.onChange(this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.dropSpecialCharacters));
        }
        else if (this.dropSpecialCharacters) {
            this.onChange(this._checkSymbols(inputValue));
        }
        else {
            this.onChange(this._removeSuffix(this._removePrefix(inputValue)));
        }
    };
    /**
     * @private
     * @param {?} value
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    MaskService.prototype._removeMask = /**
     * @private
     * @param {?} value
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    function (value, specialCharactersForRemove) {
        return value ? value.replace(this._regExpForRemove(specialCharactersForRemove), '') : value;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MaskService.prototype._removePrefix = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.prefix) {
            return value;
        }
        return value ? value.replace(this.prefix, '') : value;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MaskService.prototype._removeSuffix = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.suffix) {
            return value;
        }
        return value ? value.replace(this.suffix, '') : value;
    };
    /**
     * @private
     * @param {?} result
     * @return {?}
     */
    MaskService.prototype._retrieveSeparatorValue = /**
     * @private
     * @param {?} result
     * @return {?}
     */
    function (result) {
        return this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters);
    };
    /**
     * @private
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    MaskService.prototype._regExpForRemove = /**
     * @private
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    function (specialCharactersForRemove) {
        return new RegExp(specialCharactersForRemove.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return "\\" + item; })).join('|'), 'gi');
    };
    /**
     * @private
     * @param {?} result
     * @return {?}
     */
    MaskService.prototype._checkSymbols = /**
     * @private
     * @param {?} result
     * @return {?}
     */
    function (result) {
        if (result === '') {
            return result;
        }
        /** @type {?} */
        var separatorPrecision = this._retrieveSeparatorPrecision(this.maskExpression);
        /** @type {?} */
        var separatorValue = this._retrieveSeparatorValue(result);
        if (this.decimalMarker !== '.') {
            separatorValue = separatorValue.replace(this.decimalMarker, '.');
        }
        if (this.isNumberValue) {
            if (separatorPrecision) {
                if (result === this.decimalMarker) {
                    return null;
                }
                return this._checkPrecision(this.maskExpression, separatorValue);
            }
            else {
                return Number(separatorValue);
            }
        }
        else {
            return separatorValue;
        }
    };
    // TODO should think about helpers or separting decimal precision to own property
    // TODO should think about helpers or separting decimal precision to own property
    /**
     * @private
     * @param {?} maskExpretion
     * @return {?}
     */
    MaskService.prototype._retrieveSeparatorPrecision = 
    // TODO should think about helpers or separting decimal precision to own property
    /**
     * @private
     * @param {?} maskExpretion
     * @return {?}
     */
    function (maskExpretion) {
        /** @type {?} */
        var matcher = maskExpretion.match(new RegExp("^separator\\.([^d]*)"));
        return matcher ? Number(matcher[1]) : null;
    };
    /**
     * @private
     * @param {?} separatorExpression
     * @param {?} separatorValue
     * @return {?}
     */
    MaskService.prototype._checkPrecision = /**
     * @private
     * @param {?} separatorExpression
     * @param {?} separatorValue
     * @return {?}
     */
    function (separatorExpression, separatorValue) {
        if (separatorExpression.indexOf('2') > 0) {
            return Number(separatorValue).toFixed(2);
        }
        return Number(separatorValue);
    };
    MaskService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    MaskService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [config,] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    return MaskService;
}(MaskApplierService));
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable deprecation
var MaskDirective = /** @class */ (function () {
    function MaskDirective(document, _maskService, _config) {
        this.document = document;
        this._maskService = _maskService;
        this._config = _config;
        this.maskExpression = '';
        this.specialCharacters = [];
        this.patterns = {};
        this.prefix = '';
        this.suffix = '';
        this.thousandSeparator = ' ';
        this.decimalMarker = '.';
        this.dropSpecialCharacters = null;
        this.hiddenInput = null;
        this.showMaskTyped = null;
        this.placeHolderCharacter = null;
        this.shownMaskExpression = null;
        this.showTemplate = null;
        this.clearIfNotMatch = null;
        this.validation = null;
        this.separatorLimit = null;
        this._maskValue = '';
        this._position = null;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouch = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MaskDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var maskExpression = changes.maskExpression, specialCharacters = changes.specialCharacters, patterns = changes.patterns, prefix = changes.prefix, suffix = changes.suffix, thousandSeparator = changes.thousandSeparator, decimalMarker = changes.decimalMarker, dropSpecialCharacters = changes.dropSpecialCharacters, hiddenInput = changes.hiddenInput, showMaskTyped = changes.showMaskTyped, placeHolderCharacter = changes.placeHolderCharacter, shownMaskExpression = changes.shownMaskExpression, showTemplate = changes.showTemplate, clearIfNotMatch = changes.clearIfNotMatch, validation = changes.validation, separatorLimit = changes.separatorLimit;
        if (maskExpression) {
            this._maskValue = changes.maskExpression.currentValue || '';
        }
        if (specialCharacters) {
            if (!specialCharacters.currentValue || !Array.isArray(specialCharacters.currentValue)) {
                return;
            }
            else {
                this._maskService.maskSpecialCharacters = changes.specialCharacters.currentValue || [];
            }
        }
        // Only overwrite the mask available patterns if a pattern has actually been passed in
        if (patterns && patterns.currentValue) {
            this._maskService.maskAvailablePatterns = patterns.currentValue;
        }
        if (prefix) {
            this._maskService.prefix = prefix.currentValue;
        }
        if (suffix) {
            this._maskService.suffix = suffix.currentValue;
        }
        if (thousandSeparator) {
            this._maskService.thousandSeparator = thousandSeparator.currentValue;
        }
        if (decimalMarker) {
            this._maskService.decimalMarker = decimalMarker.currentValue;
        }
        if (dropSpecialCharacters) {
            this._maskService.dropSpecialCharacters = dropSpecialCharacters.currentValue;
        }
        if (hiddenInput) {
            this._maskService.hiddenInput = hiddenInput.currentValue;
        }
        if (showMaskTyped) {
            this._maskService.showMaskTyped = showMaskTyped.currentValue;
        }
        if (placeHolderCharacter) {
            this._maskService.placeHolderCharacter = placeHolderCharacter.currentValue;
        }
        if (shownMaskExpression) {
            this._maskService.shownMaskExpression = shownMaskExpression.currentValue;
        }
        if (showTemplate) {
            this._maskService.showTemplate = showTemplate.currentValue;
        }
        if (clearIfNotMatch) {
            this._maskService.clearIfNotMatch = clearIfNotMatch.currentValue;
        }
        if (validation) {
            this._maskService.validation = validation.currentValue;
        }
        if (separatorLimit) {
            this._maskService.separatorLimit = separatorLimit.currentValue;
        }
        this._applyMask();
    };
    // tslint:disable-next-line: cyclomatic-complexity
    // tslint:disable-next-line: cyclomatic-complexity
    /**
     * @param {?} __0
     * @return {?}
     */
    MaskDirective.prototype.validate = 
    // tslint:disable-next-line: cyclomatic-complexity
    /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var value = _a.value;
        if (!this._maskService.validation) {
            return null;
        }
        if (this._maskService.ipError) {
            return { 'Mask error': true };
        }
        if (this._maskValue.startsWith('separator')) {
            return null;
        }
        if (withoutValidation.includes(this._maskValue)) {
            return null;
        }
        if (this._maskService.clearIfNotMatch) {
            return null;
        }
        if (timeMasks.includes(this._maskValue)) {
            return this._validateTime(value);
        }
        if (value && value.toString().length >= 1) {
            /** @type {?} */
            var counterOfOpt = 0;
            var _loop_1 = function (key) {
                if (this_1._maskService.maskAvailablePatterns[key].optional &&
                    this_1._maskService.maskAvailablePatterns[key].optional === true) {
                    if (this_1._maskValue.indexOf(key) !== this_1._maskValue.lastIndexOf(key)) {
                        /** @type {?} */
                        var opt = this_1._maskValue
                            .split('')
                            .filter((/**
                         * @param {?} i
                         * @return {?}
                         */
                        function (i) { return i === key; }))
                            .join('');
                        counterOfOpt += opt.length;
                    }
                    else if (this_1._maskValue.indexOf(key) !== -1) {
                        counterOfOpt++;
                    }
                    if (this_1._maskValue.indexOf(key) !== -1 && value.toString().length >= this_1._maskValue.indexOf(key)) {
                        return { value: null };
                    }
                    if (counterOfOpt === this_1._maskValue.length) {
                        return { value: null };
                    }
                }
            };
            var this_1 = this;
            for (var key in this._maskService.maskAvailablePatterns) {
                var state_1 = _loop_1(key);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            if (this._maskValue.indexOf('{') === 1 &&
                value.toString().length === this._maskValue.length + Number(this._maskValue.split('{')[1].split('}')[0]) - 4) {
                return null;
            }
            if (this._maskValue.indexOf('*') === 1 || this._maskValue.indexOf('?') === 1) {
                return null;
            }
            else if ((this._maskValue.indexOf('*') > 1 && value.toString().length < this._maskValue.indexOf('*')) ||
                (this._maskValue.indexOf('?') > 1 && value.toString().length < this._maskValue.indexOf('?')) ||
                this._maskValue.indexOf('{') === 1) {
                return { 'Mask error': true };
            }
            if (this._maskValue.indexOf('*') === -1 || this._maskValue.indexOf('?') === -1) {
                /** @type {?} */
                var length_1 = this._maskService.dropSpecialCharacters
                    ? this._maskValue.length - this._maskService.checkSpecialCharAmount(this._maskValue) - counterOfOpt
                    : this._maskValue.length - counterOfOpt;
                if (value.toString().length < length_1) {
                    return { 'Mask error': true };
                }
            }
        }
        return null;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.onInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var el = (/** @type {?} */ (e.target));
        this._inputValue = el.value;
        if (!this._maskValue) {
            this.onChange(el.value);
            return;
        }
        /** @type {?} */
        var position = el.selectionStart === 1
            ? ((/** @type {?} */ (el.selectionStart))) + this._maskService.prefix.length
            : ((/** @type {?} */ (el.selectionStart)));
        /** @type {?} */
        var caretShift = 0;
        /** @type {?} */
        var backspaceShift = false;
        this._maskService.applyValueChanges(position, (/**
         * @param {?} shift
         * @param {?} _backspaceShift
         * @return {?}
         */
        function (shift, _backspaceShift) {
            caretShift = shift;
            backspaceShift = _backspaceShift;
        }));
        // only set the selection if the element is active
        if (this.document.activeElement !== el) {
            return;
        }
        this._position = this._position === 1 && this._inputValue.length === 1 ? null : this._position;
        /** @type {?} */
        var positionToApply = this._position
            ? this._inputValue.length + position + caretShift
            : position + (this._code === 'Backspace' && !backspaceShift ? 0 : caretShift);
        el.setSelectionRange(positionToApply, positionToApply);
        if ((this.maskExpression.includes('H') || this.maskExpression.includes('M')) && caretShift === 0) {
            el.setSelectionRange(((/** @type {?} */ (el.selectionStart))) + 1, ((/** @type {?} */ (el.selectionStart))) + 1);
        }
        this._position = null;
    };
    /**
     * @return {?}
     */
    MaskDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this._maskService.clearIfNotMatchFn();
        this.onTouch();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.onFocus = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var el = (/** @type {?} */ (e.target));
        /** @type {?} */
        var posStart = 0;
        /** @type {?} */
        var posEnd = 0;
        if (el !== null &&
            el.selectionStart !== null &&
            el.selectionStart === el.selectionEnd &&
            el.selectionStart > this._maskService.prefix.length &&
            // tslint:disable-next-line
            ((/** @type {?} */ (e))).keyCode !== 38)
            if (this._maskService.showMaskTyped) {
                // We are showing the mask in the input
                this._maskService.maskIsShown = this._maskService.showMaskInInput();
                if (el.setSelectionRange && this._maskService.prefix + this._maskService.maskIsShown === el.value) {
                    // the input ONLY contains the mask, so position the cursor at the start
                    el.focus();
                    el.setSelectionRange(posStart, posEnd);
                }
                else {
                    // the input contains some characters already
                    if (el.selectionStart > this._maskService.actualValue.length) {
                        // if the user clicked beyond our value's length, position the cursor at the end of our value
                        el.setSelectionRange(this._maskService.actualValue.length, this._maskService.actualValue.length);
                    }
                }
            }
        /** @type {?} */
        var nextValue = !el.value || el.value === this._maskService.prefix
            ? this._maskService.prefix + this._maskService.maskIsShown
            : el.value;
        /** Fix of cursor position jumping to end in most browsers no matter where cursor is inserted onFocus */
        if (el.value !== nextValue) {
            el.value = nextValue;
        }
        /** fix of cursor position with prefix when mouse click occur */
        if ((((/** @type {?} */ (el.selectionStart))) || ((/** @type {?} */ (el.selectionEnd)))) <= this._maskService.prefix.length) {
            el.selectionStart = this._maskService.prefix.length;
            return;
        }
    };
    // tslint:disable-next-line: cyclomatic-complexity
    // tslint:disable-next-line: cyclomatic-complexity
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.onKeyDown = 
    // tslint:disable-next-line: cyclomatic-complexity
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this._code = e.code ? e.code : e.key;
        /** @type {?} */
        var el = (/** @type {?} */ (e.target));
        this._inputValue = el.value;
        if (e.keyCode === 38) {
            e.preventDefault();
        }
        if (e.keyCode === 37 || e.keyCode === 8 || e.keyCode === 46) {
            if (e.keyCode === 8 && el.value.length === 0) {
                el.selectionStart = el.selectionEnd;
            }
            if (e.keyCode === 8 && ((/** @type {?} */ (el.selectionStart))) !== 0) {
                // If specialChars is false, (shouldn't ever happen) then set to the defaults
                this.specialCharacters = this.specialCharacters || this._config.specialCharacters;
                if (this.prefix.length > 1 && ((/** @type {?} */ (el.selectionStart))) <= this.prefix.length) {
                    el.setSelectionRange(this.prefix.length, this.prefix.length);
                }
                else {
                    if (this._inputValue.length !== ((/** @type {?} */ (el.selectionStart))) &&
                        ((/** @type {?} */ (el.selectionStart))) !== 1) {
                        while (this.specialCharacters.includes(this._inputValue[((/** @type {?} */ (el.selectionStart))) - 1].toString()) &&
                            ((this.prefix.length >= 1 && ((/** @type {?} */ (el.selectionStart))) > this.prefix.length) ||
                                this.prefix.length === 0)) {
                            el.setSelectionRange(((/** @type {?} */ (el.selectionStart))) - 1, ((/** @type {?} */ (el.selectionStart))) - 1);
                        }
                    }
                    this.suffixCheckOnPressDelete(e.keyCode, el);
                }
            }
            this.suffixCheckOnPressDelete(e.keyCode, el);
            if (this._maskService.prefix.length &&
                ((/** @type {?} */ (el.selectionStart))) <= this._maskService.prefix.length &&
                ((/** @type {?} */ (el.selectionEnd))) <= this._maskService.prefix.length) {
                e.preventDefault();
            }
            /** @type {?} */
            var cursorStart = el.selectionStart;
            // this.onFocus(e);
            if (e.keyCode === 8 &&
                !el.readOnly &&
                cursorStart === 0 &&
                el.selectionEnd === el.value.length &&
                el.value.length !== 0) {
                this._position = this._maskService.prefix ? this._maskService.prefix.length : 0;
                this._maskService.applyMask(this._maskService.prefix, this._maskService.maskExpression, this._position);
            }
        }
        if (!!this.suffix &&
            this.suffix.length > 1 &&
            this._inputValue.length - this.suffix.length < ((/** @type {?} */ (el.selectionStart)))) {
            el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
        }
        this._maskService.selStart = el.selectionStart;
        this._maskService.selEnd = el.selectionEnd;
    };
    /** It writes the value in the input */
    /**
     * It writes the value in the input
     * @param {?} inputValue
     * @return {?}
     */
    MaskDirective.prototype.writeValue = /**
     * It writes the value in the input
     * @param {?} inputValue
     * @return {?}
     */
    function (inputValue) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (inputValue === undefined) {
                    inputValue = '';
                }
                if (typeof inputValue === 'number') {
                    inputValue = String(inputValue);
                    inputValue = this.decimalMarker !== '.' ? inputValue.replace('.', this.decimalMarker) : inputValue;
                    this._maskService.isNumberValue = true;
                }
                (inputValue && this._maskService.maskExpression) ||
                    (this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped))
                    ? (this._maskService.formElementProperty = [
                        'value',
                        this._maskService.applyMask(inputValue, this._maskService.maskExpression),
                    ])
                    : (this._maskService.formElementProperty = ['value', inputValue]);
                this._inputValue = inputValue;
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaskDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
        this._maskService.onChange = this.onChange;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaskDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    /**
     * @param {?} keyCode
     * @param {?} el
     * @return {?}
     */
    MaskDirective.prototype.suffixCheckOnPressDelete = /**
     * @param {?} keyCode
     * @param {?} el
     * @return {?}
     */
    function (keyCode, el) {
        if (keyCode === 46 && this.suffix.length > 0) {
            if (this._inputValue.length - this.suffix.length <= ((/** @type {?} */ (el.selectionStart)))) {
                el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
            }
        }
        if (keyCode === 8) {
            if (this.suffix.length > 1 &&
                this._inputValue.length - this.suffix.length < ((/** @type {?} */ (el.selectionStart)))) {
                el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
            }
            if (this.suffix.length === 1 && this._inputValue.length === ((/** @type {?} */ (el.selectionStart)))) {
                el.setSelectionRange(((/** @type {?} */ (el.selectionStart))) - 1, ((/** @type {?} */ (el.selectionStart))) - 1);
            }
        }
    };
    /** It disables the input element */
    /**
     * It disables the input element
     * @param {?} isDisabled
     * @return {?}
     */
    MaskDirective.prototype.setDisabledState = /**
     * It disables the input element
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._maskService.formElementProperty = ['disabled', isDisabled];
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.onModelChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!e) {
            this._maskService.actualValue = '';
        }
    };
    /**
     * @private
     * @param {?} maskExp
     * @return {?}
     */
    MaskDirective.prototype._repeatPatternSymbols = /**
     * @private
     * @param {?} maskExp
     * @return {?}
     */
    function (maskExp) {
        var _this = this;
        return ((maskExp.match(/{[0-9]+}/) &&
            maskExp.split('').reduce((/**
             * @param {?} accum
             * @param {?} currval
             * @param {?} index
             * @return {?}
             */
            function (accum, currval, index) {
                _this._start = currval === '{' ? index : _this._start;
                if (currval !== '}') {
                    return _this._maskService._findSpecialChar(currval) ? accum + currval : accum;
                }
                _this._end = index;
                /** @type {?} */
                var repeatNumber = Number(maskExp.slice(_this._start + 1, _this._end));
                /** @type {?} */
                var repaceWith = new Array(repeatNumber + 1).join(maskExp[_this._start - 1]);
                return accum + repaceWith;
            }), '')) ||
            maskExp);
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @return {?}
     */
    MaskDirective.prototype._applyMask = 
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @return {?}
     */
    function () {
        this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue || '');
        this._maskService.formElementProperty = [
            'value',
            this._maskService.applyMask(this._inputValue, this._maskService.maskExpression),
        ];
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MaskDirective.prototype._validateTime = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rowMaskLen = this._maskValue.split('').filter((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s !== ':'; })).length;
        if (+value[value.length - 1] === 0 && value.length < rowMaskLen) {
            return { 'Mask error': true };
        }
        if (value.length <= rowMaskLen - 2) {
            return { 'Mask error': true };
        }
        return null;
    };
    MaskDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[mask]',
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return MaskDirective; })),
                            multi: true,
                        },
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return MaskDirective; })),
                            multi: true,
                        },
                        MaskService,
                    ],
                },] }
    ];
    /** @nocollapse */
    MaskDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: MaskService },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [config,] }] }
    ]; };
    MaskDirective.propDecorators = {
        maskExpression: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['mask',] }],
        specialCharacters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        patterns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        prefix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        suffix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        thousandSeparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        decimalMarker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dropSpecialCharacters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        hiddenInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        showMaskTyped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        placeHolderCharacter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        shownMaskExpression: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        showTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        clearIfNotMatch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        validation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        separatorLimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['input', ['$event'],] }],
        onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['blur',] }],
        onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click', ['$event'],] }],
        onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keydown', ['$event'],] }],
        onModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['ngModelChange', ['$event'],] }]
    };
    return MaskDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaskPipe = /** @class */ (function () {
    function MaskPipe(_maskService) {
        this._maskService = _maskService;
    }
    /**
     * @param {?} value
     * @param {?} mask
     * @return {?}
     */
    MaskPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} mask
     * @return {?}
     */
    function (value, mask) {
        if (!value && typeof value !== 'number') {
            return '';
        }
        if (typeof mask === 'string') {
            return this._maskService.applyMask("" + value, mask);
        }
        return this._maskService.applyMaskWithPattern("" + value, mask);
    };
    MaskPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'mask',
                    pure: true,
                },] }
    ];
    /** @nocollapse */
    MaskPipe.ctorParameters = function () { return [
        { type: MaskApplierService }
    ]; };
    return MaskPipe;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxMaskModule = /** @class */ (function () {
    function NgxMaskModule() {
    }
    /**
     * @param {?=} configValue
     * @return {?}
     */
    NgxMaskModule.forRoot = /**
     * @param {?=} configValue
     * @return {?}
     */
    function (configValue) {
        return {
            ngModule: NgxMaskModule,
            providers: [
                {
                    provide: NEW_CONFIG,
                    useValue: configValue,
                },
                {
                    provide: INITIAL_CONFIG,
                    useValue: initialConfig,
                },
                {
                    provide: config,
                    useFactory: _configFactory,
                    deps: [INITIAL_CONFIG, NEW_CONFIG],
                },
                MaskApplierService,
            ],
        };
    };
    /**
     * @param {?=} _configValue
     * @return {?}
     */
    NgxMaskModule.forChild = /**
     * @param {?=} _configValue
     * @return {?}
     */
    function (_configValue) {
        return {
            ngModule: NgxMaskModule,
        };
    };
    NgxMaskModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [MaskDirective, MaskPipe],
                    declarations: [MaskDirective, MaskPipe],
                },] }
    ];
    return NgxMaskModule;
}());
/**
 * \@internal
 * @param {?} initConfig
 * @param {?} configValue
 * @return {?}
 */
function _configFactory(initConfig, configValue) {
    return configValue instanceof Function ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, initConfig, configValue()) : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, initConfig, configValue);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
((/**
 * @return {?}
 */
function () {
    if (!commonjsGlobal.KeyboardEvent) {
        commonjsGlobal.KeyboardEvent = (/**
         * @param {?} _eventType
         * @param {?} _init
         * @return {?}
         */
        function (_eventType, _init) { });
    }
}))();


var customKeyboardEvent = {

};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-mask.js.map


/***/ }),

/***/ "./src/app/users/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/users/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/users/profile/profile.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");









var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/users/profile/profile.page.html":
/*!*************************************************!*\
  !*** ./src/app/users/profile/profile.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <span class=\"title_t\">Editar</span>\r\n    <span class=\"title_w\">seu Perfil</span>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding=\"true\">\r\n  <form [formGroup]=\"form\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <img [src]=\"photo\" onError=\"src = '../assets/imgs/user.png'\" class=\"user-pic2\">\r\n          <ion-button size=\"small\" class=\"cam-button\" (click)=\"selectImage()\">\r\n            <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div>\r\n            <ion-label>Nome completo <span class=\"required\">*</span></ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>account_circle</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput autocomplete=\"off\" formControlName=\"name\">\r\n            </mat-form-field>\r\n\r\n            <ion-label>E-mail @mdlz.com <span class=\"required\">*</span></ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>email</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n              \r\n                <input matInput autocomplete=\"off\" type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\"\r\n                  aria-describedby=\"basic-addon2\" formControlName=\"email\">\r\n               \r\n            </mat-form-field>\r\n\r\n            <ion-label>Telefone Celular <span class=\"required\">*</span></ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>phone</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput autocomplete=\"off\" formControlName=\"phone\"  mask='(00) 00000-0000'>\r\n            </mat-form-field>\r\n\r\n            <ion-label>Grau de Escolaridade <span class=\"required\">*</span></ion-label>\r\n            <mat-form-field class=\"full-width margin-top\">\r\n              <mat-select formControlName=\"schooling\" [compareWith]=\"compareById\">\r\n                <mat-option *ngFor=\"let schoolingLvl of schoolingList\" [value]=\"schoolingLvl\">\r\n                  {{schoolingLvl.description}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <ion-label>Nº da Matrícula</ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>file_copy</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput autocomplete=\"off\" disabled formControlName=\"registration\">\r\n            </mat-form-field>\r\n\r\n            <ion-label>Fábrica </ion-label>\r\n            <mat-form-field class=\"full-width margin-top\">\r\n              <mat-select formControlName=\"factory\" [compareWith]=\"compareById\"\r\n                (selectionChange)=\"getSections()\">\r\n                <mat-option *ngFor=\"let factory of factories\" [value]=\"factory\">\r\n                  {{factory.nome}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <ion-label>Seção </ion-label>\r\n            <mat-form-field class=\"full-width margin-top\">\r\n              <mat-select formControlName=\"section\" [compareWith]=\"compareById\"\r\n                (selectionChange)=\"getLines()\">\r\n                <mat-option *ngFor=\"let section of sections\" [value]=\"section\">\r\n                  {{section.nome}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <ion-label>Linha </ion-label>\r\n            <mat-form-field class=\"full-width margin-top\">\r\n              <mat-select formControlName=\"line\" [compareWith]=\"compareById\">\r\n                <mat-option *ngFor=\"let line of lines\" [value]=\"line\">\r\n                  {{line.nome}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n\r\n            <ion-label>Nova Senha</ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>settings</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput autocomplete=\"off\" formControlName=\"password\"  [type]=\"hide ? 'password' : 'text'\">\r\n              <mat-icon  matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}\r\n              </mat-icon>\r\n            </mat-form-field>\r\n\r\n            <ion-label>Confirmar Nova Senha</ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>settings</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput autocomplete=\"off\" formControlName=\"passwordConfirm\" [type]=\"hide ? 'password' : 'text'\">\r\n              <mat-icon  matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}\r\n              </mat-icon>\r\n            </mat-form-field>\r\n\r\n          </div>\r\n          <div class=\"ion-margin-top\">\r\n            <button type=\"submit\" (click)=\"save()\" class=\"btn btn-block btn-mdlz-clear color2\">Salvar\r\n              Alterações</button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/users/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/users/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/users/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/users/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_validators_CustomValidators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/validators/CustomValidators */ "./src/app/validators/CustomValidators.ts");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");
/* harmony import */ var src_models_Schooling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/Schooling */ "./src/models/Schooling.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/providers/page-data/page-data.service */ "./src/providers/page-data/page-data.service.ts");












//-------------------------------------------------------------------------------------------------------------------------------//
var ProfilePage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function ProfilePage(api, utils, auth, formBuilder, actionSheetController, pageDataService, platform) {
        var _this = this;
        this.api = api;
        this.utils = utils;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.actionSheetController = actionSheetController;
        this.pageDataService = pageDataService;
        this.platform = platform;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "ProfilePage>>";
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.hide = true;
        this.uploadImage = false;
        this.factories = new Array();
        this.sections = new Array();
        this.lines = new Array();
        this.schoolingList = new Array();
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        this.form = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            schooling: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            registration: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ])),
            factory: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ])),
            section: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ])),
            line: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(30)
            ])),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(30),
            ])),
        }, {
            validator: src_app_validators_CustomValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].passwordsMatch
        });
        this.schoolingList.push(new src_models_Schooling__WEBPACK_IMPORTED_MODULE_8__["Schooling"](1, "Ensino Fundamental Incompleto"));
        this.schoolingList.push(new src_models_Schooling__WEBPACK_IMPORTED_MODULE_8__["Schooling"](2, "Ensino Fundamental Completo"));
        this.schoolingList.push(new src_models_Schooling__WEBPACK_IMPORTED_MODULE_8__["Schooling"](3, "Ensino Médio Incompleto"));
        this.schoolingList.push(new src_models_Schooling__WEBPACK_IMPORTED_MODULE_8__["Schooling"](4, "Ensino Médio Completo"));
        this.schoolingList.push(new src_models_Schooling__WEBPACK_IMPORTED_MODULE_8__["Schooling"](5, "Ensino Superior Incompleto"));
        this.schoolingList.push(new src_models_Schooling__WEBPACK_IMPORTED_MODULE_8__["Schooling"](6, "Ensino Superior Completo"));
        this.getUser();
        var nome = this.user.getNome();
        var email = this.user.getEmail();
        var matricula = this.user.getMatricula();
        var phone = this.user.getTelefone();
        var schooling = this.schoolingList.filter(function (n) { return n.description == _this.user.getEscolaridade(); })[0];
        this.api.getLines().then(function (lines) {
            _this.lines = lines;
            var line = lines.filter(function (k) { return k.getId() == _this.user.getLinhaId(); })[0];
            _this.api.getSections().then(function (sections) {
                _this.sections = sections;
                var section = sections.filter(function (k) { return k.getId() == line.getSecaoId(); })[0];
                _this.api.getFactories().then(function (factories) {
                    _this.factories = factories;
                    var factory = factories.filter(function (k) { return k.getId() == section.getFabricaId(); })[0];
                    _this.form.patchValue({
                        'name': nome,
                        'email': email,
                        'registration': matricula,
                        'line': line,
                        'section': section,
                        'factory': factory,
                        'phone': phone,
                        'schooling': schooling,
                    });
                    _this.photo = _this.user.getFoto();
                }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG); });
            }).catch(function (error) {
                _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG);
            });
        }).catch(function (error) {
            _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG);
        });
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    ProfilePage.prototype.compareById = function (o1, o2) {
        if (o1 == null || o2 == null) {
            return false;
        }
        return o1.id === o2.id;
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    ProfilePage.prototype.getUser = function () {
        this.user = this.auth.loggedUser;
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    ProfilePage.prototype.getFactories = function () {
        var _this = this;
        var logHeader = this.logHeader + "getFactories>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        this.api.getFactories().then(function (factories) {
            _this.factories = factories;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    ProfilePage.prototype.getSections = function () {
        var _this = this;
        var logHeader = this.logHeader + "getSections>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        this.api.getSections(this.form.value.factory).then(function (sections) {
            _this.sections = sections;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    ProfilePage.prototype.getLines = function () {
        var _this = this;
        var logHeader = this.logHeader + "getLines>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        this.api.getLines(this.form.value.section).then(function (lines) {
            _this.lines = lines;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    ProfilePage.prototype.selectImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!(this.platform.is('desktop') || this.platform.is('mobileweb'))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["MenuText"].WHAT_DO_YOU_WANT_TO_DO,
                                buttons: [{
                                        text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["MenuText"].LOAD_FILE,
                                        handler: function () {
                                            _this.takePicture(_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["PictureSourceType"].PHOTOLIBRARY);
                                        }
                                    },
                                    {
                                        text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["MenuText"].TAKE_PICTURE,
                                        handler: function () {
                                            _this.takePicture(_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["PictureSourceType"].CAMERA);
                                        }
                                    },
                                    {
                                        text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["MenuText"].CANCEL,
                                        role: 'cancel'
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].FEATURE_UNAVAILABLE_FOR_WEB);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    ProfilePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        this.utils.takePicture(sourceType).then(function (imageData) {
            _this.utils.cropPicture(imageData).then(function (croppedImage) {
                _this.photo = croppedImage;
                var image = croppedImage;
                _this.imageData = image.substring(image.indexOf("base64,") + 7, image.length);
                _this.uploadImage = true;
            });
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    ProfilePage.prototype.save = function () {
        var _this = this;
        var logHeader = this.logHeader + "save>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        var name = this.form.value.name;
        var email = this.form.value.email;
        var phone = this.form.value.phone;
        var schooling = this.form.value.schooling;
        var registration = this.form.value.registration;
        var password = this.form.value.password;
        var passwordConfirm = this.form.value.passwordConfirm;
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isStringInvalid(name)) {
            this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].INSERT_NAME);
            throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"].INVALID_STRING + ">>NAME>>" + name);
        }
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isStringInvalid(email)) {
            this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].INSERT_EMAIL);
            throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"].INVALID_STRING + ">>EMAIL>>" + email);
        }
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isStringInvalid(phone)) {
            this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].INSERT_PHONE);
            throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"].INVALID_STRING + ">>PHONE>>" + phone);
        }
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(schooling)) {
            this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].INSERT_SCHOOLING);
            throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"].INVALID_STRING + ">>SCHOOLING>>" + schooling);
        }
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isStringInvalid(registration)) {
            this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].INSERT_REGISTRATION);
            throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"].INVALID_STRING + ">>REGISTRATION>>" + registration);
        }
        this.user.setNome(name);
        this.user.setEmail(email.toLowerCase());
        this.user.setTelefone(phone);
        this.user.setEscolaridade(schooling.description);
        this.user.setMatricula(registration);
        if (this.uploadImage) {
            var imageBlob = src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].getImageBlob(this.imageData);
            this.api.uploadUserImage(imageBlob).then(function () {
                _this.pageDataService.imageChangeEvent.emit('Image changed');
                _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].EDIT_SUCCESSFUL);
                _this.uploadImage = false;
            }).catch(function (error) {
                _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].IMAGE_UPLOAD_FAILED);
                throw error;
            });
        }
        if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isStringInvalid(password) && !src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isStringInvalid(passwordConfirm)) {
            if (password == passwordConfirm) {
                if (password.length >= 6 || password.length <= 30) {
                    this.user.setSenha(password);
                }
                else {
                    this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].INVALID_PASSWORD_LENGTH);
                    throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"].INVALID_PASSWORD_LENGTH);
                }
            }
            else {
                this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].PASSWORDS_DONT_MATCH);
                throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"].PASSWORDS_DONT_MATCH);
            }
        }
        else {
            this.user.setSenha(undefined);
        }
        this.api.editUser(this.user).then(function () {
            _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].EDIT_SUCCESSFUL);
            _this.auth.setAuthObject(_this.user);
            _this.auth.loggedUser = _this.user;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/users/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/users/profile/profile.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiProvider"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"],
            src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_11__["PageDataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ }),

/***/ "./src/app/validators/CustomValidators.ts":
/*!************************************************!*\
  !*** ./src/app/validators/CustomValidators.ts ***!
  \************************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
//-------------------------------------------------------------------------------------------------------------------------------//
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    CustomValidators.passwordsMatch = function (AC) {
        var password = AC.get('password').value;
        var passwordConfirm = AC.get('passwordConfirm').value;
        if (password != passwordConfirm) {
            return { passwordsDontMatch: true };
        }
        else {
            return null;
        }
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    CustomValidators.isValidMatricula = function (control) {
        if (isNaN(control.value)) {
            return { invalid: true };
        }
        var numbers;
        var digits;
        var sum;
        var i;
        var result;
        var sameDigits = 1;
        var Matricula = control.value;
        if (Matricula.length < 11)
            return { invalid: true };
        for (i = 0; i < Matricula.length - 1; i++)
            if (Matricula.charAt(i) != Matricula.charAt(i + 1)) {
                sameDigits = 0;
                break;
            }
        if (!sameDigits) {
            numbers = Matricula.substring(0, 9);
            digits = Matricula.substring(9);
            sum = 0;
            for (i = 10; i > 1; i--)
                sum += numbers.charAt(10 - i) * i;
            result = sum % 11 < 2 ? 0 : 11 - sum % 11;
            if (result != digits.charAt(0))
                return { invalid: true };
            numbers = Matricula.substring(0, 10);
            sum = 0;
            for (i = 11; i > 1; i--)
                sum += numbers.charAt(11 - i) * i;
            result = sum % 11 < 2 ? 0 : 11 - sum % 11;
            if (result != digits.charAt(1))
                return { invalid: true };
            return new Promise(function (resolve) {
                setTimeout(function () {
                    if (control.value === "59566215916") {
                        resolve({ MatriculaTaken: true });
                    }
                    else {
                        resolve(null);
                    }
                }, 2000);
            });
        }
        else
            return { invalid: true };
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    CustomValidators.isValidEmail = function (control) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                if (control.value.toLowerCase() === "teste@cits.br") {
                    resolve({ emailTaken: true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    };
    return CustomValidators;
}());



/***/ })

}]);
//# sourceMappingURL=users-profile-profile-module.js.map