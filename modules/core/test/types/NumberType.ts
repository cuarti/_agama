
import * as assert from 'assert';
import {NumberType} from '../../src';


describe('@agama/core/types/NumberType', () => {

    it('NumberType.TYPE', () => assert.equal(NumberType.TYPE, 'number'));

    it('NumberType.is', () => {
        assert(NumberType.is(4));
        assert(NumberType.is(3.14));
        assert(NumberType.is(NaN));
        assert(!NumberType.is(true));
        assert(!NumberType.is(null));
        assert(!NumberType.is(undefined));
        assert(!NumberType.is('text'));
        assert(!NumberType.is('219'));
        assert(!NumberType.is({foo: 317}));
        assert(!NumberType.is([0, 1]));
    });

});
