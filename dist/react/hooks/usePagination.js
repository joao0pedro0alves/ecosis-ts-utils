"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePagination = void 0;
var react_1 = require("react");
var defaultInitialPage = 0;
var rowsPerPageOptions = [5, 10, 25, 50, { label: "Todos", value: -1 }];
// --------------- 𝕄𝕒𝕚𝕟 ---------------
function usePagination(_a) {
    var _b = _a.initialPage, initialPage = _b === void 0 ? defaultInitialPage : _b, _c = _a.initialRowsPerpage, initialRowsPerpage = _c === void 0 ? 25 : _c;
    var _d = (0, react_1.useState)(initialPage), page = _d[0], setPage = _d[1];
    var _e = (0, react_1.useState)(initialRowsPerpage), rowsPerPage = _e[0], setRowsPerPage = _e[1];
    /** TablePagination event handler: used for change current page */
    var onChangePage = function (e, newPage) { return setPage(newPage); };
    /** TablePagination event handler: used for change current page limiter */
    var onChangeRowsPerPage = function (e) {
        var value = e.target.value;
        setRowsPerPage(parseInt(value, 10));
        setPage(0);
    };
    /** Used for calculate current records */
    var calculateNewPaginatorData = function (records) {
        var startIndex = page * rowsPerPage;
        var lastIndex = startIndex + rowsPerPage;
        var totalPages = Math.ceil(records.length / rowsPerPage);
        var currentPageRecords = records.slice(startIndex, lastIndex);
        return {
            totalPages: totalPages,
            currentPageRecords: currentPageRecords,
        };
    };
    /** Used for reseting pagination state */
    var reset = (0, react_1.useCallback)(function () {
        setRowsPerPage(initialRowsPerpage);
        setPage(initialPage);
    }, [initialRowsPerpage, initialPage]);
    return {
        page: page,
        rowsPerPage: rowsPerPage,
        rowsPerPageOptions: rowsPerPageOptions,
        onChangePage: onChangePage,
        onChangeRowsPerPage: onChangeRowsPerPage,
        calculateNewPaginatorData: calculateNewPaginatorData,
        reset: reset,
    };
}
exports.usePagination = usePagination;
