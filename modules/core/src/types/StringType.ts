

/**
 * Utility class for string type
 *
 * TODO: See http://epeli.github.io/underscore.string/
 */
export class StringType {

    /**
     * Type for string
     *
     * @type    {string}
     */
    public static readonly TYPE: string = 'string';

    private value: string;

    public constructor(value: string) {
        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }

    public setValue(value: string): StringType {
        this.value = value;
        return this;
    }

    /**
     * Get if value is string
     *
     * @param   {*}         value
     * @return  {boolean}
     */
    public static is(value: any): boolean {
        return typeof value === this.TYPE;
    }

    /**
     * Capitalize first character of string
     *
     * @param   {string}    str
     * @return  {string}
     */
    public static firstToUpperCase(str: string): string {
        return str[0].toUpperCase() + str.substring(1);
    }

    /**
     * Get if string contains substring
     *
     * @param   {string}    str
     * @param   {string}    substr
     * @return  {boolean}
     */
    public static contains(str: string, substr: string): boolean {
        return str.indexOf(substr) >= 0;
    }

    /**
     * Get if string starts with substring
     *
     * @param   {string}    str
     * @param   {string}    substr
     * @return  {boolean}
     */
    public static startsWith(str: string, substr: string): boolean {
        return str.indexOf(substr) === 0;
    }

    /**
     * Get if string ends with substring
     *
     * @param   {string}    str
     * @param   {string}    substr
     * @return  {boolean}
     */
    public static endsWith(str: string, substr: string): boolean {
        return str.indexOf(substr) === str.length - substr.length;
    }

    /**
     * Get number of occurrences of substring in string
     *
     * @param   {string}    str
     * @param   {string}    substr
     * @return  {number}
     */
    public static occurrences(str: string, substr: string): number {

        let match = str.match(new RegExp(substr, 'g'));
        return match ? match.length : 0;
    }

    /**
     * Join strings
     *
     * @param   {string}    separator
     * @param   {...string} strs
     * @return {string}
     */
    public static join(separator: string, ...strs: string[]): string {
        return strs.join(separator);
    }

    /**
     * Transform string to human readable string
     *
     * @param   {string}    str
     * @return  {string}
     */
    public static humanize(str: string): string {
        return this.firstToUpperCase(str[0] + str.substr(1)
                .replace(/[a-z][A-Z]+/g, c => c[0] + ' ' + c.substr(1))
                .toLowerCase()).split(/[-_]/).join(' ');
    }

    /**
     * Enlarge string with substring
     *
     * @param   {string}    str
     * @param   {string}    substr
     * @param   {number}    length
     * @param   {boolean}   [leading=true]
     * @return  {string}
     */
    public static enlarge(str: string, substr: string, length: number, leading: boolean = true): string {

        let part = '';
        let partLength = length - str.length;
        let loops = partLength / substr.length;

        loops = Number.isInteger(loops) ? loops : Math.floor(loops) + 1;

        for(let i = 0; i < loops; i ++) {
            part += substr;
        }

        part = part.substr(0, partLength);

        return leading ? part + str : str + part;
    }

}
