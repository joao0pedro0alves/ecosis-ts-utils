import { CNPJ, CPF, cellphone, phone, vehiclePlate } from "../consts/masks"
import { unmask, conformToMask } from "../utils/masks"
import { defaultLocale, LocaleShortCodes } from "../consts/locale"

type ToDecimalFormat = Intl.NumberFormatOptions & { decimalCases?: number }

const formats = (value: any, locale: LocaleShortCodes = defaultLocale) => ({
  // number formats
  toDecimal: ({ decimalCases = 2, ...options }: ToDecimalFormat = {}) =>
    Number(value).toLocaleString(locale, {
      minimumFractionDigits: decimalCases,
      maximumFractionDigits: decimalCases,
      ...options,
    }),

  toPercent: (f: number) =>
    parseFloat(String(Number(value) * 100)).toFixed(f) + "%",

  // # NOT IMPLEMENTED
  // toCurrency: () => {}

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
  toSimpleDate: ({ ...options }: Intl.DateTimeFormatOptions = {}) => {
    switch (typeof value) {
      case "string":
      case "number":
      case "object":
        return new Date(value).toLocaleDateString(locale, {
          ...options,
        })
      default:
        return value
    }
  },
  toTimeDate: ({ ...options }: Intl.DateTimeFormatOptions = {}) => {
    switch (typeof value) {
      case "string":
      case "number":
      case "object":
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
      case "number":
      case "object":
        return new Date(value).toISOString().slice(0, 10)
      default:
        return value
    }
  },
})

export const formatter = (value: any, locale?: LocaleShortCodes) =>
  formats(value, locale)
