

/**
 * Utility functions for boolean type
 */
export module tboolean {

    /**
     * Type for boolean
     *
     * @type {string}
     */
    export const TYPE: string = 'boolean';

    /**
     * Check if value is boolean
     *
     * @param   {*}         value
     * @returns {boolean}
     */
    export function is(value: any): boolean {
        return typeof value === TYPE;
    }

}
