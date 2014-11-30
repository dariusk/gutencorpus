# gutencorpus

This module contains the top 100-ish ebooks on Project Gutenberg, and lets you search them for all sentences containing a particular substring.

## Getting Started
Install the module with: `npm install gutencorpus`

```javascript
var gutencorpus = require('gutencorpus');
gutencorpus.search('misled')
  .done(function(result) {
    console.log(result);
  });
```

## Documentation

Coming soon.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2014 Darius Kazemi  
Licensed under the MIT license.
