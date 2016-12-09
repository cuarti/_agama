

/**
 * Utility class for boolean type
 */
export class TBoolean {

    /**
     * Type for boolean
     *
     * @type    {string}
     */
    public static readonly TYPE: string = 'boolean';

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
    private val: boolean;

    /**
     * Constructor method
     *
     * @param   {*} value
     * @constructor
     */
    public constructor(value: any) {
        this.val = TBoolean.parse(value);
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

        return value instanceof TBoolean ? value.value()
            : value === true || value === 'true' || (!Number.isNaN(value) && value !== 0);
    }

    /**
     * Get string representation of value
     *
     * @param   {boolean | TBoolean}    value
     * @return  {string}
     */
    public static toString(value: boolean | TBoolean): string {
        return value.toString();
    }

    /**
     * Get boolean value of some value
     *
     * @param   {*} value
     * @return  {TBoolean}
     */
    public static valueOf(value: any): TBoolean {
        return new TBoolean(value);
    }

    /**
     * Get order between two values
     *
     * @param   {boolean | TBoolean}    a
     * @param   {boolean | TBoolean}    b
     * @return  {number}
     */
    public static compare(a: boolean | TBoolean, b: boolean | TBoolean): number {

        a = TBoolean.is(a) ? a : (<TBoolean> a).value();
        b = TBoolean.is(b) ? b : (<TBoolean> b).value();

        if(a && !b) {
            return 1;
        }

        if(!a && b) {
            return -1;
        }

        return 0;
    }

    /**
     * Get order of this respect another value
     *
     * @param   {boolean | TBoolean}    value
     * @return  {number}
     */
    public compareTo(value: boolean | TBoolean): number {
        return TBoolean.compare(this.val, value);
    }

    /**
     * Clone boolean
     */
    public clone(): TBoolean {
        return new TBoolean(this.val);
    }

    /**
     * Get if this and another value are equals
     *
     * @param   {boolean | TBoolean} value
     * @return  {boolean}
     */
    public equals(value: boolean | TBoolean): boolean {
        return this.val === (TBoolean.is(value) ? value : (<TBoolean> value).value());
    }

    /**
     * Transform value to string
     *
     * @return  {string}
     */
    public toString(): string {
        return this.val.toString();
    }

    /**
     * Get boolean value
     *
     * @return  {boolean}
     */
    public value(): boolean {
        return this.val;
    }

}
