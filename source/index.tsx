import * as TestUtils from 'inferno-test-utils'
import * as test from 'tape'

test('dummy', (t) => {
  const vNodeTree = <div className="foo">Abc</div>
  const renderedTree = TestUtils.renderIntoDocument(vNodeTree)
  const result1 = TestUtils.findRenderedDOMElementWithClass(renderedTree, 'foo')
  const result2 = TestUtils.findRenderedDOMElementWithTag(renderedTree, 'div')
  t.equal(result1 instanceof HTMLElement, true)
  t.equal(result1, result2)
  t.end()
})
