"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractLens = void 0;
var ramda_1 = require("ramda");
var defaultSplitter = ".";
var extractLens = function (lens, data, splitter) {
    if (splitter === void 0) { splitter = defaultSplitter; }
    var fieldLens = (0, ramda_1.lensPath)((0, ramda_1.split)(splitter, lens));
    var res = (0, ramda_1.view)(fieldLens, data);
    return res;
};
exports.extractLens = extractLens;
