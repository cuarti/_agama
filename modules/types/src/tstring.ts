

/**
 * Utility functions for string type
 *
 * TODO: See http://epeli.github.io/underscore.string/
 */
export module tstring {

    /**
     * Type for string
     *
     * @type {string}
     */
    export const TYPE: string = 'string';

    /**
     * Check if value is string
     *
     * @param   {*}         value
     * @returns {boolean}
     */
    export function is(value: any): boolean {
        return typeof value === TYPE;
    }

    /**
     * Capitalize first character of string
     *
     * @param   {string}    str
     * @returns {string}
     */
    export function firstToUpperCase(str: string): string {
        return str[0].toUpperCase() + str.substring(1);
    }

    /**
     * Check if string starts with substring
     *
     * @param   {string}    str
     * @param   {string}    substr
     * @returns {boolean}
     * TODO: to implement
     */
    export function startsWith(str: string, substr: string): boolean {
        return false;
    }

    /**
     * Check if string ends with substring
     *
     * @param   {string}    str
     * @param   {string}    substr
     * @returns {boolean}
     * TODO: to implement
     */
    export function endsWith(str: string, substr: string): boolean {
        return false;
    }

    /**
     * Transform string to human readable string
     *
     * @param   {string}    str
     * @returns {string}
     */
    export function humanize(str: string): string {
        return firstToUpperCase(str.replace(/[A-Z]+/g, c => ' ' + c.toLowerCase())).split(/[-_]/).join(' ');
    }

    /**
     * Add left padding of any character to text
     *
     * @param   {string}    text
     * @param   {number}    size
     * @param   {string}    padding
     * @returns {string}
     * FIXME: only works if padding is a character (string with length equals to 1)
     */
    export function leftPadding(text: string, size: number, padding: string): string {

        let s = '';
        for(let i = 0; i < size; i++) {
            s += padding;
        }

        return s.substring(0, size - text.length) + text;
    }

}
