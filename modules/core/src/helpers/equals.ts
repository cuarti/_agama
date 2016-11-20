

export interface EqualsConfig {
    deep?: boolean;
}

/**
 * Get if one and other value are equals
 *
 * @param   {*}             value
 * @param   {*}             other
 * @param   {EqualsConfig}  config
 * @return  {boolean}
 * TODO: Add optional configuration property to equals
 * TODO: Add optional config property (recursive | deep) to use equals function or identity operator (===) in properties of object
 * TODO: Add optional config property? (equalitable | interface) to use equals method of objects that have it
 * TODO: Add multiple parameters option to equals (change other: any to ...others: any[]}
 * TODO: Add support for other native objects, like Map, Set, WeakMap, WeakSet, etc
 */
export function equals(value: any, other: any, config?: EqualsConfig): boolean {

    //TODO: Here format config with optional properties
    config = config || {};

    // Different types
    if(typeof value !== typeof other) {
        return false;
    }

    // boolean, number, string, undefined or null
    if(typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string' ||
        value === undefined || value === null) {

        return value === other;
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

    //TODO: Here use equals method if have it

    // Object
    let vKeys = Object.keys(value);
    let oKeys = Object.keys(other);

    if(vKeys.length !== oKeys.length) {
        return false;
    }

    return vKeys.length !== oKeys.length ? false :
        config.deep ? vKeys.every(k => equals(value[k], other[k], config)) : vKeys.every(k => value[k] === other[k]);
    // return vKeys.every((k, i) => value[k] === other[k]);
}
