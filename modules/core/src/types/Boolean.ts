

/**
 * Utility class for boolean type
 */
export class Boolean {

    /**
     * Type for boolean
     *
     * @type    {string}
     */
    public static readonly TYPE: string = 'boolean';

    /**
     * Get if value is boolean
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    public static is(value: any): boolean {
        return typeof value === this.TYPE;
    }

}
