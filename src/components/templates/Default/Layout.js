import React from 'react';
import Search from '../../organisams/Search';

export default ({ history }) => (
    <div className="container home-page">
        <h1>Dependency Explorer</h1>
        <Search history={history} />
    </div>
);