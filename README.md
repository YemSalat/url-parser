# url-parser

Url parsing lib w/ handy methods

`parseUrl(urlString, options)`
Parses url to an object containing its properties

`updateUrl(urlString, params, options)`
Updates the source url with provided params;
 (should be an object similar to what is returned from parseUrl method

`updateUrlQuery(urlString, query, options)`
Will update the url query string with the values provided;
 In order to remove a parameter - supply it as undefined, e.g. `{ foo: undefined }`;
 For list of options see `query-string` package docs

`updateUrlHash(urlString, query, options)`
Will update the url hash with the value provided;
 Use an empty string to remove the hash

`serializeUrl(params)`
Create url from object with url props

### Options
`allowNoProtocol` - allows urls w/o specified protocol to be parsed
All options for `query-string` package are also supported for updateUrl method


## Install

`npm install --save url-parser`


## Scripts

 - **npm run test**
 - **npm run zuul**
 - **npm run build**
 - **npm run publish**
 - **npm run lint**

 [![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Author

Konstantin Levin <yemsalat.me@gmail.com> http://github.com/YemSalat

## License

 - **MIT** : http://opensource.org/licenses/MIT
