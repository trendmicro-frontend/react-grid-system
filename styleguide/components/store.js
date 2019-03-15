import { createStore } from 'redux';

const initialState = {
    gutterWidth: 24
};

const reducer = (state = initialState, action) => {
    if (action.type === 'SET_GUTTER_WIDTH') {
        const gutterWidth = action.payload;
        return { gutterWidth };
    }

    return state;
};

const store = createStore(reducer, initialState);

export { initialState };
export default store;
