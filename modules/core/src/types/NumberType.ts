
import {Equalitable} from '../helpers/Equalitable';
import {Cloneable} from '../helpers/Cloneable';
import {Comparable} from '../helpers/Comparable';


/**
 * Utility class for number type
 *
 * TODO: Add number operators, like add minus, plus, divide, etc?
 * TODO: Change DEFAULT_VALUE, EPSILON, MAX_SAFE_INGER, MAX_INTEGER, etc types from number to NumberType?
 */
export class NumberType implements Equalitable, Cloneable, Comparable<number | NumberType> {

    /**
     * Type for number
     *
     * @type    {string}
     */
    public static readonly TYPE: string = 'number';

    /**
     * Default value
     *
     * @type    {number}
     */
    public static readonly DEFAULT_VALUE: number = 0;

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
     * @param   {number}    value
     * @constructor
     */
    public constructor(value: number) {
        this.value = value;
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
     * @param   {number}    value
     * @return  {NumberType}
     */
    public setValue(value: number): NumberType {
        this.value = value;
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

    public clone(): NumberType {
        return new NumberType(this.value);
    }

    public equals(other: number | NumberType): boolean {
        return this.value === (NumberType.is(other) ? other : (<NumberType> other).getValue());
    }

    public compareTo(other: number | NumberType): number {

        other = NumberType.valueOf(other).getValue();

        if(this.value > other) {
            return 1;
        }

        if(this.value < other) {
            return -1;
        }

        return 0;
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
     * TODO: Delete and set only NumberType.parseInteger and NumberType.parseFloat?
     */
    public static parse(value: any): number {

        if(value instanceof NumberType) {
            return value.getValue();
        }

        let parsed = parseFloat(value);

        return Number.isNaN(parsed) ? NumberType.DEFAULT_VALUE : parsed;
    }

    /**
     * Get number value of same value
     *
     * @param   {*} value
     * @return  {NumberType}
     */
    public static valueOf(value: any): NumberType {
        return new NumberType(NumberType.parse(value));
    }

    /**
     * Get if value is not a number
     *
     * @param   {*} value
     * @return  {boolean}
     * TODO: Remove static modifier?
     */
    public static isNaN(value: any): boolean {
        return Number.isNaN(value);
    }

    /**
     * Get if value is finite
     *
     * @param   {*} value
     * @return  {boolean}
     * TODO: Remove static modifier?
     */
    public static isFinite(value: any): boolean {
        return Number.isFinite(value);
    }

    /**
     * Get if value is integer
     *
     * @param   {*} value
     * @return  {boolean}
     * TODO: Remove static modifier?
     */
    public static isInteger(value: any): boolean {
        return Number.isInteger(value);
    }

    /**
     * Get if value is safe integer
     *
     * @param   {*} value
     * @return  {boolean}
     * TODO: Remove static modifier?
     */
    public static isSafeInteger(value: any): boolean {
        return Number.isSafeInteger(value);
    }

    /**
     * Parse value to float
     *
     * @param   {*} value
     * @return  {number}
     * TODO: Merge with NumberType.parse?
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
     * TODO: Merge with NumberType.parse?
     */
    public static parseInteger(value: any, radix?: number): number {
        return Number.parseInt(value, radix);
    }

    /**
     * Transform value to string
     *
     * @param   {number | NumberType}  value
     * @param   {number}            [radix]
     * @return  {string}
     * TODO: This is realy necessary?
     */
    public static toString(value: number | NumberType, radix?: number): string {
        return value.toString(radix);
    }

}
