# url-parser

![npm](https://img.shields.io/npm/v/url-parser.svg) ![license](https://img.shields.io/npm/l/url-parser.svg) ![github-issues](https://img.shields.io/github/issues/YemSalat/url-parser.svg)  ![Circle CI build status](https://circleci.com/gh/YemSalat/url-parser.svg?style=svg)

Url parsing lib w/ handy methods

![nodei.co](https://nodei.co/npm/url-parser.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/YemSalat/url-parser.svg)
![stars](https://img.shields.io/github/stars/YemSalat/url-parser.svg)
![forks](https://img.shields.io/github/forks/YemSalat/url-parser.svg)

![forks](https://img.shields.io/github/forks/YemSalat/url-parser.svg)

![](https://david-dm.org/YemSalat/url-parser/status.svg)
![](https://david-dm.org/YemSalat/url-parser/dev-status.svg)

## Features


## Install

`npm install --save url-parser`


## Scripts

 - **npm run readme** : `node ./node_modules/.bin/node-readme`
 - **npm run test** : `./node_modules/.bin/babel-tape-runner ./spec/**/*.spec.js | ./node_modules/.bin/tap-spec`
 - **npm run zuul** : `./node_modules/.bin/zuul --local --open -- spec/**/*.spec.js`
 - **npm run build** : `npm run test && npm run readme && ./node_modules/.bin/babel -d ./dist ./src`
 - **npm run publish** : `git push && git push --tags && npm publish`
 - **npm run lint** : `./node_modules/.bin/standard 'src/**/*.js' 'spec/**/*.js'`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[lodash](https://www.npmjs.com/package/lodash) | ^4.17.4 | ✖
[url](https://www.npmjs.com/package/url) | ^0.11.0 | ✖
[babel-cli](https://www.npmjs.com/package/babel-cli) | ^6.3.17 | ✔
[babel-eslint](https://www.npmjs.com/package/babel-eslint) | * | ✔
[babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) | * | ✔
[babel-tape-runner](https://www.npmjs.com/package/babel-tape-runner) | * | ✔
[babelify](https://www.npmjs.com/package/babelify) | 7.2.0 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.8 | ✔
[standard](https://www.npmjs.com/package/standard) | ^10.0.3 | ✔
[tap-spec](https://www.npmjs.com/package/tap-spec) | ^4.0.2 | ✔
[tape](https://www.npmjs.com/package/tape) | ^4.0.0 | ✔
[zuul](https://www.npmjs.com/package/zuul) | ^3.8.0 | ✔


## Contributing

Contributions welcome; Please submit all pull requests the against master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Konstantin Levin <yemsalat.me@gmail.com> http://github.com/YemSalat

## License

 - **MIT** : http://opensource.org/licenses/MIT
