import { Mask } from "../entities/Mask"

/** example: 99.999.999/0001-99 */
const CNPJ = new Mask({
  array: [
    /\d/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
    "/",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ],
  regexp: /\d\d.\d\d\d.\d\d\d\/\d\d\d\d-\d\d/,
})

/** example: 999.999.999-99 */
const CPF = new Mask({
  array: [
    /\d/,
    /\d/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ],
  regexp: /\d\d\d.\d\d\d.\d\d\d-\d\d/,
})

/** example: AAA-A11 */
const vehiclePlate = new Mask({
  array: [/[A-Z]/i, /[A-Z]/i, /[A-Z]/i, "-", /\d/, /[A-Z\d]/i, /\d/, /\d/],
  regexp: /[A-Z][A-Z][A-Z]-\d[A-Z\d]\d\d/,
})

/** example: (99) 99999-9999 */
const cellphone = new Mask({
  array: [
    "(",
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  regexp: /\(\d{2,}\) \d{4,}\-\d{4}/,
})

/** example: (99) 9999-9999 */
const phone = new Mask({
  array: [
    "(",
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  regexp: /\(\d{2,}\) \d{4,}\-\d{4}/,
})

export { CNPJ, CPF, vehiclePlate, cellphone, phone }
