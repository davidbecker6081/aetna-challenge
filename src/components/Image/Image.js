import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Image
