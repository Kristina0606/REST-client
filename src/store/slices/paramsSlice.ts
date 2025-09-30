import { createSlice } from '@reduxjs/toolkit';
import type { Param, ParamsState } from '../../types/interfaces';

const initialState: ParamsState = {
  params: [],
  paramsForUrl: [],
};

const paramsSlice = createSlice({
  name: 'param',
  initialState,
  reducers: {
    setParams(state, action) {
      state.params = [...action.payload];
      state.paramsForUrl = [
        ...action.payload.map((param: Param) => `${param.key}=${param.value}`),
      ];
    },
  },
});

export const { setParams } = paramsSlice.actions;
export default paramsSlice.reducer;
