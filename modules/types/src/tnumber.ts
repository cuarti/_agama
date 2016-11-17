

/**
 * Utility functions for number type
 */
export module tnumber {

    /**
     * Type for number
     *
     * @type {string}
     */
    export const TYPE: string = 'number';

    /**
     * Check if value is number
     *
     * @param   {*}         value
     * @returns {boolean}
     */
    export function is(value: any): boolean {
        return typeof value === TYPE;
    }

}
