# url-parser

Url parsing lib w/ handy methods

`parseUrl(urlString, options)`
Parses url to an object containing its properties

`updateUrl(urlString, params, options)`
Updates the source url with provided params
(should be an object similar to what is returned from parseUrl method

You may also update the query string, this is done w/ query-string, so all of its rules and options apply

### Options
`allowNoProtocol` - allows urls w/o specified protocol to be parsed
All options for `query-string` package are also supported for updateUrl method


## Install

`npm install --save url-parser`


## Scripts

 - **npm run test** : `./node_modules/.bin/babel-tape-runner ./spec/**/*.spec.js | ./node_modules/.bin/tap-spec`
 - **npm run zuul** : `./node_modules/.bin/zuul --local --open -- spec/**/*.spec.js`
 - **npm run build** : `npm run test && npm run readme && ./node_modules/.bin/babel -d ./dist ./src`
 - **npm run publish** : `git push && git push --tags && npm publish`
 - **npm run lint** : `./node_modules/.bin/standard 'src/**/*.js' 'spec/**/*.js'`

 [![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Author

Konstantin Levin <yemsalat.me@gmail.com> http://github.com/YemSalat

## License

 - **MIT** : http://opensource.org/licenses/MIT
