import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from '../../components/Image/Image';
import { CONSTANTS } from '../../constants/constants';

class MovieDetails extends Component {
  render() {
    return (
      <h1>Movie Details</h1>
    )
  }
}

const mapStateToProps = state => ({
  selectedMovie: state.main.selectedMovie
})

MovieDetails.propTypes = {

}

export default connect(mapStateToProps)(MovieDetails)
