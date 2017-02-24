import * as TestUtils from 'inferno-test-utils'
import * as test from 'tape'

test('dummy', (t) => {
  const vNodeTree = <div className="foo">Abc</div>
  const renderedTree = TestUtils.renderIntoDocument(vNodeTree)
  const result1 = TestUtils.findRenderedDOMElementWithClass(renderedTree, 'foo')
  const result2 = TestUtils.findRenderedDOMElementWithTag(renderedTree, 'div')
  t.notEqual(renderedTree, undefined, 'renderedTree is not undefined')
  t.equal(result1.className, 'foo', 'result1 has className of "foo"')
  t.equal(result1, result2, 'result1 === result2')
  t.end()
})
