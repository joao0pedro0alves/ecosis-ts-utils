declare type Ordinances = "asc" | "desc";
declare type useSortDataProps = {
    field: string;
    order: Ordinances;
};
declare type useSortDataInitialProps = {
    initialField: string;
    initialOrder?: Ordinances;
};
declare function useSortData<T>({ initialOrder, initialField, }: useSortDataInitialProps): {
    currentSort: useSortDataProps;
    onSortChange: (newSortField: string) => void;
    sortData: (records: T[], groupBy: string) => (number | T)[];
};
export { useSortData };
