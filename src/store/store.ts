import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from './slices/isSignUpSlice';
import userReducer from './slices/userSlice';
import requestReducer from './slices/requestSlice';
import editorReducer from './slices/editorSlice';

export const store = configureStore({
  reducer: {
    isSignUp: signUpReducer,
    user: userReducer,
    request: requestReducer,
    editor: editorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
