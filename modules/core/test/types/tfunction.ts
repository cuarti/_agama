
import * as assert from 'assert';
import {tfunction} from '../../src';


describe('@agama/types/tfunction', () => {

    let sum: any = function(...vals) {
        return this.val = vals.reduce((r, v) => r + v);
    };

    it('tfunction.INSTANCE', () => assert.equal(tfunction.INSTANCE, Function));

    it('tfunction.is', () => {
        assert(tfunction.is(function() {}));
        assert(tfunction.is(() => null));
        assert(!tfunction.is(true));
        assert(!tfunction.is(false));
        assert(!tfunction.is(4));
        assert(!tfunction.is(3.14));
        assert(!tfunction.is(NaN));
        assert(!tfunction.is(null));
        assert(!tfunction.is(undefined));
        assert(!tfunction.is('text'));
        assert(!tfunction.is('219'));
        assert(!tfunction.is({foo: 317}));
        assert(!tfunction.is([0, 1]));
    });

    it('tfunction.call', () => {
        assert.equal(tfunction.call<number>(sum, sum, 1, 2, 3, 4), 10);
        assert.equal(tfunction.apply<number>(sum, sum, [1, 2, 3, 4]), 10);
        assert.equal(sum.val, 10);
    });

});
