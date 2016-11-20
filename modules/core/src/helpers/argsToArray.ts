

/**
 * Helper function to convert function arguments to array
 *
 * @param   {IArguments}    args
 * @return  {*[]}
 */
export function argsToArray<T>(args: IArguments): T[] {
    return Array.prototype.slice.call(args);
}
