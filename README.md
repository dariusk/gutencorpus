# gutencorpus

This module contains the top 100-ish ebooks on Project Gutenberg, and lets you search them for all sentences containing a particular substring.

## Getting Started
Install the module with: `npm install gutencorpus`

```javascript
var gutencorpus = require('gutencorpus');
gutencorpus.search('misled', {caseSensitive: true})
  .done(function(result) {
    console.log(result);
  });
```

Here's an example of using search results to create new-ish sentences:

```javascript
gutencorpus.search(' believe he ')
  .done(function(results) {
    var newResults = results.map(function(sentence) {
      return 'He\'s the type of guy who ' + sentence.replace(/.*believe he /,'');
    });
    console.log(newResults);
    /*
      [ 'He\'s the type of guy who _did_--I heard something about it--but I hardly know what--something about Mr.',
        'He\'s the type of guy who chiefly lived, but his studying the law was a mere pretence, and being now free from all restraint, his life was a life of idleness and dissipation.',
        'He\'s the type of guy who will ever live at Netherfield any more.',
        'He\'s the type of guy who could go any further so scared he hadn\'t hardly any strength left, he said.',
        ... ]
    */
  });
```

## Documentation

The `gutencorpus` object contains one function: `search`, which returns a promise (using [Underscore.Deferred](https://www.npmjs.org/package/underscore.deferred), which follows JQuery's Deferred implementation).

Search takes an `options` object, which itself currently supports one option: `caseSensitive`. By default this is `false` (meaning your searches are case insensitive), but you can set it to `true` to get case-sensitive responses as in the first example above.

This is essentially a lightweight version of hugovk's [gutengrep](https://github.com/hugovk/gutengrep/) -- please check that out if you want a comprehensive implementation that works with the entire Gutenberg corpus (but also requires more setup and is in Python).

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2014 Darius Kazemi  
Licensed under the MIT license.
