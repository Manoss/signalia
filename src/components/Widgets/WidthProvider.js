import ReactDOM from 'react-dom'
import React, { createRef } from 'react'

/*
 * A simple HOC that provides facility for listening to container resizes.
 */
export default function WidthProvider(ComposedComponent) {
  return class WidthProvider extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        width: 1280
      }

      this.mounted = false
    }

    nodeRef = createRef(null);

    componentDidMount() {
      this.mounted = true

      window.addEventListener('resize', this.onWindowResize)
      this.onWindowResize()
    }

    componentWillUnmount() {
      this.mounted = false
      window.removeEventListener('resize', this.onWindowResize)
    }

    onWindowResize = () => {
      if (!this.mounted) return
      // eslint-disable-next-line
      const node = ReactDOM.findDOMNode(this) // Flow casts this to Text | Element
      //const node = this.nodeRef.current
      if (node instanceof HTMLElement) this.setState({ width: node.offsetWidth })
    }

    render() {
      const { measureBeforeMount = false, ...rest } = this.props
      if (measureBeforeMount && !this.mounted) {
        return <div className={this.props.className} style={this.props.style} />
      }

      return (
        <ComposedComponent
          {...rest}
          {...{ width: this.state.width, rowHeight: this.state.width / rest.cols - 10 }}
        />
      )
    }
  }
}
