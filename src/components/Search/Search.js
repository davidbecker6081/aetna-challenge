import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../../views/state/actions';
import { Route, withRouter } from 'react-router-dom';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            searchInput: ''
        }
    }

    clearInput() {
        this.setState({
            searchInput: ''
        })
    }

    onSearch(e, history) {
        e.preventDefault();
        const { searchInput } = this.state;
        const { searchMovies } = this.props;
        // validateInput()
        searchMovies(searchInput)
        this.props.history.push(`/?q=${searchInput}`)
        this.clearInput()
    }

    render() {
        const { searchInput } = this.state

        return (
            <form className='search' onSubmit={(e) => this.onSearch(e)}>
                <input
                    type="text"
                    name="search"
                    aria-label="Search"
                    onChange={(e) => this.setState({ searchInput: e.target.value })}
                    value={searchInput}
                />
                <button type="submit">Search</button>
            </form>
        )
    }
}

const mapDispatchtoProps = (dispatch) => ({
    searchMovies: (searchInput) => dispatch(searchMovies(searchInput))
})

export default withRouter(connect(null, mapDispatchtoProps)(Search));