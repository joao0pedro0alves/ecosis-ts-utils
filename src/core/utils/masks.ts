import * as tmCore from "text-mask-core"
import { createNumberMask } from "text-mask-addons"
import { phone, cellphone, CPF, CNPJ } from "../consts/masks"
import { MaskArray } from "../entities/Mask"

const numberMask = createNumberMask({
  prefix: "",
  thousandsSeparatorSymbol: ".",
  allowDecimal: true,
  decimalSymbol: ",",
  requireDecimal: true,
})

const conformToMask = (value: unknown, mask: MaskArray) =>
  tmCore.conformToMask(value, mask, {}).conformedValue

const toMask = (mask: MaskArray, { ...options } = {}) => ({
  mask,
  ...options,
})

/** Remove value formating */
const unmask = (value: string) =>
  String(value)
    .replace(/[' '()/.-]/g, "")
    .trim()

/** Dynamic formating for numeric inputs */
const numberTextMaskProps = (decimalPlaces = 2) => ({
  mask: numberMask,
  pipe: (value: string) => {
    const [number = "0", decimal = "0"] = value.trim().split(",")
    return [number, decimal.padEnd(decimalPlaces, "0")].join(",")
  },
})

/** Remove value formating */
const removeNumberMask = (value: string, fractionDigits = 2) =>
  Number(
    parseFloat(value.replace(".", "").replace(",", ".")).toFixed(fractionDigits)
  )

/** Dynamic document mask */
const personDocumentMask = (doc: string) =>
  unmask(doc).length > 11 ? CNPJ.array : CPF.array

/** Dynamic phone mask */
const phoneMask = (rawPhone: string) =>
  unmask(rawPhone).length > 10 ? cellphone.array : phone.array

export {
  conformToMask,
  toMask,
  unmask,
  numberTextMaskProps,
  removeNumberMask,
  personDocumentMask,
  phoneMask,
}
