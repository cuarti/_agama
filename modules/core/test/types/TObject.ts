
import * as assert from 'assert';
import {TObject} from '../../src';


describe('@agama/core/types/TObject', () => {

    it('TObject.TYPE', () => assert.equal(TObject.TYPE, 'object'));

    it('TObject.is', () => {
        assert(TObject.is({foo: 317}));
        assert(TObject.is(null));
        assert(TObject.is([0, 1]));
        assert(!TObject.is(true));
        assert(!TObject.is(false));
        assert(!TObject.is(4));
        assert(!TObject.is(3.14));
        assert(!TObject.is(NaN));
        assert(!TObject.is(undefined));
        assert(!TObject.is('text'));
        assert(!TObject.is('219'));
    });

    it('TObject.keys', () => {
        assert.deepEqual(TObject.keys({a: 1, b: 2, c: 3}), ['a', 'b', 'c']);
    });

    it('TObject.values', () => {
        assert.deepEqual(TObject.values({a: 1, b: 2, c: 3}), [1, 2, 3]);
    });

    it('TObject.size', () => {
        assert.equal(TObject.size({a: 1, b: 2, c: 3}), 3);
    });

    it('TObject.forEach', () => {
        TObject.forEach<number>({a: 1, b: 2, c: 3}, (v, k, o) => {
            assert.equal(typeof v, 'number');
            assert.equal(typeof k, 'string');
            assert(o instanceof Object);
        });
    });

    it('TObject.map', () => {
        assert.deepEqual(TObject.map<number, any>({a: 1, b: 0.9, c: 3.14},
            (v => Number.isInteger(v))), {a: true, b: false, c: false});
    });

    it('TObject.filter', () => {
        assert.deepEqual(TObject.filter<string>({a: 'foo', b: 'bar'}, v => v.indexOf('o') >= 0), {a: 'foo'});
    });

    it('TObject.reduce', () => {
        assert.equal(TObject.reduce<number, number>({a: 1, b: 2, c: 3}, (r, v) => r + v, 0), 6);
    });

    it('TObject.every', () => {
        assert(!TObject.every<number>({a: 1, b: 0.9, c: 3}, v => Number.isInteger(v)));
    });

    it('TObject.some', () => {
        assert(TObject.some<number>({a: 1, b: 3, c: 0.9}, v => !Number.isInteger(v)));
    });

    it('TObject.hasKeys', () => {
        assert(TObject.hasKeys({a: 1, b: 2, c: 3, d: 4, e: 5}, ['c', 'd']));
        assert(!TObject.hasKeys({a: 1, b: 2, c: 3, d: 4, e: 5}, ['c', 'f']));
    });

    it('TObject.extract', () => {
        assert.deepEqual(TObject.extract({a: 1, b: 2, c: 3, d: 4, e: 5}, ['b', 'd']), {b: 2, d: 4});
        assert.deepEqual(TObject.extract({a: 1, b: 2, c: 3, d: 4, e: 5}, ['b', 'd', 'f']), {b: 2, d: 4});
    });

});
