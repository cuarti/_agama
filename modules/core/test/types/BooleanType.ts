
import * as assert from 'assert';
import {BooleanType} from '../../src';

describe('@agama/core/types/BooleanType', () => {

    it('BooleanType.TYPE', () => {
        assert.equal(BooleanType.TYPE, 'boolean');
    });

    it('BooleanType.DEFAULT_VALUE', () => {
        assert.equal(BooleanType.DEFAULT_VALUE, false);
    });

    it('BooleanType.TRUE', () => {
        assert.equal(BooleanType.TRUE, true);
    });

    it('BooleanType.FALSE', () => {
        assert.equal(BooleanType.FALSE, false);
    });

    it('BooleanType#getValue', () => {
        assert.equal(new BooleanType(true).getValue(), true);
        assert.equal(new BooleanType(false).getValue(), false);
    });

    it('BooleanType#setValue', () => {
        assert.equal(new BooleanType(BooleanType.DEFAULT_VALUE).setValue(true).getValue(), true);
        assert.equal(new BooleanType(BooleanType.DEFAULT_VALUE).setValue(false).getValue(), false);
    });

    it('BooleanType#clone', () => {
        assert.deepEqual(new BooleanType(true).clone(), new BooleanType(true));
        assert.deepEqual(new BooleanType(false).clone(), new BooleanType(false));
    });

    it('BooleanType#equals', () => {
        assert(new BooleanType(true).equals(true));
        assert(new BooleanType(false).equals(false));
    });

    it('BooleanType#compareTo', () => {
        assert.equal(new BooleanType(true).compareTo(false), 1);
        assert.equal(new BooleanType(false).compareTo(true), -1);
        assert.equal(new BooleanType(true).compareTo(true), 0);
        assert.equal(new BooleanType(false).compareTo(false), 0);
    });

    it('BooleanType#toString', () => {
        assert.equal(new BooleanType(true).toString(), 'true');
        assert.equal(new BooleanType(false).toString(), 'false');
    });

    it('BooleanType.is', () => {
        assert(BooleanType.is(true));
        assert(BooleanType.is(false));
        assert(!BooleanType.is(4));
        assert(!BooleanType.is(3.14));
        assert(!BooleanType.is(NaN));
        assert(!BooleanType.is(null));
        assert(!BooleanType.is(undefined));
        assert(!BooleanType.is('text'));
        assert(!BooleanType.is('219'));
        assert(!BooleanType.is({foo: 317}));
        assert(!BooleanType.is([0, 1]));
    });

    it('BooleanType.parse', () => {
        assert.equal(BooleanType.parse(true), true);
        assert.equal(BooleanType.parse('true'), true);
        assert.equal(BooleanType.parse(1), true);
        assert.equal(BooleanType.parse('1'), true);
        assert.equal(BooleanType.parse('-5'), true);
        assert.equal(BooleanType.parse('64'), true);
        assert.equal(BooleanType.parse(new BooleanType(true)), true);
        assert.equal(BooleanType.parse(false), false);
        assert.equal(BooleanType.parse('false'), false);
        assert.equal(BooleanType.parse(0), false);
        assert.equal(BooleanType.parse('0'), false);
        assert.equal(BooleanType.parse(NaN), false);
        assert.equal(BooleanType.parse(''), false);
        assert.equal(BooleanType.parse('foo'), false);
        assert.equal(BooleanType.parse(undefined), false);
        assert.equal(BooleanType.parse(null), false);
        assert.equal(BooleanType.parse({}), false);
        assert.equal(BooleanType.parse([]), false);
        assert.equal(BooleanType.parse(function() {}), false);
        assert.equal(BooleanType.parse({a: 'foo', b: 3}), false);
        assert.equal(BooleanType.parse([1, 2]), false);
        assert.equal(BooleanType.parse(new BooleanType(false)), false);
    });

    it('BooleanType.valueOf', () => {
        assert.deepEqual(BooleanType.valueOf(true), new BooleanType(true));
        assert.deepEqual(BooleanType.valueOf(false), new BooleanType(false));
    });

    it('BooleanType.toString', () => {
        assert.equal(BooleanType.toString(true), 'true');
        assert.equal(BooleanType.toString(new BooleanType(true)), 'true');
        assert.equal(BooleanType.toString(false), 'false');
        assert.equal(BooleanType.toString(new BooleanType(false)), 'false');
    });

});
