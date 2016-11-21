

/**
 * Config for equals helper
 */
export interface EqualsConfig {

    /**
     * Use equals function for nested properties
     */
    deep?: boolean;

    /**
     * Use equals helper method for objects that have it
     */
    helper?: boolean;

}

/**
 * Get if one and other value are equals
 *
 * @param   {*}             value
 * @param   {*}             other
 * @param   {EqualsConfig}  [config]
 * @param   {boolean}       [config.deep = false]
 * @param   {boolean}       [config.helper = true]
 * @return  {boolean}
 * TODO: Add multiple parameters option to equals (change other: any to ...others: any[]}
 * TODO: Add support for other native objects, like Map, Set, WeakMap, WeakSet, etc
 */
export function equals(value: any, other: any, config?: EqualsConfig): boolean {

    config = config || {};
    config.helper = config.helper !== false;

    // Same value for primitive variables and same instance for objects
    if(value === other) {
        return true;
    }

    // Different types
    if(typeof value !== typeof other) {
        return false;
    }

    // boolean, number, string, undefined or null
    if(typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string' ||
        value === undefined || value === null) {

        return false;
    }

    //Object with equals
    if(config.helper && value.equals && value.equals(other)) {
        return true;
    }

    // Different prototype
    if(value.__proto__ !== other.__proto__) {
        return false;
    }

    // Date
    if(value instanceof Date) {
        return value.getTime() === other.getTime();
    }

    // Function
    if(value instanceof Function) {
        return value === other;
    }

    // Array
    if(value instanceof Array) {
        return value.length !== other.length ? false :
            config.deep ? value.every((v, i) => equals(v, other[i], config)) : value.every((v, i) => v === other[i]);
    }

    // Object
    let vKeys = Object.keys(value);
    let oKeys = Object.keys(other);

    if(vKeys.length !== oKeys.length) {
        return false;
    }

    return vKeys.length !== oKeys.length ? false :
        config.deep ? vKeys.every(k => equals(value[k], other[k], config)) : vKeys.every(k => value[k] === other[k]);
}
