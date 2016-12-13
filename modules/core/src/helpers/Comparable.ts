
/**
 * Object that compare to another one
 */
export interface Comparable<T> {

    /**
     * Get order of this respect another value
     *
     * @param   {*} other
     * @return  {number}
     */
    compareTo(other: T): number;

}
