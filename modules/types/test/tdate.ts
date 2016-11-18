
import * as assert from 'assert';
import {tdate} from '../src/tdate';


describe('@agama/types/tdate', () => {

    it('tdate.INSTANCE', () => assert.equal(tdate.INSTANCE, Date));

    it('tdate.is', () => {
        assert(tdate.is(new Date()));
        assert(!tdate.is(false));
        assert(!tdate.is(4));
        assert(!tdate.is(3.14));
        assert(!tdate.is(NaN));
        assert(!tdate.is(null));
        assert(!tdate.is(undefined));
        assert(!tdate.is('text'));
        assert(!tdate.is('219'));
        assert(!tdate.is({foo: 317}));
        assert(!tdate.is([0, 1]));
    });

});
