declare type useSortDataProps = {
    initialField: string;
    initialOrder?: string;
};
declare function useSortData<T>({ initialField, initialOrder, }: useSortDataProps): {
    currentSort: {
        field: string;
        order: string;
    };
    onSortChange: (e: any, newSortField: string) => void;
    sortData: (records: T[], groupBy: string) => (number | T)[];
};
export { useSortData };
