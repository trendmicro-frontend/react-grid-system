import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import throttle from 'lodash.throttle';
import { getScreenClass } from './utils';
import {
    LAYOUTS,
    SCREEN_CLASSES,
    DEFAULT_COLUMNS,
    DEFAULT_GUTTER_WIDTH,
    DEFAULT_LAYOUT
} from './constants';

const getWidth = (width, columns = DEFAULT_COLUMNS) => {
    if (width === 'auto') {
        return width;
    }

    width = parseInt(width, 10);

    if (Number.isNaN(width)) {
        return undefined;
    }

    columns = Math.floor(columns);
    if (columns <= 0) {
        columns = DEFAULT_COLUMNS;
    }

    const colWidth = Math.max(0, Math.min(columns, width));
    if (colWidth === columns) {
        return '100%';
    }
    return `${((100 / columns) * colWidth).toFixed(8) * 1}%`;
};

class Col extends PureComponent {
    static propTypes = {
        width: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),

        // The width of the column for screen class `xs`, between 0 and the number of columns.
        xs: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number,
            PropTypes.string
        ]),

        // The width of the column for screen class `sm`, between 0 and the number of columns.
        sm: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number,
            PropTypes.string
        ]),

        // The width of the column for screen class `md`, between 0 and the number of columns.
        md: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number,
            PropTypes.string
        ]),

        // The width of the column for screen class `lg`, between 0 and the number of columns.
        lg: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number,
            PropTypes.string
        ]),

        // The width of the column for screen class `xl`, between 0 and the number of columns.
        xl: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number,
            PropTypes.string
        ]),

        // The width of the column for screen class `xxl`, between 0 and the number of columns.
        xxl: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number,
            PropTypes.string
        ]),

        // The offset of this column for all screen classes.
        offset: PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number,
            xxl: PropTypes.number
        }),

        // The amount this column is pulled to the left for all screen classes.
        pull: PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number,
            xxl: PropTypes.number
        }),

        // The amount this column is pushed to the right for all screen classes.
        push: PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number,
            xxl: PropTypes.number
        })
    };

    static defaultProps = {
        width: null,
        xs: null,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        xxl: null,
        offset: {},
        push: {},
        pull: {}
    };

    static contextTypes = {
        breakpoints: PropTypes.arrayOf(PropTypes.number),
        columns: PropTypes.number,
        gutterWidth: PropTypes.number,
        layout: PropTypes.oneOf(LAYOUTS)
    };

    get columns() {
        if (this.context.columns > 0) {
            return this.context.columns;
        }
        return DEFAULT_COLUMNS;
    }

    get gutterWidth() {
        if (this.context.gutterWidth >= 0) {
            return this.context.gutterWidth;
        }
        return DEFAULT_GUTTER_WIDTH;
    }

    get layout() {
        return this.context.layout || DEFAULT_LAYOUT;
    }

    get floatStyle() {
        const columns = this.columns;
        const gutterWidth = this.gutterWidth;
        const style = {
            boxSizing: 'border-box',
            minHeight: '1px',
            position: 'relative',
            paddingLeft: gutterWidth / 2,
            paddingRight: gutterWidth / 2,
            width: '100%',
            marginLeft: 0,
            left: 'auto',
            right: 'auto',
            float: 'left'
        };

        if (this.props.width) {
            style.width = getWidth(this.props.width, columns) || style.width;
        }

        const width = {
            xs: this.props.xs,
            sm: this.props.sm,
            md: this.props.md,
            lg: this.props.lg,
            xl: this.props.xl,
            xxl: this.props.xxl
        };
        const { offset, push, pull } = this.props;
        const { screenClass } = this.state;
        const screenClasses = SCREEN_CLASSES;
        screenClasses.forEach((size, index) => {
            if (screenClasses.indexOf(screenClass) < index) {
                return;
            }

            style.width = getWidth(width[size], columns) || style.width;
            style.marginLeft = getWidth(offset[size], columns) || style.marginLeft;
            style.left = getWidth(push[size], columns) || style.left;
            style.right = getWidth(pull[size], columns) || style.right;
        });

        return style;
    }

    get flexStyle() {
        const columns = this.columns;
        const gutterWidth = this.gutterWidth;
        const style = {
            boxSizing: 'border-box',
            minHeight: '1px',
            position: 'relative',
            paddingLeft: gutterWidth / 2,
            paddingRight: gutterWidth / 2,
            width: '100%',
            marginLeft: 0,
            left: 'auto',
            right: 'auto',
            flexShrink: 0,
            maxWidth: '100%'
        };

        // <Col width={6}>col</Col>
        if (this.props.width) {
            style.flexBasis = getWidth(this.props.width, columns) || style.flexBasis;
            style.maxWidth = getWidth(this.props.width, columns) || style.maxWidth;
        }

        const width = {
            xs: this.props.xs,
            sm: this.props.sm,
            md: this.props.md,
            lg: this.props.lg,
            xl: this.props.xl,
            xxl: this.props.xxl
        };
        const { offset, push, pull } = this.props;
        const { screenClass } = this.state;
        const screenClasses = SCREEN_CLASSES;
        screenClasses.forEach((size, index) => {
            if (screenClasses.indexOf(screenClass) < index) {
                return;
            }

            if (width[size] === true) {
                // <Col sm>col</Col>
                style.flexBasis = 0;
                style.flexGrow = 1;
            } else if (width[size] === 'auto') {
                style.width = 'auto';
                style.flexBasis = 'auto';
                style.flexGrow = 0;
            } else {
                style.flexBasis = getWidth(width[size], columns) || style.flexBasis;
                style.maxWidth = getWidth(width[size], columns) || style.maxWidth;
            }
            style.marginLeft = getWidth(offset[size], columns) || style.marginLeft;
            style.left = getWidth(push[size], columns) || style.left;
            style.right = getWidth(pull[size], columns) || style.right;
        });

        const hasWidth = !!getWidth(this.props.width) || Object.keys(width).reduce((acc, cur) => acc || width[cur], false);
        if (!hasWidth) {
            style.flexBasis = 0;
            style.flexGrow = 1;
        }

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

    setScreenClass = () => {
        this.setState(state => ({
            screenClass: getScreenClass({ breakpoints: this.context.breakpoints })
        }));
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
            width, xs, sm, md, lg, xl, xxl, // eslint-disable-line
            offset, pull, push, // eslint-disable-line
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

export default Col;
