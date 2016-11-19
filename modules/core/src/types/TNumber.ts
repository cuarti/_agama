

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
     * Get if value is number
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    public static is(value: any): boolean {
        return typeof value === this.TYPE;
    }

}
