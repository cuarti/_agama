
import * as assert from 'assert';
import {equals, Equalitable} from '../../src';


describe('@agama/core/helpers/equals', () => {

    class Foo implements Equalitable {

        private a;
        private b;

        public constructor(a, b) {
            this.a = a;
            this.b = b;
        }

        public equals(other: Object): boolean {

            if(this === other) {
                return true;
            }

            // if(!other.isPrototypeOf(Foo)) {
            //     return false;
            // }

            let o = <Foo> other;

            return this.a === o.a && this.b === o.b;
        }

    }

    it('equals', () => {

        function A() {}

        // Different types
        assert(!equals(1, true));
        assert(!equals('4', 4));
        assert(!equals(true, 'true'));

        // number
        assert(equals(5, 5));
        assert(equals(4.85, 4.85));
        assert(equals(Math.PI, Math.PI));
        assert(!equals(7, 11));
        assert(!equals(2, 2.00000000001));

        // boolean
        assert(equals(true, true));
        assert(equals(false, false));
        assert(!equals(true, false));

        // string
        assert(equals('foo', 'foo'));
        assert(!equals('bar', 'Bar'));

        // undefined
        assert(equals(undefined, undefined));
        assert(!equals(undefined, 'undefined'));

        // null
        assert(equals(null, null));
        assert(!equals(null, 'null'));

        // Different prototype
        assert(!equals({}, new A()));

        // Date
        assert(equals(new Date(2012, 1, 4), new Date(2012, 1, 4)));
        assert(!equals(new Date(2016, 7, 31), new Date(2016, 7, 31, 0, 0, 0, 1)));

        // Function
        assert(equals(A, A));
        assert(!equals(A, function() {}));
        assert(!equals(function() {}, function() {}));

        // Array
        assert(equals([1, 2], [1, 2]));
        assert(equals(['foo', {a: 1}], ['foo', {a: 1}], {deep: true}));
        assert(!equals(['foo', {a: 1}], ['foo', {a: 1}]));
        assert(!equals(['a', 'b'], [1, 2]));
        assert(!equals([4, 'foo'], {0: 4, 1: 'foo'}));
        assert(equals([new Foo(1, 2)], [new Foo(1, 2)], {deep: true}));

        // Object
        assert(equals({a: 'foo', b: 1, c: true}, {a: 'foo', b: 1, c: true}));
        assert(equals({a: 'foo', b: 'bar'}, {b: 'bar', a: 'foo'}));
        assert(equals({a: 'foo', b: [true]}, {a: 'foo', b: [true]}, {deep: true}));
        assert(equals(new Foo('foo', 1), new Foo('foo', 1)));
        assert(equals({foo: new Foo(1, 2)}, {foo: new Foo(1, 2)}, {deep: true}));
        assert(!equals({a: 'foo', b: [true]}, {a: 'foo', b: [true]}));
        assert(!equals({a: 'foo', b: 1, c: true, d: [1, 2]}, {a: 'foo', b: 1, c: true, d: [1, 2]}));
        assert(!equals({a: 'foo', b: 1}, {a: 'foo', b: 1, c: true}));
        assert(!equals({a: 'foo', b: 1, c: {bar: 'baz'}}, {a: 'foo', b: 1, c: {bar: 'baz'}}));

    });

});
