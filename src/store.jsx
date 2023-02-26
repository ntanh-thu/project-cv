import { configureStore } from '@reduxjs/toolkit';
import createCv from './reduxSlice/cvFormSlice';

export default configureStore({
    reducer: {
        createCv
    }
});
