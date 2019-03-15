import React, { useEffect, useState } from 'react';
import { Provider as GridSystemProvider } from '../../src';
import store, { initialState } from './store';

const Wrapper = ({ children }) => {
    const [gutterWidth, setGutterWidth] = useState(initialState.gutterWidth);

    useEffect(() => {
        const handleStateChange = () => {
            const { gutterWidth } = store.getState();
            setGutterWidth(gutterWidth);
        };

        const unsubscribe = store.subscribe(handleStateChange);

        return () => {
            unsubscribe(handleStateChange);
        };
    }, []); // Only run on mount and unmount

    return (
        <GridSystemProvider
            breakpoints={[576, 768, 992, 1200, 1600]}
            containerWidths={[540, 720, 960, 1140, 1440]}
            columns={12}
            gutterWidth={gutterWidth}
            layout="flexbox"
        >
            {children}
        </GridSystemProvider>
    );
};

export default Wrapper;
