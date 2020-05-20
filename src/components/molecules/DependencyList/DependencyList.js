import React, { Fragment } from 'react';
import Anchor from './../../atoms/Anchor';
import './DependencyList.css';

export default ({ dependencies }) => (
    <ol>
        {dependencies.map((dependency, i) => (<li key={`dependency-${i}`}>
            <Fragment>
                <Anchor target="__blank" title={dependency.name} href={dependency.homepage}>{dependency.name}</Anchor>
                <p className="description">{dependency.description}</p>
            </Fragment>
        </li>))}
    </ol>
);
