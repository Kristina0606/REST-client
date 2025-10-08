import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from './slices/isSignUpSlice';
import userReducer from './slices/userSlice';
import requestReducer from './slices/requestSlice';
import editorReducer from './slices/editorSlice';
import paramsReducer from './slices/paramsSlice';
import headersReducer from './slices/headersSlice';

export const store = configureStore({
  reducer: {
    isSignUp: signUpReducer,
    user: userReducer,
    request: requestReducer,
    editor: editorReducer,
    params: paramsReducer,
    headers: headersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
