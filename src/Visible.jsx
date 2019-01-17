import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { ScreenClassContext } from './context';

const visible = (screenClass, { xs, sm, md, lg, xl, xxl }) => {
    if (screenClass === 'xxl') {
        return !!xxl;
    }
    if (screenClass === 'xl') {
        return !!xl;
    }
    if (screenClass === 'lg') {
        return !!lg;
    }
    if (screenClass === 'md') {
        return !!md;
    }
    if (screenClass === 'sm') {
        return !!sm;
    }
    if (screenClass === 'xs') {
        return !!xs;
    }
    return true; // Defaults to true
};

class Visible extends PureComponent {
    static propTypes = {
        // Visible on extra small devices.
        xs: PropTypes.bool,

        // Visible on small devices.
        sm: PropTypes.bool,

        // Visible on medimum devices.
        md: PropTypes.bool,

        // Visible on large devices.
        lg: PropTypes.bool,

        // Visible on extra large devices.
        xl: PropTypes.bool,

        // Visible on double extra large devices.
        xxl: PropTypes.bool,

        // A callback fired when the resize event occurs.
        onResize: PropTypes.func
    };

    static defaultProps = {
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xl: false,
        xxl: false,
    };

    render() {
        const {
            xs, sm, md, lg, xl, xxl,
        } = this.props;

        return (
            <ScreenClassContext.Consumer>
                {screenClass => {
                    if (visible(screenClass, { xs, sm, md, lg, xl, xxl })) {
                        return this.props.children;
                    }

                    return null;
                }}
            </ScreenClassContext.Consumer>
        );
    }
}

export default Visible;
