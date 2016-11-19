
import * as assert from 'assert';
import {TArray} from '../../src';


describe('@agama/core/types/TArray', () => {

    it('TArray.INSTANCE', () => assert.equal(TArray.INSTANCE, Array));

    it('TArray.is', () => {
        assert(TArray.is([0, 1]));
        assert(!TArray.is(true));
        assert(!TArray.is(false));
        assert(!TArray.is(4));
        assert(!TArray.is(3.14));
        assert(!TArray.is(NaN));
        assert(!TArray.is(null));
        assert(!TArray.is(undefined));
        assert(!TArray.is('text'));
        assert(!TArray.is('219'));
        assert(!TArray.is({foo: 317}));
    });

    it('TArray.isArrayOf', () => {
        assert(TArray.isArrayOf([1, 4.2], 'number'));
        assert(TArray.isArrayOf([new Date(), {}, function() {}], Object));
        assert(TArray.isArrayOf([new Date(), new Date(2016, 0, 1)], Date));
        assert(!TArray.isArrayOf([1, true], 'number'));
    });

    it('TArray.contains', () => {
        assert(TArray.contains([1, 2, 3], 2));
        assert(!TArray.contains([1, 2, 3], 1, 1));
        assert(!TArray.contains([1, 2, 3], 4));
    });

    it('TArray.allIndexOf', () => {
        assert.deepEqual(TArray.allIndexOf(['foo', 'bar', 'bar', 'foo', 'foo', 'bar'], 'foo'), [0, 3, 4]);
        assert.deepEqual(TArray.allIndexOf(['foo', 'bar', 'bar', 'foo', 'foo', 'bar'], 'foo', 1), [3, 4]);
    });

});
