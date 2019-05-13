import React from 'react';

export default ({ children, ...others }) => (
    <a {...others}>{children}</a>
);