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
  search: function(text) {
    var dfd = new _.Deferred();
    fs.readFile(__dirname + '/corpus.txt', 'utf8', function(error, data) {
      var sentences = data.match( /[^\.!\?]+[\.!\?]+/g );
      var result = _.filter(sentences, function(el) {
        var normalized = el.toLowerCase().trim();
        return normalized.indexOf(text.toLowerCase()) > -1;
      });
      dfd.resolve(result);
    });
    return dfd.promise();
  }
};
