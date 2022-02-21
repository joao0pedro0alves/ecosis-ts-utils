declare type UsePaginationProps = {
    initialPage: number;
    initialRowsPerpage: number;
};
declare type Event = {
    target: {
        value: string;
    };
};
declare function usePagination({ initialPage, initialRowsPerpage, }: UsePaginationProps): {
    page: number;
    rowsPerPage: number;
    rowsPerPageOptions: (number | {
        label: string;
        value: number;
    })[];
    onChangePage: (e: any, newPage: number) => void;
    onChangeRowsPerPage: (e: Event) => void;
    calculateNewPaginatorData: <T>(records: T[]) => {
        totalPages: number;
        currentPageRecords: T[];
    };
    reset: () => void;
};
export { usePagination };
