import { createSlice } from '@reduxjs/toolkit';

const createCv = createSlice({
    name: 'createCv',
    initialState: {
        cvValue: []
    },
    reducers: {
        getValueInForm: (state, action) => {
            state.cvValue = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { getValueInForm } = createCv.actions;

export default createCv.reducer;
