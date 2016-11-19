

/**
 * Utility class for function type
 */
export class TFunction {

    /**
     * Instance for function
     *
     * @type    {FunctionConstructor}
     */
    public static readonly INSTANCE: FunctionConstructor = Function;

    /**
     * Get if value is Function
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    public static is(value: any): boolean {
        return value instanceof this.INSTANCE;
    }

    /**
     * Call function if can
     *
     * @param   {Function}  func
     * @param   {Object}    thisArg
     * @param   {...*}      args
     * @return  {*}
     */
    public static call<T>(func: Function, thisArg: Object, ...args: Array<any>): T {

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
     * @return  {*}
     */
    public static apply<T>(func: Function, thisArg: Object, args: Array<any>): T {

        if(this.is(func)) {
            return func.apply(thisArg, args);
        }
    }


}
