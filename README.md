node-descmd-reporter
================================

Node Test reporter that generates description tree in Markdown

[![Build Status][ci-image]][ci-url]
[![NPM version][npm-image]][npm-url]
[![Code Style][style-image]][style-url]
[![License][license-image]][license-url]
![Supported Node Version](https://img.shields.io/node/v/node-descmd-reporter)


INSTALL
---------------------------------------

```sh
$ npm install --save-dev node-descmd-reporter
```

USAGE
---------------------------------------

```sh
node --test --test-reporter node-descmd-reporter ...
```

SPEC
---------------------------------------

### DescMD Reporter: generates description tree in Markdown
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

[ci-image]: https://github.com/twada/node-descmd-reporter/workflows/Node.js%20CI/badge.svg
[ci-url]: https://github.com/twada/node-descmd-reporter/actions?query=workflow%3A%22Node.js+CI%22

[npm-url]: https://www.npmjs.com/package/node-descmd-reporter
[npm-image]: https://badge.fury.io/js/node-descmd-reporter.svg

[style-url]: https://github.com/neostandard/neostandard
[style-image]: https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat

[license-url]: https://twada.mit-license.org
[license-image]: https://img.shields.io/badge/license-MIT-brightgreen.svg
