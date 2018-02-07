import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import {
    LAYOUTS,
    DEFAULT_GUTTER_WIDTH,
    DEFAULT_LAYOUT
} from './constants';

class Row extends PureComponent {
    static propTypes = {
        // The horizontal padding (called gutter) between two columns.
        gutterWidth: PropTypes.number,

        // The grid system layout. One of: 'float', 'flex'
        layout: PropTypes.oneOf(LAYOUTS)
    };

    static contextTypes = {
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
        return this.props.layout || this.context.layout || DEFAULT_LAYOUT;
    }

    get floatStyle() {
        const gutterWidth = this.gutterWidth;
        const style = {
            marginLeft: -(gutterWidth / 2),
            marginRight: -(gutterWidth / 2)
        };

        return style;
    }

    get flexStyle() {
        const gutterWidth = this.gutterWidth;
        const style = {
            marginLeft: -(gutterWidth / 2),
            marginRight: -(gutterWidth / 2),
            display: 'flex',
            flexWrap: 'wrap',
            flexGrow: 0,
            flexShrink: 0
        };

        return style;
    }

    get style() {
        const layout = this.layout;
        if (layout === 'float') {
            return this.floatStyle;
        }
        if (layout === 'flex') {
            return this.flexStyle;
        }
        return this.floatStyle;
    }

    render() {
        const {
            gutterWidth, // eslint-disable-line
            layout, // eslint-disable-line
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

export default Row;
