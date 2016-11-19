
import * as assert from 'assert';
import {TNumber} from '../../src';


describe('@agama/core/types/TNumber', () => {

    it('TNumber.TYPE', () => assert.equal(TNumber.TYPE, 'number'));

    it('TNumber.is', () => {
        assert(TNumber.is(4));
        assert(TNumber.is(3.14));
        assert(TNumber.is(NaN));
        assert(!TNumber.is(true));
        assert(!TNumber.is(null));
        assert(!TNumber.is(undefined));
        assert(!TNumber.is('text'));
        assert(!TNumber.is('219'));
        assert(!TNumber.is({foo: 317}));
        assert(!TNumber.is([0, 1]));
    });

});
