
/**
 * Validate type values
 */
export module Validator {

    /**
     * Type values
     *
     * @type {Object}
     */
    export const types = {
        UNDEFINED: 'undefined',
        BOOLEAN: 'boolean',
        NUMBER: 'number',
        STRING: 'string',
        OBJECT: 'object',
        FUNCTION: 'function',
        SYMBOL: 'symbol'
    };

    /**
     * Get if value is of some type
     *
     * @param   {*}         value
     * @param   {...string} types
     * @return  {boolean}
     */
    export function typeOf(value: any, ...types: string[]): boolean {
        return types.some(t => typeof value === t);
    }

    /**
     * Get if value is of instance
     *
     * @param   {*}             value
     * @param   {...Function}   instances
     * @return  {boolean}
     */
    export function instanceOf(value: any, ...instances: Function[]): boolean {
        return instances.some(i => value instanceof i);
    }

    /**
     * Get if value is undefined
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    export function isUndefined(value: any): boolean {
        return value === undefined;
    }

    /**
     * Get if value is null
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    export function isNull(value: any): boolean {
        return value === null;
    }

    /**
     * Get if value is boolean
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    export function isBoolean(value: any): boolean {
        return this.typeOf(value, this.types.BOOLEAN);
    }

    /**
     * Get if value is number
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    export function isNumber(value: any): boolean {
        return this.typeOf(value, this.types.NUMBER);
    }

    /**
     * Get if value is string
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    export function isString(value: any): boolean {
        return this.typeOf(value, this.types.STRING);
    }

    /**
     * Get if value is object
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    export function isObject(value: any): boolean {
        return this.typeOf(value, this.types.OBJECT);
    }

    /**
     * Get if value is array
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    export function isArray(value: any): boolean {
        return this.instanceOf(value, Array);
    }

    /**
     * Get if value is date
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    export function isDate(value: any): boolean {
        return this.instanceOf(value, Date);
    }

    /**
     * Get if value is function
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    export function isFunction(value: any): boolean {
        return this.typeOf(value, this.types.FUNCTION);
    }

}
