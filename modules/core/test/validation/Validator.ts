
import * as assert from 'assert';
import {Validator} from '../../src';


describe('@agama/core/validation/Validator', () => {

    it('Validator.typeOf', () => assert(Validator.typeOf(4, Validator.types.NUMBER)));

    it('Validator.instanceOf', () => assert(Validator.instanceOf([1, 2], Array)));

    it('Validator.isUndefined', () => assert(Validator.isUndefined(undefined)));

    it('Validator.isNull', () => assert(Validator.isNull(null)));

    it('Validator.isBoolean', () => assert(Validator.isBoolean(true)));

    it('Validator.isNumber', () => assert(Validator.isNumber(4)));

    it('Validator.isString', () => assert(Validator.isString('foo')));

    it('Validator.isObject', () => assert(Validator.isObject({a: 'foo', b: true})));

    it('Validator.isArray', () => assert(Validator.isArray(['foo', 4])));

    it('Validator.isDate', () => assert(Validator.isDate(new Date())));

    it('Validator.isFunction', () => assert(Validator.isFunction(function() {})));

});
