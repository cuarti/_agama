
import * as assert from 'assert';
import {StringType} from '../../src';


describe('@agama/core/types/StringType', () => {

    it('StringType.TYPE', () => assert.equal(StringType.TYPE, 'string'));

    it('StringType.is', () => {
        assert(StringType.is('text'));
        assert(StringType.is('219'));
        assert(!StringType.is(false));
        assert(!StringType.is(4));
        assert(!StringType.is(3.14));
        assert(!StringType.is(NaN));
        assert(!StringType.is(null));
        assert(!StringType.is(undefined));
        assert(!StringType.is({foo: 317}));
        assert(!StringType.is([0, 1]));
    });

    it('StringType.firstToUpperCase', () => {
        assert.equal(StringType.firstToUpperCase('hello'), 'Hello');
        assert.equal(StringType.firstToUpperCase('1and1'), '1and1');
    });

    it('StringType.contains', () => {
        assert(StringType.contains('foobar', 'foo'));
        assert(!StringType.contains('foobar', 'O'));
    });

    it('StringType.startsWith', () => {
        assert(StringType.startsWith('foobar', 'foo'));
        assert(StringType.startsWith('baz', 'b'));
    });

    it('StringType.endsWith', () => {
        assert(StringType.endsWith('foobar', 'bar'));
        assert(StringType.endsWith('baz', 'z'));
    });

    it('StringType.occurrences', () => {
        assert.equal(StringType.occurrences('foo bar baz foobar', 'ba'), 3);
    });

    it('StringType.join', () => {
        assert.equal(StringType.join( '-', 'a', 'b', 'c', 'd'), 'a-b-c-d');
    });

    it('StringType.humanize', () => {
        assert.equal(StringType.humanize('UserAgentAdapter'), 'User agent adapter');
        assert.equal(StringType.humanize('userAgentAdapter'), 'User agent adapter');
        assert.equal(StringType.humanize('user-agent-adapter'), 'User agent adapter');
        assert.equal(StringType.humanize('User-Agent-Adapter'), 'User agent adapter');
        assert.equal(StringType.humanize('user_agent_adapter'), 'User agent adapter');
        assert.equal(StringType.humanize('User_Agent_Adapter'), 'User agent adapter');
    });

    it('StringType.enlarge', () => {
        assert.equal(StringType.enlarge('a', '_', 4), '___a');
        assert.equal(StringType.enlarge('a', '_', 4, false), 'a___');
        assert.equal(StringType.enlarge('32', '0', 3), '032');
        assert.equal(StringType.enlarge('32', '0', 3, false), '320');
        assert.equal(StringType.enlarge('32.', '36', 10, false), '32.3636363');
    });

});
