import ensureArray from 'ensure-array';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import throttle from 'lodash.throttle';
import { getScreenClass } from './utils';
import {
    LAYOUTS,
    DEFAULT_CONTAINER_WIDTHS,
    DEFAULT_GUTTER_WIDTH
} from './constants';

class Container extends PureComponent {
    static propTypes = {
        // True makes the container full-width, false fixed-width.
        fluid: PropTypes.bool,

        // This is in combination with fluid enabled.
        // True makes container fluid only in xs, not present means fluid everywhere.
        xs: PropTypes.bool,

        // This is in combination with fluid enabled.
        // True makes container fluid only in sm, not present means fluid everywhere.
        sm: PropTypes.bool,

        // This is in combination with fluid enabled.
        // True makes container fluid only in md, not present means fluid everywhere.
        md: PropTypes.bool,

        // This is in combination with fluid enabled.
        // True makes container fluid only in lg, not present means fluid everywhere.
        lg: PropTypes.bool,

        // This is in combination with fluid enabled.
        // True makes container fluid only in xl, not present means fluid everywhere.
        xl: PropTypes.bool,

        // This is in combination with fluid enabled.
        // True makes container fluid only in xxl, not present means fluid everywhere.
        xxl: PropTypes.bool,

        // The horizontal padding (called gutter) between two columns. A gutter width of 30 means 15px on each side of a column.
        gutterWidth: PropTypes.number,

        // The grid system layout. One of: 'float', 'flex'
        layout: PropTypes.oneOf(LAYOUTS),

        // A callback fired when the resize event occurs.
        onResize: PropTypes.func
    };

    static defaultProps = {
        fluid: false,
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xl: false,
        xxl: false
    };

    static contextTypes = {
        breakpoints: PropTypes.arrayOf(PropTypes.number),
        containerWidths: PropTypes.arrayOf(PropTypes.number),
        gutterWidth: PropTypes.number,
        layout: PropTypes.oneOf(LAYOUTS)
    };

    static childContextTypes = {
        gutterWidth: PropTypes.number,
        layout: PropTypes.oneOf(LAYOUTS)
    };

    getChildContext = () => ({
        gutterWidth: this.gutterWidth,
        layout: this.layout
    });

    get gutterWidth() {
        if (this.props.gutterWidth >= 0) {
            return this.props.gutterWidth;
        }
        if (this.context.gutterWidth >= 0) {
            return this.context.gutterWidth;
        }
        return DEFAULT_GUTTER_WIDTH;
    }

    get layout() {
        return this.props.layout || this.context.layout;
    }

    get style() {
        const gutterWidth = this.gutterWidth;
        const style = {
            boxSizing: 'border-box',
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: gutterWidth / 2,
            paddingRight: gutterWidth / 2
        };

        const { fluid, xs, sm, md, lg, xl, xxl } = this.props;
        if (fluid && (!sm && !md && !lg && !xl && !xxl)) {
            return style;
        }

        const { screenClass } = this.state;
        const containerWidths = (ensureArray(this.context.containerWidths).length > 0)
            ? ensureArray(this.context.containerWidths)
            : DEFAULT_CONTAINER_WIDTHS;

        if (screenClass === 'sm' && (containerWidths[0] > 0) && (!sm && !xs)) {
            style.maxWidth = `${containerWidths[0]}px`;
        }
        if (screenClass === 'md' && (containerWidths[1] > 0) && !md) {
            style.maxWidth = `${containerWidths[1]}px`;
        }
        if (screenClass === 'lg' && (containerWidths[2] > 0) && !lg) {
            style.maxWidth = `${containerWidths[2]}px`;
        }
        if (screenClass === 'xl' && (containerWidths[3] > 0) && !xl) {
            style.maxWidth = `${containerWidths[3]}px`;
        }
        if (screenClass === 'xxl' && (containerWidths[4] > 0) && !xxl) {
            style.maxWidth = `${containerWidths[4]}px`;
        }

        return style;
    }

    setScreenClass = () => {
        this.setState(state => ({
            screenClass: getScreenClass({ breakpoints: this.context.breakpoints })
        }), () => {
            if (typeof this.props.onResize === 'function') {
                this.props.onResize({ screenClass: this.state.screenClass });
            }
        });
    };

    componentWillMount() {
        this.setScreenClass();
    }
    componentDidMount() {
        this.eventListener = throttle(this.setScreenClass, Math.floor(1000 / 60)); // 60Hz
        window.addEventListener('resize', this.eventListener);
    }
    componentWillUnmount() {
        if (this.eventListener) {
            this.eventListener.cancel();
            window.removeEventListener('resize', this.eventListener);
            this.eventListener = null;
        }
    }
    render() {
        const {
            fluid, // eslint-disable-line
            xs, sm, md, lg, xl, xxl, // eslint-disable-line
            gutterWidth, // eslint-disable-line
            layout, // eslint-disable-line
            onResize, // eslint-disable-line
            style,
            children,
            ...props
        } = this.props;

        return (
            <div
                {...props}
                style={{
                    ...this.style,
                    ...style
                }}
            >
                {children}
            </div>
        );
    }
}

export default Container;
