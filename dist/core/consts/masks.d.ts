import { Mask } from "../entities/Mask";
/** example: 99.999.999/0001-99 */
declare const CNPJ: Mask;
/** example: 999.999.999-99 */
declare const CPF: Mask;
/** example: AAA-A11 */
declare const vehiclePlate: Mask;
/** example: (99) 99999-9999 */
declare const cellphone: Mask;
/** example: (99) 9999-9999 */
declare const phone: Mask;
export { CNPJ, CPF, vehiclePlate, cellphone, phone };
