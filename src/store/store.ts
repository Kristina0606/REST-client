import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from './slices/isSignUpSlice';
import userReducer from './slices/userSlice';
import requestReducer from './slices/requestSlice';

export const store = configureStore({
  reducer: {
    isSignUp: signUpReducer,
    user: userReducer,
    request: requestReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
