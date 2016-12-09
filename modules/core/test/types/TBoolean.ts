
import * as assert from 'assert';
import {TBoolean} from '../../src';

describe('@agama/core/types/TBoolean', () => {

    it('TBoolean.TYPE', () => {
        assert.equal(TBoolean.TYPE, 'boolean');
    });

    it('TBoolean.TRUE', () => {
        assert.equal(TBoolean.TRUE, true);
    });

    it('TBoolean.FALSE', () => {
        assert.equal(TBoolean.FALSE, false);
    });

    it('TBoolean#getValue', () => {
        assert.equal(new TBoolean(true).getValue(), true);
        assert.equal(new TBoolean(false).getValue(), false);
    });

    it('TBoolean#setValue', () => {
        assert.equal(new TBoolean().setValue(true).getValue(), true);
        assert.equal(new TBoolean().setValue(false).getValue(), false);
    });

    it('TBoolean#clone', () => {
        assert.deepEqual(new TBoolean(true).clone(), new TBoolean(true));
        assert.deepEqual(new TBoolean(false).clone(), new TBoolean(false));
    });


    it('TBoolean#equals', () => {
        assert(new TBoolean(true).equals(true));
        assert(new TBoolean(false).equals(false));
    });

    it('TBoolean#compareTo', () => {
        assert.equal(new TBoolean(true).compareTo(false), 1);
        assert.equal(new TBoolean(false).compareTo(true), -1);
        assert.equal(new TBoolean(true).compareTo(true), 0);
        assert.equal(new TBoolean(false).compareTo(false), 0);
    });

    it('TBoolean#toString', () => {
        assert.equal(new TBoolean(true).toString(), 'true');
        assert.equal(new TBoolean(false).toString(), 'false');
    });

    it('TBoolean.is', () => {
        assert(TBoolean.is(true));
        assert(TBoolean.is(false));
        assert(!TBoolean.is(4));
        assert(!TBoolean.is(3.14));
        assert(!TBoolean.is(NaN));
        assert(!TBoolean.is(null));
        assert(!TBoolean.is(undefined));
        assert(!TBoolean.is('text'));
        assert(!TBoolean.is('219'));
        assert(!TBoolean.is({foo: 317}));
        assert(!TBoolean.is([0, 1]));
    });

    it('TBoolean.parse', () => {
        assert.equal(TBoolean.parse(true), true);
        assert.equal(TBoolean.parse('true'), true);
        assert.equal(TBoolean.parse(1), true);
        assert.equal(TBoolean.parse('1'), true);
        assert.equal(TBoolean.parse('-5'), true);
        assert.equal(TBoolean.parse('64'), true);
        assert.equal(TBoolean.parse(new TBoolean(true)), true);
        assert.equal(TBoolean.parse(false), false);
        assert.equal(TBoolean.parse('false'), false);
        assert.equal(TBoolean.parse(0), false);
        assert.equal(TBoolean.parse('0'), false);
        assert.equal(TBoolean.parse(NaN), false);
        assert.equal(TBoolean.parse(''), false);
        assert.equal(TBoolean.parse('foo'), false);
        assert.equal(TBoolean.parse(undefined), false);
        assert.equal(TBoolean.parse(null), false);
        assert.equal(TBoolean.parse({}), false);
        assert.equal(TBoolean.parse([]), false);
        assert.equal(TBoolean.parse(function() {}), false);
        assert.equal(TBoolean.parse({a: 'foo', b: 3}), false);
        assert.equal(TBoolean.parse([1, 2]), false);
        assert.equal(TBoolean.parse(new TBoolean(false)), false);
    });

    it('TBoolean.valueOf', () => {
        assert.deepEqual(TBoolean.valueOf(true), new TBoolean(true));
        assert.deepEqual(TBoolean.valueOf(false), new TBoolean(false));
    });

    it('TBoolean.compare', () => {
        assert.equal(TBoolean.compare(true, false), 1);
        assert.equal(TBoolean.compare(false, true), -1);
        assert.equal(TBoolean.compare(true, true), 0);
        assert.equal(TBoolean.compare(false, false), 0);
    });

    it('TBoolean.toString', () => {
        assert.equal(TBoolean.toString(true), 'true');
        assert.equal(TBoolean.toString(new TBoolean(true)), 'true');
        assert.equal(TBoolean.toString(false), 'false');
        assert.equal(TBoolean.toString(new TBoolean(false)), 'false');
    });

});
