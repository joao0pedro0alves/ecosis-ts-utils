import { MaskArray } from "../entities/Mask";
declare const conformToMask: (value: unknown, mask: MaskArray) => any;
declare const toMask: (mask: MaskArray, { ...options }?: {}) => {
    mask: MaskArray;
};
/** Remove value formating */
declare const unmask: (value: string) => string;
/** Dynamic formating for numeric inputs */
declare const numberTextMaskProps: (decimalPlaces?: number) => {
    mask: any;
    pipe: (value: string) => string;
};
/** Remove value formating */
declare const removeNumberMask: (value: string, fractionDigits?: number) => number;
/** Dynamic document mask */
declare const personDocumentMask: (doc: string) => MaskArray;
/** Dynamic phone mask */
declare const phoneMask: (rawPhone: string) => MaskArray;
export { conformToMask, toMask, unmask, numberTextMaskProps, removeNumberMask, personDocumentMask, phoneMask, };
