import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import SearchForm from '../../molecules/searchForm';
import { getSuggestions } from './Actions';


class Search extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <SearchForm {...this.props} />;
    }
}

let mapStateToProps = (state) => ({
    suggestions: state.searchReducers.suggestions,
});

let mapDispatchToProps = (dispatch) => ({
    fetchSuggestions: (searchString) => { dispatch(getSuggestions(searchString)) }
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);