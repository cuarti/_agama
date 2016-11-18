
import * as assert from 'assert';
import {tboolean} from '../../src';


describe('@agama/types/tboolean', () => {

    it('tboolean.TYPE', () => assert.equal(tboolean.TYPE, 'boolean'));

    it('tboolean.is', () => {
        assert(tboolean.is(true));
        assert(tboolean.is(false));
        assert(!tboolean.is(4));
        assert(!tboolean.is(3.14));
        assert(!tboolean.is(NaN));
        assert(!tboolean.is(null));
        assert(!tboolean.is(undefined));
        assert(!tboolean.is('text'));
        assert(!tboolean.is('219'));
        assert(!tboolean.is({foo: 317}));
        assert(!tboolean.is([0, 1]));
    });

});
