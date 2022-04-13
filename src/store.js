import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import { BookSlice } from './slices/BookSlice';

const store = configureStore({
    reducer: {
        'book': BookSlice.reducer
    },
    middleware: [
        ...getDefaultMiddleware({ serializableCheck: false }),
        createLogger()
    ],
    devTools: true
});

export default store;