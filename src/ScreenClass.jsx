import PropTypes from 'prop-types';
import React from 'react';
import { ScreenClassContext } from './context';

const ScreenClass = ({ render, children }) => (
    <ScreenClassContext.Consumer>
        {screenClass => {
            if (typeof children === 'function') {
                return children(screenClass);
            }

            if (typeof render === 'function') {
                return render(screenClass);
            }

            return children;
        }}
    </ScreenClassContext.Consumer>
);

ScreenClass.propTypes = {
    render: PropTypes.func
};

export default ScreenClass;
