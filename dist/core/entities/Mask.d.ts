declare type MaskArray = (RegExp | string)[];
declare type MaskProps = {
    array: MaskArray;
    regexp: RegExp;
};
declare class Mask {
    array: MaskArray;
    regexp: RegExp;
    constructor(props: MaskProps);
}
export { Mask, MaskProps, MaskArray };
