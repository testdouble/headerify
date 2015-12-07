# headerify

Prints a standard little header of the package name & version at the top of the
bundle. Useful for libraries that want to distribute a bundle for inclusion in
non-browserify settings.

## Usage

To use headerify, first install it:

```
$ npm i --save-dev headerify
```

Then, wherever you've configured your browserify build, add the flag:

```
-p headerify
```

## Options

There are no options.

## Example

By adding `-p headerify` to our `browserify` invocation for
[testdouble.js](https://github.com/testdouble/testdouble.js), this header is
generated at the top of our bundle in
[dist/testdouble.js](https://github.com/testdouble/testdouble.js/blob/master/dist/testdouble.js):

``` javascript
/*
 * testdouble@0.7.2
 *
 *   A minimal test double library for TDD with JavaScript
 *
 *   https://github.com/testdouble/testdouble.js
 */
(function(f){if(typeof exports==="object".......
```
