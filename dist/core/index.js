"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNumberMask = exports.unmask = exports.toMask = exports.phoneMask = exports.personDocumentMask = exports.conformToMask = exports.extractLens = exports.formatter = exports.masks = void 0;
exports.masks = __importStar(require("./consts/masks"));
var formatter_1 = require("./utils/formatter");
Object.defineProperty(exports, "formatter", { enumerable: true, get: function () { return formatter_1.formatter; } });
var ramda_1 = require("./utils/ramda");
Object.defineProperty(exports, "extractLens", { enumerable: true, get: function () { return ramda_1.extractLens; } });
var masks_1 = require("./utils/masks");
Object.defineProperty(exports, "conformToMask", { enumerable: true, get: function () { return masks_1.conformToMask; } });
Object.defineProperty(exports, "personDocumentMask", { enumerable: true, get: function () { return masks_1.personDocumentMask; } });
Object.defineProperty(exports, "phoneMask", { enumerable: true, get: function () { return masks_1.phoneMask; } });
Object.defineProperty(exports, "toMask", { enumerable: true, get: function () { return masks_1.toMask; } });
Object.defineProperty(exports, "unmask", { enumerable: true, get: function () { return masks_1.unmask; } });
Object.defineProperty(exports, "removeNumberMask", { enumerable: true, get: function () { return masks_1.removeNumberMask; } });
