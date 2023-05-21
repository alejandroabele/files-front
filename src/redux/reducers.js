// reducers.js
const initialState = {
    files: []
};

export const filesReducer = (state = initialState.files, action) => {
    switch (action.type) {
        case 'SET_FILES':
            return action.payload;
        default:
            return state;
    }
};