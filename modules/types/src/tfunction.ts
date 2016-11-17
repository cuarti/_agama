

/**
 * Utility functions for function type
 */
export module tfunction {

    /**
     * Instance for function
     *
     * @type    {FunctionConstructor}
     */
    export const INSTANCE: FunctionConstructor = Function;

    /**
     * Check if value is Function
     *
     * @param   {*}         value
     * @returns {boolean}
     */
    export function is(value: any): boolean {
        return value instanceof INSTANCE;
    }

    /**
     * Call function if can
     *
     * @param   {Function}  func
     * @param   {Object}    thisArg
     * @param   {...*}      args
     * @returns {*}
     */
    export function call<T>(func: Function, thisArg: Object, ...args: Array<any>): T {

        if(this.is(func)) {
            return func.apply(thisArg, args);
        }
    }

    /**
     * Apply function if can
     *
     * @param   {Function}  func
     * @param   {Object}    thisArg
     * @param   {Array}     args
     * @returns {*}
     */
    export function apply<T>(func: Function, thisArg: Object, args: Array<any>): T {

        if(this.is(func)) {
            return func.apply(thisArg, args);
        }
    }


}
