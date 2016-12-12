
/**
 * Object that compare to another one
 */
export interface Comparable<T> {

    /**
     * Get order of this respect another value
     *
     * @param   {*} value
     * @return  {number}
     */
    compareTo(value: T): number;

}
