

/**
 * Utility functions for date type
 */
export module tdate {

    /**
     * Instance for date
     *
     * @type    {DateConstructor}
     */
    export const INSTANCE: DateConstructor = Date;

    /**
     * Check if value is Date
     *
     * @param   {*}         value
     * @returns {boolean}
     */
    export function is(value: any): boolean {
        return value instanceof INSTANCE;
    }

}
