
import * as assert from 'assert';
import {tarray} from '../src/tarray';


describe('@agama/types/tarray', () => {

    it('tarray.INSTANCE', () => assert.equal(tarray.INSTANCE, Array));

    it('tarray.is', () => {
        assert(tarray.is([0, 1]));
        assert(!tarray.is(true));
        assert(!tarray.is(false));
        assert(!tarray.is(4));
        assert(!tarray.is(3.14));
        assert(!tarray.is(NaN));
        assert(!tarray.is(null));
        assert(!tarray.is(undefined));
        assert(!tarray.is('text'));
        assert(!tarray.is('219'));
        assert(!tarray.is({foo: 317}));
    });

    it('tarray.isArrayOf', () => {
        assert(tarray.isArrayOf([1, 4.2], 'number'));
        assert(tarray.isArrayOf([new Date(), {}, function() {}], Object));
        assert(tarray.isArrayOf([new Date(), new Date(2016, 0, 1)], Date));
        assert(!tarray.isArrayOf([1, true], 'number'));
    });

    it('tarray.contains', () => {
        assert(tarray.contains([1, 2, 3], 2));
        assert(!tarray.contains([1, 2, 3], 1, 1));
        assert(!tarray.contains([1, 2, 3], 4));
    });

    it('tarray.allIndexOf', () => {
        assert.deepEqual(tarray.allIndexOf(['foo', 'bar', 'bar', 'foo', 'foo', 'bar'], 'foo'), [0, 3, 4]);
        assert.deepEqual(tarray.allIndexOf(['foo', 'bar', 'bar', 'foo', 'foo', 'bar'], 'foo', 1), [3, 4]);
    });

});
