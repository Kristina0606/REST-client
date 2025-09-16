import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from './slices/isSignUpSlice';

export const store = configureStore({
  reducer: { isSignUp: signUpReducer },
});

export type RootState = ReturnType<typeof store.getState>;
