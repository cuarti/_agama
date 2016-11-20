
import * as assert from 'assert';
import {clone} from '../../src';


describe('@agama/core/helpers/clone', () => {

    it('clone', () => {

        let now = new Date();

        function A() {}

        assert.equal(clone(4), 4);
        assert.equal(clone(3.14), 3.14);
        assert.equal(clone(true), true);
        assert.equal(!clone(true), false);
        assert.equal(clone('foo'), 'foo');
        assert.equal(clone(undefined), undefined);
        assert.equal(clone(null), null);
        assert.deepEqual(clone(now), now);
        //TODO: Here test Function
        assert.deepEqual(clone([1, 'a', true]), [1, 'a', true]);
        assert.deepEqual(clone([1, 'a', true, {a: 1}]), [1, 'a', true, {a: 1}]);
        assert.notEqual(clone([1, 'a', true, {a: 1}])[3], {a: 1});
        // assert.equal(clone(new A()).prototype, A);
        assert.deepEqual(clone({a: 'foo', b: 1}), {a: 'foo', b: 1});
        assert.deepEqual(clone({a: 'foo', b: 1, c: {foo: 'baz'}}), {a: 'foo', b: 1, c: {foo: 'baz'}});
        assert.deepEqual(clone({a: 'foo', b: 1, c: {foo: 'baz'}}).c, {foo: 'baz'});

    });

});
