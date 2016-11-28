
/**
 * TODO: Implement new methods
 *       - JS find: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 *       - JS reduceRight: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
 *       - Java Iterator: https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html
 *       - Java Collection: https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html
 *       - Java List: https://docs.oracle.com/javase/8/docs/api/java/util/List.html
 *       - Java Collection.removeIf: https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html#removeIf-java.util.function.Predicate-
 *       - Java Stream: https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html
 */
export interface Iterator<K, V> {

    /**
     * Iterate object
     *
     * @param   {Function}  callback
     * @param   {Object}    [thisArg]
     */
    forEach(callback: (value: V, key: K, iterator: Object) => void, thisArg?: Object): void;

    /**
     * Iterate object
     *
     * @param   {Function}  callback
     * @param   {Object}    [thisArg]
     * @alias forEach
     */
    each(callback: (value: V, key: K, iterator: Object) => void, thisArg?: Object): void;

    /**
     * Iterate object and return new one
     *
     * @param   {Function}  callback
     * @param   {Object}    [thisArg]
     * @return  {Object}
     */
    map<T>(callback: (value: V, key: K, iterator: Object) => T, thisArg?: Object): Object;

    /**
     * Iterate object and return new one filtered
     *
     * @param   {Function}  callback
     * @param   {Object}    [thisArg]
     * @return  {Object}
     */
    filter(callback: (value: V, key: K, iterator: Object) => boolean, thisArg?: Object): Object;

    /**
     * Iterate object and reduce it
     *
     * @param   {Function}  callback
     * @param   {*}         [initial]
     * @param   {Object}    [thisArg]
     * @return  {*}
     */
    reduce<T>(callback: (reduced: T, value: V, key: K, iterator: Object) => T, initial: T, thisArg?: Object): T;

    /**
     * Iterate object and return if all loops meet condition
     *
     * @param   {Function}  callback
     * @param   {Object}    [thisArg]
     * @return  {boolean}
     */
    every(callback: (value: V, key: K, iterator: Object) => boolean, thisArg?: Object): boolean;

    /**
     * Iterate object and return if some loop meet condition
     *
     * @param   {Function}  callback
     * @param   {Object}    [thisArg]
     * @return  {boolean}
     */
    some(callback: (value: V, key: K, iterator: Object) => boolean, thisArg?: Object): boolean;

}
