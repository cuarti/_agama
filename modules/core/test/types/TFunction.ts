
import * as assert from 'assert';
import {TFunction} from '../../src';


describe('@agama/core/types/TFunction', () => {

    let sum: any = function(...vals) {
        return this.val = vals.reduce((r, v) => r + v);
    };

    it('TFunction.INSTANCE', () => assert.equal(TFunction.INSTANCE, Function));

    it('TFunction.is', () => {
        assert(TFunction.is(function() {}));
        assert(TFunction.is(() => null));
        assert(!TFunction.is(true));
        assert(!TFunction.is(false));
        assert(!TFunction.is(4));
        assert(!TFunction.is(3.14));
        assert(!TFunction.is(NaN));
        assert(!TFunction.is(null));
        assert(!TFunction.is(undefined));
        assert(!TFunction.is('text'));
        assert(!TFunction.is('219'));
        assert(!TFunction.is({foo: 317}));
        assert(!TFunction.is([0, 1]));
    });

    it('TFunction.call', () => {
        assert.equal(TFunction.call<number>(sum, sum, 1, 2, 3, 4), 10);
        assert.equal(TFunction.apply<number>(sum, sum, [1, 2, 3, 4]), 10);
        assert.equal(sum.val, 10);
    });

});
