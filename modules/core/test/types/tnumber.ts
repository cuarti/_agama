
import * as assert from 'assert';
import {tnumber} from '../../src';


describe('@agama/types/tnumber', () => {

    it('tnumber.TYPE', () => assert.equal(tnumber.TYPE, 'number'));

    it('tnumber.is', () => {
        assert(tnumber.is(4));
        assert(tnumber.is(3.14));
        assert(tnumber.is(NaN));
        assert(!tnumber.is(true));
        assert(!tnumber.is(null));
        assert(!tnumber.is(undefined));
        assert(!tnumber.is('text'));
        assert(!tnumber.is('219'));
        assert(!tnumber.is({foo: 317}));
        assert(!tnumber.is([0, 1]));
    });

});
