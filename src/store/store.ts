import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from './slices/isSignUpSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: { isSignUp: signUpReducer, user: userReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
