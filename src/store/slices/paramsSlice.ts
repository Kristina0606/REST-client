import { createSlice } from '@reduxjs/toolkit';
import type { ParamsState } from '../../types/interfaces';

const initialState: ParamsState = {
  params: [],
};

const paramsSlice = createSlice({
  name: 'param',
  initialState,
  reducers: {
    setParams(state, action) {
      state.params = [...action.payload];
      console.log(state.params);
    },
  },
});

export const { setParams } = paramsSlice.actions;
export default paramsSlice.reducer;
