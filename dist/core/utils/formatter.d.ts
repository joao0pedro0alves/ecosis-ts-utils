declare type ValueType = string | number;
export declare const formatter: (value: ValueType) => {
    toDecimal: ({ decimalCases }?: {
        decimalCases?: number | undefined;
    }) => string;
    toPercent: (f: number) => string;
    toCNPJ: () => any;
    toCPF: () => any;
    toCNPJorCPF: () => any;
    toTelefone: () => any;
    toPlate: () => any;
    toSimpleDate: () => string | number;
    toTimeDate: ({ ...options }?: {}) => string | number;
    toISOString: () => string | number;
};
export {};
