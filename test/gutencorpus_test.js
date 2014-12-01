'use strict';

var gut = require('../lib/gutencorpus.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['gutencorpus'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'finds results for a common word': function(test) {
    test.expect(2);
    gut.search(' misled ').done(function(result) {
      test.equals(Object.prototype.toString.call(result), '[object Array]', 'expectd an array result');
      test.ok(result.length > 0, 'expected a non-empty result');
      test.done();
    });
  },
  'finds nothing for a garbage word': function(test) {
    test.expect(1);
    gut.search('laisjdlkasjdlksajldkjasldkj').done(function(result) {
      test.ok(result.length === 0, 'expected a zero-length result');
      test.done();
    });
  },
  'finds only the correct case when caseSensitive option is true': function(test) {
    test.expect(1);
    gut.search('Afraid', {caseSensitive: true}).done(function(result) {
      // set result to anything not containing the substring "Afraid"
      result = result.filter(function(el) {
        return el.indexOf('Afraid') === -1;
      });
      test.ok(result.length === 0, 'expected a zero-length result');
      test.done();
    });
  }
};
