node-specmd-reporter
================================

Node Test reporter that generates spec description in Markdown

[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]


INSTALL
---------------------------------------

```sh
$ npm install --save-dev node-specmd-reporter
```

USAGE
---------------------------------------

```sh
node --test --test-reporter node-specmd-reporter ...
```

SPEC
---------------------------------------

### Spec MD Reporter: generates spec description in Markdown
  - when rendering top level tests:
    - renders bullet list marker `-` at the beginning of a line, followed by test title
  - when top level suites enclose tests:
    - renders headings `###` at the beginning of a line, followed by top level suite title
    - renders bullet list marker with indentation `  -` at the beginning of a line, followed by inner test title
  - when top level outer suites enclose inner suites, and inner suites enclose innermost tests:
    - renders headings `###` at the beginning of a line, followed by top level outer suite title
    - renders bullet list marker with indentation `  -` at the beginning of a line, followed by inner suite title
    - renders bullet list marker with double indentation `    -` at the beginning of a line, followed by innermost test title
  - when multiple top level suites exist:
    - insert blank line after each top level suite


AUTHOR
---------------------------------------
* [Takuto Wada](https://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](https://twada.mit-license.org) license.

[npm-url]: https://www.npmjs.com/package/node-specmd-reporter
[npm-image]: https://badge.fury.io/js/node-specmd-reporter.svg

[license-url]: https://twada.mit-license.org
[license-image]: https://img.shields.io/badge/license-MIT-brightgreen.svg
