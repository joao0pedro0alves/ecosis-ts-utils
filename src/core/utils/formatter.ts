import { CNPJ, CPF, cellphone, phone, vehiclePlate } from "../consts/masks"
import { unmask, conformToMask } from "../utils/masks"
import { defaultLocale } from "../consts/locale"

type ValueType = string | number

const formats = (value: ValueType, locale = defaultLocale) => ({
  // number formats
  toDecimal: ({ decimalCases = 2 } = {}) =>
    Number(value).toLocaleString(locale, {
      minimumFractionDigits: decimalCases,
      maximumFractionDigits: decimalCases,
    }),
  toPercent: (f: number) =>
    parseFloat(String(Number(value) * 100)).toFixed(f) + "%",
  // masks
  toCNPJ: () => {
    switch (typeof value) {
      case "string":
        return conformToMask(value, CNPJ.array)
      default:
        return value
    }
  },
  toCPF: () => {
    switch (typeof value) {
      case "string":
        return conformToMask(value, CPF.array)
      default:
        return value
    }
  },
  toCNPJorCPF: () => {
    switch (typeof value) {
      case "string":
        const mask = value.length === 11 ? CPF.array : CNPJ.array
        return conformToMask(value, mask)
      default:
        return value
    }
  },
  toTelefone: () => {
    switch (typeof value) {
      case "string": {
        if (unmask(value).length > 10)
          return conformToMask(value, cellphone.array)

        return conformToMask(value, phone.array)
      }
      default:
        return value
    }
  },
  toPlate: () => {
    switch (typeof value) {
      case "string": {
        return conformToMask(value, vehiclePlate.array)
      }
      default:
        return value
    }
  },
  // format dates
  toSimpleDate: () => {
    switch (typeof value) {
      case "string":
        return new Date(value).toLocaleDateString(locale)
      default:
        return value
    }
  },
  toTimeDate: ({ ...options } = {}) => {
    switch (typeof value) {
      case "string":
        return new Date(value).toLocaleTimeString(locale, {
          ...options,
        })
      default:
        return value
    }
  },
  toISOString: () => {
    switch (typeof value) {
      case "string":
        return new Date(value).toISOString().slice(0, 10)
      default:
        return value
    }
  },
})

export const formatter = (value: ValueType) => formats(value)
