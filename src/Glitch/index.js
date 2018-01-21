import React, { Component } from 'react'
import GlitchBoy from './GlitchBoy'
import init, { cancel } from './initGlitch'

class Glitch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 502,
      height: 476
    }

  }

  componentDidMount () {
    const { canvas } = this.refs
    const { element } = this.props

    cancel()

    element.addEventListener('load', ev => {
      const { width, height } = ev.target

      this.setState({
        width,
        height
      })

      init(canvas, ev.target)
    })

    if(element.complete && element.naturalWidth !== 0) {
      init(canvas, element)
    }
  }

  render() {
    return (
      <canvas
        ref='canvas'
        width={this.state.width}
        height={this.state.height}
        style={{
          height: this.state.height,
          width: this.state.width,
          pointerEvents: 'none',
        }}
        {...this.props}
        >
      </canvas>
    )
  }
}

export default Glitch

export { GlitchBoy, init }
