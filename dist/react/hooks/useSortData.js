"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSortData = void 0;
var react_1 = require("react");
var ramda_1 = require("../../core/utils/ramda");
// --------------- 𝕄𝕖𝕥𝕒𝕕𝕒𝕥𝕒 ---------------
var Ordinances;
(function (Ordinances) {
    Ordinances["ASC"] = "asc";
    Ordinances["DESC"] = "desc";
})(Ordinances || (Ordinances = {}));
// --------------- 𝕌𝕥𝕚𝕝𝕤 ---------------
var comp = function (a, b) {
    if (a < b)
        return -1;
    else if (a > b)
        return 1;
    else
        return 0;
};
var descendingComparator = function (a, b, orderBy, groupBy) {
    var _a = (0, ramda_1.extractLens)(orderBy, a);
    var _b = (0, ramda_1.extractLens)(orderBy, b);
    if (groupBy) {
        var groupA = (0, ramda_1.extractLens)(groupBy, a);
        var groupB = (0, ramda_1.extractLens)(groupBy, b);
        if (groupA < groupB)
            return -1;
        else if (groupA > groupB)
            return 1;
        else
            return comp(_a, _b);
    }
    else
        return comp(_a, _b);
};
var getComparator = function (order, orderBy, groupBy) {
    return order === Ordinances.ASC
        ? function (a, b) { return descendingComparator(a, b, orderBy, groupBy); }
        : function (a, b) { return -descendingComparator(a, b, orderBy, groupBy); };
};
var stableSort = function (array, comparator) {
    var stabilizedThis = array.map(function (el, index) { return [el, index]; });
    stabilizedThis.sort(function (a, b) {
        var order = comparator(a[0], b[0]);
        if (order !== 0)
            return order;
        return Number(a[1]) - Number(b[1]);
    });
    return stabilizedThis.map(function (el) { return el[0]; });
};
function useSortData(_c) {
    var initialField = _c.initialField, _d = _c.initialOrder, initialOrder = _d === void 0 ? Ordinances.DESC : _d;
    var _e = (0, react_1.useState)({
        field: initialField,
        order: initialOrder,
    }), currentSort = _e[0], setCurrentSort = _e[1];
    var onSortChange = function (e, newSortField) {
        var isAsc = currentSort.field === newSortField && currentSort.order === Ordinances.ASC;
        setCurrentSort({
            field: newSortField,
            order: isAsc ? Ordinances.DESC : Ordinances.ASC,
        });
    };
    var sortData = function (records, groupBy) {
        return stableSort(records, getComparator(currentSort.order, currentSort.field, groupBy));
    };
    return { currentSort: currentSort, onSortChange: onSortChange, sortData: sortData };
}
exports.useSortData = useSortData;
