

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
    private value: boolean;

    /**
     * Constructor method
     *
     * @param   {*} [value = false]
     * @constructor
     */
    public constructor(value: any = false) {
        this.setValue(value);
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
     * @param   {*} value
     * @return  {TBoolean}
     */
    public setValue(value: any): TBoolean {
        this.value = TBoolean.parse(value);
        return this;
    }

    /**
     * Clone boolean
     */
    public clone(): TBoolean {
        return new TBoolean(this.value);
    }

    /**
     * Get if this and another value are equals
     *
     * @param   {boolean | TBoolean} value
     * @return  {boolean}
     */
    public equals(value: boolean | TBoolean): boolean {
        return this.value === (TBoolean.is(value) ? value : (<TBoolean> value).getValue());
    }

    /**
     * Get order of this respect another value
     *
     * @param   {boolean | TBoolean}    value
     * @return  {number}
     */
    public compareTo(value: boolean | TBoolean): number {
        return TBoolean.compare(this.value, value);
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

        if(value instanceof TBoolean) {
            return value.getValue();
        }

        if(value === true || value === 'true') {
            return true;
        }

        //TODO: Use types to check this
        if(typeof value === 'number' || (!isNaN(value) && typeof value === 'string')) {
            return value != 0 && !isNaN(<any> value);
        }

        return false;
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

        a = TBoolean.is(a) ? a : (<TBoolean> a).getValue();
        b = TBoolean.is(b) ? b : (<TBoolean> b).getValue();

        if(a && !b) {
            return 1;
        }

        if(!a && b) {
            return -1;
        }

        return 0;
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

}
