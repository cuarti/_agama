
import * as assert from 'assert';
import {TString} from '../../src';


describe('@agama/core/types/TString', () => {

    it('TString.TYPE', () => assert.equal(TString.TYPE, 'string'));

    it('TString.is', () => {
        assert(TString.is('text'));
        assert(TString.is('219'));
        assert(!TString.is(false));
        assert(!TString.is(4));
        assert(!TString.is(3.14));
        assert(!TString.is(NaN));
        assert(!TString.is(null));
        assert(!TString.is(undefined));
        assert(!TString.is({foo: 317}));
        assert(!TString.is([0, 1]));
    });

    it('TString.firstToUpperCase', () => {
        assert.equal(TString.firstToUpperCase('hello'), 'Hello');
        assert.equal(TString.firstToUpperCase('1and1'), '1and1');
    });

    it('TString.contains', () => {
        assert(TString.contains('foobar', 'foo'));
        assert(!TString.contains('foobar', 'O'));
    });

    it('TString.startsWith', () => {
        assert(TString.startsWith('foobar', 'foo'));
        assert(TString.startsWith('baz', 'b'));
    });

    it('TString.endsWith', () => {
        assert(TString.endsWith('foobar', 'bar'));
        assert(TString.endsWith('baz', 'z'));
    });

    it('TString.occurrences', () => {
        assert.equal(TString.occurrences('foo bar baz foobar', 'ba'), 3);
    });

    it('TString.humanize', () => {
        assert.equal(TString.humanize('UserAgentAdapter'), 'User agent adapter');
        assert.equal(TString.humanize('userAgentAdapter'), 'User agent adapter');
        assert.equal(TString.humanize('user-agent-adapter'), 'User agent adapter');
        assert.equal(TString.humanize('User-Agent-Adapter'), 'User agent adapter');
        assert.equal(TString.humanize('user_agent_adapter'), 'User agent adapter');
        assert.equal(TString.humanize('User_Agent_Adapter'), 'User agent adapter');
    });

    it('TString.enlarge', () => {
        assert.equal(TString.enlarge('a', '_', 4), '___a');
        assert.equal(TString.enlarge('a', '_', 4, false), 'a___');
        assert.equal(TString.enlarge('32', '0', 3), '032');
        assert.equal(TString.enlarge('32', '0', 3, false), '320');
        assert.equal(TString.enlarge('32.', '36', 10, false), '32.3636363');
    });

});
