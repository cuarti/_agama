

/**
 * Clone value
 *
 * @param   {*} value
 * @return  {*}
 * TODO: Add optional configuration property to equals
 * TODO: Add optional config property (recursive | deep) to clone or assign (=) properties of value (if is object)
 * TODO: Add optional config property? (cloneable | interface) to use clone method of objects that have it
 * TODO: Add support for other native objects, like Map, Set, WeakMap, WeakSet, etc
 */
export function clone<T>(value: T): T {

    // boolean, number, string, undefined or null
    if(typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string' ||
        value === undefined || value === null) {

        return value;
    }

    // Date
    if(value instanceof Date) {
        return <any> new Date(value.getTime());
    }

    //TODO: Here control Function

    // Array
    if(value instanceof Array) {
        return <any> value.slice();
    }

    // Object
    let cloned: any = {};
    cloned.__proto__ = (<any> value).__proto__;

    for(let k in value) {
        if(value.hasOwnProperty(k)) {
            cloned[k] = value[k];
        }
    }

    return cloned;
}
