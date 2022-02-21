"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneMask = exports.personDocumentMask = exports.removeNumberMask = exports.numberTextMaskProps = exports.unmask = exports.toMask = exports.conformToMask = void 0;
var tmCore = __importStar(require("text-mask-core"));
var text_mask_addons_1 = require("text-mask-addons");
var masks_1 = require("../consts/masks");
var numberMask = (0, text_mask_addons_1.createNumberMask)({
    prefix: "",
    thousandsSeparatorSymbol: ".",
    allowDecimal: true,
    decimalSymbol: ",",
    requireDecimal: true,
});
var conformToMask = function (value, mask) {
    return tmCore.conformToMask(value, mask, {}).conformedValue;
};
exports.conformToMask = conformToMask;
var toMask = function (mask, _a) {
    if (_a === void 0) { _a = {}; }
    var options = __rest(_a, []);
    return (__assign({ mask: mask }, options));
};
exports.toMask = toMask;
/** Remove value formating */
var unmask = function (value) {
    return String(value)
        .replace(/[' '()/.-]/g, "")
        .trim();
};
exports.unmask = unmask;
/** Dynamic formating for numeric inputs */
var numberTextMaskProps = function (decimalPlaces) {
    if (decimalPlaces === void 0) { decimalPlaces = 2; }
    return ({
        mask: numberMask,
        pipe: function (value) {
            var _a = value.trim().split(","), _b = _a[0], number = _b === void 0 ? "0" : _b, _c = _a[1], decimal = _c === void 0 ? "0" : _c;
            return [number, decimal.padEnd(decimalPlaces, "0")].join(",");
        },
    });
};
exports.numberTextMaskProps = numberTextMaskProps;
/** Remove value formating */
var removeNumberMask = function (value, fractionDigits) {
    if (fractionDigits === void 0) { fractionDigits = 2; }
    return Number(parseFloat(value.replace(".", "").replace(",", ".")).toFixed(fractionDigits));
};
exports.removeNumberMask = removeNumberMask;
/** Dynamic document mask */
var personDocumentMask = function (doc) {
    return unmask(doc).length > 11 ? masks_1.CNPJ.array : masks_1.CPF.array;
};
exports.personDocumentMask = personDocumentMask;
/** Dynamic phone mask */
var phoneMask = function (rawPhone) {
    return unmask(rawPhone).length > 10 ? masks_1.cellphone.array : masks_1.phone.array;
};
exports.phoneMask = phoneMask;
