

/**
 * Utility functions for array type
 *
 * TODO: see http://underscorejs.org/#collections
 * TODO: see http://underscorejs.org/#arrays
 */
export module tarray {

    /**
     * Instance for Array
     *
     * @type    {ArrayConstructor}
     */
    export const INSTANCE: ArrayConstructor = Array;

    /**
     * Check if value is Array
     *
     * @param   {*}         value
     * @returns {boolean}
     */
    export function is(value: any): boolean {
        return value instanceof INSTANCE;
    }

    /**
     * Check if value is Array of type
     *
     * @param   {*}                 value
     * @param   {string | Function} type
     * @returns {boolean}
     */
    export function isArrayOf(value: any, type: string | Function) {

        if(!is(value)) {
            return false;
        }

        if(typeof type === 'string') {
            return value.every(i => typeof i === type);
        }

        if(type instanceof Function) {
            return value.every(i => i instanceof type);
        }

        return false;
    }

    /**
     * Check if array contains element
     *
     * @param   {Array}     arr
     * @param   {*}         search
     * @param   {number}    [from = 0]
     */
    export function contains(arr: Array<any>, search: any, from: number = 0) {
        return arr.indexOf(search, from) >= 0;
    }

    /**
     * Get all index of array by value
     *
     * @param   {Array}     arr
     * @param   {*}         search
     * @param   {number}    [from = 0]
     */
    export function allIndexOf(arr: Array<any>, search: any, from: number = 0) {

        let f = [];

        arr.slice(from).forEach((v, i) => {
            if(v === search) {
                f.push(i + from);
            }
        });

        return f;
    }

}
