import { formatter } from "../../core/utils/formatter"

describe("Testing formatter...", () => {
  const CPF = "99999999999"
  const _CPF = "999.999.999-99"

  const CNPJ = "99999999999999"
  const _CNPJ = "99.999.999/9999-99"

  describe("Number formats", () => {
    test("Decimal", () => {
      // pt-Br
      expect(formatter(1).toDecimal()).toBe("1,00")
      expect(formatter(1).toDecimal({ decimalCases: 0 })).toBe("1")
      expect(formatter(1.99).toDecimal()).toBe("1,99")
      expect(formatter(1.999).toDecimal({ decimalCases: 3 })).toBe("1,999")
      expect(formatter(1999.99).toDecimal()).toBe("1.999,99")

      // en-US
      expect(formatter(1, "en-US").toDecimal()).toBe("1.00")
      expect(formatter(1, "en-US").toDecimal({ decimalCases: 0 })).toBe("1")
      expect(formatter(1.99, "en-US").toDecimal()).toBe("1.99")
      expect(formatter(1.999, "en-US").toDecimal({ decimalCases: 3 })).toBe(
        "1.999"
      )
      expect(formatter(1999.99, "en-US").toDecimal()).toBe("1,999.99")
    })
  })

  describe("Mask formats", () => {
    test("CNPJ", () => {
      expect(formatter(CNPJ).toCNPJ()).toBe(_CNPJ)
    })
    test("CPF", () => {
      expect(formatter(CPF).toCPF()).toBe(_CPF)
    })
    test("CNPJ/CPF", () => {
      expect(formatter(CPF).toCNPJorCPF()).toBe(_CPF)
      expect(formatter(CNPJ).toCNPJorCPF()).toBe(_CNPJ)
    })
    test("Phone", () => {
      expect(formatter("99999999999").toTelefone()).toBe("(99) 99999-9999")
      expect(formatter("9999999999").toTelefone()).toBe("(99) 9999-9999")
    })
    test("Vehicle Plate", () => {
      expect(formatter("AAA1111").toPlate()).toBe("AAA-1111")
    })
  })

  describe("Date and time formats", () => {
    test("Simple Date", () => {
      expect(formatter(new Date(0)).toSimpleDate()).toBe("31/12/1969")
      expect(formatter(new Date(0), "en-US").toSimpleDate()).toBe("12/31/1969")
    })
    test("Time Date", () => {
      expect(formatter(new Date(0)).toTimeDate()).toBe("21:00:00")
    })
    test("ISO Date", () => {
      expect(formatter(new Date(0)).toISOString()).toBe("1970-01-01")
    })
  })
})
