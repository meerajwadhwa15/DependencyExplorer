import React from 'react';
import Dependency from '../../organisams/Dependency';

export default (props) => (
    <div className="container">
        <h1>NPM Dependency Explorer</h1>
        <h3>Package overview</h3>
        <Dependency params={props.match.params} />
    </div>
);
