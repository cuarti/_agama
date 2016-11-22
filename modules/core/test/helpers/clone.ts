
import * as assert from 'assert';
import {clone, Cloneable} from '../../src';


describe('@agama/core/helpers/clone', () => {

    it('clone', () => {

        let now = new Date();

        function A() {}

        class Foo implements Cloneable {

            private a;
            private b;

            public constructor(a, b) {
                this.a = a;
                this.b = b;
            }

            public clone(): Object {
                return {a: this.a, b: this.b};
            }

        }

        // number
        assert.equal(clone(4), 4);
        assert.equal(clone(3.14), 3.14);

        // boolean
        assert.equal(clone(true), true);
        assert.notEqual(clone(true), false);

        // string
        assert.equal(clone('foo'), 'foo');

        // undefined
        assert.equal(clone(undefined), undefined);

        // null
        assert.equal(clone(null), null);

        // Date
        assert.deepEqual(clone(now), now);

        //TODO: Here test Function
        //TODO: Create custom equals and deepEquals function to test objects

        // Array
        assert.deepEqual(clone([1, 'a', true]), [1, 'a', true]);
        //Must be true with deep and false without
        assert.deepEqual(clone([1, 'a', true, {a: 1}]), [1, 'a', true, {a: 1}]);
        //Must be true with and without deep
        assert.deepEqual(clone([1, 'a', true, {a: 1}], {deep: true}), [1, 'a', true, {a: 1}]);
        // assert.notEqual(clone([1, 'a', true, {a: 1}]), [1, 'a', true, {a: 1}]);
        assert.notEqual(clone([1, 'a', true, {a: 1}])[3], {a: 1});
        assert.deepEqual(clone([new Foo(1, 2)], {deep: true}), [new Foo(1, 2)]);

        // Object
        // assert.equal(clone(new A()).prototype, A);
        assert.deepEqual(clone({a: 'foo', b: 1}), {a: 'foo', b: 1});
        assert.deepEqual(clone({a: 'foo', b: [true]}, {deep: true}), {a: 'foo', b: [true]});
        assert.deepEqual(clone(new Foo(1, 2)), new Foo(1, 2));
        assert.deepEqual(clone({foo: new Foo(1, 2)}, {deep: true}), {foo: new Foo(1, 2)});
        assert.deepEqual(clone({a: 'foo', b: 1, c: {foo: 'baz'}}), {a: 'foo', b: 1, c: {foo: 'baz'}});
        assert.deepEqual(clone({a: 'foo', b: 1, c: {foo: 'baz'}}).c, {foo: 'baz'});
        assert.notEqual(clone({a: 'foo', b: [true]}), {a: 'foo', b: [true]});
        assert.notEqual(clone({a: 'foo', b: 1, c: true, d: [1, 2]}), {a: 'foo', b: 1, c: true, d: [1, 2]});
        assert.notEqual(clone({a: 'foo', b: 1}), {a: 'foo', b: 1, c: true});
        assert.notEqual(clone({a: 'foo', b: 1, c: {bar: 'baz'}}), {a: 'foo', b: 1, c: {bar: 'baz'}});

    });

});
