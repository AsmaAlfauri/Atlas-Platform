import { configureStore } from '@reduxjs/toolkit';

// slices placeholders
const dummyReducer = (state = {}) => state;

export const store = configureStore({
  reducer: {
    tenant: dummyReducer,
    user: dummyReducer,
    permission: dummyReducer,
    feature: dummyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
