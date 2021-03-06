import url from 'url'
import validUrl from 'valid-url'
import queryString from 'query-string'
import { pick, assign, isObject } from 'lodash'
import { allowedUrlProps } from './constants'

export function parseUrl (urlString, options = {}) {
  let urlStringForParsing = urlString
  // if allowNoProtocol is on - prepend string with 'http://'
  if (options.allowNoProtocol) {
    if (!/^[a-z]+:\/\//i.test(urlStringForParsing)) {
      urlStringForParsing = `http://${urlStringForParsing}`
    }
  }
  if (!validUrl.isUri(urlStringForParsing)) {
    throw new Error(`Invalid url: ${urlString.toString()}`)
  }
  return url.parse(urlStringForParsing, true, true)
}

export function updateUrl (urlString, params = {}, options = {}) {
  const parsedUrl = parseUrl(urlString, options)
  const filteredParams = pick(params, allowedUrlProps)
  // update query params
  if (filteredParams.query) {
    const queryParams = assign(parsedUrl.query, filteredParams.query)
    filteredParams.search = '?' + queryString.stringify(queryParams, options)
  }
  return url.format(assign(parsedUrl, filteredParams))
}

export function updateUrlQuery (urlString, query = {}, options = {}) {
  if (!isObject(query)) {
    throw new Error('Query must be an object')
  }
  return updateUrl(urlString, { query }, options)
}

export function updateUrlHash (urlString, hash = '', options = {}) {
  hash = hash.toString()
  return updateUrl(urlString, { hash }, options)
}

export function serializeUrl (params = {}) {
  return url.format(params)
}
