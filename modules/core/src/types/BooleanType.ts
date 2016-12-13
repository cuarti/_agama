
import {Equalitable} from '../helpers/Equalitable';
import {Cloneable} from '../helpers/Cloneable';
import {Comparable} from '../helpers/Comparable';


/**
 * Utility class for boolean type
 *
 * TODO: Add boolean operators like and, or, xor?
 * TODO: Change DEFAULT_VALUE, TRUE and FALSE types from boolean to BooleanType?
 */
export class BooleanType implements Equalitable, Cloneable, Comparable<boolean | BooleanType> {

    /**
     * Type for boolean
     *
     * @type    {string}
     */
    public static readonly TYPE: string = 'boolean';

    /**
     * Default value
     *
     * @type    {boolean}
     */
    public static readonly DEFAULT_VALUE: boolean = false;

    /**
     * True value
     *
     * @type    {boolean}
     */
    public static readonly TRUE: boolean = true;

    /**
     * False value
     *
     * @type    {boolean}
     */
    public static readonly FALSE: boolean = false;

    /**
     * Value
     *
     * @type    {boolean}
     */
    private value: boolean;

    /**
     * Constructor method
     *
     * @param   {boolean}   value
     * @constructor
     */
    public constructor(value: boolean) {
        this.value = value;
    }

    /**
     * Get value
     *
     * @return  {boolean}
     */
    public getValue(): boolean {
        return this.value;
    }

    /**
     * Set value
     *
     * @param   {boolean}   value
     * @return  {BooleanType}
     */
    public setValue(value: boolean): BooleanType {
        this.value = value;
        return this;
    }

    public clone(): BooleanType {
        return new BooleanType(this.value);
    }

    public equals(other: boolean | BooleanType): boolean {
        return this.value === (BooleanType.is(other) ? other : (<BooleanType> other).getValue());
    }

    public compareTo(other: boolean | BooleanType): number {

        other = BooleanType.valueOf(other).getValue();

        if(this.value && !other) {
            return 1;
        }

        if(!this.value && other) {
            return -1;
        }

        return 0;
    }

    /**
     * Transform value to string
     *
     * @return  {string}
     */
    public toString(): string {
        return this.value.toString();
    }

    /**
     * Get if value is boolean
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    public static is(value: any): boolean {
        return typeof value === this.TYPE;
    }

    /**
     * Parse boolean
     *
     * @param   {*} value
     * @return  {boolean}
     */
    public static parse(value: any): boolean {

        if(value instanceof BooleanType) {
            return value.getValue();
        }

        if(value === true || value === 'true') {
            return true;
        }

        //TODO: Use types to check this
        if(typeof value === 'number' || (!isNaN(value) && typeof value === 'string')) {
            return value != 0 && !isNaN(<any> value);
        }

        return BooleanType.DEFAULT_VALUE;
    }

    /**
     * Get boolean value of some value
     *
     * @param   {*} value
     * @return  {BooleanType}
     */
    public static valueOf(value: any): BooleanType {
        return new BooleanType(BooleanType.parse(value));
    }

    /**
     * Get string representation of value
     *
     * @param   {boolean | BooleanType}    value
     * @return  {string}
     * TODO: This is realy necessary?
     */
    public static toString(value: boolean | BooleanType): string {
        return value.toString();
    }

}
