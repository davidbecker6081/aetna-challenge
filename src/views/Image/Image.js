import React, { Component } from 'react';

class Image extends Component {
  constructor() {
    super()
    this.state = {}
    this.fallback = () => {
      this.setState({ failed: true })
    }
  }

  render() {
    const { src, fallbackSrc, title } = this.props
    if (this.state.failed) {
      return <img src={fallbackSrc} alt={`Movie poster for ${title}`} className="movie-card--poster"/>
    }
    return <img src={src} onError={this.fallback} alt={`Movie poster for ${title}`} className="movie-card--poster"/>
  }
}

export default Image
