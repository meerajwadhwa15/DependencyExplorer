import React from 'react';
import Anchor from './../../atoms/Anchor';

export default ({ packageInformation }) => (
    <div className="col-md-6 col-xs-12">
        <h2>
            <Anchor target="__blank" href={packageInformation.homepage}>
                {`${packageInformation.name}@${packageInformation.version}`}
            </Anchor>
        </h2>
        <p>{packageInformation.description}</p>
    </div>
);