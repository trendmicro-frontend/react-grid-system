import cx from 'classnames';
import React, { PureComponent } from 'react';
import {
    LAYOUT_FLEXBOX,
    LAYOUT_FLOATS,
} from './constants';
import { ConfigurationContext, ScreenClassContext } from './context';
import styles from './index.styl';

class Row extends PureComponent {
    getStyle = ({ gutterWidth }) => {
        const style = {
            marginLeft: -(gutterWidth / 2),
            marginRight: -(gutterWidth / 2)
        };

        return style;
    };

    render() {
        const {
            className,
            style,
            children,
            ...props
        } = this.props;

        return (
            <ConfigurationContext.Consumer>
                {config => (
                    <ScreenClassContext.Consumer>
                        {screenClass => {
                            const { gutterWidth, layout } = config;
                            const rowStyle = this.getStyle({ gutterWidth });

                            return (
                                <div
                                    {...props}
                                    className={cx(className, {
                                        [styles.flexboxRow]: layout === LAYOUT_FLEXBOX,
                                        [styles.floatsRow]: layout === LAYOUT_FLOATS,
                                    })}
                                    style={{
                                        ...rowStyle,
                                        ...style,
                                    }}
                                >
                                    {children}
                                </div>
                            );
                        }}
                    </ScreenClassContext.Consumer>
                )}
            </ConfigurationContext.Consumer>
        );
    }
}

export default Row;
