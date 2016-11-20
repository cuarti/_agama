
import * as assert from 'assert';
import {argsToArray} from '../../src';


describe('@agama/core/helpers/argsToArray', () => {

    it('argsToArray', () => {

        (function(...chars) {

            let args = argsToArray(arguments);

            assert(args instanceof Array);
            assert.deepEqual(args, ['a', 'b', 'c']);

        })('a', 'b', 'c');

    });

});