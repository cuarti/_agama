
import * as assert from 'assert';
import {TBoolean} from '../../src';


describe('@agama/core/types/TBoolean', () => {

    it('TBoolean.TYPE', () => assert.equal(TBoolean.TYPE, 'boolean'));

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

});
