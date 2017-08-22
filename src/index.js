import url from 'url'
import validUrl from 'valid-url'
import queryString from 'query-string'
import { pick, assign } from 'lodash'
import { allowedUrlProps } from './constants'

export function parseUrl (urlString, options = {}) {
  let urlStringForParsing = urlString
  // if allowNoProtocol is on - prepend string with 'http://'
  if (options.allowNoProtocol) {
    if (! /^[a-z]+\:\/\//i.test(urlStringForParsing)) {
      urlStringForParsing = `http://${urlStringForParsing}`
    }
  }
  if (! validUrl.isUri(urlStringForParsing)) throw new Error(`Invalid url: ${urlString.toString()}`)
  return url.parse(urlStringForParsing, true, true)
}

export function updateUrl (urlString, params, options) {
  const parsedUrl = parseUrl(urlString, options)
  const filteredParams = pick(params, allowedUrlProps)
  return url.format(assign(parsedUrl, filteredParams))
}

console.log(parseUrl('https://hello.com:8080/a/b/c?foo=bar#hash'))
console.log(updateUrl('https://hello.com:8080/a/b/c?foo=bar#hash', {search: '?a=1'}))
console.log(updateUrl('https://hello.com:8080/a/b/c?foo=bar#hash', {query: {a:25}}))
