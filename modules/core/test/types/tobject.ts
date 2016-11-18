
import * as assert from 'assert';
import {tobject} from '../../src';


describe('@agama/types/tobject', () => {

    it('tobject.TYPE', () => assert.equal(tobject.TYPE, 'object'));

    it('tobject.is', () => {
        assert(tobject.is({foo: 317}));
        assert(tobject.is(null));
        assert(tobject.is([0, 1]));
        assert(!tobject.is(true));
        assert(!tobject.is(false));
        assert(!tobject.is(4));
        assert(!tobject.is(3.14));
        assert(!tobject.is(NaN));
        assert(!tobject.is(undefined));
        assert(!tobject.is('text'));
        assert(!tobject.is('219'));
    });

    it('tobject.keys', () => {
        assert.deepEqual(tobject.keys({a: 1, b: 2, c: 3}), ['a', 'b', 'c']);
    });

    it('tobject.values', () => {
        assert.deepEqual(tobject.values({a: 1, b: 2, c: 3}), [1, 2, 3]);
    });

    it('tobject.length', () => {
        assert.equal(tobject.length({a: 1, b: 2, c: 3}), 3);
    });

    it('tobject.forEach', () => {
        tobject.forEach<number>({a: 1, b: 2, c: 3}, (v, k, o) => {
            assert.equal(typeof v, 'number');
            assert.equal(typeof k, 'string');
            assert(o instanceof Object);
        });
    });

    it('tobject.map', () => {
        assert.deepEqual(tobject.map<number, any>({a: 1, b: 0.9, c: 3.14},
            (v => Number.isInteger(v))), {a: true, b: false, c: false});
    });

    it('tobject.filter', () => {
        assert.deepEqual(tobject.filter<string>({a: 'foo', b: 'bar'}, v => v.indexOf('o') >= 0), {a: 'foo'});
    });

    it('tobject.reduce', () => {
        assert.equal(tobject.reduce<number, number>({a: 1, b: 2, c: 3}, (r, v) => r + v, 0), 6);
    });

    it('tobject.every', () => {
        assert(!tobject.every<number>({a: 1, b: 0.9, c: 3}, v => Number.isInteger(v)));
    });

    it('tobject.some', () => {
        assert(tobject.some<number>({a: 1, b: 3, c: 0.9}, v => !Number.isInteger(v)));
    });

    it('tobject.hasKeys', () => {
        assert(tobject.hasKeys({a: 1, b: 2, c: 3, d: 4, e: 5}, ['c', 'd']));
        assert(!tobject.hasKeys({a: 1, b: 2, c: 3, d: 4, e: 5}, ['c', 'f']));
    });

    it('tobject.extract', () => {
        assert.deepEqual(tobject.extract({a: 1, b: 2, c: 3, d: 4, e: 5}, ['b', 'd']), {b: 2, d: 4});
        assert.deepEqual(tobject.extract({a: 1, b: 2, c: 3, d: 4, e: 5}, ['b', 'd', 'f']), {b: 2, d: 4});
    });

});
