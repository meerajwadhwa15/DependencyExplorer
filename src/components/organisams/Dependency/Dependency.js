import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { getDependency } from './Actions';
import PackageInfo from './../../molecules/PackageInfo';
import DependencyList from './../../molecules/DependencyList';
import './Dependency.css';

class Dependency extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchDependency(this.props.params.searchString);
    }

    render() {
        const { dependencies, packageInformation } = this.props;

        return <div className="dependency-page">
            {packageInformation ?
                <PackageInfo packageInformation={packageInformation} /> : <div className="col-md-6 col-xs-12">Loading...</div>}
            {dependencies && dependencies.length ?
                (<div className="col-md-6 col-xs-12">
                    <p>Total dependencies: <strong>{dependencies.length}</strong></p>
                    <DependencyList key={dependencies.name} dependencies={dependencies} />
                </div>)
                : <div className="col-md-6 col-xs-12">Loading...</div>}
        </div>
    }
}

let mapStateToProps = (state) => ({
    dependencies: state.dependencyReducers.dependencies,
    packageInformation: state.dependencyReducers.package,
});

let mapDispatchToProps = (dispatch) => ({
    fetchDependency: (searchString) => { dispatch(getDependency(searchString)) }
});


export default connect(mapStateToProps, mapDispatchToProps)(Dependency);
