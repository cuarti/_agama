

/**
 * Object that can get if is equals to other
 */
export interface Equalitable {

    /**
     * Get if this and another value are equals
     *
     * @param   {Object}    other
     * @return  {boolean}
     */
    equals(other: Object): boolean;

}
