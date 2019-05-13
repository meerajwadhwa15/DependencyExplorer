import React, { PureComponent } from 'react';
import Autocomplete from 'react-autocomplete';
import Button from './../../atoms/Button';
import './searchForm.css';


class SearchForm extends PureComponent {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillMount() {
        this.setState({
            value: '',
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/dependency/' + this.state.value);
    }

    handleSearchChange = (event) => {
        this.setState({
            value: event.target.value,
        });
        if (this.props.fetchSuggestions) {
            this.props.fetchSuggestions(event.target.value);
        }
    }

    handleSearchSelect = (value) => {
        this.setState({
            value,
        });
    }

    render() {
        const { value } = this.state;
        let { suggestions } = this.props;

        if (!suggestions) {
            suggestions = [];
        }

        return (<form onSubmit={this.handleSubmit}>

            <Autocomplete
                getItemValue={(item) => item.name}
                items={suggestions}
                renderItem={(item, isHighlighted) =>
                    <div className="autocomplete-item" style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                        <div>{item.name}</div>
                        <p>{item.description}</p>
                    </div>
                }
                value={value}
                inputProps={
                    { placeholder: "Search for NPM Package" }
                }
                onChange={this.handleSearchChange}
                onSelect={this.handleSearchSelect}
            />
            <Button>
                Search
            </Button>
        </form>);
    }

};

export default SearchForm;