import test from 'tape'
import { parseUrl, updateUrl } from '../src'

let testUrl, parsedUrl, updatedUrl;

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

test('should throw error on incorrect url', (t) => {
  testUrl = '{incorrect url}'
  try {
    parseUrl(testUrl)
  } catch (e) {
    t.equal(e.message, 'Invalid url: {incorrect url}', 'Throws an error when invalid url is provided')
  }
  t.end()
})
