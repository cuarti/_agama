
import * as assert from 'assert';
import {TBoolean} from '../../src';

describe('@agama/core/types/Boolean', () => {

    it('Boolean.TYPE', () => assert.equal(TBoolean.TYPE, 'boolean'));

    it('Boolean.TRUE', () => assert.equal(TBoolean.TRUE, true));

    it('Boolean.FALSE', () => assert.equal(TBoolean.FALSE, false));

    //TODO: Pasar estos tests de Boolean#value a Boolean.parse
    it('Boolean#value', () => {
        assert.equal(new TBoolean(true).value(), true);
        assert.equal(new TBoolean('true').value(), true);
        assert.equal(new TBoolean(1).value(), true);
        assert.equal(new TBoolean('1').value(), true);
        assert.equal(new TBoolean('-5').value(), true);
        assert.equal(new TBoolean('64').value(), true);
        assert.equal(new TBoolean(false).value(), false);
        assert.equal(new TBoolean('false').value(), false);
        assert.equal(new TBoolean(0).value(), false);
        assert.equal(new TBoolean('0').value(), false);
        assert.equal(new TBoolean(NaN).value(), false);
        assert.equal(new TBoolean('').value(), false);
        assert.equal(new TBoolean('foo').value(), false);
        assert.equal(new TBoolean(undefined).value(), false);
        assert.equal(new TBoolean(null).value(), false);
        assert.equal(new TBoolean({}).value(), false);
        assert.equal(new TBoolean([]).value(), false);
        assert.equal(new TBoolean(function() {}).value(), false);
        assert.equal(new TBoolean({a: 'foo', b: 3}).value(), false);
        assert.equal(new TBoolean([1, 2]).value(), false);
    });

    it('Boolean.is', () => {
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

    it('Boolean.parse', () => {
        assert.equal(TBoolean.parse(true), true);
        assert.equal(TBoolean.parse(1), true);
        assert.equal(TBoolean.parse('true'), true);
        assert.equal(TBoolean.parse('1'), true);
        assert.equal(TBoolean.parse(new TBoolean(true)), true);
    });

    it('Boolean.toString', () => {
        assert.equal(TBoolean.toString(true), 'true');
        assert.equal(TBoolean.toString(new TBoolean(true)), 'true');
    });

    it('Boolean.valueOf', () => {
        assert.deepEqual(TBoolean.valueOf(true), new TBoolean(true));
    });

    it('Boolean.compare', () => {
        assert.equal(TBoolean.compare(true, false), 1);
        assert.equal(TBoolean.compare(false, true), -1);
        assert.equal(TBoolean.compare(true, true), 0);
        assert.equal(TBoolean.compare(false, false), 0);
    });

    it('Boolean#compareTo', () => {
        assert.equal(new TBoolean(true).compareTo(false), 1);
        assert.equal(new TBoolean(false).compareTo(true), -1);
        assert.equal(new TBoolean(true).compareTo(true), 0);
        assert.equal(new TBoolean(false).compareTo(false), 0);
    });

    it('Boolean#clone', () => {
        assert.deepEqual(new TBoolean(true).clone(), new TBoolean(true));
        assert.deepEqual(new TBoolean(false).clone(), new TBoolean(false));
    });

    it('Boolean#equals', () => {
        assert(new TBoolean(true).equals(true));
        assert(new TBoolean(false).equals(false));
    });

    it('TBoolean#toString', () => {
        assert.equal(new TBoolean(true).toString(), 'true');
        assert.equal(new TBoolean(false).toString(), 'false');
    });

    it('TBoolean#value', () => {
        assert.equal(new TBoolean(true).value(), true);
        assert.equal(new TBoolean(false).value(), false);
    });

});
