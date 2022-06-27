import { configureStore } from '@reduxjs/toolkit';
import reducer from './slice';

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;