
import * as assert from 'assert';
import {tstring} from '../../src';


describe('@agama/types/tstring', () => {

    it('tstring.TYPE', () => assert.equal(tstring.TYPE, 'string'));

    it('tstring.is', () => {
        assert(tstring.is('text'));
        assert(tstring.is('219'));
        assert(!tstring.is(false));
        assert(!tstring.is(4));
        assert(!tstring.is(3.14));
        assert(!tstring.is(NaN));
        assert(!tstring.is(null));
        assert(!tstring.is(undefined));
        assert(!tstring.is({foo: 317}));
        assert(!tstring.is([0, 1]));
    });

    it('tstring.firstToUpperCase', () => {
        assert.equal(tstring.firstToUpperCase('hello'), 'Hello');
        assert.equal(tstring.firstToUpperCase('1and1'), '1and1');
    });

    it('tstring.contains', () => {
        assert(tstring.contains('foobar', 'foo'));
        assert(!tstring.contains('foobar', 'O'));
    });

    it('tstring.startsWith', () => {
        assert(tstring.startsWith('foobar', 'foo'));
        assert(tstring.startsWith('baz', 'b'));
    });

    it('tstring.endsWith', () => {
        assert(tstring.endsWith('foobar', 'bar'));
        assert(tstring.endsWith('baz', 'z'));
    });

    it('tstring.humanize', () => {
        assert.equal(tstring.humanize('UserAgentAdapter'), 'User agent adapter');
        assert.equal(tstring.humanize('userAgentAdapter'), 'User agent adapter');
        assert.equal(tstring.humanize('user-agent-adapter'), 'User agent adapter');
        assert.equal(tstring.humanize('User-Agent-Adapter'), 'User agent adapter');
        assert.equal(tstring.humanize('user_agent_adapter'), 'User agent adapter');
        assert.equal(tstring.humanize('User_Agent_Adapter'), 'User agent adapter');
    });

    it('tstring.enlarge', () => {
        assert.equal(tstring.enlarge('a', '_', 4), '___a');
        assert.equal(tstring.enlarge('a', '_', 4, false), 'a___');
        assert.equal(tstring.enlarge('32', '0', 3), '032');
        assert.equal(tstring.enlarge('32', '0', 3, false), '320');
        assert.equal(tstring.enlarge('32.', '36', 10, false), '32.3636363');
    });

});
