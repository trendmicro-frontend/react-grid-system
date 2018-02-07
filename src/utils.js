import ensureArray from 'ensure-array';
import {
    DEFAULT_BREAKPOINTS
} from './constants';

export const getViewportWidth = () => {
    if (typeof window !== 'undefined' && window.innerWidth) {
        return window.innerWidth;
    }
    return null;
};

export const getScreenClass = ({ breakpoints }) => {
    breakpoints = ensureArray(breakpoints);
    if (breakpoints.length === 0) {
        breakpoints = DEFAULT_BREAKPOINTS;
    }

    let screenClass = 'xs';

    const viewportWidth = getViewportWidth();

    if (breakpoints[0] && (viewportWidth >= breakpoints[0])) {
        screenClass = 'sm';
    }
    if (breakpoints[1] && (viewportWidth >= breakpoints[1])) {
        screenClass = 'md';
    }
    if (breakpoints[2] && (viewportWidth >= breakpoints[2])) {
        screenClass = 'lg';
    }
    if (breakpoints[3] && (viewportWidth >= breakpoints[3])) {
        screenClass = 'xl';
    }
    if (breakpoints[4] && (viewportWidth >= breakpoints[4])) {
        screenClass = 'xxl';
    }

    return screenClass;
};
