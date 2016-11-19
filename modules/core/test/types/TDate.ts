
import * as assert from 'assert';
import {TDate} from '../../src';


describe('@agama/core/types/TDate', () => {

    it('TDate.INSTANCE', () => assert.equal(TDate.INSTANCE, Date));

    it('TDate.is', () => {
        assert(TDate.is(new Date()));
        assert(!TDate.is(false));
        assert(!TDate.is(4));
        assert(!TDate.is(3.14));
        assert(!TDate.is(NaN));
        assert(!TDate.is(null));
        assert(!TDate.is(undefined));
        assert(!TDate.is('text'));
        assert(!TDate.is('219'));
        assert(!TDate.is({foo: 317}));
        assert(!TDate.is([0, 1]));
    });

});
