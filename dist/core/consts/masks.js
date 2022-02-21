"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phone = exports.cellphone = exports.vehiclePlate = exports.CPF = exports.CNPJ = void 0;
var Mask_1 = require("../entities/Mask");
/** example: 99.999.999/0001-99 */
var CNPJ = new Mask_1.Mask({
    array: [
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        "/",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
    ],
    regexp: /\d\d.\d\d\d.\d\d\d\/\d\d\d\d-\d\d/,
});
exports.CNPJ = CNPJ;
/** example: 999.999.999-99 */
var CPF = new Mask_1.Mask({
    array: [
        /\d/,
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
    ],
    regexp: /\d\d\d.\d\d\d.\d\d\d-\d\d/,
});
exports.CPF = CPF;
/** example: AAA-A11 */
var vehiclePlate = new Mask_1.Mask({
    array: [/[A-Z]/i, /[A-Z]/i, /[A-Z]/i, "-", /\d/, /[A-Z\d]/i, /\d/, /\d/],
    regexp: /[A-Z][A-Z][A-Z]-\d[A-Z\d]\d\d/,
});
exports.vehiclePlate = vehiclePlate;
/** example: (99) 99999-9999 */
var cellphone = new Mask_1.Mask({
    array: [
        "(",
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
    ],
    regexp: /\(\d{2,}\) \d{4,}\-\d{4}/,
});
exports.cellphone = cellphone;
/** example: (99) 9999-9999 */
var phone = new Mask_1.Mask({
    array: [
        "(",
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
    ],
    regexp: /\(\d{2,}\) \d{4,}\-\d{4}/,
});
exports.phone = phone;
