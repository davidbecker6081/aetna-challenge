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
    const { src, fallbackSrc, title } = this.props
    const { failed } = this.state
    return <img src={failed ? fallbackSrc : src} onError={() => this.setError()} alt={`Movie poster for ${title}`} className="movie-card--poster"/>
  }
}

export default Image
