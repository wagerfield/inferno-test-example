import Component from 'inferno-component'
import TestUtils from 'inferno-test-utils'
import test from 'tape'

test('renderIntoDocument', (t) => {
  const vNodeTree = <div className="foo">Abc</div>
  const renderedTree = TestUtils.renderIntoDocument(vNodeTree)
  const result1 = TestUtils.findRenderedDOMElementWithClass(renderedTree, 'foo')
  const result2 = TestUtils.findRenderedDOMElementWithTag(renderedTree, 'div')
  t.notEqual(renderedTree, undefined, 'renderedTree is not undefined')
  t.equal(result1.className, 'foo', 'result1 has className of "foo"')
  t.equal(result1, result2, 'result1 === result2')
  t.end()
})

test('setState', (t) => {
  
  class TestComponent extends Component<any, any> {
    constructor(props, context) {
      super(props, context)
      this.state = {
        className: props.className
      }
    }
    render() {
      return <div className={this.state.className}/>
    }
  }

  let componentRef = null
  const vNodeTree = <TestComponent className="foo" ref={ref => componentRef = ref}/>
  const renderedTree = TestUtils.renderIntoDocument(vNodeTree)

  const result1 = TestUtils.findRenderedDOMElementWithClass(renderedTree, 'foo')
  t.equal(result1.className, 'foo', 'result1 has className of "foo"')

  componentRef.setState({ className: 'bar' })

  const result2 = TestUtils.findRenderedDOMElementWithClass(renderedTree, 'foo')
  t.equal(result2, undefined, 'result2 does not have className of "foo"')

  const result3 = TestUtils.findRenderedDOMElementWithClass(renderedTree, 'bar')
  t.equal(result3.className, 'bar', 'result3 has className of "bar"')

  t.end()
})
