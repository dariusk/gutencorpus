/*
 * gutencorpus
 * https://github.com/dariusk/gutencorpus
 *
 * Copyright (c) 2043 Darius Kazemi
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var _ = require('underscore');
_.mixin(require('underscore.deferred'));

module.exports = {
  search: function(text, options) {
    var dfd = new _.Deferred();
    options = options || {};
    fs.readFile(__dirname + '/corpus.txt', 'utf8', function(error, data) {
      var sentences = data.match( /[^\.!\?]+[\.!\?]+/g );
      if (!options.caseSensitive) {
        text = text.toLowerCase();
      }
      var result = _.filter(sentences, function(el) {
        var normalized = el.trim();
        if (!options.caseSensitive) {
          normalized = normalized.toLowerCase();
        }
        return normalized.indexOf(text) > -1;
      });
      dfd.resolve(result);
    });
    return dfd.promise();
  }
};
