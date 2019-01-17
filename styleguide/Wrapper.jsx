import React from 'react';
import { Provider } from '../src';

const Wrapper = (props) => (
    <Provider
        breakpoints={[576, 768, 992, 1200, 1600]}
        containerWidths={[540, 720, 960, 1140, 1440]}
        gutterWidth={30}
    >
        {props.children}
    </Provider>
);

export default Wrapper;
