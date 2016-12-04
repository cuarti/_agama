

/**
 * Utility class for array type
 *
 * TODO: see http://underscorejs.org/#collections
 * TODO: see http://underscorejs.org/#arrays
 */
export class TArray {

    /**
     * Instance for Array
     *
     * @type    {ArrayConstructor}
     */
    public static readonly INSTANCE: ArrayConstructor = Array;

    /**
     * Get if value is Array
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    public static is(value: any): boolean {
        return value instanceof this.INSTANCE;
    }

    /**
     * Get if value is Array of type
     *
     * @param   {*}                 value
     * @param   {string | Function} type
     * @return  {boolean}
     */
    public static isArrayOf(value: any, type: string | Function): boolean {

        if(!this.is(value)) {
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
     * Get if array contains element
     *
     * @param   {Array}     arr
     * @param   {*}         search
     * @param   {number}    [from = 0]
     * @return  {boolean}
     */
    public static contains(arr: Array<any>, search: any, from: number = 0): boolean {
        return arr.indexOf(search, from) >= 0;
    }

    /**
     * Get all index of array by value
     *
     * @param   {Array}     arr
     * @param   {*}         search
     * @param   {number}    [from = 0]
     * @return  {number[]}
     */
    public static allIndexOf(arr: Array<any>, search: any, from: number = 0): number[] {

        let f = [];

        arr.slice(from).forEach((v, i) => {
            if(v === search) {
                f.push(i + from);
            }
        });

        return f;
    }

    public static remove(arr: Array<any>, index: number): void {
        arr.splice(index, 1);
    }

}
