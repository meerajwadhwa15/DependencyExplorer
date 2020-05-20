import React from 'react';
import Search from '../../organisams/Search';

export default ({ history }) => (
    <div className="container home-page">
        <h1>NPM Dependency Explorer</h1>
        <Search history={history} />
    </div>
);
