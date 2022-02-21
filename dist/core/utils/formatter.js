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
exports.formatter = void 0;
var masks_1 = require("../consts/masks");
var masks_2 = require("../utils/masks");
var locale_1 = require("../consts/locale");
var formats = function (value, locale) {
    if (locale === void 0) { locale = locale_1.defaultLocale; }
    return ({
        // number formats
        toDecimal: function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.decimalCases, decimalCases = _c === void 0 ? 2 : _c;
            return Number(value).toLocaleString(locale, {
                minimumFractionDigits: decimalCases,
                maximumFractionDigits: decimalCases,
            });
        },
        toPercent: function (f) {
            return parseFloat(String(Number(value) * 100)).toFixed(f) + "%";
        },
        // masks
        toCNPJ: function () {
            switch (typeof value) {
                case "string":
                    return (0, masks_2.conformToMask)(value, masks_1.CNPJ.array);
                default:
                    return value;
            }
        },
        toCPF: function () {
            switch (typeof value) {
                case "string":
                    return (0, masks_2.conformToMask)(value, masks_1.CPF.array);
                default:
                    return value;
            }
        },
        toCNPJorCPF: function () {
            switch (typeof value) {
                case "string":
                    var mask = value.length === 11 ? masks_1.CPF.array : masks_1.CNPJ.array;
                    return (0, masks_2.conformToMask)(value, mask);
                default:
                    return value;
            }
        },
        toTelefone: function () {
            switch (typeof value) {
                case "string": {
                    if ((0, masks_2.unmask)(value).length > 10)
                        return (0, masks_2.conformToMask)(value, masks_1.cellphone.array);
                    return (0, masks_2.conformToMask)(value, masks_1.phone.array);
                }
                default:
                    return value;
            }
        },
        toPlate: function () {
            switch (typeof value) {
                case "string": {
                    return (0, masks_2.conformToMask)(value, masks_1.vehiclePlate.array);
                }
                default:
                    return value;
            }
        },
        // format dates
        toSimpleDate: function () {
            switch (typeof value) {
                case "string":
                    return new Date(value).toLocaleDateString(locale);
                default:
                    return value;
            }
        },
        toTimeDate: function (_a) {
            if (_a === void 0) { _a = {}; }
            var options = __rest(_a, []);
            switch (typeof value) {
                case "string":
                    return new Date(value).toLocaleTimeString(locale, __assign({}, options));
                default:
                    return value;
            }
        },
        toISOString: function () {
            switch (typeof value) {
                case "string":
                    return new Date(value).toISOString().slice(0, 10);
                default:
                    return value;
            }
        },
    });
};
var formatter = function (value) { return formats(value); };
exports.formatter = formatter;
