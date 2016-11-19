

/**
 * Utility class for date type
 */
export class TDate {

    /**
     * Instance for date
     *
     * @type    {DateConstructor}
     */
    public static readonly INSTANCE: DateConstructor = Date;

    /**
     * Get if value is Date
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    public static is(value: any): boolean {
        return value instanceof this.INSTANCE;
    }

}
