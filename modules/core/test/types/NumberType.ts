
import * as assert from 'assert';
import {NumberType} from '../../src';


//TODO: It has to improve
describe('@agama/core/types/NumberType', () => {

    it('NumberType.TYPE', () => {
        assert.equal(NumberType.TYPE, 'number');
    });

    it('NumberType.DEFAULT_VALUE', () => {
        assert.equal(NumberType.DEFAULT_VALUE, 0);
    });

    it('NumberType.EPSILON', () => {
        assert.equal(NumberType.EPSILON, Number.EPSILON);
    });

    it('NumberType.MAX_SAFE_INTEGER', () => {
        assert.equal(NumberType.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    });

    it('NumberType.MAX_VALUE', () => {
        assert.equal(NumberType.MAX_VALUE, Number.MAX_VALUE);
    });

    it('NumberType.MIN_SAFE_INTEGER', () => {
        assert.equal(NumberType.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    });

    it('NumberType.MIN_VALUE', () => {
        assert.equal(NumberType.MIN_VALUE, Number.MIN_VALUE);
    });

    it('NumberType.NaN', () => {
        assert(Number.isNaN(NumberType.NaN));
    });

    it('NumberType.NEGATIVE_INFINITY', () => {
        assert.equal(NumberType.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
    });

    it('NumberType.POSITIVE_INFINITY', () => {
        assert.equal(NumberType.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
    });

    it('NumberType#getValue', () => {
        assert.equal(new NumberType(13).getValue(), 13);
        assert.equal(new NumberType(5.61).getValue(), 5.61);
    });

    it('NumberType#setValue', () => {
        assert.equal(new NumberType(NumberType.DEFAULT_VALUE).setValue(64).getValue(), 64);
        assert.equal(new NumberType(NumberType.DEFAULT_VALUE).setValue(12.8).getValue(), 12.8);
    });

    it('NumberType#toExponential', () => {
        assert.equal(new NumberType(51).toExponential(), '5.1e+1');
    });

    it('NumberType#toFixed', () => {
        assert.equal(new NumberType(96.12).toFixed(2), '96.12');
    });

    it('NumberType#toPrecision', () => {
        assert.equal(new NumberType(123.1).toPrecision(2), '1.2e+2');
    });

    it('NumberType#clone', () => {
        assert.deepEqual(new NumberType(51).clone(), new NumberType(51));
        assert.deepEqual(new NumberType(0.01).clone(), new NumberType(0.01));
    });

    it('NumberType#equals', () => {
        assert(new NumberType(53).equals(53));
        assert(new NumberType(9.1).equals(9.1));
    });

    it('NumberType#compareTo', () => {
        assert.equal(new NumberType(12).compareTo(5.13), 1);
        assert.equal(new NumberType(61.45).compareTo(101.4), -1);
        assert.equal(new NumberType(12.5).compareTo(12.5), 0);
    });

    it('NumberType#toString', () => {
        assert.equal(new NumberType(14).toString(), '14');
        assert.equal(new NumberType(6.91).toString(), '6.91');
    });

    it('NumberType.is', () => {
        assert(NumberType.is(4));
        assert(NumberType.is(3.14));
        assert(NumberType.is(NaN));
        assert(!NumberType.is(true));
        assert(!NumberType.is(null));
        assert(!NumberType.is(undefined));
        assert(!NumberType.is('text'));
        assert(!NumberType.is('219'));
        assert(!NumberType.is({foo: 317}));
        assert(!NumberType.is([0, 1]));
    });

    it('NumberType.parse', () => {
        assert.equal(NumberType.parse(51), 51);
        assert.equal(NumberType.parse(13.51), 13.51);
    });

    it('NumberType.valueOf', () => {
        assert.deepEqual(NumberType.valueOf('5.1'), new NumberType(5.1));
    });

    it('NumberType.isNaN', () => {
        //TODO: to implement
        // assert(NumberType.isNaN('foo'));
        // assert(!NumberType.isNaN('51'));
    });

    it('NumberType.isFinite', () => {
        assert(NumberType.isFinite(41));
        assert(!NumberType.isFinite(NumberType.POSITIVE_INFINITY));
        assert(!NumberType.isFinite(NumberType.NEGATIVE_INFINITY));
    });

    it('NumberType.isInteger', () => {
        assert(NumberType.isInteger(41));
        assert(!NumberType.isInteger(41.14));
        assert(!NumberType.isInteger('foo'));
    });

    it('NumberType.isSafeInteger', () => {
        //TODO: To implement
    });

    it('NumberType.parseFloat', () => {
        assert.equal(NumberType.parseFloat('12.4'), 12.4);
        assert.equal(NumberType.parseFloat('5'), 5.0);
    });

    it('NumberType.parseInteger', () => {
        assert.equal(NumberType.parseInteger('31'), 31);
        assert.equal(NumberType.parseInteger('4.1'), 4);
        assert.equal(NumberType.parseInteger('f', 16), 15);
    });

    it('NumberType.toString', () => {
        assert.equal(NumberType.toString(41), '41');
        assert.equal(NumberType.toString(12.04), '12.04');
        assert.equal(NumberType.toString(5, 2), '101');
        assert.equal(NumberType.toString(255, 16), 'ff');
    });

});
