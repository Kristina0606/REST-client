import { createSlice } from '@reduxjs/toolkit';

const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {
    isSignUp: false,
  },
  reducers: {
    isSignUpToggle(state) {
      state.isSignUp = !state.isSignUp;
    },
    setStateTrue(state) {
      state.isSignUp = true;
    },
  },
});

export const { isSignUpToggle } = signUpSlice.actions;

export default signUpSlice.reducer;
