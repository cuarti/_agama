

/**
 * Utility class for number type
 */
export class TNumber {

    /**
     * Type for number
     *
     * @type    {string}
     */
    public static readonly TYPE: string = 'number';

    /**
     * Epsilon value
     *
     * @type    {number}
     */
    public static readonly EPSILON: number = Number.EPSILON;

    /**
     * Max safe integer value
     *
     * @type    {number}
     */
    public static readonly MAX_SAFE_INTEGER: number = Number.MAX_SAFE_INTEGER;

    /**
     * Max number value
     *
     * @type    {number}
     */
    public static readonly MAX_VALUE: number = Number.MAX_VALUE;

    /**
     * Min safe integer value
     *
     * @type    {number}
     */
    public static readonly MIN_SAFE_INTEGER: number = Number.MIN_SAFE_INTEGER;

    /**
     * Min number value
     *
     * @type    {number}
     */
    public static readonly MIN_VALUE: number = Number.MIN_VALUE;

    /**
     * NaN value
     *
     * @type    {number}
     */
    public static readonly NaN: number = Number.NaN;

    /**
     * Negative infinity value
     *
     * @type    {number}
     */
    public static readonly NEGATIVE_INFINITY: number = Number.NEGATIVE_INFINITY;

    /**
     * Positive infinity value
     *
     * @type    {number}
     */
    public static readonly POSITIVE_INFINITY: number = Number.POSITIVE_INFINITY;

    /**
     * Value
     *
     * @type    {number}
     */
    private value: number;

    /**
     * Constructor method
     *
     * @param   {*} [value = 0]
     * @constructor
     */
    public constructor(value: any = 0) {
        this.setValue(value);
    }

    /**
     * Get value
     *
     * @return  {number}
     */
    public getValue(): number {
        return this.value;
    }

    /**
     * Set value
     *
     * @param   {*} value
     * @return  {TNumber}
     */
    public setValue(value: any): TNumber {
        this.value = TNumber.parse(value);
        return this;
    }

    /**
     * Transform number to exponential expression
     *
     * @param   {number}    [fractionDigits]
     * @return  {string}
     */
    public toExponential(fractionDigits?: number): string {
        return this.value.toExponential(fractionDigits);
    }

    /**
     * Transform number to fixed expression
     *
     * @param   {number}    [digits]
     * @return  {string}
     */
    public toFixed(digits?: number): string {
        return this.value.toFixed(digits);
    }

    /**
     * Transform number to precision expression
     *
     * @param   {number}    [precision]
     * @return  {string}
     */
    public toPrecision(precision?: number): string {
        return this.value.toPrecision(precision);
    }

    /**
     * Clone number
     */
    public clone(): TNumber {
        return new TNumber(this.value);
    }

    /**
     * Get if this and another value are equals
     *
     * @param   {number | TNumber} value
     * @return  {boolean}
     */
    public equals(value: number | TNumber): boolean {
        return this.value === (TNumber.is(value) ? value : (<TNumber> value).getValue());
    }

    /**
     * Get order of this respect another value
     *
     * @param   {number | TNumber}    value
     * @return  {number}
     */
    public compareTo(value: number | TNumber): number {
        return TNumber.compare(this.value, value);
    }

    /**
     * Transform value to string
     *
     * @param   {number}    [radix]
     * @return  {string}
     */
    public toString(radix?: number): string {
        return this.value.toString(radix);
    }

    /**
     * Get if value is number
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    public static is(value: any): boolean {
        return typeof value === this.TYPE;
    }

    /**
     * Parse number
     *
     * @param   {*} value
     * @return  {number}
     */
    public static parse(value: any): number {

        if(value instanceof TNumber) {
            return value.getValue();
        }

        let parsed = parseFloat(value);

        return Number.isNaN(parsed) ? 0 : parsed;
    }

    /**
     * Get number value of same value
     *
     * @param   {*} value
     * @return  {TNumber}
     */
    public static valueOf(value: any): TNumber {
        return new TNumber(value);
    }

    /**
     * Get if value is not a number
     *
     * @param   {*} value
     * @return  {boolean}
     */
    public static isNaN(value: any): boolean {
        return Number.isNaN(value);
    }

    /**
     * Get if value is finite
     *
     * @param   {*} value
     * @return  {boolean}
     */
    public static isFinite(value: any): boolean {
        return Number.isFinite(value);
    }

    /**
     * Get if value is integer
     *
     * @param   {*} value
     * @return  {boolean}
     */
    public static isInteger(value: any): boolean {
        return Number.isInteger(value);
    }

    /**
     * Get if value is safe integer
     *
     * @param   {*} value
     * @return  {boolean}
     */
    public static isSafeInteger(value: any): boolean {
        return Number.isSafeInteger(value);
    }

    /**
     * Parse value to float
     *
     * @param   {*} value
     * @return  {number}
     */
    public static parseFloat(value: any): number {
        return Number.parseFloat(value);
    }

    /**
     * Parse value to integer
     *
     * @param   {*}         value
     * @param   {number}    [radix]
     * @return  {number}
     */
    public static parseInteger(value: any, radix?: number): number {
        return Number.parseInt(value, radix);
    }

    /**
     * Get order of number respect another
     *
     * @param   {number | TNumber}  a
     * @param   {number | TNumber}  b
     * @return  {number}
     */
    public static compare(a: number | TNumber, b: number | TNumber): number {

        a = TNumber.is(a) ? a : (<TNumber> a).getValue();
        b = TNumber.is(b) ? b : (<TNumber> b).getValue();

        if(a > b) {
            return 1;
        }

        if(a < b) {
            return -1;
        }

        return 0;
    }

    /**
     * Transform value to string
     *
     * @param   {number | TNumber}  value
     * @param   {number}            [radix]
     * @return  {string}
     */
    public static toString(value: number | TNumber, radix?: number): string {
        return value.toString(radix);
    }

}
