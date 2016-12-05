
import * as assert from 'assert';
import {Boolean} from '../../src';


describe('@agama/core/types/Boolean', () => {

    it('Boolean.TYPE', () => assert.equal(Boolean.TYPE, 'boolean'));

    it('Boolean.is', () => {
        assert(Boolean.is(true));
        assert(Boolean.is(false));
        assert(!Boolean.is(4));
        assert(!Boolean.is(3.14));
        assert(!Boolean.is(NaN));
        assert(!Boolean.is(null));
        assert(!Boolean.is(undefined));
        assert(!Boolean.is('text'));
        assert(!Boolean.is('219'));
        assert(!Boolean.is({foo: 317}));
        assert(!Boolean.is([0, 1]));
    });

});
