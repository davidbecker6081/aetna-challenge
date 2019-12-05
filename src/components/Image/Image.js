import React, { Component } from 'react';

class Image extends Component {
  constructor() {
    super()
    this.state = {
      failed: false
    }
  }

  setError() {
    this.setState({ failed: true })
  }

  render() {
    const { src, fallbackSrc, title, alt, className } = this.props
    const { failed } = this.state
    return <img className={className} src={failed ? fallbackSrc : src} onError={() => this.setError()} alt={alt}/>
  }
}

export default Image
