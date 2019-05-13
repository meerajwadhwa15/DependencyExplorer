import React from 'react';
import './Button.css';

export default ({ children, others }) => (
    <button {...others}>{children}</button>
);