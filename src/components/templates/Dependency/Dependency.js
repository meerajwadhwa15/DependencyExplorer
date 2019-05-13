import React from 'react';
import Dependency from '../../organisams/Dependency';

export default (props) => (
    <div class="container">
        <h1>Dependency Explorer</h1>
        <h3>Package overview</h3>
        <Dependency params={props.match.params} />
    </div>
);