import test from 'tape'
import {
  parseUrl,
  updateUrl,
  updateUrlQuery,
  updateUrlHash,
  serializeUrl
} from '../src'

let testUrl, parsedUrl, updatedUrl

test('should correctly parse url', (t) => {
  testUrl = 'https://hello.com:8080/a/b/c?foo=bar#hash'
  parsedUrl = parseUrl(testUrl)

  t.equal(parsedUrl.protocol, 'https:', 'protocol should be correct')
  t.equal(parsedUrl.host, 'hello.com:8080', 'host should be correct')
  t.equal(parsedUrl.port, '8080', 'port should be correct')
  t.equal(parsedUrl.hash, '#hash', 'hash should be correct')
  t.equal(parsedUrl.search, '?foo=bar', 'search should be correct')
  t.equal(parsedUrl.pathname, '/a/b/c', 'pathname should be correct')
  t.end()
})

test('should correctly parse url w/o protocol as http: when allowNoProtocol is on', (t) => {
  testUrl = 'hello.com/world'
  parsedUrl = parseUrl(testUrl, { allowNoProtocol: true })

  t.equal(parsedUrl.protocol, 'http:', 'protocol should be http:')
  t.equal(parsedUrl.pathname, '/world', 'pathname should be correct')
  t.end()
})

test('should update url correctly', (t) => {
  testUrl = 'https://hello.com/world'
  updatedUrl = updateUrl(testUrl, { protocol: 'http', hash: 'foobar' })

  t.equal(updatedUrl, 'http://hello.com/world#foobar', 'updated url has new protocol and hash')
  t.end()
})

test('should add query params to url correctly', (t) => {
  testUrl = 'http://hello.com/world?foo=bar'
  updatedUrl = updateUrl(testUrl, { protocol: 'https', query: { a: 'b' } })

  t.equal(updatedUrl, 'https://hello.com/world?a=b&foo=bar', 'updated url has new params in query string')
  t.end()
})

test('should remove query params that are set undefined correctly', (t) => {
  testUrl = 'http://hello.com/world?a=b&foo=bar'
  updatedUrl = updateUrl(testUrl, { protocol: 'https', query: { a: undefined } })

  t.equal(updatedUrl, 'https://hello.com/world?foo=bar', 'updated url has params removed in query string')
  t.end()
})

test('should update query correctly', (t) => {
  testUrl = 'http://hello.com/world?a=b&foo=bar'
  updatedUrl = updateUrlQuery(testUrl, { a: undefined, foo: 'foo' })

  t.equal(updatedUrl, 'http://hello.com/world?foo=foo', 'updated url has new params in query string')
  t.end()
})

test('should update hash correctly', (t) => {
  testUrl = 'http://hello.com/world#test'
  updatedUrl = updateUrlHash(testUrl, '#hello')
  t.equal(updatedUrl, 'http://hello.com/world#hello', 'updated url has new hash')

  updatedUrl = updateUrlHash(testUrl, '')
  t.equal(updatedUrl, 'http://hello.com/world', 'removed hash from url')
  t.end()
})

test('should serialize url with query params correctly', (t) => {
  const params = {
    protocol: 'https',
    host: 'hello.com',
    pathname: '/a/b',
    query: { foo: 'bar' }
  }
  testUrl = serializeUrl(params)
  t.equal(testUrl, 'https://hello.com/a/b?foo=bar', 'correctly serialized path and query')

  testUrl = serializeUrl()
  t.equal(testUrl, '', 'correctly serialized to empty string')
  t.end()
})

test('parseUrl should throw error on incorrect url', (t) => {
  testUrl = '{incorrect url}'
  try {
    parseUrl(testUrl)
  } catch (e) {
    t.equal(e.message, 'Invalid url: {incorrect url}', 'Throws an error when invalid url is provided')
  }
  t.end()
})
